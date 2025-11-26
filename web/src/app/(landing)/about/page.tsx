import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
	return (
		<div className="w-full">
			<div className="min-h-screen bg-white py-8 sm:py-12 lg:py-20">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
					<Link href="/">
						<Button variant="ghost" className="mb-6 sm:mb-8 gap-2 text-xs sm:text-sm">
							<ArrowLeft className="w-4 h-4" />
							Kembali ke Beranda
						</Button>
					</Link>

					<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-slate-900">
						Tentang Code Resume
					</h1>

					<div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-slate-700">
						<p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed">
							Code Resume adalah aplikasi revolusioner yang dirancang untuk memudahkan
							pembuatan CV profesional dalam hitungan menit. Kami percaya bahwa setiap
							orang berhak memiliki CV yang menakjubkan, tanpa perlu keahlian desain atau
							formatting yang rumit.
						</p>

						<h2 className="text-2xl sm:text-2xl lg:text-3xl font-semibold mt-8 sm:mt-12 mb-3 sm:mb-4 text-slate-900">
							Visi Kami
						</h2>
						<p className="mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
							Menciptakan ekosistem yang memberdayakan profesional muda dan berpengalaman
							untuk menghadirkan CV terbaik mereka kepada dunia. Kami ingin menghilangkan
							hambatan dalam proses pembuatan CV sehingga Anda bisa fokus pada isi, bukan
							format.
						</p>

						<h2 className="text-2xl sm:text-2xl lg:text-3xl font-semibold mt-8 sm:mt-12 mb-3 sm:mb-4 text-slate-900">
							Misi Kami
						</h2>
						<ul className="list-disc list-inside mb-6 sm:mb-8 space-y-2 sm:space-y-3 text-sm sm:text-base">
							<li>Menyediakan platform mudah digunakan untuk membuat CV profesional</li>
							<li>
								Mengotomatisasi proses formatting sehingga Anda hemat waktu
							</li>
							<li>
								Menawarkan template modern yang meningkatkan peluang Anda mendapat
								pekerjaan
							</li>
							<li>
								Membantu profesional menonjol di antara ribuan pelamar lainnya
							</li>
						</ul>

						<h2 className="text-2xl sm:text-2xl lg:text-3xl font-semibold mt-8 sm:mt-12 mb-3 sm:mb-4 text-slate-900">
							Mengapa Memilih Kami?
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-6 sm:my-8">
							<div className="p-4 sm:p-6 bg-blue-50 rounded-lg">
								<h3 className="font-semibold text-base sm:text-lg mb-2 text-slate-900">
									Cepat & Efisien
								</h3>
								<p className="text-sm sm:text-base">
									Buat CV profesional dalam menit, bukan jam atau hari. Sistem kami
									yang cerdas menghemat waktu Anda.
								</p>
							</div>
							<div className="p-4 sm:p-6 bg-blue-50 rounded-lg">
								<h3 className="font-semibold text-base sm:text-lg mb-2 text-slate-900">
									Template Modern
								</h3>
								<p className="text-sm sm:text-base">
									Pilih dari koleksi template yang dirancang oleh desainer profesional
									dan terus diperbarui.
								</p>
							</div>
							<div className="p-4 sm:p-6 bg-blue-50 rounded-lg">
								<h3 className="font-semibold text-base sm:text-lg mb-2 text-slate-900">
									Mudah Digunakan
								</h3>
								<p className="text-sm sm:text-base">
									Interface intuitif kami membuat siapa saja bisa membuat CV bagus tanpa
									keahlian khusus.
								</p>
							</div>
							<div className="p-4 sm:p-6 bg-blue-50 rounded-lg">
								<h3 className="font-semibold text-base sm:text-lg mb-2 text-slate-900">
									Support Penuh
								</h3>
								<p className="text-sm sm:text-base">
									Tim kami siap membantu Anda 24/7 untuk memastikan pengalaman terbaik.
								</p>
							</div>
						</div>

						<h2 className="text-2xl sm:text-2xl lg:text-3xl font-semibold mt-8 sm:mt-12 mb-3 sm:mb-4 text-slate-900">
							Teknologi Terkini
						</h2>
						<p className="mb-6 leading-relaxed text-sm sm:text-base">
							Kami membangun Code Resume menggunakan teknologi terdepan termasuk Next.js,
							Tailwind CSS, dan database PostgreSQL. Infrastruktur kami yang robust menjamin
							keamanan data dan kecepatan akses.
						</p>
					</div>

					<div className="mt-8 sm:mt-12 p-4 sm:p-8 bg-slate-50 rounded-lg text-center">
						<h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-slate-900">
							Siap Memulai?
						</h2>
						<p className="text-slate-600 mb-4 sm:mb-6 text-sm sm:text-base">
							Jangan tunda lagi. Buat CV profesional Anda sekarang juga!
						</p>
						<Link href="/dashboard">
							<Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-sm sm:text-base w-full sm:w-auto">
								Mulai Sekarang
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
