import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  HandHeart,
  ArrowRight,
  BookOpen,
  Utensils,
  Building2,
  Package,
  CheckCircle2,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const campaignData: Record<
  string,
  {
    slug: string
    icon: typeof BookOpen
    title: string
    status: string
    date: string
    location: string
    beneficiaries: string
    image: string
    gallery: string[]
    summary: string
    content: string
    highlights: string[]
    impact: { label: string; value: string }[]
  }
> = {
  "quran-education": {
    slug: "quran-education",
    icon: BookOpen,
    title: "Quran Education for Every Child",
    status: "Completed",
    date: "March - August 2025",
    location: "15 Communities Across the Region",
    beneficiaries: "1,280 Children",
    image: "/images/campaigns/quran-education.jpg",
    gallery: [
      "/images/campaigns/community-iftar.jpg",
      "/images/campaigns/humanitarian-aid.jpg",
    ],
    summary:
      "Our flagship campaign provided free Quran education to underprivileged children across 15 communities with qualified teachers, learning materials, and safe learning spaces.",
    content: `
      <p>The Quran Education for Every Child campaign was launched in March 2025 with a singular mission: to ensure that every child, regardless of their family's financial circumstances, has access to quality Quranic education.</p>

      <h2>What We Did</h2>
      <p>Over six months, our dedicated team of volunteers and qualified teachers worked tirelessly across 15 communities to set up learning centers, distribute educational materials, and provide structured Quran classes for children aged 5 to 15.</p>
      <p>Each learning center was equipped with copies of the Quran, tajweed guides, writing materials, and age-appropriate supplementary resources. We also provided light refreshments to ensure the children could focus on their studies.</p>

      <h2>How It Worked</h2>
      <p>Classes were held five days a week, with sessions divided by age group. Younger children focused on Arabic letter recognition and basic Surah memorization, while older students progressed through tajweed rules and longer Surah recitation. Weekly assessments tracked each child's progress, and certificates were awarded at the end of the program.</p>

      <h2>Community Response</h2>
      <p>The response from families was overwhelming. Many parents expressed gratitude for the opportunity, noting that their children had previously been unable to attend Quran classes due to financial constraints. Local community leaders also offered their support, providing venues and helping with outreach efforts.</p>

      <p>By the end of the campaign, 1,280 children had participated, with many showing remarkable improvement in their Quran recitation skills. Several of the learning centers have since been adopted by local mosques to continue the program on a permanent basis.</p>
    `,
    highlights: [
      "Set up 15 community learning centers",
      "Recruited and trained 45 qualified Quran teachers",
      "Distributed 2,000+ sets of learning materials",
      "Held weekly assessments and progress tracking",
      "Awarded completion certificates to all participants",
      "6 centers adopted by local mosques for permanent use",
    ],
    impact: [
      { label: "Children Enrolled", value: "1,280" },
      { label: "Communities Reached", value: "15" },
      { label: "Teachers Recruited", value: "45" },
      { label: "Learning Materials", value: "2,000+" },
    ],
  },
  "community-iftar": {
    slug: "community-iftar",
    icon: Utensils,
    title: "Community Iftar Program",
    status: "Completed",
    date: "Ramadan 2025",
    location: "City Convention Center & Local Mosques",
    beneficiaries: "5,000+ Attendees",
    image: "/images/campaigns/community-iftar.jpg",
    gallery: [
      "/images/campaigns/quran-education.jpg",
      "/images/campaigns/humanitarian-aid.jpg",
    ],
    summary:
      "We organized large-scale community iftars during Ramadan 2025, bringing together families from all backgrounds and serving over 5,000 meals across the holy month.",
    content: `
      <p>The Community Iftar Program was one of our most beloved campaigns during Ramadan 2025. Our goal was simple: to ensure that no one in our community breaks their fast alone, and that every family, regardless of their financial situation, enjoys a nourishing and dignified iftar meal.</p>

      <h2>The Scale of the Program</h2>
      <p>Over the 30 days of Ramadan, we organized daily iftar gatherings at the City Convention Center and partnered with 8 local mosques to extend our reach. Each evening, freshly prepared meals were served to hundreds of guests, including families, students, workers, and the elderly.</p>

      <h2>Behind the Scenes</h2>
      <p>A team of 120 volunteers worked in rotating shifts to prepare, cook, and serve meals. Local restaurants and catering businesses donated food and services, while community members contributed ingredients and supplies. The menu was carefully planned to include nutritious, balanced meals featuring traditional dishes like dates, soups, rice, grilled meats, salads, and desserts.</p>

      <h2>More Than Just a Meal</h2>
      <p>Beyond the food, the iftar gatherings became a space for community building. Guest speakers shared reflections on Quranic verses, children participated in Quran recitation activities, and families from different backgrounds sat together, forging new friendships. Many attendees remarked that the program felt like one large, extended family gathering.</p>

      <p>The program served over 5,000 people across Ramadan and received overwhelming positive feedback. Plans are already underway to expand the program for Ramadan 2026.</p>
    `,
    highlights: [
      "Served iftar meals daily for 30 days of Ramadan",
      "Partnered with 8 local mosques for wider reach",
      "120 volunteers contributed their time",
      "Local restaurants and businesses donated food",
      "Included Quran recitation and community activities",
      "Plans underway to expand for Ramadan 2026",
    ],
    impact: [
      { label: "Meals Served", value: "5,000+" },
      { label: "Volunteers", value: "120" },
      { label: "Partner Mosques", value: "8" },
      { label: "Days of Service", value: "30" },
    ],
  },
  "mosque-renovation": {
    slug: "mosque-renovation",
    icon: Building2,
    title: "Mosque Renovation & Restoration",
    status: "Completed",
    date: "January - December 2025",
    location: "3 Historic Mosques",
    beneficiaries: "2,150+ Worshippers",
    image: "/images/campaigns/mosque-renovation.jpg",
    gallery: [
      "/images/campaigns/quran-education.jpg",
      "/images/campaigns/community-iftar.jpg",
    ],
    summary:
      "We restored and renovated three aging mosques that serve as vital community centers, focusing on structural repairs, accessibility improvements, and preserving beautiful Islamic architecture.",
    content: `
      <p>The Mosque Renovation and Restoration project was a year-long effort to breathe new life into three historic mosques in our region. These mosques, some dating back over 50 years, had fallen into disrepair and were struggling to serve their growing congregations safely and comfortably.</p>

      <h2>What Was Done</h2>
      <p>Our renovation work covered a comprehensive scope: structural reinforcement of aging walls and foundations, roof repairs and waterproofing, complete electrical and plumbing upgrades, new flooring and carpeting for prayer areas, restoration of intricate Islamic calligraphy and geometric tile work, and full accessibility improvements including ramps and accessible washrooms.</p>

      <h2>Preserving Heritage</h2>
      <p>A key priority was preserving the original architectural beauty of each mosque. We brought in artisans specializing in Islamic art to carefully restore faded calligraphy, repair mosaic tilework, and repaint decorative elements. Where original features could not be saved, they were faithfully reproduced using traditional techniques and materials.</p>

      <h2>Community Impact</h2>
      <p>The renovated mosques now serve as vibrant community hubs, hosting not only daily prayers but also educational programs, youth activities, and community meetings. Worshippers have expressed deep appreciation for the improved facilities, particularly the accessibility features that now allow elderly and disabled community members to participate fully.</p>

      <p>Over 2,150 regular worshippers now benefit from the improved facilities, and the renovated spaces have attracted new attendees who had previously been deterred by the deteriorating conditions.</p>
    `,
    highlights: [
      "Renovated 3 historic mosques over 12 months",
      "Structural reinforcement and waterproofing",
      "Restored original Islamic calligraphy and tilework",
      "Full electrical and plumbing upgrades",
      "Added accessibility ramps and washrooms",
      "Mosques now host educational and youth programs",
    ],
    impact: [
      { label: "Mosques Renovated", value: "3" },
      { label: "Worshippers Served", value: "2,150+" },
      { label: "Artisans Engaged", value: "18" },
      { label: "Project Duration", value: "12 Months" },
    ],
  },
  "humanitarian-aid": {
    slug: "humanitarian-aid",
    icon: Package,
    title: "Humanitarian Aid & Relief",
    status: "Ongoing",
    date: "Ongoing Since 2024",
    location: "Multiple Neighborhoods",
    beneficiaries: "1,750+ Families",
    image: "/images/campaigns/humanitarian-aid.jpg",
    gallery: [
      "/images/campaigns/community-iftar.jpg",
      "/images/campaigns/mosque-renovation.jpg",
    ],
    summary:
      "Our ongoing relief campaign distributes essential food packages, clothing, and medical aid to families facing hardship across multiple neighborhoods.",
    content: `
      <p>The Humanitarian Aid and Relief campaign has been our longest-running initiative, providing critical support to families experiencing financial hardship, displacement, or medical emergencies since 2024. It is an ongoing effort driven by the belief that no family in our community should go without basic necessities.</p>

      <h2>What We Provide</h2>
      <p>Our aid packages are tailored to the specific needs of each family and typically include: non-perishable food items sufficient for one month, clean clothing and blankets, basic hygiene products, and referrals to medical services where needed. For families with school-age children, we also include school supplies and educational materials.</p>

      <h2>How We Identify Families in Need</h2>
      <p>We work closely with local mosques, community leaders, social workers, and neighborhood committees to identify families who are most in need. Each case is assessed individually to ensure that aid reaches those who need it most. We also operate a confidential referral system so community members can discreetly flag families who may be struggling.</p>

      <h2>Ongoing Commitment</h2>
      <p>Unlike our other campaigns, the Humanitarian Aid initiative is not time-bound. As long as there are families in need, we will continue to provide support. Our volunteer distribution teams operate on monthly cycles, delivering packages directly to family homes to preserve dignity and convenience.</p>

      <p>Since its launch, the campaign has supported over 1,750 families across multiple neighborhoods. We are continually expanding our reach and welcome donations of money, food, clothing, and volunteer time to help us sustain and grow this vital program.</p>
    `,
    highlights: [
      "Delivered monthly aid packages to 1,750+ families",
      "Provides food, clothing, hygiene products, and medical referrals",
      "Includes school supplies for children",
      "Works with local mosques and community leaders",
      "Confidential referral system for families in need",
      "Ongoing campaign with no end date",
    ],
    impact: [
      { label: "Families Supported", value: "1,750+" },
      { label: "Neighborhoods", value: "12" },
      { label: "Monthly Deliveries", value: "200+" },
      { label: "Running Since", value: "2024" },
    ],
  },
}

