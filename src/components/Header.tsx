import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">E</span>
            </div>
            <span className="text-2xl font-bold text-foreground">Edges</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors">Products</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#careers" className="text-foreground hover:text-primary transition-colors">Careers</a>
            <a href="#clients" className="text-foreground hover:text-primary transition-colors">Clients</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact Us</a>
          </nav>

          <Button className="hidden md:block">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;