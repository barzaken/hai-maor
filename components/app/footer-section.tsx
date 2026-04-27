import Link from 'next/link';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { Logo } from '@/components/app/logo';

const socialLinks = [
  {
    href: 'https://www.youtube.com/channel/UCR9XY7Lzx3xfzoNJpNcRdQQ',
    label: 'עמוד היוטיוב של חי מאור',
    Icon: Youtube,
  },
  {
    href: 'https://www.facebook.com/hai.maor/',
    label: 'עמוד הפייסבוק של חי מאור',
    Icon: Facebook,
  },
  {
    href: 'https://www.instagram.com/hai_maor/',
    label: 'עמוד האינסטגרם של חי מאור',
    Icon: Instagram,
  },
] as const;

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

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            <Link href="#home" className="text-sm font-medium text-gray-400 hover:text-[#f0c246] transition-colors">
              דף הבית
            </Link>
            <Link href="#about" className="text-sm font-medium text-gray-400 hover:text-[#f0c246] transition-colors">
              עליי
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-400 hover:text-[#f0c246] transition-colors">
              יצירת קשר
            </Link>
            <span className="hidden sm:block h-6 w-px shrink-0 bg-white/10" aria-hidden />
            <div className="flex items-center gap-2">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-colors hover:border-[#f0c246]/40 hover:bg-[#f0c246]/10 hover:text-[#f0c246]"
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </a>
              ))}
            </div>
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
