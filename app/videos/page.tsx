"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Play, Eye, Clock, Filter, ThumbsUp } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Pagination } from "@/components/pagination"

const categories = ["All", "Recitation", "Tajweed", "Memorization", "Lectures", "Tutorials"]

const videos = [
  {
    id: 1,
    title: "Beautiful Quran Recitation: Surah Al-Rahman",
    description: "Experience the melodious recitation of Surah Al-Rahman by renowned Qari.",
    category: "Recitation",
    views: "125K",
    likes: 8560,
    duration: "15:45",
    date: "Jan 20, 2026",
    featured: true,
  },
  {
    id: 2,
    title: "Tajweed Masterclass: Rules of Noon Sakinah",
    description: "Learn the essential rules of Noon Sakinah and Tanween with practical examples.",
    category: "Tajweed",
    views: "45K",
    likes: 3420,
    duration: "25:30",
    date: "Jan 18, 2026",
    featured: false,
  },
  {
    id: 3,
    title: "How to Memorize Quran Effectively",
    description: "Proven techniques and strategies for efficient Quran memorization.",
    category: "Memorization",
    views: "89K",
    likes: 5670,
    duration: "18:15",
    date: "Jan 15, 2026",
    featured: false,
  },
  {
    id: 4,
    title: "Friday Sermon: The Importance of Patience",
    description: "An inspiring lecture on the virtue of patience in Islam.",
    category: "Lectures",
    views: "34K",
    likes: 2890,
    duration: "35:20",
    date: "Jan 12, 2026",
    featured: false,
  },
  {
    id: 5,
    title: "Arabic Alphabet for Beginners",
    description: "Start your Quran learning journey with this comprehensive Arabic alphabet guide.",
    category: "Tutorials",
    views: "67K",
    likes: 4230,
    duration: "22:45",
    date: "Jan 10, 2026",
    featured: false,
  },
  {
    id: 6,
    title: "Surah Al-Mulk Complete Recitation",
    description: "Full recitation of Surah Al-Mulk with beautiful voice and clear pronunciation.",
    category: "Recitation",
    views: "98K",
    likes: 7120,
    duration: "12:30",
    date: "Jan 8, 2026",
    featured: false,
  },
  {
    id: 7,
    title: "Understanding Makharij al-Huruf",
    description: "Deep dive into the articulation points of Arabic letters.",
    category: "Tajweed",
    views: "28K",
    likes: 1980,
    duration: "30:00",
    date: "Jan 5, 2026",
    featured: false,
  },
  {
    id: 8,
    title: "Ramadan Preparation: Spiritual Tips",
    description: "Get ready for the blessed month with these spiritual preparation tips.",
    category: "Lectures",
    views: "56K",
    likes: 4560,
    duration: "28:15",
    date: "Jan 3, 2026",
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
    case "Lectures":
      return "bg-secondary/10 text-secondary"
    case "Tutorials":
      return "bg-primary/10 text-primary"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export default function VideosPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const itemsPerPage = 6
  const totalPages = Math.ceil(videos.length / itemsPerPage)
  
  const featuredVideo = videos.find((v) => v.featured)
  const filteredVideos = videos.filter((v) => {
    if (selectedCategory === "All") return !v.featured
    return v.category === selectedCategory && !v.featured
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Header */}
        <section className="relative overflow-hidden bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 py-8 md:py-10">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>
          <div className="container relative mx-auto px-4">
            <Badge variant="outline" className="mb-4 border-background/30 text-background/80">Videos</Badge>
            <h1 className="text-4xl font-bold text-background md:text-5xl">
              Video Gallery
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-background/70">
              Watch our collection of Quran recitations, Tajweed lessons, and inspiring Islamic content.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="sticky top-[104px] z-40 border-b border-border bg-background/95 backdrop-blur py-4">
          <div className="container mx-auto flex flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === selectedCategory ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={category === selectedCategory ? "bg-gradient-to-r from-primary to-primary/90" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Input 
                placeholder="Search videos..." 
                className="w-full md:w-64"
              />
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Videos Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Featured Video */}
            {featuredVideo && selectedCategory === "All" && (
              <Card className="mb-8 overflow-hidden border-0 shadow-2xl">
                <div className="grid lg:grid-cols-5">
                  <div className="relative lg:col-span-3">
                    <div className="relative aspect-video lg:aspect-auto lg:h-full overflow-hidden">
                      <Image 
                        src="/images/videos-thumbnail.jpg" 
                        alt={featuredVideo.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-foreground/40" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Link href={`/videos/${featuredVideo.id}`}>
                          <button 
                            className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-110 hover:shadow-xl"
                            aria-label="Play video"
                          >
                            <Play className="h-8 w-8 ml-1" fill="currentColor" />
                          </button>
                        </Link>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <Badge className="bg-foreground/80 text-background">
                          {featuredVideo.duration}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardContent className="flex flex-col justify-center p-6 lg:col-span-2 lg:p-8 bg-gradient-to-br from-card to-card/95">
                    <Badge className="mb-3 w-fit" variant="outline">Featured</Badge>
                    <Badge className={`${getCategoryColor(featuredVideo.category)} mb-3 w-fit`}>
                      {featuredVideo.category}
                    </Badge>
                    <h2 className="text-2xl font-bold text-card-foreground">
                      <Link href={`/videos/${featuredVideo.id}`} className="hover:text-primary transition-colors">
                        {featuredVideo.title}
                      </Link>
                    </h2>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {featuredVideo.description}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {featuredVideo.views} views
                      </span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        {featuredVideo.likes.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredVideo.duration}
                      </span>
                    </div>
                    <Button className="mt-6 w-fit bg-gradient-to-r from-primary to-primary/90" asChild>
                      <Link href={`/videos/${featuredVideo.id}`}>
                        <Play className="mr-2 h-4 w-4" />
                        Watch Now
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            )}

            {/* Video Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredVideos.map((video) => (
                <Card key={video.id} className="group overflow-hidden border-0 shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="relative aspect-video overflow-hidden">
                    <Image 
                      src="/images/videos-thumbnail.jpg" 
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Link href={`/videos/${video.id}`}>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
                          <Play className="h-5 w-5 ml-0.5" fill="currentColor" />
                        </div>
                      </Link>
                    </div>
                    <div className="absolute bottom-2 right-2">
                      <Badge variant="secondary" className="text-xs">
                        {video.duration}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <Badge className={`${getCategoryColor(video.category)} mb-2 text-xs`}>
                      {video.category}
                    </Badge>
                    <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                      <Link href={`/videos/${video.id}`}>{video.title}</Link>
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {video.description}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {video.views}
                      </span>
                      <span>{video.date}</span>
                    </div>
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
