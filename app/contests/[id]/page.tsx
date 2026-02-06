"use client"

import React from "react"

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, Trophy, Users, Clock, Star, Heart, Share2, Upload, Camera, FileText, MessageCircle, CheckCircle2, Eye, Facebook, Twitter, Linkedin, Link2 } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AdPlacement } from "@/components/ad-placement"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const contest = {
  id: 1,
  title: "Photo Challenge 2026",
  description: "Capture the essence of our community through your lens. Share your best shots showcasing local life, landscapes, and people for a chance to win.",
  fullDescription: `
    <p>The Photo Challenge 2026 invites photographers of all skill levels to capture the spirit of our community through their unique perspectives.</p>
    
    <h3>Contest Theme</h3>
    <p>This year's theme is "Community Connections" - showcase the moments, places, and people that make our neighborhood special.</p>
    
    <h3>Rules & Guidelines</h3>
    <ul>
      <li>Photos must be original and taken within the past 12 months</li>
      <li>Each participant may submit up to 3 entries</li>
      <li>Images must be high resolution (minimum 2000px on the longest side)</li>
      <li>Basic editing is allowed, but no heavy manipulation or AI-generated content</li>
      <li>By submitting, you grant us permission to feature your work</li>
    </ul>
    
    <h3>Judging Criteria</h3>
    <p>Entries will be judged on:</p>
    <ul>
      <li>Creativity and originality (30%)</li>
      <li>Technical quality (25%)</li>
      <li>Connection to theme (25%)</li>
      <li>Community votes (20%)</li>
    </ul>
    
    <h3>Prizes</h3>
    <ul>
      <li><strong>1st Place:</strong> $300 + Featured exhibition</li>
      <li><strong>2nd Place:</strong> $150 + Certificate</li>
      <li><strong>3rd Place:</strong> $50 + Certificate</li>
      <li><strong>People's Choice:</strong> $100 + Special mention</li>
    </ul>
  `,
  type: "Photography",
  prize: "$500",
  participants: 234,
  daysLeft: 5,
  totalDays: 30,
  status: "Live",
  deadline: "February 1, 2026",
  organizer: "Community Arts Council",
}

const entries = [
  {
    id: 1,
    title: "Morning at the Market",
    author: "Sarah M.",
    votes: 156,
    comments: 23,
    views: 1240,
    hasVoted: false,
  },
  {
    id: 2,
    title: "Generations",
    author: "Michael R.",
    votes: 142,
    comments: 18,
    views: 980,
    hasVoted: true,
  },
  {
    id: 3,
    title: "Community Garden Sunrise",
    author: "Emma L.",
    votes: 128,
    comments: 15,
    views: 856,
    hasVoted: false,
  },
  {
    id: 4,
    title: "Street Art Stories",
    author: "David K.",
    votes: 98,
    comments: 12,
    views: 645,
    hasVoted: false,
  },
  {
    id: 5,
    title: "Festival of Lights",
    author: "Ana P.",
    votes: 87,
    comments: 9,
    views: 523,
    hasVoted: false,
  },
  {
    id: 6,
    title: "The Old Bookshop",
    author: "James W.",
    votes: 76,
    comments: 8,
    views: 412,
    hasVoted: false,
  },
]

