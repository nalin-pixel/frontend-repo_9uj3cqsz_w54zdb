import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=1600&auto=format&fit=crop',
    alt: 'Minimal coffee setup',
  },
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop',
    alt: 'Pour-over coffee',
  },
  {
    src: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1600&auto=format&fit=crop',
    alt: 'Cafe interior minimal',
  },
  {
    src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1600&auto=format&fit=crop',
    alt: 'Barista crafting coffee',
  },
]

function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section id="gallery" className="relative bg-slate-950 py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Gallery</h2>
          <p className="mt-3 text-white/70">Snapshots from our space — where coffee meets creativity.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {images.map((img, i) => (
            <motion.button
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setActive(img)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img src={img.src} alt={img.alt} className="h-56 w-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-black/80 p-6"
            onClick={() => setActive(null)}
          >
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              src={active.src}
              alt={active.alt}
              className="max-h-[80vh] w-auto rounded-xl shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
