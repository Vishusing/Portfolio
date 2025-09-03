'use client';
import Typewriter from 'typewriter-effect';
import { downloadResume } from '@/lib/utility_functions'
import { socialLinks } from '@/lib/social_media_icons';

export default function Hero() {

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-float">
          <h1 className=" flex justify-center gap-2 text-2xl md:text-5xl font-black mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="text-gradient">
              <Typewriter
                options={{
                  strings: ['Vishal Singh', 'Vishu'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Python, AI Tools Enthusiast
          </p>
        </div>

        <button
          className="inline-flex items-center gap-2 font-semibold rounded-full transition-all duration-300 px-4 py-4 text-lg cursor-pointer bg-amber-50 mb-8"
          onClick={downloadResume}
        >
          <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-black">Download Resume</span>
        </button>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}