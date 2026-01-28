export default function Home() {
  return (
    <main className="min-h-screen bg-[color:var(--color-black)]">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center min-h-[85vh]">
        <h2 className="text-[color:var(--color-gold)] text-6xl md:text-7xl font-light tracking-wide">
          KristeilZ
        </h2>

        <p className="mt-6 text-[color:var(--color-gold-soft)] text-sm tracking-widest uppercase">
          Fusion Jewellery Designs for Modern Brands
        </p>

        <div className="mt-12 flex gap-6">
          <button className="px-8 py-3 border border-[color:var(--color-gold)] text-[color:var(--color-gold)] hover:bg-[color:var(--color-gold)] hover:text-black transition">
            View Collections
          </button>

          <button className="px-8 py-3 bg-[color:var(--color-gold)] text-black hover:bg-[color:var(--color-gold-soft)] transition">
            Work With Us
          </button>
        </div>
      </section>
    </main>
  );
}
