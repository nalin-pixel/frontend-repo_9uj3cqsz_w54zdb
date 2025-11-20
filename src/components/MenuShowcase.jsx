import { motion } from 'framer-motion'

const menu = [
  { name: 'Espresso', price: '$3.5', desc: 'Rich and intense single shot.' },
  { name: 'Flat White', price: '$4.5', desc: 'Velvety microfoam over espresso.' },
  { name: 'Pour-over', price: '$5', desc: 'Clean, aromatic, hand-brewed.' },
  { name: 'Cold Brew', price: '$5.5', desc: 'Slow-steeped, smooth and bold.' },
]

function MenuShowcase() {
  return (
    <section id="menu" className="relative bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_50%_120%,rgba(96,165,250,0.1),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Menu Highlights</h2>
          <p className="mt-3 text-white/70">A few favorites to get you started. Full menu available in store.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {menu.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-lg backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <span className="rounded-md bg-white/10 px-3 py-1 text-sm">{item.price}</span>
              </div>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuShowcase
