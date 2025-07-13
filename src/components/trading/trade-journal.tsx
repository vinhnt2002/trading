"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Plus,
  Search,
  Tag,
  Calendar,
  TrendingUp,
  Star,
  MoreHorizontal,
  Filter,
  BookOpen,
  Target,
  Brain,
  Settings,
  Bell
} from "lucide-react"

interface TradeEntry {
  id: string
  symbol: string
  date: string
  type: "LONG" | "SHORT"
  pnl: number
  status: "WIN" | "LOSS" | "BREAKEVEN"
  rating?: number
  tags?: string[]
}

const tradeEntries: TradeEntry[] = [
  {
    id: "1",
    symbol: "ES",
    date: "Jun 19, 2024",
    type: "LONG",
    pnl: 607.50,
    status: "WIN",
    rating: 4,
    tags: ["Breakout", "Strong Volume"]
  },
  {
    id: "2",
    symbol: "MES",
    date: "Jun 25, 2024",
    type: "SHORT", 
    pnl: -150.00,
    status: "LOSS",
    rating: 2,
    tags: ["Failed Setup"]
  },
  {
    id: "3",
    symbol: "NQ",
    date: "Jun 26, 2024",
    type: "LONG",
    pnl: 850.00,
    status: "WIN",
    rating: 5,
    tags: ["Perfect Entry", "High Conviction"]
  },
  {
    id: "4",
    symbol: "CL",
    date: "Jun 21, 2024",
    type: "SHORT",
    pnl: 0.00,
    status: "BREAKEVEN",
    rating: 3
  }
]

const sidebarItems = [
  { icon: BookOpen, label: "All notes", count: 247 },
  { icon: Target, label: "Trade Notes", count: 156 },
  { icon: Calendar, label: "Daily Journal", count: 89 },
  { icon: Brain, label: "Sessions Recap", count: 45 },
  { icon: Star, label: "Quarterly Goals", count: 12, highlight: true },
  { icon: TrendingUp, label: "Trading Plan", count: 8 },
  { icon: Settings, label: "Plan of Action", count: 3 },
]

export function TradeJournal() {
  const [selectedTrade, setSelectedTrade] = React.useState<TradeEntry | null>(tradeEntries[0])
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredTrades = tradeEntries.filter(trade => 
    trade.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
    trade.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Left Sidebar */}
      <div className="w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => window.location.reload()}
            >
              ← Back
            </Button>
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
              <Plus className="h-4 w-4 mr-2" />
              Add folder
            </Button>
            <Button size="sm" variant="outline">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">Folders</h3>
          
          <ScrollArea className="h-64">
            <div className="space-y-1">
              {sidebarItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-colors ${
                    item.highlight 
                      ? "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-400" 
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  {item.count && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">{item.count}</span>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Tags Section */}
        <div className="p-6">
          <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">Tags</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm">FOMC</span>
              </div>
              <span className="text-xs text-gray-500">2</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Equities</span>
              </div>
              <span className="text-xs text-gray-500">1</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">Futures</span>
              </div>
              <span className="text-xs text-gray-500">1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Column - Trade List */}
      <div className="w-96 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <Button variant="ghost" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Select All
            </Button>
            <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
              <Bell className="h-4 w-4 mr-2" />
              New note
            </Button>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search trades..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Trade Entries List */}
        <ScrollArea className="flex-1">
          <div className="p-4 space-y-3">
            {filteredTrades.map((trade) => (
              <Card
                key={trade.id}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  selectedTrade?.id === trade.id 
                    ? "ring-2 ring-purple-500 bg-purple-50 dark:bg-purple-950/20" 
                    : ""
                }`}
                onClick={() => setSelectedTrade(trade)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {trade.symbol} • {trade.date}
                    </span>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant={trade.type === "LONG" ? "default" : "secondary"}
                        className={trade.type === "LONG" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                      >
                        {trade.type}
                      </Badge>
                      {trade.rating && (
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < trade.rating! 
                                  ? "text-yellow-400 fill-current" 
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <div className="text-right">
                      <div className={`font-bold ${
                        trade.pnl > 0 ? "text-green-600" : trade.pnl < 0 ? "text-red-600" : "text-gray-600"
                      }`}>
                        {trade.pnl > 0 ? "+" : ""}${trade.pnl.toFixed(2)}
                      </div>
                    </div>
                  </div>
                  
                  {trade.tags && (
                    <div className="flex flex-wrap gap-1">
                      {trade.tags.map((tag, index) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className="text-xs bg-purple-50 text-purple-700 border-purple-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Right Column - Trade Details */}
      <div className="flex-1 bg-white dark:bg-gray-800 overflow-auto">
        {selectedTrade ? (
          <div className="h-full flex flex-col">
            {/* Trade Header */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <h1 className="text-2xl font-bold">{selectedTrade.symbol}: {selectedTrade.date}</h1>
                  <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                    Created: Jul 07, 2024 03:54AM
                  </Badge>
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  View Trade Details
                </Button>
              </div>

              {/* Trade Stats */}
              <div className="grid grid-cols-4 gap-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    ${selectedTrade.pnl.toFixed(2)}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Net P&L</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">2</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Contracts Traded</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">5</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Volume</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">$0.00</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Commissions</div>
                </div>
              </div>
            </div>

            {/* Pre-Market Plan */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Pre-Market Plan</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    + Add Template
                  </Button>
                  <Button variant="outline" size="sm">
                    <Tag className="h-4 w-4 mr-2" />
                    Add tag
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="bg-purple-50 dark:bg-purple-950/20 p-3 rounded-lg mb-3">
                    <span className="text-purple-700 dark:text-purple-300 font-medium">Review your trade setups</span>
                  </div>
                  
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 text-sm font-medium text-gray-600">Symbol</th>
                        <th className="text-left py-2 text-sm font-medium text-gray-600">Game Plan</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr className="border-b">
                        <td className="py-3 font-medium">{selectedTrade.symbol}</td>
                        <td className="py-3 text-gray-600">Wait for breakout above resistance</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 font-medium">MES</td>
                        <td className="py-3 text-gray-600">Short on rejection at key level</td>
                      </tr>
                      <tr>
                        <td className="py-3 font-medium">CL</td>
                        <td className="py-3 text-gray-600">Range trading strategy</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <div className="mb-2">📊</div>
                    <div className="text-sm">Trade chart visualization</div>
                    <div className="text-xs mt-1">Chart will be displayed here</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="flex-1 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Trading Notes</h3>
                <Button variant="outline" size="sm">
                  Jot down your notes
                </Button>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 min-h-48">
                <div className="text-gray-500 dark:text-gray-400 text-sm">
                  Add your trading thoughts, emotions, and lessons learned...
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <BookOpen className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No trade selected</h3>
              <p className="text-sm">Select a trade from the list to view details</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 