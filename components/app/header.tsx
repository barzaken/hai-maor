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
				"sticky top-0 z-50 mx-auto w-full max-w-4xl border-transparent border-b md:rounded-md md:border md:transition-all md:ease-out",
				{
					"border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50 md:top-2 md:max-w-3xl md:shadow":
						scrolled,
				}
			)}
		>
			<nav
				className={cn(
					"flex h-20 w-full items-center justify-between px-4 md:h-24 md:transition-all md:ease-out",
					{
						"md:px-2": scrolled,
					}
				)}
			>
				{/* <a
					className="rounded-md p-1 hover:bg-muted dark:hover:bg-muted/50"
					href="#home"
				> */}
					<Logo className="h-14 w-auto md:h-32" />
				{/* </a> */}
				<div className="hidden items-center gap-2 md:flex">
					<div>
						{navLinks.map((link) => (
							<Button render={<a href={link.href}></a>} key={link.label} size="sm" variant="ghost">
								{link.label}
							</Button>
						))}
					</div>
					<Button render={<a href="#story"></a>} size="sm" variant="outline">
						שיחת היכרות
					</Button>
					<Button render={<a href="#contact"></a>} size="sm">יצירת קשר</Button>
				</div>
				<MobileNav />
			</nav>
		</header>
	);
}
