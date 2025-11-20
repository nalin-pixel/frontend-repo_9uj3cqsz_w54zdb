import { motion } from 'framer-motion'
import { Coffee, Camera, Wifi, Leaf } from 'lucide-react'

const items = [
  {
    icon: Coffee,
    title: 'Signature Brews',
    desc: 'Carefully sourced beans, roasted to perfection. Espresso, pour-over, and cold brew crafted with precision.'
  },
  {
    icon: Camera,
    title: 'Creative Ambience',
    desc: 'A minimalist space inspired by cameras and creativity — perfect for creators and conversations.'
  },
  {
    icon: Wifi,
    title: 'Fast Wi‑Fi',
    desc: 'Seamless connectivity for remote work and casual browsing.'
  },
  {
    icon: Leaf,
    title: 'Sustainable Choices',
    desc: 'Eco‑friendly packaging and locally sourced ingredients wherever possible.'
  }
]

function Features() {
  return (
    <section id="story" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_0%,rgba(255,255,255,0.06),transparent_60%),radial-gradient(600px_circle_at_80%_0%,rgba(96,165,250,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">What makes us different</h2>
          <p className="mt-3 text-white/70">Minimalist design. Thoughtful service. A place where great coffee meets creative energy.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-lg backdrop-blur-sm"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
