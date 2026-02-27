import { FullWidthDivider } from "@/components/ui/full-width-divider";
import { cn } from "@/lib/utils";
import { DecorIcon } from "@/components/ui/decor-icon";

type Logo = {
	src: string;
	alt: string;
};

export function LogoCloud() {
	return (
		<div className="grid grid-cols-2 border md:grid-cols-4">
			<LogoCard
				className="relative border-r border-b bg-secondary dark:bg-secondary/30"
				logo={{
					// src: "https://storage.efferd.com/logo/nvidia-wordmark.svg",
					src: "/img/logos/teachers.png",
					alt: "Teachers Logo",
				}}
			>
				<DecorIcon className="z-10" position="bottom-right" />
			</LogoCard>

			<LogoCard
				className="border-b md:border-r"
				logo={{
					src: "https://upload.wikimedia.org/wikipedia/he/e/e0/Tel_Aviv_New_Logo.svg",
					alt: "Tel Aviv Logo",
				}}
			/>

			<LogoCard
				className="relative border-r border-b md:bg-secondary dark:md:bg-secondary/30"
				logo={{
					src: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Badge_of_the_Israeli_Defense_Forces_2022_version.svg",
					alt: "IDF Logo",
				}}
			>
				<DecorIcon className="z-10" position="bottom-right" />
				<DecorIcon className="z-10 hidden md:block" position="bottom-left" />
			</LogoCard>

			<LogoCard
				className="relative border-b bg-secondary md:bg-background dark:bg-secondary/30 md:dark:bg-background"
				logo={{
					src: "https://upload.wikimedia.org/wikipedia/commons/2/27/Emblem_of_Israel_Police_Blue.svg",
					alt: "Police Logo",
				}}
			/>

			<LogoCard
				className="relative border-r border-b bg-secondary md:border-b-0 md:bg-background dark:bg-secondary/30 md:dark:bg-background"
				logo={{
					src: "https://upload.wikimedia.org/wikipedia/he/thumb/0/0f/Logoegged.svg/1280px-Logoegged.svg.png",
					alt: "Egged Logo",
				}}
			>
				<DecorIcon className="z-10 md:hidden" position="bottom-right" />
			</LogoCard>

			<LogoCard
				className="border-b bg-background md:border-r md:border-b-0 md:bg-secondary dark:md:bg-secondary/30"
				logo={{
					src: "https://upload.wikimedia.org/wikipedia/he/c/ca/%D7%94%D7%9E%D7%A8%D7%9B%D7%96_%D7%94%D7%90%D7%A7%D7%93%D7%9E%D7%99_%D7%9C%D7%9E%D7%A9%D7%A4%D7%98_%D7%95%D7%9C%D7%A2%D7%A1%D7%A7%D7%99%D7%9D_-_%D7%A2%D7%91%D7%A8%D7%99%D7%AA.svg",
					alt: "Ministry of Education Logo",
				}}
			/>

			<LogoCard
				className="border-r"
				logo={{
					src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/%D7%9C%D7%95%D7%92%D7%95_%D7%A9%D7%91%D7%A1_%D7%9B%D7%9C%D7%99%D7%90%D7%94_%D7%91%D7%99%D7%98%D7%97%D7%95%D7%9F_%D7%90%D7%9B%D7%99%D7%A4%D7%94.jpg/250px-%D7%9C%D7%95%D7%92%D7%95_%D7%A9%D7%91%D7%A1_%D7%9B%D7%9C%D7%99%D7%90%D7%94_%D7%91%D7%99%D7%98%D7%97%D7%95%D7%9F_%D7%90%D7%9B%D7%99%D7%A4%D7%94.jpg",
					alt: "Shabbas Logo",
				}}
			/>

			<LogoCard
				className="bg-secondary dark:bg-secondary/30"
				logo={{
					src: "img/logos/teachers.png",
					alt: "Vercel Logo",
				}}
			/>
		</div>
	);
}

type LogoCardProps = React.ComponentProps<"div"> & {
	logo: Logo;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
	return (
		<div
			className={cn(
				"flex items-center justify-center bg-background px-4 py-8 md:p-8",
				className
			)}
			{...props}
		>
			<img
				alt={logo.alt}
				className="pointer-events-none h-4 select-none md:h-18  dark:brightness-0 dark:invert"
				height="auto"
				src={logo.src}
				width="auto"
			/>
			{children}
		</div>
	);
}

export function LogosSection() {
	return (
		<section className="mb-12">
			<h2 className="py-6 text-center font-medium text-lg text-muted-foreground tracking-tight md:text-xl">
				לקוחות שכבר <span className="text-foreground">לא מפחדים</span>
			</h2>
			<div className="relative *:border-0">
				<DecorIcon className="size-4" position="top-left" />
				<DecorIcon className="size-4" position="top-right" />
				<DecorIcon className="size-4" position="bottom-left" />
				<DecorIcon className="size-4" position="bottom-right" />

				<FullWidthDivider className="-top-px" />
				<LogoCloud />
				<FullWidthDivider className="-bottom-px" />
			</div>
		</section>
	);
}
