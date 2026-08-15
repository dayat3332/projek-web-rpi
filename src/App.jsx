import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import DivisionSection from './components/DivisionSection'
import AchievementsSection from './components/AchievementsSection'
import Footer from './components/Footer'

export default function App() {
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
