"use client"

import Link from 'next/link'
import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const showContact = pathname !== '/about'

  const handleNavClick = (href) => {
    if (href === '/' || href === '/about') {
      router.push(href)
    } else if (href === '#contact') {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    ...(showContact ? [{ label: 'Contact', href: '#contact' }] : []),
  ]

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-[5px]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between md:justify-around">
          <Link
            href="/"
            className="text-2xl cursor-pointer font-bold text-gradient order-2 md:order-1"
          >
            Portfolio
          </Link>

          <div className="order-1 md:order-2">
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="hover:text-purple-400 cursor-pointer transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center md:hidden w-full">
              <button
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Open menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`
          fixed top-0 left-0 h-screen z-50 md:hidden
          transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          w-3/4 max-w-xs backdrop-blur-md bg-black
          will-change-transform
        `}
      >
        <div className="flex flex-col space-y-4 p-6 pt-16 relative h-full">
          <button
            className="absolute top-4 right-4 text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-left hover:text-purple-400 transition-colors duration-300 text-lg"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
