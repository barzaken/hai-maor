'use client';

import { motion } from 'motion/react';
import { SparklesIcon } from 'lucide-react';
import { MorphingText } from '../ui/morphing-text';
import Container from '../ui/container';
import { InlineEmphasis } from '../ui/inline-emphasis';

const morphingWords = ['נוכחות', 'ביטחון', 'השפעה', 'דיוק', 'חיבור'];
const businessChallenges = [
  'המסר ברור אבל לא נתפס רגשית',
  'עומס מידע שמחליש את הסיפור',
  'נוכחות לא יציבה מול קהל או מצלמה',
];

export function ServiceStorySection() {
  return (
    <section id="story" dir="rtl" className="relative overflow-hidden py-12 md:py-16 scroll-mt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(250,204,21,0.12),transparent_38%),radial-gradient(circle_at_90%_80%,rgba(14,165,233,0.14),transparent_35%)]" />
      <Container className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="py-1"
        >
          <p className="mb-2 text-sm font-medium text-muted-foreground">האתגר העסקי</p>
          <h3 className="text-xl font-semibold tracking-tight md:text-2xl">יודעים מה להגיד, מתקשים לגרום לאנשים להקשיב</h3>
          <p className="mt-4 leading-8 text-muted-foreground">
            מנהלים ויזמים רבים מגיעים עם רעיון מצוין, מצגת טובה וטקסט מדויק - אבל בלי{' '}
            <InlineEmphasis tone="blue" variant="highlight">חיבור רגשי</InlineEmphasis>
            ,
            המסר לא מניע לפעולה. מצגות נשארות טכניות, סרטונים לא מייצרים תגובה, והופעה עסקית מרגישה
            נכונה אבל לא נוגעת.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {businessChallenges.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.35, delay: index * 0.06, ease: 'easeOut' }}
                className=" p-3 text-sm leading-6 backdrop-blur-sm"
              >
                <span className="inline-flex items-center gap-2 text-amber-700 dark:text-amber-400">
                  <SparklesIcon className="size-4" />
                  <p className="mt-2 text-muted-foreground">{item}</p>
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          className="py-1"
        >
          <p className="mb-2 text-sm font-medium text-muted-foreground">הפתרון</p>
          <h3 className="text-xl font-semibold tracking-tight md:text-2xl"><InlineEmphasis tone="amber" variant="underline">&quot;במה עסקית&quot;</InlineEmphasis></h3>
          <p className="mt-4 leading-8 text-muted-foreground">
            תהליך אישי או צוותי המשלב כלים מעולם המשחק יחד עם פרזנטציה עסקית. המטרה היא להפוך כל הופעה,
            פרזנטציה או סרטון לכלי שמייצר השפעה, תוצאה והנעה לפעולה.
          </p>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            בנוסף לליווי האישי, אני מנחה גם סדנאות עמידה מול קהל ומצלמה בפרויקט משותף עם עידן יעקובס.
          </p>
          <div className="mt-6">
            <MorphingText texts={morphingWords} className="h-12 text-right text-2xl md:h-14 md:text-4xl" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
