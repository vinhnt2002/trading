import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function OverviewCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Total P&L</CardTitle>
          <CardDescription>This month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">+$2,450</div>
          <p className="text-xs text-muted-foreground">+12.5% from last month</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Win Rate</CardTitle>
          <CardDescription>Last 30 trades</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">68%</div>
          <Progress value={68} className="mt-2" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Psychology Score</CardTitle>
          <CardDescription>Current mood</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-600">7.5/10</div>
          <p className="text-xs text-muted-foreground">Confident & Disciplined</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Active Trades</CardTitle>
          <CardDescription>Open positions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">3</div>
          <p className="text-xs text-muted-foreground">2 profitable, 1 at risk</p>
        </CardContent>
      </Card>
    </div>
  );
} 