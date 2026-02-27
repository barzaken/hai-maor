import { NextRequest, NextResponse } from 'next/server';

type FormPayload = {
  email?: string;
  fullName?: string;
  message?: string;
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
  const message = payload.message?.trim();
  const phone = payload.phone?.trim() || null;

  if (!fullName || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const webhookUrl = process.env.N8N_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json({ error: 'Webhook is not configured.' }, { status: 500 });
  }

  try {
    const upstreamResponse = await fetch(webhookUrl, {
      body: JSON.stringify({
        email,
        fullName,
        message,
        phone,
        submittedAt: new Date().toISOString(),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    if (!upstreamResponse.ok) {
      return NextResponse.json({ error: 'Webhook request failed.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: 'Unable to submit form.' }, { status: 502 });
  }
}
