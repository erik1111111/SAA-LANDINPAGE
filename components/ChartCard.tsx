'use client'

import dynamic from 'next/dynamic'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

interface ChartCardProps {
  title?: string
  options: any
  series: any[]
  height?: number | string
  className?: string
}

export function ChartCard({ title, options, series, height = 300, className }: ChartCardProps) {
  return (
    <Card className={className}>
      {title && (
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent>
        <div style={{ height: `${height}px` }}>
          {typeof window !== 'undefined' && (
            <Chart
              options={options}
              series={series}
              type="area"
              height="100%"
            />
          )}
        </div>
      </CardContent>
    </Card>
  )
}
