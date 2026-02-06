"use client"

import { useEffect, useState } from "react"

const partners = [
  { name: "Islamic Foundation", initials: "IF" },
  { name: "Quran Academy", initials: "QA" },
  { name: "Muslim Education Trust", initials: "MET" },
  { name: "Al-Azhar University", initials: "AAU" },
  { name: "Islamic Relief", initials: "IR" },
  { name: "Dar Al-Quran", initials: "DAQ" },
  { name: "Muslim World League", initials: "MWL" },
  { name: "International Quran Foundation", initials: "IQF" },
]

export function PartnersSection() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % (partners.length * 200))
    }, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="border-t border-border bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Our Trusted Partners
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-muted/30 to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-muted/30 to-transparent" />
          
          <div 
            className="flex gap-12 transition-transform duration-100"
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {[...partners, ...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex shrink-0 items-center gap-3 rounded-lg border border-border bg-card px-6 py-4 shadow-sm transition-all hover:shadow-md hover:border-primary/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20">
                  <span className="text-sm font-bold text-primary">{partner.initials}</span>
                </div>
                <span className="whitespace-nowrap font-medium text-card-foreground">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
