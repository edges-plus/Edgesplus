import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

interface ChartData {
  value: number;
  height: number;
  delay: number;
}

interface LegendItem {
  label: string;
  value: string;
  color: "primary" | "secondary";
}

const PurchaseManagement = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Dummy data for the chart
  const chartData: ChartData[] = [
    { value: 20, height: 40, delay: 0.1 },
    { value: 20, height: 45, delay: 0.2 },
    { value: 20, height: 50, delay: 0.3 },
    { value: 20, height: 48, delay: 0.4 },
    { value: 20, height: 55, delay: 0.5 },
    { value: 20, height: 48, delay: 0.6 },
    { value: 20, height: 60, delay: 0.7 },
    { value: 20, height: 40, delay: 0.8 },
    { value: 20, height: 65, delay: 0.9 },
    { value: 20, height: 55, delay: 1.0 },
  ];

  const legendData: LegendItem[] = [
    { label: "Product sales", value: "$7,213", color: "primary" },
    { label: "Subscriptions", value: "$5,662", color: "secondary" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="w-72 p-4  shadow-[var(--shadow-card)] border-0">
      <div
        className={`space-y-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      >
        {/* Header */}
        <div className="space-y-1">
          <h2 className="text-muted-foreground text-xs font-medium tracking-wide">
            Purchase Management
          </h2>
          <div className="text-2xl font-bold text-foreground">$12,875</div>
        </div>

        {/* Chart */}
        <div className="relative w-full h-28">
          <div className="flex items-end justify-between h-full px-1">
            {chartData.map((bar, index) => (
              <div key={index} className="flex flex-col items-center gap-0.5">
                {/* Subscription bar on top */}
                <div
                  className={`w-1.5 rounded-full origin-bottom transform scale-y-0
                    bg-chart-secondary shadow-[var(--shadow-bar)]
                    ${isVisible ? "animate-bar-grow" : ""}`}
                  style={{
                    height: `${bar.height * 0.45}px`,
                    animationDelay: `${bar.delay}s`,
                  }}
                />
                <div style={{ height: "2px" }} />
                {/* Purchase bar below */}
                <div
                  className={`w-1.5 rounded-full origin-bottom transform scale-y-0
                    bg-chart-primary shadow-[var(--shadow-bar)]
                    ${isVisible ? "animate-bar-grow" : ""}`}
                  style={{
                    height: `${bar.height * 0.9}px`,
                    animationDelay: `${bar.delay + 0.1}s`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-2">
          {legendData.map((item, index) => (
            <div
              key={item.label}
              className={`flex items-center justify-between ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                animationDelay: `${1.5 + index * 0.1}s`,
              }}
            >
              <div className="flex items-center gap-1.5">
                <div
                  className={`w-2 h-2 rounded-full ${
                    item.color === "primary"
                      ? "bg-chart-primary"
                      : "bg-chart-secondary"
                  }`}
                />
                <span className="text-xs text-muted-foreground">
                  {item.label}
                </span>
              </div>
              <span className="text-xs font-medium text-muted-foreground">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default PurchaseManagement;
