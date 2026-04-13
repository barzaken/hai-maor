"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "״הגעתי לחי עם מצגת מוכנה לכנס של 100 איש — וערימה של פחדים וחששות. לא עשיתי כזה דבר גדול עדיין. לקחתי כמה מפגשים אישיים ותוך כדי הבנתי מלא דברים מלא כלים ומלא ידע. לראשונה בחיים נהניתי על הבמה. הכלים שקיבלתי עובדים. הניסיון שלו מהבמה — מורגש בכל תרגיל.״",
    name: "שימי זלסקו",
    title: "מנהל שיווק ושכר",
  },
  {
    quote:
      "״הבאתי את חי לסדנת העשרה לתוכנית המצטיינים שלנו. התגובה של הסטודנטים הייתה חד משמעית — אחת הסדנאות העשרה החשובות והמשמעותיות שהיו במכללה. פרקטיקה אמיתית תובנות שחזרנו איתם הביתה.״",
    name: "יאיר שץ",
    title: "מנהל תוכנית מצטיינים, המרכז האקדמי למשפט ועסקים",
  },
  {
    quote:
      "״הגעתי לקורס כי היה לי כנס גדול שממש הלחיץ אותי. לא ציפיתי שאצא מזה כל כך אחרת... תוכן אמיתי, פרקטיקה שעובדת, ומנחה שיודע בדיוק איפה אתה תקוע. אחד הדברים הכי טובים שעשיתי לעצמי מקצועית. חוויה מעצימה ולמדתי כל כך הרבה. המון תוכן והמון פרקטיקה. ממליצה בחום גדול!״",
    name: "אורטל ינקו שליו",
    title: "יועצת משפטית, חברת סלברייט",
  },
];

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section
      id="testimonials"
      ref={containerRef}
      dir="rtl"
      className="relative h-[250vh] bg-background w-full"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background ambient glow */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
          <div className="w-[50vw] h-[50vw] bg-[#f0c246]/5 blur-[150px] rounded-full mix-blend-screen" />
        </div>

        <div className="container mx-auto px-4 max-w-4xl relative z-10 w-full flex flex-col h-[90vh] pt-[15vh]">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-10 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
              מה אומרים עליי?
            </h2>
          </div>

          {/* Stacking Cards Area */}
          <div className="w-full relative flex-grow perspective-1000 mb-10">
            {testimonials.map((testimonial, index) => {
              const start = index / testimonials.length;
              const end = (index + 1) / testimonials.length;

              // Map overall section scroll progress to individual card animations
              const y = useTransform(scrollYProgress, [start, end], ["120%", "0%"]);
              // Cards remain fully opaque at all times
              const opacity = 1;
              const scale = useTransform(scrollYProgress, [start, end, end + 0.1], [0.8, 1, 0.95]);

              return (
                <motion.div
                  key={index}
                  style={{ y, opacity, scale }}
                  className="absolute inset-0 flex flex-col items-center"
                >
                  <div className="relative w-full max-h-full flex flex-col p-8 md:p-12 rounded-[2.5rem] bg-[#0a0a0a] border border-white/10 shadow-2xl group overflow-y-auto">
                    {/* Subtle hover gradient inside the card */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none z-[-1]" />

                    <Quote className="w-10 h-10 md:w-12 md:h-12 text-[#f0c246]/30 mb-6 shrink-0" />

                    <p className="text-gray-300 leading-relaxed text-lg md:text-xl flex-grow relative z-10 font-light mix-blend-plus-lighter">
                      {testimonial.quote}
                    </p>

                    <div className="mt-8 pt-6 border-t border-white/10 relative z-10 flex items-center justify-between w-full">
                      <div>
                        <h4 className="font-semibold text-white text-lg md:text-xl mb-1">{testimonial.name}</h4>
                        <p className="text-sm md:text-base text-[#f0c246] font-medium">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
