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
    <section className="mt-50 flex items-center justify-center sm:p-2 md:p-6 lg:p-10">
      <div className="w-full max-w-6xl space-y-8 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">
            Features that make you productive
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Everything you need to get your work done efficiently and
            effectively. Built for developers, designed for success.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardContent className="space-y-2 p-6">
                <feature.icon className="text-primary m-auto mb-10 h-12 w-12" />
                <h3 className="font-bold">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">
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
