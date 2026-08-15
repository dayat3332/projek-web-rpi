import { Mail, Globe, Share2, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200 text-slate-800 pt-16 pb-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Grid: Info & Links (Left) + Direct Maps Frame (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-12 border-b border-slate-200/80">
          
          {/* Left Column (5 cols): Branding & Quick Links */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Logo */}
              <a href="#home" className="text-3xl font-black text-slate-900 tracking-tight select-none">
                RPI.
              </a>
              
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mt-4 max-w-md font-normal">
                Unit Kegiatan Mahasiswa Robotika Politeknik Negeri Indramayu. Wadah eksplorasi teknologi, riset otomasi, dan pengembangan robotika mahasiswa untuk berprestasi di kancah nasional.
              </p>

              {/* Contact / Social Action Icons */}
              <div className="flex items-center gap-3 mt-6">
                <a
                  href="mailto:robotika@polindra.ac.id"
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 flex items-center justify-center transition-colors duration-200"
                  aria-label="Email UKM Robotika"
                  title="robotika@polindra.ac.id"
                >
                  <Mail size={18} />
                </a>
                <a
                  href="https://polindra.ac.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 flex items-center justify-center transition-colors duration-200"
                  aria-label="Website Polindra"
                  title="Website Resmi Polindra"
                >
                  <Globe size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 flex items-center justify-center transition-colors duration-200"
                  aria-label="Social Media UKM Robotika"
                  title="Media Sosial UKM Robotika"
                >
                  <Share2 size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-100 text-sm font-medium">
              <div className="flex flex-col gap-2.5">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Navigasi</p>
                <a href="#home" className="text-slate-600 hover:text-blue-600 transition-colors">Home</a>
                <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About Us</a>
                <a href="#division" className="text-slate-600 hover:text-blue-600 transition-colors">Technical Division</a>
              </div>
              <div className="flex flex-col gap-2.5">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Informasi</p>
                <a href="#achievements" className="text-slate-600 hover:text-blue-600 transition-colors">Prestasi & Blog</a>
                <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">Partner Industri</a>
                <a href="#home" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1">
                  Gabung RPI <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Direct Google Maps Frame without Card Wrapper */}
          <div className="lg:col-span-7 w-full">
            <div className="w-full h-[300px] sm:h-[340px] rounded-3xl overflow-hidden border border-slate-200 shadow-sm relative bg-slate-100">
              <iframe
                title="Lokasi Politeknik Negeri Indramayu"
                src="https://maps.google.com/maps?q=Politeknik+Negeri+Indramayu&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} UKM Robotika Politeknik Negeri Indramayu (RPI). All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-medium text-slate-600">Politeknik Negeri Indramayu</span>
            <span>•</span>
            <span className="text-slate-400">Teknologi Otomasi & Robotika</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
