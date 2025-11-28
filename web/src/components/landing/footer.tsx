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
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-6xl">
				{/* Links Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
					{/* Social & Logo (Left) */}
					<div className="flex flex-col justify-between col-span-1 sm:pr-8">
						<div>
							<h2 className="text-foreground font-semibold mb-3 sm:mb-4 text-lg sm:text-xl"># Build Standout CV</h2>
							<p className="text-muted-foreground text-xs sm:text-sm mb-4">
								Discover and explore CV builder made by the community.
							</p>
						</div>
						<div>
							<h3 className="text-foreground font-semibold py-2 text-xs sm:text-sm">Follow</h3>
							<ul className="space-y-1.5 sm:space-y-2">
								<li>
									<a
										href="https://twitter.com"
										target="_blank"
										rel="noopener noreferrer"
										className="text-muted-foreground hover:text-primary transition text-xs sm:text-sm line-clamp-1"
										title="Twitter"
									>
										<span className="font-semibold">Twitter</span>
										<span className="ml-1 text-muted-foreground">threads.com/wahyuikbal_m</span>
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
										<span className="font-semibold">GitHub</span>
										<span className="ml-1 text-muted-foreground">github.com/wahyudesu</span>
									</a>
								</li>
								<li>
									<a
										href="mailto:support@coderesume.com"
										className="text-muted-foreground hover:text-primary transition text-xs sm:text-sm line-clamp-1"
										title="LinkedIn"
									>
										<span className="font-semibold">Linkedin</span>
										<span className="ml-1 text-muted-foreground">linkedin.com/in/wahyuikbalmaulana</span>
									</a>
								</li>
							</ul>
						</div>
					</div>

					{/* Resources & Legal (Grouped) */}
					<div className="flex flex-col sm:flex-row gap-8 sm:gap-4 col-span-2">
						{/* Resources */}
						<div className="flex flex-col items-start w-full">
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
						<div className="flex flex-col items-start w-full">
							<h3 className="text-foreground font-semibold mb-3 sm:mb-4 text-xs sm:text-sm">Legal</h3>
							<ul className="space-y-1.5 sm:space-y-2 text-left w-full">
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
