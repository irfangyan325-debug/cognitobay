import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-clash',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CognitoBay - Premier IT Solutions & Technology Services',
  description: 'CognitoBay delivers complete IT solutions including web development, mobile apps, AI, cloud services, cybersecurity, and digital marketing for startups, SMBs, and enterprises worldwide.',
  keywords: 'IT services, web development, mobile app development, AI solutions, cloud services, DevOps, cybersecurity, digital marketing, IT consulting, software development',
  authors: [{ name: 'CognitoBay' }],
  openGraph: {
    title: 'CognitoBay - Premier IT Solutions & Technology Services',
    description: 'Transform your business with world-class IT solutions. Expert web development, AI, cloud services, and more.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased px-4 md:px-10">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}