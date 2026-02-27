"use client";

import React, { useRef, useState } from "react";
import { useScroll, useTransform, motion, MotionValue, useMotionValueEvent } from "motion/react";

// --- הגדרת הרעידה ---
const shakeVariants = {
    still: { x: 0, y: 0, rotate: 0 },
    shaking: {
        x: [0, -2, 2, -1, 3, 0, -2, 1],
        y: [0, 1, -1, 0, 2, -1, 0],
        rotate: [0, -0.5, 0.5, 0],
        transition: {
            duration: 0.1, // קצת מהיר יותר כדי שירגיש אינטנסיבי בזמן גלילה
            repeat: Infinity,
            repeatType: "mirror" as const,
        },
    },
};

// --- רכיב מילה בודדת ---
const Word = ({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number] }) => {
    const opacity = useTransform(progress, range, [0.2, 1]);
    
    // Interpolate color from muted gray to full color based on scroll progress
    // Light mode: gray (#888888) to dark (#1a1a1a)
    const lightColor = useTransform(progress, (latest) => {
        const [start, end] = range;
        let v = 0;
        if (latest >= start && latest <= end) {
            v = (latest - start) / (end - start);
        } else if (latest > end) {
            v = 1;
        }
        const r1 = 136, g1 = 136, b1 = 136;
        const r2 = 26, g2 = 26, b2 = 26;
        return `rgb(${Math.round(r1 + (r2 - r1) * v)}, ${Math.round(g1 + (g2 - g1) * v)}, ${Math.round(b1 + (b2 - b1) * v)})`;
    });
    
    // Dark mode: gray (#666666) to white (#ffffff)
    const darkColor = useTransform(progress, (latest) => {
        const [start, end] = range;
        let v = 0;
        if (latest >= start && latest <= end) {
            v = (latest - start) / (end - start);
        } else if (latest > end) {
            v = 1;
        }
        const r1 = 102, g1 = 102, b1 = 102;
        const r2 = 255, g2 = 255, b2 = 255;
        return `rgb(${Math.round(r1 + (r2 - r1) * v)}, ${Math.round(g1 + (g2 - g1) * v)}, ${Math.round(b1 + (b2 - b1) * v)})`;
    });
    
    return (
        <span className="relative inline-block mx-[6px] lg:mx-[10px]">
            <motion.span 
                style={{ opacity }}
            >
                <motion.span 
                    className="dark:hidden"
                    style={{ color: lightColor }}
                >
                    {children}
                </motion.span>
                <motion.span 
                    className="hidden dark:inline"
                    style={{ color: darkColor }}
                >
                    {children}
                </motion.span>
            </motion.span>
        </span>
    );
};

export default function RevealTextSection() {
    const spacerRef = useRef<HTMLDivElement>(null);

    // Ref לטיימר כדי שנוכל לבטל אותו בכל תזוזה
    const shakeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [isShaking, setIsShaking] = useState(false);

    const { scrollYProgress } = useScroll({
        target: spacerRef,
        offset: ["start end", "end end"],
    });

    const quote = "קהל מול לרעוד צריך לא";
    // const quote = "Military-grade precision meets world-class engineering.";
    const words = quote.split(" ");
    const delay = 0.45;

    const authorOpacity = useTransform(scrollYProgress, [0.6, 1], [0, 1]);

    // --- הלוגיקה החדשה: רעידה רק בזמן תנועה ---
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // בדיקה: האם אנחנו בטווח האנימציה?
        const inZone = latest >= delay && latest < 0.99;

        if (inZone) {
            // 1. אם אנחנו זזים בתוך האזור - תפעיל רעידה
            setIsShaking(true);

            // 2. נקה את הטיימר הקודם (אם היה)
            if (shakeTimeoutRef.current) {
                clearTimeout(shakeTimeoutRef.current);
            }

            // 3. קבע טיימר חדש: אם לא תהיה גלילה נוספת ב-150ms הקרובים, תעצור את הרעידה
            shakeTimeoutRef.current = setTimeout(() => {
                setIsShaking(false);
            }, 150);

        } else {
            // אם יצאנו מהאזור, תמיד תפסיק
            setIsShaking(false);
        }
    });

    return (
        <div className="static dir-rtl ">
            <main className="relative bg-[radial-gradient(var(--color-dots)_1px,transparent_1px)] mask-radial-from-10% [background-size:10px_10px] font-sans selection:bg-gray-200">
                <div className="fixed inset-0 w-full h-screen flex flex-col items-center justify-center z-0 pointer-events-none overflow-hidden">

                    <motion.div
                        variants={shakeVariants}
                        animate={isShaking ? "shaking" : "still"}
                        className="max-w-[1200px] px-6 md:px-10 flex flex-col items-center text-center mt-20 md:mt-0 origin-center"
                    >
                        <h2 className="text-4xl lg:text-6xl leading-[1.1] font-bold tracking-tighter text-[#1a1a1a] dark:text-white">


                            {words.map((word, i) => {
                                const duration = 1 - delay;
                                const start = delay + (i / words.length) * duration;
                                const end = start + (1 / words.length) * duration;

                                return (
                                    <Word key={i} progress={scrollYProgress} range={[0, 0.2]}>
                                        {word}
                                    </Word>
                                );
                            })}


                        </h2>

                        <motion.div style={{ opacity: authorOpacity }} className="mt-12 text-center">
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">ואפשר לשנות את זה</div>
                            {/* <div className="text-gray-400 text-sm mt-1">ביחד.</div> */}
                        </motion.div>
                    </motion.div>

                </div>
                <div className="relative z-10">
                    <div ref={spacerRef} className="h-[150vh] w-full pointer-events-none"></div>
                </div>
            </main>
        </div>
    );
}