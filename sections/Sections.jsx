import * as motion from "motion/react-client"

import Hero from './Hero'
import Skills from './Skills'
import Contact from './Contact'


function AnimatedSection({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true, amount: 0.3 }}
      className="mb-20"
    >
      {children}
    </motion.div>
  );
}


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
    </>
  )
}
