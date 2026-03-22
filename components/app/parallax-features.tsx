"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";

const parallaxContent = [
  {
    title: "שפת גוף דינמית",
    description: "איך להחזיק במרחב הפיזי של הבמה, למשוך את הקהל ולשדר ביטחון מוחלט ללא מילים.",
    image: "/img/hai-plays/shot-03.jpeg",
  },
  {
    title: "אינטונציה קצב ודיקציה",
    description: "מרבית המרצים מאבדים את הקהל בגלל מונוטוניות. נלמד טכניקות דיבור ליצירת מתח, רגש וקשב רציף.",
    image: "/img/hai-plays/shot-01.jpeg", // Replacing with a placeholder if they dont exist
  },
  {
    title: "בניית מתח וסטוריטלינג",
    description: "איך להתחיל חזק, להוביל את המאזין דרך קונפליקט ופתרון, ולסיים בנקודת שיא שתיחרט בזיכרון.",
    image: "/img/hai-plays/shot-10.jpeg", // Replacing with a placeholder if they dont exist
  },
];

export function ParallaxFeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress within this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section
      id="parallax-features"
      ref={containerRef}
      dir="rtl"
      className="relative h-[300vh] bg-background w-full"
    >
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">

        {/* Background ambient glow */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
          <div className="w-[50vw] h-[50vw] bg-[#c9c900]/5 blur-[120px] rounded-full mix-blend-screen" />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10 w-full flex flex-col md:flex-row items-center gap-12">

          {/* Right Side (Sticky Text in RTL) */}
          <div className="w-full md:w-1/2 flex flex-col items-start pt-20 md:pt-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c9c900]/10 border border-[#c9c900]/20 text-[#c9c900] text-sm font-medium mb-6">
              מצגות
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              לא עוד שקפים <br />
              <span className="text-gray-500">משעממים.</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-md">
              מעבר לכלים הבסיסיים, ״במה עסקית״ מפרקת לגורמים את כל מה שהופך הופעה מסבירה – למהפנטת.
              הנה כמה מהנושאים שעליהם נעבוד כדי להביא אותך לרמת המאסטרים.
            </p>
          </div>

          {/* Left Side (Scrolling Images/Cards in RTL) */}
          <div className="w-full md:w-1/2 h-[60vh] md:h-[80vh] relative perspective-1000">
            {parallaxContent.map((item, index) => {

              const start = index / parallaxContent.length;
              const end = (index + 1) / parallaxContent.length;

              // Map overall section scroll progress to individual card animations
              const y = useTransform(scrollYProgress, [start, end], ["120%", "0%"]);
              // Add a slight fade-out as the next card comes in
              const opacity = useTransform(scrollYProgress, [start, end, end + 0.1], [0, 1, 0.5]);
              const scale = useTransform(scrollYProgress, [start, end, end + 0.1], [0.8, 1, 0.95]);

              return (
                <motion.div
                  key={index}
                  style={{ y, opacity, scale }}
                  className="absolute inset-0 flex flex-col justify-center gap-6"
                >
                  <div className="relative w-full h-[40vh] md:h-[60vh] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-black/50 backdrop-blur-md">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                    {/* Fallback pattern if image is missing */}
                    <div className="absolute inset-0 bg-gray-900 -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50 mix-blend-overlay" />

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover opacity-60"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />

                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex flex-col gap-3">
                      <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 drop-shadow-sm leading-relaxed max-w-lg">
                        {item.description}
                      </p>
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
