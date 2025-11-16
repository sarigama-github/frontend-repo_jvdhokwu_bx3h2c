import React from 'react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Tentang' },
  { id: 'projects', label: 'Proyek' },
  { id: 'skills', label: 'Keahlian' },
  { id: 'contact', label: 'Kontak' },
]

export default function Navbar() {
  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" onClick={(e) => { e.preventDefault(); handleScroll('home') }} className="flex items-center gap-2 font-bold text-gray-800">
          <span className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 grid place-items-center text-white">F</span>
          <span>Nama Anda</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); handleScroll(item.id) }}
              className="hover:text-blue-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/test"
            className="text-xs px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            Cek Koneksi
          </a>
        </nav>
      </div>
    </header>
  )
}
