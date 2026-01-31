"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Clock, User, Filter } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Pagination } from "@/components/pagination"

const categories = [
  "All",
  "Quran",
  "Memorization",
  "Tajweed",
  "Events",
  "Community",
]

const newsArticles = [
  {
    id: 1,
    title: "New Quran Memorization Techniques Revolutionize Learning",
    excerpt: "Discover the latest methods that help students memorize the Quran more effectively, combining traditional approaches with modern cognitive science.",
    category: "Memorization",
    author: "Sheikh Ahmad",
    date: "Jan 25, 2026",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Youth Programs See Record Enrollment Numbers",
    excerpt: "After-school Quran programs report 40% increase in participation, highlighting growing interest in Islamic education.",
    category: "Community",
    author: "Fatima Hassan",
    date: "Jan 24, 2026",
    readTime: "3 min read",
    featured: false,
  },
  {
    id: 3,
    title: "Annual Quran Competition Announces Record Prize Pool",
    excerpt: "This year's international Quran recitation competition offers prizes totaling over $100,000 for winners.",
    category: "Events",
    author: "Ibrahim Ali",
    date: "Jan 23, 2026",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Understanding Tajweed: A Complete Guide",
    excerpt: "Expert teachers share comprehensive insights into mastering the art of Quranic recitation with proper pronunciation.",
    category: "Tajweed",
    author: "Qari Yusuf",
    date: "Jan 22, 2026",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 5,
    title: "Community Iftar Brings Together 1000+ Participants",
    excerpt: "Local mosque hosts largest community gathering during Ramadan, celebrating unity and brotherhood.",
    category: "Community",
    author: "Aisha Rahman",
    date: "Jan 21, 2026",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 6,
    title: "New Online Platform Launches for Quran Students",
    excerpt: "Revolutionary digital learning platform offers interactive Quran lessons with certified teachers worldwide.",
    category: "Quran",
    author: "Omar Khan",
    date: "Jan 20, 2026",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 7,
    title: "Tips for Teaching Children the Quran",
    excerpt: "Experienced educators share best practices for introducing young learners to Quranic studies.",
    category: "Memorization",
    author: "Maryam Siddiqui",
    date: "Jan 19, 2026",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 8,
    title: "Interview with International Quran Recitation Champion",
    excerpt: "Exclusive conversation with this year's winner about their journey, challenges, and advice for aspiring reciters.",
    category: "Events",
    author: "Abdul Wahab",
    date: "Jan 18, 2026",
    readTime: "7 min read",
    featured: false,
  },
]

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const itemsPerPage = 6
  const totalPages = Math.ceil(newsArticles.length / itemsPerPage)
  
  const featuredArticle = newsArticles.find((a) => a.featured)
  const filteredArticles = newsArticles.filter((a) => {
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
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary">News</Badge>
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">
              Latest News
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Stay informed with the latest updates, stories, and announcements from Coran Challenge.
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
                placeholder="Search news..." 
                className="w-full md:w-64"
              />
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {/* Featured Article */}
            {featuredArticle && selectedCategory === "All" && (
              <Card className="mb-8 overflow-hidden border-0 shadow-xl bg-gradient-to-br from-card to-card/95">
                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-video md:aspect-auto md:min-h-[300px] overflow-hidden">
                    <Image 
                      src="/images/news-thumbnail.jpg" 
                      alt={featuredArticle.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50" />
                  </div>
                  <CardContent className="flex flex-col justify-center p-6 md:p-8">
                    <Badge className="mb-3 w-fit bg-gradient-to-r from-primary to-primary/90">{featuredArticle.category}</Badge>
                    <h2 className="text-2xl font-bold text-card-foreground md:text-3xl">
                      <Link href={`/news/${featuredArticle.id}`} className="hover:text-primary transition-colors">
                        {featuredArticle.title}
                      </Link>
                    </h2>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {featuredArticle.author}
                      </span>
                      <span>{featuredArticle.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredArticle.readTime}
                      </span>
                    </div>
                    <Button className="mt-6 w-fit bg-gradient-to-r from-primary to-primary/90" asChild>
                      <Link href={`/news/${featuredArticle.id}`}>
                        Read Full Article
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            )}

            {/* Article Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <Card key={article.id} className="group overflow-hidden border-0 shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
                  <div className="relative aspect-video overflow-hidden">
                    <Image 
                      src="/images/news-thumbnail.jpg" 
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2 text-xs">
                      {article.category}
                    </Badge>
                    <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                      <Link href={`/news/${article.id}`}>{article.title}</Link>
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                      <span>{article.author}</span>
                      <span>{article.readTime}</span>
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
