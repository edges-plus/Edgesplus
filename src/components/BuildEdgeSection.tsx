import { Button } from "@/components/ui/button";

const BuildEdgeSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Text Section */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h2 className="text-3xl sm:text-4xl lg:text-display-md xl:text-display-lg font-bold leading-tight">
              <span className="text-primary">Lets Build Your Edge.</span><br />
              <span className="text-foreground">With Edges+</span>
            </h2>
            <p className="text-base sm:text-lg xl:text-xl text-muted-foreground max-w-lg">
              <span className="font-bold">Prepare for tomorrow's challenges today</span> with Edges+. Our 
              full-range solutions are crafted to strengthen your business 
              foundation. Whether you need core systems or advanced 
              capabilities, we provide the edge you need to succeed.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-sm sm:text-base mx-auto lg:mx-0">
              Learn More
            </Button>
          </div>
          
          {/* Right Image / Circle Section */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0 ">
            <div className="w-full h-64 sm:h-80 lg:h-96 bg-muted rounded-2xl flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-muted-foreground/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-primary/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BuildEdgeSection;
