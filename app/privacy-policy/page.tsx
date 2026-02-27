import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <main dir="rtl" className="mx-auto max-w-3xl px-4 py-12 md:py-16">
      <p className="text-sm text-muted-foreground">מדיניות פרטיות</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight">מדיניות פרטיות</h1>
      <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground md:text-base">
        <p>
          אני מכבד את פרטיות המשתמשים באתר. הנתונים שנמסרים בטופס יצירת קשר נשמרים לצורך
          חזרה לפונה, תיאום שיחה ושיפור השירות בלבד.
        </p>
        <p>
          לא אבצע מכירה או העברה של מידע אישי לצדדים שלישיים ללא הסכמה מפורשת, למעט מקרים
          הנדרשים על פי חוק.
        </p>
        <p>
          ניתן לפנות אליי בכל עת לבקשה לעיון, עדכון או מחיקה של מידע אישי שנשמר בעקבות פנייה
          דרך האתר.
        </p>
      </div>
      <Link href="/" className="mt-8 inline-flex text-sm font-medium underline underline-offset-4">
        חזרה לעמוד הראשי
      </Link>
    </main>
  );
}
