'use client';

import { motion } from 'motion/react';
import Container from '../ui/container';
import ThreeDMarqueeDemo from '@/components/3d-marquee-demo';

export function LiveOnStageSection() {
  return (
    <section id="live-stage" dir="rtl" className="relative overflow-hidden py-24 md:py-32 bg-background border-y border-white/5">
      {/* Decorative Blur */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,rgba(99,102,241,0.05),transparent_40%)] pointer-events-none" />

      <Container className="relative z-10 max-w-7xl mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto"
        >
          <p className="mb-4 text-sm font-medium tracking-widest text-[#f5f511] uppercase">גלריית תמונות</p>
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
            חי את הבמה
          </h3>
          <p className="text-lg text-gray-400">
            רגעים נבחרים מתוך הרצאות, סדנאות, פרזנטציות ועבודה מול קהל.
          </p>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, delay: 0.05, ease: 'easeOut' }}
        className="relative overflow-hidden w-full flex justify-center"
        dir="ltr"
      >
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <div className="w-full max-w-[1400px]">
          <ThreeDMarqueeDemo />
        </div>
      </motion.div>
    </section>
  );
}
