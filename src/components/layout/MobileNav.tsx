"use client"

import Link from "next/link"
import { LayoutDashboard, User, Plug, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/login", label: "Dashboard", icon: LayoutDashboard },
  { href: "/login?tab=profile", label: "Profile", icon: User },
  { href: "/integrations", label: "Integrations", icon: Plug },
  { href: "/help", label: "Help", icon: HelpCircle },
]

export function MobileNav() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white/90 backdrop-blur-lg lg:hidden pb-safe">
      <nav className="flex h-16 items-center justify-around px-4">
        {navItems.map((item) => {
             const isActive = pathname === item.href || (item.href.includes('?') && pathname === item.href.split('?')[0]);
             return (
            <Link
                key={item.href}
                href={item.href}
                className={cn(
                "flex flex-col items-center gap-1 text-xs font-medium transition-colors",
                isActive ? "text-primary" : "text-muted-foreground"
                )}
            >
                <item.icon className="h-5 w-5" />
                {item.label}
            </Link>
             )
        })}
      </nav>
    </div>
  )
}

