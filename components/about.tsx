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
            <h2 className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-[#001F3F] uppercase tracking-tight">
              The &ldquo;Pineywoods ProWash&rdquo; Story
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Dark Navy Card */}
            <div className="bg-[#001F3F] border-l-[3px] border-l-[#FFD700] rounded-sm p-6 sm:p-8">
              <div className="space-y-5">
                <p className="font-sans text-base text-[#F5F4F2] leading-relaxed">
                Nacogdoches has been a part of my life as long as I can remember.
My mom was born and raised here.
I grew up in Houston, but I spent many summers here with my grandparents, surrounded by pine trees and the slower pace of East Texas.
                </p>
                
                <p className="font-sans text-base text-[#F5F4F2] leading-relaxed">
                In 2022, I came back to Nac when my family needed me most. 
                </p>
                
                <p className="font-sans text-base text-[#F5F4F2] leading-relaxed">
                That decision brought me home — and led me to build Pineywoods ProWash.
                </p>
                
                <div className="font-sans font-bold text-lg md:text-xl text-[#FFD700] leading-tight my-6 italic">
  <span className="block mb-2">I came home for my Mom.</span>
  <span className="block mb-2">I started this business.</span>
  <span className="block">And that's how Pineywoods ProWash was born.</span>
</div>
                
                <p className="font-sans text-base text-[#F5F4F2] leading-relaxed">
                  Today, I'm proud to serve the place that I call home.
                </p>
                <p className="font-sans text-base text-[#F5F4F2] leading-relaxed mt-4">
  Every job. Every time. That's the Pineywoods ProWash standard.
</p>
              </div>
            </div>

            {/* Owner Photo Placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] bg-[#001F3F] border-2 border-dashed border-[#FFD700] rounded-sm flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#5B8DB8]/20 flex items-center justify-center">
                    <svg 
                      className="w-12 h-12 text-[#5B8DB8]" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="font-mono text-sm text-[#5B8DB8] uppercase tracking-wider">
                    [ OWNER PHOTO — add in Cursor ]
                  </p>
                </div>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#FFD700]/40" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#FFD700]/40" />
            </div><p className="font-serif italic text-2xl text-[#001F3F] text-center mt-6">&ldquo;Cleaned Like I Live Here.&rdquo;</p>
          </div>
        </div>
      </div>
    </section>
  )
}
