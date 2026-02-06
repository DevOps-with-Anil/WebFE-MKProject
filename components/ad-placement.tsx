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

const dimensions: Record<string, { width: number; height: number }> = {
  leaderboard: { width: 728, height: 90 },
  banner: { width: 468, height: 60 },
  rectangle: { width: 300, height: 250 },
  skyscraper: { width: 160, height: 600 },
  default: { width: 728, height: 90 },
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
  const dim = orientation === "vertical"
    ? (size === "skyscraper" ? dimensions.skyscraper : dimensions.rectangle)
    : (dimensions[size] ?? dimensions.default)

  return (
    <div className={`overflow-hidden rounded-lg ${className}`}>
      <p className="mb-1 text-center text-[10px] font-medium uppercase tracking-widest text-muted-foreground/50">
        {label}
      </p>
      <a
        href="#"
        className="group block overflow-hidden rounded-lg"
        onClick={(e) => e.preventDefault()}
        aria-label={label}
      >
        <Image
          src={src}
          alt={label}
          width={dim.width}
          height={dim.height}
          className="block w-full h-auto object-cover transition-opacity duration-500"
          sizes={
            orientation === "horizontal"
              ? "(max-width: 768px) 100vw, 728px"
              : size === "skyscraper"
                ? "160px"
                : "300px"
          }
          style={{ width: "100%", height: "auto" }}
        />
      </a>
    </div>
  )
}
