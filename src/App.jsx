import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-16">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Tentang Saya</h2>
              <p className="text-gray-600 leading-relaxed">
                Saya adalah pengembang front-end yang menyukai detail desain dan performa. Saya terbiasa
                bekerja kolaboratif dengan tim produk untuk membangun pengalaman yang ramping, dapat diakses,
                dan mudah dipelihara.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Berpengalaman dengan React, Vite, dan Tailwind CSS</li>
                <li>Menulis kode yang bersih, teruji, dan terdokumentasi</li>
                <li>Terbuka untuk proyek freelance dan remote</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 bg-gradient-to-br from-gray-50 to-white">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="p-4 rounded-lg bg-white border border-gray-200">
                  <p className="text-gray-500">Pengalaman</p>
                  <p className="font-semibold text-gray-800">3+ tahun</p>
                </div>
                <div className="p-4 rounded-lg bg-white border border-gray-200">
                  <p className="text-gray-500">Proyek</p>
                  <p className="font-semibold text-gray-800">20+ selesai</p>
                </div>
                <div className="p-4 rounded-lg bg-white border border-gray-200">
                  <p className="text-gray-500">Ketersediaan</p>
                  <p className="font-semibold text-gray-800">Freelance</p>
                </div>
                <div className="p-4 rounded-lg bg-white border border-gray-200">
                  <p className="text-gray-500">Lokasi</p>
                  <p className="font-semibold text-gray-800">Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-gray-500 border-t mt-8">
        © {new Date().getFullYear()} Nama Anda. Dibuat dengan cinta.
      </footer>
    </div>
  )
}

export default App
