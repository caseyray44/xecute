"use client"

import { CheckCircle2, Circle } from "lucide-react"
import { Card } from "@/components/ui/Card"
import { cn } from "@/lib/utils"

const steps = [
  { id: 1, label: "Add main number", completed: true },
  { id: 2, label: "Connect CRM", completed: true },
  { id: 3, label: "Add team members", completed: false },
  { id: 4, label: "Test your first command", completed: false },
  { id: 5, label: "Review examples", completed: false },
  { id: 6, label: "Configure automations", completed: false },
]

export function OnboardingChecklist() {
  const completedCount = steps.filter((s) => s.completed).length
  const progress = Math.round((completedCount / steps.length) * 100)

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">Onboarding Progress</h3>
        <span className="text-sm font-bold text-primary">{progress}%</span>
      </div>
      
      <div className="h-2 w-full bg-muted rounded-full mb-6 overflow-hidden">
        <div 
            className="h-full bg-primary transition-all duration-500 ease-out" 
            style={{ width: `${progress}%` }}
        />
      </div>

      <div className="space-y-3">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center gap-3">
            {step.completed ? (
              <CheckCircle2 className="h-5 w-5 text-primary" />
            ) : (
              <Circle className="h-5 w-5 text-muted-foreground" />
            )}
            <span className={cn("text-sm", step.completed ? "text-foreground font-medium" : "text-muted-foreground")}>
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </Card>
  )
}

