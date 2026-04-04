'use client'

// How it works section component
const steps = [
  {
    number: '01',
    title: 'Get Your Quote',
    description: 'Tell us what you need. We\'ll respond within 24 hours with a straightforward price. No sales pressure. No runaround.',
  },
  {
    number: '02',
    title: 'We Show Up Ready',
    description: 'We arrive on time with everything needed to do the job right. Professional equipment, right chemistry, full plant protection protocol in place before we start.',
  },
  {
    number: '03',
    title: 'You See the Difference',
    description: 'We don\'t leave until the work is done and you\'re satisfied. Simple as that.',
  },
]

export function HowItWorks() {
  return (
    <section className="relative py-24 bg-deep-navy overflow-hidden">
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
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-concrete-light uppercase mb-4">
            HOW IT WORKS
          </h2>
          <p className="font-serif italic text-xl md:text-2xl text-concrete-light/70">
            Three steps. No guesswork. No surprises.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line - only on desktop, not on last item */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+3rem)] w-[calc(100%-3rem)] h-px bg-signal-gold/30" />
              )}
              
              <div className="text-center">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-signal-gold mb-6">
                  <span className="font-mono text-2xl font-bold text-signal-gold">{step.number}</span>
                </div>

                {/* Title */}
                <h3 className="font-sans font-bold text-xl text-concrete-light uppercase mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-concrete-light/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
