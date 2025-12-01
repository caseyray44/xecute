"use client"

import Link from "next/link"
import { ArrowRight, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/Button"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center rounded-full border bg-background/50 px-3 py-1 text-sm font-medium text-muted-foreground backdrop-blur-sm mb-8 animate-fade-in-up">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500"></span>
          New: Markate CRM Integration
        </div>
        
        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-foreground sm:text-7xl mb-6 bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
          The fastest way to run your service business.
        </h1>
        
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10">
          Manage your whole business using one text message. Create work orders, automate scheduling, and sync with your CRM instantly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/login">
            <Button size="lg" className="h-12 px-8 text-base rounded-full">
                Login / Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="#">
             <Button variant="outline" size="lg" className="h-12 px-8 text-base rounded-full gap-2">
                <PlayCircle className="h-4 w-4" />
                Watch Demo
             </Button>
          </Link>
        </div>

        <div className="mt-20 relative mx-auto max-w-5xl rounded-xl border bg-background/50 shadow-2xl backdrop-blur-xl p-2">
            <div className="aspect-video rounded-lg bg-muted/50 overflow-hidden relative">
                 <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    (App Interface Screenshot Placeholder)
                 </div>
            </div>
        </div>
      </div>
      
      {/* Background Gradients */}
      <div className="absolute -top-24 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />
      <div className="absolute bottom-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[100px]" />
    </section>
  )
}

