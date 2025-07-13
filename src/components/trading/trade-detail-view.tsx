"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { InteractiveTradingChart } from "./interactive-trading-chart"
import {
  Star,
  Target,
  AlertTriangle,
  Settings,
  BarChart3,
  Share,
  X,
  ChevronLeft,
  ChevronRight,
  RefreshCcw
} from "lucide-react"

interface TradeDetails {
  symbol: string
  date: string
  side: "LONG" | "SHORT"
  netPnl: number
  contractsTraded: number
  volume: number
  playbook: string
  feelScale: number
  tradeRule: string
  profitTarget: number
  stopLoss: number
  tradeRating: number
}

const tradeData: TradeDetails = {
  symbol: "MES",
  date: "Mon, Jun 10, 2024",
  side: "LONG",
  netPnl: 600.00,
  contractsTraded: 30,
  volume: 5,
  playbook: "Pullback Reset",
  feelScale: 8,
  tradeRule: "$300.00",
  profitTarget: 5358.0,
  stopLoss: 5346.0,
  tradeRating: 4
}

export function TradeDetailView() {

  return (
    <div className="flex h-screen bg-background">
      {/* Left Sidebar */}
      <div className="w-80 border-r bg-card/50 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h2 className="font-semibold">Trade Analysis</h2>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm">
                <Share className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Trade Info */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-6">
            {/* Basic Info */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">{tradeData.symbol}</h3>
                <Badge variant="outline" className="text-green-600 border-green-200">
                  {tradeData.side}
                </Badge>
              </div>
              
              <div className="text-sm text-gray-600 dark:text-gray-400">{tradeData.date}</div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Net P&L</div>
                  <div className="text-2xl font-bold text-green-600">${tradeData.netPnl.toFixed(2)}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Rating</div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 cursor-pointer ${
                          i < tradeData.tradeRating 
                            ? "text-yellow-400 fill-current" 
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Side</div>
                  <div className="font-medium">{tradeData.side}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Contracts Traded</div>
                  <div className="font-medium">{tradeData.contractsTraded}</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Gross P&L</div>
                  <div className="font-medium">${tradeData.netPnl.toFixed(2)}</div>
                </div>
                <div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Volume</div>
                  <div className="font-medium">{tradeData.volume}</div>
                </div>
              </div>
              
              <div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Playbook</div>
                <div className="font-medium">{tradeData.playbook}</div>
              </div>
              
              <div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Feel Scale</div>
                <div className="font-medium">{tradeData.feelScale}</div>
              </div>
              
              <div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">MAE / MFE</div>
                <div className="text-sm">
                  <span className="text-red-600">-$8,561.50</span> / <span className="text-green-600">$1,536.25</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Trade Rating */}
            <div className="space-y-3">
              <div className="text-sm font-medium">Trade Rating</div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 cursor-pointer ${
                      i < tradeData.tradeRating 
                        ? "text-yellow-400 fill-current" 
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            <Separator />

            {/* Profit Target & Stop Loss */}
            <div className="space-y-3">
              <div className="space-y-2">
                <div className="text-sm font-medium">Profit Target</div>
                <div className="text-lg font-bold">${tradeData.profitTarget}</div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm font-medium">Stop Loss</div>
                <div className="text-lg font-bold">${tradeData.stopLoss}</div>
              </div>
            </div>

            <Separator />

            {/* Trade Rule */}
            <div className="space-y-2">
              <div className="text-sm font-medium">Trade Rule</div>
              <div className="text-lg font-bold">{tradeData.tradeRule}</div>
            </div>
          </div>

          {/* Mistakes Section */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium">Mistakes</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-red-500">✗</span>
                  <span className="text-sm">late entry</span>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0 ml-auto">
                    <X className="h-3 w-3" />
                  </Button>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-red-500">✗</span>
                  <span className="text-sm">moved stop loss</span>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0 ml-auto">
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Setups */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">Setups</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">+</span>
                  <span className="text-sm">breakout</span>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0 ml-auto">
                    <X className="h-3 w-3" />
                  </Button>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">+</span>
                  <span className="text-sm">volume spike</span>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0 ml-auto">
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Habits */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-purple-500" />
                  <span className="text-sm font-medium">Habits</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-purple-500">◦</span>
                  <span className="text-sm">checked news</span>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0 ml-auto">
                    <X className="h-3 w-3" />
                  </Button>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-purple-500">◦</span>
                  <span className="text-sm">reviewed levels</span>
                  <Button variant="ghost" size="sm" className="h-6 w-6 p-0 ml-auto">
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chart Area */}
      <div className="flex-1 flex flex-col">
        {/* Chart Header */}
        <div className="border-b bg-card/50 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold">{tradeData.symbol} Analysis</h1>
              <Badge variant="outline" className="text-green-600 border-green-200">
                {tradeData.side} • ${tradeData.netPnl.toFixed(2)} P&L
              </Badge>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <RefreshCcw className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Share className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Interactive Trading Chart */}
        <div className="flex-1 p-4">
          <InteractiveTradingChart 
            symbol={tradeData.symbol}
            entryPrice={5358}
            exitPrice={5376}
            stopLoss={tradeData.stopLoss}
            takeProfit={tradeData.profitTarget}
          />
        </div>

        {/* Bottom Journal Section */}
        <div className="border-t bg-card/50 p-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Trade Journal</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Add Tag</Button>
                <Button variant="outline" size="sm">Save Note</Button>
              </div>
            </div>
            
            <Textarea 
              placeholder="Write your trade notes, observations, and lessons learned..."
              className="min-h-[120px] resize-none"
              defaultValue="Strong breakout setup with good volume confirmation. Entry was slightly late due to market hesitation, but overall execution was solid. Need to work on faster decision-making at key levels."
            />
            
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="cursor-pointer hover:bg-accent">breakout</Badge>
              <Badge variant="secondary" className="cursor-pointer hover:bg-accent">volume</Badge>
              <Badge variant="secondary" className="cursor-pointer hover:bg-accent">late-entry</Badge>
              <Button variant="ghost" size="sm" className="h-6 text-xs">+ Add Tag</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 