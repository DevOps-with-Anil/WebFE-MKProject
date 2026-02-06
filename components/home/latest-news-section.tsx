import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, User, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

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
    title: "Youth Quran Programs See Record Enrollment",
    excerpt: "After-school Quran programs report 40% increase in participation, highlighting growing interest in Islamic education.",
    category: "Community",
    author: "Fatima Hassan",
    date: "Jan 24, 2026",
    readTime: "3 min read",
    featured: false,
  },
  {
    id: 3,
    title: "Understanding Tajweed: A Complete Guide",
    excerpt: "Expert teachers share comprehensive insights into mastering the art of Quranic recitation.",
    category: "Tajweed",
    author: "Qari Yusuf",
    date: "Jan 23, 2026",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 4,
    title: "International Quran Competition Announces Dates",
    excerpt: "This year's prestigious competition will feature participants from over 50 countries worldwide.",
    category: "Events",
    author: "Ibrahim Ali",
    date: "Jan 22, 2026",
    readTime: "4 min read",
    featured: false,
  },
]

export function LatestNewsSection() {
  const featuredArticle = newsArticles.find((a) => a.featured)
  const otherArticles = newsArticles.filter((a) => !a.featured)

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-16 md:py-24">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-4">
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <Badge variant="outline" className="mb-3 border-primary/50 text-primary">
              <BookOpen className="mr-1 h-3 w-3" />
              News
            </Badge>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Latest News
            </h2>
            <p className="mt-2 text-muted-foreground">
              Stay updated with Quran learning insights and community stories
            </p>
          </div>
          <Button variant="outline" asChild className="hidden md:flex group bg-transparent">
            <Link href="/news">
              View All News
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Featured Article */}
          {featuredArticle && (
            <Card className="group overflow-hidden border-0 shadow-xl lg:row-span-3 transition-all hover:shadow-2xl">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image 
                  src="/images/news-thumbnail.jpg" 
                  alt="News thumbnail" 
                  fill 
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="mb-2 bg-primary">{featuredArticle.category}</Badge>
                  <h3 className="text-xl font-bold text-white md:text-2xl">
                    <Link href={`/news/${featuredArticle.id}`}>
                      {featuredArticle.title}
                    </Link>
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {featuredArticle.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredArticle.readTime}
                  </span>
                </div>
                <Button className="mt-4 bg-gradient-to-r from-primary to-primary/90" asChild>
                  <Link href={`/news/${featuredArticle.id}`}>
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Other Articles */}
          {otherArticles.map((article) => (
            <Card key={article.id} className="group flex flex-col border-0 shadow-md transition-all hover:shadow-xl hover:-translate-y-1 sm:flex-row">
              <div className="relative h-48 w-full overflow-hidden sm:h-auto sm:w-40 sm:min-h-[160px] shrink-0">
                <Image 
                  src="/images/news-thumbnail.jpg" 
                  alt="News thumbnail" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="flex flex-col justify-center p-4">
                <Badge variant="secondary" className="mb-2 w-fit text-xs">
                  {article.category}
                </Badge>
                <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                  <Link href={`/news/${article.id}`}>{article.title}</Link>
                </h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" asChild>
            <Link href="/news">
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
