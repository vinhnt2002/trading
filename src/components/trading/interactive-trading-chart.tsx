"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  ComposedChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
  Area,
  AreaChart,
  Cell
} from "recharts"
import {
  TrendingUp,
  TrendingDown,
  Volume,
  Target,
  AlertTriangle,
  Settings,
  Maximize2,
  Play,
  Pause,
  RotateCcw,
  Layers,
  MousePointer,
  Crosshair,
  Ruler,
  BarChart3
} from "lucide-react"

// Mock candlestick data
const candlestickData = [
  { time: "09:30", open: 5340, high: 5350, low: 5335, close: 5348, volume: 2500, ma20: 5342, ma50: 5345 },
  { time: "09:31", open: 5348, high: 5355, low: 5346, close: 5352, volume: 3200, ma20: 5343, ma50: 5346 },
  { time: "09:32", open: 5352, high: 5358, low: 5350, close: 5356, volume: 2800, ma20: 5344, ma50: 5347 },
  { time: "09:33", open: 5356, high: 5360, low: 5354, close: 5359, volume: 3500, ma20: 5345, ma50: 5348 },
  { time: "09:34", open: 5359, high: 5365, low: 5357, close: 5361, volume: 4100, ma20: 5346, ma50: 5349 },
  { time: "09:35", open: 5361, high: 5368, low: 5359, close: 5365, volume: 3800, ma20: 5347, ma50: 5350 },
  { time: "09:36", open: 5365, high: 5370, low: 5363, close: 5367, volume: 2900, ma20: 5348, ma50: 5351 },
  { time: "09:37", open: 5367, high: 5372, low: 5364, close: 5369, volume: 3100, ma20: 5349, ma50: 5352 },
  { time: "09:38", open: 5369, high: 5375, low: 5366, close: 5371, volume: 3600, ma20: 5350, ma50: 5353 },
  { time: "09:39", open: 5371, high: 5378, low: 5368, close: 5374, volume: 4200, ma20: 5351, ma50: 5354 },
  { time: "09:40", open: 5374, high: 5380, low: 5371, close: 5376, volume: 3400, ma20: 5352, ma50: 5355 },
  { time: "09:41", open: 5376, high: 5382, low: 5373, close: 5378, volume: 2700, ma20: 5353, ma50: 5356 },
  { time: "09:42", open: 5378, high: 5385, low: 5375, close: 5380, volume: 3900, ma20: 5354, ma50: 5357 },
  { time: "09:43", open: 5380, high: 5387, low: 5377, close: 5382, volume: 3300, ma20: 5355, ma50: 5358 },
  { time: "09:44", open: 5382, high: 5389, low: 5379, close: 5384, volume: 2600, ma20: 5356, ma50: 5359 },
  { time: "09:45", open: 5384, high: 5391, low: 5381, close: 5386, volume: 3700, ma20: 5357, ma50: 5360 }
]

const pnlData = [
  { time: "09:30", pnl: 0, cumulative: 0 },
  { time: "09:31", pnl: 120, cumulative: 120 },
  { time: "09:32", pnl: 80, cumulative: 200 },
  { time: "09:33", pnl: 150, cumulative: 350 },
  { time: "09:34", pnl: 100, cumulative: 450 },
  { time: "09:35", pnl: 200, cumulative: 650 },
  { time: "09:36", pnl: 50, cumulative: 700 },
  { time: "09:37", pnl: 100, cumulative: 800 },
  { time: "09:38", pnl: 75, cumulative: 875 },
  { time: "09:39", pnl: 125, cumulative: 1000 },
  { time: "09:40", pnl: -50, cumulative: 950 },
  { time: "09:41", pnl: 100, cumulative: 1050 },
  { time: "09:42", pnl: 150, cumulative: 1200 },
  { time: "09:43", pnl: -100, cumulative: 1100 },
  { time: "09:44", pnl: 200, cumulative: 1300 },
  { time: "09:45", pnl: -100, cumulative: 1200 }
]

