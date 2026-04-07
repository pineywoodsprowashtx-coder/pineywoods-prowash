'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15
    setMousePos({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 })
    setIsButtonHovered(false)
  }

  return (
    <section className="relative h-screen flex flex-col film-grain">
      {/* Background - Dirty/Grimy Layer */}
      <div className="absolute inset-0">
        <Image
          src="/hero-house.jpg"
          alt="Pressure washing transformation"
          fill
          className="object-cover grayscale brightness-50 contrast-75 sepia-[0.2]"
          priority
        />
        <div className="absolute inset-0 bg-concrete/60" />
      </div>

      {/* Clean Layer with Clip-Path Reveal */}
      <div 
        className={`absolute inset-0 ${isLoaded ? 'dirty-glass-loop' : ''}`}
        style={{ clipPath: 'inset(0 100% 0 0)' }}
      >
        <Image
          src="/hero-house.jpg"
          alt="Pressure washing transformation - clean"
          fill
          className="object-cover brightness-110 contrast-110 saturate-110"
          priority
        />
        <div className="bg-gradient-to-b from-concrete/30 via-concrete/35 to-concrete/80" />
      </div>

      {/* Reveal Line Indicator - Signal Gold */}
      <div 
        className={`absolute top-0 bottom-0 w-1 bg-signal-gold shadow-[0_0_20px_rgba(255,215,0,0.8)] z-10 ${isLoaded ? 'line-wiper' : ''}`}
        style={{ 
          clipPath: 'inset(0 0 0 0)',
          left: '0%'
        }}
      />

      {/* Main Content Area - Flexbox column layout */}
      <div className="relative z-20 flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-4">
        <div className="max-w-4xl mx-auto text-center w-full">
          {/* RESTORING THE - Small supporting line */}
          <p className="font-sans font-bold text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-none hero-text-shadow mb-1 sm:mb-2">
            Restoring the
          </p>
          
          {/* Oldest Town / in Texas - Main headline */}
          <h1 className="font-serif italic font-bold text-white hero-text-shadow leading-[0.9] mb-3 sm:mb-6">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Oldest Town</span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">in Texas</span>
          </h1>

          {/* Subheadline - Compact */}
          <p className="max-w-lg mx-auto mb-6 sm:mb-8 text-lg sm:text-xl md:text-2xl leading-snug sm:leading-relaxed hero-text-shadow">
            <span className="font-sans font-bold text-signal-gold">Professional pressure washing services</span>
            <span className="font-sans font-bold text-white/90"> restoring homes and businesses to their original glory.</span>
            <span className="hidden sm:inline"><br /></span>
            <span className="sm:hidden"> </span>
            <span className="font-sans font-bold text-wave-blue-mid">Nacogdoches Residential &amp; Commercial Exterior Cleaning</span>
          </p>

          {/* CTA Button - Full width on mobile */}
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={handleMouseLeave}
            className="magnetic-btn group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-4 sm:px-12 sm:py-6 bg-signal-gold text-deep-navy font-sans font-bold text-sm sm:text-lg rounded-full uppercase tracking-wide overflow-hidden"
            style={{
              transform: `translate(${mousePos.x}px, ${mousePos.y}px)`
            }}
          >
            <span className="relative z-10">Secure Your Free Quote</span>
            <svg 
              className={`relative z-10 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${isButtonHovered ? 'translate-x-1' : ''}`}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div 
              className={`absolute inset-0 bg-signal-gold-hover transition-opacity duration-300 ${isButtonHovered ? 'opacity-100' : 'opacity-0'}`}
            />
          </button>
        </div>
      </div>

      {/* Stats Bar - Compact, stacked on mobile */}
      <div className="relative z-20 bg-deep-navy py-3 sm:py-5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-mono text-sm sm:text-2xl font-bold text-signal-gold">100%</span>
              <span className="font-mono text-[10px] sm:text-xs text-white uppercase tracking-wider leading-tight">
                Satisfaction Guaranteed
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30" />
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-mono text-sm sm:text-2xl font-bold text-wave-blue-mid">24hr</span>
              <span className="font-mono text-[10px] sm:text-xs text-white uppercase tracking-wider leading-tight">
                Quote Response
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30" />
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-mono text-sm sm:text-2xl font-bold text-signal-gold">Local</span>
              <span className="font-mono text-[10px] sm:text-xs text-white uppercase tracking-wider leading-tight">
                Owned &amp; Operated
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Additional film grain on top */}
      <div 
        className="absolute inset-0 pointer-events-none z-30 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />
    </section>
  )
}
