"use client"

import { ReactNode } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"

type SubnavConfig = {
  label: string
  href: string
}

type PageShellProps = {
  children: ReactNode
  subnav?: SubnavConfig
}

export default function PageShell({ children, subnav }: PageShellProps) {
  return (
    <div className="min-h-screen">
      <Header />
      {subnav ? (
        <div className="section-wrap mb-10">
          <div className="panel-card flex flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href={subnav.href} className="flex items-center gap-3 text-sm uppercase tracking-widest">
              <span className="ghost-button" aria-hidden="true">
                Home
              </span>
              <span>{subnav.label}</span>
            </Link>
          </div>
        </div>
      ) : null}
      <main className="section-wrap pb-20">{children}</main>
      <Footer />
    </div>
  )
}
