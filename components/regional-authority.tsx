"use client"

import Image from 'next/image'

// Minimalist Industrial Stamp Icon
function StampIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle */}
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Inner circle */}
      <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {/* Checkmark */}
      <path
        d="M20 32L28 40L44 24"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Corner notches for industrial feel */}
      <path d="M32 4V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M32 56V60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 32H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M56 32H60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

const capabilities = [
  { label: "STATUS", value: "LICENSED_INSURED" },
  { label: "SYSTEM", value: "ECO_SAFE" },
  { label: "OFFER", value: "FREE_ESTIMATES" },
]

export function RegionalAuthority() {
  return (
    <section id="about" className="relative py-24 bg-charcoal overflow-hidden">
      {/* Film grain overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            {/* Technical Label */}
            <div className="inline-block">
              <span className="font-mono text-sm text-signal-yellow tracking-widest">
                {'// REGIONAL_AUTHORITY'}
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-tight">
              <span className="font-sans font-bold text-white uppercase tracking-tight">
                BUILT IN THE{' '}
              </span>
              <span className="font-serif italic text-white">
                Pineywoods
              </span>
            </h2>

            {/* Body Text */}
            <div className="space-y-4">
              <p className="text-lg text-concrete-gray leading-relaxed">
                Pineywoods ProWash is a Nacogdoches-based pressure washing company serving East Texas. We know the unique challenges our climate brings—humidity, pollen, and those stubborn roof streaks from the tall pines.
              </p>
              <p className="text-lg text-concrete-gray leading-relaxed">
                We use professional-grade equipment and proven techniques. No shortcuts, no half-measures. When we leave your property, you&apos;ll see the difference—and so will your neighbors.
              </p>
            </div>

            {/* Technical Capability Labels */}
            <div className="flex flex-wrap gap-3">
              {capabilities.map((cap) => (
                <div 
                  key={cap.label}
                  className="px-4 py-2 bg-charcoal-light/30 border border-concrete-gray/20 rounded"
                >
                  <span className="font-mono text-xs text-wave-blue-light tracking-wide">
                    [{cap.label}:{' '}
                    <span className="text-signal-yellow">{cap.value}</span>]
                  </span>
                </div>
              ))}
            </div>

            {/* Guarantee Box */}
            <div className="mt-8 p-6 bg-charcoal-light/50 border border-signal-yellow rounded-lg">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <StampIcon className="w-14 h-14 text-signal-yellow" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-mono text-sm text-signal-yellow uppercase tracking-widest">
                    OUR GUARANTEE
                  </h3>
                  <p className="text-concrete-gray leading-relaxed">
                    If you aren&apos;t 100% satisfied, we&apos;ll make it right at no extra cost.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="relative">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
              {/* Image */}
              <Image
                src="/authority-house.jpg"
                alt="Luxury southern home with freshly cleaned driveway"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
              
              {/* Corner accent frame */}
              <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-signal-yellow/60 rounded-tl-lg" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-signal-yellow/60 rounded-br-lg" />
            </div>

            {/* Status indicator */}
            <div className="absolute -bottom-4 left-8 px-4 py-2 bg-charcoal border border-concrete-gray/30 rounded-full backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-signal-yellow animate-pulse" />
                <span className="font-mono text-xs text-wave-blue-light uppercase tracking-wider">
                  Service Area: East Texas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
