import { Zap, Calendar, Users, RefreshCcw } from "lucide-react"
import { Card } from "@/components/ui/Card"

const features = [
  {
    icon: Zap,
    title: "Create work orders instantly",
    description: "Text a simple command to generate comprehensive work orders in seconds."
  },
  {
    icon: Calendar,
    title: "Automate scheduling",
    description: "AI automatically finds the best slots and books appointments with customers."
  },
  {
    icon: Users,
    title: "Assign tasks automatically",
    description: "Route jobs to the right team members based on availability and skills."
  },
  {
    icon: RefreshCcw,
    title: "Sync with Markate CRM",
    description: "Two-way real-time synchronization keeps your customer data always up to date."
  }
]

export function Features() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:border-primary/50 transition-colors bg-background/50">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

