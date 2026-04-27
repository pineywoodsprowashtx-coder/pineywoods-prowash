'use client'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { label: 'SERVICES', href: '#services' },
    { label: 'COST ESTIMATOR', href: '#cost-estimator' },
    { label: 'ABOUT', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'SERVICE AREA', href: '#service-area' },
  ]

  return (
    <footer className="relative bg-deep-navy overflow-hidden">
      {/* Film Grain */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Branding Column */}
          <div className="space-y-6">
            {/* Logo Text */}
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="Pineywoods ProWash" className="h-12 w-auto" />
              <div>
                <span className="font-sans font-bold text-xl text-concrete-light tracking-tight">
                  PINEYWOODS{' '}
                </span>
                <span className="font-serif italic text-xl text-signal-gold">
                  ProWash
                </span>
              </div>
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-deep-navy border border-wave-blue-mid/30 rounded-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-gold opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-signal-gold" />
              </span>
              <span className="font-mono text-xs text-signal-gold uppercase tracking-wider">
                SYSTEM OPERATIONAL
              </span>
            </div>

            {/* Special Pricing Note */}
            <p className="font-sans text-sm text-concrete-light/70 max-w-xs">
              Supporting our Veterans, First Responders and Seniors with Special Pricing
            </p>
          </div>

          {/* Navigation Column */}
          <div className="space-y-6">
            <span className="font-sans font-bold text-sm text-signal-gold uppercase tracking-wider">
              Navigation
            </span>
            <nav className="flex flex-wrap gap-x-6 gap-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans text-sm text-concrete-light/70 hover:text-signal-gold transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <span className="font-sans font-bold text-sm text-signal-gold uppercase tracking-wider">
              Contact
            </span>

            {/* Phone Box */}
            <a
              href="tel:+19033920818"
              className="group flex items-center gap-4 px-5 py-4 bg-signal-gold rounded-lg hover:bg-signal-gold-hover hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] transition-all duration-300"
            >
              {/* Phone Icon */}
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-deep-navy/10 rounded-sm transition-colors">
                <svg className="w-6 h-6 text-deep-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-mono text-[10px] text-deep-navy/70 uppercase tracking-wider mb-1">
                  Direct Line
                </p>
                <p className="font-sans font-bold text-xl text-deep-navy transition-colors">
                  (903) 392-0818
                </p>
              </div>
            </a>

            {/* Hours */}
            <div className="font-sans text-sm text-concrete-light/70">
              <span className="text-wave-blue-mid">Hours:</span> Mon-Fri: 9AM - 5PM
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-wave-blue-mid/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-sans text-sm text-concrete-light/60">
              Serving Nacogdoches, Lufkin & East Texas Pineywoods
            </p>
            <p className="font-mono text-xs text-concrete-light/40 uppercase">
              &copy; {currentYear} PINEYWOODS PROWASH. ALL RIGHTS RESERVED. NACOGDOCHES, TX
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
