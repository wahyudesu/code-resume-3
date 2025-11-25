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
			<div className="flex flex-row items-center justify-between px-6 py-3 max-w-7xl mx-auto">
				{/* Logo */}
				<Link href="/" className="flex items-center gap-2 font-bold text-sm shrink-0">
					<div className="w-6 h-6 bg-linear-to-br from-primary to-primary/80 rounded flex items-center justify-center text-primary-foreground font-bold text-xs">
						CR
					</div>
					<span className="text-foreground hidden sm:inline">CV Code</span>
				</Link>

				{/* Right - Links & Actions */}
				<div className="flex items-center gap-4">
					<nav className="hidden sm:flex gap-4">
						{links.map(({ to, label }) => (
							<Button asChild variant="outline" key={to}>
								<Link
									href={{ pathname: to }}
									className="hover:border-primary hover:bg-background/20"
								>
									<span className="text-primary">cd</span> {label}
								</Link>
							</Button>
						))}
					</nav>
					{/* <div className="h-6 w-px bg-border hidden sm:block" /> */}
					<div className="flex items-center gap-3">
						<ModeToggle />
						<Link href="/dashboard">
							<Button
								size="sm"
								className="flex items-center gap-2 shadow-primary shadow-"
							>
								Sign In
								<ArrowRight className="w-4 h-4" />

							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
