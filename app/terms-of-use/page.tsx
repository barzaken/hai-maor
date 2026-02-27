import Link from 'next/link';

export default function TermsOfUsePage() {
  return (
    <main dir="rtl" className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <p className="text-sm text-muted-foreground">תנאי שימוש</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">תנאי שימוש באתר</h1>
      <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
        <p>
          השימוש באתר כפוף לתנאים אלו. גלישה באתר מהווה הסכמה לתנאי השימוש, למדיניות הפרטיות
          ולמדיניות העוגיות.
        </p>
        <p>
          התכנים באתר נועדו למידע כללי בלבד ואינם מהווים התחייבות לתוצאה מסוימת. ייתכנו עדכונים
          ושינויים בתוכן, בשירותים ובתמחור לפי שיקול דעתי.
        </p>
        <p>
          חל איסור להעתיק, להפיץ או להשתמש בתכני האתר ללא אישור מראש ובכתב מבעל הזכויות.
        </p>
      </div>
      <Link href="/" className="mt-8 inline-flex text-sm font-medium underline underline-offset-4">
        חזרה לעמוד הראשי
      </Link>
    </main>
  );
}
