import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <span className="text-lg tracking-widest font-light">
              KRISTEILZ
            </span>

            <div className="hidden md:flex gap-10 text-sm tracking-wide text-white/80">
              <a href="#" className="hover:text-white">Home</a>
              <a href="/collections" className="hover:text-white">Collections</a>
              <a href="#" className="hover:text-white">Custom Design</a>
              <a href="#" className="hover:text-white">About</a>
              <a href="/contact" className="hover:text-white">Contact</a>
            </div>
          </nav>
        </header>

        {/* Page Content */}
        <main className="pt-32">
          {children}
        </main>
      </body>
    </html>
  )
}
