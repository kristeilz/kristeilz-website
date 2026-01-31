import { requireSubscription } from "@/lib/requireSubscription"

export default async function CollectionsPage() {
  const isGold = await requireSubscription("gold")

  return (
    <main className="bg-black text-white min-h-screen px-12 py-24">
      <h1 className="text-4xl font-serif mb-16">Collections</h1>

      {/* Public */}
      <section>
        <h2 className="text-xl mb-6">Public Collection</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="h-64 bg-white/5" />
          <div className="h-64 bg-white/5" />
          <div className="h-64 bg-white/5" />
        </div>
      </section>

      {/* Privé */}
      <section className="mt-24">
        <h2 className="text-xl mb-6 text-[#E6C17A]">
          Privé Gold Collection
        </h2>

        {isGold ? (
          <div className="grid grid-cols-3 gap-8">
            <div className="h-64 bg-[#E6C17A]/20" />
            <div className="h-64 bg-[#E6C17A]/20" />
            <div className="h-64 bg-[#E6C17A]/20" />
          </div>
        ) : (
          <p className="text-white/50">
            🔒 Available to Privé Gold members only
          </p>
        )}
      </section>
    </main>
  )
}
