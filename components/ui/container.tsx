'use client';

import { cn } from "@/lib/utils";

 function Container({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div className={cn("mx-auto max-w-4xl px-4 sm:px-6", className)} {...props} />
	);
}

export default Container;