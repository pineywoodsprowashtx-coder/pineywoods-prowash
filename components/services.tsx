'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog'

// Blueprint-style House Facade Icon
function HouseIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Roof */}
      <path d="M8 28L32 8L56 28" />
      {/* House body */}
      <rect x="12" y="28" width="40" height="28" />
      {/* Door */}
      <rect x="26" y="40" width="12" height="16" />
      {/* Windows */}
      <rect x="16" y="32" width="8" height="8" />
      <rect x="40" y="32" width="8" height="8" />
      {/* Window cross lines */}
      <line x1="20" y1="32" x2="20" y2="40" />
      <line x1="16" y1="36" x2="24" y2="36" />
      <line x1="44" y1="32" x2="44" y2="40" />
      <line x1="40" y1="36" x2="48" y2="36" />
      {/* Blueprint dimension lines */}
      <line x1="8" y1="60" x2="56" y2="60" strokeDasharray="2 2" />
      <line x1="8" y1="58" x2="8" y2="62" />
      <line x1="56" y1="58" x2="56" y2="62" />
    </svg>
  )
}

// Roof Gable with Soft Wash Application Icon
function RoofIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Roof gable */}
      <path d="M4 40L32 12L60 40" />
      <line x1="4" y1="40" x2="60" y2="40" />
      {/* Shingle lines */}
      <line x1="12" y1="36" x2="52" y2="36" />
      <line x1="18" y1="32" x2="46" y2="32" />
      <line x1="24" y1="28" x2="40" y2="28" />
      <line x1="28" y1="24" x2="36" y2="24" />
      {/* Soft wash spray pattern */}
      <path d="M48 8C48 8 52 14 52 18" strokeDasharray="2 2" />
      <path d="M52 8C52 8 56 16 54 22" strokeDasharray="2 2" />
      <path d="M50 6C50 6 58 18 54 26" strokeDasharray="2 2" />
      {/* Spray nozzle indicator */}
      <circle cx="50" cy="6" r="2" fill="currentColor" />
      {/* Droplets */}
      <circle cx="44" cy="20" r="1" fill="currentColor" />
      <circle cx="48" cy="24" r="1" fill="currentColor" />
      <circle cx="52" cy="28" r="1" fill="currentColor" />
    </svg>
  )
}

// Circular Surface Cleaner Tool Icon
function FlatworkIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Main circular cleaner */}
      <circle cx="32" cy="36" r="20" />
      <circle cx="32" cy="36" r="14" />
      <circle cx="32" cy="36" r="6" />
      {/* Rotation arrows */}
      <path d="M32 16C42 16 50 24 50 34" />
      <path d="M50 34L54 30" />
      <path d="M50 34L46 30" />
      {/* Handle/wand */}
      <line x1="32" y1="36" x2="32" y2="8" />
      <line x1="28" y1="8" x2="36" y2="8" />
      {/* Spray pattern inside */}
      <circle cx="26" cy="36" r="1" fill="currentColor" />
      <circle cx="38" cy="36" r="1" fill="currentColor" />
      <circle cx="32" cy="30" r="1" fill="currentColor" />
      <circle cx="32" cy="42" r="1" fill="currentColor" />
      {/* Surface line */}
      <line x1="4" y1="56" x2="60" y2="56" strokeDasharray="4 2" />
    </svg>
  )
}

type ServiceType = 'housewash' | 'roof' | 'flatwork' | null

const serviceData = {
  housewash: {
    title: 'HOUSE WASH',
    subtitle: 'Exterior Soft Wash System',
    description:

      `Restore your home’s beauty with our professional house washing. We use state-of-the-art equipment and specialized cleaning solutions to effectively remove stubborn stains and give your house a fresh, revitalized appearance.`,
    specs: ['Safe for all siding, paint and windows', 'Kills mold and algae at the root', 'Cleaning with science, not high pressure'],
    icon: HouseIcon,
  },
  roof: {
    title: 'ROOF CLEANING',
    subtitle: 'Dedicated Soft Wash Treatment',
    description:
      `Professional roof washing restores beauty and protects your investment. We eliminate moss and algae at the root, solving the problem for the long term and extending your roof’s lifespan with a dedicated soft wash treatment.`,
    specs: ['Safely removes those stubborn black streaks', 'Professional - grade chemical treatment - not just a rinse', 'Extends the lifespan of your shingles'],
    icon: RoofIcon,
  },
  flatwork: {
    title: 'CONCRETE & DRIVEWAY CLEANING',
    subtitle: 'PRO Grade Surface Cleaning',
    description:
      `Professional surface cleaning for driveways, walkways and patios. We effectively remove stubborn oil stains, dirt and algae from concrete and stone, restoring safety and curb appeal with a precision, high-grade clean.`,
    specs: ['Deep stain removal (Oil, dirt and grime)', 'Pre/post treatment for a longer lasting clean', 'Bright streak-free finish for curb appeal'],
    icon: FlatworkIcon,
  },
}

