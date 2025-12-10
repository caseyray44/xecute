"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, User, Plug, HelpCircle, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/login", label: "Dashboard", icon: LayoutDashboard },
  { href: "/login?tab=profile", label: "Profile", icon: User }, // Simulating profile tab or route
  { href: "/integrations", label: "Integrations", icon: Plug },
  { href: "/help", label: "Help/FAQ", icon: HelpCircle },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden w-64 flex-col border-r border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 backdrop-blur-xl lg:flex h-screen sticky top-0 pt-20">
      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href.includes('?') && pathname === item.href.split('?')[0]); // simple matching
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-50",
                isActive ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "text-slate-500 dark:text-slate-400"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Assistant Button */}
      <div className="px-4 pb-4">
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-500/10 p-4 text-center">
          <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
            Want Xecute to assist you?
          </h4>
          <button
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white py-2 text-sm font-bold shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02]"
            onClick={() => {
              navigator.clipboard.writeText("+19498286231");
              // toast/alert logic could go here
            }}
          >
            <span className="text-lg">📱</span>
            +1 (949) 828-6231
          </button>
        </div>
      </div>

      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </aside>
  )
}

