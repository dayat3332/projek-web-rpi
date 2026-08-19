import { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  MessageSquare, 
  Sparkles, 
  HelpCircle, 
  ArrowRight,
  ChevronDown
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MagicText from '../components/ui/magic-text'

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  )
}

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  )
}

function YoutubeIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
    </svg>
  )
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'umum',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1200)
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setFormData({
      name: '',
      email: '',
      phone: '',
      category: 'umum',
      subject: '',
      message: ''
    })
  }

  const faqs = [
    {
      q: "Bagaimana cara bergabung menjadi anggota UKM Robotika RPI?",
      a: "Pendaftaran (Open Recruitment) diadakan setiap awal semester baru untuk seluruh mahasiswa aktif. Anda bisa mendaftar melalui form di website atau mengunjungi sekretariat kami pada saat periode recruitment."
    },
    {
      q: "Apakah pemula tanpa pengalaman koding/elektronika bisa mendaftar?",
      a: "Tentu saja! RPI menyediakan program inkubasi dasar (Bootcamp Dasar Robotika) mulai dari elektronika dasar, mikrokontroler Arduino/ESP32, pemrograman C++/Python, hingga mekanikal CAD 3D."
    },
    {
      q: "Bagaimana prosedur pengajuan sponsorship atau riset kolaborasi?",
      a: "Silakan pilih kategori 'Sponsorship & Kemitraan' pada formulir di samping, atau hubungi langsung divisi Hubungan Masyarakat & Sponsorship kami melalui email resmi atau nomor WhatsApp yang tertera."
    },
    {
      q: "Kapan jam kunjungan laboratorium atau workshop robotika?",
      a: "Lab kami buka Senin hingga Sabtu mulai pukul 09.00 - 21.00 WIB. Untuk kunjungan institusi/sekolah, mohon mengirimkan pemberitahuan minimal 3 hari kerja sebelumnya."
    }
  ]

  return (
    <div className="min-h-screen bg-[#f6f5ef] bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] font-sans text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-16 pb-12 md:py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <MagicText
            text="Contact Us"
            className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3"
            wordClassName="text-3xl md:text-5xl font-black text-slate-900"
          />
          <MagicText
            text="Punya pertanyaan seputar riset teknologi, pendaftaran divisi, sponsorship, atau ingin berdiskusi? Tim kami siap menyambut Anda."
            className="text-base md:text-lg text-slate-500 max-w-2xl leading-relaxed"
            wordClassName="text-base md:text-lg font-normal text-slate-500"
          />
        </div>
      </section>

      {/* Main Content Grid */}
      <main className="flex-1 py-12 md:py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards & Lab Info (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white p-7 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2.5">
                <MessageSquare className="text-blue-600" size={22} />
                Informasi Kontak
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 border border-blue-100">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Sekretariat & Workshop</h3>
                    <p className="text-sm font-semibold text-slate-800">Gedung Pusat Robotika & Otomasi Lt. 2</p>
                    <p className="text-xs text-slate-500 mt-0.5">Jl. Kampus Teknologi No. 45, Kompleks Lab Teknik Terpadu</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 border border-blue-100">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Email Resmi</h3>
                    <a href="mailto:kontak@rpi-robotics.org" className="text-sm font-semibold text-blue-600 hover:underline">
                      kontak@rpi-robotics.org
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">Respons cepat dalam 1x24 jam kerja</p>
                  </div>
                </div>

                {/* WhatsApp Hotline */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 border border-emerald-100">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Hotline WhatsApp</h3>
                    <p className="text-sm font-semibold text-slate-800">+62 812-8899-7766</p>
                    <p className="text-xs text-slate-500 mt-0.5">Humas & Layanan Informasi</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0 border border-amber-100">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Jam Riset & Operasional</h3>
                    <p className="text-sm font-semibold text-slate-800">Senin – Sabtu: 09.00 – 21.00 WIB</p>
                    <p className="text-xs text-slate-500 mt-0.5">Minggu & Hari Libur Nasional: Tutup (Khusus Riset Khusus)</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Ikuti Sosial Media Kami</h3>
                <div className="flex items-center gap-3">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-pink-50 hover:text-pink-600 flex items-center justify-center text-slate-600 transition-colors"
                  >
                    <InstagramIcon size={18} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-600 flex items-center justify-center text-slate-600 transition-colors"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-800 hover:text-white flex items-center justify-center text-slate-600 transition-colors"
                  >
                    <GithubIcon size={18} />
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-red-50 hover:text-red-600 flex items-center justify-center text-slate-600 transition-colors"
                  >
                    <YoutubeIcon size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Visit Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-md">
              <h3 className="text-base font-bold mb-1.5">Kunjungan Laboratorium</h3>
              <p className="text-xs text-blue-100 leading-relaxed mb-4">
                Terbuka untuk kunjungan studi dari SMA/SMK, universitas rekanan, dan mitra industri. Jadwalkan sesi presentasi dan demonstrasi robot kontes bersama tim kami.
              </p>
              <a
                href="#form-kontak"
                className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white text-blue-700 px-3.5 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Isi Formulir Kunjungan <ArrowRight size={13} />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form & FAQs (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Contact Form Card */}
            <div id="form-kontak" className="bg-white p-7 md:p-10 rounded-2xl border border-slate-200 shadow-sm">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Kirim Pesan</h2>
                <p className="text-xs md:text-sm text-slate-500 mt-1">
                  Isi formulir di bawah ini dan perwakilan tim kami akan segera menghubungi Anda kembali.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 px-6 text-center bg-emerald-50 rounded-xl border border-emerald-200">
                  <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/20 animate-bounce">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Pesan Berhasil Terkirim!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                    Terima kasih telah menghubungi UKM Robotika RPI. Tim humas kami akan meninjau pesan Anda dan merespons via email atau WhatsApp sesegera mungkin.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-semibold transition-all shadow"
                  >
                    Kirim Pesan Lainnya
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Nama Lengkap <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Muhammad Rafli"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Alamat Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="nama@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Nomor WhatsApp / Telepon
                      </label>
                      <input
                        type="tel"
                        placeholder="0812-xxxx-xxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Kategori Keperluan <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all bg-white"
                      >
                        <option value="umum">Pertanyaan Umum</option>
                        <option value="recruitment">Pendaftaran Anggota (Oprec)</option>
                        <option value="sponsorship">Sponsorship & Kemitraan</option>
                        <option value="riset">Kolaborasi Riset & Proyek</option>
                        <option value="visit">Kunjungan / Study Tour Lab</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Subjek Pesan <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ringkasan topik atau judul pesan Anda"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Detail Pesan <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tuliskan pesan, pertanyaan, atau detail kolaborasi Anda secara lengkap..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-y"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg hover:shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Mengirimkan Pesan...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Kirimkan Pesan Sekarang
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Frequently Asked Questions Accordion */}
            <div className="bg-white p-7 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2.5 mb-6">
                <HelpCircle className="text-blue-600" size={22} />
                <h3 className="text-xl font-bold text-slate-900">Pertanyaan yang Sering Diajukan (FAQ)</h3>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index
                  return (
                    <div 
                      key={index}
                      className="border border-slate-100 rounded-xl overflow-hidden bg-slate-50/50 transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full p-4 text-left font-semibold text-sm text-slate-800 flex items-center justify-between gap-4 hover:text-blue-600 transition-colors"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown 
                          size={16} 
                          className={`shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} 
                        />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 pt-3 animate-in fade-in">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
