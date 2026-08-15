import { ArrowRight } from 'lucide-react'
import LogoLoop from './LogoLoop'

export default function AboutSection() {
  const partnerLogos = [
    {
      name: 'PUMA',
      node: (
        <svg viewBox="0 0 120 40" className="h-7 w-auto">
          <text x="0" y="30" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="28" fill="currentColor" letterSpacing="-0.5">
            PUMA
          </text>
        </svg>
      ),
    },
    {
      name: 'VOGUE',
      node: (
        <svg viewBox="0 0 160 40" className="h-7 w-auto">
          <text x="0" y="32" fontFamily="Georgia, 'Times New Roman', serif" fontWeight="400" fontSize="30" fontStyle="normal" fill="currentColor" letterSpacing="3">
            VOGUE
          </text>
        </svg>
      ),
    },
    {
      name: 'CHANEL',
      node: (
        <svg viewBox="0 0 160 50" className="h-7 w-auto">
          <text x="30" y="15" fontFamily="Inter, sans-serif" fontWeight="300" fontSize="10" fill="currentColor" letterSpacing="4" textAnchor="start">
            CHANEL
          </text>
          <g transform="translate(55, 20)" stroke="currentColor" strokeWidth="2" fill="none">
            <circle cx="0" cy="10" r="10" />
            <circle cx="14" cy="10" r="10" />
          </g>
        </svg>
      ),
    },
    {
      name: 'SONY',
      node: (
        <svg viewBox="0 0 120 40" className="h-7 w-auto">
          <text x="0" y="30" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="26" fill="currentColor" letterSpacing="2">
            SONY
          </text>
        </svg>
      ),
    },
    {
      name: 'HONDA',
      node: (
        <svg viewBox="0 0 160 40" className="h-7 w-auto">
          <text x="0" y="30" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="24" fontStyle="italic" fill="currentColor" letterSpacing="0">
            HONDA
          </text>
        </svg>
      ),
    },
    {
      name: 'POLINDRA',
      node: (
        <span className="font-black text-xl tracking-tight text-slate-700">
          POLINDRA
        </span>
      ),
    },
    {
      name: 'KEMENDIKBUD',
      node: (
        <span className="font-bold text-lg tracking-wider text-slate-700">
          KEMENDIKBUDRISTEK
        </span>
      ),
    },
  ]

  return (
    <section id="about" className="w-full py-20 px-8 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        {/* Tagline */}
        <p className="text-xs md:text-sm font-bold tracking-widest text-slate-500 uppercase mb-6 select-none">
          [ABOUT RPI]
        </p>

        {/* Content: Two-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          
          {/* Left side: Huge bold text */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight">
              Membangun Masa Depan Teknologi.
            </h2>
          </div>

          {/* Right side: Paragraph text & Learn More link */}
          <div className="flex flex-col justify-between h-full pt-2">
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Perkembangan robotika di Indonesia menunjukkan masa depan yang menjanjikan. Sebagai bentuk dukungan, Politeknik Negeri Indramayu (RPI) menyediakan wadah bagi mahasiswanya melalui UKM Robotika RPI untuk berinovasi dan berkompetisi di tingkat nasional.
            </p>

            <div className="mt-8">
              <a
                href="#division"
                className="inline-flex items-center gap-2 font-bold text-slate-900 hover:text-blue-600 transition-colors duration-200 group text-base"
              >
                <span>Learn More</span>
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>

        {/* React Bits LogoLoop Animation (under About content) */}
        <div className="mt-16 pt-10 border-t border-slate-200/60">
          <LogoLoop
            logos={partnerLogos}
            speed={28}
            direction="left"
            pauseOnHover={true}
          />
        </div>

      </div>
    </section>
  )
}
