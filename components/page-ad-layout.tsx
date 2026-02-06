"use client"

import { AdPlacement } from "@/components/ad-placement"

interface PageAdLayoutProps {
  children: React.ReactNode
}

export function PageAdLayout({ children }: PageAdLayoutProps) {
  return (
    <div className="relative">
      {/* Main content with vertical sidebar ad */}
      <div className="flex gap-6">
        {/* Content area */}
        <div className="min-w-0 flex-1">{children}</div>

        {/* Vertical right sidebar ad - hidden on mobile */}
        <aside className="hidden w-[180px] shrink-0 xl:block" aria-label="Sidebar advertisements">
          <div className="sticky top-28 flex flex-col gap-6">
            <AdPlacement orientation="vertical" size="skyscraper" label="Sponsored" />
            <AdPlacement orientation="vertical" size="rectangle" label="Ad" />
          </div>
        </aside>
      </div>

      {/* Horizontal bottom ad */}
      <div className="container mx-auto px-4 py-8">
        <AdPlacement orientation="horizontal" size="leaderboard" label="Sponsored" />
      </div>
    </div>
  )
}
