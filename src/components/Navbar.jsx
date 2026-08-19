import { useState, useEffect } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [divisionOpen, setDivisionOpen] = useState(false)
  const [currentHash, setCurrentHash] = useState(() => window.location.hash || '#home')

  useEffect(() => {
    const handleHash = () => setCurrentHash(window.location.hash || '#home')
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const divisions = [
    { name: 'Divisi Kontes', slug: 'kontes', desc: 'Fokus pada perlombaan KRI & kompetisi robotika nasional' },
    { name: 'Divisi Riset', slug: 'riset', desc: 'Pengembangan teknologi otomasi, AI, & IoT terbaru' },
    { name: 'Divisi Pengurus', slug: 'pengurus', desc: 'Manajemen organisasi, humas, & operasional UKM' }
  ]

  const isHome = currentHash === '#home' || currentHash === '' || currentHash === '#/'
  const isAbout = currentHash === '#/about' || currentHash === '#about'
  const isBlog = currentHash.startsWith('#/blog')
  const isContact = currentHash === '#/contact'
  const isAchievements = currentHash === '#/achievements'

  return (
    <nav className="sticky top-0 z-50 w-full px-6 md:px-12 lg:px-20 py-5 flex items-center justify-between bg-white/90 backdrop-blur-md border-b border-slate-100/80 transition-all duration-200 shadow-sm">
      {/* Logo (Left) */}
      <a href="#home" id="nav-logo" className="text-2xl font-black text-slate-900 tracking-tight select-none flex items-center gap-1.5">
        <span className="w-3 h-3 rounded-full bg-blue-600 inline-block animate-pulse"></span>
        RPI.
      </a>

      {/* Desktop Links (Center) */}
      <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
        <li>
          <a 
            href="#home" 
            id="nav-home" 
            className={`transition-colors duration-200 ${isHome ? 'text-blue-600 font-bold' : 'text-slate-700 hover:text-blue-600'}`}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#/about" 
            id="nav-about" 
            className={`transition-colors duration-200 ${isAbout ? 'text-blue-600 font-bold' : 'text-slate-700 hover:text-blue-600'}`}
          >
            About
          </a>
        </li>
        
        {/* Division Dropdown */}
        <li
          className="relative"
          onMouseEnter={() => setDivisionOpen(true)}
          onMouseLeave={() => setDivisionOpen(false)}
        >
          <button
            id="nav-division"
            className="text-slate-700 hover:text-blue-600 transition-colors duration-200 flex items-center gap-1 text-sm font-medium cursor-pointer py-1"
          >
            Division
            <ChevronDown size={14} className={`transition-transform duration-200 ${divisionOpen ? 'rotate-180 text-blue-600' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {divisionOpen && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 animate-in fade-in duration-150">
              <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 min-w-[240px]">
                {divisions.map((div) => (
                  <a
                    key={div.name}
                    href={`#/division/${div.slug}`}
                    onClick={() => setDivisionOpen(false)}
                    className="block p-3 rounded-lg hover:bg-blue-50 transition-colors duration-150 group"
                  >
                    <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-600">
                      {div.name}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {div.desc}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          )}
        </li>

        <li>
          <a 
            href="#/achievements" 
            id="nav-achievements" 
            className={`transition-colors duration-200 ${isAchievements ? 'text-blue-600 font-bold' : 'text-slate-700 hover:text-blue-600'}`}
          >
            Achievements
          </a>
        </li>
        <li>
          <a 
            href="#/blog" 
            id="nav-blog" 
            className={`transition-colors duration-200 ${isBlog ? 'text-blue-600 font-bold' : 'text-slate-700 hover:text-blue-600'}`}
          >
            Blog
          </a>
        </li>
        <li>
          <a 
            href="#/contact" 
            id="nav-contact" 
            className={`transition-colors duration-200 ${isContact ? 'text-blue-600 font-bold' : 'text-slate-700 hover:text-blue-600'}`}
          >
            Contact Us
          </a>
        </li>
      </ul>

      {/* Desktop Actions (Right) */}
      <div className="hidden md:flex items-center gap-4">
        <a
          href="#/contact"
          id="nav-cta"
          className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20"
        >
          Gabung Sekarang
        </a>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        id="nav-mobile-toggle"
        className="md:hidden text-slate-700 p-1 hover:text-blue-600 focus:outline-none"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation menu"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 md:hidden z-50 animate-in fade-in">
          <div className="flex flex-col p-6 gap-4">
            <a
              href="#home"
              onClick={() => setMobileOpen(false)}
              className={`text-sm ${isHome ? 'text-blue-600 font-bold' : 'text-slate-700 font-medium'}`}
            >
              Home
            </a>
            <a
              href="#/about"
              onClick={() => setMobileOpen(false)}
              className={`text-sm ${isAbout ? 'text-blue-600 font-bold' : 'text-slate-700 font-medium'}`}
            >
              About
            </a>
            
            <div className="pl-0">
              <p className="text-slate-800 font-semibold text-sm">Division</p>
              <div className="pl-3 flex flex-col gap-2 mt-2 border-l-2 border-blue-100">
                {divisions.map((div) => (
                  <a
                    key={div.name}
                    href={`#/division/${div.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="text-slate-600 text-sm hover:text-blue-600"
                  >
                    {div.name}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="#/achievements"
              onClick={() => setMobileOpen(false)}
              className={`text-sm ${isAchievements ? 'text-blue-600 font-bold' : 'text-slate-700 font-medium hover:text-blue-600'}`}
            >
              Achievements
            </a>
            <a
              href="#/blog"
              onClick={() => setMobileOpen(false)}
              className={`text-sm ${isBlog ? 'text-blue-600 font-bold' : 'text-slate-700 font-medium hover:text-blue-600'}`}
            >
              Blog
            </a>
            <a
              href="#/contact"
              onClick={() => setMobileOpen(false)}
              className={`text-sm ${isContact ? 'text-blue-600 font-bold' : 'text-slate-700 font-medium hover:text-blue-600'}`}
            >
              Contact Us
            </a>

            <hr className="border-slate-100" />
            <a
              href="#/contact"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold text-white bg-blue-600 px-5 py-2.5 rounded-lg text-center shadow-md"
            >
              Gabung Sekarang
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
