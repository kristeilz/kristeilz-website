export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      
      {/* Velvet Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(230,193,122,0.08),_transparent_60%)]" />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="text-center max-w-4xl">

          <p className="mb-6 tracking-[0.35em] text-xs text-white/70 uppercase animate-slide-up delay-100">
            KristeilZ Jewellery Studio
          </p>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-white animate-slide-up delay-200">
            Timeless Luxury
            <br />
            <span className="italic text-[#E6C17A]">
              Crafted to Endure
            </span>
          </h1>

          <div className="mx-auto my-10 h-px w-24 bg-gradient-to-r from-transparent via-[#E6C17A] to-transparent animate-fade-in delay-300" />

          <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-xl mx-auto animate-slide-up delay-400">
            Exquisite jewellery designed with precision, artistry,
            and an unwavering commitment to elegance.
          </p>

          <div className="mt-14 flex flex-col sm:flex-row justify-center gap-6 animate-slide-up delay-500">
            <a
              href="/collections"
              className="px-8 py-3 text-sm tracking-widest border border-[#E6C17A] text-[#E6C17A] hover:bg-[#E6C17A] hover:text-black transition-all duration-300"
            >
              EXPLORE COLLECTIONS
            </a>

            <a
              href="/contact"
              className="px-8 py-3 text-sm tracking-widest text-white/80 hover:text-white transition"
            >
              CUSTOM DESIGN
            </a>
          </div>

        </div>
      </section>
      {/* Collections Section */}
      <section className="bg-black py-32">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Header */}
          <div className="mb-20 text-center">
            <p className="tracking-[0.35em] text-xs text-white/60 uppercase mb-4">
              Our Creations
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-white">
              Signature Collections
            </h2>
          </div>

          {/* Collection Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {["Necklaces", "Rings", "Bracelets"].map((item, i) => (
              <a
                key={i}
                href="/collections"
                className="group relative overflow-hidden"
              >
                {/* Image Placeholder */}
                <div className="relative aspect-[3/4] bg-black border border-white/10 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(230,193,122,0.18),_transparent_60%)] opacity-0 group-hover:opacity-100 transition duration-700" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-700" />
                </div>

                {/* Text */}
                <div className="mt-6 text-center">
                  <h3 className="font-serif text-xl text-white group-hover:text-[#E6C17A] transition">
                    {item}
                  </h3>
                  <p className="mt-2 text-xs tracking-widest text-white/50 uppercase">
                    Explore
                  </p>
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      
      {/* Brand Story Section */}
      <section className="bg-black py-40 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="tracking-[0.35em] text-xs text-white/60 uppercase mb-6">
            Our Philosophy
          </p>

          <h2 className="font-serif text-3xl md:text-5xl text-white leading-tight">
            Jewellery That Transcends
            <br />
            <span className="italic text-[#E6C17A]">
              Time & Trend
            </span>
          </h2>

          <div className="mx-auto my-12 h-px w-24 bg-gradient-to-r from-transparent via-[#E6C17A] to-transparent" />

          <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            At KristeilZ, jewellery is more than adornment.
            It is a dialogue between form and feeling, crafted
            with patience, precision, and purpose.  
            <br /><br />
            Every piece is designed to endure — not only in
            material, but in meaning.
          </p>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">

            {/* Brand */}
            <div>
              <h3 className="text-lg tracking-widest text-white mb-4">
                KRISTEILZ
              </h3>
              <p className="text-sm text-white/60 leading-relaxed max-w-xs mx-auto md:mx-0">
                Timeless luxury jewellery crafted with precision,
                artistry, and enduring elegance.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-xs tracking-widest uppercase text-white/60 mb-6">
                Navigate
              </p>
              <ul className="space-y-4 text-sm text-white/80">
                <li><a href="/" className="hover:text-[#E6C17A] transition">Home</a></li>
                <li><a href="/collections" className="hover:text-[#E6C17A] transition">Collections</a></li>
                <li><a href="/contact" className="hover:text-[#E6C17A] transition">Custom Design</a></li>
                <li><a href="/about" className="hover:text-[#E6C17A] transition">About</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs tracking-widest uppercase text-white/60 mb-6">
                Connect
              </p>
              <ul className="space-y-4 text-sm text-white/80">
                <li>Email: <span className="text-white/60">studio@kristeilz.com</span></li>
                <li>Instagram: <span className="text-white/60">@kristeilz</span></li>
              </ul>
            </div>

          </div>

          {/* Bottom */}
          <div className="mt-24 pt-8 border-t border-white/10 text-center">
            <p className="text-xs text-white/40 tracking-wide">
              © {new Date().getFullYear()} KristeilZ Jewellery Studio. All rights reserved.
            </p>
          </div>

        </div>
      </footer>


    </main>
  );
}
