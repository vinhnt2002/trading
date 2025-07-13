import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  TrendingUp, 
  Target, 
  Heart, 
  Zap, 
  Shield,
  Lightbulb,
  Calendar
} from "lucide-react";

export function PsychologyOverview() {
  const moodData = [
    { day: "Mon", mood: 8, trades: 3 },
    { day: "Tue", mood: 6, trades: 2 },
    { day: "Wed", mood: 9, trades: 5 },
    { day: "Thu", mood: 7, trades: 1 },
    { day: "Fri", mood: 8, trades: 4 },
    { day: "Sat", mood: 5, trades: 0 },
    { day: "Sun", mood: 7, trades: 1 },
  ];

  const psychologyMetrics = [
    {
      title: "Emotional Control",
      value: 85,
      icon: Heart,
      color: "from-red-500 to-pink-500",
      description: "Staying calm under pressure"
    },
    {
      title: "Decision Quality",
      value: 78,
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
      description: "Making rational choices"
    },
    {
      title: "Risk Tolerance",
      value: 92,
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      description: "Managing risk effectively"
    },
    {
      title: "Focus Level",
      value: 73,
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      description: "Maintaining concentration"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Weekly Mood Calendar */}
      <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-white/20 dark:border-slate-700/50 shadow-xl">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl font-semibold flex items-center gap-3">
                <Calendar className="h-6 w-6 text-purple-600" />
                Weekly Mood Calendar
              </CardTitle>
              <CardDescription>Your emotional journey this week</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="rounded-xl">
              View Details
            </Button>
          </div>
        </CardHeader>
        <CardContent>
                     <div className="grid grid-cols-7 gap-4">
             {moodData.map((day) => (
               <div key={day.day} className="text-center space-y-2">
                <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{day.day}</p>
                <div 
                  className={`
                    w-12 h-12 mx-auto rounded-xl flex items-center justify-center text-white font-bold text-lg
                    ${day.mood >= 8 ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 
                      day.mood >= 6 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : 
                      'bg-gradient-to-r from-red-500 to-pink-500'}
                    hover:scale-110 transition-transform duration-200 cursor-pointer
                  `}
                >
                  {day.mood}
                </div>
                <div className="flex justify-center">
                  <Badge variant="outline" className="text-xs">
                    {day.trades} trades
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Psychology Metrics Grid */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {psychologyMetrics.map((metric) => (
           <Card 
            key={metric.title}
            className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-800 dark:to-slate-700/50 border-slate-200/50 dark:border-slate-600/50 overflow-hidden relative"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
              <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">
                {metric.title}
              </CardTitle>
              <div className={`p-2 bg-gradient-to-r ${metric.color} rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                <metric.icon className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                {metric.value}%
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
                {metric.description}
              </p>
              <Progress value={metric.value} className="h-2" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Trading Psychology Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Emotional Patterns */}
        <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-white/20 dark:border-slate-700/50 shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center gap-3">
              <Brain className="h-6 w-6 text-purple-600" />
              Emotional Patterns
            </CardTitle>
            <CardDescription>AI-detected patterns in your trading psychology</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 border border-green-200/50 dark:border-green-800/50">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 dark:text-green-400">Strength Pattern</h4>
                    <p className="text-sm text-green-600 dark:text-green-500">
                      You maintain discipline best on Tuesday and Wednesday mornings
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/50 dark:to-orange-950/50 border border-yellow-200/50 dark:border-yellow-800/50">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">Watch Point</h4>
                    <p className="text-sm text-yellow-600 dark:text-yellow-500">
                      Emotional volatility increases after consecutive losses
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 border border-blue-200/50 dark:border-blue-800/50">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                    <Target className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400">Recommendation</h4>
                    <p className="text-sm text-blue-600 dark:text-blue-500">
                      Take 15-minute breaks between trades to maintain focus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-white/20 dark:border-slate-700/50 shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Psychology Tools</CardTitle>
            <CardDescription>Quick actions to improve your trading mindset</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button className="w-full justify-start bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 rounded-xl h-12">
                <Brain className="mr-3 h-5 w-5" />
                Start Meditation Session
              </Button>
              
              <Button variant="outline" className="w-full justify-start rounded-xl h-12 hover:bg-blue-50 dark:hover:bg-blue-950/50">
                <Calendar className="mr-3 h-5 w-5 text-blue-600" />
                Log Emotional State
              </Button>
              
              <Button variant="outline" className="w-full justify-start rounded-xl h-12 hover:bg-green-50 dark:hover:bg-green-950/50">
                <Target className="mr-3 h-5 w-5 text-green-600" />
                Review Trading Goals
              </Button>
              
              <Button variant="outline" className="w-full justify-start rounded-xl h-12 hover:bg-orange-50 dark:hover:bg-orange-950/50">
                <Lightbulb className="mr-3 h-5 w-5 text-orange-600" />
                Psychology Lesson
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 