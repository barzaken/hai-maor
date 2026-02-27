import Link from 'next/link';

export default function CookiePolicyPage() {
  return (
    <main dir="rtl" className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <p className="text-sm text-muted-foreground">מדיניות עוגיות</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">מדיניות עוגיות (Cookies)</h1>
      <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
        <p>
          אני עשוי להשתמש בקובצי Cookies לצורך תפעול תקין של האתר, שיפור חוויית המשתמש והבנת
          שימושים כלליים באתר.
        </p>
        <p>
          ניתן לנהל או למחוק Cookies דרך הגדרות הדפדפן. חסימה של Cookies מסוימים עלולה להשפיע על
          זמינות חלק מהפונקציות באתר.
        </p>
        <p>
          בהמשך גלישה באתר, אתם מאשרים שימוש סביר ב-Cookies בהתאם למדיניות זו.
        </p>
      </div>
      <Link href="/" className="mt-8 inline-flex text-sm font-medium underline underline-offset-4">
        חזרה לעמוד הראשי
      </Link>
    </main>
  );
}
