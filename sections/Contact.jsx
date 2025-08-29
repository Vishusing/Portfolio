'use client'

import { openGmail, mobileNo } from '@/lib/utility_functions'

export default function Contact() {

  return (
    <section id="contact" className="py-35 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-5xl font-bold mb-6 text-gradient">
          Let's Work Together
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Ready to bring your ideas to life? Let's discuss
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            className='inline-flex items-center gap-2 font-semibold rounded-full transition-all duration-300 px-4 py-4 text-lg cursor-pointer
             bg-amber-50'
            onClick={() => openGmail()}
          >
            <svg className="w-5 h-5 bg-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-black">Get in touch</span>
          </button>
          <button
            className='inline-flex items-center gap-2 font-semibold rounded-full transition-all duration-300 border-2 border-purple-500
             hover:bg-purple-500 hover:scale-105 px-4 py-4 text-lg cursor-pointer'
            onClick={() => mobileNo()}
          >
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  )
}