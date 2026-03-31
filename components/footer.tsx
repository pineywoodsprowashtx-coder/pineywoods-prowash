export function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { label: 'SERVICES', href: '#services' },
    { label: 'ABOUT', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'SERVICE AREA', href: '#service-area' },
  ]

  return (
    <footer className="relative bg-charcoal border-t border-concrete-gray/20 overflow-hidden">
      {/* Film Grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')]" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Branding Column */}
          <div className="space-y-6">
            {/* Logo Text */}
            <div className="flex items-center gap-3">
              <img src="/logo.svg" alt="Pineywoods ProWash" className="h-12 w-auto" />
              <div>
                <span className="font-sans font-bold text-xl text-white tracking-tight">
                  PINEYWOODS{' '}
                </span>
                <span className="font-serif italic text-xl text-signal-yellow">
                  ProWash
                </span>
              </div>
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-charcoal border border-concrete-gray/30 rounded-lg">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wave-blue-light opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-wave-blue-light" />
              </span>
              <span className="font-mono text-xs text-wave-blue-light uppercase tracking-wider">
                SYSTEM OPERATIONAL
              </span>
            </div>

            {/* Tagline */}
            <p className="font-mono text-xs text-concrete-gray max-w-xs">
            Supporting our Veterans, First Responders and Seniors with Special Pricing
            </p>
          </div>

          {/* Navigation Column */}
          <div className="space-y-6">
            <span className="font-mono text-xs text-signal-yellow tracking-[0.3em] uppercase">
              // NAVIGATION
            </span>
            <nav className="flex flex-wrap gap-x-6 gap-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-mono text-sm text-concrete-gray hover:text-signal-yellow transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <span className="font-mono text-xs text-signal-yellow tracking-[0.3em] uppercase">
              // CALL_HQ
            </span>
            
            {/* Phone Box */}
            <a 
              href="tel:9033920818"
              className="group flex items-center gap-4 px-5 py-4 bg-signal-yellow rounded-xl hover:bg-signal-yellow-hover hover:shadow-[0_0_40px_rgba(245,194,0,0.4)] transition-all duration-300"
            >
              {/* Phone Icon */}
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-charcoal/10 rounded-lg transition-colors">
                <svg className="w-6 h-6 text-charcoal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-mono text-[10px] text-charcoal/70 uppercase tracking-wider mb-1">
                  Direct Line
                </p>
                <p className="font-sans font-bold text-xl text-charcoal transition-colors">
                  (903) 392-0818
                </p>
              </div>
            </a>

            {/* Hours */}
            <div className="font-mono text-xs text-concrete-gray/70">
              <span className="text-wave-blue-light">[HOURS]</span> Mon-Fri: 8AM - 5PM
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-concrete-gray/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-concrete-gray/70 mb-2">
  Serving Nacogdoches, Lufkin & East Texas Pineywoods
</p>
            <p className="font-mono text-xs text-concrete-gray/50">
              © {currentYear} PINEYWOODS PROWASH. ALL RIGHTS RESERVED.
            </p>
            <p className="font-mono text-[10px] text-concrete-gray/40 uppercase tracking-wider">
              [SYS_VER: 3.0.1] • Nacogdoches, TX
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}