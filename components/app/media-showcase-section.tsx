'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { DotPattern } from '../ui/dot-pattern';
import { VideoText } from '../ui/video-text';
import Container from '../ui/container';
import { InlineEmphasis } from '../ui/inline-emphasis';
export function MediaShowcaseSection() {
  return (
    <section id="media" dir="rtl" className="relative overflow-x-clip py-12 md:py-16 scroll-mt-24">
      <DotPattern
        className={cn('opacity-25 [mask-image:radial-gradient(420px_circle_at_center,white,transparent)]')}
      />

      <Container className="relative space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="min-w-0 py-1"
        >
          <p className="text-sm font-medium text-muted-foreground">עבודה עם ארגונים וחברות</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl"><InlineEmphasis tone="blue" variant="underline">וידאו מהשטח</InlineEmphasis></h3>

          <div className="relative mt-4 h-20 overflow-hidden rounded-xl border bg-black sm:h-24 md:h-28">
            <VideoText
              src="/vid/hitech-day-aftermovie.mp4"
              fontSize="clamp(30px,9vw,72px)"
              fontWeight={700}
              fontFamily="Arial, sans-serif"
            >
              במה עסקית
            </VideoText>
          </div>

          <div className="mt-5 overflow-hidden rounded-xl border bg-black">
            <video className="aspect-video w-full" controls playsInline preload="metadata" poster="/img/hero.jpeg">
              <source src="/vid/hitech-day-aftermovie.mp4" type="video/mp4" />
              הדפדפן שלך לא תומך בהצגת וידאו.
            </video>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
