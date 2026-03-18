import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { RegionalAuthority } from '@/components/regional-authority'
import { FAQ } from '@/components/faq'
import { ServiceArea } from '@/components/service-area'
import { QuoteForm } from '@/components/quote-form'
import { Footer } from '@/components/footer'


export default function Home() {
  return (
    <main className="min-h-screen bg-charcoal">
      <Navbar />
      <Hero />
      <Services />
      <RegionalAuthority />
      <FAQ />
      <ServiceArea />
      <QuoteForm />
      <Footer />
    </main>
  )
}
