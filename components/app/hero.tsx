"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import { StatsSection } from "./stats-section";
import { motion } from "motion/react";

export function HeroSection() {
	return (
		<section id="home" dir="rtl" className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col items-center justify-center">
			{/* Background Image with Overlays */}
			<div className="absolute inset-0 z-0">
				<Image
					src="/img/hai-maor-speaks.jpg"
					alt="חי מאור - מומחה לעמידה מול קהל ופרזנטציה עסקית מרצה על במה"
					fill
					priority
					className="object-cover object-center"
				/>
				{/* Dark gradient mapping to make text readable */}
				<div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
				<div className="absolute inset-0 bg-black/40" />
				<div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-[#f5f511]/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
			</div>

			<div className="container relative z-10 mx-auto px-4 w-full max-w-5xl flex flex-col items-center text-center mt-20 md:mt-0 pb-36 md:pb-0">

				<motion.div
					initial="hidden"
					animate="visible"
					variants={{
						hidden: { opacity: 0 },
						visible: {
							opacity: 1,
							transition: { staggerChildren: 0.15, delayChildren: 0.2 }
						}
					}}
					className="flex flex-col items-center gap-8"
				>
					<motion.div
						variants={{
							hidden: { opacity: 0, y: 30 },
							visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
						}}
						className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-white/10 shadow-[inner_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-md"
					>
						<span className="flex h-2 w-2 rounded-full bg-[#f5f511] animate-pulse" />
						<span className="text-sm font-medium tracking-wide text-foreground/90">
						ההרשמה לסדנאות נפתחה
						</span>
					</motion.div>
					<motion.h1
						variants={{
							hidden: { opacity: 0, scale: 0.95, y: 20 },
							visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
						}}
						className="text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[1.1] font-bold text-white drop-shadow-2xl"
					>
						לא רק לדבר.
						<br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-[#f5f511]">
							לשלוט בבמה.
						</span>
					</motion.h1>

					<motion.p
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
						}}
						className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-[60ch] drop-shadow-md font-medium"
					>
						אל תתנו לרעיון מבריק ללכת לאיבוד. בעזרת כלים מעולם המשחק והמסך, נהפוך את הפיץ׳, ההרצאה או הפרזנטציה הבאה שלכם להופעה כריזמטית, משכנעת ובלתי נשכחת.
					</motion.p>

					<motion.div
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
						}}
						className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto"
					>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="inline-flex w-full sm:w-auto items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-white/20 bg-black/20 backdrop-blur-md shadow-sm hover:bg-white/10 text-white h-14 px-10"
						>
							<PhoneCallIcon className="w-5 h-5 mr-2" />
						אני רוצה לשמוע עוד
						</motion.button>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="inline-flex w-full sm:w-auto items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-[#f5f511] text-black shadow-lg hover:bg-[#f5f511] h-14 px-10"
						>
							<ArrowLeftIcon className="w-5 h-5 ml-2" />
							בואו נכיר
						</motion.button>
					</motion.div>
				</motion.div>
			</div>

			<div className="absolute bottom-0 w-full z-20 border-t border-white/5 bg-background/50 backdrop-blur-xl">
				<div className="container mx-auto max-w-7xl py-6 px-4">
					<StatsSection />
				</div>
			</div>
		</section>
	);
}


