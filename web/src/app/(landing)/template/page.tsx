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
			<div className="min-h-screen bg-white py-20">
				<div className="container mx-auto px-4 max-w-6xl">
					<Link href="/">
						<Button variant="ghost" className="mb-8 gap-2">
							<ArrowLeft className="w-4 h-4" />
							Kembali ke Beranda
						</Button>
					</Link>

					<div className="mb-16">
						<h1 className="text-5xl font-bold mb-4 text-slate-900">
							Template CV Profesional
						</h1>
						<p className="text-xl text-slate-600">
							Pilih dari koleksi template kami yang dirancang oleh desainer profesional.
							Setiap template dioptimalkan untuk hasil terbaik.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
						{templates.map((template) => (
							<div
								key={template.id}
								className="border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
							>
								<div
									className={`h-48 bg-gradient-to-br ${template.color} flex items-center justify-center`}
								>
									<div className="text-white text-center">
										<div className="text-2xl font-bold mb-2">
											{template.name}
										</div>
										<p className="text-sm opacity-90">Template Preview</p>
									</div>
								</div>

								<div className="p-6">
									<h3 className="text-xl font-semibold mb-2 text-slate-900">
										{template.name}
									</h3>
									<p className="text-slate-600 mb-4 text-sm">
										{template.description}
									</p>

									<div className="space-y-2 mb-6">
										{template.features.map((feature, idx) => (
											<div
												key={idx}
												className="flex items-center gap-2 text-slate-700"
											>
												<Check className="w-4 h-4 text-blue-600" />
												<span className="text-sm">{feature}</span>
											</div>
										))}
									</div>

									<Link href="/dashboard/resume/new" className="block">
										<Button
											className="w-full bg-blue-600 hover:bg-blue-700"
										>
											Gunakan Template
										</Button>
									</Link>
								</div>
							</div>
						))}
					</div>

					<div className="bg-blue-50 rounded-lg p-8 text-center">
						<h2 className="text-2xl font-semibold mb-4 text-slate-900">
							Lebih Banyak Template Segera Hadir
						</h2>
						<p className="text-slate-600 mb-6">
							Kami terus menambahkan template baru setiap bulannya. Follow kami untuk
							mendapat notifikasi template terbaru!
						</p>
						<Button variant="outline">
							Notifikasi Template Baru
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