export function Services() {
  const [activeService, setActiveService] = useState<ServiceType>(null)

  const handleCardClick = (service: ServiceType) => {
    setActiveService(service)
  }

  const closeModal = () => {
    setActiveService(null)
  }

  return (
    <section id="services" className="relative py-24 bg-charcoal overflow-hidden">
      {/* Film grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-signal-yellow uppercase tracking-[0.3em] mb-4 block">
            // OUR CLEANING PROCESS
          </span>
          <h2 className="font-sans font-bold text-4xl md:text-5xl text-white mb-4">
            OUR SERVICES
          </h2>
          <p className="font-serif italic text-xl md:text-2xl text-concrete-gray">
            Pro cleaning tailored for East Texas homes.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {(Object.keys(serviceData) as Array<keyof typeof serviceData>).map((key) => {
            const service = serviceData[key]
            const IconComponent = service.icon
            return (
              <button
                key={key}
                onClick={() => handleCardClick(key)}
                className="group relative bg-charcoal border border-concrete-gray/30 rounded-lg p-8 text-left transition-all duration-300 hover:border-signal-yellow/50 hover:bg-charcoal/80 focus:outline-none focus:ring-2 focus:ring-signal-yellow/50"
              >
                {/* Icon */}
                <div className="mb-6">
                  <IconComponent className="w-16 h-16 text-signal-yellow transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Title */}
                <h3 className="font-sans font-bold text-xl text-white mb-2 group-hover:text-signal-yellow transition-colors">
                  {service.title}
                </h3>

                {/* Subtitle */}
                <p className="font-mono text-xs text-wave-blue-light uppercase tracking-wider mb-4">
                  {service.subtitle}
                </p>

                {/* Specs Preview */}
                <ul className="space-y-1">
                  {service.specs.map((spec, index) => (
                    <li
                      key={index}
                      className="font-mono text-xs text-concrete-gray flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-signal-yellow rounded-full" />
                      {spec}
                    </li>
                  ))}
                </ul>

                {/* Click indicator */}
                <div className="absolute bottom-4 right-4 font-mono text-[10px] text-concrete-gray/50 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  TAP FOR SPECS →
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Technical Spec Modal */}
      <Dialog open={activeService !== null} onOpenChange={(open) => !open && closeModal()}>
        {activeService && (
          <DialogContent
            showCloseButton={false}
            className="bg-charcoal border border-signal-yellow text-white max-w-lg"
          >
            <DialogHeader>
              <div className="flex items-center gap-4 mb-2">
                {(() => {
                  const IconComponent = serviceData[activeService].icon
                  return <IconComponent className="w-12 h-12 text-signal-yellow" />
                })()}
                <div>
                  <DialogTitle className="font-sans font-bold text-2xl text-white">
                    {serviceData[activeService].title}
                  </DialogTitle>
                  <span className="font-mono text-xs text-wave-blue-light uppercase tracking-wider">
                    {serviceData[activeService].subtitle}
                  </span>
                </div>
              </div>
            </DialogHeader>

            <DialogDescription className="font-mono text-sm text-concrete-gray leading-relaxed">
              {serviceData[activeService].description}
            </DialogDescription>

            {/* Technical Specs */}
            <div className="border-t border-concrete-gray/30 pt-4 mt-2">
              <span className="font-mono text-[10px] text-wave-blue-light uppercase tracking-[0.2em] mb-3 block">
                // TECHNICAL_SPECS
              </span>
              <ul className="grid grid-cols-1 gap-2">
                {serviceData[activeService].specs.map((spec, index) => (
                  <li
                    key={index}
                    className="font-mono text-xs text-white flex items-center gap-3 bg-charcoal/50 border border-concrete-gray/20 rounded px-3 py-2"
                  >
                    <span className="w-2 h-2 bg-signal-yellow rounded-full flex-shrink-0" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            <DialogFooter className="mt-6 flex-col sm:flex-row gap-3">
              <button
                onClick={closeModal}
                className="px-6 py-3 font-mono text-xs uppercase tracking-wider text-concrete-gray border border-concrete-gray/50 rounded hover:border-white hover:text-white transition-colors"
              >
                CLOSE
              </button>
              <button 
              onClick={() => { closeModal(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}className="px-6 py-3 font-mono text-xs uppercase tracking-wider bg-signal-yellow text-charcoal rounded font-bold hover:bg-signal-yellow/90 transition-colors">
                GET A QUOTE
              </button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </section>
  )
}
