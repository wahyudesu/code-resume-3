"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Upload, Edit2, Share2 } from "lucide-react";
import { Hero } from "@/components/landing/hero";

import { PlusIcon } from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";

const items = [
  {
    content:
      "coss ui focuses on developer experience and performance. Built with TypeScript, it offers excellent type safety, follows accessibility standards, and provides comprehensive documentation with regular updates.",
    id: "1",
    title: "What makes coss ui different?",
  },
  {
    content:
      "Use our CSS variables for global styling, or className and style props for component-specific changes. We support CSS modules, Tailwind, and dark mode out of the box.",
    id: "2",
    title: "How can I customize the components?",
  },
  {
    content:
      "Yes, with tree-shaking, code splitting, and minimal runtime overhead. Most components are under 5KB gzipped.",
    id: "3",
    title: "Is coss ui optimized for performance?",
  },
  {
    content:
      "All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.",
    id: "4",
    title: "How accessible are the components?",
  },
];

export default function LandingPage() {
	return (
		<div className="w-full bg-background">
			{/* Hero Section */}
			<Hero />

			{/* How It Works Section */}
			<section className="py-12 sm:py-16 lg:py-20 bg-background border-t border-border">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 text-foreground">
						Cara Kerja
					</h2>
					<p className="text-center text-muted-foreground mb-8 sm:mb-12 lg:mb-16 max-w-2xl mx-auto text-sm sm:text-base">
						Tiga langkah sederhana untuk membuat CV profesional Anda
					</p>

					<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
						{[
							{
								id: 1,
								title: "Upload CV",
								description: "Unggah CV yang sudah ada dalam format PDF atau file lainnya untuk memulai proses konversi",
								icon: Upload,
								step: "1",
							},
							{
								id: 2,
								title: "Edit & Styling",
								description: "Edit data CV Anda dan pilih gaya profesional yang paling sesuai dengan kepribadian Anda",
								icon: Edit2,
								step: "2",
							},
							{
								id: 3,
								title: "Bagikan & Download",
								description: "Siap untuk dibagikan! Download CV Anda dalam format PDF atau bagikan langsung kepada recruiter",
								icon: Share2,
								step: "3",
							},
						].map((item, idx) => {
							const IconComponent = item.icon;
							return (
								<div key={item.id} className="relative">
									{/* Connector Line */}
									{idx < 2 && (
										<div className="hidden sm:block absolute top-16 left-[55%] w-[calc(100%-60px)] h-0.5 bg-gradient-to-r from-primary to-primary/20" />
									)}

									<div className="bg-card border border-border rounded-lg p-6 sm:p-8 h-full flex flex-col relative z-10">
										<div className="flex items-center gap-4 mb-4">
											<div className="relative">
												<div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
													<IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
												</div>
											</div>
											<div>
												<div className="text-xs font-semibold text-primary uppercase tracking-wider">
													Langkah {item.step}
												</div>
												<h3 className="text-lg sm:text-xl font-bold text-foreground mt-1">
													{item.title}
												</h3>
											</div>
										</div>
										<p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
											{item.description}
										</p>
									</div>
								</div>
							);
						})}
					</div>

					<div className="text-center mt-12">
						<Link href="/dashboard" className="inline-block">
							<Button size="lg" className="gap-2 text-sm sm:text-base">
								Mulai Sekarang
								<ArrowRight className="w-4 h-4" />
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* Browse Templates Section */}
			<section className="py-12 sm:py-16 lg:py-20 bg-background/80 border-t border-border">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 text-foreground">
						Jelajahi Template Kami
					</h2>
					<p className="text-center text-muted-foreground mb-8 sm:mb-12 lg:mb-16 max-w-2xl mx-auto text-sm sm:text-base">
						Pilih dari berbagai template profesional yang dirancang untuk membuat CV Anda menonjol
					</p>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-12">
						{[
							{
								id: 1,
								name: "Professional",
								description: "Template profesional yang elegan dan timeless",
								features: ["Clean design", "ATS friendly", "Easy to read"],
								color: "from-blue-500 to-cyan-500",
							},
							{
								id: 2,
								name: "Modern",
								description: "Desain modern dengan sentuhan kontemporer",
								features: ["Creative layout", "Eye-catching", "Trendy design"],
								color: "from-purple-500 to-pink-500",
							},
							{
								id: 3,
								name: "Minimalist",
								description: "Kesederhanaan yang elegan dengan fokus pada konten",
								features: ["Minimal design", "Maximum impact", "Very clean"],
								color: "from-slate-600 to-slate-800",
							},
						].map((template) => (
							<div
								key={template.id}
								className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-card flex flex-col h-full"
							>
								<div
									className={`h-32 sm:h-40 bg-gradient-to-br ${template.color} flex items-center justify-center`}
								>
									<div className="text-white text-center px-4">
										<div className="text-xl sm:text-2xl font-bold mb-2">
											{template.name}
										</div>
										<p className="text-xs sm:text-sm opacity-90">Template Preview</p>
									</div>
								</div>

								<div className="p-4 sm:p-6 flex flex-col flex-1">
									<h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">
										{template.name}
									</h3>
									<p className="text-muted-foreground mb-4 text-xs sm:text-sm line-clamp-2">
										{template.description}
									</p>

									<div className="space-y-2 mb-6 flex-1">
										{template.features.map((feature, idx) => (
											<div
												key={idx}
												className="flex items-center gap-2 text-foreground text-xs sm:text-sm"
											>
												<Check className="w-4 h-4 text-primary flex-shrink-0" />
												<span>{feature}</span>
											</div>
										))}
									</div>

									<Link href="/dashboard/resume/new" className="block w-full">
										<Button
											className="w-full text-xs sm:text-sm"
										>
											Gunakan Template
										</Button>
									</Link>
								</div>
							</div>
						))}
					</div>

					<div className="text-center">
						<Link href="/template">
							<Button
								size="lg"
								variant="outline"
								className="gap-2"
							>
								Lihat Semua Template
								<ArrowRight className="w-4 h-4" />
							</Button>
						</Link>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-12 sm:py-16 lg:py-20 bg-background border-t border-border">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-foreground">
						Siap Membuat CV Impian Anda?
					</h2>
					<p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
						Bergabunglah dengan ribuan pengguna yang telah berhasil membuat CV
						profesional mereka dan mendapatkan pekerjaan impian.
					</p>
					<Link href="/dashboard" className="inline-block">
						<Button size="lg" className="gap-2 text-sm sm:text-base">
							Mulai Gratis Sekarang
							<ArrowRight className="w-4 h-4" />
						</Button>
					</Link>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-12 sm:py-16 lg:py-20 bg-background/80 border-t border-border">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="max-w-3xl mx-auto">
						<h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 text-foreground">
							Pertanyaan yang Sering Diajukan
						</h2>
						<p className="text-center text-muted-foreground mb-8 sm:mb-12 text-sm sm:text-base">
							Dapatkan jawaban atas pertanyaan umum tentang aplikasi kami
						</p>
						<Accordion className="w-full" collapsible defaultValue="3" type="single">
							{items.map((item) => (
							<AccordionItem className="py-2 sm:py-3" key={item.id} value={item.id}>
								<AccordionPrimitive.Header className="flex">
								<AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between gap-3 sm:gap-4 rounded-md py-2 sm:py-3 text-left font-semibold text-xs sm:text-sm lg:text-[15px] leading-6 outline-none transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
									{item.title}
									<PlusIcon
									aria-hidden="true"
									className="pointer-events-none shrink-0 opacity-60 transition-transform duration-200"
									size={16}
									/>
								</AccordionPrimitive.Trigger>
								</AccordionPrimitive.Header>
								<AccordionContent className="pb-2 text-muted-foreground text-xs sm:text-sm">
								{item.content}
								</AccordionContent>
							</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>
			</section>
		</div>
	);
}