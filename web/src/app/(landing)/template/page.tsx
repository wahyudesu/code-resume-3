import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";

export default function TemplatePage() {
	const templates = [
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
		{
			id: 4,
			name: "Creative",
			description: "Template kreatif untuk menunjukkan personalitas Anda",
			features: ["Unique style", "Color schemes", "Visual impact"],
			color: "from-orange-500 to-red-500",
		},
		{
			id: 5,
			name: "Executive",
			description: "Template sophisticated untuk level eksekutif",
			features: ["Premium feel", "Professional", "High impact"],
			color: "from-emerald-600 to-teal-600",
		},
		{
			id: 6,
			name: "Academic",
			description: "Template ideal untuk profesional akademik",
			features: ["Research friendly", "Publication ready", "Detailed"],
			color: "from-indigo-500 to-blue-500",
		},
	];

	return (
		<div className="w-full">
			<div className="min-h-screen bg-white py-8 sm:py-12 lg:py-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
					<Link href="/">
						<Button variant="ghost" className="mb-6 sm:mb-8 gap-2 text-xs sm:text-sm">
							<ArrowLeft className="w-4 h-4" />
							Kembali ke Beranda
						</Button>
					</Link>

					<div className="mb-8 sm:mb-12 lg:mb-16">
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-slate-900">
							Template CV Profesional
						</h1>
						<p className="text-base sm:text-lg lg:text-xl text-slate-600">
							Pilih dari koleksi template kami yang dirancang oleh desainer profesional.
							Setiap template dioptimalkan untuk hasil terbaik.
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
						{templates.map((template) => (
							<div
								key={template.id}
								className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full"
							>
								<div
									className={`h-32 sm:h-40 lg:h-48 bg-gradient-to-br ${template.color} flex items-center justify-center`}
								>
									<div className="text-white text-center px-4">
										<div className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
											{template.name}
										</div>
										<p className="text-xs sm:text-sm opacity-90">Template Preview</p>
									</div>
								</div>

								<div className="p-4 sm:p-6 flex flex-col flex-1">
									<h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-900">
										{template.name}
									</h3>
									<p className="text-slate-600 mb-4 text-xs sm:text-sm line-clamp-2">
										{template.description}
									</p>

									<div className="space-y-2 mb-6 flex-1">
										{template.features.map((feature, idx) => (
											<div
												key={idx}
												className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm"
											>
												<Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
												<span>{feature}</span>
											</div>
										))}
									</div>

									<Link href="/dashboard/resume/new" className="block w-full">
										<Button
											className="w-full bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm"
										>
											Gunakan Template
										</Button>
									</Link>
								</div>
							</div>
						))}
					</div>

					<div className="bg-blue-50 rounded-lg p-4 sm:p-8 text-center">
						<h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-slate-900">
							Lebih Banyak Template Segera Hadir
						</h2>
						<p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">
							Kami terus menambahkan template baru setiap bulannya. Follow kami untuk
							mendapat notifikasi template terbaru!
						</p>
						<Button variant="outline" className="text-xs sm:text-sm w-full sm:w-auto">
							Notifikasi Template Baru
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
