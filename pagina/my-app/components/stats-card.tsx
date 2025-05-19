import { Card, CardContent } from "@/components/ui/card"
import type { ReactNode } from "react"

interface StatsCardProps {
  icon: ReactNode
  title: string
  value: string
  description: string
}

export default function StatsCard({ icon, title, value, description }: StatsCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full">{icon}</div>
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-3xl font-bold text-blue-600">{value}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
