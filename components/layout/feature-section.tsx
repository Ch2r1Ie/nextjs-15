import { Card, CardContent } from "@/components/ui/card";
import {
  RocketIcon,
  ShieldCheckIcon,
  ZapIcon,
  BarChartIcon,
} from "lucide-react";

const features = [
  {
    icon: RocketIcon,
    title: "Fast Performance",
    description:
      "Optimized for speed and efficiency, ensuring your application runs smoothly.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Secure by Default",
    description: "Built-in security features to protect your data and users.",
  },
  {
    icon: ZapIcon,
    title: "Easy Integration",
    description: "Simple to integrate with your existing tools and workflows.",
  },
  {
    icon: BarChartIcon,
    title: "Analytics",
    description: "Detailed insights and metrics to track your progress.",
  },
];

export default function FeatureSectionSimple() {
  return (
    <section className="flex items-center justify-center min-h-screen p-8">
      <div className="text-center space-y-8 w-full max-w-6xl">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">
            Features that make you productive
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to get your work done efficiently and
            effectively. Built for developers, designed for success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardContent className="p-6 space-y-2">
                <feature.icon className="h-12 w-12 text-primary" />
                <h3 className="font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
