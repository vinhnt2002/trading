import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function EmotionTracker() {
  const emotions = [
    { name: "Confidence", value: 75 },
    { name: "Discipline", value: 82 },
    { name: "Risk Management", value: 90 },
    { name: "Patience", value: 65 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Emotion Tracker</CardTitle>
        <CardDescription>How you&apos;re feeling about trading</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {emotions.map((emotion) => (
            <div key={emotion.name} className="flex items-center justify-between">
              <span>{emotion.name}</span>
              <Progress value={emotion.value} className="w-24" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 