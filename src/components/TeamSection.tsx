import { Card } from "@/components/ui/card";
import amirImage from "../../assets/Amir.png";
import aslahImage from "../../assets/Aslah.png";
import mridhulImage from "../../assets/Mridhul.png";
import suhailImage from "../../assets/Suhail.png";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  alt: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Amir",
    role: "Founder & Chief Visionary Officer",
    image: amirImage,
    alt: "Amir - Founder & Chief Visionary Officer"
  },
  {
    id: 2,
    name: "Aslah",
    role: "Chief Technology Officer",
    image: aslahImage,
    alt: "Aslah - Chief Technology Officer"
  },
  {
    id: 3,
    name: "Mridhul",
    role: "Project Manager & Designer",
    image: mridhulImage,
    alt: "Mridhul - Project Manager & Designer"
  },
  {
    id: 4,
    name: "Suhail",
    role: "Project Manager",
    image: suhailImage,
    alt: "Suhail - Project Manager"
  }
];

const TeamSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Meet Expert{" "}
            <span className="text-primary">Team</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member) => (
            <Card
              key={member.id}
              className="group relative overflow-hidden bg-team-card border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] rounded-3xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.alt}
                  className="w-full h-full object-cover transition-transform duration-300"
                />

                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-team-gradient-end via-team-gradient-start/50 to-transparent opacity-80"></div>

                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-1">
                    {member.name}
                  </h3>
                  <p className="text-white text-xs md:text-base leading-relaxed">
                    {member.role}
                  </p>
                </div>
              </div>
            </Card>

          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;