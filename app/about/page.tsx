import Link from "next/link"
import Image from "next/image"
import { Users, Target, Heart, Award, ArrowRight, HandHeart, BookOpen, Utensils, Building2, Package, Calendar, MapPin } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { label: "Years of Service", value: "15+" },
  { label: "Community Members", value: "50K+" },
  { label: "Events Hosted", value: "500+" },
  { label: "Articles Published", value: "2,000+" },
]

const values = [
  {
    icon: Users,
    title: "Community First",
    description: "Everything we do is centered around strengthening our community bonds and fostering meaningful connections.",
  },
  {
    icon: Target,
    title: "Transparency",
    description: "We believe in open communication and keeping our community informed about decisions that affect them.",
  },
  {
    icon: Heart,
    title: "Inclusivity",
    description: "We welcome everyone and celebrate the diversity that makes our community vibrant and unique.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for quality in everything we create, from events to content to community programs.",
  },
]

const team = [
  {
    name: "Jane Thompson",
    role: "Executive Director",
    bio: "Jane has been leading CommunityHub for 8 years, bringing 20+ years of nonprofit experience.",
  },
  {
    name: "Michael Chen",
    role: "Head of Events",
    bio: "Michael oversees all community events and has organized over 200 successful gatherings.",
  },
  {
    name: "Sarah Williams",
    role: "Content Director",
    bio: "Sarah leads our editorial team, ensuring quality content that serves our community.",
  },
  {
    name: "David Rodriguez",
    role: "Community Manager",
    bio: "David is the face of our community outreach, connecting with members daily.",
  },
]

const campaigns = [
  {
    slug: "quran-education",
    icon: BookOpen,
    title: "Quran Education for Every Child",
    summary:
      "Our flagship campaign provided free Quran education to underprivileged children across 15 communities with qualified teachers and learning materials.",
    image: "/images/campaigns/quran-education.jpg",
    date: "March - August 2025",
    location: "15 Communities Across the Region",
    beneficiaries: "1,280 Children",
    status: "Completed",
  },
  {
    slug: "community-iftar",
    icon: Utensils,
    title: "Community Iftar Program",
    summary:
      "We organized large-scale community iftars during Ramadan 2025, bringing together families from all backgrounds and serving over 5,000 meals.",
    image: "/images/campaigns/community-iftar.jpg",
    date: "Ramadan 2025",
    location: "City Convention Center & Local Mosques",
    beneficiaries: "5,000+ Attendees",
    status: "Completed",
  },
  {
    slug: "mosque-renovation",
    icon: Building2,
    title: "Mosque Renovation & Restoration",
    summary:
      "We restored and renovated aging mosques that serve as vital community centers, focusing on structural repairs, accessibility, and preserving Islamic architecture.",
    image: "/images/campaigns/mosque-renovation.jpg",
    date: "January - December 2025",
    location: "3 Historic Mosques",
    beneficiaries: "2,150+ Worshippers",
    status: "Completed",
  },
  {
    slug: "humanitarian-aid",
    icon: Package,
    title: "Humanitarian Aid & Relief",
    summary:
      "Our relief campaign distributed essential food packages, clothing, and medical aid to families facing hardship across multiple neighborhoods.",
    image: "/images/campaigns/humanitarian-aid.jpg",
    date: "Ongoing Since 2024",
    location: "Multiple Neighborhoods",
    beneficiaries: "1,750+ Families",
    status: "Ongoing",
  },
]

