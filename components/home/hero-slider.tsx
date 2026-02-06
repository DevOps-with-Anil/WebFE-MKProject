"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const slides = [
  {
    id: 1,
    badge: "Welcome to Coran Challenge",
    title: "Master the Quran,",
    highlight: "Together",
    description:
      "Join our community of Quran learners. Stay updated with the latest news, participate in memorization contests, and explore inspiring video content.",
    cta: { text: "Join a Contest", href: "/contests", icon: ArrowRight },
    secondaryCta: { text: "Watch Videos", href: "/videos", icon: Play },
    image: "/images/challenges-thumbnail.jpg",
    stats: [
      { value: "500+", label: "Projects" },
      { value: "100+", label: "Events Hosted" },
      { value: "50K+", label: "Community Members" },
    ],
  },
  {
    id: 2,
    badge: "New Contest Live",
    title: "Surah Al-Baqarah",
    highlight: "Challenge",
    description:
      "Test your memorization skills in our biggest challenge yet. Compete with learners worldwide and win amazing prizes.",
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
    description:
      "Access hundreds of video lessons from renowned scholars. Learn proper Tajweed, memorization techniques, and Tafsir.",
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

const AUTO_PLAY_INTERVAL = 5000

export function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  // Sync selected index with Embla
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on("select", onSelect)
    onSelect()
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  // Auto-play logic
  const resetAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    if (!isAutoPlaying || !emblaApi) return

    autoPlayRef.current = setInterval(() => {
      emblaApi.scrollNext()
    }, AUTO_PLAY_INTERVAL)

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [emblaApi, isAutoPlaying])

  useEffect(() => {
    const cleanup = resetAutoPlay()
    return cleanup
  }, [resetAutoPlay])

  // Reset auto-play timer after user interaction
  useEffect(() => {
    if (!emblaApi) return
    const onInteraction = () => resetAutoPlay()
    emblaApi.on("select", onInteraction)
    return () => {
      emblaApi.off("select", onInteraction)
    }
  }, [emblaApi, resetAutoPlay])

  // Reset progress bar on slide change
  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.animation = "none"
      void progressRef.current.offsetHeight
      progressRef.current.style.animation = ""
    }
  }, [selectedIndex])

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying((prev) => !prev)
  }, [])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent" />
      </div>

      {/* Embla Carousel viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={slide.id} className="min-w-0 flex-[0_0_100%]">
              <div className="container relative mx-auto px-4 py-10 md:py-14 lg:py-16">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                  {/* Left Content */}
                  <div className="flex flex-col justify-center">
                    <Badge variant="secondary" className="mb-4 w-fit">
                      {slide.badge}
                    </Badge>
                    <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                      {slide.title}{" "}
                      <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                        {slide.highlight}
                      </span>
                    </h2>
                    <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
                      {slide.description}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
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
                    <div className="mt-12 grid grid-cols-3 gap-8">
                      {slide.stats.map((stat, statIndex) => (
                        <div key={statIndex} className="relative">
                          <p className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            {stat.value}
                          </p>
                          <p className="text-sm text-muted-foreground">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Content - Image */}
                  <div className="relative">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
                      <Image
                        src={slide.image || "/placeholder.svg"}
                        alt={slide.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        priority={index === 0}
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

                      {/* Floating Card */}
                      <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-card/90 backdrop-blur-sm p-4 shadow-lg border border-border/50">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary shrink-0">
                            <Play className="h-5 w-5 text-primary-foreground ml-0.5" fill="currentColor" />
                          </div>
                          <div>
                            <p className="font-semibold text-card-foreground">Start Your Journey</p>
                            <p className="text-sm text-muted-foreground">
                              Join thousands of learners today
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
                    <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-secondary/20 blur-2xl" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slider Controls */}
      <div className="container mx-auto px-4 pb-10 md:pb-14 lg:pb-16">
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="h-10 w-10 rounded-full bg-transparent transition-transform duration-200 hover:scale-110 active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          {/* Dot indicators with progress bar */}
          <div className="flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className="relative h-2 overflow-hidden rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                style={{ width: index === selectedIndex ? 40 : 10 }}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === selectedIndex ? "true" : undefined}
              >
                <span className="absolute inset-0 rounded-full bg-muted-foreground/25" />
                {index === selectedIndex && (
                  <span
                    ref={progressRef}
                    className="absolute inset-y-0 left-0 rounded-full bg-primary"
                    style={{
                      animation: isAutoPlaying
                        ? `hero-progress ${AUTO_PLAY_INTERVAL}ms linear forwards`
                        : "none",
                      width: isAutoPlaying ? undefined : "100%",
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="h-10 w-10 rounded-full bg-transparent transition-transform duration-200 hover:scale-110 active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Auto-play toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleAutoPlay}
            className="h-10 w-10 rounded-full transition-transform duration-200 hover:scale-110 active:scale-95"
            aria-label={isAutoPlaying ? "Pause auto-scroll" : "Play auto-scroll"}
          >
            {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
          </Button>
        </div>
      </div>
    </section>
  )
}
