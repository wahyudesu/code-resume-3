import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "../../global.css";
import "@/app/globals.css";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Hero } from "@/components/landing/heroes";
// const geistSans = Geist({
// 	variable: "--font-geist-sans",
// 	subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
// 	variable: "--font-geist-mono",
// 	subsets: ["latin"],
// });

export const metadata: Metadata = {
	title: "code-resume",
	description: "code-resume",
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Header />
			<main className="flex-1">
				{children}
			</main>
			<Footer />
			<ScrollToTop />
		</div>
	);
}
