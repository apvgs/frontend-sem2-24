'use client'
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import type { DashboardKhwDailyProp } from '@/types'
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
  YAxis,
} from 'recharts'

interface ConsumeReportProps {
  data: DashboardKhwDailyProp[]
}

const chartConfig = {
  desktop: {
    label: 'kWh',
    color: '#16a34a',
  },
} satisfies ChartConfig

export function ConsumeReportChart({ data }: ConsumeReportProps) {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <ChartContainer config={chartConfig}>
        <AreaChart
          accessibilityLayer
          data={data}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <YAxis />
          <XAxis
            dataKey='time'
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={value => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator='dot' hideLabel />}
          />
          <Area
            dataKey='kWh'
            type='linear'
            fill='var(--color-desktop)'
            fillOpacity={0.4}
            stroke='var(--color-desktop)'
          />
        </AreaChart>
      </ChartContainer>
    </ResponsiveContainer>
  )
}
