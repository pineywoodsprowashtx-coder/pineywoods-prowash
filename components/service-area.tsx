'use client'

import { useState } from 'react'

const cities = [
  { name: 'Nacogdoches', isHQ: true },
  { name: 'Appleby', isHQ: false },
  { name: 'Central Heights', isHQ: false },
  { name: 'Garrison', isHQ: false },
  { name: 'Lufkin', isHQ: false },
  { name: 'Huntington', isHQ: false },
  { name: 'Henderson', isHQ: false },
  { name: 'Carthage', isHQ: false },
]

export function ServiceArea() {
  const [selectedCity, setSelectedCity] = useState('Nacogdoches')

  return (
    <section id="service-area" className="relative py-24 bg-concrete overflow-hidden">
      {/* Film grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-[#001F3F] uppercase mb-4">
            SERVICE AREA
          </h2>
          <p className="font-serif italic text-xl md:text-2xl text-[#5B8DB8]">
            Proudly serving Nacogdoches and the surrounding region.
          </p>
        </div>

        {/* City Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {cities.map((city, index) => {
            const number = String(index + 1).padStart(2, '0')
            const isSelected = selectedCity === city.name
            return (
              <button
                key={city.name}
                onClick={() => setSelectedCity(city.name)}
                className={`
                  bg-[#001F3F] rounded-sm p-4 text-left transition-all duration-200
                  ${isSelected ? 'border-2 border-[#FFD700]' : 'border border-[#5B8DB8]'}
                  hover:border-[#FFD700]/60
                `}
              >
                <span className="font-mono text-xs text-[#5B8DB8] block mb-1">
                  [{number}]
                </span>
                <span className="font-sans font-bold text-[#F5F4F2]">
                  {city.name}
                </span>
                {city.isHQ && (
                  <span className="font-mono text-[10px] text-[#FFD700] block mt-1 uppercase tracking-wider">
                    HQ
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Body Text */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-[#001F3F] leading-relaxed">
            We&apos;re based right here in Nacogdoches and we serve a 50+ mile radius across East Texas!!!
          </p>
        </div>
      </div>
    </section>
  )
}
