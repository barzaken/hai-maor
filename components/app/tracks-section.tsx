"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowLeftIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const AUTO_ADVANCE_MS = 5000;

const trackImageTone =
	"object-cover transition-all duration-700 ease-out";

const tracks = [
	{
		title: "מפגשים אישיים (VIP)",
		description: "ליווי אישי מ-A ל-B, כולל צילום וידאו לשיפור תוצאות בלייב ומבחן התוצאה.",
		featured: true,
		images: ["/img/tracks/personal2.jpg"],
	},
	{
		title: "סדנת פרקטיקום לצוותים",
		description: "4-5 שעות ממוקדות לקבוצות קטנות (עד 30 איש) עם דגש על תרגול מעשי מול מצלמה.",
		featured: false,
		images: ["/img/tracks/teams.jpeg"],
	},
	{
		title: "הרצאה חווייתית",
		description: "שעה וחצי של שבירת מיתוסים, הומור וכלים למחשבה מחוץ לקופסה עבור קהלים גדולים.",
		featured: false,
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
	const [expandedIndex, setExpandedIndex] = useState(0);

	useEffect(() => {
		const id = window.setInterval(() => {
			setExpandedIndex((i) => (i + 1) % tracks.length);
		}, AUTO_ADVANCE_MS);
		return () => window.clearInterval(id);
	}, [expandedIndex]);

	const selectTrack = (index: number) => {
		setExpandedIndex(index);
	};

	return (
		<section className="relative py-20 md:py-28 w-full overflow-hidden" dir="rtl">
			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
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
					initial={{ opacity: 0, y: 24 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
					className="relative w-full min-w-0"
				>
					<div className="flex w-full min-w-0 items-stretch gap-1">
						{tracks.map((track, i) => {
							const isExpanded = i === expandedIndex;
							return (
								<div
									key={i}
									role="button"
									tabIndex={0}
									aria-expanded={isExpanded}
									aria-label={track.title}
									onClick={() => selectTrack(i)}
									onKeyDown={(e) => {
										if (e.key === "Enter" || e.key === " ") {
											e.preventDefault();
											selectTrack(i);
										}
									}}
									className={cn(
										"group relative min-w-0 basis-0 cursor-pointer overflow-hidden rounded-3xl outline-none",
										"transition-all duration-500 ease-in-out",
										"focus-visible:ring-2 focus-visible:ring-[#f0c246] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
										track.featured && isExpanded
											? "shadow-[0_0_40px_rgba(255,255,255,0.06)]"
											: "shadow-sm"
									)}
									style={{
										flexGrow: isExpanded ? 24 : 5,
										flexShrink: 1,
										flexBasis: 0,
										height: "24rem",
									}}
								>
									{track.images.length > 0 && (
										<div className="absolute inset-0 z-0">
											{isExpanded && track.images.length > 1 ? (
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
																	"absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105",
																	trackImageTone,
																	isExpanded ? "grayscale-0" : "grayscale"
																)}
																loading="lazy"
																decoding="async"
															/>
														</div>
													))}
												</div>
											) : (
												<img
													src={track.images[0]}
													alt={track.title}
													className={cn(
														"w-full h-full transition-transform duration-700 group-hover:scale-105",
														trackImageTone,
														isExpanded ? "grayscale-0" : "grayscale"
													)}
													loading="lazy"
													decoding="async"
												/>
											)}
											<div
												className={cn(
													"absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/15 pointer-events-none transition-opacity duration-500",
													isExpanded ? "opacity-100" : "opacity-90",
													track.featured && isExpanded && "from-black via-black/55 to-transparent"
												)}
											/>
										</div>
									)}

									{track.featured && isExpanded && (
										<div className="absolute inset-0 bg-gradient-to-br from-[#f0c246]/10 to-transparent opacity-50 pointer-events-none z-[1]" />
									)}

									<div
										className={cn(
											"relative z-10 flex h-full flex-col justify-end p-5 md:p-6 transition-opacity duration-500",
											isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"
										)}
										aria-hidden={!isExpanded}
									>
										<h3
											className={cn(
												"text-xl font-semibold mb-0.5 md:text-2xl",
												track.featured ? "text-white" : "text-foreground"
											)}
										>
											{track.title}
										</h3>
										{track.subtitle && (
											<p className="text-xs font-medium text-[#f0c246] mb-2 md:text-sm">{track.subtitle}</p>
										)}
										<p
											className={cn(
												"text-xs leading-relaxed line-clamp-4 md:text-sm",
												track.featured ? "text-gray-300" : "text-gray-400"
											)}
										>
											{track.description}
										</p>
										<button
											type="button"
											className={cn(
												"mt-4 inline-flex items-center gap-2 text-xs font-medium transition-colors w-fit md:text-sm",
												track.featured
													? "text-[#f0c246] hover:text-emerald-300"
													: "text-foreground hover:text-gray-300"
											)}
											onClick={(e) => e.stopPropagation()}
										>
											לפרטים נוספים
											<ArrowLeftIcon className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:-translate-x-1 transition-transform" />
										</button>
									</div>
								</div>
							);
						})}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
