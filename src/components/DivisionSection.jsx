import { ArrowUpRight } from 'lucide-react'

export default function DivisionSection() {
  return (
    <section id="division" className="w-full py-20 px-8 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        {/* Tagline */}
        <p className="text-xs md:text-sm font-bold tracking-widest text-slate-500 uppercase mb-6 select-none">
          [TECHNICAL DIVISION]
        </p>

        {/* Header: Two-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-end mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight">
              The core pillars of our technological development.
            </h2>
          </div>
          <div>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Eksplorasi berbagai divisi teknis yang mendorong batas kemampuan dan inovasi mahasiswa di bidang robotika.
            </p>
          </div>
        </div>

        {/* Bento-box Style Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Large Card (Spanning 2 columns on the left) - Divisi KRSRI */}
          <div className="lg:col-span-2 min-h-[380px] lg:min-h-[440px] rounded-3xl relative overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-end p-8 md:p-10 cursor-pointer">
            {/* Background Image with Zoom on Hover */}
            <img
              src="/division_krsri.jpg"
              alt="Divisi KRSRI (Robot SAR Indonesia)"
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-300 group-hover:via-black/60 pointer-events-none" />

            {/* Content (Title, Description on Hover, Arrow Button) */}
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                  Divisi KRSRI (Robot SAR Indonesia)
                </h3>
                
                {/* Arrow Icon Button */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-105">
                  <ArrowUpRight size={22} />
                </div>
              </div>

              {/* Description (Smoothly appears on Hover) */}
              <div className="max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden mt-0 group-hover:mt-4">
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                  Fokus riset robot berkaki otonom dan navigasi cerdas untuk misi penyelamatan (Search and Rescue). Mengintegrasikan sensor LiDAR, thermal imaging, algoritma inverse kinematics, dan computer vision untuk medan terjal.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column Stack (Two smaller cards) */}
          <div className="flex flex-col gap-6">
            
            {/* Card 1: Divisi TTG */}
            <div className="min-h-[200px] lg:min-h-[208px] rounded-3xl relative overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-end p-7 cursor-pointer">
              {/* Background Image with Zoom on Hover */}
              <img
                src="/division_ttg.jpg"
                alt="Divisi TTG (Teknologi Tepat Guna)"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-300 group-hover:via-black/60 pointer-events-none" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    Divisi TTG (Teknologi Tepat Guna)
                  </h3>
                  
                  {/* Arrow Icon Button */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white group-hover:bg-orange-500 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-105">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Description on Hover */}
                <div className="max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden mt-0 group-hover:mt-3">
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                    Inovasi alat otomatisasi dan Internet of Things (IoT) yang langsung memecahkan masalah industri pertanian, manufaktur, dan masyarakat lokal.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Divisi VTOL */}
            <div className="min-h-[200px] lg:min-h-[208px] rounded-3xl relative overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-end p-7 cursor-pointer">
              {/* Background Image with Zoom on Hover */}
              <img
                src="/division_vtol.jpg"
                alt="Divisi VTOL (Robot Terbang)"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-300 group-hover:via-black/60 pointer-events-none" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    Divisi VTOL (Robot Terbang)
                  </h3>
                  
                  {/* Arrow Icon Button */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-105">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                {/* Description on Hover */}
                <div className="max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden mt-0 group-hover:mt-3">
                  <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                    Pengembangan wahana tanpa awak (UAV/Drone) dengan kapabilitas Vertical Take-Off and Landing untuk pemetaan udara dan logistik darurat.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
