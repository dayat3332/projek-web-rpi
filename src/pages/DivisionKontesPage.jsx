import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ArrowLeft, Trophy, Users, Shield, Sparkles } from 'lucide-react'

// 8 Sub-Divisi Kontes Robotika RPI
// Masing-masing divisi memiliki judul berbeda, deskripsi berbeda, ketua berbeda, dan anggota berbeda.
// Semua kartu memakai satu file avatar (/avatar-member.svg) agar mudah diganti sekaligus.
const contestDivisions = [
  {
    id: 'krsri',
    code: 'KRSRI',
    title: 'Divisi KRSRI (Robot SAR Indonesia)',
    badge: 'SAR & Tanggap Bencana',
    description: 'Fokus pada riset robot berkaki otonom pemadam api, pendeteksi korban simulasi bencana, dan navigasi lorong labirin dinamis.',
    leader: {
      id: 'krsri-leader',
      name: 'Ahmad Fauzan',
      role: 'Ketua Tim Divisi KRSRI',
      avatar: '/avatar-member.svg',
    },
    members: [
      {
        id: 'krsri-1',
        name: 'Rian Hidayat',
        role: 'Programmer Navigasi SLAM & LiDAR',
        avatar: '/avatar-member.svg',
      },
      {
        id: 'krsri-2',
        name: 'Dimas Arya Pratama',
        role: 'Hardware & Thermal Sensor Specialist',
        avatar: '/avatar-member.svg',
      },
      {
        id: 'krsri-3',
        name: 'Bayu Saputra',
        role: 'Mechanical Hexapod Leg & Frame Designer',
        avatar: '/avatar-member.svg',
      },
    ],
  },
  {
    id: 'krai',
    code: 'KRAI',
    title: 'Divisi KRAI (Kontes Robot ABU Indonesia)',
    badge: 'ABU Robocon Rules',
    description: 'Pengembangan robot kolaborasi presisi tinggi dengan sistem pneumatic throwing mechanism dan transfer objek otomatis sesuai tema ABU Robocon.',
    leader: {
      id: 'krai-leader',
      name: 'Kevin Sanjaya',
      role: 'Ketua Tim Divisi KRAI',
      avatar: '/avatar-member.svg',
    },
    members: [
      {
        id: 'krai-1',
        name: 'Fajar Nugraha',
        role: 'Lead Strategi & Trajectory Programmer',
        avatar: '/avatar-member.svg',
      },
      {
        id: 'krai-2',
        name: 'Ilham Ramadhan',
        role: 'Pneumatics & High-Speed Actuators',
        avatar: '/avatar-member.svg',
      },
      {
        id: 'krai-3',
        name: 'Siti Nurhaliza',
        role: 'Power Distribution & High-Amp Driver',
        avatar: '/avatar-member.svg',
      },
    ],
  },
  {
    id: 'krsbi-humanoid',
    code: 'KRSBI Humanoid',
    title: 'Divisi KRSBI Humanoid (Robot Sepakbola)',
    badge: 'Bipedal AI Soccer',
    description: 'Robot humanoid berkaki dua yang berjalan secara stabil, mendeteksi bola berbasis computer vision, dan mengambil keputusan tanding mandiri.',
    leader: {
      id: 'krsbi-h-leader',
      name: 'Muhammad Farhan',
      role: 'Ketua Tim KRSBI Humanoid',
      avatar: '/avatar-member.svg',
    },
    members: [
      {
        id: 'krsbi-h-1',
        name: 'Naufal Pratama',
        role: 'Bipedal Gait & Inverse Kinematics',
        avatar: '/avatar-member.svg',
      },
      {
        id: 'krsbi-h-2',
        name: 'Reza Firmansyah',
        role: 'Computer Vision & Deep Ball Tracking',
        avatar: '/avatar-member.svg',
      },
      {
        id: 'krsbi-h-3',
        name: 'Dika Prasetya',
        role: 'Embedded Linux & Motion Generator',
        avatar: '/avatar-member.svg',
      },
    ],
  },
  {
    id: 'krsbi-beroda',
    code: 'KRSBI Beroda',
    title: 'Divisi KRSBI Beroda (Robot Beroda Otonom)',
    badge: 'Wheeled Omni Soccer',
    description: 'Robot sepakbola beroda omni-directional dengan kecepatan manuver tinggi, komunikasi koordinasi tim nirkabel, dan sistem kicking presisi.',
    leader: {
      id: 'krsbi-w-leader',
      name: 'Wildan Pratama',
      role: 'Ketua Tim KRSBI Beroda',
      avatar: '/avatar-member.svg',
    },
    members: [
      {
        id: 'krsbi-w-1',
        name: 'Gilang Ramadhan',
        role: 'Omni-wheel Kinematics & Chassis',
        avatar: '/avatar-member.svg',
      },
      {
        id: 'krsbi-w-2',
        name: 'Bagus Saputro',
        role: 'Wireless Multi-Robot Coordinator',
        avatar: '/avatar-member.svg',
      },
      {
        id: 'krsbi-w-3',
        name: 'Aldi Hendrawan',
        role: 'Magnetic Kicking & Dribbler Mechanism',
        avatar: '/avatar-member.svg',
      },
    ],
  },
  {
    id: 'krti',
    code: 'KRTI',
    title: 'Divisi KRTI (Robot Terbang & Drone VTOL)',
    badge: 'Autonomous UAV & VTOL',
    description: 'Rancang bangun wahana terbang tanpa awak (Fixed-Wing & VTOL) untuk misi autonomous mapping, waypoint navigation, dan payload drop.',
    leader: {
      id: 'krti-leader',
      name: 'Hendra Kusuma',
      role: 'Ketua Tim Divisi KRTI',
      avatar: '/avatar-member.svg',
    },
    members: [
      {
        id: 'krti-1',
        name: 'Alif Maulana',
        role: 'Aerodynamicist & Carbon Fiber Frame',
        avatar: '/avatar-member.svg',
      },
      {
        id: 'krti-2',
        name: 'Rizky Febrian',
        role: 'Autopilot Pixhawk & Telemetry Link',
        avatar: '/avatar-member.svg',
      },
      {
        id: 'krti-3',
        name: 'Danu Wijaya',
        role: 'Mission Planner & Computer Vision Payload',
        avatar: '/avatar-member.svg',
      },
    ],
  },
  {
    id: 'krtmi',
    code: 'KRTMI',
    title: 'Divisi KRTMI (Robot Tematik Indonesia)',
    badge: 'Industrial Automation Theme',
    description: 'Robot cerdas bertema khusus industri dan logistik pintar untuk sortasi barang, pick and place otomatis, dan navigasi rel industri.',
    leader: {
      id: 'krtmi-leader',
      name: 'Budi Santoso',
      role: 'Ketua Tim Divisi KRTMI',
      avatar: '/avatar-member.svg',
    },
    members: [
      {
        id: 'krtmi-1',
        name: 'Eko Prasetyo',
        role: 'Conveyor & Sorter Mechanism Designer',
        avatar: '/avatar-member.svg',
      },
      {
        id: 'krtmi-2',
        name: 'Taufik Ismail',
        role: 'PLC & Embedded Industrial Controller',
        avatar: '/avatar-member.svg',
      },
      {
        id: 'krtmi-3',
        name: 'Andi Firmansyah',
        role: 'Optical Inspection & Barcode Scanner',
        avatar: '/avatar-member.svg',
      },
    ],
  },
  {
    id: 'k-robi',
    code: 'K-ROBI',
    title: 'Divisi K-ROBI (Robot Bawah Air / ROV)',
    badge: 'Underwater Exploration',
    description: 'Wahana bawah air dengan lambung kedap air khusus, multi-thruster vector control, dan sensor sonar untuk navigasi kedalaman laut.',
    leader: {
      id: 'krobi-leader',
      name: 'Arya Yudha',
      role: 'Ketua Tim Divisi K-ROBI',
      avatar: '/avatar-member.svg',
    },
    members: [
      {
        id: 'krobi-1',
        name: 'Fauzi Rahman',
        role: 'Waterproof Hull & Ballast Balancer',
        avatar: '/avatar-member.svg',
      },
      {
        id: 'krobi-2',
        name: 'Indra Gunawan',
        role: 'Brushless Underwater Thruster Control',
        avatar: '/avatar-member.svg',
      },
      {
        id: 'krobi-3',
        name: 'Aditya Pratama',
        role: 'Sonar Depth Sensor & Tethered Link',
        avatar: '/avatar-member.svg',
      },
    ],
  },
  {
    id: 'line-follower',
    code: 'Line Follower',
    title: 'Divisi Line Follower & Fast Race',
    badge: 'High-Speed Tracking',
    description: 'Pengembangan mikrorobot penjejak garis berkecepatan ultra tinggi dengan algoritma PID adaptive dan sensor photodioda presisi.',
    leader: {
      id: 'lf-leader',
      name: 'Rahmat Hidayat',
      role: 'Ketua Tim Line Follower',
      avatar: '/avatar-member.svg',
    },
    members: [
      {
        id: 'lf-1',
        name: 'Gani Nugroho',
        role: 'High-Speed MOSFET Driver & Gearbox',
        avatar: '/avatar-member.svg',
      },
      {
        id: 'lf-2',
        name: 'Lukman Hakim',
        role: 'Photodiode Sensor Bar Calibration',
        avatar: '/avatar-member.svg',
      },
      {
        id: 'lf-3',
        name: 'Desta Kurnia',
        role: 'Low Center-of-Gravity Chassis Tuning',
        avatar: '/avatar-member.svg',
      },
    ],
  },
]

