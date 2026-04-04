import type { Metadata, Viewport } from 'next'
import { Barlow_Condensed, Playfair_Display, Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const barlowCondensed = Barlow_Condensed({ 
  subsets: ["latin"],
  variable: '--font-barlow-condensed',
  weight: ['400', '500', '600', '700']
})

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic']
})

const spaceMono = Space_Mono({ 
  subsets: ["latin"],
  variable: '--font-space-mono',
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'Pineywoods ProWash | Professional Pressure Washing in East Texas',
  description: 'Professional soft wash and pressure washing in Nacogdoches, TX. House washing, concrete cleaning, and gutter cleaning for East Texas homes.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#E5E4E2',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${barlowCondensed.variable} ${playfairDisplay.variable} ${spaceMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
