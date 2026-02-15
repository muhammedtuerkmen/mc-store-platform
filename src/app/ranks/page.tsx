"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function RanksPage() {
  const router = useRouter()

  useEffect(() => {
    router.push("https://shop.firstmc.de/")
  }, [router])

  return null
}
