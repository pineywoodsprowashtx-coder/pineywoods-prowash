'use client'

import { useState } from 'react'

// Blueprint-style House Facade Icon
function HouseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M8 28L32 8L56 28" />
      <rect x="12" y="28" width="40" height="28" />
      <rect x="26" y="40" width="12" height="16" />
      <rect x="16" y="32" width="8" height="8" />
      <rect x="40" y="32" width="8" height="8" />
      <line x1="20" y1="32" x2="20" y2="40" />
      <line x1="16" y1="36" x2="24" y2="36" />
      <line x1="44" y1="32" x2="44" y2="40" />
      <line x1="40" y1="36" x2="48" y2="36" />
      <line x1="8" y1="60" x2="56" y2="60" strokeDasharray="2 2" />
      <line x1="8" y1="58" x2="8" y2="62" />
      <line x1="56" y1="58" x2="56" y2="62" />
    </svg>
  )
}

// Concrete/Driveway Icon
function ConcreteIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="32" cy="36" r="20" />
      <circle cx="32" cy="36" r="14" />
      <circle cx="32" cy="36" r="6" />
      <path d="M32 16C42 16 50 24 50 34" />
      <path d="M50 34L54 30" />
      <path d="M50 34L46 30" />
      <line x1="32" y1="36" x2="32" y2="8" />
      <line x1="28" y1="8" x2="36" y2="8" />
      <circle cx="26" cy="36" r="1" fill="currentColor" />
      <circle cx="38" cy="36" r="1" fill="currentColor" />
      <circle cx="32" cy="30" r="1" fill="currentColor" />
      <circle cx="32" cy="42" r="1" fill="currentColor" />
      <line x1="4" y1="56" x2="60" y2="56" strokeDasharray="4 2" />
    </svg>
  )
}

// Gutter Icon
function GutterIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M8 20L32 8L56 20" />
      <path d="M8 20L8 24L56 24L56 20" />
      <rect x="8" y="24" width="48" height="6" />
      <path d="M52 30L52 50" />
      <path d="M48 50L56 50" />
      <circle cx="20" cy="16" r="2" fill="currentColor" />
      <circle cx="32" cy="12" r="2" fill="currentColor" />
      <circle cx="44" cy="16" r="2" fill="currentColor" />
      <path d="M16 36L20 42M24 36L28 42M32 36L36 42" strokeDasharray="2 2" />
    </svg>
  )
}

// Roof Icon
function RoofIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 40L32 12L60 40" />
      <line x1="4" y1="40" x2="60" y2="40" />
      <line x1="12" y1="36" x2="52" y2="36" />
      <line x1="18" y1="32" x2="46" y2="32" />
      <line x1="24" y1="28" x2="40" y2="28" />
      <line x1="28" y1="24" x2="36" y2="24" />
      <path d="M48 8C48 8 52 14 52 18" strokeDasharray="2 2" />
      <path d="M52 8C52 8 56 16 54 22" strokeDasharray="2 2" />
      <path d="M50 6C50 6 58 18 54 26" strokeDasharray="2 2" />
      <circle cx="50" cy="6" r="2" fill="currentColor" />
      <circle cx="44" cy="20" r="1" fill="currentColor" />
      <circle cx="48" cy="24" r="1" fill="currentColor" />
      <circle cx="52" cy="28" r="1" fill="currentColor" />
    </svg>
  )
}

type ServiceType = 'housewash' | 'concrete' | 'gutters' | 'roof' | null

