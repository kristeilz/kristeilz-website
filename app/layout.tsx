import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "KristeilZ | Timeless Luxury Jewellery",
    template: "%s | KristeilZ",
  },
  description:
    "KristeilZ is a luxury jewellery design studio creating timeless, elegant, and aesthetic jewellery pieces crafted with precision and artistry.",

  keywords: [
    "luxury jewellery",
    "designer jewellery",
    "fine jewellery",
    "elegant jewellery",
    "aesthetic jewellery",
    "KristeilZ jewellery",
  ],

  authors: [{ name: "KristeilZ" }],
  creator: "KristeilZ",

  openGraph: {
    title: "KristeilZ | Timeless Luxury Jewellery",
    description: "Crafted with elegance, designed for lasting beauty.",
    url: "https://kristeilz-website.vercel.app",
    siteName: "KristeilZ",
    images: [
      {
        url: "/og-image.jpg", // add later in /public
        width: 1200,
        height: 630,
        alt: "KristeilZ Luxury Jewellery",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "KristeilZ | Timeless Luxury Jewellery",
    description: "Crafted with elegance, designed for lasting beauty.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <span className="text-lg tracking-[0.25em] font-light">
              KRISTEILZ
            </span>

            <div className="hidden md:flex gap-10 text-sm tracking-wide text-white/80">
              <a href="/" className="hover:text-white transition">Home</a>
              <a href="/collections" className="hover:text-white transition">Collections</a>
              <a href="/custom-design" className="hover:text-white transition">Custom Design</a>
              <a href="/about" className="hover:text-white transition">About</a>
              <a href="/contact" className="hover:text-white transition">Contact</a>
            </div>
          </nav>
        </header>

        {/* Page Content */}
        <main className="pt-32">
          {children}
        </main>
      </body>
    </html>
  );
}
