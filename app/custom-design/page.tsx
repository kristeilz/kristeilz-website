import { requireSubscription } from "@/lib/requireSubscription"

export default async function CustomDesignPage() {
  const allowed = await requireSubscription("gold")

  if (!allowed) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-lg tracking-wide">
          Custom design is available to Privé Gold members only
        </p>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <h1 className="text-5xl font-serif mb-12">
        Bespoke Jewellery Design
      </h1>

      {/* your form / UI */}
    </main>
  )
}
