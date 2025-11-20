import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import MenuShowcase from './components/MenuShowcase'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <MenuShowcase />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
