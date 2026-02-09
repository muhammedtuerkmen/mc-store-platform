import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { getSessionToken, isAuthConfigured } from "@/lib/adminAuth"

export default async function AdminProtectedLayout({ children }: { children: React.ReactNode }) {
  if (!isAuthConfigured()) {
    redirect("/admin/login")
  }

  const cookieStore = await cookies()
  const session = cookieStore.get("admin_session")?.value
  if (!session || session !== getSessionToken()) {
    redirect("/admin/login")
  }

  return <>{children}</>
}