const allCampaigns = Object.values(campaignData)

export default async function CampaignDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const campaign = campaignData[slug]

  if (!campaign) {
    notFound()
  }

  const Icon = campaign.icon
  const otherCampaigns = allCampaigns.filter((c) => c.slug !== slug)

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Header */}
        <section className="relative">
          <div className="relative h-52 w-full md:h-64">
            <Image
              src={campaign.image}
              alt={campaign.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/10" />
          </div>
          <div className="container mx-auto px-4">
            <div className="relative -mt-24 z-10 pb-8">
              <Link
                href="/about"
                className="mb-4 inline-flex items-center text-sm text-background/80 hover:text-background transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to About & Campaigns
              </Link>
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary shadow-lg">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <Badge
                      className={
                        campaign.status === "Ongoing"
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-primary text-primary-foreground"
                      }
                    >
                      {campaign.status}
                    </Badge>
                  </div>
                  <h1 className="text-3xl font-bold text-background md:text-4xl lg:text-5xl text-balance drop-shadow-md">
                    {campaign.title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Info Bar */}
        <section className="border-y border-border bg-muted/30 py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-foreground">
                <Calendar className="h-4 w-4 text-primary" />
                <span>{campaign.date}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{campaign.location}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Users className="h-4 w-4 text-primary" />
                <span>{campaign.beneficiaries}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Area */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                  {campaign.summary}
                </p>

                <article
                  className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground"
                  dangerouslySetInnerHTML={{ __html: campaign.content }}
                />

                {/* Gallery */}
                {campaign.gallery.length > 0 && (
                  <div className="mt-10">
                    <h3 className="mb-4 text-lg font-semibold text-foreground">
                      Campaign Gallery
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {campaign.gallery.map((img, index) => (
                        <div
                          key={index}
                          className="relative aspect-video overflow-hidden rounded-xl"
                        >
                          <Image
                            src={img}
                            alt={`${campaign.title} gallery image ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Share */}
                <div className="mt-10 border-t border-border pt-8">
                  <h3 className="mb-4 text-sm font-semibold text-foreground">
                    Share this campaign
                  </h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`/about/campaigns/${slug}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Share on Facebook"
                      >
                        <Facebook className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`/about/campaigns/${slug}`)}&text=${encodeURIComponent(campaign.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Share on Twitter"
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`/about/campaigns/${slug}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Share on LinkedIn"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" aria-label="Share">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* Impact Stats */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-bold text-card-foreground">
                      Campaign Impact
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {campaign.impact.map((stat) => (
                        <div key={stat.label} className="text-center">
                          <p className="text-2xl font-bold text-primary">
                            {stat.value}
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Highlights */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-bold text-card-foreground">
                      Key Highlights
                    </h3>
                    <ul className="space-y-3">
                      {campaign.highlights.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span className="text-sm text-muted-foreground">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Donate CTA */}
                <Card className="border-0 bg-primary shadow-lg">
                  <CardContent className="p-6 text-center">
                    <HandHeart className="mx-auto mb-3 h-10 w-10 text-primary-foreground" />
                    <h3 className="mb-2 text-lg font-bold text-primary-foreground">
                      Support Our Mission
                    </h3>
                    <p className="mb-4 text-sm text-primary-foreground/80 leading-relaxed">
                      Help us continue running campaigns like this. Your donation directly supports
                      families and communities in need.
                    </p>
                    <Button
                      variant="secondary"
                      className="w-full"
                      asChild
                    >
                      <Link href="/contact">
                        <HandHeart className="mr-2 h-4 w-4" />
                        Donate Now
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Other Campaigns */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-bold text-card-foreground">
                      Other Campaigns
                    </h3>
                    <div className="space-y-4">
                      {otherCampaigns.map((other) => {
                        const OtherIcon = other.icon
                        return (
                          <div key={other.slug} className="group">
                            <div className="flex items-start gap-3">
                              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                <OtherIcon className="h-4 w-4 text-primary" />
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-card-foreground group-hover:text-primary transition-colors">
                                  <Link href={`/about/campaigns/${other.slug}`}>
                                    {other.title}
                                  </Link>
                                </h4>
                                <p className="mt-0.5 text-xs text-muted-foreground">
                                  {other.date}
                                </p>
                              </div>
                            </div>
                            <Separator className="mt-4" />
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </aside>
            </div>
          </div>
        </section>

        {/* Donation Banner */}
        <section className="bg-primary py-8 md:py-10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl text-balance">
              Every Contribution Makes a Difference
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-primary-foreground/80 leading-relaxed">
              Your generous donation helps us continue supporting communities through
              education, relief, and restoration projects.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  <HandHeart className="mr-2 h-5 w-5" />
                  Donate Now
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                asChild
              >
                <Link href="/about">
                  View All Campaigns
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
