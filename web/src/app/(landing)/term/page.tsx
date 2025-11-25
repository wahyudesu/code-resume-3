import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
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
						Syarat dan Ketentuan
					</h1>
					<p className="text-slate-600 mb-8">
						Terakhir diperbarui: November 25, 2024
					</p>

					<div className="prose prose-lg max-w-none text-slate-700 space-y-6">
						<section>
							<h2 className="text-2xl font-semibold text-slate-900 mb-4">
								1. Penerimaan Syarat
							</h2>
							<p className="leading-relaxed">
								Dengan mengakses dan menggunakan Code Resume, Anda menerima dan setuju
								untuk terikat oleh syarat-syarat dan ketentuan-ketentuan perjanjian ini.
								Jika Anda tidak setuju dengan bagian manapun dari syarat ini, maka Anda
								tidak diizinkan untuk menggunakan layanan kami.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-slate-900 mb-4">
								2. Lisensi Penggunaan
							</h2>
							<p className="leading-relaxed">
								Kami memberikan Anda lisensi terbatas, non-eksklusif, dan tidak dapat
								dialihkan untuk menggunakan Code Resume untuk tujuan pribadi. Anda tidak
								boleh:
							</p>
							<ul className="list-disc list-inside space-y-2 mt-4">
								<li>Memodifikasi atau menyalin materi</li>
								<li>Menggunakan materi untuk tujuan komersial</li>
								<li>Mencoba untuk mendecompile atau reverse engineer software</li>
								<li>Menghapus atau mengubah pemberitahuan hak cipta atau kepemilikan</li>
								<li>Mentransfer materi kepada pihak ketiga tanpa persetujuan</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-slate-900 mb-4">
								3. Penafian Konten
							</h2>
							<p className="leading-relaxed">
								Materi dalam Code Resume disediakan &quot;sebagaimana adanya&quot;. Code Resume tidak
								memberikan jaminan, tersurat atau tersirat, mengenai materi ini. Tanpa
								membatasi di atas, Code Resume tidak menjamin keakuratan, ketepatan waktu,
								atau kelengkapan materi di situs web ini.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-slate-900 mb-4">
								4. Pembatasan Tanggung Jawab
							</h2>
							<p className="leading-relaxed">
								Dalam kondisi apa pun, Code Resume atau supplier kami tidak akan bertanggung
								jawab atas kerusakan apa pun (termasuk, tanpa batasan, kerusakan untuk
								kehilangan data atau keuntungan) yang timbul dari penggunaan atau
								ketidakmampuan untuk menggunakan materi di Code Resume.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-slate-900 mb-4">
								5. Akurasi Material
							</h2>
							<p className="leading-relaxed">
								Materi yang muncul di Code Resume bisa termasuk kesalahan teknis, tipografis,
								atau fotografi. Code Resume tidak menjamin bahwa materi di website ini
								akurat, lengkap, atau terkini. Code Resume dapat membuat perubahan pada
								materi yang terkandung dalam Code Resume kapan saja tanpa pemberitahuan.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-slate-900 mb-4">
								6. Tautan Materi
							</h2>
							<p className="leading-relaxed">
								Code Resume belum meninjau semua situs yang terhubung ke website ini dan
								tidak bertanggung jawab atas konten dari situs terhubung manapun. Anda
								melakukannya dengan risiko Anda sendiri. Jika Anda telah keberatan dengan
								salah satu situs yang terhubung ini, silakan hubungi kami.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-slate-900 mb-4">
								7. Modifikasi Syarat Layanan
							</h2>
							<p className="leading-relaxed">
								Code Resume dapat merevisi syarat dan ketentuan untuk website ini setiap saat
								tanpa pemberitahuan. Dengan menggunakan website ini, Anda setuju untuk terikat
								oleh versi terbaru dari syarat dan ketentuan ini.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-slate-900 mb-4">
								8. Hukum Tata Kelola
							</h2>
							<p className="leading-relaxed">
								Syarat dan ketentuan ini serta kebijakan privasi kami mengatur penggunaan
								Code Resume dan merupakan perjanjian lengkap antara Anda dan Code Resume.
								Perjanjian ini diatur oleh dan ditafsirkan sesuai dengan hukum Indonesia.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-slate-900 mb-4">
								9. Kontak Kami
							</h2>
							<p className="leading-relaxed">
								Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan
								hubungi kami di:
							</p>
							<ul className="list-disc list-inside space-y-2 mt-4">
								<li>Email: support@coderesume.com</li>
								<li>Alamat: Indonesia</li>
							</ul>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}
