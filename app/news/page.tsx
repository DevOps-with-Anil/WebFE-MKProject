"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Clock,
  Filter,
  ArrowRight,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
  BookOpen,
} from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Pagination } from "@/components/pagination"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const categories = ["All", "Memorization", "Community", "Tajweed", "Events", "Education"]

const articles = [
  {
    id: 1,
    title: "New Quran Memorization Techniques Revolutionize Learning",
    excerpt:
      "Discover the latest methods that help students memorize the Quran more effectively, combining traditional approaches with modern cognitive science.",
    category: "Memorization",
    date: "Jan 25, 2026",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Youth Quran Programs See Record Enrollment",
    excerpt:
      "After-school Quran programs report 40% increase in participation, highlighting growing interest in Islamic education.",
    category: "Community",
    date: "Jan 24, 2026",
    readTime: "3 min read",
    featured: false,
  },
  {
    id: 3,
    title: "Understanding Tajweed: A Complete Guide",
    excerpt:
      "Expert teachers share comprehensive insights into mastering the art of Quranic recitation.",
    category: "Tajweed",
    date: "Jan 23, 2026",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 4,
    title: "International Quran Competition Announces Dates",
    excerpt:
      "This year's prestigious competition will feature participants from over 50 countries worldwide.",
    category: "Events",
    date: "Jan 22, 2026",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 5,
    title: "Community Garden Expansion Project Approved",
    excerpt:
      "Local council greenlights the expansion of community gardens as part of the environmental sustainability initiative.",
    category: "Community",
    date: "Jan 21, 2026",
    readTime: "3 min read",
    featured: false,
  },
  {
    id: 6,
    title: "Local Schools Launch Recycling Education Program",
    excerpt:
      "A new curriculum integrating environmental awareness is being rolled out across schools in the district.",
    category: "Education",
    date: "Jan 18, 2026",
    readTime: "4 min read",
    featured: false,
  },
]

function ShareButton({ title, id }: { title: string; id: number }) {
  const shareUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/news/${id}`
      : `/news/${id}`

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url: shareUrl })
      } catch {
        // User cancelled
      }
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
          <Share2 className="mr-1 h-4 w-4" />
          Share
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem asChild>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Facebook className="h-4 w-4" />
            Facebook
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Twitter className="h-4 w-4" />
            Twitter / X
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            navigator.clipboard.writeText(shareUrl)
          }}
          className="flex items-center gap-2"
        >
          <Link2 className="h-4 w-4" />
          Copy Link
        </DropdownMenuItem>
        {typeof navigator !== "undefined" && navigator.share && (
          <DropdownMenuItem onClick={handleNativeShare} className="flex items-center gap-2">
            <Share2 className="h-4 w-4" />
            More Options
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const totalPages = 3

  const featuredArticle = articles.find((a) => a.featured)
  const filteredArticles = articles.filter((a) => {
    if (selectedCategory === "All") return !a.featured
    return a.category === selectedCategory && !a.featured
  })

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
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              <BookOpen className="mr-1 h-3 w-3" />
              News
            </Badge>
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">Latest News</h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Stay updated with Quran learning insights, community stories, and events.
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
                  className={
                    category === selectedCategory
                      ? "bg-gradient-to-r from-primary to-primary/90"
                      : ""
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Input placeholder="Search articles..." className="w-full md:w-64" />
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Featured Article */}
            {featuredArticle && selectedCategory === "All" && (
              <Card className="group mb-8 overflow-hidden border-0 shadow-2xl">
                <div className="grid lg:grid-cols-2">
                  <div className="relative aspect-video overflow-hidden lg:aspect-auto lg:min-h-[350px]">
                    <Image
                      src="/images/news-thumbnail.jpg"
                      alt={featuredArticle.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <Badge className="bg-primary text-primary-foreground">
                        {featuredArticle.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="flex flex-col justify-center p-6 lg:p-8">
                    <Badge variant="outline" className="mb-3 w-fit">
                      Featured
                    </Badge>
                    <h2 className="text-2xl font-bold text-card-foreground md:text-3xl">
                      <Link
                        href={`/news/${featuredArticle.id}`}
                        className="hover:text-primary transition-colors"
                      >
                        {featuredArticle.title}
                      </Link>
                    </h2>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{featuredArticle.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredArticle.readTime}
                      </span>
                    </div>
                    <div className="mt-6 flex items-center gap-3">
                      <Button asChild className="bg-gradient-to-r from-primary to-primary/90">
                        <Link href={`/news/${featuredArticle.id}`}>
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <ShareButton title={featuredArticle.title} id={featuredArticle.id} />
                    </div>
                  </CardContent>
                </div>
              </Card>
            )}

            {/* Articles Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <Card
                  key={article.id}
                  className="group overflow-hidden border-0 shadow-md transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/images/news-thumbnail.jpg"
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <Badge className="bg-primary text-primary-foreground text-xs">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-bold text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                      <Link href={`/news/${article.id}`}>{article.title}</Link>
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{article.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                      <Button variant="outline" size="sm" asChild className="bg-transparent">
                        <Link href={`/news/${article.id}`}>
                          Read More
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                      <ShareButton title={article.title} id={article.id} />
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
