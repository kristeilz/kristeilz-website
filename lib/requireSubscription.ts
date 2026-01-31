// lib/requireSubscription.ts
import { cookies } from "next/headers"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

/**
 * Checks if the current user has the required subscription
 * Safe: never throws, never crashes pages
 */
export async function requireSubscription(required: "silver" | "gold" | "black") {
  try {
    const cookieStore = cookies()
    const userId = cookieStore.get("user_id")?.value

    // No user → no access (but no crash)
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
    // Absolute safety net
    return false
  }
}
