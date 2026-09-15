import { Faq, FinalCall, Hero, HowItWorks, Nav, Pricing, Proof, SiteFooter, Vsl, WhatSamDoes } from "@/components/features/sam/SamLanding"

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Sam by Xecute",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, SMS",
    description: "A sales rep who texts your customers. Brings back quiet customers, follows up on every estimate, and gets the yes.",
    offers: { "@type": "Offer", price: "297", priceCurrency: "USD", description: "$297 a month. No contract. Cancel any time." },
  }
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <Hero />
      <Vsl />
      <Proof />
      <HowItWorks />
      <WhatSamDoes />
      <Pricing />
      <Faq />
      <FinalCall />
      <SiteFooter />
    </main>
  )
}
