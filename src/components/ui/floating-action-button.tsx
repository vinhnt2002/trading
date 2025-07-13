"use client"

import { Plus, MessageCircle, Zap, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button 
            size="lg"
            className="w-14 h-14 rounded-full shadow-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 border-0 transition-all duration-300 hover:scale-110 hover:shadow-blue-500/50"
          >
            <Plus className="h-6 w-6 text-white transition-transform duration-300" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="end" 
          className="w-56 mb-4 rounded-2xl border-0 shadow-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm"
        >
          <DropdownMenuItem className="rounded-xl p-3 cursor-pointer">
            <TrendingUp className="mr-3 h-5 w-5 text-green-600" />
            <div>
              <p className="font-medium">Add Trade</p>
              <p className="text-xs text-slate-500">Record a new trade</p>
            </div>
          </DropdownMenuItem>
          
          <DropdownMenuItem className="rounded-xl p-3 cursor-pointer">
            <MessageCircle className="mr-3 h-5 w-5 text-purple-600" />
            <div>
              <p className="font-medium">Quick Note</p>
              <p className="text-xs text-slate-500">Add psychology note</p>
            </div>
          </DropdownMenuItem>
          
          <DropdownMenuItem className="rounded-xl p-3 cursor-pointer">
            <Zap className="mr-3 h-5 w-5 text-orange-600" />
            <div>
              <p className="font-medium">Market Alert</p>
              <p className="text-xs text-slate-500">Set price alert</p>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
} 