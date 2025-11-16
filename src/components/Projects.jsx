import React from 'react'

const projects = [
  {
    title: 'Dashboard Analytics',
    desc: 'Dashboard interaktif dengan grafik real-time dan filter cerdas.',
    tags: ['React', 'Tailwind', 'Chart.js'],
    link: '#'
  },
  {
    title: 'E-commerce UI',
    desc: 'Halaman toko modern dengan kartu produk, keranjang, dan checkout.',
    tags: ['React', 'Tailwind'],
    link: '#'
  },
  {
    title: 'Landing SaaS',
    desc: 'Landing page fokus konversi dengan animasi halus dan CTA jelas.',
    tags: ['Vite', 'Tailwind', 'Framer Motion'],
    link: '#'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Proyek Pilihan</h2>
            <p className="text-gray-600 mt-1">Beberapa pekerjaan terbaik yang pernah saya kerjakan</p>
          </div>
          <a href="#" className="text-blue-600 hover:text-blue-700 text-sm">Lihat semua →</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a key={i} href={p.link} className="group block rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow bg-white">
              <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100" />
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">{p.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
