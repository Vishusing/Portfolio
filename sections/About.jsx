"use client";

export default function About() {
  const stats = [
    { number: '1.6k+', label: 'LinkedIn Connections', color: 'text-purple-400' },
    { number: '<1', label: 'Years Experience', color: 'text-blue-400' },
  ]

  return (
    <section id="about" className="py-30 px-6">
      <div className="container mx-auto text-center">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Graduated in Computer Science & Engineering from Abdul Kalam Technical University (A.K.T.U) 2024
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed text-lg">
              I know Nextjs in development of webapp integrating with SQL, NoSQL Dbs.
              Interest in exploring the genai tools like chatGPT, Gemini, Claude, MistralAI, Grok, Copilot, PerplexityAI.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              When I'm not coding, you'll find me exploring new technologies or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (<div key={index}>
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}