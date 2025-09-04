import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingShapes from '@/ui/FloatingShapes'

import ToasterProvider from '@/components/ToasterProvider'

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
        <Header />
          {children}  
          <ToasterProvider />
        <Footer />
      </body>
    </html>
  )
}