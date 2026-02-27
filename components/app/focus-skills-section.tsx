'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { DotPattern } from '../ui/dot-pattern';
import { Highlighter } from '../ui/highlighter';
import Container from '../ui/container';

const focusItems = [
  'ביטחון מול מצלמה וקהל כמיומנות נרכשת',
  'איך לספר את הסיפור העסקי שלך בצורה משכנעת',
  'יצירת פוקוס וריכוז של הקהל לאורך כל ההופעה',
  'חידוד מסר ברור שנשאר בזיכרון',
  'רתימת שפת הגוף, קול וקצב לטובת המסר',
  'אותנטיות, רגש ורושם ראשוני מדויק',
];

const professionalStudies = [
  'מאמן עסקי מטעם איק״א (איגוד הקואצ׳ינג הישראלי)',
  'לימודי יזמות עסקית בהנחיית יורם חטב',
];

export function FocusSkillsSection() {
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
          <p className="text-sm font-medium text-muted-foreground">מה שמחדדים בתהליך</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            יסודות ה<Highlighter action="underline" color="#fb7185">במה העסקית</Highlighter>
          </h3>

          <div className="mt-6 grid gap-2 md:grid-cols-2">
            {focusItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
                className="border-b border-border/70 pb-2 text-sm leading-7 md:text-base"
              >
                {item}
              </motion.div>
            ))}
          </div>

          <div className="mt-7 pt-2">
            <p className="text-sm font-medium text-muted-foreground">הכשרה עסקית משלימה</p>
            <div className="mt-3 grid gap-2 md:grid-cols-2">
              {professionalStudies.map((item, index) => (
                <motion.p
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.35, delay: index * 0.07, ease: 'easeOut' }}
                  className="text-sm leading-7 text-muted-foreground md:text-base"
                >
                  {item}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
