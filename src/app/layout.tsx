import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "qandqservices Store",
  description: "A Minecraft-focused store platform built for qandqservices."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
