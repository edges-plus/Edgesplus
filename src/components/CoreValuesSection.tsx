import { Card } from "@/components/ui/card";
import { Users, Target, Lightbulb, Shield, Zap, Heart } from "lucide-react";

const CoreValuesSection = () => {
  const values = [
    {
      icon: Users,
      title: "Collaborative Spirit", 
      description: "We believe in the power of collaboration, working closely with our clients and partners to achieve shared success."
    },
    {
      icon: Target,
      title: "Result-Oriented",
      description: "Every strategy, every solution, and every action is designed to deliver measurable results that drive your business forward."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We stay at the forefront of technology and business trends to provide innovative solutions for modern challenges."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "You can count on us to deliver consistent, high-quality solutions that meet deadlines and exceed expectations."
    },
    {
      icon: Zap,
      title: "Agility",
      description: "We adapt quickly to changing market conditions and business requirements, ensuring you stay competitive."
    },
    {
      icon: Heart,
      title: "Customer-Centric Focus",
      description: "Your success is our priority. We design every solution with your specific needs and goals in mind."
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-display-md xl:text-display-lg font-bold mb-4">
            Our Core <span className="text-primary">Values</span>
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <Card key={index} className="p-6 lg:p-8 hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
              <div className="space-y-4 lg:space-y-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;