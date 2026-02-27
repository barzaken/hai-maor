'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { DotPattern } from '../ui/dot-pattern';
import { HeroVideoDialog } from '../ui/hero-video-dialog';
import { VideoText } from '../ui/video-text';
import Container from '../ui/container';
import ThreeDMarqueeDemo from '@/components/3d-marquee-demo';
export function MediaShowcaseSection() {
  return (
    <section dir="rtl" className="relative overflow-x-clip py-12 md:py-16">
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
          <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">וידאו מהשטח</h3>

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

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
            <motion.div className="min-w-0" whileHover={{ y: -2 }} transition={{ type: 'spring', stiffness: 210, damping: 18 }}>
              <HeroVideoDialog
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/eXCzRIfhiRU"
                thumbnailSrc="/img/hero.jpeg"
                thumbnailAlt="פתיחת וידאו סדנה"
                className="w-full"
              />
            </motion.div>

            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 210, damping: 18 }}
              className="min-w-0 overflow-hidden rounded-xl border bg-black"
            >
              <video className="aspect-video w-full" controls playsInline preload="metadata" poster="/img/hero.jpeg">
                <source src="/vid/hitech-day-aftermovie.mp4" type="video/mp4" />
                הדפדפן שלך לא תומך בהצגת וידאו.
              </video>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, delay: 0.05, ease: 'easeOut' }}
          className="min-w-0 py-1"
        >
          <p className="text-sm font-medium text-muted-foreground">גלריית במה</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">חי על הבמה</h3>

          <div className="mt-5 overflow-hidden rounded-xl border bg-background/70 p-2">
            <ThreeDMarqueeDemo />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
