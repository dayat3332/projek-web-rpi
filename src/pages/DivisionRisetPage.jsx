import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ArrowLeft, FlaskConical, Sparkles, Brain, Cpu, Wifi } from 'lucide-react'

// 3 Sub-Divisi Riset Robotika RPI
// Masing-masing divisi memiliki judul berbeda, deskripsi berbeda, ketua berbeda, dan anggota berbeda.
// Semua kartu memakai satu file avatar (/avatar-member.svg) agar mudah diganti sekaligus.
const researchDivisions = [
  {
    id: 'ai-vision',
    code: 'Computer Vision & AI',
    title: 'Divisi Riset Computer Vision & Deep Learning',
    badge: 'Artificial Intelligence & Vision',
    icon: Brain,
    description: 'Riset algoritma kecerdasan buatan untuk deteksi objek real-time, estimasi kedalaman visual, navigasi otonom SLAM, dan segmentasi citra tanaman.',
    leader: {
      id: 'ai-leader',
      name: 'Bagas Kurniawan',
      role: 'Ketua Riset Computer Vision & Deep Learning',
      avatar: '/avatar-member.svg',
    },
    members: [
      {
        id: 'ai-1',
        name: 'Naufal Azizi',
        role: 'Deep Learning Model & Neural Network Optimizer',
        avatar: '/avatar-member.svg',
      },
      {
        id: 'ai-2',
        name: 'Putri Anggraini',
        role: 'Dataset Annotation & Synthetic Data Researcher',
        avatar: '/avatar-member.svg',
      },
      {
        id: 'ai-3',
        name: 'Farhan Maulana',
        role: 'Real-time Edge AI & TensorRT Specialist',
        avatar: '/avatar-member.svg',
      },
    ],
  },
  {
    id: 'iot-smart',
    code: 'IoT & Smart Automation',
    title: 'Divisi Riset IoT & Smart Automation Systems',
    badge: 'Wireless Sensor & Telemetry',
    icon: Wifi,
    description: 'Pengembangan arsitektur Internet of Things, sistem telemetri jarak jauh nirkabel (LoRa & MQTT), dan otomatisasi monitoring pertanian pintar berbasis cloud.',
    leader: {
      id: 'iot-leader',
      name: 'Reza Firmansyah',
      role: 'Ketua Riset IoT & Smart Systems',
      avatar: '/avatar-member.svg',
    },
    members: [
      {
        id: 'iot-1',
        name: 'Aditya Wicaksono',
        role: 'Cloud Server Architecture & API Integrator',
        avatar: '/avatar-member.svg',
      },
      {
        id: 'iot-2',
        name: 'Wildan Saputra',
        role: 'Ultra-low Power Sensor Node Circuit Designer',
        avatar: '/avatar-member.svg',
      },
      {
        id: 'iot-3',
        name: 'Sarah Agustina',
        role: 'Web Telemetry Dashboard & Real-time UI',
        avatar: '/avatar-member.svg',
      },
    ],
  },
  {
    id: 'embedded-mech',
    code: 'Embedded & Hardware',
    title: 'Divisi Riset Embedded Systems & Mekatronika',
    badge: 'Hardware & Kinematics',
    icon: Cpu,
    description: 'Riset desain PCB multi-layer kustom, firmware RTOS deterministik kecepatan tinggi, serta kinematika inversi untuk manipulasi lengan robot dan robot berkaki.',
    leader: {
      id: 'emb-leader',
      name: 'Gilang Pratama',
      role: 'Ketua Riset Embedded & Hardware Systems',
      avatar: '/avatar-member.svg',
    },
    members: [
      {
        id: 'emb-1',
        name: 'Dimas Arya',
        role: 'Custom PCB Layout, Routing & Impedance Tuning',
        avatar: '/avatar-member.svg',
      },
      {
        id: 'emb-2',
        name: 'Hendra Saputra',
        role: 'Inverse Kinematics & Brushless Motor Driver',
        avatar: '/avatar-member.svg',
      },
      {
        id: 'emb-3',
        name: 'Kevin Adiguna',
        role: 'FreeRTOS Firmware & Low-Level Driver Architect',
        avatar: '/avatar-member.svg',
      },
    ],
  },
]

export default function DivisionRisetPage() {
  const [activeTab, setActiveTab] = useState('all')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const filteredDivisions = activeTab === 'all' 
    ? researchDivisions 
    : researchDivisions.filter(d => d.id === activeTab)

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

            <p className="text-xs md:text-sm font-bold tracking-widest text-emerald-600 uppercase mb-3 select-none">
              [DIVISI RISET & INOVASI]
            </p>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shadow-xs">
                <FlaskConical size={28} />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                  Divisi Riset
                </h1>
                <p className="text-sm text-slate-500 font-medium mt-1">
                  3 Sub-Divisi Riset Terapan & Publikasi Ilmiah Robotika
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mt-4">
              Terdiri dari 3 pilar laboratorium riset yang aktif mengembangkan AI vision, telemetri IoT cerdas, dan rekayasa perangkat keras embedded berdaya guna tinggi.
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
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              Semua 3 Divisi Riset
            </button>
            {researchDivisions.map((div) => (
              <button
                key={div.id}
                onClick={() => setActiveTab(div.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === div.id
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
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
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100/80 text-emerald-800 border border-emerald-200/60 mb-2">
                      <Sparkles size={12} className="text-emerald-600" />
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
                    <span className="text-xs font-bold px-3.5 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg border border-emerald-200">
                      {allMembers.length} Personel Peneliti
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
                            ? 'border-emerald-300 shadow-md ring-1 ring-emerald-400/20' 
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
                              <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-emerald-600 text-white rounded-md shadow-xs">
                                Ketua Riset
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Info Text */}
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
