'use client'

// About section component
export function About() {
  return (
    <section id="about" className="relative py-24 bg-concrete overflow-hidden">
      {/* Film grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-deep-navy uppercase tracking-tight">
              The &ldquo;Pineywoods ProWash&rdquo; Story
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="font-sans text-lg text-deep-navy/80 leading-relaxed">
                My mother was born and raised in Nacogdoches. I grew up in Houston, but I spent many summers here — at my grandparents&apos; house, surrounded by the pine trees and the slower pace of East Texas. This town was special, even when I lived somewhere else.
              </p>
              
              <p className="font-sans text-lg text-deep-navy/80 leading-relaxed">
                In 2022, life called me back.
              </p>
              
              <p className="font-sans text-lg text-deep-navy/80 leading-relaxed">
                My mom needed me. I left behind the life I had built. It was not an easy choice, but it was the right one.
              </p>
              
              <p className="font-serif italic text-xl text-deep-navy leading-relaxed">
                I came home for my Mom. I built Pineywoods ProWash. And they&apos;re worth staying for.
              </p>
              
              <p className="font-sans text-lg text-deep-navy/80 leading-relaxed">
                Today, we keep Nacogdoches homes and businesses looking their best.
              </p>
            </div>

            {/* Owner Photo Placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] bg-concrete-light border-2 border-dashed border-wave-blue-mid/30 rounded-sm flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-wave-blue-mid/10 flex items-center justify-center">
                    <svg 
                      className="w-12 h-12 text-wave-blue-mid/40" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="font-mono text-sm text-wave-blue-mid/60 uppercase tracking-wider">
                    [ OWNER PHOTO — add in Cursor ]
                  </p>
                </div>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-signal-gold/40" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-signal-gold/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
