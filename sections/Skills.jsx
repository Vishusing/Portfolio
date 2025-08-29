import Image from 'next/image'

export default function Skills() {
  const skills = [
    { name: 'Python', icon: '/python.png' },
    { name: 'MongoDB', icon: '/mongodb.png' },
    { name: 'MySQL', icon: '/mysql.png' },
    { name: 'Next.js', icon: '/nextjs.png' },
  ]

  return (
    <section className="py-30 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">
            Skills & Technologies
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-20">
            {skills.map((skill, index) =>
            (<div
              key={index}
              className='text-center cursor-pointer'
            >
              <div className="text-2xl mb-3">
                <Image src={skill.icon} alt={skill.name} width={100} height={100} />
              </div>
              <div className="text-sm font-medium">{skill.name}</div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}