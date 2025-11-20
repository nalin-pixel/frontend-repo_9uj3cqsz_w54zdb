import { useState } from 'react'
import { Menu, X, Coffee, Camera } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#story', label: 'Our Story' },
    { href: '#menu', label: 'Menu' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#visit', label: 'Visit' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-md px-4 py-3">
          <a href="#home" className="group inline-flex items-center gap-2">
            <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-amber-400 to-rose-500 text-white shadow-lg ring-1 ring-white/20">
              <Coffee className="h-5 w-5" />
              <Camera className="absolute -bottom-1 -right-1 h-3.5 w-3.5 opacity-80" />
            </span>
            <span className="text-lg font-semibold tracking-tight text-white">
              district 2nd
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#visit" className="rounded-lg bg-white/10 px-4 py-2 text-white hover:bg-white/20 transition-colors">
              Book a Table
            </a>
          </nav>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-2 mx-4 rounded-2xl border border-white/10 bg-slate-900/90 backdrop-blur-md p-4">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-white/90 hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
            <a href="#visit" onClick={() => setOpen(false)} className="rounded-lg bg-white/10 px-3 py-2 text-white text-center">
              Book a Table
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
