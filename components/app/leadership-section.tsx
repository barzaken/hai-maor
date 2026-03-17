"use client";

import React from "react";
import { motion } from "motion/react";
import { Shield, Users, Mic, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const bentoItems = [
  {
    title: "נוכחות ניהולית (Executive Presence)",
    description: "איך להקרין סמכות ורוגע גם בסיטואציות של לחץ גבוה מול דירקטוריון או צוות רחב.",
    icon: Shield,
    className: "md:col-span-2 md:row-span-1",
    image: "/img/leadership/executive.png",
  },
  {
    title: "הובלת צוותים",
    description: "טונציה ושפת גוף שרותמים ועוזרים לך להוביל.",
    icon: Users,
    className: "md:col-span-1 md:row-span-2",
    image: "/img/leadership/teams.png",
  },
  {
    title: "ניהול ישיבות",
    description: "טכניקות לשלוט על המרחב הדיגיטלי והפיזי בצורה אלגנטית.",
    icon: Mic,
    className: "md:col-span-1 md:row-span-1",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "בניית אמון ורושם ראשוני",
    description: "איך להפוך לדמות שרוצים להקשיב לה תוך פחות מ-60 שניות.",
    icon: Zap,
    className: "md:col-span-1 md:row-span-1",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
  },
];

export function LeadershipSection() {
  return (
    <section id="leadership" className="relative py-24 md:py-32 bg-background overflow-hidden" dir="rtl">
      {/* Ambient Noise / Lighting - Constant with website theme */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-1/4 w-[30rem] h-[30rem] bg-[#f5f511]/5 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col items-start max-w-3xl mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5f511]/10 border border-[#f5f511]/20 text-[#f5f511] text-sm font-medium mb-6"
          >
            ניהול
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6"
          >
            להוביל באמת, <span className="text-foreground/50">לא רק לנהל.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-base text-gray-400 leading-relaxed md:text-lg max-w-2xl"
          >
            עבור מנהלים בכירים, הבמה היא כלי עבודה יומיומי. מהחלטות דירקטוריון ועד שיחות 1-על-1, הנוכחות שלך קובעת את התוצאה. הנה האלמנטים שיהפכו אותך למנהל שאי אפשר להתעלם ממנו.
          </motion.p>
        </div>

        {/* Bento Grid layout - Consistent with TheNeedSection */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]"
        >
          {bentoItems.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
              }}
              whileHover={{ y: -5 }}
              className={cn(
                "group relative p-8 rounded-[2.5rem] bg-white/5 border border-white/5 backdrop-blur-xl overflow-hidden flex flex-col items-start justify-end",
                "shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.12)] hover:border-[#f5f511]/30 transition-all duration-500",
                item.className
              )}
            >
              {/* Background Image */}
              {item.image && (
                <div className="absolute inset-0 z-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>
              )}

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-[#f5f511]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="absolute top-8 right-8 w-12 h-12 rounded-2xl bg-[#f5f511]/10 flex items-center justify-center border border-[#f5f511]/20 mb-auto text-[#f5f511] z-10">
                <item.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-500" />
              </div>

              <div className="relative z-10 w-full text-right">
                <h3 className="text-xl md:text-2xl font-medium text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-500 max-w-[85%] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Liquid Glass Inner Border */}
              <div className="absolute inset-0 border border-white/5 rounded-[2.5rem] pointer-events-none z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
