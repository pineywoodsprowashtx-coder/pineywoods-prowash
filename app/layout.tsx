import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, DM_Serif_Display, Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700']
})

const dmSerifDisplay = DM_Serif_Display({ 
  subsets: ["latin"],
  variable: '--font-dm-serif',
  weight: ['400'],
  style: ['normal', 'italic']
})

const spaceMono = Space_Mono({ 
  subsets: ["latin"],
  variable: '--font-space-mono',
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'Pineywoods ProWash | Professional Pressure Washing in East Texas',
  description: 'Restoring the oldest town in Texas. Professional pressure washing services for homes and businesses in Nacogdoches and surrounding areas.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#111111',
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
      <body className={`${spaceGrotesk.variable} ${dmSerifDisplay.variable} ${spaceMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
