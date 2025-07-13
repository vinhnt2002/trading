"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { FloatingActionButton } from "@/components/ui/floating-action-button";
import { PsychologyOverview } from "@/components/psychology/psychology-overview";
import { TradeJournal } from "@/components/trading/trade-journal";
import { TradeDetailView } from "@/components/trading/trade-detail-view";
import { AnalyticsCharts } from "@/components/dashboard/analytics-charts";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Target, 
  Brain, 
  Activity,
  ArrowUpRight,
  Clock,
  BarChart3,
  PieChart,
  Zap,
  Star,
  Award,
  Percent,
  BookOpen,
  BarChart
} from "lucide-react";
import * as React from "react";

export default function HomePage() {
  const [currentView, setCurrentView] = React.useState<"dashboard" | "journal" | "tradeDetail" | "analytics">("dashboard");

  if (currentView === "journal") {
    return <TradeJournal />;
  }

  if (currentView === "tradeDetail") {
    return <TradeDetailView />;
  }

  if (currentView === "analytics") {
    return <AnalyticsCharts />;
  }

  return (
    <div className="space-y-8">
      {/* Modern Header Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Trading Analytics</h1>
            <p className="text-lg text-muted-foreground mt-2">
              Everything you need to know about your trading performance
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="bg-green-50 border-green-200 text-green-700 dark:bg-green-950 dark:border-green-800 dark:text-green-400 px-3 py-1">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Live Trading
            </Badge>
            <Button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
              onClick={() => setCurrentView("journal")}
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Open Journal
            </Button>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
              onClick={() => setCurrentView("tradeDetail")}
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              Trade Analysis
            </Button>
            <Button 
              variant="outline"
              className="border-2 hover:bg-accent transition-all duration-200"
              onClick={() => setCurrentView("analytics")}
            >
              <Activity className="h-4 w-4 mr-2" />
              Deep Analytics
            </Button>
          </div>
        </div>

        {/* TradeZella-Style Demo Banner with Interactive Elements */}
        <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 rounded-xl p-6 text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
          <div className="relative flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Professional Trading Journal</h2>
              <p className="text-purple-100">
                Everything you ever wanted to know about your trading... but your spreadsheets never told you.
              </p>
              <div className="mt-4 flex items-center gap-6">
                <div className="text-center cursor-pointer hover:scale-105 transition-transform duration-200">
                  <div className="text-2xl font-bold">147+</div>
                  <div className="text-sm text-purple-200">Trades Journaled</div>
                </div>
                <div className="text-center cursor-pointer hover:scale-105 transition-transform duration-200">
                  <div className="text-2xl font-bold">23+</div>
                  <div className="text-sm text-purple-200">Strategies Tested</div>
                </div>
                <div className="text-center cursor-pointer hover:scale-105 transition-transform duration-200">
                  <div className="text-2xl font-bold">68%</div>
                  <div className="text-sm text-purple-200">Win Rate</div>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button 
                className="bg-white text-purple-600 hover:bg-purple-50 hover:scale-105 transition-all duration-200"
                onClick={() => setCurrentView("journal")}
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Start Journaling
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-purple-600 hover:scale-105 transition-all duration-200"
                onClick={() => setCurrentView("tradeDetail")}
              >
                <BarChart className="h-4 w-4 mr-2" />
                Analyze Trade
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Key Performance Metrics with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Total P&L</p>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-green-600">+$2,450</span>
                    <div className="flex items-center text-green-600 text-sm animate-pulse">
                      <ArrowUpRight className="h-4 w-4" />
                      <span>12.5%</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">from last month</p>
                  <Progress value={75} className="mt-2 h-1" />
                </div>
                <div className="h-12 w-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Win Rate</p>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-blue-600">68%</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 animate-pulse">
                      Good
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">above average</p>
                  <Progress value={68} className="mt-2 h-1" />
                </div>
                <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Psychology Score</p>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-purple-600">8.4</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-3 w-3 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">excellent control</p>
                  <Progress value={84} className="mt-2 h-1" />
                </div>
                <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Active Trades</p>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-orange-600">3</span>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300">
                      <Activity className="h-3 w-3 mr-1" />
                      Live
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">monitoring positions</p>
                  <div className="flex gap-1 mt-2">
                    <div className="h-1 bg-green-500 rounded flex-1"></div>
                    <div className="h-1 bg-green-500 rounded flex-1"></div>
                    <div className="h-1 bg-red-500 rounded flex-1"></div>
                  </div>
                </div>
                <div className="h-12 w-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                  <Activity className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Analytics Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card 
            className="border-0 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:bg-accent/50"
            onClick={() => setCurrentView("analytics")}
          >
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">147</div>
              <div className="text-sm text-muted-foreground">Trades Executed</div>
              <div className="mt-2 h-1 bg-blue-200 rounded">
                <div className="h-1 bg-blue-600 rounded w-3/4"></div>
              </div>
            </CardContent>
          </Card>
          
          <Card 
            className="border-0 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:bg-accent/50"
            onClick={() => setCurrentView("analytics")}
          >
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">$12.4K</div>
              <div className="text-sm text-muted-foreground">Total Volume</div>
              <div className="mt-2 h-1 bg-green-200 rounded">
                <div className="h-1 bg-green-600 rounded w-4/5"></div>
              </div>
            </CardContent>
          </Card>
          
          <Card 
            className="border-0 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:bg-accent/50"
            onClick={() => setCurrentView("analytics")}
          >
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">23</div>
              <div className="text-sm text-muted-foreground">Strategies Tested</div>
              <div className="mt-2 h-1 bg-purple-200 rounded">
                <div className="h-1 bg-purple-600 rounded w-2/3"></div>
              </div>
            </CardContent>
          </Card>
          
          <Card 
            className="border-0 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer hover:bg-accent/50"
            onClick={() => setCurrentView("analytics")}
          >
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">2.3h</div>
              <div className="text-sm text-muted-foreground">Avg. Hold Time</div>
              <div className="mt-2 h-1 bg-orange-200 rounded">
                <div className="h-1 bg-orange-600 rounded w-1/2"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Dashboard Content - Enhanced TradeZella Style */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Trade Journal - Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-semibold">Recent Trades</CardTitle>
                  <CardDescription>Your latest trading activity with performance metrics</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hover:bg-purple-50 hover:border-purple-200 transition-all duration-200"
                    onClick={() => setCurrentView("analytics")}
                  >
                    <PieChart className="h-4 w-4 mr-2" />
                    Analytics
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hover:bg-blue-50 hover:border-blue-200 transition-all duration-200"
                    onClick={() => setCurrentView("journal")}
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    Open Journal
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div 
                  className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 hover:shadow-md transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
                  onClick={() => setCurrentView("tradeDetail")}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">EURUSD Long</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>2 hours ago</span>
                        <Separator orientation="vertical" className="h-3" />
                        <span>Risk: 2%</span>
                        <Badge variant="secondary" className="text-xs">Scalping</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">+$150</div>
                    <div className="text-sm text-muted-foreground">+2.3% return</div>
                    <Progress value={23} className="w-20 h-1 mt-1" />
                  </div>
                </div>
                
                <div 
                  className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 hover:shadow-md transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
                  onClick={() => setCurrentView("tradeDetail")}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-500 rounded-lg flex items-center justify-center shadow-lg">
                      <TrendingDown className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">GBPJPY Short</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>1 day ago</span>
                        <Separator orientation="vertical" className="h-3" />
                        <span>Risk: 1.5%</span>
                        <Badge variant="secondary" className="text-xs">Swing</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-600">-$75</div>
                    <div className="text-sm text-muted-foreground">-1.1% return</div>
                    <Progress value={11} className="w-20 h-1 mt-1" />
                  </div>
                </div>

                <div 
                  className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent/50 hover:shadow-md transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
                  onClick={() => setCurrentView("tradeDetail")}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">USDJPY Long</p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>3 days ago</span>
                        <Separator orientation="vertical" className="h-3" />
                        <span>Risk: 3%</span>
                        <Badge variant="secondary" className="text-xs">Day Trade</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">+$320</div>
                    <div className="text-sm text-muted-foreground">+4.8% return</div>
                    <Progress value={48} className="w-20 h-1 mt-1" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Psychology & Quick Actions - Right Column */}
        <div className="space-y-6">
          <PsychologyOverview />
          
          {/* Quick Actions Card */}
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
              <CardDescription>Fast access to common trading tasks</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                className="w-full justify-start hover:bg-green-50 hover:text-green-700 transition-all duration-200"
                variant="outline"
                onClick={() => setCurrentView("journal")}
              >
                <Zap className="h-4 w-4 mr-2" />
                Quick Trade Entry
              </Button>
              <Button 
                className="w-full justify-start hover:bg-blue-50 hover:text-blue-700 transition-all duration-200"
                variant="outline"
                onClick={() => setCurrentView("analytics")}
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                View Analytics
              </Button>
              <Button 
                className="w-full justify-start hover:bg-purple-50 hover:text-purple-700 transition-all duration-200"
                variant="outline"
              >
                <Award className="h-4 w-4 mr-2" />
                Review Goals
              </Button>
              <Button 
                className="w-full justify-start hover:bg-orange-50 hover:text-orange-700 transition-all duration-200"
                variant="outline"
              >
                <Percent className="h-4 w-4 mr-2" />
                Risk Calculator
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <FloatingActionButton />
    </div>
  );
}
