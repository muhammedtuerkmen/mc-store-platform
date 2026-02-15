"use client"

import { ReactNode, useState, useEffect } from "react"
import useAdminPreview from "@/components/useAdminPreview"
import { siteConfig } from "@/data/siteConfig"
import Logo from "@/components/Logo"

type ServerStatusState = {
  status: "loading" | "online" | "offline" | "error"
  players: {
    online: number
    max: number
  }
}

type HeaderProps = {}

const DiscordIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M5 5H19V15H8L5 18V5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <circle cx="9" cy="10" r="1" fill="currentColor" />
    <circle cx="15" cy="10" r="1" fill="currentColor" />
  </svg>
)

const ModuleCard = ({
  title,
  label,
  detail,
  icon,
  url
}: {
  title: string
  label: string
  detail?: string
  icon: ReactNode
  url?: string
}) => {
  const content = (
    <>
      <div className="module-icon text-accentSoft">{icon}</div>
      <div>
        <div className="text-xs uppercase tracking-widest text-white text-opacity-60">{title}</div>
        <div className="text-sm font-semibold">{label}</div>
        {detail ? <div className="text-xs text-white text-opacity-60">{detail}</div> : null}
      </div>
    </>
  )

  if (url) {
    return (
      <a className="module-card text-white" href={url} target="_blank" rel="noreferrer">
        {content}
      </a>
    )
  }

  return <div className="module-card text-white">{content}</div>
}

const ServerStatusCard = ({ ip }: { ip: string }) => {
  const [state, setState] = useState<ServerStatusState>({
    status: "loading",
    players: {
      online: 0,
      max: 0
    }
  })

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        const response = await fetch(
          `https://api.mcsrvstat.us/2/${ip}?t=${Date.now()}`
        )
        const data = await response.json()

        if (data.online) {
          setState({
            status: "online",
            players: {
              online: data.players?.online || 0,
              max: data.players?.max || 0
            }
          })
        } else {
          setState({
            status: "offline",
            players: {
              online: 0,
              max: 0
            }
          })
        }
      } catch (error) {
        setState({
          status: "error",
          players: {
            online: 0,
            max: 0
          }
        })
      }
    }

    fetchServerStatus()
    const interval = setInterval(fetchServerStatus, 60000)

    return () => clearInterval(interval)
  }, [ip])

  const getStatusColor = () => {
    switch (state.status) {
      case "online":
        return "text-green-400"
      case "offline":
        return "text-red-400"
      case "error":
        return "text-yellow-400"
      default:
        return "text-white text-opacity-60"
    }
  }

  const getStatusIndicator = () => {
    switch (state.status) {
      case "online":
        return (
          <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
        )
      case "offline":
        return (
          <div className="h-2 w-2 rounded-full bg-red-400" />
        )
      case "error":
        return (
          <div className="h-2 w-2 rounded-full bg-yellow-400" />
        )
      default:
        return (
          <div className="h-2 w-2 rounded-full bg-white bg-opacity-30" />
        )
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="text-xs uppercase tracking-widest text-white text-opacity-60">
          Server IP
        </div>
        <div className="text-sm font-semibold">{ip}</div>
        {getStatusIndicator()}
      </div>
      <div className="flex items-center gap-2">
        <div className="h-1 w-1 rounded-full bg-accent" />
        <div className={`text-xs font-semibold ${getStatusColor()}`}>
          {state.status === "loading"
            ? "Lade..."
            : state.status === "online"
            ? `${state.players.online}/${state.players.max}`
            : "Offline"}
        </div>
        <div className="text-xs text-white text-opacity-60">Spieler</div>
      </div>
    </div>
  )
}

export default function Header() {
  const preview = useAdminPreview()
  const discordUrl = preview.discordUrl?.trim()
  const modules = {
    discord: {
      ...siteConfig.modules.discord,
      label: preview.discordInvite,
      enabled: preview.modules.discord,
      url: discordUrl || siteConfig.modules.discord.url
    },
    serverIp: {
      ...siteConfig.modules.serverIp,
      label: preview.serverIp,
      enabled: preview.modules.serverIp
    }
  }

  return (
    <header className="pt-10 pb-8">
      <div className="section-wrap">
        <div className="grid gap-6 lg:grid-cols-3 lg:items-center">
          <div className="flex items-center justify-center gap-4 lg:justify-start">
            {modules.discord.enabled ? (
              <ModuleCard
                title="Discord"
                label={modules.discord.label}
                detail={modules.discord.detail}
                icon={<DiscordIcon />}
                url={modules.discord.url}
              />
            ) : null}
          </div>
          <div className="flex justify-center">
            <Logo brandName={preview.brandName} tagline={preview.tagline} />
          </div>
          <div className="flex items-center justify-center gap-4 lg:justify-end">
            {modules.serverIp.enabled ? (
              <ServerStatusCard ip={modules.serverIp.label} />
            ) : null}
          </div>
        </div>
      </div>
    </header>
  )
}
