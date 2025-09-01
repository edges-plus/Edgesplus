import { Button } from "@/components/ui/button";
import { Sun } from "lucide-react"; // from lucide-react (shadcn compatible)
import { useEffect, useState } from "react";
import Logo from '../../assets/Logo.png'
// If using Vite or Create React App, import as ReactComponent:
import SunIcon from "../../assets/Sun.svg";
import MoonIcon from "../../assets/Moon.svg";
const Header = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">E</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-foreground">Edges</span>
          </div> */}
          <img src={Logo} alt="" className=""/>

          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a href="#" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#products" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors">Products</a>
            <a href="#services" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#careers" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors">Careers</a>
            <a href="#clients" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors">Clients</a>
            <a href="#contact" className="text-sm xl:text-base text-foreground hover:text-primary transition-colors">Contact Us</a>
          </nav>

          <div className="flex items-center space-x-2">
            <button
  onClick={toggleTheme}
  className="h-auto w-auto hidden md:flex items-center justify-center p-2 rounded-full transition-all duration-300"
>
  {theme === "light" ? (
    <img
      src={MoonIcon}
      alt="Moon"
      className="w-6 h-6 transition-transform duration-200 rotate-0"
    />
  ) : (
    <img
      src={SunIcon}
      alt="Sun"
      className="w-7 h-7 transition-transform duration-300 rotate-180"
    />
  )}
</button>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;