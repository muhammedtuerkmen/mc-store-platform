import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/data/siteConfig"

type LogoProps = {
  brandName?: string
  tagline?: string
}

export default function Logo({ brandName, tagline }: LogoProps) {
  const name = brandName ?? siteConfig.brand.name
  const tag = tagline ?? siteConfig.brand.tagline

  return (
    <Link href="/" className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center">
          <Image
            src={siteConfig.brand.logo.src}
            alt={siteConfig.brand.logo.alt}
            width={siteConfig.brand.logo.width}
            height={siteConfig.brand.logo.height}
            priority
            className="h-16 w-auto sm:h-20 lg:h-24"
          />
        </div>
        <span className="sr-only">{name}</span>
        <div className="mt-1 text-xs uppercase tracking-widest text-white text-opacity-70">
          {tag}
        </div>
      </div>
    </Link>
  )
}
