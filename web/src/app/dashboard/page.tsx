"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus, FileText, Clock, Trash2, Edit2 } from "lucide-react";
import { CreateResumeDialog } from "@/components/dashboard/create-resume-dialog";

export default function DashboardPage() {
	const [dialogOpen, setDialogOpen] = useState(false);

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
				<div className="border-b border-border bg-background px-8 py-6">
					<div className="flex items-center justify-between">
						<div>
							<h1 className="text-3xl font-bold text-foreground">
								Dashboard
							</h1>
							<p className="text-muted-foreground mt-1">
								Kelola dan buat CV profesional Anda
							</p>
						</div>
						<Button
							className="gap-2"
							onClick={() => setDialogOpen(true)}
						>
							<Plus className="w-4 h-4" />
							CV Baru
						</Button>
					</div>
				</div>

				{/* Content */}
				<div className="flex-1 p-8">
					{resumes.length > 0 ? (
						<div className="space-y-8">
							<div>
								<h2 className="text-lg font-semibold text-foreground mb-6">
									CV Saya ({resumes.length})
								</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
									{resumes.map((resume) => (
										<div
											key={resume.id}
											className="group rounded-lg border border-border bg-card p-6 hover:border-primary/50 hover:shadow-lg transition-all"
										>
											<div className="flex items-start justify-between mb-4">
												<div>
													<h3 className="text-xl font-semibold text-foreground">
														{resume.title}
													</h3>
													<span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/30">
														{resume.template}
													</span>
												</div>
												<FileText className="w-5 h-5 text-muted-foreground" />
											</div>

											<div className="space-y-2 mb-6 text-sm text-muted-foreground">
												<div className="flex items-center gap-2">
													<Clock className="w-4 h-4" />
													Diubah {formatDate(resume.lastModified)}
												</div>
												<div>
													{resume.sections} bagian
												</div>
											</div>

											<div className="flex gap-2">
												<Link
													href={`/dashboard/resume/${resume.id}`}
													className="flex-1"
												>
													<Button
														size="sm"
														className="w-full"
														variant="default"
													>
														<Edit2 className="w-4 h-4 mr-2" />
														Edit
													</Button>
												</Link>
												<Button
													size="sm"
													variant="outline"
													className="flex-1"
												>
													Preview
												</Button>
												<Button
													size="sm"
													variant="ghost"
													className="text-destructive hover:text-destructive hover:bg-destructive/10"
												>
													<Trash2 className="w-4 h-4" />
												</Button>
											</div>
										</div>
									))}
								</div>
							</div>

							{/* Add New Resume Card */}
							<div>
								<button
									onClick={() => setDialogOpen(true)}
									className="w-full md:w-auto rounded-lg border-2 border-dashed border-border bg-card/30 p-8 text-center hover:border-primary/50 hover:bg-primary/5 transition group"
								>
									<Plus className="w-12 h-12 text-muted-foreground group-hover:text-primary mx-auto mb-3" />
									<p className="font-semibold text-foreground">
										Tambah CV Baru
									</p>
									<p className="text-sm text-muted-foreground">
										Buat CV baru dari awal atau impor dari LinkedIn
									</p>
								</button>
							</div>
						</div>
					) : (
						<div className="flex flex-col items-center justify-center h-full text-center py-20">
							<FileText className="w-16 h-16 text-muted-foreground mb-4" />
							<h2 className="text-2xl font-semibold text-foreground mb-2">
								Belum Ada CV
							</h2>
							<p className="text-muted-foreground mb-8 max-w-sm">
								Mulai dengan membuat CV baru. Anda dapat mengupload CV lama atau
								impor dari LinkedIn.
							</p>
							<Button onClick={() => setDialogOpen(true)} className="gap-2">
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
