"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const slides = [
  {
    id: 1,
    badge: "Welcome to Coran Challenge",
    title: "Master the Quran,",
    highlight: "Together",
    description: "Join our community of Quran learners. Stay updated with the latest news, participate in memorization contests, and explore inspiring video content.",
    cta: { text: "Join a Contest", href: "/contests", icon: ArrowRight },
    secondaryCta: { text: "Watch Videos", href: "/videos", icon: Play },
    image: "/images/challenges-thumbnail.jpg",
    stats: [
      { value: "500+", label: "Articles Published" },
      { value: "100+", label: "Contests Held" },
      { value: "50K+", label: "Community Members" },
    ],
  },
  {
    id: 2,
    badge: "New Contest Live",
    title: "Surah Al-Baqarah",
    highlight: "Challenge",
    description: "Test your memorization skills in our biggest challenge yet. Compete with learners worldwide and win amazing prizes.",
    cta: { text: "Participate Now", href: "/contests", icon: ArrowRight },
    secondaryCta: { text: "View Prizes", href: "/contests", icon: ArrowRight },
    image: "/images/challenges-thumbnail.jpg",
    stats: [
      { value: "$1000", label: "Prize Pool" },
      { value: "500+", label: "Participants" },
      { value: "5", label: "Days Left" },
    ],
  },
  {
    id: 3,
    badge: "Video Library",
    title: "Learn Quran with",
    highlight: "Expert Teachers",
    description: "Access hundreds of video lessons from renowned scholars. Learn proper Tajweed, memorization techniques, and Tafsir.",
    cta: { text: "Start Learning", href: "/videos", icon: Play },
    secondaryCta: { text: "Browse All", href: "/videos", icon: ArrowRight },
    image: "/images/videos-thumbnail.jpg",
    stats: [
      { value: "200+", label: "Video Lessons" },
      { value: "50+", label: "Expert Teachers" },
      { value: "10K+", label: "Students" },
    ],
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const slide = slides[currentSlide]

  return (
    <section 
      className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent" />
      </div>

      <div className="container relative mx-auto px-4 py-16 md:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <Badge 
              variant="secondary" 
              className="mb-4 w-fit animate-in fade-in slide-in-from-left-4 duration-500"
            >
              {slide.badge}
            </Badge>
            <h1 
              className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl animate-in fade-in slide-in-from-left-4 duration-500 delay-100"
            >
              {slide.title}{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                {slide.highlight}
              </span>
            </h1>
            <p 
              className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-left-4 duration-500 delay-200"
            >
              {slide.description}
            </p>
            <div 
              className="mt-8 flex flex-wrap gap-4 animate-in fade-in slide-in-from-left-4 duration-500 delay-300"
            >
              <Button size="lg" asChild className="group">
                <Link href={slide.cta.href}>
                  {slide.cta.text}
                  <slide.cta.icon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="group bg-transparent">
                <Link href={slide.secondaryCta.href}>
                  <slide.secondaryCta.icon className="mr-2 h-4 w-4" />
                  {slide.secondaryCta.text}
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div 
              className="mt-12 grid grid-cols-3 gap-8 animate-in fade-in slide-in-from-left-4 duration-500 delay-500"
            >
              {slide.stats.map((stat, index) => (
                <div key={index} className="relative">
                  <p className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-in fade-in slide-in-from-right-4 duration-500 delay-200">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-card/90 backdrop-blur-sm p-4 shadow-lg border border-border/50">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                    <Play className="h-5 w-5 text-primary-foreground ml-0.5" fill="currentColor" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">Start Your Journey</p>
                    <p className="text-sm text-muted-foreground">Join thousands of learners today</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-secondary/20 blur-2xl" />
          </div>
        </div>

        {/* Slider Controls */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="h-10 w-10 rounded-full bg-transparent"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? "w-8 bg-primary" 
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="h-10 w-10 rounded-full bg-transparent"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
