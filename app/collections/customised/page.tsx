import { requireSubscription } from "@/lib/requireSubscription"

export default async function CustomisedCollectionPage() {
  // ✅ SERVER SIDE CHECK
  const allowed = await requireSubscription("gold")

  if (!allowed) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-lg tracking-wide">
          Available to Privé Gold members only
        </p>
      </main>
    )
  }

  // ✅ PROTECTED CONTENT
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <h1 className="text-5xl font-serif text-center mb-16">
        Customised Designs
      </h1>

      {/* jewellery grid here */}
    </main>
  )
}
