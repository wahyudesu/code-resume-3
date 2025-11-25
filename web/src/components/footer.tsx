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
			<div className="container mx-auto px-6 py-12 max-w-7xl">
				{/* Links Grid */}
				   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
					   {/* Social & Logo (Left, wider) */}
					   <div className="md:col-span-1 flex flex-col justify-between min-h-[140px] pr-8">
						   <div>
							   <h2 className="text-foreground font-semibold mb-4 text-xl"># Build Standout CV</h2>
							   {/* <Link href="/" className="flex items-center gap-2 mb-4">
								   <div className="w-6 h-6 bg-linear-to-br from-primary to-primary/80 rounded flex items-center justify-center text-primary-foreground font-bold text-xs">
									   CR
								   </div>
								   <span className="text-foreground font-bold">Code Resume</span>
							   </Link> */}
							   <p className="text-muted-foreground text-sm mb-4">
								   Discover and explore CV builder made by the community.
							   </p>
						   </div>
						   <div>
							   <h3 className="text-foreground font-semibold mb-4 text-sm">Follow</h3>
							   <ul className="space-y-1">
								   <li>
									   <a
										   href="https://twitter.com"
										   target="_blank"
										   rel="noopener noreferrer"
										   className="text-muted-foreground hover:text-primary transition text-sm"
									   >
										   Twitter threads.com/wahyuikbal_m
									   </a>
								   </li>
								   <li>
									   <a
										   href="https://github.com"
										   target="_blank"
										   rel="noopener noreferrer"
										   className="text-muted-foreground hover:text-primary transition text-sm"
									   >
										   GitHub github.com/wahyudesu
									   </a>
								   </li>
								   <li>
									   <a
										   href="mailto:support@coderesume.com"
										   className="text-muted-foreground hover:text-primary transition text-sm"
									   >
										   Linkedin linkedin.com/in/wahyuikbalmaulana
									   </a>
								   </li>
							   </ul>
						   </div>
					   </div>

					   {/* Resources (center right) */}
					   <div className="md:col-span-1 flex flex-col items-start">
						   <h3 className="text-foreground font-semibold mb-4 text-sm">Resources</h3>
						   <ul className="space-y-2 text-left">
							   {footerLinks.resources.map((link) => (
								   <li key={link.label}>
									   <Link
											   href={link.href}
										   className="text-muted-foreground hover:text-primary transition text-sm"
									   >
										   {link.label}
									   </Link>
								   </li>
							   ))}
						   </ul>
					   </div>

					   {/* Legal (far right) */}
					   <div className="md:col-span-1 flex flex-col items-start">
						   <h3 className="text-foreground font-semibold mb-4 text-sm">Legal</h3>
						   <ul className="space-y-2 text-left">
							   {footerLinks.legal.map((link) => (
								   <li key={link.label}>
									   <Link
										   href={link.href}
										   className="text-muted-foreground hover:text-primary transition text-sm"
									   >
										   {link.label}
									   </Link>
								   </li>
							   ))}
						   </ul>
					   </div>

					   {/* Social moved to left column above */}
				</div>

				{/* Divider */}
				<div className="border-t border-border mb-6" />

				{/* Bottom */}
				<div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
					<p>© {currentYear} Code Resume. Not affiliated with Anthropic.</p>
					<p className="mt-4 md:mt-0">Made with ❤️ by the community</p>
				</div>
			</div>
		</footer>
	);
}
