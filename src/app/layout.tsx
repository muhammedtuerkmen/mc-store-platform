import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FirstMC - Minecraft Server",
  description: "Join FirstMC, the best Minecraft server. Play at firstmc.de",
  icons: {
    icon: "/assets/branding/firstmc.png"
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
