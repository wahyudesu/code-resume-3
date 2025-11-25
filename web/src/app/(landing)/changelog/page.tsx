import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus, Bug, Zap } from "lucide-react";

export default function ChangelogPage() {
	const releases = [
		{
			version: "v1.0.0",
			date: "November 25, 2024",
			type: "release",
			changes: [
				"Peluncuran resmi aplikasi Code Resume",
				"3 template CV profesional",
				"Fitur upload dan konversi CV",
				"Dashboard untuk mengelola CV",
				"Export ke PDF dan format lainnya",
			],
		},
		{
			version: "v0.9.0",
			date: "November 20, 2024",
			type: "beta",
			changes: [
				"Beta testing dimulai",
				"Integrasi dengan Supabase database",
				"Implementasi authentication system",
				"UI component library setup",
			],
		},
		{
			version: "v0.8.0",
			date: "November 15, 2024",
			type: "alpha",
			changes: [
				"Project initialization",
				"Tech stack setup (Next.js, Tailwind, Drizzle)",
				"Database schema design",
				"Initial API endpoints",
			],
		},
	];

	const getIcon = (type: string) => {
		switch (type) {
			case "release":
				return <Plus className="w-5 h-5 text-green-600" />;
			case "beta":
				return <Zap className="w-5 h-5 text-yellow-600" />;
			case "alpha":
				return <Bug className="w-5 h-5 text-red-600" />;
			default:
				return <Plus className="w-5 h-5" />;
		}
	};

	const getTypeLabel = (type: string) => {
		switch (type) {
			case "release":
				return "Release";
			case "beta":
				return "Beta";
			case "alpha":
				return "Alpha";
			default:
				return "Update";
		}
	};

	const getTypeColor = (type: string) => {
		switch (type) {
			case "release":
				return "bg-green-100 text-green-800";
			case "beta":
				return "bg-yellow-100 text-yellow-800";
			case "alpha":
				return "bg-red-100 text-red-800";
			default:
				return "bg-gray-100 text-gray-800";
		}
	};

	return (
		<div className="w-full">
			<div className="min-h-screen bg-white py-20">
				<div className="container mx-auto px-4 max-w-4xl">
					<Link href="/">
						<Button variant="ghost" className="mb-8 gap-2">
							<ArrowLeft className="w-4 h-4" />
							Kembali ke Beranda
						</Button>
					</Link>

					<h1 className="text-5xl font-bold mb-4 text-slate-900">
						Changelog
					</h1>
					<p className="text-xl text-slate-600 mb-12">
						Pantau setiap update dan peningkatan aplikasi Code Resume
					</p>

					<div className="space-y-8">
						{releases.map((release, index) => (
							<div key={index} className="border-l-4 border-blue-400 pl-6 pb-8">
								<div className="flex items-center gap-4 mb-4">
									<div className="flex items-center gap-2">
										{getIcon(release.type)}
										<span
											className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(
												release.type
											)}`}
										>
											{getTypeLabel(release.type)}
										</span>
									</div>
									<span className="text-sm text-slate-500">
										{release.date}
									</span>
								</div>

								<h2 className="text-2xl font-bold text-slate-900 mb-4">
									{release.version}
								</h2>

								<ul className="space-y-3">
									{release.changes.map((change, idx) => (
										<li key={idx} className="text-slate-700 flex items-start gap-3">
											<span className="text-blue-600 mt-1">•</span>
											<span>{change}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>

					<div className="mt-12 p-8 bg-slate-50 rounded-lg text-center">
						<h2 className="text-2xl font-semibold mb-4 text-slate-900">
							Fitur Mendatang
						</h2>
						<div className="grid md:grid-cols-2 gap-6">
							<div className="text-left">
								<h3 className="font-semibold text-slate-900 mb-2">
									Coming Soon
								</h3>
								<ul className="text-slate-600 space-y-2">
									<li>✓ AI-powered content suggestions</li>
									<li>✓ Kolaborasi tim real-time</li>
									<li>✓ Template eksklusif premium</li>
								</ul>
							</div>
							<div className="text-left">
								<h3 className="font-semibold text-slate-900 mb-2">
									In Development
								</h3>
								<ul className="text-slate-600 space-y-2">
									<li>✓ Mobile app (iOS & Android)</li>
									<li>✓ Multi-language support</li>
									<li>✓ Advanced analytics dashboard</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
