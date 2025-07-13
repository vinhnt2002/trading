import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Trade {
  id: string;
  pair: string;
  direction: "Long" | "Short";
  profit: number;
  time: string;
}

export function RecentTrades() {
  const trades: Trade[] = [
    {
      id: "1",
      pair: "EURUSD",
      direction: "Long",
      profit: 150,
      time: "2 hours ago",
    },
    {
      id: "2",
      pair: "GBPJPY",
      direction: "Short",
      profit: -75,
      time: "1 day ago",
    },
    {
      id: "3",
      pair: "USDJPY",
      direction: "Long",
      profit: 220,
      time: "2 days ago",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Trades</CardTitle>
        <CardDescription>Your latest trading activity</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trades.map((trade) => (
            <div key={trade.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{trade.pair}</p>
                <p className="text-sm text-muted-foreground">
                  {trade.direction} • {trade.time}
                </p>
              </div>
              <Badge
                variant="secondary"
                className={trade.profit > 0 ? "text-green-600" : "text-red-600"}
              >
                {trade.profit > 0 ? "+" : ""}${trade.profit}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 