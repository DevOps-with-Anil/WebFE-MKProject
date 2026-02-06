import { Card, CardContent } from "@/components/ui/card"

interface AdPlacementProps {
  orientation?: "horizontal" | "vertical"
  className?: string
  label?: string
}

export function AdPlacement({
  orientation = "horizontal",
  className = "",
  label = "Advertisement",
}: AdPlacementProps) {
  return (
    <Card
      className={`overflow-hidden border border-dashed border-border bg-muted/30 ${className}`}
    >
      <CardContent
        className={`flex items-center justify-center text-center ${
          orientation === "horizontal" ? "p-4" : "p-6"
        } ${orientation === "vertical" ? "min-h-[250px]" : "min-h-[90px]"}`}
      >
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground/60">
            {label}
          </p>
          <p className="mt-1 text-sm text-muted-foreground/40">Ad Space</p>
        </div>
      </CardContent>
    </Card>
  )
}
