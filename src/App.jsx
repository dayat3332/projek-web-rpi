import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import DivisionSection from './components/DivisionSection'
import AchievementsSection from './components/AchievementsSection'
import Footer from './components/Footer'
import DivisionKontesPage from './pages/DivisionKontesPage'
import DivisionRisetPage from './pages/DivisionRisetPage'
import DivisionPengurusPage from './pages/DivisionPengurusPage'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import AchievementsPage from './pages/AchievementsPage'

function getPage() {
  const hash = window.location.hash
  if (hash === '#/about') return 'about'
  if (hash === '#/division/kontes') return 'kontes'
  if (hash === '#/division/riset') return 'riset'
  if (hash === '#/division/pengurus') return 'pengurus'
  if (hash.startsWith('#/blog')) return 'blog'
  if (hash === '#/contact' || hash === '#/contact-us') return 'contact'
  if (hash === '#/achievements') return 'achievements'
  return 'home'
}

export default function App() {
  const [page, setPage] = useState(getPage)

  useEffect(() => {
    const onHashChange = () => {
      setPage(getPage())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  if (page === 'about') return <AboutPage />
  if (page === 'kontes') return <DivisionKontesPage />
  if (page === 'riset') return <DivisionRisetPage />
  if (page === 'pengurus') return <DivisionPengurusPage />
  if (page === 'blog') return <BlogPage />
  if (page === 'contact') return <ContactPage />
  if (page === 'achievements') return <AchievementsPage />

  // Home page
  return (
    <div className="min-h-screen bg-[#f6f5ef] bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] font-sans text-slate-900 selection:bg-blue-600 selection:text-white flex flex-col">
      {/* 1. Navigation Bar */}
      <Navbar />

      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. About Us Section with React Bits LogoLoop */}
      <AboutSection />

      {/* 4. Technical Division Section (Bento-box grid) */}
      <DivisionSection />

      {/* 5. Achievements / What's New Section (Horizontal scroll carousel) */}
      <AchievementsSection />

      {/* 6. Footer */}
      <Footer />
    </div>
  )
}
