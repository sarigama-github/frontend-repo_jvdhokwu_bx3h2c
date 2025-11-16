import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="pt-28 md:pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm tracking-wide text-blue-600 font-semibold">PORTOFOLIO</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Halo, saya <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Nama Anda</span>
          </h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Frontend Developer yang fokus pada pembuatan antarmuka modern, cepat, dan responsif dengan pengalaman membangun produk web end-to-end.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">Lihat Proyek</a>
            <a href="#contact" className="px-5 py-2.5 rounded-md bg-gray-900 text-white hover:bg-gray-800 transition-colors">Kontak</a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-sm text-gray-600">
            <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500"/> Tersedia untuk freelance</span>
            <span>Berbasis di Indonesia</span>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-200 to-purple-200"/>
          <div className="absolute inset-0 grid place-items-center pointer-events-none">
            <div className="h-40 w-40 md:h-56 md:w-56 rounded-full bg-white shadow-xl border border-gray-100 grid place-items-center text-gray-700 font-semibold">
              Foto/Logo
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
