"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Hero } from "@/components/landing/hero";

export default function LandingPage() {
	return (
		<div className="w-full bg-background">
			{/* Hero Section */}
			<Hero />

			{/* Browse Templates Section */}
			<section className="py-20 bg-background/80 border-t border-border">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold text-center mb-4 text-foreground">
						Jelajahi Template Kami
					</h2>
					<p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
						Pilih dari berbagai template profesional yang dirancang untuk membuat CV Anda menonjol
					</p>

					<div className="grid md:grid-cols-3 gap-8 mb-12">
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
								className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-card"
							>
								<div
									className={`h-40 bg-gradient-to-br ${template.color} flex items-center justify-center`}
								>
									<div className="text-white text-center">
										<div className="text-2xl font-bold mb-2">
											{template.name}
										</div>
										<p className="text-sm opacity-90">Template Preview</p>
									</div>
								</div>

								<div className="p-6">
									<h3 className="text-xl font-semibold mb-2 text-foreground">
										{template.name}
									</h3>
									<p className="text-muted-foreground mb-4 text-sm">
										{template.description}
									</p>

									<div className="space-y-2 mb-6">
										{template.features.map((feature, idx) => (
											<div
												key={idx}
												className="flex items-center gap-2 text-foreground text-sm"
											>
												<Check className="w-4 h-4 text-primary" />
												<span>{feature}</span>
											</div>
										))}
									</div>

									<Link href="/dashboard/resume/new" className="block">
										<Button
											className="w-full"
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
			<section className="py-20 bg-background border-t border-border">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-4xl font-bold mb-6 text-foreground">
						Siap Membuat CV Impian Anda?
					</h2>
					<p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
						Bergabunglah dengan ribuan pengguna yang telah berhasil membuat CV
						profesional mereka dan mendapatkan pekerjaan impian.
					</p>
					<Link href="/dashboard">
						<Button size="lg" className="gap-2">
							Mulai Gratis Sekarang
							<ArrowRight className="w-4 h-4" />
						</Button>
					</Link>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-20 bg-background/80 border-t border-border">
				<div className="container mx-auto px-4 max-w-3xl">
					<h2 className="text-4xl font-bold text-center mb-4 text-foreground">
						Frequently Asked Questions
					</h2>
					<p className="text-center text-muted-foreground mb-16">
						Jawaban untuk pertanyaan umum tentang Code Resume
					</p>

					<div className="space-y-4">
						{[
							{
								q: "Berapa biaya untuk menggunakan Code Resume?",
								a: "Code Resume sepenuhnya gratis untuk semua pengguna. Kami percaya teknologi CV builder harus accessible untuk semua orang.",
							},
							{
								q: "Bisakah saya mendownload CV saya?",
								a: "Ya, Anda dapat mendownload CV Anda dalam format PDF, Word, atau format lainnya. Semua CV dapat diexport dengan mudah.",
							},
							{
								q: "Apakah data saya aman?",
								a: "Tentu saja! Data Anda disimpan secara aman di server Supabase dengan enkripsi end-to-end. Kami tidak pernah membagikan data Anda kepada pihak ketiga.",
							},
							{
								q: "Berapa banyak CV yang bisa saya buat?",
								a: "Tidak ada batasan! Anda dapat membuat sebanyak mungkin CV yang Anda inginkan. Setiap CV dapat menggunakan template yang berbeda.",
							},
							{
								q: "Apakah saya perlu login untuk menggunakan?",
								a: "Ya, Anda perlu login dengan email atau akun media sosial. Ini untuk memastikan CV Anda tersimpan dengan aman di akun Anda.",
							},
							{
								q: "Bagaimana jika saya ingin menghapus akun saya?",
								a: "Anda dapat menghapus akun kapan saja melalui pengaturan. Semua data CV Anda akan dihapus secara permanen dalam 30 hari.",
							},
						].map((faq, idx) => (
							<FAQItem key={idx} question={faq.q} answer={faq.a} />
						))}
					</div>

					<div className="mt-12 p-8 rounded-lg bg-muted border border-border text-center">
						<p className="text-foreground">
							Tidak menemukan jawaban? Hubungi kami di{" "}
							<a
								href="mailto:support@coderesume.com"
								className="text-primary hover:text-primary/80 transition"
							>
								support@coderesume.com
							</a>
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
	const [open, setOpen] = React.useState(false);

	return (
		<div className="rounded-lg bg-card border border-border overflow-hidden hover:border-primary/50 transition">
			<button
				onClick={() => setOpen(!open)}
				className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-card/80 transition"
			>
				<span className="font-medium text-foreground">{question}</span>
				<span className={`text-primary transition-transform ${open ? "rotate-180" : ""}`}>
					▼
				</span>
			</button>
			{open && (
				<div className="px-6 py-4 border-t border-border text-muted-foreground">
					{answer}
				</div>
			)}
		</div>
	);
}
