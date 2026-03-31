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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden film-grain">
      {/* Background - Dirty/Grimy Layer */}
      <div className="absolute inset-0">
        <Image
          src="/hero-house.jpg"
          alt="Pressure washing transformation"
          fill
          className="object-cover grayscale brightness-50 contrast-75 sepia-[0.2]"
          priority
        />
        <div className="absolute inset-0 bg-charcoal/60" />
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
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal/80" />
      </div>

      {/* Reveal Line Indicator */}
      <div 
        className={`absolute top-0 bottom-0 w-1 bg-signal-yellow shadow-[0_0_20px_rgba(245,194,0,0.8)] z-10 ${isLoaded ? 'line-wiper' : ''}`}
        style={{ 
          clipPath: 'inset(0 0 0 0)',
          left: '0%'
        }}
      />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="mb-8">
            <span className="block font-sans font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground uppercase tracking-tight leading-none">
              Restoring the
            </span>
            <span className="block font-serif italic text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-foreground mt-2 md:mt-4 text-balance">
              Oldest Town in Texas
            </span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-xl mx-auto mb-10 font-sans text-concrete text-base sm:text-lg leading-relaxed">
            <span className="font-bold text-signal-yellow">Professional pressure washing services</span> restoring homes and businesses to their original glory. 
            <span className="text-wave-blue-light"> Nacogdoches Residential & Commercial Exterior Cleaning</span>
          </p>

          {/* CTA Button */}
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={handleMouseLeave}
            className="magnetic-btn group relative inline-flex items-center gap-3 px-8 py-5 sm:px-12 sm:py-6 bg-signal-yellow text-charcoal font-sans font-bold text-base sm:text-lg rounded-full uppercase tracking-wide overflow-hidden"
            style={{
              transform: `translate(${mousePos.x}px, ${mousePos.y}px)`
            }}
          >
            <span className="relative z-10">Secure Your Free Quote</span>
            <svg 
              className={`relative z-10 w-5 h-5 transition-transform duration-300 ${isButtonHovered ? 'translate-x-1' : ''}`}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div 
              className={`absolute inset-0 bg-signal-yellow-hover transition-opacity duration-300 ${isButtonHovered ? 'opacity-100' : 'opacity-0'}`}
            />
          </button>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            <div className="flex items-center gap-2">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-signal-yellow">100%</span>
              <span className="font-mono text-xs text-concrete uppercase tracking-wider text-left leading-tight">
                Satisfaction<br />Guaranteed
              </span>
            </div>
            <div className="w-px h-8 bg-concrete/30 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-wave-blue-light">24hr</span>
              <span className="font-mono text-xs text-concrete uppercase tracking-wider text-left leading-tight">
                Quote<br />Response
              </span>
            </div>
            <div className="w-px h-8 bg-concrete/30 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-signal-yellow">Local</span>
              <span className="font-mono text-xs text-concrete uppercase tracking-wider text-left leading-tight">
                Owned &<br />Operated
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent z-10" />

      

      {/* Additional film grain on top */}
      <div 
        className="absolute inset-0 pointer-events-none z-30 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />


    </section>
  )
}
