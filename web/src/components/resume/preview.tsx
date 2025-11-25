"use client";

interface PersonalInfo {
	fullName?: string;
	summary?: string;
	email?: string;
	phone?: string;
	location?: string;
}

interface ResumePreviewProps {
	data: {
		personalInfo?: PersonalInfo;
		[key: string]: unknown;
	};
}

export function ResumePreview({ data }: ResumePreviewProps) {
	const personal = data.personalInfo ?? {};

	return (
		<div className="flex-1 overflow-auto bg-slate-100 p-8">
			<div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-12 min-h-full">
				{/* Header */}
				<div className="mb-8 border-b-2 border-slate-300 pb-6">
					<h1 className="text-4xl font-bold text-slate-900">
						{personal.fullName || "Nama Anda"}
					</h1>
					<p className="text-slate-600 mt-2">
						{personal.summary || "Ringkasan profesional Anda"}
					</p>

					{/* Contact Info */}
					<div className="flex gap-6 mt-4 text-sm text-slate-700">
						{personal.email && <span>{personal.email}</span>}
						{personal.phone && <span>{personal.phone}</span>}
						{personal.location && <span>{personal.location}</span>}
					</div>
				</div>

				{/* Empty State */}
				<div className="text-center py-12 text-slate-500">
					<p>Mulai mengisi informasi untuk melihat preview CV Anda</p>
				</div>
			</div>
		</div>
	);
}
