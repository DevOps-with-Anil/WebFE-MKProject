import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSlider } from "@/components/home/hero-slider"
import { LatestNewsSection } from "@/components/home/latest-news-section"
import { ContestsSection } from "@/components/home/contests-section"
import { VideosSection } from "@/components/home/videos-section"
import { NewsletterSection } from "@/components/home/newsletter-section"


export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSlider />
        <LatestNewsSection />
        <ContestsSection />
        <VideosSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}
