import { Calendar, ChevronRight, ChevronLeft, ArrowUpRight } from 'lucide-react'
import { useRef } from 'react'

export default function AchievementsSection() {
  const scrollRef = useRef(null)

  // 4 items sharing the same photo background with arrow linking to blog
  const items = [
    {
      title: 'Juara 1 Kontes Robot SAR Indonesia (KRSRI) 2025',
      category: 'Prestasi Nasional',
      date: 'Oktober 2025',
      link: '#blog'
    },
    {
      title: 'Inovasi Autonomous Agricultural Robot untuk Smart Farming',
      category: 'Riset Terapan TTG',
      date: 'Desember 2025',
      link: '#blog'
    },
    {
      title: 'Finalis Kontes Robot Terbang Indonesia (KRTI) Divisi VTOL',
      category: 'Aeromodelling',
      date: 'Januari 2026',
      link: '#blog'
    },
    {
      title: 'Publikasi Riset Inverse Kinematics Spider Robot',
      category: 'Publikasi Ilmiah',
      date: 'Februari 2026',
      link: '#blog'
    },
  ]

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section id="achievements" className="w-full py-20 px-8 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        {/* Tagline & Carousel Navigation Buttons */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs md:text-sm font-bold tracking-widest text-slate-500 uppercase select-none">
            [WHAT'S NEW IN ROBOTICS]
          </p>

          {/* Navigation arrow buttons for scroll */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-slate-300 bg-white/80 hover:bg-[#0f172a] hover:text-white flex items-center justify-center transition-colors shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-slate-300 bg-white/80 hover:bg-[#0f172a] hover:text-white flex items-center justify-center transition-colors shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Header */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-10 max-w-2xl">
          Stay ahead with exclusive insights on robotics trends, research, and innovation.
        </h2>

        {/* Horizontal Scrolling Carousel Container */}
        <div
          ref={scrollRef}
          className="flex flex-row overflow-x-auto gap-6 pb-8 snap-x snap-mandatory no-scrollbar scroll-smooth"
        >
          {items.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="min-w-[300px] sm:min-w-[340px] md:min-w-[360px] h-[400px] rounded-2xl relative overflow-hidden group snap-center shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between p-7 text-white select-none cursor-pointer block"
            >
              {/* 1 Single Photo for All Cards with Smooth Zoom on Hover */}
              <img
                src="/division_krsri.jpg"
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Dark Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 group-hover:from-black/95 group-hover:via-black/50 transition-opacity duration-300 pointer-events-none"></div>

              {/* Card Top: Category badge & Arrow Icon Button pointing to Blog */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md border border-white/30 text-white">
                  {item.category}
                </span>

                {/* Arrow Icon Button directing to Blog */}
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:scale-110 transition-all duration-300 shadow-md">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {/* Card Bottom: Date & Event Title */}
              <div className="relative z-10 mt-auto">
                <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-2 font-medium">
                  <Calendar size={13} />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white leading-snug group-hover:text-blue-300 transition-colors duration-200">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