const serviceData = {
  housewash: {
    title: 'HOUSE WASH',
    subtitle: 'Your home\'s exterior, done right.',
    bullets: [
      'Soft wash chemistry that kills mold and algae — not just rinses them',
      'Safe for vinyl, wood, brick, and painted surfaces',
      'Your plants and landscaping protected on every job',
    ],
    expanded: 'East Texas humidity is hard on a house. Mold, algae, and mildew don\'t just look bad — they eat into your siding and paint if you let them sit. High pressure makes it worse. We use a low-pressure soft wash system with professional-grade chemistry that kills the growth at the root and rinses clean. Your house looks the way it\'s supposed to, and the results last. No shortcuts. No damage. Just a clean home you can be proud of.',
    icon: HouseIcon,
    cta: 'TAP FOR DETAILS',
    expandedCta: 'GET A QUOTE',
  },
  concrete: {
    title: 'CONCRETE CLEANING',
    subtitle: 'Driveways, sidewalks, and patios — restored.',
    bullets: [
      'Removes oil, rust, mold, and years of ground-in grime',
      'Safe for concrete, pavers, and brick surfaces',
      'Results you\'ll notice from the street',
    ],
    expanded: 'Your driveway is the first thing people see. In East Texas, concrete takes a beating — humidity, tree sap, tire tracks, years of buildup. A standard rinse won\'t touch it. We use professional surface cleaning equipment and the right chemistry to pull the grime out, not just push it around. What you get is an even, deep clean across the whole surface — no streaks, no missed spots. The kind of result that makes your whole property look better.',
    icon: ConcreteIcon,
    cta: 'TAP FOR DETAILS',
    expandedCta: 'GET A QUOTE',
  },
  gutters: {
    title: 'GUTTER CLEANING',
    subtitle: 'Clear gutters. No ladder. No hassle.',
    bullets: [
      'Removes leaves, debris, and built-up blockages',
      'Protects your roofline, fascia, and foundation',
      'Flushed and flowing before we leave your property',
    ],
    expanded: 'Clogged gutters don\'t just overflow — they pull water back into your roofline, rot your fascia boards, and dump it right against your foundation. In East Texas, with the pine trees and the rain we get, gutters fill up fast. We clear them out completely, flush the downspouts, and make sure everything is draining the way it\'s supposed to. It\'s one of the simplest things you can do to protect a home you\'ve worked hard for.',
    icon: GutterIcon,
    cta: 'TAP FOR DETAILS',
    expandedCta: 'GET A QUOTE',
  },
  roof: {
    title: 'ROOF CLEANING',
    subtitle: 'Coming 2027 — Soft Wash Roof Treatment.',
    bullets: [
      'Low-pressure soft wash safe for all roofing materials',
      'Removes black streaks, moss, and algae growth',
      'Extends the life of your roof and boosts curb appeal',
    ],
    expanded: 'Roof cleaning is one of the most valuable things you can do for your home — and one of the most commonly done wrong. We\'re taking the time to train and certify to the standard this service demands before we offer it. We expect to launch roof cleaning in 2027. If you want to be first in line when we do, drop your name and we\'ll reach out personally when we\'re ready.',
    icon: RoofIcon,
    cta: 'JOIN THE WAITLIST',
    expandedCta: 'JOIN THE WAITLIST',
    comingSoon: true,
  },
}

export function Services() {
  const [expandedService, setExpandedService] = useState<ServiceType>(null)

  const toggleExpand = (service: ServiceType) => {
    setExpandedService(expandedService === service ? null : service)
  }

  return (
    <section id="services" className="relative py-24 bg-concrete overflow-hidden">
      {/* Film grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-deep-navy uppercase mb-4">
            OUR SERVICES
          </h2>
          <p className="font-serif italic text-xl md:text-2xl text-[#5B8DB8]">
            Pro cleaning tailored for East Texas homes.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {(Object.keys(serviceData) as Array<keyof typeof serviceData>).map((key) => {
            const service = serviceData[key]
            const IconComponent = service.icon
            const isExpanded = expandedService === key
            
            return (
              <div
                key={key}
                className="group relative bg-[#001F3F] border border-[#FFD700]/30 rounded-sm p-6 sm:p-8 text-left transition-all duration-300 hover:border-[#FFD700]/60"
              >
                {/* Coming Soon Badge */}
                {service.comingSoon && (
                  <div className="absolute top-4 right-4 px-2 py-1 bg-[#FFD700] rounded-sm">
                    <span className="font-mono text-[10px] text-[#001F3F] uppercase tracking-wider font-bold">Coming 2027</span>
                  </div>
                )}

                {/* Icon */}
                <div className="mb-4">
                  <IconComponent className="w-14 h-14 text-[#FFD700] transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Title */}
                <h3 className="font-sans font-bold text-xl text-[#FFD700] mb-2">
                  {service.title}
                </h3>

                {/* Subtitle */}
                <p className="font-serif italic text-sm text-[#5B8DB8] mb-4">
                  {service.subtitle}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-6">
                  {service.bullets.map((bullet, index) => (
                    <li
                      key={index}
                      className="font-sans text-sm text-[#F5F4F2] flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-[#FFD700] rounded-full mt-1.5 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tap for Details Button */}
                <button
                  onClick={() => toggleExpand(key)}
                  className="font-mono text-xs text-[#FFD700] uppercase tracking-wider hover:text-[#FFD700]/80 transition-colors flex items-center gap-2"
                >
                  {service.cta}
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Expanded Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="border-t border-[#FFD700]/30 pt-6">
                    <p className="font-sans text-sm text-[#F5F4F2]/80 leading-relaxed mb-6">
                      {service.expanded}
                    </p>
                    <button
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className="px-6 py-3 bg-[#FFD700] text-[#001F3F] font-sans font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-[#FFD700]/90 transition-colors"
                    >
                      {service.expandedCta}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
