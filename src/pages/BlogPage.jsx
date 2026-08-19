import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2, Sparkles, BookOpen, Tag, CheckCircle2, ChevronRight, MessageSquare } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { TracingBeam } from '../components/ui/tracing-beam'
import MagicText from '../components/ui/magic-text'

// Isometric Cube SVG Component matching the exact design in the user screenshot
function IsometricCubeIcon({ className = "w-24 h-24" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top Face with vertical hatching */}
      <path d="M50 15 L80 32 L50 49 L20 32 Z" fill="#0f172a" />
      <g stroke="#ffffff" strokeWidth="1.5" opacity="0.9">
        <line x1="28" y1="27.5" x2="58" y2="44.5" />
        <line x1="36" y1="23" x2="66" y2="40" />
        <line x1="44" y1="18.5" x2="74" y2="35.5" />
      </g>
      
      {/* Left Face with vertical lines */}
      <path d="M20 32 L50 49 L50 85 L20 68 Z" fill="#1e293b" />
      <g stroke="#ffffff" strokeWidth="1.5" opacity="0.8">
        <line x1="26" y1="36" x2="26" y2="72" />
        <line x1="32" y1="39.5" x2="32" y2="75.5" />
        <line x1="38" y1="43" x2="38" y2="79" />
        <line x1="44" y1="46" x2="44" y2="82" />
      </g>

      {/* Right Face solid */}
      <path d="M50 49 L80 32 L80 68 L50 85 Z" fill="#020617" />
      <g stroke="#ffffff" strokeWidth="1.5" opacity="0.3">
        <line x1="50" y1="49" x2="80" y2="32" />
        <line x1="50" y1="85" x2="80" y2="68" />
      </g>
    </svg>
  )
}

