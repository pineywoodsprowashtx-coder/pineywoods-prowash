'use client'

import { useState } from 'react'

const services = [
  { id: 'housewash', label: 'House Wash' },
  { id: 'concrete', label: 'Concrete Cleaning' },
  { id: 'gutters', label: 'Gutter Cleaning' },
  { id: 'roof-waitlist', label: 'Roof Cleaning Waitlist' },
  { id: 'other', label: 'Other' },
]

export function QuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    notes: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "22dc5418-f6b5-4be2-826c-1712a32ae13d",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          service: formData.service,
          notes: formData.notes,
          subject: `NEW LEAD: ${formData.name} - Pineywoods ProWash`,
          from_name: "Pineywoods Website"
        }),
      })

      const result = await response.json()
      if (result.success) {
        setIsSubmitted(true)
      } else {
        alert("Transmission Error. Please check your Key.")
      }
    } catch (err) {
      console.error(err)
      alert("Connection failed. Check your internet.")
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-concrete overflow-hidden">
      {/* Film Grain */}
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
            REQUEST A FREE QUOTE
          </h2>
          <p className="font-serif italic text-[#5B8DB8] text-base md:text-lg mt-3 max-w-xl mx-auto font-medium">
  No pressure, no obligation — just tell us what you need and we&apos;ll get back to you within 24 hours.
</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative bg-concrete-light rounded-sm p-8 sm:p-12 border border-wave-blue-mid/20 shadow-sm">
            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-signal-gold/40" />
            <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-signal-gold/40" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-signal-gold/40" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-signal-gold/40" />

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-signal-gold/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-signal-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-sans font-bold text-2xl text-deep-navy uppercase tracking-tight mb-2">
                  Request Transmitted
                </h3>
                <p className="font-mono text-sm text-deep-navy/60">
                  We&apos;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block font-sans font-bold text-sm text-deep-navy uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-concrete border border-wave-blue-mid/30 rounded-sm px-4 py-3 font-sans text-deep-navy placeholder:text-deep-navy/40 focus:outline-none focus:border-signal-gold/50 transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block font-sans font-bold text-sm text-deep-navy uppercase tracking-wider mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-concrete border border-wave-blue-mid/30 rounded-sm px-4 py-3 font-sans text-deep-navy placeholder:text-deep-navy/40 focus:outline-none focus:border-signal-gold/50 transition-colors"
                    placeholder="(903) 392-0818"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block font-sans font-bold text-sm text-deep-navy uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-concrete border border-wave-blue-mid/30 rounded-sm px-4 py-3 font-sans text-deep-navy placeholder:text-deep-navy/40 focus:outline-none focus:border-signal-gold/50 transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block font-sans font-bold text-sm text-deep-navy uppercase tracking-wider mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-concrete border border-wave-blue-mid/30 rounded-sm px-4 py-3 font-sans text-deep-navy placeholder:text-deep-navy/40 focus:outline-none focus:border-signal-gold/50 transition-colors"
                    placeholder="123 Main St, TX"
                    required
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block font-sans font-bold text-sm text-deep-navy uppercase tracking-wider mb-2">
                    Service
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-concrete border border-wave-blue-mid/30 rounded-sm px-4 py-3 font-sans text-deep-navy focus:outline-none focus:border-signal-gold/50 transition-colors appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23001F3F'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      backgroundSize: '1.5rem',
                    }}
                    required
                  >
                    <option value="" disabled>Select a service...</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id} className="bg-concrete-light">
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block font-sans font-bold text-sm text-deep-navy uppercase tracking-wider mb-2">
                    Additional Information
                  </label>
                  <textarea
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-concrete border border-wave-blue-mid/30 rounded-sm px-4 py-3 font-sans text-deep-navy placeholder:text-deep-navy/40 focus:outline-none focus:border-signal-gold/50 transition-colors resize-none"
                    placeholder="Please include property details: number of stories, specific areas of concern (algae/oil), or any delicate surfaces"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group relative w-full mt-8 px-8 py-5 bg-signal-gold text-deep-navy font-sans font-bold text-lg uppercase tracking-wider overflow-hidden rounded-lg transition-all hover:shadow-[0_0_30px_-5px_rgba(255,215,0,0.5)]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    SEND REQUEST
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-signal-gold-hover translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
              </form>
            )}

            <div className="mt-6 text-center">
              <p className="font-mono text-[10px] text-deep-navy/40 uppercase tracking-wider">
                [DATA PROTECTED]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
