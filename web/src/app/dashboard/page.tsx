"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus, FileText, Clock, Trash2, Edit2 } from "lucide-react";
import { CreateResumeDialog } from "@/components/dashboard/create-resume-dialog";

export default function DashboardPage() {
	const [dialogOpen, setDialogOpen] = useState(false);

	const cvLimit = 5;

	// TODO: Fetch resumes from API
	const resumes = [
		{
			id: "1",
			title: "CV Utama",
			template: "Professional",
			lastModified: "2024-11-25",
			sections: 6,
		},
		{
			id: "2",
			title: "CV Alternatif",
			template: "Modern",
			lastModified: "2024-11-20",
			sections: 5,
		},
	];

	const formatDate = (date: string) => {
		return new Date(date).toLocaleDateString("id-ID", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	return (
		<>
			<div className="flex-1 flex flex-col bg-background">
				{/* Header */}
				<div className="border-b border-border bg-background px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
					<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
						<div>
							<h1 className="text-2xl sm:text-3xl font-bold text-foreground">
								Dashboard
							</h1>
							<p className="text-xs sm:text-sm text-muted-foreground mt-1">
								Kelola dan buat CV profesional Anda
							</p>
						</div>
						<Button
							className="gap-2 w-full sm:w-auto text-sm sm:text-base"
							onClick={() => setDialogOpen(true)}
						>
							<Plus className="w-4 h-4" />
							CV Baru
						</Button>
					</div>
				</div>

				{/* Content */}
				<div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
					{resumes.length > 0 ? (
						<div className="space-y-6 sm:space-y-8">
							<div>
								<h2 className="text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6">
									CV Saya ({resumes.length})
								</h2>
								<p className="text-xs sm:text-sm text-muted-foreground mb-2">
									Limit CV yang telah dibuat: {resumes.length}/{cvLimit}
								</p>
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
									{resumes.map((resume) => (
										<div
											key={resume.id}
											className="group rounded-lg border border-border bg-card p-4 sm:p-6 hover:border-primary/50 hover:shadow-lg transition-all flex flex-col h-full"
										>
											<div className="flex items-start justify-between mb-4">
												<div className="flex-1 pr-2">
													<h3 className="text-lg sm:text-xl font-semibold text-foreground line-clamp-1">
														{resume.title}
													</h3>
													<span className="inline-block mt-2 px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/30">
														{resume.template}
													</span>
												</div>
												<FileText className="w-5 h-5 text-muted-foreground shrink-0" />
											</div>

											<div className="space-y-1 sm:space-y-2 mb-6 text-xs sm:text-sm text-muted-foreground flex-1">
												<div className="flex items-center gap-2">
													<Clock className="w-4 h-4 shrink-0" />
													<span className="line-clamp-1">Diubah {formatDate(resume.lastModified)}</span>
												</div>
												<div>
													{resume.sections} bagian
												</div>
											</div>

											<div className="flex flex-col sm:flex-row gap-2">
												<Link
													href={`/dashboard/resume/${resume.id}`}
													className="flex-1 min-w-0"
												>
													<Button
														size="sm"
														className="w-full text-xs sm:text-sm"
														variant="default"
													>
														<Edit2 className="w-4 h-4 sm:mr-2 shrink-0" />
														<span className="hidden sm:inline">Edit</span>
													</Button>
												</Link>
												{/* Removed Preview button per request */}
												<Button
													size="sm"
													variant="ghost"
													className="text-destructive hover:text-destructive hover:bg-destructive/10 shrink-0"
												>
													<Trash2 className="w-4 h-4" />
												</Button>
											</div>
										</div>
									))}
									{/* Add new resume as a card in the same grid */}
									<div className="group rounded-lg border border-border bg-card p-4 sm:p-6 hover:border-primary/50 hover:shadow-lg transition-all flex flex-col h-full">
										<button onClick={() => setDialogOpen(true)} className="flex-1 flex flex-col items-center justify-center gap-2">
											<Plus className="w-10 sm:w-12 h-10 sm:h-12 text-muted-foreground group-hover:text-primary" />
											<p className="font-semibold text-foreground text-sm sm:text-base mt-2">Tambah CV Baru</p>
											<p className="text-xs sm:text-sm text-muted-foreground mt-1">Buat CV baru dari awal atau impor</p>
										</button>
									</div>
								</div>
							</div>
						</div>
					) : (
						<div className="flex flex-col items-center justify-center h-full text-center py-12 sm:py-20">
							<FileText className="w-12 sm:w-16 h-12 sm:h-16 text-muted-foreground mb-3 sm:mb-4" />
							<h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
								Belum Ada CV
							</h2>
							<p className="text-muted-foreground mb-6 sm:mb-8 max-w-sm text-sm sm:text-base px-4">
								Mulai dengan membuat CV baru. Anda dapat mengupload CV lama atau
								impor dari LinkedIn.
							</p>
							<Button onClick={() => setDialogOpen(true)} className="gap-2 text-sm sm:text-base">
								<Plus className="w-4 h-4" />
								Buat CV Pertama Saya
							</Button>
						</div>
					)}
				</div>
			</div>

			<CreateResumeDialog
				open={dialogOpen}
				onOpenChange={setDialogOpen}
			/>
		</>
	);
}
