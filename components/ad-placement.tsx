import { Card, CardContent } from "@/components/ui/card"

interface AdPlacementProps {
  orientation?: "horizontal" | "vertical"
  size?: "banner" | "leaderboard" | "skyscraper" | "rectangle" | "default"
  className?: string
  label?: string
}

const sizeMap = {
  banner: { horizontal: "min-h-[60px]", vertical: "min-h-[250px]" },
  leaderboard: { horizontal: "min-h-[90px]", vertical: "min-h-[250px]" },
  skyscraper: { horizontal: "min-h-[90px]", vertical: "min-h-[600px]" },
  rectangle: { horizontal: "min-h-[90px]", vertical: "min-h-[250px]" },
  default: { horizontal: "min-h-[90px]", vertical: "min-h-[250px]" },
}

const dimensionLabels = {
  banner: "468 x 60",
  leaderboard: "728 x 90",
  skyscraper: "160 x 600",
  rectangle: "300 x 250",
  default: "",
}

export function AdPlacement({
  orientation = "horizontal",
  size = "default",
  className = "",
  label = "Advertisement",
}: AdPlacementProps) {
  const minHeight = sizeMap[size]?.[orientation] ?? sizeMap.default[orientation]
  const dimensions = dimensionLabels[size] ?? ""

  return (
    <Card
      className={`overflow-hidden border border-dashed border-border/60 bg-muted/20 ${className}`}
    >
      <CardContent
        className={`flex items-center justify-center text-center ${minHeight} ${
          orientation === "horizontal" ? "px-4 py-3" : "px-4 py-6"
        }`}
      >
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/50">
            {label}
          </p>
          <div className="mx-auto mt-2 flex h-8 w-8 items-center justify-center rounded-full bg-muted-foreground/5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-muted-foreground/30"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18" />
              <path d="M9 21V9" />
            </svg>
          </div>
          {dimensions && (
            <p className="mt-1.5 text-[10px] text-muted-foreground/30">
              {dimensions}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
