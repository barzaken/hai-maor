import { cn } from "@/lib/utils";
import { DecorIcon } from "@/components/ui/decor-icon";
import { FullWidthDivider } from "@/components/ui/full-width-divider";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon, PhoneCallIcon } from "lucide-react";
import { InlineEmphasis } from "@/components/ui/inline-emphasis";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";

export function HeroSection() {
	return (
		<section id="home" dir="rtl" className="scroll-mt-24">
			<div className="relative flex flex-col items-center justify-center gap-5 overflow-hidden px-4 py-12 md:px-4 md:py-24 lg:py-12">
				<Spotlight className="-top-44 left-1/2 opacity-80 md:-top-24 md:left-[62%]" fill="#a16207" />
				<Spotlight className="-top-64 left-[12%] opacity-55" fill="#854d0e" />
				{/* X Faded Borders & Shades */}
				<div
					aria-hidden="true"
					className="absolute inset-0 -z-1 size-full overflow-hidden"
				>
					<div
						className={cn(
							"absolute -inset-x-20 inset-y-0 z-0 rounded-full",
							"bg-[radial-gradient(ellipse_at_center,theme(--color-foreground/.1),transparent,transparent)]",
							"blur-[50px]"
						)}
					/>
					<div className="absolute inset-y-0 left-4 w-px bg-linear-to-b from-transparent via-border to-border md:left-8" />
					<div className="absolute inset-y-0 right-4 w-px bg-linear-to-b from-transparent via-border to-border md:right-8" />
					<div className="absolute inset-y-0 left-8 w-px bg-linear-to-b from-transparent via-border/50 to-border/50 md:left-12" />
					<div className="absolute inset-y-0 right-8 w-px bg-linear-to-b from-transparent via-border/50 to-border/50 md:right-12" />
				</div>
				<div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-5 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-start lg:gap-10 lg:[direction:ltr]">
					<div dir="rtl" className="flex w-full flex-col items-center lg:items-start">
						<a
							className={cn(
								"group mx-auto flex w-fit items-center gap-3 rounded-sm border bg-card p-1 shadow lg:mx-0",
								"fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards transition-all delay-500 duration-500 ease-out"
							)}
							href="#"
						>
							<div dir="rtl" className="rounded-xs border bg-card px-1.5 py-0.5 shadow-sm">
								<p className="font-mono text-xs">חדש</p>
							</div>

							<span className="text-xs">נפתחה הרשמה לליווי אישי ולסדנאות</span>
							<span className="block h-5 border-l" />

							<div className="pl-1">
								<ArrowLeftIcon className="size-3 -translate-x-0.5 duration-150 ease-out group-hover:translate-x-0.5" />
							</div>
						</a>

						<h1
							className={cn(
								"mt-5 max-w-2xl text-balance text-center text-3xl text-foreground md:text-5xl lg:mt-6 lg:text-right lg:text-6xl",
								"fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-100 duration-500 ease-out"
							)}
						>
							נוכחות. ביטחון. השפעה.
						</h1>

						<p
							className={cn(
								"mt-4 text-center text-muted-foreground text-sm tracking-wider sm:text-lg lg:text-right",
								"fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards delay-200 duration-500 ease-out"
							)}
						>
							<InlineEmphasis tone="blue" variant="highlight">במה עסקית</InlineEmphasis>: ליווי למנהלים, יזמים וצוותים <br /> לעמידה מול קהל ומצלמה.
						</p>

						<div className="fade-in slide-in-from-bottom-10 mt-2 flex w-fit animate-in items-center justify-center gap-3 fill-mode-backwards pt-2 delay-300 duration-500 ease-out lg:justify-start">
							<Button variant="outline">
								<PhoneCallIcon data-icon="inline-start" />{" "}
								שיחת היכרות
							</Button>
							<Button>
								קראו עוד{" "}
								<ArrowLeftIcon data-icon="inline-end" />
							</Button>
						</div>
					</div>

					<div className="relative hidden h-[560px] w-full items-start justify-center lg:flex">
						<div
							aria-hidden="true"
							className="absolute inset-x-[8%] bottom-14 h-64 bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-amber-300)_48%,transparent)_0%,transparent_68%)] blur-2xl"
						/>
						<Image
							priority
							alt="חי מאור"
							className="pointer-events-none h-full w-auto max-w-[96%] select-none object-contain object-top drop-shadow-[0_22px_55px_color-mix(in_srgb,var(--color-amber-900)_30%,transparent)]"
							height={1600}
							src="/img/hero-nobg.png"
							width={1100}
						/>
					</div>
				</div>
			</div>
			<div className="relative lg:hidden">
				<DecorIcon className="size-4" position="top-left" />
				<DecorIcon className="size-4" position="top-right" />
				<DecorIcon className="size-4" position="bottom-left" />
				<DecorIcon className="size-4" position="bottom-right" />

				<FullWidthDivider className="-top-px" />
				<div className="relative h-[380px] overflow-hidden sm:h-[460px]">
					<div
						aria-hidden="true"
						className="absolute inset-0 bg-[radial-gradient(circle_at_50%_78%,color-mix(in_srgb,var(--color-amber-300)_55%,transparent)_0%,transparent_58%)]"
					/>
					<div
						aria-hidden="true"
						className="absolute inset-x-0 bottom-0 h-44 bg-linear-to-t from-background via-background/65 to-transparent sm:h-52"
					/>

						<Image
							priority
							alt="חי מאור"
							className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-[92%] w-auto max-w-[92vw] select-none object-contain object-bottom drop-shadow-[0_18px_50px_color-mix(in_srgb,var(--color-amber-800)_35%,transparent)] sm:h-[96%] sm:max-w-[74vw] lg:h-[108%] lg:max-w-[78vw] xl:h-[112%] xl:max-w-[72vw]"
							height={1600}
						src="/img/hero-nobg.png"
						width={1100}
					/>
				</div>
				<FullWidthDivider className="-bottom-px" />
			</div>
		</section>
	);
}
