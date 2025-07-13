"use client"

import * as React from "react"
import {
  BarChart3,
  Brain,
  Target,
  Zap,
  BookOpen,
  Newspaper,
  Settings,
  User,
  TrendingUp,
  Calendar,
  PieChart,
  Bell,
  ChevronUp,
  CreditCard,
  Sparkles,
  LogOut,
  Home,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

// Navigation data
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: Home,
      isActive: true,
    },
    {
      title: "Psychology",
      url: "/psychology",
      icon: Brain,
      items: [
        {
          title: "Emotion Tracker",
          url: "/psychology/emotions",
        },
        {
          title: "Mood Calendar",
          url: "/psychology/calendar",
        },
        {
          title: "Pattern Analysis",
          url: "/psychology/patterns",
        },
      ],
    },
    {
      title: "Quick Stats",
      url: "/stats",
      icon: Target,
      items: [
        {
          title: "Performance",
          url: "/stats/performance",
        },
        {
          title: "Risk Metrics",
          url: "/stats/risk",
        },
        {
          title: "Analytics",
          url: "/stats/analytics",
        },
      ],
    },
    {
      title: "Market Check",
      url: "/market",
      icon: Zap,
      items: [
        {
          title: "Live Prices",
          url: "/market/live",
        },
        {
          title: "Technical Analysis",
          url: "/market/technical",
        },
        {
          title: "Market Sentiment",
          url: "/market/sentiment",
        },
      ],
    },
    {
      title: "Trade Journal",
      url: "/journal",
      icon: BookOpen,
      items: [
        {
          title: "Trade History",
          url: "/journal/history",
        },
        {
          title: "Performance Review",
          url: "/journal/review",
        },
        {
          title: "Export Data",
          url: "/journal/export",
        },
      ],
    },
    {
      title: "Market News",
      url: "/news",
      icon: Newspaper,
      items: [
        {
          title: "Economic Calendar",
          url: "/news/calendar",
        },
        {
          title: "News Feed",
          url: "/news/feed",
        },
        {
          title: "Sentiment Analysis",
          url: "/news/sentiment",
        },
      ],
    },
  ],
  quickActions: [
    {
      title: "New Trade",
      url: "/trade/new",
      icon: TrendingUp,
      color: "text-green-600",
    },
    {
      title: "Portfolio",
      url: "/portfolio",
      icon: PieChart,
      color: "text-blue-600",
    },
    {
      title: "Alerts",
      url: "/alerts",
      icon: Bell,
      color: "text-yellow-600",
      badge: "3",
    },
    {
      title: "Calendar",
      url: "/calendar",
      icon: Calendar,
      color: "text-purple-600",
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar()
  
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-3 px-0 py-0 md:px-2 md:py-2">
          <div className="">
            <BarChart3 className="size-4 text-white" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">Trading Dashboard</span>
            <span className="truncate text-xs text-muted-foreground">Professional Suite</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <TooltipProvider>
          {/* Main Navigation */}
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {data.navMain.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuButton asChild isActive={item.isActive}>
                          <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                          </a>
                        </SidebarMenuButton>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p>{item.title}</p>
                      </TooltipContent>
                    </Tooltip>
                    {item.items?.length && state === "expanded" ? (
                      <SidebarMenuSub>
                        {item.items.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <a href={subItem.url}>
                                <span>{subItem.title}</span>
                              </a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    ) : null}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Quick Actions */}
          <SidebarGroup>
            <SidebarGroupLabel>Quick Actions</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {data.quickActions.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuButton asChild>
                          <a href={item.url} className="group">
                            <item.icon className={item.color} />
                            <span>{item.title}</span>
                            {item.badge && state === "expanded" && (
                              <Badge variant="secondary" className="ml-auto">
                                {item.badge}
                              </Badge>
                            )}
                          </a>
                        </SidebarMenuButton>
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p>{item.title}</p>
                      </TooltipContent>
                    </Tooltip>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

        {/* Trading Metrics - Only show when expanded */}
        {state === "expanded" && (
          <SidebarGroup>
            <SidebarGroupLabel>Trading Metrics</SidebarGroupLabel>
            <SidebarGroupContent>
              <div className="space-y-3 px-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Total P&L</span>
                  <span className="font-medium text-green-600">+$2,450</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Win Rate</span>
                  <span className="font-medium">68%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Active Trades</span>
                  <span className="font-medium">3</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Psychology Score</span>
                  <span className="font-medium text-purple-600">7.5/10</span>
                </div>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
        </TooltipProvider>
      </SidebarContent>

      <SidebarFooter>
        <TooltipProvider>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Tooltip>
                  <TooltipTrigger asChild>
                    <SidebarMenuButton
                      size="lg"
                      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                    >
                      <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                        <AvatarFallback className="rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                          <User className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      {state === "expanded" && (
                        <>
                          <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-semibold">John Trader</span>
                            <span className="truncate text-xs text-muted-foreground">john@trader.com</span>
                          </div>
                          <ChevronUp className="ml-auto size-4" />
                        </>
                      )}
                    </SidebarMenuButton>
                  </TooltipTrigger>
                  {state === "collapsed" && (
                    <TooltipContent side="right">
                      <p>John Trader</p>
                    </TooltipContent>
                  )}
                </Tooltip>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                      <AvatarFallback className="rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">John Trader</span>
                      <span className="truncate text-xs text-muted-foreground">john@trader.com</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Upgrade to Pro
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  Billing
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
                      </SidebarMenuItem>
          </SidebarMenu>
        </TooltipProvider>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
} 