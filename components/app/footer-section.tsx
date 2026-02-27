import Link from 'next/link';
import Container from '@/components/ui/container';
import { Logo } from '@/components/app/logo';

export function FooterSection() {
  return (
    <footer dir="rtl" className="relative py-8 md:py-10">
      <Container className="flex flex-col gap-5 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <Logo className="h-16 w-auto" />
          <p>חי מאור . במה עסקית למנהלים, יזמים וצוותים</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="#contact" className="underline underline-offset-4">
            יצירת קשר
          </Link>
          <Link href="#" className="underline underline-offset-4">
            אינסטגרם
          </Link>
          <Link href="#" className="underline underline-offset-4">
            לינקדאין
          </Link>
          <Link href="/privacy-policy" className="underline underline-offset-4">
            מדיניות פרטיות
          </Link>
          <Link href="/terms-of-use" className="underline underline-offset-4">
            תנאי שימוש
          </Link>
          <Link href="/cookie-policy" className="underline underline-offset-4">
            מדיניות עוגיות
          </Link>
        </div>
      </Container>
    </footer>
  );
}
