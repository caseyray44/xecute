"use client"

import Link from "next/link"
import { Bell, MessageSquareWarning, User } from "lucide-react"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-4">
          <Link href="/login" className="flex items-center gap-2 font-bold text-xl text-emerald-600 dark:text-emerald-400">
            Xecute
          </Link>
          <Badge variant="success" className="hidden sm:flex gap-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Markate Connected
          </Badge>
        </div>

        <div className="flex items-center gap-4">
          <Link href="#" className="hidden sm:flex text-sm text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 items-center gap-1">
            <MessageSquareWarning className="h-4 w-4" />
            Report a Bug
          </Link>
          <Button variant="ghost" size="icon" className="relative text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
