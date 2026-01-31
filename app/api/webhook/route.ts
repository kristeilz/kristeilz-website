// app/api/webhook/route.ts
import { stripe } from "@/lib/stripe"
import { supabase } from "@/lib/supabase"

export async function POST(req: Request) {
  const body = await req.text()
  const sig = req.headers.get("stripe-signature")!

  const event = stripe.webhooks.constructEvent(
    body,
    sig,
    process.env.STRIPE_WEBHOOK_SECRET!
  )

  if (event.type === "checkout.session.completed") {
    const session: any = event.data.object

    const plan =
      session.amount_total === 5000 ? "silver" :
      session.amount_total === 10000 ? "gold" : "black"

    await supabase
      .from("users")
      .update({
        subscription: plan,
        status: "active",
        stripe_customer_id: session.customer,
      })
      .eq("email", session.customer_email)
  }

  return new Response("OK")
}
