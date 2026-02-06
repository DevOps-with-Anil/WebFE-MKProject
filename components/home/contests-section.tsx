import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Trophy, Users, Clock, Star, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const contests = [
  {
    id: 1,
    title: "Surah Al-Baqarah Challenge",
    description: "Complete memorization of Surah Al-Baqarah with proper Tajweed. Open to all levels.",
    participants: 456,
    daysLeft: 5,
    prize: "$1000",
    status: "Live",
    type: "Memorization",
  },
  {
    id: 2,
    title: "Quran Recitation Competition",
    description: "Showcase your beautiful recitation skills. Judges evaluate melody, tajweed, and expression.",
    participants: 234,
    daysLeft: 12,
    prize: "$500",
    status: "Live",
    type: "Recitation",
  },
  {
    id: 3,
    title: "Juz Amma Memorization",
    description: "Perfect for beginners. Memorize the entire 30th Juz of the Quran.",
    participants: 0,
    daysLeft: 30,
    prize: "$750",
    status: "Upcoming",
    type: "Memorization",
  },
]

function getStatusColor(status: string) {
  switch (status) {
    case "Live":
      return "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground animate-pulse"
    case "Upcoming":
      return "bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground"
    case "Closed":
      return "bg-muted text-muted-foreground"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function ContestsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 py-16 md:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>
      
      <div className="container relative mx-auto px-4">
        <div className="mb-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <Badge variant="outline" className="mb-3 border-primary/50 text-primary">
              <Trophy className="mr-1 h-3 w-3" />
              Contests
            </Badge>
            <h2 className="text-3xl font-bold text-background md:text-4xl">
              Ongoing Challenges
            </h2>
            <p className="mt-2 text-background/70">
              Test your Quran skills and win amazing prizes
            </p>
          </div>
          
          {/* Subscribe Card */}
          <Card className="border-0 bg-background/10 backdrop-blur-sm shadow-xl lg:max-w-md">
            <CardContent className="p-4">
              <p className="text-sm font-medium text-background mb-2">Get notified about new contests</p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Your email address" 
                  className="bg-background/20 border-background/20 text-background placeholder:text-background/50"
                />
                <Button size="sm" className="bg-primary hover:bg-primary/90 shrink-0">
                  <Bell className="h-4 w-4 mr-1" />
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contests.map((contest) => (
            <Card 
              key={contest.id} 
              className="group overflow-hidden border-0 bg-background/5 backdrop-blur-sm transition-all hover:bg-background/10 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <Badge className={getStatusColor(contest.status)}>
                    {contest.status}
                  </Badge>
                  <Badge variant="outline" className="border-background/20 text-background/80">
                    {contest.type}
                  </Badge>
                </div>
                
                <div className="mb-4 relative h-32 w-full overflow-hidden rounded-xl">
                  <Image 
                    src="/images/challenges-thumbnail.jpg" 
                    alt="Challenge thumbnail" 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <Trophy className="absolute bottom-3 right-3 h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-background group-hover:text-primary transition-colors">
                  <Link href={`/contests/${contest.id}`}>{contest.title}</Link>
                </h3>
                <p className="mt-2 text-sm text-background/70 line-clamp-2">
                  {contest.description}
                </p>
                
                <div className="mt-4 grid grid-cols-3 gap-4 border-t border-background/10 pt-4">
                  <div className="text-center">
                    <Star className="mx-auto h-4 w-4 text-primary" />
                    <p className="mt-1 text-lg font-bold text-background">{contest.prize}</p>
                    <p className="text-xs text-background/60">Prize</p>
                  </div>
                  <div className="text-center">
                    <Users className="mx-auto h-4 w-4 text-secondary" />
                    <p className="mt-1 text-lg font-bold text-background">{contest.participants}</p>
                    <p className="text-xs text-background/60">Participants</p>
                  </div>
                  <div className="text-center">
                    <Clock className="mx-auto h-4 w-4 text-primary" />
                    <p className="mt-1 text-lg font-bold text-background">{contest.daysLeft}</p>
                    <p className="text-xs text-background/60">Days Left</p>
                  </div>
                </div>
                
                <Button 
                  className="mt-6 w-full group" 
                  variant={contest.status === "Live" ? "default" : "secondary"}
                  asChild
                >
                  <Link href={`/contests/${contest.id}`}>
                    {contest.status === "Live" ? "Register Now" : "Get Notified"}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="secondary" size="lg" asChild className="group">
            <Link href="/contests">
              View All Contests
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
