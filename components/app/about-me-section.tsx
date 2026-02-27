'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { DotPattern } from '../ui/dot-pattern';
import Container from '../ui/container';
import { InlineEmphasis } from '../ui/inline-emphasis';

const credentials = [
  {
    lead: 'בוגר הסטודיו',
    text: 'למשחק ע"ש יורם לוינשטיין',
  },
  {
    lead: 'בוגר לימודי משחק',
    text: 'של איוונה צ׳אבק בארה״ב',
  },
];

export function AboutMeSection() {
  return (
    <section id="about" dir="rtl" className="relative overflow-hidden py-12 md:py-16 scroll-mt-24">
      <DotPattern
        className={cn('opacity-35 [mask-image:radial-gradient(360px_circle_at_center,white,transparent)]')}
      />

      <Container className="relative grid items-start gap-8 md:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="py-1"
        >
          <p className="mb-3 text-sm font-medium tracking-tight text-muted-foreground">מי אני</p>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">היי, אני חי מאור</h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
             שחקן תיאטרון, טלוויזיה וקולנוע כבר 20 שנה, וב-13 השנים האחרונות אני משחק בתיאטרון בית ליסין.
            השתתפתי והופעתי בין היתר בסדרות{' '}
            <InlineEmphasis tone="amber" variant="underline">
              &quot;קופה ראשית&quot;, &quot;השוטרים&quot;, &quot;מלכות&quot; ו&quot;חזרות&quot;
            </InlineEmphasis>
            .
            מזה 15 שנה אני מאמן ומלווה שחקנים, מנהלים ויזמים לבניית <InlineEmphasis tone="blue" variant="highlight">נוכחות, ביטחון והשפעה</InlineEmphasis> -
            על במה, מול מצלמה ובכל מפגש עסקי משמעותי, עם התמחות בעמידה מול קהל וניהול פחד במה.
          </p>

          <ul className="mt-6 space-y-2">
            {credentials.map((item, index) => (
              <motion.li
                key={item.lead}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.35, delay: index * 0.06, ease: 'easeOut' }}
                className="text-sm leading-7 text-muted-foreground md:text-base"
              >
                <InlineEmphasis tone="amber" variant="underline">
                  {item.lead}
                </InlineEmphasis>{' '}
                {item.text}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
          className="space-y-4"
        >
          <div className="overflow-hidden rounded-2xl border bg-background/70 p-2 backdrop-blur-sm">
            <Image
              src="/img/about-me.jpeg"
              alt="חי מאור"
              width={900}
              height={700}
              className="h-64 w-full rounded-xl object-cover md:h-72"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            <InlineEmphasis tone="blue" variant="underline">
              ניסיון במה מעשי
            </InlineEmphasis>
          </p>
          <div className="space-y-2 text-sm leading-7 text-muted-foreground md:text-base">
            <p>20 שנות משחק בתיאטרון, טלוויזיה וקולנוע</p>
            <p>13 שנים בתיאטרון בית ליסין</p>
            <p>סדרות: &quot;קופה ראשית&quot;, &quot;המדובב&quot;, &quot;השוטרים&quot; ועוד</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
