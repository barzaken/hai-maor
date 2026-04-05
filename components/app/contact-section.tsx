'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'motion/react';
import { LoaderCircleIcon } from 'lucide-react';

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
      message: '',
      goal: '',
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
    <section id="contact" dir="rtl" className="relative overflow-hidden py-16 md:py-24 scroll-mt-24 bg-gradient-to-br from-[#1a1505] via-[#2b220a] to-[#0f0c03]">
      {/* Testimonial Style Black Background */}
      <div className="absolute inset-0 pointer-events-none -z-10  border-t border-b border-white/10 shadow-2xl" />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="flex flex-col items-center text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-white mb-4 leading-relaxed max-w-3xl">
              "בעסקים, כמו בתיאטרון, אם אתה לא מביא את <span className="whitespace-nowrap">ה'אני המיטבי'</span> שלך לבמה בכל בוקר, המתחרה שלך יעשה זאת וייקח לך את הקהל."
            </h2>
            <p className="text-base md:text-lg font-light text-[#f0c246]">
              מארק קיובן - יזם ומשקיע
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex justify-center"
          >
            <p className="text-base md:text-xl text-white/90 mb-6 font-light">
              רוצים להפוך לסיפור הצלחה?! השאירו פרטים ואחזור אליכם בהקדם
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onSubmit={handleSubmit}
            className="w-full max-w-3xl flex flex-col items-center"
          >
            {/* Horizontal Layout for Inputs */}
            <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-3 mb-8">
              <input
                name="fullName"
                required
                placeholder="שם"
                className="w-full h-12 bg-[#1a1a1a] text-white border border-white/10 focus:border-[#f0c246] rounded-lg px-4 placeholder:text-white/40 outline-none transition-all text-sm text-right"
              />
              <input
                name="phone"
                required
                placeholder="טלפון"
                className="w-full h-12 bg-[#1a1a1a] text-white border border-white/10 focus:border-[#f0c246] rounded-lg px-4 placeholder:text-white/40 outline-none transition-all text-sm text-right"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="אימייל"
                className="col-span-2 md:col-span-1 w-full h-12 bg-[#1a1a1a] text-white border border-white/10 focus:border-[#f0c246] rounded-lg px-4 placeholder:text-white/40 outline-none transition-all text-sm text-right"
              />
            </div>

            {/* Status and Submit */}
            <div className="w-full flex flex-col items-center">
              {submitState.error && (
                <span className="text-red-400 font-medium mb-3 text-sm">{submitState.error}</span>
              )}
              {submitState.ok && (
                <span className="text-[#f0c246] font-medium tracking-wide mb-3 text-sm">מעולה. קיבלתי את הפנייה ואחזור בהקדם.</span>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={submitState.pending}
                className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#f0c246] px-12 md:px-16 text-sm font-medium text-black transition-all hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 disabled:pointer-events-none disabled:opacity-50"
                type="submit"
              >
                {submitState.pending ? (
                  <>
                    מעבד נתונים
                    <LoaderCircleIcon className="w-4 h-4 animate-spin" />
                  </>
                ) : (
                  "לתחילתו של שינוי"
                )}
              </motion.button>
            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
