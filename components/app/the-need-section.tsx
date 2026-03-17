"use client";

import { motion } from "motion/react";
import { Presentation, Globe, Video, Mic } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
	{
		title: "מצגות משקיעים ו-Pitch",
		description: "לגייס את הכסף שאתה צריך עם מסר חד וממוקד.",
		icon: Presentation,
		className: "md:col-span-2",
		image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format&fit=crop",
	},
	{
		title: "כנסים בארץ ובחו״ל",
		description: "להחזיק במה מול מאות אנשים בכריזמה נדירה.",
		icon: Globe,
		className: "md:col-span-1",
		image: "https://images.unsplash.com/photo-1560439514-0fc9d2cd5e1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		title: "ישיבות דירקטוריון וזום",
		description: "לשדר סמכות וביטחון גם דרך המסך, מול אלו שמקבלים החלטות.",
		icon: Video,
		className: "md:col-span-1",
		image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=800&auto=format&fit=crop",
	},
	{
		title: "וובינארים ומכירות",
		description: "להפוך מסרים יבשים לחוויה אינטראקטיבית ומשפיעה שסוגרת עסקאות.",
		icon: Mic,
		className: "md:col-span-2",
		image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop",
	},
];

export function TheNeedSection() {
	return (
		<section className="relative py-24 md:py-32 w-full overflow-hidden" dir="rtl">
			{/* Ambient Noise / Lighting */}
			<div className="absolute inset-0 pointer-events-none -z-10">
				<div className="absolute top-0 right-1/4 w-[30rem] h-[30rem] bg-[#f5f511]/5 blur-[120px] rounded-full mix-blend-screen" />
				<div className="absolute bottom-0 left-1/4 w-[20rem] h-[20rem] bg-[#f5f511]/5 blur-[100px] rounded-full mix-blend-screen" />
			</div>

			<div className="container mx-auto px-4 max-w-7xl">
				<div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-24">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
						className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground mb-6"
					>
						בעולם העסקי <span className="text-foreground/50">המסר שלך חייב</span>{" "}
						<motion.span
							initial={{ backgroundColor: "transparent", color: "inherit" }}
							whileInView={{
								backgroundColor: "#f5f511",
								color: "#000",
								transition: { delay: 2, duration: 0.6, ease: "circOut" },
							}}
							viewport={{ once: true }}
							className="px-2 py-0.5 rounded-sm inline-block"
						>
							לבלוט.
						</motion.span>
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
						className="text-base text-gray-400 leading-relaxed md:text-lg"
					>
						בעידן ה-AI, כולם יכולים להקים אפליקציה או עסק, אבל בסופו של דבר צריך לעמוד מול קהל, להציג את הרעיון ולמכור אותו.
						יזמים ואנשי עסקים רבים חווים תקיעות מחשבתית, פחד במה או חוסר ביטחון שמונעים מהם להעביר את המסר בצורה מזוקקת ואותנטית.
					</motion.p>
				</div>

				<motion.div
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					variants={{
						hidden: {},
						show: {
							transition: {
								staggerChildren: 0.1,
							},
						},
					}}
					className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]"
				>
					{items.map((item, i) => (
						<motion.div
							key={i}
							variants={{
								hidden: { opacity: 0, y: 20 },
								show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
							}}
							className={cn(
								"group relative p-8 rounded-[2.5rem] bg-white/5 border border-white/5 backdrop-blur-xl overflow-hidden flex flex-col items-start justify-end transition-colors duration-500",
								item.className
							)}
						>
							{/* Static Subtle Border */}
							<div className="absolute inset-0 z-0 pointer-events-none">
								<div className="absolute inset-[-1px] rounded-[2.5rem] border border-[#f5f511]/15 group-hover:border-[#f5f511]/40 transition-colors duration-500" />
							</div>

							{/* Background Image */}
							{item.image && (
								<div className="absolute inset-0 z-0">
									<img
										src={item.image}
										alt={item.title}
										className="w-full h-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-50"
										loading="lazy"
										decoding="async"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
								</div>
							)}

							{/* Hover Gradient Effect */}
							<div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-1" />

							<div className="absolute top-8 right-8 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 mb-auto z-10">
								<item.icon className="w-6 h-6 text-foreground/80 group-hover:scale-110 transition-transform duration-500 ease-out" />
							</div>

							<div className="relative z-10 w-full text-right">
								<h3 className="text-xl md:text-2xl font-medium text-foreground mb-3">{item.title}</h3>
								<p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-500 max-w-[80%] leading-relaxed">
									{item.description}
								</p>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
