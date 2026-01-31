import { supabase } from "@/lib/supabase"

export async function requireSubscription(
  required: "silver" | "gold" | "black"
) {
  try {
    // Prevent build-time execution
    if (typeof window !== "undefined") return false

    const { data, error } = await supabase
      .from("users")
      .select("subscription, status")
      .limit(1)
      .single()

    if (error || !data) return false
    if (data.status !== "active") return false

    const levels = ["silver", "gold", "black"]
    return (
      levels.indexOf(data.subscription) >=
      levels.indexOf(required)
    )
  } catch {
    return false
  }
}
