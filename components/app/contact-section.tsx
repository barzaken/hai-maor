'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeftIcon, LoaderCircleIcon, SendIcon } from 'lucide-react';

import Container from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { InlineEmphasis } from '@/components/ui/inline-emphasis';

type SubmitState = {
  error: string | null;
  ok: boolean;
  pending: boolean;
};

const initialState: SubmitState = {
  error: null,
  ok: false,
  pending: false,
};

export function ContactSection() {
  const [submitState, setSubmitState] = useState<SubmitState>(initialState);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState({ error: null, ok: false, pending: true });

    const formData = new FormData(event.currentTarget);
    const payload = {
      fullName: String(formData.get('fullName') || '').trim(),
      email: String(formData.get('email') || '').trim(),
      phone: String(formData.get('phone') || '').trim(),
      message: String(formData.get('message') || '').trim(),
    };

    try {
      const response = await fetch('/api/form', {
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('failed');
      }

      event.currentTarget.reset();
      setSubmitState({ error: null, ok: true, pending: false });
    } catch {
      setSubmitState({
        error: 'לא הצלחנו לשלוח את הטופס כרגע. אפשר לנסות שוב בעוד רגע.',
        ok: false,
        pending: false,
      });
    }
  }

  return (
    <section id="contact" dir="rtl" className="relative overflow-hidden py-12 md:py-16 scroll-mt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(14,165,233,0.13),transparent_36%),radial-gradient(circle_at_85%_85%,rgba(249,115,22,0.14),transparent_38%)]" />
      <Container className="grid gap-10 md:grid-cols-[1fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="py-1"
        >
          <p className="mb-2 text-sm font-medium text-muted-foreground">יצירת קשר</p>
          <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">בואו נדבר על התהליך שמתאים לכם</h3>
          <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">
            מלאו כמה פרטים ואחזור אליכם ל<InlineEmphasis tone="amber" variant="underline">שיחת היכרות קצרה</InlineEmphasis>. יחד נזהה צורך, נגדיר מטרה ואבנה תהליך עבודה
            פרקטי שמותאם לכם.
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4"
          >
            לתיאום שיחה מהירה
            <ArrowLeftIcon className="size-4" />
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.07, ease: 'easeOut' }}
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border bg-background/75 p-4 shadow-xs backdrop-blur-sm md:p-6"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm text-muted-foreground">
              שם מלא
              <Input name="fullName" required placeholder="איך קוראים לך?" autoComplete="name" />
            </label>
            <label className="space-y-2 text-sm text-muted-foreground">
              אימייל
              <Input name="email" required type="email" placeholder="name@company.com" autoComplete="email" />
            </label>
          </div>

          <label className="block space-y-2 text-sm text-muted-foreground">
            טלפון
            <Input name="phone" placeholder="לא חובה" autoComplete="tel" />
          </label>

          <label className="block space-y-2 text-sm text-muted-foreground">
            מה תרצו לשפר?
            <Textarea
              name="message"
              required
              placeholder="ספרו בקצרה על האתגר שלכם או מה תרצו להשיג..."
              rows={5}
            />
          </label>

          <div className="flex flex-col-reverse gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
            {submitState.error ? (
              <p className="text-sm text-destructive-foreground">{submitState.error}</p>
            ) : submitState.ok ? (
              <p className="text-sm text-emerald-700 dark:text-emerald-400">מעולה. קיבלתי את הפנייה ואחזור בהקדם.</p>
            ) : (
              <p className="text-sm text-muted-foreground">הפנייה מגיעה ישירות אליי דרך הטופס.</p>
            )}

            <Button type="submit" disabled={submitState.pending}>
              {submitState.pending ? (
                <>
                  שולח
                  <LoaderCircleIcon className="size-4 animate-spin" />
                </>
              ) : (
                <>
                  שליחה
                  <SendIcon className="size-4" />
                </>
              )}
            </Button>
          </div>
        </motion.form>
      </Container>
    </section>
  );
}
