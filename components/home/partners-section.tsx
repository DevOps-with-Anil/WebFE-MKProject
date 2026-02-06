"use client"

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
  return (
    <section className="border-t border-border bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Our Trusted Partners
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex items-center gap-3 rounded-lg border border-border bg-card px-5 py-4 shadow-sm transition-all hover:shadow-md hover:border-primary/30"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-primary/20 to-secondary/20">
                <span className="text-xs font-bold text-primary">{partner.initials}</span>
              </div>
              <span className="text-sm font-medium leading-tight text-card-foreground">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
