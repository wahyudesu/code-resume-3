"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Upload } from "lucide-react";

export default function NewResumePage() {
	const [selectedMethod, setSelectedMethod] = useState<"blank" | "upload" | null>(null);

	return (
		<div className="flex-1 flex flex-col">
			{/* Header */}
			<div className="border-b bg-white px-8 py-6">
				<div className="flex items-center gap-4">
					<Link href="/dashboard">
						<Button variant="ghost" size="sm" className="gap-2">
							<ArrowLeft className="w-4 h-4" />
							Kembali
						</Button>
					</Link>
					<div>
						<h1 className="text-3xl font-bold text-slate-900">
							CV Baru
						</h1>
						<p className="text-slate-600 mt-1">
							Pilih metode untuk membuat CV Anda
						</p>
					</div>
				</div>
			</div>

			{/* Content */}
			<div className="flex-1 p-8">
				{!selectedMethod ? (
					<div className="max-w-4xl mx-auto">
						<h2 className="text-2xl font-semibold text-slate-900 mb-8">
							Bagaimana Anda ingin memulai?
						</h2>

						<div className="grid md:grid-cols-2 gap-8">
							{/* Blank CV Card */}
							<div
								onClick={() => setSelectedMethod("blank")}
								className="border-2 border-slate-200 rounded-lg p-8 cursor-pointer hover:border-blue-400 hover:shadow-lg transition group"
							>
								<div className="flex flex-col h-full">
									<div className="text-5xl font-bold text-blue-600 mb-4">
										📝
									</div>
									<h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition">
										Buat dari Awal
									</h3>
									<p className="text-slate-600 mb-6 flex-1">
										Mulai dengan template kosong dan isi informasi Anda secara
										manual. Sempurna jika Anda ingin kontrol penuh atas desain dan
										konten.
									</p>
									<Button className="bg-blue-600 hover:bg-blue-700 w-full">
										Mulai Sekarang
									</Button>
								</div>
							</div>

							{/* Upload CV Card */}
							<div
								onClick={() => setSelectedMethod("upload")}
								className="border-2 border-slate-200 rounded-lg p-8 cursor-pointer hover:border-blue-400 hover:shadow-lg transition group"
							>
								<div className="flex flex-col h-full">
									<div className="text-5xl font-bold text-green-600 mb-4">
										📤
									</div>
									<h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition">
										Upload CV Lama
									</h3>
									<p className="text-slate-600 mb-6 flex-1">
										Unggah CV Anda yang sudah ada dalam format PDF atau Word.
										Sistem kami akan otomatis mengekstrak data dan
										memformatnya.
									</p>
									<Button className="bg-blue-600 hover:bg-blue-700 w-full gap-2">
										<Upload className="w-4 h-4" />
										Upload File
									</Button>
								</div>
							</div>
						</div>
					</div>
				) : selectedMethod === "blank" ? (
					<BlankResume onBack={() => setSelectedMethod(null)} />
				) : (
					<UploadResume onBack={() => setSelectedMethod(null)} />
				)}
			</div>
		</div>
	);
}

function BlankResume({ onBack }: { onBack: () => void }) {
	const [title, setTitle] = useState("");
	const [template, setTemplate] = useState("professional");

	const templates = [
		{ id: "professional", name: "Professional", icon: "👔" },
		{ id: "modern", name: "Modern", icon: "✨" },
		{ id: "minimalist", name: "Minimalist", icon: "📋" },
	];

	return (
		<div className="max-w-2xl mx-auto">
			<Button variant="ghost" className="mb-6 gap-2" onClick={onBack}>
				<ArrowLeft className="w-4 h-4" />
				Kembali ke Pilihan
			</Button>

			<div className="bg-white rounded-lg border border-slate-200 p-8">
				<h2 className="text-2xl font-semibold text-slate-900 mb-6">
					Buat CV Baru
				</h2>

				<div className="space-y-6">
					{/* Title Input */}
					<div>
						<label className="block text-sm font-medium text-slate-900 mb-2">
							Nama CV
						</label>
						<input
							type="text"
							placeholder="Contoh: CV Utama 2024"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>

					{/* Template Selection */}
					<div>
						<label className="block text-sm font-medium text-slate-900 mb-3">
							Pilih Template
						</label>
						<div className="grid grid-cols-3 gap-4">
							{templates.map((t) => (
								<button
									key={t.id}
									onClick={() => setTemplate(t.id)}
									className={`p-4 rounded-lg border-2 transition text-center ${
										template === t.id
											? "border-blue-600 bg-blue-50"
											: "border-slate-200 hover:border-slate-300"
									}`}
								>
									<div className="text-3xl mb-2">{t.icon}</div>
									<div className="font-medium text-sm text-slate-900">
										{t.name}
									</div>
								</button>
							))}
						</div>
					</div>

					{/* Action Buttons */}
					<div className="flex gap-3 pt-4">
						<Button variant="outline" onClick={onBack}>
							Batalkan
						</Button>
						<Button className="flex-1 bg-blue-600 hover:bg-blue-700">
							Buat CV
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

function UploadResume({ onBack }: { onBack: () => void }) {
	const [isDragActive, setIsDragActive] = useState(false);

	return (
		<div className="max-w-2xl mx-auto">
			<Button variant="ghost" className="mb-6 gap-2" onClick={onBack}>
				<ArrowLeft className="w-4 h-4" />
				Kembali ke Pilihan
			</Button>

			<div className="bg-white rounded-lg border border-slate-200 p-8">
				<h2 className="text-2xl font-semibold text-slate-900 mb-6">
					Upload CV Anda
				</h2>

				<div
					onDragEnter={() => setIsDragActive(true)}
					onDragLeave={() => setIsDragActive(false)}
					className={`border-2 border-dashed rounded-lg p-12 text-center transition ${
						isDragActive
							? "border-blue-600 bg-blue-50"
							: "border-slate-300 hover:border-slate-400"
					}`}
				>
					<Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
					<p className="text-lg font-semibold text-slate-900 mb-2">
						Drag & drop CV Anda di sini
					</p>
					<p className="text-slate-600 mb-4">
						atau klik untuk memilih file
					</p>
					<input
						type="file"
						accept=".pdf,.doc,.docx"
						className="hidden"
						id="file-upload"
					/>
					<Button className="bg-blue-600 hover:bg-blue-700">
						Pilih File
					</Button>
					<p className="text-xs text-slate-500 mt-4">
						Format yang didukung: PDF, DOC, DOCX (Maksimal 10MB)
					</p>
				</div>
			</div>
		</div>
	);
}
