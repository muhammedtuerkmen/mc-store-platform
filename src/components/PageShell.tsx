"use client"

import { ReactNode, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import LoginModal from "@/components/LoginModal"
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
  const [loginOpen, setLoginOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <Header onLoginClick={() => setLoginOpen(true)} />
      {subnav ? (
        <div className="section-wrap mb-10">
          <div className="panel-card flex flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href={subnav.href} className="flex items-center gap-3 text-sm uppercase tracking-widest">
              <span className="ghost-button" aria-hidden="true">
                Home
              </span>
              <span>{subnav.label}</span>
            </Link>
            <button className="ghost-button" onClick={() => setLoginOpen(true)} type="button">
              Login
            </button>
          </div>
        </div>
      ) : null}
      <main className="section-wrap pb-20">{children}</main>
      <Footer />
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </div>
  )
}
