"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
	{ name: "Resume", href: "/dashboard" as const, icon: FileText },
	{ name: "Settings", href: "/dashboard/settings" as const, icon: Settings },
];

export function Sidebar() {
	const pathname = usePathname();

	return (
		<div className="w-64 bg-slate-950 text-white flex flex-col h-full border-r border-slate-800">
			{/* Logo */}
			<div className="px-6 py-6 border-b border-slate-800">
				<Link href="/" className="flex items-center gap-2">
					<div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded flex items-center justify-center font-bold text-xs">
						CR
					</div>
					<span className="font-bold text-lg">Code Resume</span>
				</Link>
			</div>

			{/* Navigation */}
			<nav className="flex-1 px-3 py-6 space-y-2">
				{navigation.map((item) => {
					const Icon = item.icon;
					const isActive =
						pathname === item.href ||
						pathname.startsWith(item.href + "/");

					return (
						<Link
							key={item.href}
							href={item.href}
							className={cn(
								"flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
								isActive
									? "bg-amber-600/20 text-amber-500 border border-amber-600/30"
									: "text-gray-400 hover:text-amber-500 hover:bg-slate-900 border border-transparent"
							)}
						>
							<Icon className="w-5 h-5" />
							<span>{item.name}</span>
						</Link>
					);
				})}
			</nav>

			{/* Footer */}
			<div className="px-3 py-6 border-t border-slate-800">
				<button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-gray-400 hover:text-amber-500 hover:bg-slate-900 transition-colors border border-transparent">
					<LogOut className="w-5 h-5" />
					<span>Logout</span>
				</button>
			</div>
		</div>
	);
}
