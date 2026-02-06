"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Trophy, Users, Clock, Star, Filter, ArrowRight, Bell } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Pagination } from "@/components/pagination"

const contestTypes = ["All", "Memorization", "Recitation", "Tajweed", "Writing"]

const liveContests = [
  {
    id: 1,
    title: "Surah Al-Baqarah Memorization Challenge",
    description: "Complete memorization of Surah Al-Baqarah with proper Tajweed. Open to all ages and skill levels.",
    type: "Memorization",
    prize: "$1000",
    participants: 456,
    daysLeft: 5,
    totalDays: 30,
    status: "Live",
    featured: true,
  },
  {
    id: 2,
    title: "Quran Recitation Competition",
    description: "Showcase your beautiful recitation skills. Judges will evaluate based on melody, tajweed, and expression.",
    type: "Recitation",
    prize: "$500",
    participants: 234,
    daysLeft: 12,
    totalDays: 45,
    status: "Live",
    featured: false,
  },
  {
    id: 3,
    title: "Youth Tajweed Excellence Award",
    description: "For participants under 18 years old. Demonstrate mastery of Tajweed rules.",
    type: "Tajweed",
    prize: "$300",
    participants: 189,
    daysLeft: 8,
    totalDays: 30,
    status: "Live",
    featured: false,
  },
]

const upcomingContests = [
  {
    id: 4,
    title: "Juz Amma Complete Memorization",
    description: "Memorize the entire 30th Juz of the Quran. Perfect for beginners and intermediate learners.",
    type: "Memorization",
    prize: "$750",
    startsIn: "15 days",
    duration: "60 days",
    status: "Upcoming",
  },
  {
    id: 5,
    title: "Islamic Essay Writing Contest",
    description: "Write about the impact of Quran in modern life. Essays judged on content, clarity, and insight.",
    type: "Writing",
    prize: "$400",
    startsIn: "30 days",
    duration: "45 days",
    status: "Upcoming",
  },
]

const closedContests = [
  {
    id: 101,
    title: "Ramadan Quran Marathon 2025",
    description: "Complete Quran recitation during the blessed month.",
    type: "Recitation",
    prize: "$1500",
    participants: 892,
    winner: "Ahmad Hassan",
    status: "Closed",
  },
  {
    id: 102,
    title: "Surah Yasin Memorization 2025",
    description: "Memorize Surah Yasin with perfect Tajweed.",
    type: "Memorization",
    prize: "$500",
    participants: 345,
    winner: "Fatima Ali",
    status: "Closed",
  },
]

