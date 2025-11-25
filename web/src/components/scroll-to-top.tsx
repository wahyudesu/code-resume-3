"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	// Show button when page is scrolled down
	const toggleVisibility = () => {
		if (typeof window !== "undefined") {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		}
	};

	// Scroll to top smoothly
	const scrollToTop = () => {
		if (typeof window !== "undefined") {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	return isVisible ? (
		<button
			onClick={scrollToTop}
			className="fixed bottom-8 right-8 z-40 p-3 rounded-lg bg-amber-600 hover:bg-amber-700 text-white transition-all duration-300 shadow-lg hover:shadow-amber-600/50 group"
			aria-label="Scroll to top"
		>
			<ArrowUp className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
		</button>
	) : null;
}
