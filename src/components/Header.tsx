import { useEffect, useState } from "react";
import Logo from '../../assets/Logo.png';
import LogoDark from '../../assets/LogoDark.png';
import SunIcon from "../../assets/Sun.svg";
import MoonIcon from "../../assets/Moon.svg";
import { useTheme } from "@/contexts/ThemeContext"; // Use your context

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    setIsDark(
      theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <header
      className={`w-full bg-background border-b border-gray-200 dark:border-none z-50 backdrop-blur-sm fixed top-0 left-0 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <img src={isDark ? LogoDark : Logo} alt="Edges+ Logo" />

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
            {isDark ? (
              <img src={SunIcon} alt="Sun" className="w-7 h-7 transition-transform duration-300 rotate-180" />
            ) : (
              <img src={MoonIcon} alt="Moon" className="w-6 h-6 transition-transform duration-200 rotate-0" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
