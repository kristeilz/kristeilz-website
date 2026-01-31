// app/api/checkout/route.ts
import { stripe } from "@/lib/stripe"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { plan } = await req.json()

  const priceMap = {
    silver: process.env.STRIPE_SILVER_PRICE!,
    gold: process.env.STRIPE_GOLD_PRICE!,
    black: process.env.STRIPE_BLACK_PRICE!,
  }

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [{ price: priceMap[plan], quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/prive/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/prive`,
  })

  return NextResponse.json({ url: session.url })
}
