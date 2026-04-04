import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { HowItWorks } from '@/components/how-it-works'
import { About } from '@/components/about'
import { ServiceArea } from '@/components/service-area'
import { QuoteForm } from '@/components/quote-form'
import { FAQ } from '@/components/faq'
import { Footer } from '@/components/footer'


export default function Home() {
  return (
    <main className="min-h-screen bg-concrete">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <About />
      <ServiceArea />
      <QuoteForm />
      <FAQ />
      <Footer />
    </main>
  )
}
