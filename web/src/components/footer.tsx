"use client";

import Link from "next/link";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	const footerLinks = {
		resources: [
			{ label: "Skill Document", href: "#" },
			{ label: "Official Skills", href: "#" },
		],
		legal: [
			{ label: "About", href: "/landing/about" },
			{ label: "Changelog", href: "/landing/changelog" },
			{ label: "Privacy Policy", href: "/landing/privacy" },
			{ label: "Terms of Service", href: "/landing/term" },
		],
	};

	return (
		<footer className="bg-background border-t border-border">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl">
				{/* Links Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
					{/* Social & Logo (Left) */}
					<div className="flex flex-col justify-between">
						<div>
							<h2 className="text-foreground font-semibold mb-3 sm:mb-4 text-lg sm:text-xl"># Build Standout CV</h2>
							<p className="text-muted-foreground text-xs sm:text-sm mb-4">
								Discover and explore CV builder made by the community.
							</p>
						</div>
						<div>
							<h3 className="text-foreground font-semibold mb-3 sm:mb-4 text-xs sm:text-sm">Follow</h3>
							<ul className="space-y-1.5 sm:space-y-2">
								<li>
									<a
										href="https://twitter.com"
										target="_blank"
										rel="noopener noreferrer"
										className="text-muted-foreground hover:text-primary transition text-xs sm:text-sm line-clamp-1"
										title="Twitter"
									>
										Twitter threads.com/wahyuikbal_m
									</a>
								</li>
								<li>
									<a
										href="https://github.com"
										target="_blank"
										rel="noopener noreferrer"
										className="text-muted-foreground hover:text-primary transition text-xs sm:text-sm line-clamp-1"
										title="GitHub"
									>
										GitHub github.com/wahyudesu
									</a>
								</li>
								<li>
									<a
										href="mailto:support@coderesume.com"
										className="text-muted-foreground hover:text-primary transition text-xs sm:text-sm line-clamp-1"
										title="LinkedIn"
									>
										Linkedin linkedin.com/in/wahyuikbalmaulana
									</a>
								</li>
							</ul>
						</div>
					</div>

					{/* Resources */}
					<div className="flex flex-col items-start">
						<h3 className="text-foreground font-semibold mb-3 sm:mb-4 text-xs sm:text-sm">Resources</h3>
						<ul className="space-y-1.5 sm:space-y-2 text-left w-full">
							{footerLinks.resources.map((link) => (
								<li key={link.label}>
									<Link
										href={link.href}
										className="text-muted-foreground hover:text-primary transition text-xs sm:text-sm line-clamp-1"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Legal */}
					<div className="flex flex-col items-start sm:col-span-2 lg:col-span-1">
						<h3 className="text-foreground font-semibold mb-3 sm:mb-4 text-xs sm:text-sm">Legal</h3>
						<ul className="space-y-1.5 sm:space-y-2 text-left w-full grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-1 gap-x-4 sm:gap-x-0">
							{footerLinks.legal.map((link) => (
								<li key={link.label}>
									<Link
										href={link.href}
										className="text-muted-foreground hover:text-primary transition text-xs sm:text-sm line-clamp-1"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Divider */}
				<div className="border-t border-border mb-6 sm:mb-8" />

				{/* Bottom */}
				<div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
					<p>© {currentYear} Code Resume. Not affiliated with Anthropic.</p>
					<p>Made with ❤️ by the community</p>
				</div>
			</div>
		</footer>
	);
}
