import { Inter } from 'next/font/google'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingShapes from '@/ui/FloatingShapes'
import ToasterProvider from '@/ui/ToasterProvider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vishal Singh - Portfolio',
  description: 'Full-Stack Developer & UI/UX Designer crafting digital experiences that inspire and engage',
  keywords: 'developer, portfolio, react, nextjs, fullstack, genai, Artificial Intelligence',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <FloatingShapes />
        <Navbar />
        {children}
        <ToasterProvider />
        <Footer />
      </body>
    </html>
  )
}