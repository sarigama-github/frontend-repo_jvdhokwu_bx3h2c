import React from 'react'

const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 88 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'Node.js', level: 75 },
  { name: 'UI/UX', level: 70 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Keahlian</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((s) => (
            <div key={s.name} className="bg-white rounded-xl border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-800">{s.name}</span>
                <span className="text-sm text-gray-600">{s.level}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
