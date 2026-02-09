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
  layout: "full" | "wide" | "stackTop" | "stackBottom"
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
    name: "qandqservices",
    tagline: "PLAY.QANDQSERVICES.ME",
    logo: {
      src: "/assets/branding/examplelogo.png",
      alt: "qandqservices logo",
      width: 320,
      height: 120
    }
  },
  modules: {
    discord: {
      enabled: true,
      inviteCode: "qandqservices",
      label: "gg/qandqservices",
      detail: "11,618 members",
      url: "https://discord.gg/qandqservices"
    } as ModuleConfig,
    serverIp: {
      enabled: true,
      label: "qandqservices.de",
      detail: "58 online"
    } as ModuleConfig
  },
  badges: {
    highlight: {
      tileId: "combat",
      text: "NEW NEW NEW"
    } as HighlightBadge
  },
  tiles: [
    {
      id: "combat",
      title: "Combat Effects",
      description: "Flex on your opponents with awesome effects.",
      cta: "Click to Browse",
      theme: "tile-orange",
      size: "xl",
      layout: "full",
      image: {
        src: "/assets/tiles/effects.png",
        alt: "Combat effects preview"
      },
      backgroundImage: {
        src: "/assets/tiles/courtyard_640x360.png",
        alt: "Combat effects background"
      },
      backgroundTint: "rgba(245, 124, 50, 0.72)",
      backgroundOpacity: 0.28,
      artSize: "mega"
    },
    {
      id: "ranks",
      title: "Ranks",
      description: "Unlock core perks and progression boosts.",
      cta: "Click to Browse",
      theme: "tile-gold",
      size: "lg",
      layout: "wide",
      href: "/ranks",
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
      artSize: "hero"
    },
    {
      id: "rank-upgrades",
      title: "Rank Upgrades",
      description: "Level up your status with targeted upgrades.",
      cta: "Click to Browse",
      theme: "tile-blue",
      size: "md",
      layout: "stackTop",
      image: {
        src: "/assets/tiles/upgrades_340x466.png",
        alt: "Rank upgrades preview"
      },
      backgroundImage: {
        src: "/assets/tiles/farms_640x360.png",
        alt: "Rank upgrades background"
      },
      backgroundTint: "rgba(63, 108, 246, 0.8)"
    },
    {
      id: "events",
      title: "Events",
      description: "Limited-time challenges and rewards.",
      cta: "Click to Browse",
      theme: "tile-green",
      size: "md",
      layout: "stackBottom",
      image: {
        src: "/assets/tiles/events_600x438.png",
        alt: "Events preview"
      },
      backgroundImage: {
        src: "/assets/tiles/farms_640x360.png",
        alt: "Events background"
      },
      backgroundTint: "rgba(43, 213, 127, 0.72)",
      backgroundOpacity: 0.3,
      artSize: "md"
    },
    {
      id: "discord",
      title: "Discord",
      description: "Join the community for updates and drops.",
      cta: "Join the Discord",
      theme: "tile-purple",
      size: "sm",
      layout: "full",
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
      artSize: "xs"
    }
  ] as TileConfig[],
  ranks: {
    headline: "Ranks",
    description:
      "Purchase ranks to unlock special features such as private events, settings, practice bots, armor trims, commands, and more.",
    products: [
      { id: "silver", name: "Silver", price: "EUR 7.13", accent: "rank-silver" },
      { id: "gold", name: "Gold", price: "EUR 13.08", accent: "rank-gold" },
      { id: "diamond", name: "Diamond", price: "EUR 20.22", accent: "rank-diamond" },
      { id: "ruby", name: "Ruby", price: "EUR 36.88", accent: "rank-ruby" }
    ] as RankProduct[]
  },
  footer: {
    copyright: "Copyright 2025 qandqservices. All Rights Reserved. We do not have affiliation with any real world brands.",
    legal:
      "This website and its checkout process is owned & operated by Tebex Limited, who handle product fulfillment, billing support and refunds.",
    links: [
      { label: "Impressum", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" }
    ]
  }
}
