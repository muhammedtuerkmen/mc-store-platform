"use client"

import TilesGrid from "@/components/TilesGrid"
import useAdminPreview from "@/components/useAdminPreview"
import { siteConfig } from "@/data/siteConfig"

export default function HomeTilesClient() {
  const preview = useAdminPreview()
  const highlight = {
    tileId: preview.badgeTileId,
    text: preview.badgeText
  }

  return <TilesGrid tiles={siteConfig.tiles} highlightBadge={highlight} />
}
