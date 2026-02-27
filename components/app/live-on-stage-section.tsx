'use client';

import { motion } from 'motion/react';
import Container from '../ui/container';
import { InlineEmphasis } from '../ui/inline-emphasis';
import ThreeDMarqueeDemo from '@/components/3d-marquee-demo';

export function LiveOnStageSection() {
  return (
    <section id="live-stage" dir="rtl" className="relative overflow-x-clip py-12 md:py-16">
      <Container className="py-1">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <p className="text-sm font-medium text-muted-foreground">גלריית במה</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            <InlineEmphasis tone="amber" variant="underline">
              חי את הבמה
            </InlineEmphasis>
          </h3>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, delay: 0.05, ease: 'easeOut' }}
        className="mt-5"
      >
        <ThreeDMarqueeDemo className="h-[430px] sm:h-[520px] md:h-[600px]" />
      </motion.div>
    </section>
  );
}
