import React, { useEffect } from 'react'
import { Timeline } from '@/components/ui/timeline'
import { AnimatedJobCard } from '@/components/ui/animated-card'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { 
  ArrowLeft, 
  Target, 
  Compass, 
  Trophy, 
  Cpu, 
  Lightbulb, 
  Users, 
  Sparkles, 
  Flame, 
  Award,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  // Data Timeline RPI dari Berdiri (2018) hingga Pernah Juara & Masa Kini
  const timelineData = [
    {
      title: "2018 - 2019",
      content: (
        <div className="space-y-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200 mb-3">
              <Sparkles size={13} /> Titik Awal Pendirian
            </span>
            <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              Inisiasi & Berdirinya Komunitas Robotika RPI
            </h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed mt-2">
              Berawal dari gagasan sekelompok mahasiswa teknik di Politeknik Negeri Indramayu yang memiliki minat mendalam di bidang mekatronika dan otomasi. Dengan fasilitas lab dasar yang terbatas, komunitas mulai merintis proyek mikrokontroler (Arduino & AVR), perakitan mikrorobotika, dan line follower konvensional.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-neutral-900 p-3 rounded-lg border border-slate-200/80 dark:border-neutral-800">
              <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
              <span>Pembentukan Kelompok Minat Robotika</span>
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-neutral-900 p-3 rounded-lg border border-slate-200/80 dark:border-neutral-800">
              <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
              <span>Pembuatan Robot Line Follower Analog</span>
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-neutral-900 p-3 rounded-lg border border-slate-200/80 dark:border-neutral-800">
              <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
              <span>Workshop Dasar Elektronika & Solder</span>
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-neutral-900 p-3 rounded-lg border border-slate-200/80 dark:border-neutral-800">
              <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
              <span>Partisipasi Lomba Line Tracking Lokal</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="group overflow-hidden rounded-2xl border border-slate-200 dark:border-neutral-800 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop"
                alt="Perakitan Sirkuit Elektronika RPI"
                className="w-full h-44 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="p-3 bg-white dark:bg-neutral-900">
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">Riset Sirkuit Mikrokontroler & PCB Generasi Pertama</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl border border-slate-200 dark:border-neutral-800 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
                alt="Workshop Robotika Awal"
                className="w-full h-44 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="p-3 bg-white dark:bg-neutral-900">
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">Suasana Prototyping & Assembly Robot di Lab</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020 - 2021",
      content: (
        <div className="space-y-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200 mb-3">
              <Flame size={13} /> Pengakuan Institusi & Debut KRI
            </span>
            <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              Peresmian UKM & Debut Kontes Robot Indonesia (KRI)
            </h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed mt-2">
              Komunitas resmi ditetapkan sebagai Unit Kegiatan Mahasiswa (UKM) Robotika Politeknik Negeri Indramayu. RPI mulai mengirimkan delegasi pertama untuk berlaga di Kontes Robot Pemadam Api Indonesia (KRPAI) dan Kontes Robot Sepak Bola Beroda (KRSBI), menandai langkah awal kompetisi tingkat nasional.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-neutral-900 p-3 rounded-lg border border-slate-200/80 dark:border-neutral-800">
              <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
              <span>SK Resmi Penetapan UKM Robotika Polindra</span>
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-neutral-900 p-3 rounded-lg border border-slate-200/80 dark:border-neutral-800">
              <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
              <span>Lolos Tahap Evaluasi Teknis KRI Wilayah</span>
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-neutral-900 p-3 rounded-lg border border-slate-200/80 dark:border-neutral-800">
              <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
              <span>Robot Pemadam Api Berkaki (Hexapod)</span>
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-neutral-900 p-3 rounded-lg border border-slate-200/80 dark:border-neutral-800">
              <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
              <span>Penerapan Algoritma Wall Following & Flame Sensor</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="group overflow-hidden rounded-2xl border border-slate-200 dark:border-neutral-800 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=600&h=400&fit=crop"
                alt="Robot Hexapod SAR RPI"
                className="w-full h-44 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="p-3 bg-white dark:bg-neutral-900">
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">Pengembangan Robot Berkaki Inverse Kinematics</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl border border-slate-200 dark:border-neutral-800 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&h=400&fit=crop"
                alt="Sensor navigasi robot"
                className="w-full h-44 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="p-3 bg-white dark:bg-neutral-900">
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">Kalibrasi Sensor Inframerah & Ultrasonik Otonom</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022 - 2023",
      content: (
        <div className="space-y-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800 border border-purple-200 mb-3">
              <Lightbulb size={13} /> Lompatan Riset & Prestasi Regional
            </span>
            <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              Ekspansi Divisi Riset & Gelar Juara Regional
            </h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed mt-2">
              Transformasi teknologi besar-besaran dengan mengadopsi Robot Operating System (ROS), Computer Vision berbasis deep learning, dan sensor LiDAR. Tim RPI menorehkan prestasi membanggakan dengan meraih Juara 2 & Kategori Robot Strategi Terbaik pada seleksi KRI Regional 1 serta menembus babak final Nasional.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-neutral-900 p-3 rounded-lg border border-slate-200/80 dark:border-neutral-800">
              <Award size={16} className="text-purple-600 shrink-0" />
              <span>Juara 2 Kontes Robot SAR Indonesia Wilayah</span>
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-neutral-900 p-3 rounded-lg border border-slate-200/80 dark:border-neutral-800">
              <Award size={16} className="text-purple-600 shrink-0" />
              <span>Penghargaan Strategi & Algoritma Terbaik</span>
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-neutral-900 p-3 rounded-lg border border-slate-200/80 dark:border-neutral-800">
              <CheckCircle2 size={16} className="text-purple-600 shrink-0" />
              <span>Integrasi SLAM (Simultaneous Localization & Mapping)</span>
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-neutral-900 p-3 rounded-lg border border-slate-200/80 dark:border-neutral-800">
              <CheckCircle2 size={16} className="text-purple-600 shrink-0" />
              <span>Riset Wahana Drone Otonom (KRTI)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="group overflow-hidden rounded-2xl border border-slate-200 dark:border-neutral-800 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop"
                alt="AI Computer Vision Robot"
                className="w-full h-44 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="p-3 bg-white dark:bg-neutral-900">
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">Deteksi Korban & Objek Berbasis AI Computer Vision</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl border border-slate-200 dark:border-neutral-800 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop"
                alt="Wahana Robot Terbang KRTI"
                className="w-full h-44 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="p-3 bg-white dark:bg-neutral-900">
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">Uji Terbang Wahana Autonomous Drone VTOL</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024 - Sekarang",
      content: (
        <div className="space-y-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 mb-3">
              <Trophy size={13} /> Puncak Kejayaan & Kejuaraan Nasional
            </span>
            <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              Menorehkan Juara Nasional & Inovasi Industri Robotika
            </h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed mt-2">
              Tahun bersejarah bagi Politeknik Negeri Indramayu. Tim Robotika RPI berhasil menyabet <strong>Juara 1 Tingkat Nasional Kontes Robot SAR Indonesia (KRSRI)</strong> dan penghargaan <strong>Best Engineering Design</strong>. Selain kompetisi, RPI kini aktif mengembangkan riset otomasi manufaktur dan IoT industri bersama mitra strategis.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 p-3 rounded-lg border border-emerald-200 dark:border-emerald-800">
              <Trophy size={18} className="text-emerald-600 shrink-0" />
              <span>Juara 1 Nasional KRSRI Kategori Robot SAR</span>
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 p-3 rounded-lg border border-emerald-200 dark:border-emerald-800">
              <Trophy size={18} className="text-emerald-600 shrink-0" />
              <span>Penghargaan Juara Desain & Manufaktur Terbaik</span>
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-neutral-900 p-3 rounded-lg border border-slate-200/80 dark:border-neutral-800">
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
              <span>Kemitraan Riset Otomasi Bersama Industri</span>
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-neutral-900 p-3 rounded-lg border border-slate-200/80 dark:border-neutral-800">
              <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
              <span>Kaderisasi & 100+ Alumni Berkarir di Tech & Otomasi</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="group overflow-hidden rounded-2xl border border-slate-200 dark:border-neutral-800 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop"
                alt="Robot Humanoid & SAR RPI Juara"
                className="w-full h-44 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="p-3 bg-white dark:bg-neutral-900">
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">Robot Juara Nasional KRI dengan Sistem Navigasi AI</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-2xl border border-slate-200 dark:border-neutral-800 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=600&h=400&fit=crop"
                alt="Tim Robotika RPI Merayakan Kemenangan"
                className="w-full h-44 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="p-3 bg-white dark:bg-neutral-900">
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">Perayaan Podium & Trofi Kejuaraan Nasional</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen bg-[#f6f5ef] bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] font-sans text-slate-900 selection:bg-blue-600 selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-1 w-full">
        {/* Top Header Hero */}
        <section className="w-full pt-16 pb-12 px-6 md:px-12 lg:px-20 border-b border-slate-200/80 bg-white/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <a 
              href="#home" 
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors mb-8 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Kembali ke Beranda
            </a>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="max-w-3xl">
                <p className="text-xs md:text-sm font-bold tracking-widest text-blue-600 uppercase mb-3 select-none">
                  [TENTANG KAMI • UKM ROBOTIKA RPI]
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
                  Menempa Inovasi, Mengukir Prestasi Robotika Nasional.
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-6">
                  UKM Robotika Politeknik Negeri Indramayu (RPI) adalah wadah riset teknologi, rekayasa perangkat keras, kecerdasan buatan, dan wahana otonom bagi mahasiswa untuk mengasah keahlian serta bersaing di panggung kejuaraan robotika tertinggi Indonesia.
                </p>
              </div>

              {/* Quick Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4 w-full lg:w-auto shrink-0">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-sm text-center">
                  <p className="text-3xl font-black text-blue-600">2018</p>
                  <p className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">Tahun Berdiri</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-sm text-center">
                  <p className="text-3xl font-black text-amber-500">15+</p>
                  <p className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">Trofi Juara</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-sm text-center">
                  <p className="text-3xl font-black text-purple-600">50+</p>
                  <p className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">Robot Dirancang</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-sm text-center">
                  <p className="text-3xl font-black text-emerald-600">3</p>
                  <p className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">Divisi Utama</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 1. TIMELINE SECTION (RPI Berdiri sampai Juara) */}
        <section id="timeline" className="w-full bg-white border-b border-slate-200/80">
          <Timeline 
            data={timelineData}
            title="Linimasa Perjalanan RPI"
            description="Rekam jejak perjuangan UKM Robotika Politeknik Negeri Indramayu dari awal berdirinya komunitas hingga menembus panggung juara nasional."
          />
        </section>

        {/* 2. VISI DAN MISI SECTION (Diletakkan Tepat di Bawah Timeline) */}
        <section id="visi-misi" className="w-full py-20 px-6 md:px-12 lg:px-20 border-b border-slate-200/80 bg-transparent">
          <div className="max-w-7xl mx-auto space-y-16">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200 mb-4">
                <Target size={14} /> Landasan & Tujuan Organisasi
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                Visi & Misi UKM Robotika RPI
              </h2>
              <p className="text-slate-600 text-base md:text-lg mt-4 leading-relaxed">
                Komitmen kami dalam membentuk generasi engineer robotika unggul, inovatif, dan berdaya saing global untuk kemajuan teknologi bangsa.
              </p>
            </div>

            {/* VISI CARD (Matching Home Page Style) */}
            <div className="relative overflow-hidden rounded-3xl bg-white text-slate-900 p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow border border-slate-200/90">
              {/* Subtle blue accent background top bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600" />
              
              <div className="relative z-10 flex flex-col lg:flex-row gap-6 lg:gap-10 items-start lg:items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0 shadow-xs">
                  <Compass size={36} className="text-blue-600" />
                </div>
                
                <div className="space-y-3 flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/60">
                    VISI UTAMA
                  </div>
                  <blockquote className="text-xl sm:text-2xl lg:text-3xl font-black leading-snug tracking-tight text-slate-900">
                    &ldquo;Menjadikan RPI sebagai pusat pengembangan inovasi dan riset robotika yang kompetitif, unggul, inklusif, serta kolaborasi, dengan eksistensi digital yang profesional.&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>

            {/* MISI GRID (3 Cards) */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-6 w-1.5 bg-blue-600 rounded-full" />
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  Misi Strategis Organisasi
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ perspective: "1000px" }}>
                
                {/* Misi 1 */}
                <AnimatedJobCard
                  variant="blue"
                  className="w-full max-w-none min-h-[340px]"
                >
                  <div className="flex flex-col justify-between h-full space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-lg border border-blue-100 shadow-xs">
                          <Cpu size={24} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 bg-blue-50 text-blue-700 rounded-lg border border-blue-200/60">
                          Pilar 01
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">
                        1. Riset & Inovasi Kompetitif
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        Mengembangkan riset teknologi otomasi, kecerdasan buatan (AI), dan robotika terapan yang inovatif, unggul, serta berdaya saing tinggi di tingkat kompetisi nasional dan global.
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                          AI & Otomasi
                        </span>
                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                          KRI Nasional
                        </span>
                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                          Riset Terapan
                        </span>
                      </div>
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        <span>Inovasi & Prestasi</span>
                        <span className="text-blue-600 font-bold">Fokus #1</span>
                      </div>
                    </div>
                  </div>
                </AnimatedJobCard>

                {/* Misi 2 */}
                <AnimatedJobCard
                  variant="yellow"
                  className="w-full max-w-none min-h-[340px]"
                >
                  <div className="flex flex-col justify-between h-full space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-black text-lg border border-amber-100 shadow-xs">
                          <Users size={24} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 bg-amber-50 text-amber-700 rounded-lg border border-amber-200/60">
                          Pilar 02
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">
                        2. Ekosistem Inklusif & Kolaboratif
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        Menciptakan iklim kaderisasi dan pembinaan yang inklusif, terbuka bagi seluruh minat mahasiswa, serta membangun kemitraan strategis lintas disiplin ilmu, institusi, dan industri.
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                          Kaderisasi Terbuka
                        </span>
                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                          Kolaborasi Industri
                        </span>
                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                          Sinergi Tim
                        </span>
                      </div>
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        <span>Inklusivitas & Sinergi</span>
                        <span className="text-amber-600 font-bold">Fokus #2</span>
                      </div>
                    </div>
                  </div>
                </AnimatedJobCard>

                {/* Misi 3 */}
                <AnimatedJobCard
                  variant="purple"
                  className="w-full max-w-none min-h-[340px]"
                >
                  <div className="flex flex-col justify-between h-full space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-black text-lg border border-purple-100 shadow-xs">
                          <Lightbulb size={24} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 bg-purple-50 text-purple-700 rounded-lg border border-purple-200/60">
                          Pilar 03
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">
                        3. Eksistensi Digital & Profesionalitas
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        Membangun kehadiran media digital yang profesional, transparan, dan informatif untuk mendiseminasikan hasil riset, karya robotika, serta memperluas dampak positif bagi masyarakat.
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                          Digital Branding
                        </span>
                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                          Publikasi Terpadu
                        </span>
                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                          Tata Kelola
                        </span>
                      </div>
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        <span>Digital Branding</span>
                        <span className="text-purple-600 font-bold">Fokus #3</span>
                      </div>
                    </div>
                  </div>
                </AnimatedJobCard>

              </div>
            </div>

          </div>
        </section>

        {/* End of Main Content */}
      </main>

      <Footer />
    </div>
  )
}
