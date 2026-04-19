'use client'

import { useState, useRef, useEffect } from 'react'

export function SeeTheDifference() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = (x / rect.width) * 100
    setSliderPosition(percent)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return
    handleMove(e.touches[0].clientX)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('touchmove', handleTouchMove)
      window.addEventListener('touchend', handleMouseUp)
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [isDragging])

  return (
    <section className="relative py-24 bg-[#F5F4F2] overflow-hidden">
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
            SEE THE DIFFERENCE
          </h2>
          <p className="font-serif italic text-xl md:text-2xl text-[#5B8DB8]">
            Real results from real East Texas properties.
          </p>
        </div>

        {/* Before/After Slider */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="relative aspect-[16/10] overflow-hidden rounded-sm border-2 border-[#001F3F] cursor-ew-resize select-none"
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            {/* AFTER Image (full width background) */}
            <div className="absolute inset-0 bg-[#E5E4E2]" style={{ backgroundImage: 'url(/garage-cleaning-after.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[#5B8DB8]/20 flex items-center justify-center">
                    <svg className="w-16 h-16 text-[#5B8DB8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 22V12h6v10" />
                    </svg>
                  </div>
                  <p className="font-mono text-sm text-[#5B8DB8]">AFTER</p>
                  <p className="font-sans text-xs text-[#001F3F]/60 mt-1">Clean &amp; Restored</p>
                </div>
              </div>
            </div>

            {/* BEFORE Image (clipped by slider) */}
            <div
              className="absolute inset-0 bg-[#001F3F]"
              style={{ 
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                backgroundImage: 'url(/garage-cleaning-before.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[#FFD700]/20 flex items-center justify-center">
                    <svg className="w-16 h-16 text-[#FFD700]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 22V12h6v10" />
                    </svg>
                  </div>
                  <p className="font-mono text-sm text-[#FFD700]">BEFORE</p>
                  <p className="font-sans text-xs text-[#F5F4F2]/60 mt-1">Dirty &amp; Weathered</p>
                </div>
              </div>
            </div>

            {/* Slider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#FFD700] z-30"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              {/* Slider Handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#FFD700] flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-[#001F3F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 z-20">
              <span className="inline-block px-3 py-1 bg-[#001F3F] text-[#FFD700] font-mono text-sm uppercase tracking-wider">
                BEFORE
              </span>
            </div>
            <div className="absolute top-4 right-4 z-20">
              <span className="inline-block px-3 py-1 bg-[#F5F4F2] text-[#001F3F] font-mono text-sm uppercase tracking-wider border border-[#001F3F]">
                AFTER
              </span>
            </div>
          </div>

          {/* Drag instruction */}
          <p className="text-center mt-4 font-mono text-sm text-[#5B8DB8]">
            Drag the slider to compare
          </p>
        </div>
      </div>
    </section>
  )
}
