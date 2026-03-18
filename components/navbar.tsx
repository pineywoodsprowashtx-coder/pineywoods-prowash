'use client'

import Image from 'next/image'
import { useState } from 'react'

export function Navbar() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl">
      <div className="relative flex items-center justify-between px-3 py-2 md:px-6 md:py-3 rounded-full bg-charcoal/80 backdrop-blur-xl border border-concrete/20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="relative w-10 h-10 md:w-12 md:h-12">
            <Image
              src="/logo.svg"
              alt="Pineywoods ProWash"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <span className="font-sans font-bold text-foreground text-sm md:text-base tracking-tight">
              PINEYWOODS
            </span>
            <span className="font-mono text-wave-blue-light text-[10px] md:text-xs block -mt-1 tracking-wider">
              PROWASH
            </span>
          </div>
        </a>

        {/* CTA Button */}
        
          <a href="tel:+19033920818"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="magnetic-btn relative px-4 py-2 md:px-6 md:py-2.5 bg-signal-yellow text-charcoal font-sans font-bold text-xs md:text-sm rounded-full uppercase tracking-wide"
        >
          <span className="relative z-10">Call Now</span>
          <div
            className={`absolute inset-0 rounded-full bg-signal-yellow-hover transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </a>

        {/* Film grain overlay */}
        <div className="absolute inset-0 rounded-full pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
            }}
          />
        </div>
      </div>
    </nav>
  )
}