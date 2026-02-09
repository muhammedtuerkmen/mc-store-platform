"use client"

import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import PageShell from "@/components/PageShell"

export default function AdminLoginPage() {
  const router = useRouter()
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({ error: "Login failed" }))
        setError(data.error ?? "Login failed")
        setLoading(false)
        return
      }

      router.push("/admin")
      router.refresh()
    } catch {
      setError("Login failed")
      setLoading(false)
    }
  }

  return (
    <PageShell subnav={{ label: "Return to Home", href: "/" }}>
      <div className="mx-auto max-w-md">
        <div className="panel-card p-6 space-y-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-white text-opacity-60">Admin</div>
            <h1 className="mt-2 text-2xl font-semibold uppercase tracking-widest">Login</h1>
            <p className="mt-2 text-sm text-white text-opacity-70">Enter the admin password.</p>
          </div>

          <form className="space-y-4" onSubmit={onSubmit}>
            <input
              className="input-field"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {error ? <div className="text-xs uppercase tracking-widest text-white text-opacity-60">{error}</div> : null}
            <button className="primary-button w-full" type="submit" disabled={loading}>
              {loading ? "Logging in" : "Login"}
            </button>
          </form>
        </div>
      </div>
    </PageShell>
  )
}
