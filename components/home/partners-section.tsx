"use client"

import Image from "next/image"

const partners = [
  { name: "Islamic Foundation", logo: "/images/partners/Logo-BilletFacile.png" },
  { name: "Quran Academy", logo: "/images/partners/Logo-HA2M-TECHNOLOGY.jpeg" },
  { name: "Muslim Education Trust", logo: "/images/partners/Logo-LEPOPULAIRE.jpeg" },
  { name: "Al-Azhar University", logo: "/images/partners/Logo-Lerenifleur224.jpg" },
  { name: "Islamic Relief", logo: "/images/partners/Logo-WESTAFRICATV.png" }
]

export function PartnersSection() {
  return (
    <section className="border-t border-border bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Our Trusted Partners
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-6">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="group flex-none"
              >
                <div className="relative h-28 w-52 overflow-hidden rounded-xl border border-border shadow-sm transition-all hover:shadow-md hover:border-primary/30">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
