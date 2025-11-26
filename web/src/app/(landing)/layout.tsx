import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "../../global.css";
import "@/app/globals.css";
import Providers from "@/components/providers";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { BackgroundProvider } from "@/contexts/BackgroundContext";

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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className="antialiased bg-background text-foreground"
			>
				<Providers>
					<BackgroundProvider>
						<div className="flex flex-col min-h-svh">
							<Header />
							<main className="flex-1">
								{children}
							</main>
							<Footer />
							<ScrollToTop />
						</div>
					</BackgroundProvider>
				</Providers>
			</body>
		</html>
	);
}
