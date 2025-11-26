"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { ArrowRight } from "lucide-react";

export default function Header() {
	const pathname = usePathname();
	const isDashboard = pathname?.startsWith("/dashboard");

	// Hide header on dashboard pages
	if (isDashboard) {
		return null;
	}

	const links = [
		{ to: "/landing/template", label: "Templates" },
		{ to: "/landing/stats", label: "Stats" },

	];

	return (
		<div className="sticky top-0 z-50 bg-background border-b border-border/50 backdrop-blur-sm">
			<div className="flex flex-row items-center justify-between px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 max-w-7xl mx-auto">
				{/* Logo */}
				<Link href="/" className="flex items-center gap-2 font-bold text-xs sm:text-sm shrink-0">
					<div className="w-5 h-5 sm:w-6 sm:h-6 bg-linear-to-br from-primary to-primary/80 rounded flex items-center justify-center text-primary-foreground font-bold text-[0.65rem] sm:text-xs">
						CR
					</div>
					<span className="text-foreground hidden sm:inline text-sm">CV Code</span>
				</Link>

				{/* Right - Links & Actions */}
				<div className="flex items-center gap-2 sm:gap-4">
					<nav className="hidden sm:flex gap-2 lg:gap-4">
						{links.map(({ to, label }) => (
							<Button asChild variant="outline" size="sm" key={to}>
								<Link
									href={{ pathname: to }}
									className="hover:border-primary hover:bg-background/20 text-xs lg:text-sm"
								>
									<span className="text-primary">cd</span> {label}
								</Link>
							</Button>
						))}
					</nav>
					{/* <div className="h-6 w-px bg-border hidden sm:block" /> */}
					<div className="flex items-center gap-2 sm:gap-3">
						<ModeToggle />
						<Link href="/dashboard">
							<Button
								size="sm"
								className="flex items-center gap-1 sm:gap-2 shadow-primary shadow- text-xs sm:text-sm"
							>
								<span className="hidden sm:inline">Sign In</span>
								<span className="sm:hidden">Sign</span>
								<ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
