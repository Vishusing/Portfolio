"use client";

import Navigation from './Navigation'

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-[5px]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between md:justify-around">
          {/* Portfolio name: left on desktop, right on mobile */}
          <div className="text-2xl font-bold text-gradient ml-0 md:ml-0 order-2 md:order-1">
            Portfolio
          </div>
          {/* Navigation: right on desktop, left on mobile */}
          <div className="order-1 md:order-2">
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  )
}