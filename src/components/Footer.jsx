function Footer() {
  return (
    <footer id="visit" className="relative bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-white text-lg font-semibold">district 2nd</h3>
            <p className="mt-2 text-white/70">123 Minimal Ave, Creative District<br/>Open daily • 8am - 8pm</p>
          </div>
          <div>
            <h4 className="text-white font-medium">Contact</h4>
            <p className="mt-2 text-white/70">hello@district2nd.cafe<br/>+1 (555) 123-4567</p>
          </div>
          <div>
            <h4 className="text-white font-medium">Follow</h4>
            <div className="mt-2 flex gap-3 text-white/80">
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">TikTok</a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/50">
          © {new Date().getFullYear()} district 2nd — All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
