import { NextRequest, NextResponse } from 'next/server';

const FIREBERRY_ACCOUNT_URL = 'https://api.fireberry.com/api/record/Account';

type FireberryAccountRecord = {
  accountname: string;
  description: string;
  emailaddress1: string;
  originatingleadcode: string;
  statuscode: number;
  telephone1: string;
};

type FormPayload = {
  description?: string;
  email?: string;
  fullName?: string;
  phone?: string;
};

export async function POST(request: NextRequest) {
  let payload: FormPayload;

  try {
    payload = (await request.json()) as FormPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const fullName = payload.fullName?.trim();
  const email = payload.email?.trim();
  const phone = payload.phone?.trim();
  const description = payload.description?.trim();

  if (!fullName || !email || !phone || !description) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const apiKey = process.env.FIREBERRY_API_KEY?.trim();
  if (!apiKey) {
    return NextResponse.json(
      {
        error: 'CRM integration is not configured.',
        ...(process.env.NODE_ENV === 'development' && {
          hint: 'Set FIREBERRY_API_KEY in .env.local, save the file, then restart the dev server so Next.js reloads env.',
        }),
      },
      { status: 500 },
    );
  }

  const record: FireberryAccountRecord = {
    accountname: fullName,
    emailaddress1: email,
    telephone1: phone,
    description,
    statuscode: 6,
    originatingleadcode: '1',
  };

  try {
    const upstreamResponse = await fetch(FIREBERRY_ACCOUNT_URL, {
      body: JSON.stringify(record),
      headers: {
        'Content-Type': 'application/json',
        tokenid: apiKey,
      },
      method: 'POST',
    });

    const raw = await upstreamResponse.text();
    type FireberryJson = {
      Message?: string;
      message?: string;
      success?: boolean;
    };
    let parsed: FireberryJson | undefined;
    try {
      parsed = JSON.parse(raw) as FireberryJson;
    } catch {
      /* Fireberry may return non-JSON on some errors */
    }

    if (!upstreamResponse.ok) {
      const detail =
        parsed?.Message ||
        parsed?.message ||
        (raw ? raw.slice(0, 200) : upstreamResponse.statusText);
      console.error('[form] Fireberry error', upstreamResponse.status, detail);
      return NextResponse.json(
        {
          error: 'CRM request failed.',
          ...(process.env.NODE_ENV === 'development' &&
            detail && {
              hint: String(detail).slice(0, 400),
            }),
        },
        { status: 502 },
      );
    }

    if (parsed?.success === false) {
      const detail = parsed.Message || parsed.message || 'Unknown CRM error';
      console.error('[form] Fireberry rejected', detail);
      return NextResponse.json(
        {
          error: 'CRM request failed.',
          ...(process.env.NODE_ENV === 'development' && {
            hint: String(detail).slice(0, 400),
          }),
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error('[form] Fireberry fetch failed', err);
    return NextResponse.json({ error: 'Unable to submit form.' }, { status: 502 });
  }
}
