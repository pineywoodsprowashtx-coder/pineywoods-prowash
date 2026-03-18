"use client"

import { useState } from 'react'

const services = [
  { id: 'housewash', label: 'House Wash' },
  { id: 'roof', label: 'Roof Cleaning' },
  { id: 'flatwork', label: 'Flatwork / Driveway' },
  { id: 'gutters', label: 'Gutter Cleaning' },
  { id: 'commercial', label: 'Commercial Services' },
  { id: 'other', label: 'Other / Multiple' },
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
    
    // This is the "Brain" that sends the email
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "22dc5418-f6b5-4be2-826c-1712a32ae13d", // PASTE YOUR KEY HERE AGAIN
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
    <section id="contact" className="relative py-24 bg-concrete-gray/20 overflow-hidden">
      {/* Film Grain */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNuKSIvPjwvc3ZnPg==')]" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-mono text-xs text-signal-yellow tracking-[0.3em] uppercase">
            // DISPATCH_TERMINAL
          </span>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative bg-charcoal/90 backdrop-blur-sm rounded-[2.5rem] p-8 sm:p-12 border border-wave-blue-dark/30 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]">
            
            <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-signal-yellow/40" />
            <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-signal-yellow/40" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-signal-yellow/40" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-signal-yellow/40" />

            {isSubmitted ? (
              <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="text-6xl mb-6 flex justify-center">✅</div>
                <h3 className="font-sans font-bold text-2xl text-white uppercase tracking-tight mb-2">Request Transmitted</h3>
                <p className="font-mono text-sm text-concrete-gray">We'll be in touch shortly.</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-10">
                  <h2 className="font-sans font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight mb-3">
                    REQUEST A FREE QUOTE
                  </h2>
                  <p className="font-mono text-xs sm:text-sm text-concrete-gray">
                    Fill out the form below and we'll get you CLEANED. RESTORED. PROTECTED.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block font-mono text-xs text-wave-blue-light uppercase tracking-wider mb-2">
                      [FIELD_01] NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-charcoal border border-concrete-gray/30 rounded-lg px-4 py-3 font-sans text-white placeholder:text-concrete-gray/50 focus:outline-none focus:border-signal-yellow/50 transition-colors"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block font-mono text-xs text-wave-blue-light uppercase tracking-wider mb-2">
                      [FIELD_02] PHONE
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-charcoal border border-concrete-gray/30 rounded-lg px-4 py-3 font-sans text-white placeholder:text-concrete-gray/50 focus:outline-none focus:border-signal-yellow/50 transition-colors"
                      placeholder="(936) 555-1234"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-mono text-xs text-wave-blue-light uppercase tracking-wider mb-2">
                      [FIELD_03] EMAIL
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-charcoal border border-concrete-gray/30 rounded-lg px-4 py-3 font-sans text-white placeholder:text-concrete-gray/50 focus:outline-none focus:border-signal-yellow/50 transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block font-mono text-xs text-wave-blue-light uppercase tracking-wider mb-2">
                      [FIELD_04] ADDRESS
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-charcoal border border-concrete-gray/30 rounded-lg px-4 py-3 font-sans text-white placeholder:text-concrete-gray/50 focus:outline-none focus:border-signal-yellow/50 transition-colors"
                      placeholder="123 Main St,  Anytown, TX"
                      required
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block font-mono text-xs text-wave-blue-light uppercase tracking-wider mb-2">
                      [FIELD_05] SERVICE INTERESTED IN
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-charcoal border border-concrete-gray/30 rounded-lg px-4 py-3 font-sans text-white focus:outline-none focus:border-signal-yellow/50 transition-colors appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 1rem center',
                        backgroundSize: '1.5rem',
                      }}
                      required
                    >
                      <option value="" disabled>Select a service...</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id} className="bg-charcoal">
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Anything Else */}
                  <div>
                    <label className="block font-mono text-xs text-wave-blue-light uppercase tracking-wider mb-2">
                      [FIELD_06] ANYTHING ELSE WE SHOULD KNOW?
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-charcoal border border-concrete-gray/30 rounded-lg px-4 py-3 font-sans text-white placeholder:text-concrete-gray/50 focus:outline-none focus:border-signal-yellow/50 transition-colors resize-none"
                      placeholder="e.g., House is two stories, driveway needs cleaning..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="group relative w-full mt-8 px-8 py-5 bg-signal-yellow text-charcoal font-sans font-bold text-lg uppercase tracking-wider overflow-hidden rounded-full transition-all hover:shadow-[0_0_30px_-5px_#F2C94C]"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      SEND REQUEST
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </button>
                </form>
              </>
            )}

            <div className="mt-6 text-center">
              <p className="font-mono text-[10px] text-concrete-gray/60 uppercase tracking-wider">
                [ENCRYPTED] Your data is protected and never shared
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}