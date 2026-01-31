export default function PrivePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-32 text-center">
      <p className="tracking-[0.35em] text-xs uppercase text-white/60">
        By Invitation
      </p>

      <h1 className="font-serif text-5xl md:text-7xl mt-6">
        The Privé Circle
      </h1>

      <p className="max-w-xl mx-auto mt-8 text-white/70">
        Access exclusive collections, bespoke services,
        and private consultations.
      </p>

      <a
        href="/collections"
        className="inline-block mt-12 px-8 py-3 border border-[#E6C17A] text-[#E6C17A]"
      >
        Explore Collections
      </a>
    </main>
  );
}
