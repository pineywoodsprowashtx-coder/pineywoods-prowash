'use client'

import { useState } from 'react'

const faqItems = [
  {
    id: 'FAQ_01',
    question: "Is pressure washing safe for my home's siding?",
    answer:
      "Absolutely. We use a soft wash technique for delicate surfaces like siding and shingles. This uses low pressure and specialized cleaning solutions to kill mold and algae without risking damage to your home.",
  },
  {
    id: 'FAQ_02',
    question: "How often should I have my driveway cleaned?",
    answer:
      "For the best curb appeal and to prevent permanent staining, we recommend a professional cleaning once a year. However, homes with heavy tree cover may benefit from every 8 months.",
  },
  {
    id: 'FAQ_03',
    question: "Are your cleaning solutions safe for my plants?",
    answer:
      "We treat your landscaping like our own. Our solutions kill algae at the root but require expert handling. We follow a rigorous Plant Protection Protocol: pre-soaking foliage, applying specialized neutralizers and finishing with a deep fresh-water rinse. Your home gets a deep clean and your plants stay green and healthy.",
  },
  {
    id: 'FAQ_04',
    question: "Do I need to be home during the service?",
    answer:
      "No, as long as we have access to a working water spigot and all windows and doors are closed, you don't need to be present. We'll send you a text when we're finished!",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative py-24 bg-concrete-light overflow-hidden">
      {/* Film Grain Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-4xl sm:text-5xl text-deep-navy uppercase tracking-tight">
            FAQ
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className={`
                  bg-[#001F3F] rounded-sm overflow-hidden
                  transition-all duration-300 ease-out
                  ${isOpen ? 'border border-[#FFD700]' : 'border border-[#FFD700]/30'}
                `}
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left group"
                >
                  <div className="flex items-center gap-4">
                    {/* FAQ Label */}
                    <span className="font-mono text-xs text-[#5B8DB8] uppercase tracking-wider shrink-0">
                      {item.id}
                    </span>
                    <span className="font-sans font-bold text-base sm:text-lg text-[#F5F4F2] group-hover:text-[#FFD700] transition-colors duration-200">
                      {item.question}
                    </span>
                  </div>

                  {/* Plus/Minus Toggle */}
                  <div
                    className={`
                      shrink-0 w-8 h-8 flex items-center justify-center
                      rounded-sm transition-all duration-300
                      bg-[#FFD700]
                    `}
                  >
                    <span className="font-mono text-xl text-[#001F3F] leading-none font-bold">
                      {isOpen ? '-' : '+'}
                    </span>
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  className={`
                    overflow-hidden transition-all duration-300 ease-out
                    ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="px-5 pb-5 pt-0 pl-[4.5rem]">
                    <p className="font-sans text-[#E5E4E2] leading-relaxed text-sm sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="font-sans text-deep-navy mb-6">
            Have a question not listed here?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-signal-gold text-deep-navy font-sans font-bold uppercase tracking-wider rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,215,0,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              CONTACT US
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-signal-gold-hover translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  )
}
