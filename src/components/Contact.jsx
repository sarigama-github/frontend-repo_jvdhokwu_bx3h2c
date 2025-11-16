import React, { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Gagal mengirim pesan')
      const data = await res.json()
      setStatus({ ok: true, message: data.message || 'Terkirim!' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, message: err.message })
    }
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Hubungi Saya</h2>
            <p className="text-gray-600 mt-2">Punya ide atau proyek? Kirim pesan, saya akan membalas secepatnya.</p>
            <div className="mt-6 space-y-2 text-gray-700">
              <p>Email: <a className="text-blue-600" href="mailto:you@email.com">you@email.com</a></p>
              <p>LinkedIn: <a className="text-blue-600" href="#">linkedin.com/in/username</a></p>
              <p>GitHub: <a className="text-blue-600" href="#">github.com/username</a></p>
            </div>
          </div>
          <form onSubmit={onSubmit} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <div className="grid grid-cols-1 gap-4">
              <input name="name" required placeholder="Nama" className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input name="email" type="email" required placeholder="Email" className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <textarea name="message" required placeholder="Pesan" rows={5} className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="px-5 py-2.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">Kirim</button>
              {status && (
                <p className={`${status.ok ? 'text-green-600' : 'text-red-600'} text-sm`}>{status.message}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