// Blog Posts Data
export const blogPosts = [
  {
    id: "getting-started-with-shadcn-ui-components",
    slug: "getting-started-with-shadcn-ui-components",
    title: "Getting Started with shadcn/ui Components",
    category: "UI Development",
    date: "14 Agu 2026",
    readTime: "5 min read",
    author: "Divisi Software RPI",
    badge: "Tech Article",
    excerpt: "Panduan lengkap instalasi, arsitektur headless components, serta integrasi Tailwind CSS untuk antarmuka web modern dashboard robotika.",
    timeline: [
      {
        title: "Konsep Dasar & Filosofi Headless UI",
        badge: "Fundamen",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
        content: (
          <div className="space-y-4">
            <p>
              Komponen headless shadcn/ui memberikan kebebasan kustomisasi 100% tanpa batasan styling bawaan. Pada sistem dashboard robotika UKM RPI, pendekatan ini memudahkan tim untuk memadukan telemetry stream dengan visualisasi yang responsif dan berbobot ringan.
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm mb-1">Keunggulan Utama:</h4>
              <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
                <li>Aksesibilitas bawaan sesuai standar ARIA W3C</li>
                <li>Mudah diintegrasikan dengan Tailwind CSS dan Motion</li>
                <li>Kode sumber langsung berada di dalam codebase proyek</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        title: "Integrasi Komponen Interaktif pada Web Robotika",
        badge: "Implementasi",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop",
        content: (
          <div className="space-y-4">
            <p>
              Dengan menambahkan animasi micro-interaction berbasis Framer Motion, monitoring telemetri robot secara real-time dapat divisualisasikan dengan transisi data yang sangat halus bagi operator lomba.
            </p>
          </div>
        ),
      }
    ]
  },
  {
    id: "building-accessible-web-applications",
    slug: "building-accessible-web-applications",
    title: "Building Accessible Web Applications",
    category: "Accessibility",
    date: "10 Agu 2026",
    readTime: "7 min read",
    author: "Divisi UI/UX RPI",
    badge: "Best Practice",
    excerpt: "Praktik terbaik dalam merancang antarmuka ramah aksesibilitas WCAG, kontras warna yang tepat, dan navigasi keyboard yang presisi.",
    timeline: [
      {
        title: "Standar WCAG 2.1 dalam Sistem Digital",
        badge: "Standar",
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=500&fit=crop",
        content: (
          <div className="space-y-4">
            <p>
              Membangun aplikasi web dengan standar aksesibilitas memastikan platform dokumentasi riset dan pendaftaran lomba UKM Robotika RPI dapat diakses secara merata dan inklusif oleh seluruh sivitas akademika.
            </p>
          </div>
        ),
      }
    ]
  },
  {
    id: "modern-styling-techniques-css-grid",
    slug: "modern-styling-techniques-css-grid",
    title: "Modern Styling Techniques with CSS Grid",
    category: "Design System",
    date: "06 Agu 2026",
    readTime: "4 min read",
    author: "Divisi Kontes & Riset RPI",
    badge: "Design Guide",
    excerpt: "Mengeksplorasi teknik CSS Grid tingkat lanjut untuk menciptakan tata letak bento-box interaktif dan responsif pada berbagai ukuran layar perangkat.",
    timeline: [
      {
        title: "Kekuatan Bento Grid dalam Penyajian Data",
        badge: "Layouting",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=500&fit=crop",
        content: (
          <div className="space-y-4">
            <p>
              CSS Grid memungkinkan pembagian zona kartu bento secara dinamis, sehingga spesifikasi teknis robot SAR dan statistik kejuaraan dapat dipindai dengan cepat oleh pengunjung website.
            </p>
          </div>
        ),
      }
    ]
  },
  {
    id: "computer-vision-object-detection",
    slug: "computer-vision-object-detection",
    title: "Integrasi Computer Vision untuk Deteksi Target & Rintangan",
    category: "Robotics",
    date: "01 Agu 2026",
    readTime: "8 min read",
    author: "Divisi Riset RPI",
    badge: "Riset Terapan",
    excerpt: "Implementasi model deep learning YOLOv8 pada sistem kamera robot otonom untuk mendeteksi korban simulasi dan rintangan arena KRI secara real-time.",
    timeline: [
      {
        title: "Optimasi Inferensi Model pada Edge Device",
        badge: "Edge AI",
        image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=500&fit=crop",
        content: (
          <div className="space-y-4">
            <p>
              Dengan konversi model ke format TensorRT pada mikroprosesor Jetson Nano, robot mampu memproses feed kamera hingga 45 FPS dengan latensi di bawah 20ms untuk manuver manuver presisi.
            </p>
          </div>
        ),
      }
    ]
  },
  {
    id: "hardware-pcb-design-principles",
    slug: "hardware-pcb-design-principles",
    title: "Prinsip Perancangan PCB Multi-Layer Motor Driver Robot",
    category: "Hardware",
    date: "25 Jul 2026",
    readTime: "6 min read",
    author: "Divisi Mekanikal & Hardware RPI",
    badge: "Hardware Guide",
    excerpt: "Teknik routing impedansi terkontrol, isolasi ground bidang daya tinggi, dan proteksi transient pada modul PCB kontroler motor brushless robot kontes.",
    timeline: [
      {
        title: "Pemisahan Jalur Daya & Sinyal Kontrol",
        badge: "PCB Layout",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
        content: (
          <div className="space-y-4">
            <p>
              Desain PCB multi-layer dengan ground plane solid membantu meminimalisasi noise elektromagnetik (EMI) yang dapat mengganggu sinyal sensor sudut dan komunikasi CAN Bus pada robot.
            </p>
          </div>
        ),
      }
    ]
  },
  {
    id: "state-machine-robot-control-architecture",
    slug: "state-machine-robot-control-architecture",
    title: "Arsitektur Hierarchical State Machine pada Robot Otonom",
    category: "Robotics",
    date: "18 Jul 2026",
    readTime: "5 min read",
    author: "Divisi Software RPI",
    badge: "Sistem Kendali",
    excerpt: "Membangun sistem pengambilan keputusan robot berbasis Hierarchical State Machine (HSM) agar mampu merespons perubahan rintangan dinamis di arena tanding.",
    timeline: [
      {
        title: "Pengambilan Keputusan Cepat & Deterministik",
        badge: "Algorithm",
        image: "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=800&h=500&fit=crop",
        content: (
          <div className="space-y-4">
            <p>
              Penerapan HSM memastikan transisi aksi robot antar sub-tugas tanding berjalan aman, deterministik, dan dapat diprediksi secara akurat selama durasi pertandingan.
            </p>
          </div>
        ),
      }
    ]
  }
]

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null)
  const [activeCategory, setActiveCategory] = useState("All")

  useEffect(() => {
    const syncPostFromHash = () => {
      const hash = window.location.hash
      if (hash.startsWith('#/blog/')) {
        const slug = hash.replace('#/blog/', '').trim()
        const found = blogPosts.find(p => p.slug === slug || p.id === slug)
        if (found) {
          setSelectedPost(found)
          window.scrollTo({ top: 0, behavior: 'smooth' })
          return
        }
      }
      if (hash === '#/blog' || hash === '#/blog/') {
        setSelectedPost(null)
      }
    }

    syncPostFromHash()
    window.addEventListener('hashchange', syncPostFromHash)
    return () => window.removeEventListener('hashchange', syncPostFromHash)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [selectedPost])

  const handleOpenPost = (post) => {
    setSelectedPost(post)
    window.location.hash = `#/blog/${post.slug || post.id}`
  }

  const handleBackToList = () => {
    setSelectedPost(null)
    window.location.hash = '#/blog'
  }

  const categories = ["All", "UI Development", "Accessibility", "Design System", "Robotics", "Hardware"]

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(p => p.category === activeCategory)

  // RENDER BLOG POST DETAIL VIEW WITH TRACING BEAM
  if (selectedPost) {
    return (
      <div className="min-h-screen bg-[#f6f5ef] bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] font-sans text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
        <Navbar />

        {/* Top Header & Breadcrumb */}
        <div className="bg-[#f6f5ef]/90 backdrop-blur-md border-b border-slate-200/80 py-5 px-6 md:px-12 lg:px-20 sticky top-[73px] z-40">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <button
              onClick={handleBackToList}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors bg-white px-4 py-2 rounded-xl border border-slate-200/90 shadow-2xs hover:shadow-xs cursor-pointer"
            >
              <ArrowLeft size={16} />
              Kembali ke Blog Posts
            </button>

            <div className="flex items-center gap-3">
              <span className="text-xs font-bold px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200/60">
                {selectedPost.category}
              </span>
              <button 
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href)
                  alert("Link artikel disalin ke clipboard!")
                }}
                className="p-2 text-slate-500 hover:text-blue-600 hover:bg-white rounded-xl transition-colors border border-transparent hover:border-slate-200 cursor-pointer"
                title="Bagikan artikel"
              >
                <Share2 size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Article Content with TracingBeam */}
        <main className="flex-1 py-12 px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            {/* Article Main Hero Header */}
            <div className="mb-12 max-w-3xl mx-auto text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-200/60 mb-4">
                <Sparkles size={12} className="text-blue-600" />
                {selectedPost.badge}
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                {selectedPost.title}
              </h1>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
                {selectedPost.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 pb-6 border-b border-slate-200/80">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-blue-600" />
                  {selectedPost.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-blue-600" />
                  {selectedPost.readTime}
                </span>
                <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                  Oleh: {selectedPost.author}
                </span>
              </div>
            </div>

            {/* Tracing Beam Timeline Container */}
            <div className="relative w-full">
              <TracingBeam className="px-4 md:px-6">
                <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                  {selectedPost.timeline?.map((item, index) => (
                    <div key={`section-${index}`} className="mb-14 group">
                      <div className="bg-slate-900 text-white rounded-full text-xs font-bold w-fit px-4 py-1.5 mb-4 shadow-sm inline-flex items-center gap-1.5">
                        <Tag size={12} className="text-blue-400" />
                        {item.badge}
                      </div>

                      <h2 className="text-xl md:text-2xl mb-4 font-bold text-slate-900 tracking-tight">
                        {item.title}
                      </h2>

                      {item.image && (
                        <div className="relative overflow-hidden rounded-2xl mb-6 shadow-sm border border-slate-200/80">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                      )}

                      <div className="text-slate-700 text-sm md:text-base leading-relaxed">
                        {item.content}
                      </div>
                    </div>
                  ))}

                  {/* Summary / Key Takeaways Box */}
                  <div className="p-6 md:p-8 bg-white rounded-2xl border border-slate-200/90 shadow-sm mb-12">
                    <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <CheckCircle2 size={20} className="text-blue-600" />
                      Ringkasan & Kesimpulan
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      Implementasi teknologi dan standar komponen yang terstruktur membantu akselerasi pembuatan modul perangkat lunak maupun sistem otomasi robotika UKM RPI secara efektif dan terukur.
                    </p>
                    <button
                      onClick={handleBackToList}
                      className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                    >
                      Jelajahi artikel lainnya di Blog RPI <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </TracingBeam>
            </div>

            {/* Related Posts Section */}
            <div className="mt-16 pt-12 border-t border-slate-200/80">
              <h3 className="text-2xl font-black text-slate-900 mb-8 text-center tracking-tight">
                Artikel Terkait Lainnya
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {blogPosts
                  .filter(p => p.id !== selectedPost.id)
                  .slice(0, 2)
                  .map(post => (
                    <div
                      key={post.id}
                      onClick={() => handleOpenPost(post)}
                      className="p-6 bg-white hover:bg-blue-50/40 rounded-2xl border border-slate-200/90 transition-all cursor-pointer group shadow-2xs hover:shadow-md"
                    >
                      <span className="text-[11px] font-bold px-2.5 py-1 bg-blue-50 text-blue-700 rounded-md border border-blue-200/60 mb-3 inline-block">
                        {post.category}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    )
  }

  // RENDER BLOG POST LIST VIEW (MATCHING HOME PAGE AESTHETIC & THE SCREENSHOT REFERENCE)
  return (
    <div className="min-h-screen bg-[#f6f5ef] bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] font-sans text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="flex-1 w-full">
        {/* Header Hero Section matching Home & Division Pages */}
        <section className="w-full py-16 px-6 md:px-12 lg:px-20 border-b border-slate-200/80 bg-white/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <a 
              href="#home" 
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors mb-6 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Kembali ke Beranda
            </a>

            <p className="text-xs md:text-sm font-bold tracking-widest text-blue-600 uppercase mb-3 select-none">
              [BLOG & WAWASAN TEKNOLOGI]
            </p>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shadow-xs">
                <BookOpen size={28} />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                  Blog Posts & Riset
                </h1>
                <p className="text-sm text-slate-500 font-medium mt-1">
                  Wawasan teknologi robotika, UI/UX, AI vision, dan sistem otomasi cerdas
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mt-4">
              Jelajahi artikel teknis, catatan riset, tutorial pemrograman, dan dokumentasi perkembangan modul robotika yang ditulis langsung oleh anggota UKM Robotika RPI.
            </p>
          </div>
        </section>

        {/* Category Filter Tabs */}
        <section className="w-full pt-10 pb-4 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-200/80 pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80"
                }`}
              >
                {cat === 'All' ? 'Semua Artikel' : cat}
              </button>
            ))}
          </div>
        </section>

        {/* Blog Cards Grid */}
        <section className="w-full py-8 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                {activeCategory === 'All' ? 'Artikel Terbaru' : `Kategori: ${activeCategory}`}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Menampilkan {filteredPosts.length} artikel terbitan
              </p>
            </div>
            <span className="text-xs font-bold px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200/60">
              {filteredPosts.length} Post
            </span>
          </div>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
                }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => handleOpenPost(post)}
                className="group flex flex-col bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 cursor-pointer"
              >
                {/* Card Top Thumbnail Box - Light Gray with Isometric Geometric Icon */}
                <div className="w-full h-52 bg-[#f4f5f7] flex items-center justify-center relative overflow-hidden group-hover:bg-[#ebedf0] transition-colors">
                  <div className="transition-transform duration-500 group-hover:scale-110">
                    <IsometricCubeIcon className="w-24 h-24 drop-shadow-xs" />
                  </div>
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-bold px-2.5 py-1 bg-white/95 backdrop-blur-xs text-blue-700 rounded-md border border-slate-200/80 shadow-2xs">
                      {post.category}
                    </span>
                  </div>

                  {/* Read Time Tag */}
                  <div className="absolute top-3 right-3">
                    <span className="text-[11px] font-medium px-2.5 py-1 bg-white/95 backdrop-blur-xs text-slate-600 rounded-md border border-slate-200/80 shadow-2xs">
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6 md:p-7 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    {/* Meta info */}
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-2.5">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} className="text-slate-400" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span>{post.author}</span>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight leading-snug mb-2.5 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed line-clamp-3 mb-6 font-normal">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Read More Action Link */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      Baca selengkapnya
                      <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      RPI Blog
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
