import { Faq, FinalCall, Hero, HowItWorks, Nav, Pricing, Proof, SiteFooter, WhatSamDoes, XecuteSection } from "@/components/features/sam/SamLanding"

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Sam by Xecute",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, SMS",
    description: "A sales rep who texts your customers. Brings back quiet customers, follows up on every estimate, and books the job into Markate or Jobber.",
    offers: { "@type": "Offer", price: "297", priceCurrency: "USD", description: "Free until Sam closes your first job. Xecute included." },
  }
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <Hero />
      <Proof />
      <HowItWorks />
      <WhatSamDoes />
      <XecuteSection />
      <Pricing />
      <Faq />
      <FinalCall />
      <SiteFooter />
    </main>
  )
}
