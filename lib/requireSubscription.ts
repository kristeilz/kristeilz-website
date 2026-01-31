import { supabase } from "@/lib/supabase"

/**
 * Vercel-safe subscription check
 * - No cookies()
 * - No auth during build
 * - Never crashes
 */
export async function requireSubscription(
  required: "silver" | "gold" | "black",
  userId?: string
): Promise<boolean> {
  try {
    // Prevent build-time execution
    if (!userId) return false

    const { data, error } = await supabase
      .from("users")
      .select("subscription, status")
      .eq("id", userId)
      .single()

    if (error || !data) return false
    if (data.status !== "active") return false

    const hierarchy = ["silver", "gold", "black"]

    return (
      hierarchy.indexOf(data.subscription) >=
      hierarchy.indexOf(required)
    )
  } catch {
    return false
  }
}
