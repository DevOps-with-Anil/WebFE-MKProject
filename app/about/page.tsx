import Link from "next/link"
import Image from "next/image"
import { Users, Target, Heart, Award, ArrowRight, HandHeart, BookOpen, Utensils, Building2, Package } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

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
    icon: BookOpen,
    title: "Quran Education for Every Child",
    description:
      "Our flagship campaign provides free Quran education to underprivileged children across 15 communities. We supply learning materials, qualified teachers, and safe learning spaces to ensure every child has access to quality Quranic education regardless of their family's financial situation.",
    image: "/images/campaigns/quran-education.jpg",
    raised: 42500,
    goal: 75000,
    supporters: 1280,
  },
  {
    icon: Utensils,
    title: "Community Iftar Program",
    description:
      "Every Ramadan, we organize large-scale community iftars bringing together families from all backgrounds. This campaign funds meals for over 5,000 people, fosters unity, and ensures no one breaks their fast alone. Your donation covers food, venue, and logistics for these gatherings.",
    image: "/images/campaigns/community-iftar.jpg",
    raised: 28000,
    goal: 50000,
    supporters: 920,
  },
  {
    icon: Building2,
    title: "Mosque Renovation & Restoration",
    description:
      "Help us restore and renovate aging mosques that serve as vital community centers. This project focuses on structural repairs, accessibility improvements, and preserving beautiful Islamic architecture so these sacred spaces can continue serving generations to come.",
    image: "/images/campaigns/mosque-renovation.jpg",
    raised: 95000,
    goal: 150000,
    supporters: 2150,
  },
  {
    icon: Package,
    title: "Humanitarian Aid & Relief",
    description:
      "Our humanitarian relief campaign provides essential supplies including food packages, clothing, and medical aid to families facing hardship. We work directly with local communities to identify those most in need and deliver assistance where it matters most.",
    image: "/images/campaigns/humanitarian-aid.jpg",
    raised: 61000,
    goal: 100000,
    supporters: 1750,
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
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
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
        <section className="py-16 md:py-24">
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
        <section className="bg-muted/30 py-16 md:py-24">
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
        <section className="py-16 md:py-24">
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
        <section className="bg-foreground py-16 md:py-24">
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
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <Badge variant="outline" className="mb-4">Our Campaigns</Badge>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
                Projects Supporting Our Community
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                We run impactful campaigns that uplift lives and strengthen our community.
                Every contribution, big or small, makes a real difference.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {campaigns.map((campaign) => {
                const Icon = campaign.icon
                const percentage = Math.round((campaign.raised / campaign.goal) * 100)
                return (
                  <Card key={campaign.title} className="overflow-hidden border-0 shadow-lg">
                    <div className="relative h-56 w-full">
                      <Image
                        src={campaign.image}
                        alt={campaign.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                          <Icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <span className="text-lg font-bold text-background drop-shadow-md">
                          {campaign.title}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {campaign.description}
                      </p>
                      <div className="mt-5">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-semibold text-foreground">
                            ${campaign.raised.toLocaleString()} raised
                          </span>
                          <span className="text-muted-foreground">
                            of ${campaign.goal.toLocaleString()}
                          </span>
                        </div>
                        <Progress value={percentage} className="mt-2 h-2" />
                        <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                          <span>{percentage}% funded</span>
                          <span className="flex items-center gap-1">
                            <Heart className="h-3 w-3 text-primary" />
                            {campaign.supporters.toLocaleString()} supporters
                          </span>
                        </div>
                      </div>
                      <Button className="mt-5 w-full" size="sm">
                        <HandHeart className="mr-2 h-4 w-4" />
                        Donate to This Campaign
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Donation CTA Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/20">
                <HandHeart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
                Your Generosity Can Change Lives
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80 leading-relaxed">
                Every donation, no matter the size, helps us continue our mission of building 
                a stronger, more connected, and compassionate community. Support our campaigns 
                and be a part of something bigger.
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
                    Learn How to Help
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6">
                <div>
                  <p className="text-3xl font-bold text-primary-foreground md:text-4xl">
                    $226K+
                  </p>
                  <p className="mt-1 text-sm text-primary-foreground/70">Total Raised</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-foreground md:text-4xl">
                    6,100+
                  </p>
                  <p className="mt-1 text-sm text-primary-foreground/70">Generous Donors</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary-foreground md:text-4xl">
                    4
                  </p>
                  <p className="mt-1 text-sm text-primary-foreground/70">Active Campaigns</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
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
