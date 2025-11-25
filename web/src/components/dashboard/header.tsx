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
		<div className="bg-background border-b border-border px-8 py-4 flex items-center justify-between">
			<Link href="/" className="flex items-center gap-2">
				<div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/60 rounded flex items-center justify-center font-bold text-xs text-white">
					CR
				</div>
				<span className="font-bold text-lg text-foreground hidden md:inline">
					Code Resume
				</span>
			</Link>

			<div className="flex items-center gap-2">
				<Button variant="ghost" size="icon">
					<Bell className="w-5 h-5 text-muted-foreground" />
				</Button>

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" size="icon">
							<User className="w-5 h-5 text-muted-foreground" />
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
