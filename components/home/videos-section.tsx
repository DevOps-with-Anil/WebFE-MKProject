import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play, Eye, Clock, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const videos = [
  {
    id: 1,
    title: "Beautiful Quran Recitation: Surah Al-Rahman",
    category: "Recitation",
    views: "125K",
    duration: "15:45",
    featured: true,
  },
  {
    id: 2,
    title: "Tajweed Masterclass: Rules of Noon Sakinah",
    category: "Tajweed",
    views: "45K",
    duration: "25:30",
    featured: false,
  },
  {
    id: 3,
    title: "How to Memorize Quran Effectively",
    category: "Memorization",
    views: "89K",
    duration: "18:15",
    featured: false,
  },
  {
    id: 4,
    title: "Understanding Arabic for Quran Study",
    category: "Tutorials",
    views: "67K",
    duration: "22:45",
    featured: false,
  },
]

function getCategoryColor(category: string) {
  switch (category) {
    case "Recitation":
      return "bg-primary/10 text-primary"
    case "Tajweed":
      return "bg-secondary/10 text-secondary"
    case "Memorization":
      return "bg-primary/10 text-primary"
    case "Tutorials":
      return "bg-secondary/10 text-secondary"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function VideosSection() {
  const featuredVideo = videos.find((v) => v.featured)
  const otherVideos = videos.filter((v) => !v.featured)

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-4">
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <Badge variant="outline" className="mb-3 border-primary/50 text-primary">
              <Video className="mr-1 h-3 w-3" />
              Videos
            </Badge>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Featured Videos
            </h2>
            <p className="mt-2 text-muted-foreground">
              Learn from expert teachers and beautiful recitations
            </p>
          </div>
          <Button variant="outline" asChild className="hidden md:flex group bg-transparent">
            <Link href="/videos">
              View All Videos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Featured Video */}
          {featuredVideo && (
            <Card className="group overflow-hidden border-0 shadow-xl lg:col-span-2 transition-all hover:shadow-2xl">
              <div className="relative aspect-video overflow-hidden">
                <Image 
                  src="/images/videos-thumbnail.jpg" 
                  alt="Video thumbnail" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Link href={`/videos/${featuredVideo.id}`}>
                    <button 
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-all group-hover:scale-110 group-hover:shadow-primary/30"
                      aria-label="Play video"
                    >
                      <Play className="h-8 w-8 ml-1" fill="currentColor" />
                    </button>
                  </Link>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <Badge className={getCategoryColor(featuredVideo.category)}>
                      {featuredVideo.category}
                    </Badge>
                    <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">
                      <Link href={`/videos/${featuredVideo.id}`}>
                        {featuredVideo.title}
                      </Link>
                    </h3>
                  </div>
                  <Badge className="bg-foreground/80 text-background">
                    {featuredVideo.duration}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {featuredVideo.views} views
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredVideo.duration}
                    </span>
                  </div>
                  <Button className="bg-gradient-to-r from-primary to-primary/90" asChild>
                    <Link href={`/videos/${featuredVideo.id}`}>
                      <Play className="mr-2 h-4 w-4" />
                      Watch Now
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Other Videos */}
          <div className="flex flex-col gap-4">
            {otherVideos.map((video) => (
              <Card key={video.id} className="group flex overflow-hidden border-0 shadow-md transition-all hover:shadow-xl hover:-translate-y-0.5">
                <div className="relative aspect-video w-40 shrink-0 overflow-hidden">
                  <Image 
                    src="/images/videos-thumbnail.jpg" 
                    alt="Video thumbnail" 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/20 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/90 text-primary-foreground transition-transform group-hover:scale-110">
                      <Play className="h-4 w-4 ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-1 right-1">
                    <Badge variant="secondary" className="text-xs px-1.5 py-0.5">
                      {video.duration}
                    </Badge>
                  </div>
                </div>
                <CardContent className="flex flex-col justify-center p-3">
                  <Badge className={`${getCategoryColor(video.category)} w-fit text-xs`}>
                    {video.category}
                  </Badge>
                  <h3 className="mt-1 text-sm font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                    <Link href={`/videos/${video.id}`}>{video.title}</Link>
                  </h3>
                  <span className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                    <Eye className="h-3 w-3" />
                    {video.views} views
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" asChild>
            <Link href="/videos">
              View All Videos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
