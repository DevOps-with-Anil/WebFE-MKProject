import Link from "next/link"
import { Quote, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { PageAdLayout } from "@/components/page-ad-layout"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function OwnersVoicePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-8 md:py-10">
          <div className="container mx-auto px-4">
            <Badge variant="outline" className="mb-4">{"Owner's Voice"}</Badge>
            <h1 className="max-w-3xl text-4xl font-bold text-foreground md:text-5xl">
              A Message from Our Founder
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <PageAdLayout>
        <section className="py-8 md:py-10">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Founder Image & Info */}
              <div className="lg:order-2">
                <Card className="sticky top-24 border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-6 flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20">
                      <span className="text-5xl font-bold text-primary">JT</span>
                    </div>
                    <h2 className="text-2xl font-bold text-card-foreground">John Thompson</h2>
                    <p className="text-primary">Founder & Chairman</p>
                    <Separator className="my-6" />
                    <div className="space-y-3 text-left text-sm text-muted-foreground">
                      <p><span className="font-medium text-card-foreground">Founded:</span> 2011</p>
                      <p><span className="font-medium text-card-foreground">Background:</span> Community Organizing, Journalism</p>
                      <p><span className="font-medium text-card-foreground">Education:</span> BA Communications, State University</p>
                    </div>
                    <div className="mt-6 italic text-sm text-muted-foreground">
                      "Communities grow stronger when we grow together."
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Letter Content */}
              <div className="lg:col-span-2 lg:order-1">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8 md:p-12">
                    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                      <Quote className="h-8 w-8 text-primary" />
                    </div>

                    <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground">
                      <p className="text-xl leading-relaxed">
                        Dear Community Members,
                      </p>

                      <p>
                        When I started CommunityHub back in 2011, it was a simple newsletter 
                        created from my kitchen table. I had one goal: to help neighbors stay 
                        connected in an increasingly disconnected world.
                      </p>

                      <p>
                        What began as a passion project has grown into something far beyond 
                        my wildest dreams. Today, CommunityHub serves over 50,000 members, 
                        hosts hundreds of events each year, and has become the go-to source 
                        for local news, events, and community engagement.
                      </p>

                      <h3 className="text-foreground">Our Journey Together</h3>

                      <p>
                        Over the past 15 years, I have had the privilege of witnessing 
                        countless moments of community spirit: neighbors helping neighbors 
                        after storms, young people stepping up as leaders, local businesses 
                        supporting charitable causes, and strangers becoming lifelong friends 
                        at our events.
                      </p>

                      <p>
                        These moments remind me why this work matters. In an age of global 
                        connectivity, there is something irreplaceable about local community. 
                        The people you see at the grocery store, the businesses you walk past 
                        every day, the parks where your children play, these are the threads 
                        that weave the fabric of our daily lives.
                      </p>

                      <h3 className="text-foreground">Looking Forward</h3>

                      <p>
                        As we look to the future, I am more optimistic than ever. Our community 
                        faces challenges, yes, but I have seen firsthand the resilience, 
                        creativity, and compassion that our neighbors bring to every obstacle.
                      </p>

                      <p>
                        CommunityHub will continue to evolve to serve your needs. We are 
                        expanding our digital platforms, launching new programs for youth 
                        engagement, and finding innovative ways to bring people together, 
                        both online and in person.
                      </p>

                      <h3 className="text-foreground">A Personal Note</h3>

                      <p>
                        To everyone who has contributed to CommunityHub over the years, whether 
                        by attending an event, sharing a story, volunteering your time, or simply 
                        reading our content, thank you. You are the reason this community thrives.
                      </p>

                      <p>
                        I believe that when we take care of our local community, we are 
                        contributing to something much larger. Every act of kindness, every 
                        moment of connection, every effort to understand our neighbors, these 
                        ripple outward in ways we may never fully see.
                      </p>

                      <p className="text-xl">
                        Here is to the next chapter of our journey together.
                      </p>

                      <div className="mt-8">
                        <p className="mb-1 font-semibold text-foreground">With gratitude and hope,</p>
                        <p className="text-2xl font-bold text-primary" style={{ fontFamily: 'cursive' }}>
                          John Thompson
                        </p>
                        <p className="text-sm text-muted-foreground">Founder & Chairman, CommunityHub</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Previous Letters */}
                <div className="mt-8">
                  <h3 className="mb-4 text-xl font-bold text-foreground">Previous Messages</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card className="border-0 shadow-sm transition-shadow hover:shadow-md">
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground">January 2025</p>
                        <h4 className="mt-1 font-semibold text-card-foreground">New Year, New Possibilities</h4>
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                          Reflecting on the accomplishments of 2024 and sharing our vision for the year ahead.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="border-0 shadow-sm transition-shadow hover:shadow-md">
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground">July 2024</p>
                        <h4 className="mt-1 font-semibold text-card-foreground">Summer of Connection</h4>
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                          Celebrating the success of our summer programs and thanking our volunteers.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-foreground py-8 md:py-10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-background md:text-3xl">
              Join Our Community
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-background/70">
              Become part of the CommunityHub family. Stay informed, get involved, and help shape the future of our neighborhood.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/news">
                  Read Latest News
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-background/30 text-background hover:bg-background/10 bg-transparent" asChild>
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        </PageAdLayout>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
