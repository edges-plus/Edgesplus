import { Card } from "@/components/ui/card";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Amir",
      role: "Chief Executive Officer",
      image: "/lovable-uploads/placeholder-avatar-1.jpg"
    },
    {
      name: "Ashish",
      role: "Chief Technology Officer",
      image: "/lovable-uploads/placeholder-avatar-2.jpg"
    },
    {
      name: "Mridhal",
      role: "Head of Operations",
      image: "/lovable-uploads/placeholder-avatar-3.jpg"
    },
    {
      name: "Suibil",
      role: "Chief Marketing Officer",
      image: "/lovable-uploads/placeholder-avatar-4.jpg"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-display-md xl:text-display-lg font-bold mb-4">
            Meet Expert <span className="text-primary">Team</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20 group">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                {/* Placeholder for team member photo */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 bg-primary/30 rounded-full flex items-center justify-center">
                    <span className="text-lg sm:text-2xl font-bold text-primary">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6 text-center space-y-2">
                <h3 className="text-base sm:text-lg xl:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {member.role}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;