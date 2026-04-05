"use client";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/app/logo";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/app/mobile-nav";

export const navLinks = [
	{
		label: "עליי",
		href: "#about",
	},
	{
		label: "תהליך העבודה",
		href: "#story",
	},
	{
		label: "וידאו ותוכן",
		href: "#media",
	},
	{
		label: "יצירת קשר",
		href: "#contact",
	},
];


export function Header() {
	const scrolled = useScroll(10);

	return (
		<header
			dir="rtl"
			className={cn(
				"fixed top-0 z-50 w-full transition-all duration-500 pt-4 px-4 flex justify-center",
				{
					"pt-2": scrolled,
				}
			)}
		>
			<div
				className={cn(
					"mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 transition-all duration-500 rounded-2xl",
					scrolled
						? "bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
						: "bg-transparent border-transparent"
				)}
			>
				<a
					className="group flex items-center justify-center p-2 transition-transform hover:scale-105"
					href="#"
				>
					<Logo className="h-6 w-auto" />
				</a>

				<div className="hidden flex-1 items-center md:flex">
					<div className="flex flex-1 items-center justify-center gap-6">
						{navLinks.map((link) => (
							<a
								key={link.label}
								href={link.href}
								className="text-sm font-medium text-gray-300 hover:text-[#f0c246] transition-colors relative group"
							>
								{link.label}
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f0c246] transition-all group-hover:w-full" />
							</a>
						))}
					</div>
					<div className="flex items-center gap-4">
						<a
							href="#contact"
							className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
						>
							אני רוצה לשמוע עוד
						</a>
						<a
							href="#story"
							className="inline-flex h-10 items-center justify-center rounded-xl bg-[#f0c246] px-6 text-sm font-semibold text-black transition-colors hover:bg-[#d4d40b] shadow-[0_0_20px_rgba(245,245,17,0.3)] hover:shadow-[0_0_30px_rgba(245,245,17,0.5)]"
						>
							בואו נכיר
						</a>
					</div>
				</div>
				<MobileNav />
			</div>
		</header>
	);
}
