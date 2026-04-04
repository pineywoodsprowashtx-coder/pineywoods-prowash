'use client'

const cities = [
  'Nacogdoches',
  'Appleby',
  'Central Heights',
  'Garrison',
  'Lufkin',
  'Huntington',
  'Henderson',
  'Carthage',
]

export function ServiceArea() {
  return (
    <section id="service-area" className="relative py-24 bg-concrete-light overflow-hidden">
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
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-deep-navy uppercase mb-4">
            SERVICE AREA
          </h2>
          <p className="font-serif italic text-xl md:text-2xl text-deep-navy/70">
            Proudly serving Nacogdoches and the surrounding region.
          </p>
        </div>

        {/* Cities List */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="font-sans text-lg text-deep-navy/80">
            {cities.map((city, index) => (
              <span key={city}>
                <span className="font-medium">{city}</span>
                {index < cities.length - 1 && (
                  <span className="text-signal-gold mx-2">&middot;</span>
                )}
              </span>
            ))}
          </p>
        </div>

        {/* Body Text */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-deep-navy/70 leading-relaxed">
            We&apos;re based right here in Nacogdoches and we serve a 50+ mile radius across East Texas. If you&apos;re not sure whether we cover your area, just reach out. Chances are we do.
          </p>
        </div>
      </div>
    </section>
  )
}
