import { useEffect, useState } from "react";
import logoLight from "../../assets/Logo.png";      // Light mode logo
import logoDark from "../../assets/LogoDark.png";   // Dark mode logo
import { useTheme } from "next-themes";

const LogoSection = () => {
  const [isDark, setIsDark] = useState(false);
const theme = useTheme();
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    // Initial check
    checkTheme();

    // Listen for changes in dark mode
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const logos = Array(4).fill(isDark ? logoDark : logoLight);

  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center">
          {logos.map((logoSrc, index) => (
            <div key={index} className="flex items-center space-x-2">
              <img
                src={logoSrc}
                alt="Company Logo"
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
