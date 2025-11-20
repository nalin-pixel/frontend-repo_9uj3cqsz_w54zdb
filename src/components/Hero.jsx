import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="home" className="relative h-[85vh] md:h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-slate-950/80 pointer-events-none" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white"
          >
            district 2nd
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-4 text-lg md:text-xl text-white/80"
          >
            A modern cafe inspired by photography, creativity, and technology. Crafted coffee, minimal design, and a relaxing vibe.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex gap-3"
          >
            <a href="#menu" className="rounded-lg bg-white px-5 py-3 text-slate-900 font-semibold hover:bg-white/90 transition">Explore Menu</a>
            <a href="#visit" className="rounded-lg border border-white/30 px-5 py-3 text-white hover:bg-white/10 transition">Visit Us</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
