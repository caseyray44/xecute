"use client"

import { Activity, AlertCircle, CheckCircle, Terminal } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { cn } from "@/lib/utils"

const ACTIVITIES = [
  { id: 1, type: 'command', message: 'Sent "Schedule Request" to +1 (555) 123-4567', time: '2 mins ago', status: 'success' },
  { id: 2, type: 'system', message: 'Markate Sync Completed', time: '15 mins ago', status: 'success' },
  { id: 3, type: 'error', message: 'Failed to deliver message to +1 (555) 999-9999', time: '1 hour ago', status: 'error' },
  { id: 4, type: 'command', message: 'Automation "Follow Up" triggered', time: '2 hours ago', status: 'success' },
]

export function ActivityPanel() {
  return (
    <Card className="p-6 h-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            <h3 className="font-bold text-lg">Recent Activity</h3>
        </div>
      </div>

      <div className="space-y-6 relative before:absolute before:left-2.5 before:top-2 before:h-full before:w-px before:bg-border">
        {ACTIVITIES.map((activity) => (
            <div key={activity.id} className="relative pl-8">
                <div className={cn(
                    "absolute left-0 top-1 h-5 w-5 rounded-full border-2 flex items-center justify-center bg-background",
                    activity.status === 'success' ? "border-green-500" : "border-red-500"
                )}>
                    {activity.type === 'command' && <Terminal className="h-2.5 w-2.5 text-foreground" />}
                    {activity.type === 'system' && <CheckCircle className="h-2.5 w-2.5 text-green-500" />}
                    {activity.type === 'error' && <AlertCircle className="h-2.5 w-2.5 text-red-500" />}
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium text-foreground">{activity.message}</p>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
            </div>
        ))}
      </div>
    </Card>
  )
}

