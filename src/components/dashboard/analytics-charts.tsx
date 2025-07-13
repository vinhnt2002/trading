"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { TrendingUp, TrendingDown, BarChart3, PieChart, Activity } from "lucide-react"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  XAxis,
  YAxis
} from "recharts"

// Sample data for charts
const pnlData = [
  { date: "Jan", pnl: 1200, winRate: 65, trades: 12 },
  { date: "Feb", pnl: 800, winRate: 58, trades: 15 },
  { date: "Mar", pnl: 2100, winRate: 72, trades: 18 },
  { date: "Apr", pnl: -400, winRate: 45, trades: 14 },
  { date: "May", pnl: 1800, winRate: 68, trades: 20 },
  { date: "Jun", pnl: 2450, winRate: 75, trades: 22 }
]

const dailyPnlData = [
  { day: "Mon", pnl: 450 },
  { day: "Tue", pnl: -120 },
  { day: "Wed", pnl: 680 },
  { day: "Thu", pnl: 320 },
  { day: "Fri", pnl: 890 },
  { day: "Sat", pnl: 230 },
  { day: "Sun", pnl: 0 }
]

const strategyData = [
  { name: "Scalping", value: 35, count: 45, profit: 1200, color: "#8b5cf6" },
  { name: "Swing", value: 28, count: 32, profit: 980, color: "#06b6d4" },
  { name: "Day Trade", value: 22, count: 28, profit: 750, color: "#10b981" },
  { name: "Position", value: 15, count: 18, profit: 520, color: "#f59e0b" }
]

const timeframeData = [
  { time: "9-10am", trades: 8, success: 6 },
  { time: "10-11am", trades: 12, success: 9 },
  { time: "11-12pm", trades: 15, success: 11 },
  { time: "12-1pm", trades: 6, success: 4 },
  { time: "1-2pm", trades: 10, success: 8 },
  { time: "2-3pm", trades: 14, success: 10 },
  { time: "3-4pm", trades: 18, success: 14 }
]

interface AnalyticsChartsProps {
  className?: string
}

export function AnalyticsCharts({ className }: AnalyticsChartsProps) {
  const [selectedTimeframe, setSelectedTimeframe] = React.useState("6M")
  const [selectedMetric, setSelectedMetric] = React.useState("pnl")
  const [hoveredStrategy, setHoveredStrategy] = React.useState<string | null>(null)

  const chartConfig = {
    pnl: {
      label: "P&L",
      color: "hsl(var(--chart-1))",
    },
    winRate: {
      label: "Win Rate",
      color: "hsl(var(--chart-2))",
    },
    trades: {
      label: "Trades",
      color: "hsl(var(--chart-3))",
    }
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Controls */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Trading Analytics</h2>
          <p className="text-muted-foreground">Deep dive into your trading performance</p>
        </div>
        <div className="flex items-center gap-3">
          <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
            <SelectTrigger className="w-24">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1M">1M</SelectItem>
              <SelectItem value="3M">3M</SelectItem>
              <SelectItem value="6M">6M</SelectItem>
              <SelectItem value="1Y">1Y</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedMetric} onValueChange={setSelectedMetric}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pnl">P&L</SelectItem>
              <SelectItem value="winRate">Win Rate</SelectItem>
              <SelectItem value="trades">Trade Count</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Main Performance Chart */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                Performance Overview
              </CardTitle>
              <CardDescription>Your trading performance over time</CardDescription>
            </div>
            <Badge 
              variant="outline" 
              className="bg-green-50 border-green-200 text-green-700 dark:bg-green-950 dark:border-green-800 dark:text-green-400"
            >
              +15.2% this month
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[400px]">
            <AreaChart data={pnlData}>
              <defs>
                <linearGradient id="pnlGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="date" 
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <ChartTooltip
                content={<ChartTooltipContent className="w-48" />}
                cursor={{ stroke: "#8b5cf6", strokeWidth: 1, strokeDasharray: "5 5" }}
              />
              <Area
                type="monotone"
                dataKey={selectedMetric}
                stroke="#8b5cf6"
                strokeWidth={3}
                fill="url(#pnlGradient)"
                dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, stroke: "#8b5cf6", strokeWidth: 2 }}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Strategy Distribution */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5 text-blue-600" />
              Strategy Distribution
            </CardTitle>
            <CardDescription>Performance breakdown by trading strategy</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <RechartsPieChart>
                  <Pie
                    data={strategyData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    innerRadius={60}
                    paddingAngle={5}
                    onMouseEnter={(data) => setHoveredStrategy(data.name)}
                    onMouseLeave={() => setHoveredStrategy(null)}
                  >
                    {strategyData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color}
                        stroke={hoveredStrategy === entry.name ? "#ffffff" : "none"}
                        strokeWidth={hoveredStrategy === entry.name ? 2 : 0}
                        style={{
                          filter: hoveredStrategy === entry.name ? "brightness(1.1)" : "none",
                          transition: "all 0.2s ease"
                        }}
                      />
                    ))}
                  </Pie>
                  <ChartTooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload
                        return (
                          <div className="bg-background border border-border rounded-lg p-3 shadow-lg">
                            <p className="font-semibold">{data.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {data.count} trades • ${data.profit} profit
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {data.value}% of total volume
                            </p>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                </RechartsPieChart>
              </ChartContainer>
            </div>
            
            {/* Strategy Legend */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {strategyData.map((strategy, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
                  onMouseEnter={() => setHoveredStrategy(strategy.name)}
                  onMouseLeave={() => setHoveredStrategy(null)}
                >
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: strategy.color }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{strategy.name}</p>
                    <p className="text-xs text-muted-foreground">{strategy.count} trades</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">${strategy.profit}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Daily Performance */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-purple-600" />
              Daily Performance
            </CardTitle>
            <CardDescription>P&L breakdown by day of week</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <BarChart data={dailyPnlData}>
                <XAxis 
                  dataKey="day" 
                  tick={{ fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  tick={{ fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <ChartTooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      const value = payload[0].value as number
                      return (
                        <div className="bg-background border border-border rounded-lg p-3 shadow-lg">
                          <p className="font-semibold">{label}</p>
                          <p className={`text-sm ${value >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            P&L: ${value}
                          </p>
                        </div>
                      )
                    }
                    return null
                  }}
                  cursor={{ fill: "rgba(139, 92, 246, 0.1)" }}
                />
                <Bar 
                  dataKey="pnl" 
                  radius={[4, 4, 0, 0]}
                >
                  {dailyPnlData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.pnl >= 0 ? "#10b981" : "#ef4444"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Trading Timeframe Analysis */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-orange-600" />
            Trading Time Analysis
          </CardTitle>
          <CardDescription>Success rate by trading hours</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[250px]">
            <BarChart data={timeframeData}>
              <XAxis 
                dataKey="time" 
                tick={{ fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                tick={{ fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <ChartTooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload
                    const successRate = ((data.success / data.trades) * 100).toFixed(1)
                    return (
                      <div className="bg-background border border-border rounded-lg p-3 shadow-lg">
                        <p className="font-semibold">{label}</p>
                        <p className="text-sm text-muted-foreground">
                          Success: {data.success}/{data.trades} trades
                        </p>
                        <p className="text-sm text-green-600">
                          Success Rate: {successRate}%
                        </p>
                      </div>
                    )
                  }
                  return null
                }}
                cursor={{ fill: "rgba(139, 92, 246, 0.1)" }}
              />
              <Bar dataKey="trades" fill="#94a3b8" radius={[2, 2, 0, 0]} />
              <Bar dataKey="success" fill="#8b5cf6" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
} 