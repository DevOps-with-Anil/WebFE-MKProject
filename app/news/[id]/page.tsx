import Link from "next/link"
import { ArrowLeft, Clock, User, Calendar, Share2, Facebook, Twitter, Linkedin, MessageCircle, ThumbsUp } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const article = {
  id: 1,
  title: "Community Leaders Announce New Green Initiative",
  excerpt: "Local organizations partner to launch sustainable programs across the region, aiming to reduce carbon footprint by 30% over the next five years.",
  content: `
    <p>In a landmark announcement today, community leaders from across the region unveiled an ambitious new environmental initiative aimed at creating a more sustainable future for all residents.</p>
    
    <p>The Green Community Initiative, as it has been named, brings together local businesses, non-profit organizations, and government agencies in a collaborative effort to reduce the region's carbon footprint by 30% over the next five years.</p>
    
    <h2>Key Components of the Initiative</h2>
    
    <p>The initiative encompasses several key programs:</p>
    
    <ul>
      <li><strong>Urban Tree Planting:</strong> A commitment to plant 50,000 new trees across parks, streets, and public spaces.</li>
      <li><strong>Clean Energy Transition:</strong> Incentives for businesses and homeowners to switch to renewable energy sources.</li>
      <li><strong>Waste Reduction Programs:</strong> Expanded recycling services and community composting programs.</li>
      <li><strong>Green Transportation:</strong> Investment in bike lanes, electric vehicle charging stations, and improved public transit.</li>
    </ul>
    
    <h2>Community Involvement</h2>
    
    <p>"This initiative represents a collective commitment to environmental stewardship," said Mayor Jane Thompson at the announcement ceremony. "It's not just about policy changes—it's about building a culture of sustainability that involves every member of our community."</p>
    
    <p>Residents can participate in the initiative through volunteer opportunities, community workshops, and by making small changes in their daily lives. A new mobile app will be launched next month to help track individual and community progress toward the initiative's goals.</p>
    
    <h2>Expected Impact</h2>
    
    <p>Environmental experts project that if the initiative achieves its goals, the region will see:</p>
    
    <ul>
      <li>A 30% reduction in greenhouse gas emissions</li>
      <li>Improved air quality, particularly in urban areas</li>
      <li>Creation of over 1,000 green jobs</li>
      <li>Significant cost savings for participating households and businesses</li>
    </ul>
    
    <p>The initiative officially launches on March 1, 2026, with the first community tree planting event scheduled for Earth Day in April.</p>
  `,
  category: "Environment",
  author: "Sarah Johnson",
  authorBio: "Sarah is an environmental journalist with over 10 years of experience covering sustainability and community initiatives.",
  date: "January 25, 2026",
  readTime: "5 min read",
}

const relatedArticles = [
  {
    id: 2,
    title: "Community Garden Expansion Project Approved",
    category: "Environment",
    date: "Jan 21, 2026",
  },
  {
    id: 3,
    title: "Local Schools Launch Recycling Education Program",
    category: "Education",
    date: "Jan 18, 2026",
  },
  {
    id: 4,
    title: "Bike Lane Network to Double by Year End",
    category: "Community",
    date: "Jan 15, 2026",
  },
]

const comments = [
  {
    id: 1,
    author: "John D.",
    content: "This is exactly what our community needs! I've already signed up to volunteer for the tree planting event.",
    date: "2 hours ago",
    likes: 12,
  },
  {
    id: 2,
    author: "Maria S.",
    content: "Great initiative! I hope we can see more programs like this focusing on sustainable transportation options.",
    date: "4 hours ago",
    likes: 8,
  },
]

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Article Header */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Link 
              href="/news" 
              className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Link>
            <Badge className="mb-4">{article.category}</Badge>
            <h1 className="max-w-4xl text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
              {article.excerpt}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {article.author.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                {article.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </span>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Featured Image */}
                <div className="mb-8 aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20" />
                
                {/* Article Body */}
                <article 
                  className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Share Buttons */}
                <div className="mt-8 border-t border-border pt-8">
                  <h3 className="mb-4 text-sm font-semibold text-foreground">Share this article</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Facebook className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Author Bio */}
                <Card className="mt-8 border-0 bg-muted/50">
                  <CardContent className="flex gap-4 p-6">
                    <Avatar className="h-16 w-16">
                      <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                        {article.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-card-foreground">About {article.author}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{article.authorBio}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Comments Section */}
                <div className="mt-12">
                  <h3 className="mb-6 text-xl font-bold text-foreground flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Comments ({comments.length})
                  </h3>

                  {/* Comment Form */}
                  <Card className="mb-8 border-0 shadow-md">
                    <CardContent className="p-6">
                      <h4 className="mb-4 font-semibold text-card-foreground">Leave a Comment</h4>
                      <div className="mb-4 grid gap-4 sm:grid-cols-2">
                        <Input placeholder="Your name" />
                        <Input type="email" placeholder="Your email" />
                      </div>
                      <Textarea placeholder="Write your comment..." className="mb-4" rows={4} />
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

              {/* Sidebar */}
              <aside className="space-y-8">
                {/* Related Articles */}
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-bold text-card-foreground">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedArticles.map((related) => (
                        <div key={related.id} className="group">
                          <Badge variant="secondary" className="mb-1 text-xs">
                            {related.category}
                          </Badge>
                          <h4 className="text-sm font-medium text-card-foreground group-hover:text-primary transition-colors">
                            <Link href={`/news/${related.id}`}>{related.title}</Link>
                          </h4>
                          <p className="mt-1 text-xs text-muted-foreground">{related.date}</p>
                          <Separator className="mt-4" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter CTA */}
                <Card className="border-0 bg-primary text-primary-foreground">
                  <CardContent className="p-6">
                    <h3 className="mb-2 font-bold">Stay Updated</h3>
                    <p className="mb-4 text-sm opacity-90">
                      Get the latest news delivered to your inbox.
                    </p>
                    <Input 
                      type="email" 
                      placeholder="Your email" 
                      className="mb-3 bg-primary-foreground/10 border-primary-foreground/20 placeholder:text-primary-foreground/50"
                    />
                    <Button variant="secondary" className="w-full">
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
