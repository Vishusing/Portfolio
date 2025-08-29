"use client";

import Navigation from './Navbar'

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-[5px]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gradient">Portfolio</div>
          <Navigation />
        </div>
      </div>
    </header>
  )
}