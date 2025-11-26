"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Save, Eye } from "lucide-react";
import { ResumeSections, type ResumeData } from "@/components/resume/sections";
import { ResumePreview } from "@/components/resume/preview";

// Some Next.js generated types allow route params to be a Promise. At the
// type boundary we accept `any` for `params` to ensure compatibility with
// the generated `PageProps` in `.next/types` (which may declare `params` as
// a Promise). Disable the explicit-any rule for this line only.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ResumeEditorPage({ params }: { params: any }) {
	const [showPreview, setShowPreview] = useState(false);
	interface Section {
		[key: string]: string;
	}

	// Page-level resume state includes some UI fields plus the shape used by
	// ResumeSections. Declare a state type that extends the shared ResumeData.
	type ResumeState = ResumeData & {
		title: string;
		template: string;
		sections: Section[];
	};

	const [resumeData, setResumeData] = useState<ResumeState>({
		title: "CV Saya",
		template: "professional",
		personalInfo: {
			fullName: "",
			email: "",
			phone: "",
			location: "",
			summary: "",
		},
		sections: [] as Section[],
	});

	const handleSave = () => {
		// TODO: Save to API
		console.log("Saving resume:", resumeData);
	};

	return (
		<div className="flex-1 flex flex-col h-full">
			{/* Header */}
			<div className="border-b bg-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 sticky top-0 z-10">
				<div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
					<Link href="/dashboard">
						<Button variant="ghost" size="sm" className="gap-2 text-xs sm:text-sm flex-shrink-0">
							<ArrowLeft className="w-4 h-4" />
							<span className="hidden sm:inline">Kembali</span>
						</Button>
					</Link>
					<div className="min-w-0 flex-1">
						<h1 className="text-lg sm:text-2xl font-bold text-slate-900 line-clamp-1">
							{resumeData.title}
						</h1>
						<p className="text-xs text-slate-500 line-clamp-1">
							ID: {(params as { id: string }).id}
						</p>
					</div>
				</div>

				<div className="flex gap-2 sm:gap-3 flex-wrap sm:flex-nowrap justify-end sm:justify-start w-full sm:w-auto">
					<Button
						variant="outline"
						size="sm"
						className="gap-1 sm:gap-2 text-xs sm:text-sm"
						onClick={() => setShowPreview(!showPreview)}
					>
						<Eye className="w-4 h-4" />
						<span className="hidden sm:inline">{showPreview ? "Edit" : "Preview"}</span>
						<span className="sm:hidden">{showPreview ? "Edit" : "View"}</span>
					</Button>
					<Button
						size="sm"
						className="gap-1 sm:gap-2 bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm"
						onClick={handleSave}
					>
						<Save className="w-4 h-4" />
						<span className="hidden sm:inline">Simpan</span>
					</Button>
				</div>
			</div>

			{/* Content Area */}
			<div className="flex-1 overflow-hidden flex flex-col sm:flex-row">
				{showPreview ? (
					<div className="flex-1 overflow-auto">
						<ResumePreview data={resumeData} />
					</div>
				) : (
					<div className="flex-1 overflow-auto">
						<ResumeSections
							data={resumeData}
							onChange={(d: ResumeData) =>
								setResumeData((prev) => ({ ...prev, ...(d as Partial<ResumeState>) }))
							}
						/>
					</div>
				)}
			</div>
		</div>
	);
}
