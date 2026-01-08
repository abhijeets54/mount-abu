import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: "Nagar Palika Mount Abu - Official Website",
  description:
    "Welcome to the official website of Nagar Palika Mount Abu. Discover Rajasthan's only hill station - blessed with cool climate, lush greenery, serene lakes, and ancient temples.",
  generator: "abhijeet",
  keywords: ["Mount Abu", "Rajasthan", "Hill Station", "Tourism", "Nagar Palika", "Nakki Lake", "Dilwara Temples"],
  icons: {
    icon: [
      {
        url: "",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
