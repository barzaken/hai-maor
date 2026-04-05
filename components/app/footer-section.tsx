import Link from 'next/link';
import { Logo } from '@/components/app/logo';

export function FooterSection() {
  return (
    <footer dir="rtl" className="relative border-t border-white/5 bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo className="h-10 w-auto opacity-80" />
            <p className="text-sm text-gray-400">
              במה עסקית מאת חי מאור - אני מביא את הידע והנסיון שלי מעולם המשחק אל העולם העסקי.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="#home" className="text-sm font-medium text-gray-400 hover:text-[#f0c246] transition-colors">
              דף הבית
            </Link>
            <Link href="#about" className="text-sm font-medium text-gray-400 hover:text-[#f0c246] transition-colors">
              עליי
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-400 hover:text-[#f0c246] transition-colors">
              יצירת קשר
            </Link>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-sm font-medium text-gray-400 hover:text-[#f0c246] transition-colors">
              אינסטגרם
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-sm font-medium text-gray-400 hover:text-[#f0c246] transition-colors">
              לינקדאין
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} חי מאור. כל הזכויות שמורות.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">
              מדיניות פרטיות
            </Link>
            <Link href="/terms-of-use" className="hover:text-gray-300 transition-colors">
              תנאי שימוש
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
