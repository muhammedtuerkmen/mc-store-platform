import PageShell from "@/components/PageShell"
import RanksGrid from "@/components/RanksGrid"
import { siteConfig } from "@/data/siteConfig"

export default function RanksPage() {
  return (
    <PageShell subnav={{ label: "Return to Home", href: "/" }}>
      <div className="space-y-8">
        <div className="tile-card tile-purple tile-md">
          <div className="tile-content">
            <div>
              <div className="tile-title text-xl uppercase text-white sm:text-2xl">{siteConfig.ranks.headline}</div>
              <p className="mt-2 text-sm text-white text-opacity-80">{siteConfig.ranks.description}</p>
            </div>
          </div>
          <div className="tile-art tile-art-md" aria-hidden="true" />
        </div>
        <RanksGrid products={siteConfig.ranks.products} />
      </div>
    </PageShell>
  )
}
