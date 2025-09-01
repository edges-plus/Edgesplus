import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">E</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold">Edges</span>
            </div>
            <p className="text-background/70 text-xs sm:text-sm leading-relaxed">
              Streamline your business operations with our comprehensive solutions. 
              Focus on what matters most while we handle the complexity.
            </p>
            <p className="text-background/60 text-xs">
              Copyright © 2024 Edges+
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-background/70">
              <li><a href="#" className="hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Consulting</a></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Products</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-background/70">
              <li><a href="#" className="hover:text-primary transition-colors">Product Management</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">CRM Platform</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Analytics Suite</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Inventory System</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">About Us</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-background/70">
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-xs sm:text-sm">
            All rights reserved. Made with ❤️ by Edges Team
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-background/60 hover:text-primary transition-colors">
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors">
              <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors">
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-colors">
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;