import { Hero } from "@/components/features/landing/Hero";
import { Features } from "@/components/features/landing/Features";
import { SocialProof } from "@/components/features/landing/SocialProof";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header"; // Reusing header for now, maybe simplified version for landing?
// Actually, landing usually has a different header (Login/Sign up). 
// I'll create a SimpleHeader for landing or just use inline navigation in Hero/Layout. 
// For now I'll stick to a clean layout.

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Xecute",
  "description": "AI Text Automation for Service Businesses",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD", // Update if pricing known
    "availability": "https://schema.org/OnlineOnly"
  },
  "url": "https://xecutetech.ai",
  "creator": {
    "@type": "Organization",
    "name": "Xecute"
  },
  "softwareVersion": "2.0.0"
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Simple Landing Header */}
      <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-6">
         <div className="font-bold text-2xl text-foreground">Xecute</div>
         <nav className="hidden md:flex items-center gap-6 font-medium text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground">Features</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Pricing</a>
            <a href="/login" className="text-primary hover:text-primary/80">Login</a>
         </nav>
      </header>

      <Hero />
      <Features />
      <SocialProof />
      <Footer />
    </main>
  );
}
