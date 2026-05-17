import AnimatedSection from '@/ui/AnimatedSection'
import Hero from './Hero'
import Skills from './Skills'
import Contact from './Contact'
import ContactForm from '@/components/ContactForm'

export default function Sections() {
  return (
    <>
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection>
        <Skills />
      </AnimatedSection>
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
      <AnimatedSection>
        <ContactForm />
      </AnimatedSection>
    </>
  )
}
