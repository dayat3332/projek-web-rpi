import YellowUnderline from './YellowUnderline'
import RobotViewer from './RobotViewer'

export default function HeroSection() {
  return (
    <section id="hero" className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-6 md:pt-12 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Left Column — Copywriting & CTAs */}
          <div className="order-2 md:order-1 flex flex-col justify-center">
            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold text-slate-900 leading-[1.15] tracking-tight">
              Inovasi
              <br />
              <span className="relative inline-block">
                Robotika
                <YellowUnderline />
              </span>
              <br />
              Tanpa Batas.
            </h1>

            {/* Sub-headline */}
            <p className="mt-6 text-base md:text-lg text-slate-500 leading-relaxed max-w-lg">
              Unit Kegiatan Mahasiswa Robotika Politeknik Negeri Indramayu (RPI). Wadah kolaborasi mahasiswa untuk merancang, membangun, dan mengukir prestasi di dunia teknologi otomasi.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href="#"
                id="cta-primary"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm md:text-base px-6 py-3.5 rounded-md transition-all duration-200 hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5 text-center"
              >
                Gabung Sekarang
              </a>
              <a
                href="#"
                id="cta-secondary"
                className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold text-sm md:text-base px-6 py-3.5 rounded-md transition-all duration-200 hover:-translate-y-0.5 text-center"
              >
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>

          {/* Right Column — 3D Spider Robot Viewer */}
          <div className="order-1 md:order-2 flex justify-center items-center">
            <RobotViewer />
          </div>

        </div>
      </div>
    </section>
  )
}
