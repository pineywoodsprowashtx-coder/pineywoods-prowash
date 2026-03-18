"use client"

import { useState } from "react"

const faqItems = [
  {
    id: "FAQ_01",
    question: "Is pressure washing safe for my home's siding?",
    answer:
      "Absolutely. We use a 'soft wash' technique for delicate surfaces like siding and shingles. This uses low pressure and specialized cleaning solutions to kill mold and algae without risking damage to your home.",
  },
  {
    id: "FAQ_02",
    question: "How often should I have my driveway cleaned?",
    answer:
      "For the best curb appeal and to prevent permanent staining, we recommend a professional cleaning once a year. However, homes with heavy tree cover may benefit from every 6 months.",
  },
  {
    id: "FAQ_03",
    question: "Are your cleaning solutions safe for my plants and pets?",
    answer:
      "Yes! We use eco-friendly, biodegradable professional-grade cleaners. We also pre-wet and post-rinse all surrounding vegetation to ensure your landscaping stays healthy.",
  },
  {
    id: "FAQ_04",
    question: "Do I need to be home during the service?",
    answer:
      "No, as long as we have access to a working water spigot and all windows/doors are closed, you don't need to be present. We'll send you a text when we're finished!",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative py-24 bg-charcoal overflow-hidden">
      {/* Film Grain Overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-signal-yellow uppercase tracking-[0.3em] mb-4 block">
            {"// SUPPORT_DOCUMENTATION"}
          </span>
          <h2 className="font-sans font-bold text-4xl sm:text-5xl text-white uppercase tracking-tight">
            Common Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={item.id}
                className={`
                  bg-charcoal border rounded-lg overflow-hidden
                  transition-all duration-300 ease-out
                  ${isOpen ? "border-signal-yellow" : "border-concrete-gray/30"}
                `}
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left group"
                >
                  <div className="flex items-center gap-4">
                    {/* Technical ID Label */}
                    <span className="font-mono text-xs text-signal-yellow tracking-wider shrink-0">
                      [{item.id}]
                    </span>
                    {/* Question Text */}
                    <span className="font-sans font-medium text-base sm:text-lg text-white group-hover:text-signal-yellow transition-colors duration-200">
                      {item.question}
                    </span>
                  </div>

                  {/* Plus/Minus Toggle */}
                  <div
                    className={`
                      shrink-0 w-8 h-8 flex items-center justify-center
                      border rounded transition-all duration-300
                      ${isOpen ? "border-signal-yellow bg-signal-yellow/10" : "border-concrete-gray/50"}
                    `}
                  >
                    <span className="font-mono text-xl text-signal-yellow leading-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>
                </button>

                {/* Answer Content */}
                <div
                  className={`
                    overflow-hidden transition-all duration-300 ease-out
                    ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <div className="px-5 pb-5 pt-0">
                    <div className="pl-[calc(3.5rem+1rem)] border-l border-concrete-gray/20 ml-2">
                      <p className="font-sans text-concrete-gray leading-relaxed text-sm sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="font-mono text-xs text-concrete-gray uppercase tracking-widest mb-4">
            {"// ADDITIONAL_INQUIRIES"}
          </p>
          <p className="font-sans text-white mb-6">
            Have a question not listed here?
          </p>
          <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-signal-yellow text-charcoal font-sans font-bold uppercase tracking-wider rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,194,0,0.4)]">
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  )
}
