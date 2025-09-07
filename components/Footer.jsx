'use client'
import Link from "next/link";
import { useEffect, useState } from 'react';

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById('footer-scroll-anchor');
      if (!footer) return;
      const rect = footer.getBoundingClientRect();
      // Show button if footer is in or near viewport
      setShowScroll(rect.top < window.innerHeight && rect.bottom > 0);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHero = () => {
    const hero = document.getElementById('home');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer-scroll-anchor" className="py-6 px-1 border-t border-gray-800 relative">
      {showScroll && (
        <button
          onClick={scrollToHero}
          className="fixed bottom-8 right-8 z-50 bg-blue-800 hover:bg-blue-900
             text-white p-2 rounded-full shadow-lg 
              cursor-pointer"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
      <div className="container mx-auto text-center">
        <p className="text-gray-400 mb-4">
          &copy; 2025 Vishal Singh All rights reserved.
        </p>
        <p className="text-gray-500 text-sm">
          Built with ❤️ and lots of coffee
        </p>
        <p className="text-gray-500 text-sm mt-1">
          Powered by{' '}
          <Link
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors duration-300"
          >
            Next.js
          </Link>
        </p>
      </div>
    </footer>
  )
}