export type ModuleConfig = {
  enabled: boolean
  label: string
  detail?: string
  url?: string
  inviteCode?: string
}

export type TileConfig = {
  id: string
  title: string
  description: string
  cta: string
  theme: string
  size: "xl" | "lg" | "md" | "sm"
  layout: "full" | "wide" | "stackTop" | "stackBottom" | "tileLarge" | "tileMedium" | "tileSmall" | "tileTall" | "tileSmallTall"
  badge?: string
  href?: string
  image?: {
    src: string
    alt: string
  }
  backgroundImage?: {
    src: string
    alt?: string
  }
  backgroundTint?: string
  backgroundOpacity?: number
  artSize?: "xs" | "sm" | "md" | "lg" | "xl" | "hero" | "mega"
  disabled?: boolean
}

export type RankProduct = {
  id: string
  name: string
  price: string
  accent: string
}

export type HighlightBadge = {
  tileId: string
  text: string
}

export const siteConfig = {
  brand: {
    name: "FirstMC",
    tagline: "FIRSTMC.DE",
    logo: {
      src: "/assets/branding/firstmc.png",
      alt: "FirstMC logo",
      width: 320,
      height: 120
    }
  },
  modules: {
    discord: {
      enabled: true,
      inviteCode: "firstmc",
      label: "gg/firstmc",
      detail: "2,500+ members",
      url: "https://discord.gg/firstmc"
    } as ModuleConfig,
    serverIp: {
      enabled: true,
      label: "firstmc.de",
      detail: "58 online"
    } as ModuleConfig
  },
  badges: {
    highlight: {
      tileId: "ranks",
      text: "NEU NEU NEU"
    } as HighlightBadge
  },
  tiles: [
    {
      id: "ranks",
      title: "Ränge",
      description: "Schalte Kern-Perks und Fortschritts-Vorteile frei.",
      cta: "Im Shop ansehen",
      theme: "tile-gold",
      size: "xl",
      layout: "tileLarge",
      href: "https://shop.firstmc.de/",
      image: {
        src: "/assets/tiles/ranks.png",
        alt: "Ranks preview"
      },
      backgroundImage: {
        src: "/assets/tiles/versus_640x360.png",
        alt: "Ranks background"
      },
      backgroundTint: "rgba(245, 196, 65, 0.72)",
      backgroundOpacity: 0.3,
      artSize: "mega"
    },
    {
      id: "events",
      title: "Firstys",
      description: "Die exklusive Währung für Kosmetika, Ränge und Specials.",
      cta: "Shop Firstys",
      theme: "tile-green",
      size: "md",
      layout: "tileSmall",
      href: "https://shop.firstmc.de/category/firstys",
      image: {
        src: "/assets/tiles/firstys.png",
        alt: "Firstys category preview"
      },
      backgroundImage: {
        src: "/assets/tiles/farms_640x360.png",
        alt: "Firstys background"
      },
      backgroundTint: "rgba(43, 213, 127, 0.72)",
      backgroundOpacity: 0.3,
      artSize: "sm"
    },
    {
      id: "rank-upgrades",
      title: "Rang-Upgrade",
      description: "Hebe deinen Status mit gezielten Upgrades auf.",
      cta: "Im Shop ansehen",
      theme: "tile-blue",
      size: "md",
      layout: "tileMedium",
      href: "https://shop.firstmc.de/",
      image: {
        src: "/assets/tiles/upgrades_340x466.png",
        alt: "Rank upgrades preview"
      },
      backgroundImage: {
        src: "/assets/tiles/farms_640x360.png",
        alt: "Rank upgrades background"
      },
      backgroundTint: "rgba(63, 108, 246, 0.8)",
      artSize: "lg"
    },
    {
      id: "discord",
      title: "Discord",
      description: "Trete der Community für Updates und Drops bei.",
      cta: "Discord beitreten",
      theme: "tile-purple",
      size: "md",
      layout: "tileSmallTall",
      href: "https://discord.gg/firstmc",
      image: {
        src: "/assets/tiles/discord_340x466.png",
        alt: "Discord community preview"
      },
      backgroundImage: {
        src: "/assets/tiles/mines_640x360.png",
        alt: "Discord background"
      },
      backgroundTint: "rgba(63, 108, 246, 0.72)",
      backgroundOpacity: 0.28,
      artSize: "sm"
    }
  ] as TileConfig[],
  ranks: {
    headline: "Shop",
    description:
      "Kaufe Ränge und Kosmetika, um spezielle Features wie private Events, Einstellungen, Übungsbots, Rüstungsfassaden, Befehle und mehr freizuschalten.",
    products: [
      { id: "silver", name: "Silber", price: "EUR 7.13", accent: "rank-silver" },
      { id: "gold", name: "Gold", price: "EUR 13.08", accent: "rank-gold" },
      { id: "diamond", name: "Diamant", price: "EUR 20.22", accent: "rank-diamond" },
      { id: "ruby", name: "Rubin", price: "EUR 36.88", accent: "rank-ruby" }
    ] as RankProduct[]
  },
  footer: {
    copyright: "Copyright 2025 FirstMC. Alle Rechte vorbehalten. Wir haben keine Verbindung zu realen Marken.",
    legal:
      "Diese Website und der Checkout-Prozess werden von Tebex Limited betrieben, die für Produkterfüllung, Abrechnungssupport und Erstattungen zuständig sind.",
    links: [
      { label: "Impressum", href: "#" },
      { label: "Datenschutz", href: "#" },
      { label: "Nutzungsbedingungen", href: "#" }
    ]
  }
}
