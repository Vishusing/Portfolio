"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Header component renders a fixed header with portfolio branding
 * and a responsive navigation bar with Home, About, and Contact links.
 * The Contact button is only shown on the Home page. The navigation
 * adapts for desktop and mobile, with a side drawer for mobile.
 */
export default function Navbar() {
  // State to control mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State to control visibility of the Contact button
  const [showContact, setShowContact] = useState(true);

  const router = useRouter();

  // Navigation items always present
  const baseNavItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
  ];
  // Contact navigation item (conditionally rendered)
  const contactNavItem = { name: 'Contact', href: '#contact' };

  /**
   * Handles navigation logic for all nav items.
   * - Navigates to Home or About using router.push.
   * - Shows Contact button only on Home.
   * - Scrolls to Contact section for Contact button.
   * - Closes mobile menu after navigation.
   */
  const handleNavClick = (href) => {
    if (href === '/') {
      setShowContact(true); // Show Contact on Home
      router.push(href);
    } else if (href === '/about') {
      setShowContact(false); // Hide Contact on About
      router.push(href);
    } else if (href === '#contact') {
      // Scroll to contact section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Always close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-[5px]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between md:justify-around">
          {/* Portfolio name: left on desktop, right on mobile */}
          <Link
            href="/"
            className="text-2xl cursor-pointer font-bold text-gradient ml-0 md:ml-0 order-2 md:order-1"
          >
            Portfolio
          </Link>
          
          {/* Navigation: right on desktop, left on mobile */}
          <div className="order-1 md:order-2">
            {/* Desktop Navigation Bar */}
            <nav className="hidden md:flex space-x-8">
              {baseNavItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="hover:text-purple-400 cursor-pointer transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
              {/* Conditionally render Contact button */}
              {showContact && (
                <button
                  key={contactNavItem.name}
                  onClick={() => handleNavClick(contactNavItem.href)}
                  className="hover:text-purple-400 cursor-pointer transition-colors duration-300"
                >
                  {contactNavItem.name}
                </button>
              )}
            </nav>

            {/* Mobile Menu Button (Hamburger Icon) */}
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

      {/* Mobile Side Drawer Menu */}
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
          {/* Close button for mobile menu */}
          <button
            className="absolute top-4 right-4 text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {/* Render navigation items */}
          {baseNavItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className="text-left hover:text-purple-400 transition-colors duration-300 text-lg"
            >
              {item.name}
            </button>
          ))}
          {/* Conditionally render Contact button */}
          {showContact && (
            <button
              key={contactNavItem.name}
              onClick={() => handleNavClick(contactNavItem.href)}
              className="text-left hover:text-purple-400 transition-colors duration-300 text-lg"
            >
              {contactNavItem.name}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}