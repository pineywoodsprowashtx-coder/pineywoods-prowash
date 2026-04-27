'use client'

import Image from 'next/image'
import { useState } from 'react'

export function Navbar() {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl">
      <div className="relative flex items-center justify-between px-3 py-1 md:px-6 md:py-1.5 rounded-full bg-concrete-light/80 backdrop-blur-xl border border-wave-blue-mid/20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="relative w-12 h-12 md:w-14 md:h-14">
            <Image
              src="/logo.svg"
              alt="Pineywoods ProWash"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <span className="font-sans font-bold text-deep-navy text-sm md:text-base tracking-tight">
              PINEYWOODS
            </span>
            <span className="font-mono text-signal-gold text-[10px] md:text-xs block -mt-1 tracking-wider">
              PROWASH
            </span>
          </div>
        </a>

        {/* Mobile Call Now + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="tel:+19033920818"
            className="flex items-center px-4 py-2 bg-white text-deep-navy font-sans font-bold text-xs rounded-full uppercase tracking-wide border border-wave-blue-mid/20"
          >
            Call Now
          </a>
          <button 
            className="p-2 text-deep-navy"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        </div>

        {/* CTA Button - Desktop */}
        <a 
          href="tel:+19033920818"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="magnetic-btn hidden md:flex relative px-4 py-2 md:px-6 md:py-2.5 bg-white text-deep-navy font-sans font-bold text-xs md:text-sm rounded-[10px] uppercase tracking-wide"
        >
          <span className="relative z-10">Call Now</span>
          <div
            className={`absolute inset-0 rounded-[10px] bg-gray-100 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 rounded-xl bg-concrete-light/95 backdrop-blur-xl border border-wave-blue-mid/20">
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-deep-navy font-sans font-bold text-sm uppercase tracking-wide">About</a>
          <a href="#cost-estimator" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-deep-navy font-sans font-bold text-sm uppercase tracking-wide">Cost Estimator</a>
          <a href="#service-area" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-deep-navy font-sans font-bold text-sm uppercase tracking-wide">Service Area</a>
          <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-deep-navy font-sans font-bold text-sm uppercase tracking-wide">FAQ</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 px-4 text-deep-navy font-sans font-bold text-sm uppercase tracking-wide">Get a Quote</a>
          <a 
            href="tel:+19033920818"
            className="block w-full py-3 px-4 bg-white text-deep-navy font-sans font-bold text-sm rounded-[10px] uppercase tracking-wide text-center"
          >
            Call Now
          </a>
        </div>
      )}
    </nav>
  )
}
