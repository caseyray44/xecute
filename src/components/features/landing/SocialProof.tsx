import { Star } from "lucide-react"

export function SocialProof() {
  return (
    <section className="py-12 border-t bg-background">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          Trusted by service pros nationwide
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Placeholder Logos */}
           <div className="text-xl font-bold">ServiceTitan</div>
           <div className="text-xl font-bold">HouseCall</div>
           <div className="text-xl font-bold">Markate</div>
           <div className="text-xl font-bold">Jobber</div>
        </div>

        <div className="mt-12 flex flex-col items-center">
             <div className="flex gap-1 text-yellow-400 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                ))}
             </div>
             <blockquote className="text-xl font-medium max-w-2xl mx-auto">
                "Xecute has completely changed how we run our plumbing business. I spend 90% less time on admin work."
             </blockquote>
             <cite className="mt-4 block text-sm font-semibold not-italic text-muted-foreground">
                - Sarah M., Owner of DrainRight Plumbing
             </cite>
        </div>
      </div>
    </section>
  )
}

