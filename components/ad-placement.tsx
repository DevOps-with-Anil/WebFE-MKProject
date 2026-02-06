"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

interface AdPlacementProps {
  orientation?: "horizontal" | "vertical"
  size?: "banner" | "leaderboard" | "skyscraper" | "rectangle" | "default"
  className?: string
  label?: string
}

const adImages: Record<string, string[]> = {
  leaderboard: [
    "/images/ads/leaderboard-ad.jpg",
    "/images/ads/leaderboard-ad-2.jpg",
  ],
  banner: [
    "/images/ads/banner-ad.jpg",
  ],
  rectangle: [
    "/images/ads/rectangle-ad.jpg",
    "/images/ads/rectangle-ad-2.jpg",
  ],
  skyscraper: [
    "/images/ads/skyscraper-ad.jpg",
  ],
  default: [
    "/images/ads/leaderboard-ad.jpg",
    "/images/ads/rectangle-ad.jpg",
  ],
}

const aspectMap: Record<string, string> = {
  leaderboard: "aspect-[728/90]",
  banner: "aspect-[468/60]",
  rectangle: "aspect-[300/250]",
  skyscraper: "aspect-[160/600]",
  default: "aspect-[728/90]",
}

export function AdPlacement({
  orientation = "horizontal",
  size = "default",
  className = "",
  label = "Advertisement",
}: AdPlacementProps) {
  const images = adImages[size] ?? adImages.default
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [images.length])

  const src = images[index]
  const aspect = orientation === "vertical"
    ? (size === "skyscraper" ? aspectMap.skyscraper : aspectMap.rectangle)
    : (aspectMap[size] ?? aspectMap.default)

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <p className="mb-1 text-center text-[10px] font-medium uppercase tracking-widest text-muted-foreground/50">
        {label}
      </p>
      <a
        href="#"
        className="group relative block overflow-hidden rounded-lg"
        onClick={(e) => e.preventDefault()}
        aria-label={label}
      >
        <div className={`relative w-full ${aspect}`}>
          <Image
            src={src}
            alt={label}
            fill
            className="object-cover transition-opacity duration-500"
            sizes={
              orientation === "horizontal"
                ? "(max-width: 768px) 100vw, 728px"
                : size === "skyscraper"
                  ? "160px"
                  : "300px"
            }
          />
        </div>
      </a>
    </div>
  )
}