const milestones = [
  { year: "2011", event: "CommunityHub founded as a local newsletter" },
  { year: "2014", event: "Launched first annual Community Summit" },
  { year: "2017", event: "Reached 10,000 community members" },
  { year: "2019", event: "Introduced video content and online events" },
  { year: "2022", event: "Celebrated 10 years with expanded programs" },
  { year: "2024", event: "Launched contest platform and mobile app" },
  { year: "2026", event: "50,000+ members strong and growing" },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-8 md:py-10">
          <div className="container mx-auto px-4">
            <Badge variant="outline" className="mb-4">About Us</Badge>
            <h1 className="max-w-4xl text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Building Stronger Communities,{" "}
              <span className="text-primary">Together</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              CommunityHub has been the heartbeat of our neighborhood since 2011, 
              connecting residents, businesses, and organizations to create a more 
              vibrant and engaged community.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-border bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl font-bold text-primary md:text-5xl">{stat.value}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              <Card className="border-0 bg-primary text-primary-foreground shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold">Our Mission</h2>
                  <p className="mt-4 text-lg leading-relaxed opacity-90">
                    To inform, engage, and empower our community by providing a 
                    platform for sharing news, celebrating achievements, and 
                    facilitating meaningful connections between residents, 
                    businesses, and organizations.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 bg-secondary text-secondary-foreground shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold">Our Vision</h2>
                  <p className="mt-4 text-lg leading-relaxed opacity-90">
                    A thriving, connected community where every voice is heard, 
                    every achievement is celebrated, and every resident has the 
                    opportunity to participate in shaping our collective future.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-muted/30 py-10 md:py-14">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <Badge variant="outline" className="mb-4">Our Values</Badge>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                What Guides Us
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <Card key={value.title} className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-bold text-card-foreground">{value.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <Badge variant="outline" className="mb-4">Our Journey</Badge>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                Milestones
              </h2>
            </div>
            <div className="mx-auto max-w-3xl">
              <div className="relative border-l-2 border-primary/30 pl-8">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="relative mb-8 last:mb-0">
                    <div className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                      <div className="h-2 w-2 rounded-full bg-primary-foreground" />
                    </div>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                      <span className="text-lg font-bold text-primary">{milestone.year}</span>
                      <span className="text-muted-foreground">{milestone.event}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-foreground py-10 md:py-14">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <Badge variant="outline" className="mb-4 border-background/30 text-background/80">Our Team</Badge>
              <h2 className="text-3xl font-bold text-background md:text-4xl">
                Meet the People Behind CommunityHub
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <Card key={member.name} className="border-0 bg-background/5 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
                      <span className="text-2xl font-bold text-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="font-bold text-background">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                    <p className="mt-3 text-sm text-background/70">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Campaigns / Projects Section */}
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <Badge variant="outline" className="mb-4">Our Campaigns</Badge>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
                Projects Supporting Our Community
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                We run impactful campaigns that uplift lives and strengthen our community.
                Explore our past and ongoing projects to see the difference we make together.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {campaigns.map((campaign) => {
                const Icon = campaign.icon
                return (
                  <Card key={campaign.slug} className="group overflow-hidden border-0 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1">
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={campaign.image}
                        alt={campaign.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                      <Badge
                        className={`absolute right-4 top-4 ${
                          campaign.status === "Ongoing"
                            ? "bg-secondary text-secondary-foreground"
                            : "bg-primary text-primary-foreground"
                        }`}
                      >
                        {campaign.status}
                      </Badge>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary">
                            <Icon className="h-5 w-5 text-primary-foreground" />
                          </div>
                          <h3 className="text-lg font-bold text-background drop-shadow-md">
                            {campaign.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {campaign.summary}
                      </p>
                      <div className="mt-4 flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-sm text-foreground">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{campaign.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-foreground">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>{campaign.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-foreground">
                          <Users className="h-4 w-4 text-primary" />
                          <span>{campaign.beneficiaries}</span>
                        </div>
                      </div>
                      <Button className="mt-5 w-full" size="sm" asChild>
                        <Link href={`/about/campaigns/${campaign.slug}`}>
                          View Campaign Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Donation CTA Section */}
        <section className="bg-primary py-10 md:py-14">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/20">
                <HandHeart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
                Support Our Community Campaigns
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80 leading-relaxed">
                Your generous donations help us continue running life-changing campaigns. 
                Every contribution, no matter the size, directly supports families, 
                children, and communities in need.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                >
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
                  <Link href="/contact">
                    Contact Us to Help
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6">
                <div>
                  <p className="text-3xl font-bold text-primary-foreground md:text-4xl">
                    10K+
                  </p>
                  <p className="mt-1 text-sm text-primary-foreground/70">People Helped</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-foreground md:text-4xl">
                    15+
                  </p>
                  <p className="mt-1 text-sm text-primary-foreground/70">Communities Served</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-foreground md:text-4xl">
                    4
                  </p>
                  <p className="mt-1 text-sm text-primary-foreground/70">Campaigns Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Ready to Get Involved?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Join thousands of community members who are making a difference. 
              Whether you want to attend events, participate in contests, or simply stay informed.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/events">
                  Explore Events
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Contact Us
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
