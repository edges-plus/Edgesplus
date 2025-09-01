import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">E</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-foreground">Edges</span>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#products" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors">Products</a>
            <a href="#services" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#careers" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors">Careers</a>
            <a href="#clients" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors">Clients</a>
            <a href="#contact" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors">Contact Us</a>
          </nav>

          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button className="hidden sm:block text-sm" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;