export default function DivisionKontesPage() {
  const [activeTab, setActiveTab] = useState('all')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filteredDivisions = activeTab === 'all' 
    ? contestDivisions 
    : contestDivisions.filter(d => d.id === activeTab)

  return (
    <div className="min-h-screen bg-[#f6f5ef] bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] font-sans text-slate-900 selection:bg-blue-600 selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-1 w-full">
        {/* Header Hero Section */}
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
              [DIVISI TEKNIS ROBOTIKA]
            </p>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shadow-xs">
                <Trophy size={28} />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                  Divisi Kontes
                </h1>
                <p className="text-sm text-slate-500 font-medium mt-1">
                  8 Sub-Divisi Perlombaan Kontes Robot Indonesia (KRI) & Kejuaraan Nasional
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mt-4">
              UKM Robotika RPI memiliki 8 sub-divisi kontes yang masing-masing dipimpin oleh ketua tim spesialis dan didukung anggota berkeahlian mekanik, hardware, serta software.
            </p>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="w-full pt-10 pb-4 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-200/80 pb-6">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              Semua 8 Divisi Kontes
            </button>
            {contestDivisions.map((div) => (
              <button
                key={div.id}
                onClick={() => setActiveTab(div.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === div.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {div.code}
              </button>
            ))}
          </div>
        </section>

        {/* Divisions Content Block */}
        <section className="w-full py-8 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto space-y-16">
          {filteredDivisions.map((division, idx) => {
            const allMembers = [division.leader, ...division.members]

            return (
              <div 
                key={division.id} 
                className="bg-white/40 backdrop-blur-xs rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-sm space-y-8"
              >
                {/* Division Title & Description */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200/70 pb-6">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100/80 text-blue-800 border border-blue-200/60 mb-2">
                      <Sparkles size={12} className="text-blue-600" />
                      {division.badge}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {idx + 1}. {division.title}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-2 max-w-4xl">
                      {division.description}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span className="text-xs font-bold px-3.5 py-1.5 bg-blue-50 text-blue-700 rounded-lg border border-blue-200">
                      {allMembers.length} Personel Tim
                    </span>
                  </div>
                </div>

                {/* Team Members Grid (Exact format from user screenshot) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {allMembers.map((person, pIdx) => {
                    const isLeader = pIdx === 0

                    return (
                      <div
                        key={person.id}
                        className={`bg-white rounded-2xl p-4 border transition-all duration-200 flex flex-col group ${
                          isLeader 
                            ? 'border-blue-300 shadow-md ring-1 ring-blue-400/20' 
                            : 'border-slate-200/90 shadow-2xs hover:shadow-md'
                        }`}
                      >
                        {/* Image Box */}
                        <div className="w-full h-56 bg-[#f4f5f7] rounded-xl flex items-center justify-center p-4 relative overflow-hidden mb-3 group-hover:bg-[#ebedf0] transition-colors">
                          <img
                            src={person.avatar}
                            alt={person.name}
                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                          {isLeader && (
                            <div className="absolute top-2.5 right-2.5">
                              <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-blue-600 text-white rounded-md shadow-xs">
                                Ketua
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Info Text: Subtitle / Role above, Bold Name below */}
                        <div className="px-1 pt-1 pb-1">
                          <p className="text-xs text-slate-500 font-normal leading-relaxed line-clamp-2">
                            {person.role}
                          </p>
                          <h3 className="text-sm md:text-base font-bold text-slate-900 mt-1 tracking-tight">
                            {person.name}
                          </h3>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </section>
      </main>

      <Footer />
    </div>
  )
}