function getStatusColor(status: string) {
  switch (status) {
    case "Live":
      return "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground"
    case "Upcoming":
      return "bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground"
    case "Closed":
      return "bg-muted text-muted-foreground"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export default function ContestsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedType, setSelectedType] = useState("All")
  const totalPages = 3
  
  const featuredContest = liveContests.find((c) => c.featured)
  const regularLiveContests = liveContests.filter((c) => !c.featured)

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Header */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-12 md:py-16">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/30 rounded-full blur-3xl" />
          </div>
          <div className="container relative mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <Badge variant="outline" className="mb-4 border-primary text-primary">Contests</Badge>
                <h1 className="text-4xl font-bold text-foreground md:text-5xl">
                  Quran Challenges
                </h1>
                <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                  Showcase your Quran skills, compete with fellow learners, and win amazing prizes!
                </p>
              </div>
              <Card className="border-0 shadow-lg bg-card/80 backdrop-blur">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-card-foreground mb-2">Want to Participate?</h3>
                  <p className="text-sm text-muted-foreground mb-4">Subscribe to get notified about new contests</p>
                  <div className="flex gap-2">
                    <Input placeholder="Your email" className="flex-1" />
                    <Button className="bg-gradient-to-r from-primary to-primary/90">
                      <Bell className="h-4 w-4 mr-2" />
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="sticky top-[104px] z-40 border-b border-border bg-background/95 backdrop-blur py-4">
          <div className="container mx-auto flex flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {contestTypes.map((type) => (
                <Button
                  key={type}
                  variant={type === selectedType ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType(type)}
                  className={type === selectedType ? "bg-gradient-to-r from-primary to-primary/90" : ""}
                >
                  {type}
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Input 
                placeholder="Search contests..." 
                className="w-full md:w-64"
              />
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Contests Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="live" className="w-full">
              <TabsList className="mb-8 bg-muted/50">
                <TabsTrigger value="live" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Live Contests
                </TabsTrigger>
                <TabsTrigger value="upcoming" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
                  Upcoming
                </TabsTrigger>
                <TabsTrigger value="closed">
                  Past Winners
                </TabsTrigger>
              </TabsList>

              <TabsContent value="live">
                {/* Featured Contest */}
                {featuredContest && (
                  <Card className="mb-8 overflow-hidden border-0 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 text-background shadow-2xl">
                    <div className="grid md:grid-cols-2">
                      <div className="relative flex aspect-video items-center justify-center md:aspect-auto md:min-h-[350px] overflow-hidden">
                        <Image 
                          src="/images/challenges-thumbnail.jpg" 
                          alt={featuredContest.title}
                          fill
                          className="object-cover opacity-30"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-transparent" />
                        <Trophy className="relative h-32 w-32 text-primary/60" />
                      </div>
                      <CardContent className="flex flex-col justify-center p-6 md:p-8">
                        <div className="mb-3 flex items-center gap-2">
                          <Badge className={getStatusColor(featuredContest.status)}>{featuredContest.status}</Badge>
                          <Badge variant="outline" className="border-background/30 text-background/80">{featuredContest.type}</Badge>
                        </div>
                        <h2 className="text-2xl font-bold md:text-3xl">
                          {featuredContest.title}
                        </h2>
                        <p className="mt-4 text-background/70 leading-relaxed">
                          {featuredContest.description}
                        </p>
                        
                        <div className="mt-6 grid grid-cols-3 gap-4">
                          <div className="text-center rounded-lg bg-background/10 p-3">
                            <Star className="mx-auto h-5 w-5 text-primary" />
                            <p className="mt-1 text-xl font-bold">{featuredContest.prize}</p>
                            <p className="text-xs text-background/60">Prize Pool</p>
                          </div>
                          <div className="text-center rounded-lg bg-background/10 p-3">
                            <Users className="mx-auto h-5 w-5 text-secondary" />
                            <p className="mt-1 text-xl font-bold">{featuredContest.participants}</p>
                            <p className="text-xs text-background/60">Participants</p>
                          </div>
                          <div className="text-center rounded-lg bg-background/10 p-3">
                            <Clock className="mx-auto h-5 w-5 text-primary" />
                            <p className="mt-1 text-xl font-bold">{featuredContest.daysLeft}</p>
                            <p className="text-xs text-background/60">Days Left</p>
                          </div>
                        </div>

                        <div className="mt-6">
                          <div className="mb-2 flex justify-between text-sm text-background/70">
                            <span>Contest Progress</span>
                            <span>{Math.round(((featuredContest.totalDays - featuredContest.daysLeft) / featuredContest.totalDays) * 100)}%</span>
                          </div>
                          <Progress 
                            value={((featuredContest.totalDays - featuredContest.daysLeft) / featuredContest.totalDays) * 100} 
                            className="h-2 bg-background/20"
                          />
                        </div>

                        <div className="mt-6 flex gap-3">
                          <Button asChild className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary">
                            <Link href={`/contests/${featuredContest.id}`}>
                              Register Now
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                          <Button variant="outline" className="border-background/30 text-background hover:bg-background/10 bg-transparent" asChild>
                            <Link href={`/contests/${featuredContest.id}`}>
                              View Details
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                )}

                {/* Live Contests Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {regularLiveContests.map((contest) => (
                    <Card key={contest.id} className="group overflow-hidden border-0 shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
                      <div className="relative flex aspect-video items-center justify-center overflow-hidden">
                        <Image 
                          src="/images/challenges-thumbnail.jpg" 
                          alt={contest.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                        <Trophy className="relative h-12 w-12 text-primary/80" />
                      </div>
                      <CardContent className="p-5">
                        <div className="mb-3 flex items-center justify-between">
                          <Badge className={getStatusColor(contest.status)}>{contest.status}</Badge>
                          <Badge variant="secondary">{contest.type}</Badge>
                        </div>
                        <h3 className="font-bold text-card-foreground group-hover:text-primary transition-colors">
                          <Link href={`/contests/${contest.id}`}>{contest.title}</Link>
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                          {contest.description}
                        </p>
                        
                        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-4">
                          <div className="text-center">
                            <p className="text-lg font-bold text-primary">{contest.prize}</p>
                            <p className="text-xs text-muted-foreground">Prize</p>
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-bold text-foreground">{contest.participants}</p>
                            <p className="text-xs text-muted-foreground">Entries</p>
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-bold text-foreground">{contest.daysLeft}</p>
                            <p className="text-xs text-muted-foreground">Days</p>
                          </div>
                        </div>

                        <Button className="mt-4 w-full bg-gradient-to-r from-primary to-primary/90" asChild>
                          <Link href={`/contests/${contest.id}`}>Enter Contest</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                <div className="mt-12">
                  <Pagination 
                    currentPage={currentPage} 
                    totalPages={totalPages} 
                    onPageChange={setCurrentPage}
                  />
                </div>
              </TabsContent>

              <TabsContent value="upcoming">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {upcomingContests.map((contest) => (
                    <Card key={contest.id} className="group overflow-hidden border-0 shadow-md transition-all hover:shadow-lg">
                      <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-secondary/20 to-secondary/5">
                        <Trophy className="h-12 w-12 text-secondary/40" />
                      </div>
                      <CardContent className="p-5">
                        <div className="mb-3 flex items-center justify-between">
                          <Badge className={getStatusColor(contest.status)}>{contest.status}</Badge>
                          <Badge variant="outline">{contest.type}</Badge>
                        </div>
                        <h3 className="font-bold text-card-foreground group-hover:text-secondary transition-colors">
                          <Link href={`/contests/${contest.id}`}>{contest.title}</Link>
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                          {contest.description}
                        </p>
                        
                        <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                          <p><span className="font-medium text-foreground">Prize:</span> {contest.prize}</p>
                          <p><span className="font-medium text-foreground">Starts in:</span> {contest.startsIn}</p>
                          <p><span className="font-medium text-foreground">Duration:</span> {contest.duration}</p>
                        </div>

                        <Button variant="secondary" className="mt-4 w-full" asChild>
                          <Link href={`/contests/${contest.id}`}>
                            <Bell className="mr-2 h-4 w-4" />
                            Get Notified
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="closed">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {closedContests.map((contest) => (
                    <Card key={contest.id} className="group overflow-hidden border-0 bg-muted/30 shadow-sm">
                      <div className="flex aspect-video items-center justify-center bg-muted/50">
                        <Trophy className="h-12 w-12 text-muted-foreground/20" />
                      </div>
                      <CardContent className="p-5">
                        <div className="mb-3 flex items-center justify-between">
                          <Badge variant="secondary" className="opacity-70">{contest.status}</Badge>
                          <Badge variant="outline" className="opacity-70">{contest.type}</Badge>
                        </div>
                        <h3 className="font-bold text-card-foreground/80">
                          {contest.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                          {contest.description}
                        </p>
                        
                        <div className="mt-4 rounded-lg bg-secondary/10 p-3">
                          <p className="text-xs text-muted-foreground">Winner</p>
                          <p className="font-semibold text-secondary">{contest.winner}</p>
                        </div>

                        <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
                          <span>{contest.participants} participants</span>
                          <span>{contest.prize} prize</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