interface InteractiveTradingChartProps {
  symbol?: string
  entryPrice?: number
  exitPrice?: number
  stopLoss?: number
  takeProfit?: number
}

export function InteractiveTradingChart({ 
  symbol = "MES", 
  entryPrice = 5358,
  exitPrice = 5376,
  stopLoss = 5346,
  takeProfit = 5380
}: InteractiveTradingChartProps) {
  const [selectedTimeframe, setSelectedTimeframe] = React.useState("1m")
  const [selectedIndicator, setSelectedIndicator] = React.useState("ma")
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [selectedTool, setSelectedTool] = React.useState("cursor")
  const [showVolume, setShowVolume] = React.useState(true)
  const [hoveredCandle, setHoveredCandle] = React.useState<any>(null)

  const chartConfig = {
    price: {
      label: "Price",
      color: "hsl(var(--chart-1))",
    },
    volume: {
      label: "Volume",
      color: "hsl(var(--chart-2))",
    },
    ma20: {
      label: "MA 20",
      color: "#8b5cf6",
    },
    ma50: {
      label: "MA 50",
      color: "#06b6d4",
    }
  }

  const tools = [
    { id: "cursor", icon: MousePointer, label: "Cursor" },
    { id: "crosshair", icon: Crosshair, label: "Crosshair" },
    { id: "ruler", icon: Ruler, label: "Ruler" },
    { id: "trend", icon: TrendingUp, label: "Trend Line" }
  ]

  return (
    <div className="space-y-4">
      {/* Chart Toolbar */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-lg">{symbol}</h3>
                <Badge variant="outline" className="text-green-600 border-green-200">
                  LONG
                </Badge>
              </div>
              
              <Separator orientation="vertical" className="h-6" />
              
              <div className="flex items-center gap-2">
                <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1m">1m</SelectItem>
                    <SelectItem value="5m">5m</SelectItem>
                    <SelectItem value="15m">15m</SelectItem>
                    <SelectItem value="1h">1h</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={selectedIndicator} onValueChange={setSelectedIndicator}>
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ma">MA</SelectItem>
                    <SelectItem value="bollinger">BB</SelectItem>
                    <SelectItem value="rsi">RSI</SelectItem>
                    <SelectItem value="macd">MACD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {/* Drawing Tools */}
              <div className="flex items-center gap-1 border rounded-lg p-1">
                {tools.map((tool) => (
                  <Button
                    key={tool.id}
                    variant={selectedTool === tool.id ? "default" : "ghost"}
                    size="sm"
                    className="h-8 w-8 p-0"
                    onClick={() => setSelectedTool(tool.id)}
                  >
                    <tool.icon className="h-4 w-4" />
                  </Button>
                ))}
              </div>
              
              <Separator orientation="vertical" className="h-6" />
              
              {/* Playback Controls */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              
              <Button variant="ghost" size="sm">
                <RotateCcw className="h-4 w-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowVolume(!showVolume)}
              >
                <Volume className="h-4 w-4" />
              </Button>
              
              <Button variant="ghost" size="sm">
                <Maximize2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Trading Chart */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-0">
          <div className="relative">
            {/* Price Chart */}
            <div className="h-[400px] p-4">
              <ChartContainer config={chartConfig} className="h-full">
                <ComposedChart data={candlestickData}>
                  <XAxis 
                    dataKey="time" 
                    tick={{ fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis 
                    domain={['dataMin - 5', 'dataMax + 5']}
                    tick={{ fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                    orientation="right"
                  />
                  
                  {/* Reference Lines */}
                  <ReferenceLine 
                    y={entryPrice} 
                    stroke="#8b5cf6" 
                    strokeDasharray="5 5" 
                    label={{ value: "Entry", position: "left" }}
                  />
                  <ReferenceLine 
                    y={stopLoss} 
                    stroke="#ef4444" 
                    strokeDasharray="3 3" 
                    label={{ value: "Stop Loss", position: "left" }}
                  />
                  <ReferenceLine 
                    y={takeProfit} 
                    stroke="#10b981" 
                    strokeDasharray="3 3" 
                    label={{ value: "Take Profit", position: "left" }}
                  />
                  
                  {/* Moving Averages */}
                  {selectedIndicator === "ma" && (
                    <>
                      <Line
                        type="monotone"
                        dataKey="ma20"
                        stroke="#8b5cf6"
                        strokeWidth={1.5}
                        dot={false}
                        strokeOpacity={0.8}
                      />
                      <Line
                        type="monotone"
                        dataKey="ma50"
                        stroke="#06b6d4"
                        strokeWidth={1.5}
                        dot={false}
                        strokeOpacity={0.8}
                      />
                    </>
                  )}
                  
                  {/* Candlestick approximation with bars */}
                  <Bar
                    dataKey="close"
                    strokeWidth={1}
                    radius={[1, 1, 1, 1]}
                    onMouseEnter={(data) => setHoveredCandle(data)}
                    onMouseLeave={() => setHoveredCandle(null)}
                  >
                    {candlestickData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.close >= entry.open ? "#10b981" : "#ef4444"}
                        stroke={entry.close >= entry.open ? "#10b981" : "#ef4444"}
                      />
                    ))}
                  </Bar>
                  
                  <ChartTooltip
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload
                        return (
                          <div className="bg-background border border-border rounded-lg p-3 shadow-lg">
                            <p className="font-semibold">{label}</p>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              <div>Open: {data.open}</div>
                              <div>High: {data.high}</div>
                              <div>Low: {data.low}</div>
                              <div>Close: {data.close}</div>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                              Volume: {data.volume.toLocaleString()}
                            </p>
                          </div>
                        )
                      }
                      return null
                    }}
                  />
                </ComposedChart>
              </ChartContainer>
            </div>
            
            {/* Volume Chart */}
            {showVolume && (
              <div className="h-[120px] p-4 border-t">
                <ChartContainer config={chartConfig} className="h-full">
                  <BarChart data={candlestickData}>
                    <XAxis 
                      dataKey="time" 
                      tick={{ fontSize: 10 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      tick={{ fontSize: 10 }}
                      axisLine={false}
                      tickLine={false}
                      orientation="right"
                    />
                    <Bar 
                      dataKey="volume" 
                      fill="#94a3b8"
                      radius={[1, 1, 0, 0]}
                      opacity={0.7}
                    />
                    <ChartTooltip
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-background border border-border rounded-lg p-2 shadow-lg">
                              <p className="text-xs font-medium">{label}</p>
                              <p className="text-xs text-muted-foreground">
                                Volume: {payload[0].value?.toLocaleString()}
                              </p>
                            </div>
                          )
                        }
                        return null
                      }}
                    />
                  </BarChart>
                </ChartContainer>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Running P&L Chart */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="font-semibold">Running P&L</h4>
              <p className="text-sm text-muted-foreground">Real-time profit and loss tracking</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-green-600 border-green-200">
                Max Profit: $1,300
              </Badge>
              <Badge variant="outline" className="text-red-600 border-red-200">
                Max Loss: -$100
              </Badge>
            </div>
          </div>
          
          <ChartContainer config={chartConfig} className="h-[200px]">
            <AreaChart data={pnlData}>
              <defs>
                <linearGradient id="pnlGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="time" 
                tick={{ fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                tick={{ fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                orientation="right"
              />
              <Area
                type="monotone"
                dataKey="cumulative"
                stroke="#10b981"
                strokeWidth={2}
                fill="url(#pnlGradient)"
                dot={false}
              />
              <ReferenceLine y={0} stroke="#94a3b8" strokeDasharray="2 2" />
              <ChartTooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload
                    return (
                      <div className="bg-background border border-border rounded-lg p-3 shadow-lg">
                        <p className="font-semibold">{label}</p>
                        <p className="text-sm text-green-600">
                          Current P&L: ${data.cumulative}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Change: ${data.pnl > 0 ? '+' : ''}${data.pnl}
                        </p>
                      </div>
                    )
                  }
                  return null
                }}
                cursor={{ stroke: "#10b981", strokeWidth: 1, strokeDasharray: "5 5" }}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
} 