'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeftIcon, LoaderCircleIcon, SendIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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
      goal: String(formData.get('goal') || '').trim(),
    };

    try {
      const response = await fetch('/api/form', {
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      });

      if (!response.ok) throw new Error('failed');

      event.currentTarget.reset();
      setSubmitState({ error: null, ok: true, pending: false });
    } catch {
      setSubmitState({
        error: 'Connection failed. Please try again.',
        ok: false,
        pending: false,
      });
    }
  }

  return (
    <section id="contact" dir="rtl" className="relative overflow-hidden py-16 md:py-24 scroll-mt-24">
      {/* Decorative Blur Effect */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-background" />
      <div className="absolute top-1/2 right-1/4 w-[40rem] h-[40rem] bg-[#c9c900]/5 blur-[150px] rounded-full mix-blend-screen -z-10 pointer-events-none translate-y-[-50%]" />

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col gap-12 items-center text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <p className="mb-4 text-sm font-medium tracking-widest text-[#c9c900]">מוכנים לעלות לבמה?</p>
            <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-6 leading-tight">
              בואו נהפוך את הפרזנטציה הבאה שלכם לסיפור הצלחה.
            </h3>
            <p className="text-lg leading-relaxed text-gray-400 max-w-[45ch]">
              מלאו כמה פרטים ואחזור אליכם לשיחת היכרות קצרה. יחד נזהה צורך, נגדיר מטרה ואבנה תהליך עבודה פרקטי שמותאם בדיוק לאתגר שלכם.
            </p>
          </motion.div>

          {/* Form Side */}
          <motion.form
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="w-full relative p-8 md:p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/5 shadow-2xl backdrop-blur-3xl overflow-hidden group text-start"
          >
            {/* Interactive Border Highlight (simulated) */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#c9c900]/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none" />

            <div className="grid gap-6 md:grid-cols-2 relative z-10">
              <label className="flex flex-col gap-2 relative">
                <span className="text-sm font-medium text-gray-300">שם מלא</span>
                <Input
                  name="fullName"
                  required
                  placeholder="איך קוראים לך?"
                  className="h-12 bg-black/20 border-white/10 focus-visible:ring-[#c9c900]/50 text-foreground rounded-xl transition-all"
                />
              </label>
              <label className="flex flex-col gap-2 relative">
                <span className="text-sm font-medium text-gray-300">חברה</span>
                <Input
                  name="company"
                  placeholder="איפה את/ה עובד/ת?"
                  className="h-12 bg-black/20 border-white/10 focus-visible:ring-[#c9c900]/50 text-foreground rounded-xl transition-all"
                />
              </label>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mt-6 relative z-10">
              <label className="flex flex-col gap-2 relative">
                <span className="text-sm font-medium text-gray-300">טלפון</span>
                <Input
                  name="phone"
                  required
                  placeholder="באיזה מספר אפשר לתפוס אותך?"
                  className="h-12 bg-black/20 border-white/10 focus-visible:ring-[#c9c900]/50 text-foreground rounded-xl transition-all"
                />
              </label>
              <label className="flex flex-col gap-2 relative">
                <span className="text-sm font-medium text-gray-300">המטרה הקרובה</span>
                <Input
                  name="goal"
                  placeholder="Pitch / כנס / חסם מסוים"
                  className="h-12 bg-black/20 border-white/10 focus-visible:ring-[#c9c900]/50 text-foreground rounded-xl transition-all"
                />
              </label>
            </div>

            <div className="mt-8 relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="text-sm">
                  {submitState.error ? (
                    <span className="text-red-400 font-medium">{submitState.error}</span>
                  ) : submitState.ok ? (
                    <span className="text-[#c9c900] font-medium tracking-wide">מעולה. קיבלתי את הפנייה ואחזור בהקדם.</span>
                  ) : (
                    <span className="text-gray-500">המידע נשמר בפרטיות מוחלטת.</span>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={submitState.pending}
                  className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#c9c900] px-8 text-sm font-medium text-black shadow-lg shadow-[#c9c900]/25 transition-colors hover:bg-[#c9c900] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9c900] disabled:pointer-events-none disabled:opacity-50"
                  type="submit"
                >
                  {submitState.pending ? (
                    <>
                      מעבד נתונים
                      <LoaderCircleIcon className="w-4 h-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      לתיאום פגישה
                      <ArrowLeftIcon className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
