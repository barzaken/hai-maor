import { cn } from "@/lib/utils";
import React from "react";
import { Portal, PortalBackdrop } from "@/components/ui/portal";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/components/app/header";
import { Logo } from "@/components/app/logo";
import { XIcon, MenuIcon } from "lucide-react";

export function MobileNav() {
	const [open, setOpen] = React.useState(false);

	return (
		<div className="md:hidden" dir="rtl">
			<Button
				aria-controls="mobile-menu"
				aria-expanded={open}
				aria-label="Toggle menu"
				className="md:hidden"
				onClick={() => setOpen(!open)}
				size="icon"
				variant="outline"
			>
				{open ? (
					<XIcon className="size-4.5" />
				) : (
					<MenuIcon className="size-4.5" />
				)}
			</Button>
			{open && (
				<Portal className="top-14" id="mobile-menu">
					<PortalBackdrop />
					<div
						className={cn(
							"data-[slot=open]:zoom-in-97 ease-out data-[slot=open]:animate-in",
							"size-full p-4"
						)}
						data-slot={open ? "open" : "closed"}
					>
						<a
							className="mb-6 inline-flex rounded-md p-2 hover:bg-muted dark:hover:bg-muted/50"
							href="#home"
							onClick={() => setOpen(false)}
						>
							<Logo className="h-16 w-auto" />
						</a>
						<div className="grid gap-y-2">
							{navLinks.map((link) => (
								<Button
									render={<a href={link.href}></a>}
									className="justify-start"
									key={link.label}
									onClick={() => setOpen(false)}
									variant="ghost"
								>
									{link.label}
								</Button>
							))}
						</div>
						<div className="mt-12 flex flex-col gap-2">
							<Button render={<a href="#story"></a>} className="w-full" onClick={() => setOpen(false)} variant="outline">
								שיחת היכרות
							</Button>
							<Button render={<a href="#contact"></a>} className="w-full" onClick={() => setOpen(false)}>
								יצירת קשר
							</Button>
						</div>
					</div>
				</Portal>
			)}
		</div>
	);
}
