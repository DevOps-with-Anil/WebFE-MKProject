"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, Play, Eye, ThumbsUp, Clock, Share2, Facebook, Twitter, MessageCircle, Calendar } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const video = {
  id: 1,
  title: "Community Spotlight: Local Heroes Making a Difference",
  description: "Meet the everyday heroes who are transforming our community through volunteer work and dedication. In this special feature, we highlight five individuals who go above and beyond to make our neighborhood a better place.",
  category: "News",
  views: "12,534",
  likes: 856,
  duration: "8:45",
  date: "January 20, 2026",
  author: "CommunityHub Media",
}

const relatedVideos = [
  {
    id: 2,
    title: "Highlights from the Winter Festival 2025",
    category: "Events",
    views: "8.2K",
    duration: "5:30",
  },
  {
    id: 3,
    title: "Behind the Scenes: Art Contest Winners",
    category: "Contests",
    views: "6.8K",
    duration: "4:15",
  },
  {
    id: 4,
    title: "Interview with Community Leader Jane Smith",
    category: "Interviews",
    views: "5.1K",
    duration: "12:20",
  },
  {
    id: 5,
    title: "How to Start a Community Garden",
    category: "Tutorials",
    views: "4.8K",
    duration: "15:45",
  },
]

const comments = [
  {
    id: 1,
    author: "Sarah M.",
    content: "Such an inspiring video! These people are true heroes. Thank you for sharing their stories.",
    date: "2 hours ago",
    likes: 24,
  },
  {
    id: 2,
    author: "Michael R.",
    content: "I actually know Maria from the food bank segment - she's even more amazing in person!",
    date: "5 hours ago",
    likes: 18,
  },
  {
    id: 3,
    author: "Emma L.",
    content: "This is exactly why I love our community. More content like this please!",
    date: "1 day ago",
    likes: 12,
  },
]

function getCategoryColor(category: string) {
  switch (category) {
    case "News":
      return "bg-primary/10 text-primary"
    case "Events":
      return "bg-secondary/10 text-secondary"
    case "Contests":
      return "bg-primary/10 text-primary"
    case "Interviews":
      return "bg-secondary/10 text-secondary"
    case "Tutorials":
      return "bg-primary/10 text-primary"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export default function VideoDetailPage() {
  const [isLiked, setIsLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(video.likes)

  const handleLike = () => {
    if (isLiked) {
      setLikesCount(likesCount - 1)
    } else {
      setLikesCount(likesCount + 1)
    }
    setIsLiked(!isLiked)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Video Player Section */}
        <section className="bg-foreground">
          <div className="container mx-auto px-4 py-4">
            <Link 
              href="/videos" 
              className="mb-4 inline-flex items-center text-sm text-background/70 hover:text-background transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Videos
            </Link>
            
            {/* Video Player */}
            <div className="relative aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-foreground/80 to-foreground/60">
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-transform hover:scale-110"
                  aria-label="Play video"
                >
                  <Play className="h-10 w-10 ml-1" fill="currentColor" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Video Info & Comments */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Video Info */}
                <Badge className={getCategoryColor(video.category)}>
                  {video.category}
                </Badge>
                <h1 className="mt-3 text-2xl font-bold text-foreground md:text-3xl">
                  {video.title}
                </h1>
                
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {video.views} views
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {video.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {video.duration}
                  </span>
                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button 
                    variant={isLiked ? "default" : "outline"} 
                    onClick={handleLike}
                  >
                    <ThumbsUp className={`mr-2 h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
                    {likesCount}
                  </Button>
                  <Button variant="outline">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                  <Button variant="outline" size="icon">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                  </Button>
                </div>

                <Separator className="my-6" />

                {/* Author & Description */}
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      CH
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{video.author}</p>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Comments Section */}
                <div>
                  <h3 className="mb-6 text-xl font-bold text-foreground flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Comments ({comments.length})
                  </h3>

                  {/* Comment Form */}
                  <Card className="mb-6 border-0 shadow-sm">
                    <CardContent className="p-4">
                      <div className="mb-3 grid gap-3 sm:grid-cols-2">
                        <Input placeholder="Your name" />
                        <Input type="email" placeholder="Your email" />
                      </div>
                      <Textarea placeholder="Write a comment..." className="mb-3" rows={3} />
                      <Button>Post Comment</Button>
                    </CardContent>
                  </Card>

                  {/* Comments List */}
                  <div className="space-y-4">
                    {comments.map((comment) => (
                      <Card key={comment.id} className="border-0 shadow-sm">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <Avatar className="h-10 w-10">
                                <AvatarFallback className="bg-secondary/20 text-secondary">
                                  {comment.author.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-semibold text-card-foreground">{comment.author}</p>
                                <p className="text-xs text-muted-foreground">{comment.date}</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" className="text-muted-foreground">
                              <ThumbsUp className="mr-1 h-4 w-4" />
                              {comment.likes}
                            </Button>
                          </div>
                          <p className="mt-3 text-muted-foreground">{comment.content}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar - Related Videos */}
              <aside>
                <h3 className="mb-4 font-bold text-foreground">Related Videos</h3>
                <div className="space-y-4">
                  {relatedVideos.map((related) => (
                    <Card key={related.id} className="group flex overflow-hidden border-0 shadow-sm transition-shadow hover:shadow-md">
                      <div className="relative aspect-video w-40 shrink-0 bg-gradient-to-br from-foreground/70 to-foreground/50">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/90 text-primary-foreground transition-transform group-hover:scale-110">
                            <Play className="h-3 w-3 ml-0.5" fill="currentColor" />
                          </div>
                        </div>
                        <div className="absolute bottom-1 right-1">
                          <Badge variant="secondary" className="text-xs px-1.5 py-0.5">
                            {related.duration}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="flex flex-col justify-center p-3">
                        <Badge className={`${getCategoryColor(related.category)} mb-1 w-fit text-xs`}>
                          {related.category}
                        </Badge>
                        <h4 className="text-sm font-medium text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                          <Link href={`/videos/${related.id}`}>{related.title}</Link>
                        </h4>
                        <span className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                          <Eye className="h-3 w-3" />
                          {related.views} views
                        </span>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Subscribe CTA */}
                <Card className="mt-6 border-0 bg-primary text-primary-foreground">
                  <CardContent className="p-6">
                    <h4 className="font-bold">Never Miss a Video</h4>
                    <p className="mt-2 text-sm opacity-90">
                      Subscribe to get notified when we publish new content.
                    </p>
                    <Input 
                      type="email" 
                      placeholder="Your email" 
                      className="mt-4 bg-primary-foreground/10 border-primary-foreground/20 placeholder:text-primary-foreground/50"
                    />
                    <Button variant="secondary" className="mt-3 w-full">
                      Subscribe
                    </Button>
                  </CardContent>
                </Card>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
