import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BarChart3, PieChart, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/30 to-accent/10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-primary">Freedom to Focus.</span><br />
                <span className="text-foreground">Power to Grow.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Streamline your business operations with our comprehensive solutions. 
                Focus on what matters most while we handle the complexity.
              </p>
            </div>
            
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Contact Us
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Revenue Chart */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Revenue</span>
                  <BarChart3 className="w-4 h-4 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">$17,878</div>
                <div className="h-16 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg flex items-end justify-center">
                  <div className="w-full h-full bg-gradient-to-t from-primary/40 to-primary/10 rounded-lg flex items-end">
                    <div className="w-full grid grid-cols-8 gap-1 p-2">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="bg-primary rounded-sm"
                          style={{ height: `${20 + Math.random() * 60}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Views by Country */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Views by country</span>
                  <PieChart className="w-4 h-4 text-accent" />
                </div>
                <div className="relative w-16 h-16 mx-auto">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-primary to-accent"></div>
                  <div className="absolute inset-2 rounded-full bg-background"></div>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">USA</span>
                    <span>45%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">UK</span>
                    <span>25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Others</span>
                    <span>30%</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Monthly Goals */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Monthly goals</span>
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <div className="text-2xl font-bold">11,758</div>
                <div className="h-12 bg-gradient-to-r from-primary/10 to-primary/30 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-primary/60 w-3/4 rounded-lg"></div>
                </div>
              </div>
            </Card>

            {/* Progress Ring */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Weekly target</span>
                </div>
                <div className="relative w-20 h-20 mx-auto">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="hsl(var(--muted))"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="hsl(var(--primary))"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${75 * 2.51} ${25 * 2.51}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold">1.05</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;