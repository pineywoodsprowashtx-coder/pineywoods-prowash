"use client"

const sectors = [
  { code: "01", name: "Nacogdoches" },
  { code: "02", name: "Appleby" },
  { code: "03", name: "Central Heights" },
  { code: "04", name: "Garrison" },
  { code: "05", name: "Lufkin" },
  { code: "06", name: "Huntington" },
  { code: "07", name: "Henderson" },
  { code: "08", name: "Carthage" },
]

// Texas Star SVG - Blueprint/wireframe style
function TexasStarWireframe() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.13]"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Outer star */}
      <path
        d="M100 10 L118 72 L182 72 L130 110 L148 172 L100 138 L52 172 L70 110 L18 72 L82 72 Z"
        stroke="#FFC700"
        strokeWidth="0.5"
        fill="none"
      />
      {/* Inner star detail */}
      <path
        d="M100 30 L112 68 L152 68 L120 92 L132 132 L100 110 L68 132 L80 92 L48 68 L88 68 Z"
        stroke="#FFC700"
        strokeWidth="0.3"
        fill="none"
      />
      {/* Center pentagon */}
      <path
        d="M100 55 L115 85 L108 105 L92 105 L85 85 Z"
        stroke="#FFC700"
        strokeWidth="0.3"
        fill="none"
      />
      {/* Technical grid lines */}
      <line x1="100" y1="0" x2="100" y2="200" stroke="#FFC700" strokeWidth="0.15" strokeDasharray="4 4" />
      <line x1="0" y1="100" x2="200" y2="100" stroke="#FFC700" strokeWidth="0.15" strokeDasharray="4 4" />
      {/* Corner markers */}
      <path d="M10 10 L30 10 M10 10 L10 30" stroke="#FFC700" strokeWidth="0.2" />
      <path d="M190 10 L170 10 M190 10 L190 30" stroke="#FFC700" strokeWidth="0.2" />
      <path d="M10 190 L30 190 M10 190 L10 170" stroke="#FFC700" strokeWidth="0.2" />
      <path d="M190 190 L170 190 M190 190 L190 170" stroke="#FFC700" strokeWidth="0.2" />
      {/* Radial construction lines */}
      <circle cx="100" cy="100" r="80" stroke="#FFC700" strokeWidth="0.15" strokeDasharray="2 6" />
      <circle cx="100" cy="100" r="50" stroke="#FFC700" strokeWidth="0.1" strokeDasharray="2 6" />
    </svg>
  )
}

export function ServiceArea() {
  return (
    <section id="service-area" className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
      {/* Film grain overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Texas Star Wireframe Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] md:w-[1000px] md:h-[1000px]">
          <TexasStarWireframe />
        </div>
      </div>

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Technical Label */}
          <span className="font-mono text-xs text-signal-yellow tracking-[0.3em] uppercase mb-4 block">
            // OPERATING AREA
          </span>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="font-sans font-bold text-white tracking-tight">PROUDLY SERVING </span>
            <span className="font-serif italic text-signal-yellow">East Texas</span>
          </h2>

          {/* Body Text */}
          <p className="text-concrete-gray text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We bring our professional pressure washing and exterior cleaning services directly to your doorstep. 
            If you don't see your city listed, just give us a call!
          </p>
        </div>

        {/* Sector Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
          {sectors.map((sector) => (
            <div
              key={sector.code}
              className="group relative bg-charcoal border border-concrete-gray/30 hover:border-signal-yellow/50 
                         transition-all duration-300 p-4 md:p-5"
            >
              {/* Technical Code */}
              <span className="font-mono text-[10px] text-wave-blue-light tracking-wider block mb-2">
                [{sector.code}]
              </span>
              
              {/* Town Name */}
              <span className="font-sans text-sm md:text-base text-white font-medium tracking-wide">
                {sector.name}
              </span>

              {/* Corner accent on hover */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-transparent 
                            group-hover:border-signal-yellow/50 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-transparent 
                            group-hover:border-signal-yellow/50 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="font-mono text-xs text-concrete-gray/60 tracking-wider">
            // COVERAGE_RADIUS: 50+ MILES FROM NACOGDOCHES HQ
          </p>
        </div>
      </div>
    </section>
  )
}
