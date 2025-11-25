"use client";

import React, { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Upload, Linkedin, ArrowRight, Code2 } from "lucide-react";

const PROGRAMMING_LANGUAGES = [
	{ id: "javascript", name: "JavaScript" },
	{ id: "python", name: "Python" },
	{ id: "typescript", name: "TypeScript" },
	{ id: "java", name: "Java" },
	{ id: "cpp", name: "C++" },
	{ id: "csharp", name: "C#" },
	{ id: "go", name: "Go" },
	{ id: "rust", name: "Rust" },
	{ id: "php", name: "PHP" },
	{ id: "kotlin", name: "Kotlin" },
];

type Step = "initial" | "upload" | "language" | "generating" | "review";

interface ResumeData {
	type?: "upload" | "linkedin";
	file?: File;
	linkedinUrl?: string;
	selectedLanguages?: string[];
}

export function CreateResumeDialog({
	open,
	onOpenChange,
}: {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}) {
	const [step, setStep] = useState<Step>("initial");
	const [resumeData, setResumeData] = useState<ResumeData>({});
	const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

	const handleReset = () => {
		setStep("initial");
		setResumeData({});
		setSelectedLanguages([]);
	};

	const handleClose = () => {
		handleReset();
		onOpenChange(false);
	};

	const handleSelectType = (type: "upload" | "linkedin") => {
		setResumeData({ ...resumeData, type });
		setStep("upload");
	};

	const handleFileUpload = (file: File) => {
		setResumeData({ ...resumeData, file });
		setStep("language");
	};

	const handleLinkedinLink = (url: string) => {
		setResumeData({ ...resumeData, linkedinUrl: url });
		setStep("language");
	};

	const handleLanguageSelect = (languageId: string) => {
		setSelectedLanguages((prev) =>
			prev.includes(languageId)
				? prev.filter((l) => l !== languageId)
				: [...prev, languageId]
		);
	};

	const handleGenerate = async () => {
		setStep("generating");
		setResumeData({ ...resumeData, selectedLanguages });

		// Simulate API call
		setTimeout(() => {
			setStep("review");
		}, 2000);
	};

	return (
		<Dialog open={open} onOpenChange={handleClose}>
			<DialogContent className="max-w-2xl">
				<DialogHeader>
					<DialogTitle>
						{step === "initial" && "Buat CV Baru"}
						{step === "upload" && "Unggah atau Impor Data"}
						{step === "language" && "Pilih Bahasa Pemrograman"}
						{step === "generating" && "Menghasilkan CV..."}
						{step === "review" && "Pratinjau CV"}
					</DialogTitle>
				</DialogHeader>

				<div className="py-8">
					{/* Step 1: Initial Choice */}
					{step === "initial" && (
						<div className="space-y-4">
							<p className="text-muted-foreground">
								Pilih cara untuk membuat CV Anda
							</p>
							<div className="grid grid-cols-2 gap-4">
								<button
									onClick={() => handleSelectType("upload")}
									className="flex flex-col items-center gap-4 p-6 rounded-lg border-2 border-border hover:border-primary hover:bg-primary/5 transition"
								>
									<Upload className="w-8 h-8 text-primary" />
									<div className="text-center">
										<p className="font-semibold">Upload CV</p>
										<p className="text-sm text-muted-foreground">
											Unggah CV lama Anda
										</p>
									</div>
								</button>

								<button
									onClick={() => handleSelectType("linkedin")}
									className="flex flex-col items-center gap-4 p-6 rounded-lg border-2 border-border hover:border-primary hover:bg-primary/5 transition"
								>
									<Linkedin className="w-8 h-8 text-blue-600" />
									<div className="text-center">
										<p className="font-semibold">Impor LinkedIn</p>
										<p className="text-sm text-muted-foreground">
											Sinkronkan dari LinkedIn
										</p>
									</div>
								</button>
							</div>
						</div>
					)}

					{/* Step 2: Upload */}
					{step === "upload" && (
						<div className="space-y-4">
							{resumeData.type === "upload" ? (
								<>
									<p className="text-muted-foreground">
										Unggah file CV Anda (PDF, Word, atau format lainnya)
									</p>
									<div
										className="border-2 border-dashed rounded-lg p-12 text-center hover:border-primary/50 transition cursor-pointer"
										onDragOver={(e) => {
											e.preventDefault();
											e.currentTarget.classList.add("border-primary");
										}}
										onDragLeave={(e) => {
											e.currentTarget.classList.remove("border-primary");
										}}
										onDrop={(e) => {
											e.preventDefault();
											const file = e.dataTransfer.files[0];
											if (file) handleFileUpload(file);
										}}
									>
										<Upload className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
										<p className="font-semibold mb-2">
											Drag dan drop file Anda di sini
										</p>
										<p className="text-sm text-muted-foreground mb-4">
											atau
										</p>
										<label>
											<input
												type="file"
												accept=".pdf,.doc,.docx"
												onChange={(e) => {
													const file = e.target.files?.[0];
													if (file) handleFileUpload(file);
												}}
												className="hidden"
											/>
											<span className="text-primary hover:underline cursor-pointer">
												Klik untuk memilih file
											</span>
										</label>
									</div>
								</>
							) : (
								<>
									<p className="text-muted-foreground">
										Masukkan URL profil LinkedIn Anda
									</p>
									<input
										type="url"
										placeholder="https://linkedin.com/in/username"
										className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
										onKeyPress={(e) => {
											if (e.key === "Enter") {
												const input = e.currentTarget;
												if (input.value) {
													handleLinkedinLink(input.value);
												}
											}
										}}
									/>
									<Button
										className="w-full"
										onClick={() => {
											const input = document.querySelector(
												'input[type="url"]'
											) as HTMLInputElement;
											if (input?.value) {
												handleLinkedinLink(input.value);
											}
										}}
									>
										Lanjutkan
									</Button>
								</>
							)}
						</div>
					)}

					{/* Step 3: Language Selection */}
					{step === "language" && (
						<div className="space-y-4">
							<div>
								<p className="text-muted-foreground mb-4">
									Pilih bahasa pemrograman utama Anda (pilih satu atau lebih)
								</p>
								<div className="grid grid-cols-3 gap-3">
									{PROGRAMMING_LANGUAGES.map((lang) => (
										<button
											key={lang.id}
											onClick={() => handleLanguageSelect(lang.id)}
											className={`flex items-center gap-2 p-3 rounded-lg border-2 transition ${
												selectedLanguages.includes(lang.id)
													? "border-primary bg-primary/10"
													: "border-border hover:border-primary/50"
											}`}
										>
											<Code2 className="w-4 h-4" />
											<span className="text-sm font-medium">
												{lang.name}
											</span>
										</button>
									))}
								</div>
							</div>
							<Button
								className="w-full"
								onClick={handleGenerate}
								disabled={selectedLanguages.length === 0}
							>
								Generate CV
								<ArrowRight className="w-4 h-4 ml-2" />
							</Button>
						</div>
					)}

					{/* Step 4: Generating */}
					{step === "generating" && (
						<div className="flex flex-col items-center justify-center py-12 space-y-4">
							<div className="w-12 h-12 rounded-full border-4 border-border border-t-primary animate-spin" />
							<p className="text-muted-foreground">
								Sedang menghasilkan CV Anda...
							</p>
						</div>
					)}

					{/* Step 5: Review */}
					{step === "review" && (
						<div className="space-y-4">
							<div className="bg-muted p-6 rounded-lg">
								<p className="text-sm text-muted-foreground mb-4">
									CV Anda telah berhasil dibuat! Kini Anda dapat:
								</p>
								<ul className="space-y-2 text-sm list-disc list-inside">
									<li>Melihat preview CV</li>
									<li>Melakukan kustomisasi dan editing</li>
									<li>Mendownload atau share CV Anda</li>
								</ul>
							</div>
							<div className="flex gap-2">
								<Button
									variant="outline"
									className="flex-1"
									onClick={handleClose}
								>
									Selesai
								</Button>
								<Button className="flex-1">
									Edit CV
									<ArrowRight className="w-4 h-4 ml-2" />
								</Button>
							</div>
						</div>
					)}
				</div>
			</DialogContent>
		</Dialog>
	);
}
