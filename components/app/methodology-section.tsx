"use client";

import { motion } from "motion/react";
import { Brain, User, AudioLines, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const tools = [
	{
		title: "סטוריטלינג עסקי",
		description: "איך לספר סיפור שמרתק את המאזינים.",
		icon: Brain,
		image: "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=800&auto=format&fit=crop",
	},
	{
		title: "שפת גוף, נוכחות וכריזמה",
		description: "שימוש נכון בחלל, קשר עין ושידור סמכות ותקשורת בין אישית.",
		icon: User,
		image: "https://images.unsplash.com/photo-1552345387-67b2f85f25c6?q=80&w=1686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "דיקציה ואינטונציה",
		description: "שליטה בקול כדי למנוע מונוטוניות ולייצר עניין.",
		icon: AudioLines,
		image: "https://images.unsplash.com/photo-1764304472637-a51608cab6f2?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "התגברות על פחד קהל",
		description: "טכניקות נשימה וחשיפת פגיעות מבוקרת.",
		icon: Heart,
		image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop",
	},
];

export function MethodologySection() {
	return (
		<section className="relative py-24 md:py-32 w-full overflow-hidden bg-white/5" dir="rtl">
			<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />

			<div className="container mx-auto px-4 max-w-7xl relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					{/* Text Side */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
						className="flex flex-col items-start gap-6"
					>
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2, duration: 0.5 }}
							className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0c246]10 border border-[#f0c246]/20 text-[#f0c246] text-sm font-medium"
						>
							לא קורס משחק, זו אסטרטגיה עסקית
						</motion.div>

						<motion.h2
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
							className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight"
						>
							ארגז הכלים של <br />
							<span className="text-[#f0c246]">״במה עסקית״.</span>
						</motion.h2>

						<motion.p
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
							className="text-base text-gray-400 leading-relaxed max-w-[45ch]"
						>
							אני לא כאן כדי ללמד אתכם להיות שחקנים, אלא כדי לתת לכם את <strong className="text-foreground font-medium">ארגז הכלים והמתודולוגיה</strong> שפיתחתי ב-20 שנה על הבמות וב-15 שנות ליווי יזמים. אנחנו נזקק את המסר העסקי שלך ונשתמש בטכניקות מעולם המשחק כדי לשכלל את יכולת השכנוע.
						</motion.p>
					</motion.div>

					{/* Visual Side: Tool Cards */}
					<motion.div
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						variants={{
							hidden: {},
							show: {
								transition: {
									staggerChildren: 0.2,
									delayChildren: 1.2, // Wait for text animation
								},
							},
						}}
						className="grid grid-cols-1 sm:grid-cols-2 gap-4"
					>
						{tools.map((tool, i) => (
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
									"group relative p-6 rounded-3xl bg-background border border-border overflow-hidden min-h-[220px] flex flex-col justify-end",
									"shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-colors duration-500 hover:border-[#f0c246]/50"
								)}
							>
								{/* Background Image */}
								{tool.image && (
									<div className="absolute inset-0 z-0">
										<img
											src={tool.image}
											alt={tool.title}
											className="w-full h-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
											loading="lazy"
											decoding="async"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
									</div>
								)}

								{/* Hover Tint */}
								<div className="absolute inset-0 bg-[#f0c246]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-1" />

								<div className="w-10 h-10 rounded-xl bg-[#f0c246]10 flex items-center justify-center mb-6 text-[#f0c246] relative z-10">
									<tool.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 ease-out" />
								</div>

								<h4 className="text-lg font-medium text-foreground mb-2 relative z-10 text-right">{tool.title}</h4>
								<p className="text-sm text-gray-400 leading-relaxed relative z-10 text-right">
									{tool.description}
								</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
