"use client"

import Link from "next/link"
import { Bell, MessageSquareWarning, User } from "lucide-react"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-4">
          <Link href="/login" className="flex items-center gap-2 font-bold text-xl text-primary">
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
            <Link href="#" className="hidden sm:flex text-sm text-muted-foreground hover:text-primary items-center gap-1">
                <MessageSquareWarning className="h-4 w-4" />
                Report a Bug
            </Link>
            <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5 text-muted-foreground" />
                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full bg-muted">
                <User className="h-5 w-5" />
            </Button>
        </div>
      </div>
    </header>
  )
}

