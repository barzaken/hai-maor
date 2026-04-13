"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { CheckIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof tvShows)[number] | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null!);
  const sectionRef = useRef<HTMLElement>(null!);

  // Only run animations when section is visible
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // TV Auto-switching logic - paused when off-screen
  useEffect(() => {
    if (active || !isVisible) return;

    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % tvShows.length);
        setTimeout(() => setIsGlitching(false), 200);
      }, 150);
    }, 4000);

    return () => clearInterval(interval);
  }, [active, isVisible]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <section ref={sectionRef} dir="rtl" className="relative w-full py-24 md:py-32 overflow-hidden bg-background">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-[40rem] h-[40rem] bg-[#f0c246]/5 blur-[120px] rounded-full mix-blend-screen -z-10 pointer-events-none translate-y-[-50%] -translate-x-1/2" />

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 h-full w-full bg-black/80 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0 z-[100] grid place-items-center px-4">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-md transition-colors"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="flex h-full w-full max-w-[700px] flex-col overflow-hidden rounded-[2.5rem] bg-zinc-950 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] md:h-fit md:max-h-[90%]"
            >
              <motion.div layoutId={`image-${active.title}-${id}`} className="relative h-72 w-full md:h-80">
                <Image
                  fill
                  src={active.src}
                  alt={active.title}
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent" />
              </motion.div>

              <div className="flex flex-col flex-1 p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-2"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.subtitle}-${id}`}
                      className="text-sm font-medium text-[#f0c246]"
                    >
                      {active.subtitle}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="shrink-0 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>

                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 text-base text-gray-400 leading-relaxed overflow-y-auto pr-2 custom-scrollbar"
                >
                  <p>{active.summary}</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Text Content - order-1 on mobile, order-1 on lg */}
          <div className="flex flex-col items-start order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0c246]10 border border-[#f0c246]/20 text-[#f0c246] text-sm font-medium mb-6">
              על המסך
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight mb-6">
              כנראה שכבר <span className="text-foreground/50">נפגשנו.</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-400 max-w-[45ch] mb-8">
              במהלך הקריירה שלי השתתפתי במגוון סדרות ישראליות בולטות שמציגות שילוב של קומדיה, דרמה ופשע. הניסיון הזה הוא הבסיס לכלים שאני מעביר הלאה.
            </p>

            {/* <div className="space-y-4 text-sm w-full">
              <p className="font-medium text-gray-300">הכלים שאנחנו שואבים מעולם המסך:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "העברת מסר באמצעות מבט, התנהגות וטון",
                  "שימוש בטונציה כדי למשוך תשומת לב",
                  "לשדר אמינות במצבי לחץ",
                  "החזקת פאסון תוך שידור סמכות",
                ].map((feature) => (
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5" key={feature}>
                    <div className="w-6 h-6 rounded-full bg-[#f0c246]/20 flex items-center justify-center text-[#f0c246] shrink-0">
                      <CheckIcon className="w-4 h-4" />
                    </div>
                    <span className="text-gray-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div> */}
          </div>

          {/* TV Frame & Cards - order-2 on mobile, order-2 on lg */}
          <div className="order-2 w-full max-w-[600px] mx-auto lg:max-w-none">
            <div className="relative aspect-[4/3] w-full bg-zinc-900 rounded-[3rem] border-[12px] border-zinc-800 shadow-[0_0_100px_rgba(0,0,0,1)] p-4 overflow-hidden">
              {/* TV Screen Reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-10" />

              {/* Screen Content */}
              <div
                className={cn(
                  "relative h-full w-full rounded-2xl overflow-hidden bg-black transition-all duration-75",
                  isGlitching && "scale-[1.05] brightness-150 saturate-200"
                )}
                style={isGlitching ? {
                  transform: `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px) skew(${Math.random() * 5 - 2.5}deg)`,
                  filter: `hue-rotate(${Math.random() * 90}deg) blur(${Math.random() * 2}px)`
                } : {}}
              >
                {/* Glitch Overlays */}
                <AnimatePresence>
                  {isGlitching && (
                    <>
                      {/* Static Noise Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.8, 0.4, 1, 0.2] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, repeat: Infinity }}
                        className="absolute inset-0 z-40 pointer-events-none mix-blend-overlay"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                          backgroundSize: '150px 150px'
                        }}
                      />

                      {/* Random Color Bars */}
                      <motion.div
                        initial={{ y: "-100%" }}
                        animate={{ y: ["-100%", "100%"] }}
                        transition={{ duration: 0.1, repeat: Infinity }}
                        className="absolute inset-x-0 h-4 bg-white/30 z-30 pointer-events-none blur-md"
                      />

                      {/* RGB Split Overlays */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5, x: [-5, 5, -2, 2, 0] }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-cyan-500/30 mix-blend-screen z-20"
                      />
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5, x: [5, -5, 2, -2, 0] }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-red-500/30 mix-blend-screen z-20"
                      />
                    </>
                  )}
                </AnimatePresence>

                <div className="h-full w-full relative">
                  {tvShows.map((show, index) => (
                    <motion.div
                      key={show.title}
                      initial={false}
                      animate={{
                        opacity: activeIndex === index ? 1 : 0,
                        y: isGlitching ? (index % 2 === 0 ? "10%" : "-10%") : "0%",
                        scale: activeIndex === index ? 1 : 1.1,
                      }}
                      transition={{
                        opacity: { duration: 0.3 },
                        y: { duration: 0.1, repeat: isGlitching ? Infinity : 0, repeatType: "mirror" },
                        scale: { duration: 0.5 }
                      }}
                      onClick={() => setActive(show)}
                      className={cn(
                        "absolute inset-0 cursor-pointer",
                        activeIndex === index ? "pointer-events-auto" : "pointer-events-none"
                      )}
                    >
                      <Image
                        fill
                        src={show.src}
                        alt={show.title}
                        className="object-fill"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      <div className="absolute bottom-6 right-6 left-6 text-right">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{show.title}</h3>
                        <p className="text-sm font-medium text-[#f0c246]">{show.subtitle}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Scanlines Effect */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] z-30 opacity-20" />
              </div>

              {/* Physical TV Buttons/Decals */}
              <div className="absolute top-1/2 -right-1 translate-x-full h-32 w-2 bg-zinc-800 rounded-r-lg" />
              <div className="absolute bottom-6 right-8 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_5px_red] animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-zinc-700" />
              </div>
            </div>

            {/* TV Stand */}
            <div className="mx-auto w-1/2 h-4 bg-zinc-800 rounded-b-xl shadow-2xl" />
            <div className="mx-auto w-2/3 h-2 bg-zinc-900/50 blur-sm mt-4" />
          </div>
        </div>
      </div>
    </section>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const tvShows = [
  {
    title: "קופה ראשית",
    subtitle: "קומדיה | כאן 11 | 2018",
    src: "https://static.tvmaze.com/uploads/images/original_untouched/415/1037874.jpg",
    ctaText: "לעמוד הסדרה",
    ctaLink: "https://www.tvmaze.com/shows/48857/cash-register",
    summary:
      "סדרה קומית שמתרחשת בסופרמרקט כושל בעיירה פריפריאלית, ועוקבת אחרי צוות העובדים והלקוחות הקבועים. ההומור בנוי על מצבים יומיומיים, דמויות אקסצנטריות וביקורת חברתית חדה.",
  },
  {
    title: "השוטרים",
    subtitle: "דרמת פשע | קשת 12 | 2021",
    src: "https://static.tvmaze.com/uploads/images/original_untouched/294/736472.jpg",
    ctaText: "לעמוד הסדרה",
    ctaLink: "https://www.tvmaze.com/shows/53170/line-in-the-sand",
    summary:
      "קצין בילוש מצטיין חוזר לעיר הולדתו ומגלה ארגון פשיעה מקומי שמכתיב את סדר היום. זו דרמה משטרתית על נאמנות, שחיקה מוסרית ומאבק בין חוק לבין קשרים אישיים.",
  },
  {
    title: "מלכות",
    subtitle: "דרמת פשע | HOT3 | 2018",
    src: "https://static.tvmaze.com/uploads/images/original_untouched/416/1041430.jpg",
    ctaText: "לעמוד הסדרה",
    ctaLink: "https://www.tvmaze.com/shows/63187/mafia-queens",
    summary:
      "לאחר חיסול הנהגת משפחת פשע, נשות המשפחה מוצאות את עצמן בקדמת הזירה הפלילית. הסדרה עוסקת בהישרדות, מאבקי כוח ומעבר חד מתלות לשליטה בעולם גברי ואלים.",
  },
  {
    title: "חזרות",
    subtitle: "דרמה קומית | כאן 11 | 2020",
    src: "https://static.tvmaze.com/uploads/images/original_untouched/293/734997.jpg",
    ctaText: "לעמוד הסדרה",
    ctaLink: "https://www.tvmaze.com/shows/53092/chazarot",
    summary:
      "זוג יוצרים נפרד בדיוק כשהתיאטרון הגדול בארץ מבקש להעלות את המחזה שכתבו יחד. מכאן מתחיל מסע טעון בין אהבה, אגו, יצירה ומשברים בחדר החזרות ומחוצה לו.",
  },
];
