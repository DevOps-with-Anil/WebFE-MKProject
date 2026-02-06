"use client"

import Link from "next/link"
import { ArrowRight, Play, BookOpen, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="container relative mx-auto px-4 py-10 md:py-14">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <Badge variant="secondary" className="mb-4 w-fit">
              Welcome to Coran Challenge
            </Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Master the Quran,{" "}
              <span className="text-primary">Together</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Join our community of Quran learners. Stay updated with the latest news, 
              participate in memorization contests, and explore inspiring video content.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/contests">
                  Join a Contest
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/videos">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Videos
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">100+</p>
                <p className="text-sm text-muted-foreground">Events Hosted</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">50K+</p>
                <p className="text-sm text-muted-foreground">Community Members</p>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Featured News */}
            <div className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-lg transition-all hover:shadow-xl sm:col-span-2">
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-primary/10" />
              <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20">
                Latest News
              </Badge>
              <h3 className="text-xl font-semibold text-card-foreground">
                Coran Challenge Celebrates Record-Breaking Participation
              </h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                This year marks our biggest milestone yet with over 10,000 active participants joining our Quran memorization challenges.
              </p>
              <Link 
                href="/news/1" 
                className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Read More <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>

            {/* Featured Learning */}
            <div className="group relative overflow-hidden rounded-2xl bg-secondary p-6 text-secondary-foreground shadow-lg transition-all hover:shadow-xl">
              <BookOpen className="mb-3 h-8 w-8" />
              <h3 className="font-semibold">Start Learning</h3>
              <p className="mt-1 text-sm opacity-90">Explore our video library</p>
              <p className="mt-2 text-xs opacity-75">100+ Videos Available</p>
              <Link 
                href="/videos" 
                className="mt-4 inline-flex items-center text-sm font-medium hover:underline"
              >
                View All <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>

            {/* Featured Contest */}
            <div className="group relative overflow-hidden rounded-2xl bg-primary p-6 text-primary-foreground shadow-lg transition-all hover:shadow-xl">
              <Trophy className="mb-3 h-8 w-8" />
              <h3 className="font-semibold">Active Contest</h3>
              <p className="mt-1 text-sm opacity-90">Surah Al-Baqarah Challenge</p>
              <p className="mt-2 text-xs opacity-75">Ends in 5 days</p>
              <Link 
                href="/contests" 
                className="mt-4 inline-flex items-center text-sm font-medium hover:underline"
              >
                Participate <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
