"use client";

import Link from "next/link";
import { Bell, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export function DashboardHeader() {
	return (
		<div className="bg-background border-b border-border px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
			<Link href="/" className="flex items-center gap-2">
				<div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-primary to-primary/60 rounded flex items-center justify-center font-bold text-xs text-white flex-shrink-0">
					CR
				</div>
				<span className="font-bold text-sm sm:text-lg text-foreground hidden md:inline">
					Code Resume
				</span>
			</Link>

			<div className="flex items-center gap-1 sm:gap-2">
				<Button variant="ghost" size="icon" className="w-8 h-8 sm:w-10 sm:h-10">
					<Bell className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
				</Button>

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" size="icon" className="w-8 h-8 sm:w-10 sm:h-10">
							<User className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem>Profil</DropdownMenuItem>
						<DropdownMenuItem>Pengaturan</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="text-destructive">
							<LogOut className="w-4 h-4 mr-2" />
							Logout
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
}
