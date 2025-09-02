import { Card } from "@/components/ui/card";
import { LuFileSearch } from "react-icons/lu";
import { FaUsers } from "react-icons/fa6";
import { CiShare1 } from "react-icons/ci";
import { FiSettings } from "react-icons/fi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { PiGraphDuotone } from "react-icons/pi";

const CoreValuesSection = () => {
  const values = [
    {
      icon: FaUsers,
      title: "Entrepreneur - First",
      description: "We prioritize our clients' ambitions, designing solutions that align with their goals and drive their success."
    },
    {
      icon: PiGraphDuotone,
      title: "Purposeful Innovation",
      description: "Every solution is crafted with purpose, focusing on real-world impact and delivering measurable results."
    },
    {
      icon: LuFileSearch,
      title: "Transparency",
      description: "We build trust through clear, honest communication, ensuring clients are always informed and engaged."
    },
    {
      icon: CiShare1,
      title: "Scalability",
      description: "We create systems that grow with your business, adapting to evolving needs without disruption."
    },
    {
      icon: FiSettings,
      title: "Simplicity",
      description: "We turn complexity into clarity, making business processes intuitive and easy to manage."
    },
    {
      icon: FaArrowTrendUp,
      title: "Empowering Growth",
      description: "We provide the tools and support necessary to help businesses and teams grow, adapt, and reach their full potential."
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-display-md xl:text-display-lg font-bold mb-4">
            Our Core <span className="text-primary">Values</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="
    p-6 lg:p-8 hover:shadow-lg transition-all duration-300
    border border-[#E8EAEE] dark:border-primary
    w-[26rem] 
    dark:bg-[linear-gradient(180deg,rgba(0,0,0,0.37)_0%,rgba(0,107,214,0.10)_100%)]
    bg-[linear-gradient(0deg,rgba(235,245,255,0.4)_0%,rgba(246,247,248,0.1)_100%)]
  "
            >

              <div className="space-y-4 lg:space-y-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full border border-primary flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-black dark:text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;