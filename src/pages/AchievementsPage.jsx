import { useEffect } from 'react'
import { ArrowRight, Trophy, Star, Flame, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import FUIBentoGridDark from '../components/ui/bento'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Unsplash images for each bento card — robotics & tech themed
const IMAGES = {
  robot: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200',
  abstract: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200',
  globe: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
  circuit: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
  ai: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
}

const bentoCards = [
  {
    eyebrow: 'Insight',
    title: 'Juara Umum KRI Regional',
    description:
      'Tim kontes RPI berhasil meraih juara umum pada Kontes Robot Indonesia tingkat regional dengan performa robot SAR dan KRSBI yang unggul dalam seluruh kategori penilaian juri.',
    graphic: (
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.robot})` }}
      />
    ),
    className: 'max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl',
  },
  {
    eyebrow: 'Analysis',
    title: 'Navigasi Otonom & Computer Vision',
    description:
      'Pengembangan sistem navigasi otonom menggunakan LiDAR, ROS2, dan model deteksi YOLOv8 nano pada embedded NVIDIA Jetson untuk klasifikasi target real-time di arena kontes.',
    graphic: (
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.abstract})` }}
      />
    ),
    className: 'lg:col-span-3 lg:rounded-tr-4xl',
  },
  {
    eyebrow: 'Speed',
    title: 'Skala Kompetisi Nasional',
    description:
      'Konsistensi keikutsertaan dan pencapaian di 12+ kompetisi robotika nasional dan internasional setiap tahunnya sejak 2019.',
    graphic: (
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.globe})` }}
      />
    ),
    className: 'lg:col-span-2 lg:rounded-bl-4xl',
  },
  {
    eyebrow: 'Source',
    title: 'Riset & Publikasi Teknologi',
    description:
      'Menghasilkan 8+ paper riset dan prototipe inovatif di bidang computer vision, embedded systems, dan otomasi industri.',
    graphic: (
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.circuit})` }}
      />
    ),
    className: 'lg:col-span-2',
  },
  {
    eyebrow: 'Limitless',
    title: 'Integrasi AI & Edge Computing',
    description:
      'Penerapan model deep learning pada perangkat edge computing untuk deteksi objek real-time pada robot kontes dengan akurasi melebihi 95%.',
    graphic: (
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.ai})` }}
      />
    ),
    className: 'max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl',
  },
]

export default function AchievementsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div className="min-h-screen bg-[#f6f5ef] bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] font-sans text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Bento Grid Section */}
        <section className="pt-12 md:pt-20 pb-16 md:pb-24 px-4 md:px-8 lg:px-16">
          <FUIBentoGridDark
            title="Achievements"
            subtitle="Prestasi, inovasi, dan pencapaian teknologi UKM Robotika RPI di kancah nasional."
            cards={bentoCards}
          />
        </section>

        {/* Stats Banner */}
        <section className="bg-transparent py-16 md:py-20 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { value: '25+', label: 'Penghargaan Nasional', icon: Trophy },
                { value: '12+', label: 'Kompetisi Per Tahun', icon: Target },
                { value: '8+', label: 'Paper Riset Publikasi', icon: Star },
                { value: '50+', label: 'Anggota Aktif Tim', icon: Flame },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  className="text-center md:text-left"
                >
                  <stat.icon className="w-6 h-6 text-blue-600 mx-auto md:mx-0 mb-3" />
                  <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-sm text-slate-500 mt-1 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 py-14 px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                Ingin Menjadi Bagian dari Tim?
              </h3>
              <p className="text-sm text-slate-300 mt-2 max-w-lg leading-relaxed">
                Bergabunglah dengan UKM Robotika RPI dan jadilah bagian dari
                perjalanan inovasi teknologi robotika Indonesia.
              </p>
            </div>
            <a
              href="#/contact"
              className="whitespace-nowrap px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg hover:shadow-blue-500/30 flex items-center gap-2"
            >
              Hubungi Kami <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
