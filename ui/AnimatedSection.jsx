import * as motion from "motion/react-client"

export default function AnimatedSection({ children }) {
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
  )
}
