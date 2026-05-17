"use client"

import AnimatedSection from '@/ui/AnimatedSection'

export default function About() {
  return (
    <AnimatedSection>
      <section id="about" className="py-30 px-6">
        <div className="container mx-auto text-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">About Me</h2>
          </div>
          <div className="flex flex-col gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                I’m Vishal Singh, a Computer Science graduate (CSE’24, AKTU) driven by curiosity, creativity, and the desire to solve problems
                through technology. With a strong foundation in Python, Next.js, and a deep enthusiasm for exploring AI tools,
                I am passionate about building solutions that merge intelligence with innovation.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                Throughout my journey, I’ve cultivated a mindset of continuous learning—whether it’s crafting efficient backend systems,
                experimenting with cutting-edge AI applications, or designing impactful web experiences.
                What excites me most is the ability of technology to transform ideas into scalable realities and empower people in ways once thought
                impossible.  I strongly believe in the power of collaboration, sharing knowledge, and building communities where technology isn’t just about code,
                but about impact. As I step into professional opportunities, I’m eager to contribute to innovative teams, grow alongside industry leaders,
                and make a meaningful mark in the world of AI and software development.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                🌱 Currently open to opportunities where I can leverage my skills in Python, AI, and web development while continuing to learn,
                innovate, and contribute to impactful projects.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                I know Nextjs in development of webapp integrating with SQL, NoSQL Dbs.
                Interest in exploring the genai tools like chatGPT, Gemini, Claude, MistralAI, Grok, Copilot, PerplexityAI.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                When I'm not coding, you'll find me exploring new technologies or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}
