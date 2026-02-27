import { cn } from '@/lib/utils';
import { Spotlight } from '@/components/ui/spotlight';

export function SpotlightCtaSection() {
  return (
    <section id="cta" dir="rtl" className="relative overflow-hidden bg-black/[0.96] antialiased">
      <div
        className={cn(
          'pointer-events-none absolute inset-0 select-none [background-size:40px_40px]',
          '[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]'
        )}
      />

      <Spotlight className="-top-24 left-1/2 -translate-x-1/2 opacity-90 md:-top-16" fill="white" />
      <Spotlight className="-top-40 left-[52%] -translate-x-1/2 opacity-40 md:-top-28" fill="#f59e0b" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 md:py-10">
        <h2 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          עכשיו אפשר להפוך
          <br />
          פוטנציאל לתוצאות.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base font-normal text-neutral-300 md:text-lg">
          כשזה נכון לכם, אבנה תהליך ממוקד שמחזק נוכחות, מחדד מסר ומשפר ביצועים בצורה מדידה.
        </p>
        <div className="mt-7 flex justify-center">
          <a
            href="#contact"
            className="rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/15"
          >
            נדבר כשנוח לכם
          </a>
        </div>
      </div>
    </section>
  );
}
