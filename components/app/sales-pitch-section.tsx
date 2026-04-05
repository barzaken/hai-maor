"use client";

import React from "react";
import { motion } from "motion/react";
import { DollarSign, Target, Handshake, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const salesPoints = [
  {
    title: "פיצ׳ינג וגיוס הון",
    description: "איך להפוך מספרים לסיפור שאי אפשר להגיד לו לא. אמנות השכנוע מול משקיעים.",
    icon: DollarSign,
  },
  {
    title: "סגירת עסקאות",
    description: "שימוש בטון הדיבור ובהפסקות (Pauses) כדי לייצר דחיפות, סמכות וסגירה.",
    icon: Target,
  },
  {
    title: "טיפול בהתנגדויות בלייב",
    description: "איך להישאר בשליטה כשהשאלות הקשות מגיעות, ולהפוך אותן לנקודות חוזקה.",
    icon: Handshake,
  },
];

export function SalesPitchSection() {
  return (
    <section id="sales-influence" className="relative py-24 md:py-32 w-full overflow-hidden bg-background" dir="rtl">
      {/* Background Noise / Decor - Matches MethodologySection */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text Side - Consistent with MethodologySection */}
          <div className="flex flex-col items-start gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0c246]10 border border-[#f0c246]/20 text-[#f0c246] text-sm font-medium"
            >
              מכירות וגיוסים
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight"
            >
              להפוך מילים <br />
              <span className="text-[#f0c246]">לתוצאות עסקיות.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-base text-gray-400 leading-relaxed max-w-[45ch] md:text-lg"
            >
              מכירות הן לא רק מוצר, הן אנרגיה. אני אלמד אותך איך להעביר את הביטחון שלך ללקוח דרך כל תנועה וכל מילה. הופעה עסקית מדויקת היא הדרך הקצרה ביותר לסגירת עסקה.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.8 },
                },
              }}
              className="flex flex-col gap-4 mt-4"
            >
              {[
                "שליטה בטון וקצב הדיבור",
                "ניהול שפת גוף סמכותית",
                "בניית אוטוריטה מהירה",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    show: { opacity: 1, x: 0 },
                  }}
                  className="flex items-center gap-3 text-foreground/80"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#f0c246]" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Points Grid - Consistent with MethodologySection card style */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 1.4, // Wait for text and bullets
                },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {salesPoints.map((point, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 20 },
                  show: {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                    },
                  },
                }}
                className={cn(
                  "group relative p-8 rounded-3xl bg-white/5 border border-white/5 overflow-hidden",
                  "shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-500 hover:border-[#f0c246]/50",
                  i === 2 ? "sm:col-span-2" : ""
                )}
              >
                {/* Hover Tint */}
                <div className="absolute inset-0 bg-[#f0c246]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="w-12 h-12 rounded-xl bg-[#f0c246]10 flex items-center justify-center mb-6 text-[#f0c246] border border-[#f0c246]/20">
                  <point.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300 ease-out" />
                </div>

                <h4 className="text-xl font-medium text-foreground mb-3 relative z-10">{point.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
