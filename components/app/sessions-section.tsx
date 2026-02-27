'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { AnimatedGridPattern } from '../ui/animated-grid-pattern';
import Container from '../ui/container';
import { InlineEmphasis } from '../ui/inline-emphasis';

const meetingItems = [
  'ניתוח מסרים וטקסטים',
  'עבודה מול מצלמה ותרגול פרזנטציה עסקית',
  'שליטה בקול, בנוכחות ובשפת הגוף',
  'בניית פרזנטציה מובילה לפעולה וסטוריטלינג עסקי',
];

const tracks = [
  {
    title: 'מפגש לייזר',
    desc: 'מפגש אחד ממוקד לפתרון צורך ספציפי, באורך של כשעה וחצי.',
  },
  {
    title: 'תהליך עומק - 6 מפגשים',
    desc: 'חבילה מלאה לבניית נוכחות, מסר וביצוע ברמה עקבית ומקצועית.',
  },
];

const workshopItems = [
  'סדנה חד-יומית ממוקדת (4 שעות) לעמידה מול קהל ומצלמה',
  'אני מנחה יחד עם עידן יעקובס',
  'מודל עבודה פרקטי המשלב תרגול, משוב ויישום מיידי',
];

export function SessionsSection() {
  return (
    <section id="services" dir="rtl" className="relative overflow-hidden py-12 md:py-16 scroll-mt-24">
      <AnimatedGridPattern
        numSquares={40}
        maxOpacity={0.2}
        duration={3}
        repeatDelay={1}
        className={cn('[mask-image:radial-gradient(420px_circle_at_center,white,transparent)]')}
      />
      <div className="pointer-events-none absolute inset-0 bg-background/10 backdrop-blur-[2px]" />

      <Container className="relative grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="rounded-2xl bg-background/65 p-4 py-5 backdrop-blur-sm md:p-5"
        >
          <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">מה כולל כל <InlineEmphasis tone="blue" variant="underline">מפגש</InlineEmphasis></h3>
          <div className="mt-6 space-y-2">
            {meetingItems.map((item, index) => (
              <motion.p
                key={item}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.35, delay: index * 0.06, ease: 'easeOut' }}
                className="border-b border-border/70 pb-2 text-sm leading-7 md:text-base"
              >
                {item}
              </motion.p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
          className="rounded-2xl bg-background/65 p-4 py-5 backdrop-blur-sm md:p-5"
        >
          <p className="text-sm font-medium text-muted-foreground">מסלולי עבודה</p>
          <div className="mt-4 space-y-4">
            {tracks.map((track) => (
              <motion.div
                key={track.title}
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 210, damping: 18 }}
              >
                <h4 className="font-semibold">{track.title}</h4>
                <p className="mt-1 text-sm leading-7 text-muted-foreground">{track.desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            כל מפגש כולל <InlineEmphasis tone="green" variant="highlight">ליווי אישי ותיעוד וידאו</InlineEmphasis> לצפייה חוזרת ולהטמעה מהירה בשטח.
          </p>
        </motion.div>
      </Container>

      <Container className="relative mt-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="rounded-2xl bg-background/65 p-4 py-5 backdrop-blur-sm md:p-5"
        >
          <p className="text-sm font-medium text-muted-foreground">פורמט נוסף</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight md:text-2xl">סדנה מרוכזת לעמידה מול קהל ומצלמה</h3>
          <div className="mt-5 grid gap-2 md:grid-cols-3">
            {workshopItems.map((item, index) => (
              <motion.p
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.35, delay: index * 0.06, ease: 'easeOut' }}
                className="text-sm leading-7 text-muted-foreground"
              >
                {item}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
