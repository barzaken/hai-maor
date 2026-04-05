"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function AboutMeSection() {
	return (
		<section className="relative py-24 md:py-32 w-full overflow-hidden bg-background" dir="rtl">
			<div className="container mx-auto px-4 max-w-7xl">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
					{/* Image Side (Right in RTL) */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
						className="relative h-[60dvh] w-full rounded-[2.5rem] overflow-hidden order-2 md:order-1"
					>
						<div className="absolute inset-0 bg-[#f0c246]10 mix-blend-color-burn z-10 pointer-events-none" />
						<motion.div
							initial={{ filter: "grayscale(100%)" }}
							whileInView={{ filter: "grayscale(0%)" }}
							viewport={{ once: true }}
							transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
							className="h-full w-full"
						>
							<Image
								alt="חי מאור"
								src="/img/hero-nobg.png"
								fill
								className="object-cover object-top select-none"
							/>
						</motion.div>
					</motion.div>

					{/* Text Side (Left in RTL) */}
					<motion.div
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						variants={{
							hidden: {},
							show: { transition: { staggerChildren: 0.1 } }
						}}
						className="flex flex-col items-start order-1 md:order-2"
					>
						<motion.h2
							variants={{
								hidden: { opacity: 0, x: -20 },
								show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
							}}
							className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6"
						>
							המומחיות שלי – <span className="text-foreground/50">הביטחון שלכם.</span>
						</motion.h2>

						<motion.div
							variants={{
								hidden: { opacity: 0, y: 20 },
								show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
							}}
							className="prose prose-invert prose-lg text-gray-400 mb-8"
						>
							<p>
								שחקן בתיאטרון בית ליסין ב-20 השנים האחרונות ובוגר הסטודיו של יורם לוינשטיין. בעשור האחרון אני מלווה יזמים ומרצים בבניית המותג האישי שלהם על הבמה.
							</p>
							<p>
								אני משלב בין הניסיון הבימתי העשיר לבין לימודי קואוצ&apos;ינג (EMC-I) כדי להבטיח תוצאות מדידות בשטח – בין אם זה בפרזנטציה למשקיעים ובין אם בנאום מרכזי בכנס.
							</p>
						</motion.div>

						{/* Trust Signals / Logos */}
						<motion.div
							variants={{
								hidden: { opacity: 0, y: 20 },
								show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
							}}
							className="flex flex-col gap-3 w-full"
						>
							<p className="text-sm font-medium text-foreground tracking-wide">ניסיון מקצועי על במות ומסכים:</p>
							<div className="flex flex-wrap items-center gap-6 opacity-60 grayscale mt-2">
								{/* Using text blocks as placeholders for logos, or if there were actual images, we'd use them. */}
								<span className="text-xl font-bold font-serif">בית ליסין</span>
								<span className="text-xl font-bold font-sans">HOT</span>
								<span className="text-xl font-bold font-sans tracking-widest">yes</span>
								<span className="text-xl font-bold tracking-tight">כאן 11</span>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