export default function ContestDetailPage() {
  const [activeTab, setActiveTab] = useState("entries")
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [votedEntries, setVotedEntries] = useState<number[]>([2]) // Entry 2 already voted
  const [entriesState, setEntriesState] = useState(entries)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    name: "",
    email: "",
  })

  const handleVote = (entryId: number) => {
    if (votedEntries.includes(entryId)) {
      // Remove vote
      setVotedEntries(votedEntries.filter(id => id !== entryId))
      setEntriesState(entriesState.map(entry => 
        entry.id === entryId ? { ...entry, votes: entry.votes - 1 } : entry
      ))
    } else {
      // Add vote
      setVotedEntries([...votedEntries, entryId])
      setEntriesState(entriesState.map(entry => 
        entry.id === entryId ? { ...entry, votes: entry.votes + 1 } : entry
      ))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.title && formData.name && formData.email) {
      setHasSubmitted(true)
    }
  }

  const progressPercentage = ((contest.totalDays - contest.daysLeft) / contest.totalDays) * 100

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-8 md:py-10">
          <div className="container mx-auto px-4">
            <Link 
              href="/contests" 
              className="mb-6 inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Contests
            </Link>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge className="bg-primary text-primary-foreground">{contest.status}</Badge>
              <Badge variant="outline">{contest.type}</Badge>
              <Badge variant="secondary">{contest.daysLeft} days left</Badge>
            </div>
            <h1 className="max-w-4xl text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              {contest.title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
              {contest.description}
            </p>
            
            {/* Stats */}
            <div className="mt-8 grid max-w-2xl grid-cols-4 gap-4">
              <div className="text-center">
                <Star className="mx-auto h-6 w-6 text-primary" />
                <p className="mt-1 text-2xl font-bold text-foreground">{contest.prize}</p>
                <p className="text-xs text-muted-foreground">Total Prize</p>
              </div>
              <div className="text-center">
                <Users className="mx-auto h-6 w-6 text-secondary" />
                <p className="mt-1 text-2xl font-bold text-foreground">{contest.participants}</p>
                <p className="text-xs text-muted-foreground">Participants</p>
              </div>
              <div className="text-center">
                <Camera className="mx-auto h-6 w-6 text-primary" />
                <p className="mt-1 text-2xl font-bold text-foreground">{entriesState.length}</p>
                <p className="text-xs text-muted-foreground">Entries</p>
              </div>
              <div className="text-center">
                <Clock className="mx-auto h-6 w-6 text-secondary" />
                <p className="mt-1 text-2xl font-bold text-foreground">{contest.daysLeft}</p>
                <p className="text-xs text-muted-foreground">Days Left</p>
              </div>
            </div>
          </div>
        </section>

        {/* Top Horizontal Ad Banner */}
        <div className="container mx-auto px-4 py-4">
          <AdPlacement orientation="horizontal" size="leaderboard" label="Sponsored" />
        </div>

        {/* Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="mb-6 w-full justify-start">
                    <TabsTrigger value="entries">Entries ({entriesState.length})</TabsTrigger>
                    <TabsTrigger value="details">Contest Details</TabsTrigger>
                    <TabsTrigger value="submit">Submit Entry</TabsTrigger>
                  </TabsList>

                  <TabsContent value="entries">
                    <div className="mb-6 flex items-center justify-between">
                      <p className="text-muted-foreground">Vote for your favorite entries!</p>
                      <Badge variant="outline">
                        {votedEntries.length} vote{votedEntries.length !== 1 ? 's' : ''} used
                      </Badge>
                    </div>
                    
                    <div className="grid gap-4 sm:grid-cols-2">
                      {entriesState.map((entry) => {
                        const hasVoted = votedEntries.includes(entry.id)
                        return (
                          <Card key={entry.id} className="group overflow-hidden border-0 shadow-md transition-all hover:shadow-lg">
                            <div className="relative aspect-[4/3] bg-gradient-to-br from-muted to-muted/50">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <Camera className="h-12 w-12 text-muted-foreground/20" />
                              </div>
                            </div>
                            <CardContent className="p-4">
                              <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                                {entry.title}
                              </h3>
                              <p className="mt-1 text-sm text-muted-foreground">by {entry.author}</p>
                              
                              <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                  <Heart className={`h-4 w-4 ${hasVoted ? 'fill-primary text-primary' : ''}`} />
                                  {entry.votes}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MessageCircle className="h-4 w-4" />
                                  {entry.comments}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Eye className="h-4 w-4" />
                                  {entry.views}
                                </span>
                              </div>

                              <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                                <Button 
                                  size="sm" 
                                  variant={hasVoted ? "default" : "outline"}
                                  onClick={() => handleVote(entry.id)}
                                >
                                  <Heart className={`mr-1 h-4 w-4 ${hasVoted ? 'fill-current' : ''}`} />
                                  {hasVoted ? 'Voted' : 'Vote'}
                                </Button>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="sm" className="text-muted-foreground">
                                      <Share2 className="mr-1 h-4 w-4" />
                                      Share
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end" className="w-44">
                                    <DropdownMenuItem asChild>
                                      <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`/contests/${contest.id}`)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                        <Facebook className="h-4 w-4" /> Facebook
                                      </a>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                      <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(entry.title)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                        <Twitter className="h-4 w-4" /> Twitter / X
                                      </a>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`/contests/${contest.id}`)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                        <Linkedin className="h-4 w-4" /> LinkedIn
                                      </a>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => navigator.clipboard.writeText(`${typeof window !== 'undefined' ? window.location.origin : ''}/contests/${contest.id}`)} className="flex items-center gap-2">
                                      <Link2 className="h-4 w-4" /> Copy Link
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>
                            </CardContent>
                          </Card>
                        )
                      })}
                    </div>

                    {/* Mid-content Horizontal Ad */}
                    <div className="mt-6">
                      <AdPlacement orientation="horizontal" size="banner" label="Sponsored" />
                    </div>

                    <div className="mt-6 text-center">
                      <Button variant="outline" size="lg">
                        Load More Entries
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="details">
                    {/* Featured Image */}
                    <div className="mb-8 flex aspect-video items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20">
                      <Trophy className="h-24 w-24 text-primary/30" />
                    </div>

                    {/* Contest Description */}
                    <article 
                      className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground"
                      dangerouslySetInnerHTML={{ __html: contest.fullDescription }}
                    />

                    {/* Share */}
                    <div className="mt-8 border-t border-border pt-8">
                      <h3 className="mb-4 text-sm font-semibold text-foreground">Share this contest</h3>
                      <div className="flex gap-2">
                        <Button variant="outline" size="icon">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="submit">
                    {hasSubmitted ? (
                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-8 text-center">
                          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                            <CheckCircle2 className="h-8 w-8 text-secondary" />
                          </div>
                          <h3 className="text-2xl font-bold text-card-foreground">Entry Submitted!</h3>
                          <p className="mt-2 text-muted-foreground">
                            Your entry has been received and is pending review. You will receive a confirmation email shortly.
                          </p>
                          <Button className="mt-6" onClick={() => setHasSubmitted(false)}>
                            Submit Another Entry
                          </Button>
                        </CardContent>
                      </Card>
                    ) : (
                      <Card className="border-0 shadow-lg">
                        <CardContent className="p-6">
                          <h3 className="mb-2 text-xl font-bold text-card-foreground">Submit Your Entry</h3>
                          <p className="mb-6 text-muted-foreground">
                            Fill out the form below to submit your photo entry.
                          </p>

                          <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                              <Label htmlFor="title">Entry Title *</Label>
                              <Input 
                                id="title" 
                                placeholder="Give your photo a title"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                required
                              />
                            </div>

                            <div>
                              <Label htmlFor="description">Description</Label>
                              <Textarea 
                                id="description" 
                                placeholder="Tell us about your photo..."
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                rows={4}
                              />
                            </div>

                            <div>
                              <Label>Upload Photo *</Label>
                              <div className="mt-2 flex items-center justify-center rounded-lg border-2 border-dashed border-border p-8 transition-colors hover:border-primary">
                                <div className="text-center">
                                  <Upload className="mx-auto h-10 w-10 text-muted-foreground" />
                                  <p className="mt-2 text-sm text-muted-foreground">
                                    Drag and drop your photo here, or click to browse
                                  </p>
                                  <p className="mt-1 text-xs text-muted-foreground">
                                    PNG, JPG up to 10MB
                                  </p>
                                  <Button type="button" variant="outline" className="mt-4 bg-transparent">
                                    Choose File
                                  </Button>
                                </div>
                              </div>
                            </div>

                            <Separator />

                            <div className="grid gap-4 sm:grid-cols-2">
                              <div>
                                <Label htmlFor="name">Your Name *</Label>
                                <Input 
                                  id="name" 
                                  placeholder="Full name"
                                  value={formData.name}
                                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                  required
                                />
                              </div>
                              <div>
                                <Label htmlFor="email">Email Address *</Label>
                                <Input 
                                  id="email" 
                                  type="email" 
                                  placeholder="your@email.com"
                                  value={formData.email}
                                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                  required
                                />
                              </div>
                            </div>

                            <div className="flex items-start gap-2">
                              <input type="checkbox" id="terms" className="mt-1" required />
                              <Label htmlFor="terms" className="text-sm text-muted-foreground">
                                I agree to the contest rules and grant permission to use my submitted photo for promotional purposes.
                              </Label>
                            </div>

                            <Button type="submit" className="w-full" size="lg">
                              <Upload className="mr-2 h-4 w-4" />
                              Submit Entry
                            </Button>
                          </form>
                        </CardContent>
                      </Card>
                    )}
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sidebar */}
              <aside className="space-y-6">
                {/* Vertical Ad - Right Side */}
                <AdPlacement orientation="vertical" size="rectangle" label="Sponsored" />

                {/* Contest Info Card */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-bold text-card-foreground">Contest Info</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Deadline</p>
                        <p className="font-semibold text-card-foreground">{contest.deadline}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Time Remaining</p>
                        <Progress value={progressPercentage} className="mt-2 h-2" />
                        <p className="mt-1 text-xs text-muted-foreground">{contest.daysLeft} days left</p>
                      </div>
                      <Separator />
                      <div>
                        <p className="text-sm text-muted-foreground">Organizer</p>
                        <p className="font-semibold text-card-foreground">{contest.organizer}</p>
                      </div>
                    </div>

                    <Button 
                      className="mt-6 w-full" 
                      onClick={() => setActiveTab("submit")}
                    >
                      <Camera className="mr-2 h-4 w-4" />
                      Submit Entry
                    </Button>
                  </CardContent>
                </Card>

                {/* Top Entries */}
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <h4 className="mb-4 font-bold text-card-foreground">Top Entries</h4>
                    <div className="space-y-3">
                      {entriesState
                        .sort((a, b) => b.votes - a.votes)
                        .slice(0, 5)
                        .map((entry, index) => (
                        <div key={entry.id} className="flex items-center gap-3">
                          <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                            index === 0 ? 'bg-primary text-primary-foreground' :
                            index === 1 ? 'bg-secondary text-secondary-foreground' :
                            'bg-muted text-muted-foreground'
                          }`}>
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-card-foreground">{entry.title}</p>
                            <p className="text-xs text-muted-foreground">{entry.votes} votes</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Vertical Skyscraper Ad - Right Side */}
                <AdPlacement orientation="vertical" size="skyscraper" label="Advertisement" />
              </aside>
            </div>
          </div>
        </section>

        {/* Bottom Horizontal Ad Banner */}
        <div className="container mx-auto px-4 pb-8">
          <AdPlacement orientation="horizontal" size="leaderboard" label="Sponsored" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
