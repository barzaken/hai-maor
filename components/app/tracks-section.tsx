"use client";

import { motion } from "motion/react";
import { ArrowLeftIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const trackImageTone =
	"object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out";

const tracks = [
	{
		title: "מפגשים אישיים (VIP)",
		description: "ליווי אישי מ-A ל-B, כולל צילום וידאו לשיפור תוצאות בלייב ומבחן התוצאה.",
		featured: true,
		images: ["/img/tracks/personal.jpeg"],
	},
	{
		title: "סדנת פרקטיקום לצוותים",
		description: "4-5 שעות ממוקדות לקבוצות קטנות (עד 30 איש) עם דגש על תרגול מעשי מול מצלמה.",
		featured: false,
		// images: ["/img/tracks/teams.jpeg", "/img/tracks/teams2.jpeg"],
		images: ["/img/tracks/teams.jpeg"],
	},
	{
		title: "הרצאה חווייתית",
		description: "שעה וחצי של שבירת מיתוסים, הומור וכלים למחשבה מחוץ לקופסה עבור קהלים גדולים.",
		featured: false,
		// images: ["/img/tracks/lecture.jpeg", "/img/tracks/lecture2.jpeg"],
		images: ["/img/tracks/lecture.jpeg"],
	},
	{
		title: "הקורס המלא",
		subtitle: "(אמנות הפרזנטציה)",
		description: "שמונה מפגשי עומק המסתיימים באירוע חשיפה בסגנון TED.",
		featured: false,
		images: ["/img/tracks/full-course.jpeg"],
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
						מליווי אישי אחד על אחד ועד להרצאות וסדנאות לחברות ואירגונים.
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
							{/* Background image(s) + overlay — B&W matches parallax-features parallaxContent */}
							{track.images.length > 0 && (
								<div className="absolute inset-0 z-0">
									{track.images.length === 1 ? (
										<img
											src={track.images[0]}
											alt={track.title}
											className={cn(
												"w-full h-full transition-transform duration-700 group-hover:scale-110",
												trackImageTone
											)}
											loading="lazy"
											decoding="async"
										/>
									) : (
										<div className="absolute inset-0 grid grid-cols-2 gap-2 md:gap-3 p-2 md:p-3">
											{track.images.map((src, imgIndex) => (
												<div
													key={src}
													className="relative min-h-0 h-full rounded-xl overflow-hidden shadow-inner"
												>
													<img
														src={src}
														alt={`${track.title} — ${imgIndex + 1}`}
														className={cn(
															"absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-110",
															trackImageTone
														)}
														loading="lazy"
														decoding="async"
													/>
												</div>
											))}
										</div>
									)}
									<div
										className={cn(
											"absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20 pointer-events-none",
											track.featured && "from-black via-black/60 to-transparent"
										)}
									/>
								</div>
							)}

							{/* Soft Glow on Featured */}
							{track.featured && (
								<div className="absolute inset-0 bg-gradient-to-br from-[#f0c246]/10 to-transparent opacity-50 pointer-events-none z-1" />
							)}

							<div className="relative z-10">
								<h3 className={cn(
									"text-2xl font-semibold mb-1",
									track.featured ? "text-white" : "text-foreground"
								)}>
									{track.title}
								</h3>
								{track.subtitle && (
									<p className="text-sm font-medium text-[#f0c246] mb-4">{track.subtitle}</p>
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
									track.featured ? "text-[#f0c246] hover:text-emerald-300" : "text-foreground hover:text-gray-300"
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
