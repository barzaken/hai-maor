"use client";

import { motion } from "motion/react";
import { ArrowLeftIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const tracks = [
	{
		title: "מפגשים אישיים (VIP)",
		description: "ליווי אישי מ-A ל-B, כולל צילום וידאו לשיפור תוצאות בלייב ומבחן התוצאה.",
		featured: true,
		image: "/img/tracks/vip.png",
	},
	{
		title: "סדנת פרקטיקום לצוותים",
		description: "4-5 שעות ממוקדות לקבוצות קטנות (עד 30 איש) עם דגש על תרגול מעשי מול מצלמה.",
		featured: false,
		image: "/img/tracks/workshop.png",
	},
	{
		title: "הרצאה חווייתית",
		description: "שעה וחצי של שבירת מיתוסים, הומור וכלים למחשבה מחוץ לקופסה עבור קהלים גדולים.",
		featured: false,
		image: "/img/tracks/lecture.png",
	},
	{
		title: "הקורס המלא",
		subtitle: "(אמנות הפרזנטציה)",
		description: "שמונה מפגשי עומק המסתיימים באירוע חשיפה בסגנון TED.",
		featured: false,
		image: "/img/tracks/ted.png",
	},
];

export function TracksSection() {
	return (
		<section className="relative py-20 md:py-28 w-full overflow-hidden" dir="rtl">
			<div className="container mx-auto px-4 max-w-6xl">
				<div className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
						className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6"
					>
						בוחרים את הבמה הנכונה עבורכם.
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
						className="text-base text-gray-400 leading-relaxed md:text-lg"
					>
						מליווי אישי אחד על אחד ועד להרצאות וסדנאות לחברות ואגונים.
					</motion.p>
				</div>

				<motion.div
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					variants={{
						hidden: {},
						show: {
							transition: { staggerChildren: 0.1 },
						},
					}}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
				>
					{tracks.map((track, i) => (
						<motion.div
							key={i}
							variants={{
								hidden: { opacity: 0, y: 20 },
								show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
							}}
							whileHover={{ y: -8 }}
							className={cn(
								"group relative h-[420px] p-8 rounded-3xl border flex flex-col justify-end overflow-hidden transition-all duration-500",
								track.featured
									? "border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.05)]"
									: "border-border shadow-sm hover:border-white/20"
							)}
						>
							{/* Background Image with Overlay */}
							{track.image && (
								<>
									<div className="absolute inset-0 z-0">
										<img
											src={track.image}
											alt={track.title}
											className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
										/>
										{/* Progressive Overlay for Readability */}
										<div className={cn(
											"absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20",
											track.featured && "from-black via-black/60 to-transparent"
										)} />
									</div>
								</>
							)}

							{/* Soft Glow on Featured */}
							{track.featured && (
								<div className="absolute inset-0 bg-gradient-to-br from-[#f5f511]/10 to-transparent opacity-50 pointer-events-none z-1" />
							)}

							<div className="relative z-10">
								<h3 className={cn(
									"text-2xl font-semibold mb-1",
									track.featured ? "text-white" : "text-foreground"
								)}>
									{track.title}
								</h3>
								{track.subtitle && (
									<p className="text-sm font-medium text-[#f5f511] mb-4">{track.subtitle}</p>
								)}
								<p className={cn(
									"text-sm leading-relaxed mt-4 line-clamp-3 transition-opacity duration-300",
									track.featured ? "text-gray-300" : "text-gray-400",
									"group-hover:opacity-100"
								)}>
									{track.description}
								</p>

								<button className={cn(
									"mt-8 inline-flex items-center gap-2 text-sm font-medium transition-colors w-fit",
									track.featured ? "text-[#f5f511] hover:text-emerald-300" : "text-foreground hover:text-gray-300"
								)}>
									לפרטים נוספים
									<ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
								</button>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
