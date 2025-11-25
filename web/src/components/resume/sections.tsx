"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, ChevronDown, ChevronUp } from "lucide-react";

interface PersonalInfo {
	fullName?: string;
	email?: string;
	phone?: string;
	location?: string;
	summary?: string;
}

export interface ResumeData {
	personalInfo: PersonalInfo;
	[key: string]: unknown;
}

interface ResumeSectionsProps {
	data: ResumeData;
	onChange: (data: ResumeData) => void;
}

export function ResumeSections({ data, onChange }: ResumeSectionsProps) {
	const [expandedSections, setExpandedSections] = useState<string[]>([
		"personal",
	]);

	const toggleSection = (section: string) => {
		setExpandedSections((prev) =>
			prev.includes(section)
				? prev.filter((s) => s !== section)
				: [...prev, section]
		);
	};

	return (
		<div className="max-w-4xl mx-auto p-8 space-y-4">
			{/* Personal Info Section */}
			<div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
				<button
					onClick={() => toggleSection("personal")}
					className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition"
				>
					<h2 className="text-lg font-semibold text-slate-900">
						Informasi Pribadi
					</h2>
					{expandedSections.includes("personal") ? (
						<ChevronUp className="w-5 h-5" />
					) : (
						<ChevronDown className="w-5 h-5" />
					)}
				</button>

				{expandedSections.includes("personal") && (
					<div className="px-6 py-4 border-t border-slate-200 space-y-4">
						<input
							type="text"
							placeholder="Nama Lengkap"
							value={data.personalInfo.fullName || ""}
							onChange={(e) =>
								onChange({
									...data,
									personalInfo: {
										...data.personalInfo,
										fullName: e.target.value,
									},
								})
							}
							className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						<div className="grid grid-cols-2 gap-4">
							<input
								type="email"
								placeholder="Email"
								value={data.personalInfo.email || ""}
								onChange={(e) =>
									onChange({
										...data,
										personalInfo: {
											...data.personalInfo,
											email: e.target.value,
										},
									})
								}
								className="px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
							<input
								type="tel"
								placeholder="Nomor Telepon"
								value={data.personalInfo.phone || ""}
								onChange={(e) =>
									onChange({
										...data,
										personalInfo: {
											...data.personalInfo,
											phone: e.target.value,
										},
									})
								}
								className="px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
						<input
							type="text"
							placeholder="Lokasi"
							value={data.personalInfo.location || ""}
							onChange={(e) =>
								onChange({
									...data,
									personalInfo: {
										...data.personalInfo,
										location: e.target.value,
									},
								})
							}
							className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						<textarea
							placeholder="Ringkasan Profesional"
							rows={3}
							value={data.personalInfo.summary || ""}
							onChange={(e) =>
								onChange({
									...data,
									personalInfo: {
										...data.personalInfo,
										summary: e.target.value,
									},
								})
							}
							className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
						/>
					</div>
				)}
			</div>

			{/* Additional Sections Placeholder */}
			<div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
				<Button className="gap-2 bg-blue-600 hover:bg-blue-700">
					<Plus className="w-4 h-4" />
					Tambah Bagian Baru
				</Button>
				<p className="text-sm text-slate-600 mt-3">
					Tambahkan pengalaman, pendidikan, skill, atau bagian custom lainnya
				</p>
			</div>
		</div>
	);
}
