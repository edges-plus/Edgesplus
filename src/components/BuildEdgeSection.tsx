import { Button } from "@/components/ui/button";

const BuildEdgeSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-primary">Lets Build Your Edge.</span><br />
              <span className="text-foreground">With Edges+</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Prepare for tomorrow's challenges today with Edges+. Our 
              full-range solutions are crafted to strengthen your business 
              foundation. Whether you need core systems or advanced 
              capabilities, we provide the edge you need to succeed.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Learn More
            </Button>
          </div>
          
          <div className="relative">
            <div className="w-full h-80 bg-muted rounded-2xl flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="w-24 h-24 bg-muted-foreground/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-full"></div>
                </div>
                <p className="text-sm">Interactive Demo Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildEdgeSection;