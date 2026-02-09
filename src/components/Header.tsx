import { ReactNode } from "react"
import useAdminPreview from "@/components/useAdminPreview"
import { siteConfig } from "@/data/siteConfig"
import Logo from "@/components/Logo"

type HeaderProps = {
  onLoginClick: () => void
}

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

const ServerIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect x="5" y="3" width="14" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="5" y="10.5" width="14" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <rect x="5" y="18" width="14" height="3" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="9" cy="6" r="1" fill="currentColor" />
    <circle cx="9" cy="13.5" r="1" fill="currentColor" />
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

export default function Header({ onLoginClick }: HeaderProps) {
  const preview = useAdminPreview()
  const modules = {
    discord: {
      ...siteConfig.modules.discord,
      label: preview.discordInvite,
      enabled: preview.modules.discord
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
              <ModuleCard
                title="Server IP"
                label={modules.serverIp.label}
                icon={<ServerIcon />}
              />
            ) : null}
            <button className="ghost-button" onClick={onLoginClick} type="button">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
