const LogoSection = () => {
  const logos = [
    { name: "Edges", variant: "primary" },
    { name: "Edges", variant: "secondary" },
    { name: "Edges", variant: "dark" },
    { name: "Edges", variant: "gradient" },
  ];

  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div 
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center ${
                  logo.variant === 'primary' ? 'bg-primary' :
                  logo.variant === 'secondary' ? 'bg-secondary border border-border' :
                  logo.variant === 'dark' ? 'bg-foreground' :
                  'bg-gradient-to-br from-primary to-accent'
                }`}
              >
                <span 
                  className={`font-bold text-base sm:text-lg ${
                    logo.variant === 'primary' || logo.variant === 'dark' || logo.variant === 'gradient' 
                      ? 'text-white' 
                      : 'text-foreground'
                  }`}
                >
                  E
                </span>
              </div>
              <span 
                className={`text-lg sm:text-xl xl:text-2xl font-bold ${
                  logo.variant === 'secondary' ? 'text-muted-foreground' : 'text-foreground'
                }`}
              >
                {logo.name}
                {logo.variant === 'gradient' && <sup className="text-primary">+</sup>}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSection;