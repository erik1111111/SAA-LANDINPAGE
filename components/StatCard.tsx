import { ArrowUp, ArrowDown, TrendingUp, Users, DollarSign, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const iconMap = {
  clients: Users,
  revenue: DollarSign,
  classes: Calendar,
  growth: TrendingUp,
}

interface StatCardProps {
  title: string
  value: string
  change: number
  type: keyof typeof iconMap
  className?: string
}

export function StatCard({ title, value, change, type, className }: StatCardProps) {
  const Icon = iconMap[type]
  const isPositive = change >= 0

  return (
    <Card className={cn("h-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="text-sm font-medium text-muted-foreground">
          {title}
        </div>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={cn(
          "text-xs mt-1 flex items-center",
          isPositive ? "text-green-500" : "text-red-500"
        )}>
          {isPositive ? (
            <ArrowUp className="h-3 w-3 mr-1" />
          ) : (
            <ArrowDown className="h-3 w-3 mr-1" />
          )}
          {Math.abs(change)}% vs mes anterior
        </p>
      </CardContent>
    </Card>
  )
}
