import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
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
						Kebijakan Privasi
					</h1>
					<p className="text-slate-600 mb-8">
						Terakhir diperbarui: November 25, 2024
					</p>

					<div className="prose prose-lg max-w-none text-slate-700 space-y-6">
						<section>
							<h2 className="text-2xl font-semibold text-slate-900 mb-4">
								Pengantar
							</h2>
							<p className="leading-relaxed">
								Code Resume (&quot;kami&quot;, &quot;kami&quot;, atau &quot;perusahaan kami&quot;) mengoperasikan website
								Code Resume (selanjutnya disebut &quot;Layanan&quot;). Halaman ini menginformasikan
								kepada Anda tentang kebijakan privasi kami mengenai pengumpulan, penggunaan,
								dan pengungkapan data pribadi Anda ketika Anda menggunakan Layanan kami.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-slate-900 mb-4">
								Definisi dan Istilah Kunci
							</h2>
							<ul className="list-disc list-inside space-y-2">
								<li>
									<strong>Data Pribadi:</strong> Setiap informasi yang berkaitan dengan
									individu yang teridentifikasi atau dapat diidentifikasi.
								</li>
								<li>
									<strong>Data Penggunaan:</strong> Data yang dikumpulkan secara otomatis
									baik dari penggunaan Layanan maupun dari infrastruktur Layanan itu
									sendiri.
								</li>
								<li>
									<strong>Cookie:</strong> File kecil yang disimpan di perangkat Anda yang
									berisi data tentang preferensi browsing Anda.
								</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-slate-900 mb-4">
								Pengumpulan dan Penggunaan Data
							</h2>
							<p className="leading-relaxed mb-4">
								Kami mengumpulkan berbagai jenis informasi untuk berbagai tujuan guna
								memberikan dan meningkatkan Layanan kami.
							</p>
							<h3 className="text-lg font-semibold text-slate-800 mb-3">
								Jenis Data yang Dikumpulkan:
							</h3>
							<ul className="list-disc list-inside space-y-2">
								<li>Email dan nama pengguna</li>
								<li>Data CV dan informasi profesional</li>
								<li>Informasi perangkat dan log akses</li>
								<li>Data lokasi (jika diizinkan)</li>
								<li>Cookie dan data analitik</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-slate-900 mb-4">
								Keamanan Data
							</h2>
							<p className="leading-relaxed">
								Keamanan data Anda penting bagi kami tetapi ingat bahwa tidak ada metode
								transmisi melalui Internet atau metode penyimpanan elektronik yang 100%
								aman. Meskipun kami berusaha untuk menggunakan sarana yang dapat diterima
								secara komersial untuk melindungi Data Pribadi Anda, kami tidak dapat
								menjamin keamanan absolutnya.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-slate-900 mb-4">
								Penyimpanan Data
							</h2>
							<p className="leading-relaxed">
								Data Anda disimpan di server kami yang aman di Indonesia. Kami akan
								mempertahankan data Anda selama Anda mempertahankan akun Anda atau sesuai
								dengan persyaratan hukum apa pun.
							</p>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-slate-900 mb-4">
								Bagikan Informasi Anda
							</h2>
							<p className="leading-relaxed">
								Kami tidak akan membagikan data pribadi Anda kepada pihak ketiga tanpa
								persetujuan Anda, kecuali:
							</p>
							<ul className="list-disc list-inside space-y-2 mt-4">
								<li>Untuk mematuhi hukum atau peraturan yang berlaku</li>
								<li>Untuk melindungi hak, privasi, keselamatan, atau properti kami</li>
								<li>Kepada mitra layanan yang dipercaya yang membantu kami menjalankan
									website
								</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-slate-900 mb-4">
								Hak Anda
							</h2>
							<p className="leading-relaxed">
								Anda berhak untuk:
							</p>
							<ul className="list-disc list-inside space-y-2 mt-4">
								<li>Mengakses data pribadi yang kami miliki tentang Anda</li>
								<li>Meminta koreksi data yang salah atau tidak lengkap</li>
								<li>Meminta penghapusan data Anda</li>
								<li>Menolak pemrosesan data Anda</li>
								<li>Menerima salinan data Anda dalam format yang dapat digunakan</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-slate-900 mb-4">
								Hubungi Kami
							</h2>
							<p className="leading-relaxed">
								Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan
								hubungi kami:
							</p>
							<ul className="list-disc list-inside space-y-2 mt-4">
								<li>Email: privacy@coderesume.com</li>
								<li>Alamat: Indonesia</li>
							</ul>
						</section>

						<section>
							<h2 className="text-2xl font-semibold text-slate-900 mb-4">
								Perubahan Kebijakan Ini
							</h2>
							<p className="leading-relaxed">
								Kami dapat memperbarui Kebijakan Privasi kami dari waktu ke waktu. Kami akan
								memberi tahu Anda tentang perubahan apa pun dengan memposting Kebijakan
								Privasi baru di halaman ini dan memperbarui tanggal &quot;Terakhir Diperbarui&quot;.
							</p>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}
