import FloatingShapes from '@/ui/FloatingShapes'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MainLayout({ children }) {
  return (
    <main className="relative">
      <FloatingShapes />
      <Header />
      {children}
      <Footer />
    </main>
  )
}
