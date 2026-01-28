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
    </main>
  );
}
