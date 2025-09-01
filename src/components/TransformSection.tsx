import { Button } from "@/components/ui/button";

const TransformSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-foreground">Transform Your </span>
            <span className="text-primary">Business</span><br />
            <span className="text-foreground">With Us</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From strategy to execution, Lovable helps businesses transform ideas into impactful solutions. Whether you need streamlined 
            operations, seamless workflows, or future-ready digital applications we are your go-to partner.
          </p>
          
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TransformSection;