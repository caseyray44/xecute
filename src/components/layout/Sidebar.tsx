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
    <aside className="hidden w-64 flex-col border-r bg-white/50 backdrop-blur-xl lg:flex h-screen sticky top-0 pt-20">
      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href.includes('?') && pathname === item.href.split('?')[0]); // simple matching
            return (
            <Link
                key={item.href}
                href={item.href}
                className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                isActive ? "bg-primary/10 text-primary" : "text-muted-foreground"
                )}
            >
                <item.icon className="h-4 w-4" />
                {item.label}
            </Link>
            )
        })}
      </nav>
      <div className="p-4 border-t">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-red-500 hover:bg-red-50 transition-colors">
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </aside>
  )
}

