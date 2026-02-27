'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { DotPattern } from '../ui/dot-pattern';
import { Highlighter } from '../ui/highlighter';
import Container from '../ui/container';

const outcomes = [
  'פרזנטציה מדויקת שמניעה לפעולה',
  'ביטחון ושליטה בכל הופעה עסקית',
  'סרטונים ו-וובינרים אותנטיים, משכנעים ומקצועיים',
  'יכולת לגעת, לרגש, לרתק ולהשפיע',
  'שימוש נכון בקול, קצב ותנועה כדי להחזיק קהל',
  'הפיכת כל פרזנטציה או סרטון לחוויה עסקית משפיעה',
];

export function OutcomesSection() {
  return (
    <section dir="rtl" className="relative overflow-hidden py-12 md:py-16">
      <DotPattern
        className={cn('opacity-30 [mask-image:radial-gradient(360px_circle_at_center,white,transparent)]')}
      />
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="py-1"
        >
          <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">מה הלקוח מקבל בפועל</h3>
          <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
            המטרה היא להפוך כל הופעה לכלי של <Highlighter action="highlight" color="#bbf7d0">השפעה, תוצאה והנעה לפעולה</Highlighter>.
          </p>

          <div className="mt-6 grid gap-2 md:grid-cols-2">
            {outcomes.map((item, index) => (
              <motion.p
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.35, delay: index * 0.05, ease: 'easeOut' }}
                className="border-b border-border/70 pb-2 text-sm leading-7 md:text-base"
              >
                {item}
              </motion.p>
            ))}
          </div>

          <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', stiffness: 200, damping: 17 }}
            className="mt-7 md:flex md:items-center md:justify-between"
          >
            <p className="text-sm leading-7 text-muted-foreground md:text-base">
              אם זה רלוונטי לך או למנהלים בארגון, נשמח לשיחת היכרות לזיהוי צרכים ובניית תהליך עבודה מעשי.
            </p>
            <a href="#" className="mt-3 inline-flex text-sm font-medium underline underline-offset-4 md:mt-0">
              שיחת היכרות
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
