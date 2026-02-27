'use client';

import { motion } from 'motion/react';
import { Highlighter } from '../ui/highlighter';
import { MorphingText } from '../ui/morphing-text';
import Container from '../ui/container';

const morphingWords = ['נוכחות', 'ביטחון', 'השפעה', 'דיוק', 'חיבור'];

export function ServiceStorySection() {
  return (
    <section dir="rtl" className="relative py-12 md:py-16">
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
            <Highlighter action="highlight" color="#bae6fd">חיבור רגשי</Highlighter>,
            המסר לא מניע לפעולה. מצגות נשארות טכניות, סרטונים לא מייצרים תגובה, והופעה עסקית מרגישה
            נכונה אבל לא נוגעת.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          className="py-1"
        >
          <p className="mb-2 text-sm font-medium text-muted-foreground">הפתרון</p>
          <h3 className="text-xl font-semibold tracking-tight md:text-2xl">&quot;במה עסקית&quot;</h3>
          <p className="mt-4 leading-8 text-muted-foreground">
            תהליך אישי או צוותי המשלב כלים מעולם המשחק יחד עם פרזנטציה עסקית. המטרה היא להפוך כל הופעה,
            פרזנטציה או סרטון לכלי שמייצר השפעה, תוצאה והנעה לפעולה.
          </p>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">
            בנוסף לליווי האישי, חי מנחה גם סדנאות עמידה מול קהל ומצלמה בפרויקט משותף עם עידן יעקובס.
          </p>
          <div className="mt-6">
            <MorphingText texts={morphingWords} className="h-12 text-right text-2xl md:h-14 md:text-4xl" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
