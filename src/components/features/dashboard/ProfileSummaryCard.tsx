"use client"

import { User, CreditCard, Calendar } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"

export function ProfileSummaryCard() {
  return (
    <Card className="p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <User className="h-8 w-8" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Alex Johnson</h2>
            <p className="text-sm text-muted-foreground">alex@example.com</p>
            <p className="text-sm font-medium mt-1">+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-2">
             <Badge variant="success" className="px-3 py-1">
                Subscription Status: Active
             </Badge>
             <div className="text-xs text-muted-foreground flex items-center gap-1">
                <CreditCard className="h-3 w-3" />
                <span>Next billing: Jan 1, 2026</span>
             </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t pt-6">
        <div className="space-y-1">
            <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Plan</p>
            <p className="font-medium">Professional Tier</p>
        </div>
        <div className="space-y-1">
            <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Member Since</p>
            <p className="font-medium">Dec 2023</p>
        </div>
        <div className="space-y-1">
            <p className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">CRM Status</p>
            <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                <span className="font-medium">Connected</span>
            </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button variant="outline" size="sm">Edit Profile</Button>
        <Button variant="outline" size="sm">Manage Billing</Button>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-600 hover:bg-red-50 ml-auto">
            Cancel Subscription
        </Button>
      </div>
    </Card>
  )
}

