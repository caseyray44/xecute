import { Header } from "./Header"
import { Sidebar } from "./Sidebar"
import { MobileNav } from "./MobileNav"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 px-4 py-8 lg:px-8 pb-24 lg:pb-8 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </div>
      <MobileNav />
    </div>
  )
}

