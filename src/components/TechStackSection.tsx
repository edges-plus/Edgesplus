const TechStackSection = () => {
  const technologies = [
    { name: "React", color: "text-[#61DAFB]" },
    { name: "Python", color: "text-[#3776AB]" },
    { name: "Node.js", color: "text-[#339933]" },
    { name: "PostgreSQL", color: "text-[#336791]" },
    { name: "MongoDB", color: "text-[#47A248]" },
    { name: "Redis", color: "text-[#DC382D]" },
    { name: "Flutter", color: "text-[#02569B]" },
    { name: "Figma", color: "text-[#F24E1E]" }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-display-md xl:text-display-lg font-bold mb-4">
            Technology <span className="text-primary">Stack</span>
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 sm:space-y-3 group cursor-pointer">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-background rounded-xl shadow-md flex items-center justify-center group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg ${tech.color} bg-current/10 flex items-center justify-center`}>
                  <span className={`text-lg sm:text-2xl font-bold ${tech.color}`}>
                    {tech.name.charAt(0)}
                  </span>
                </div>
              </div>
              <span className="text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;