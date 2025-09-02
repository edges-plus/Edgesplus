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
              className=" p-6 lg:p-8 hover:shadow-lg transition-all duration-300"
              style={{
                background: "linear-gradient(0deg, #EBF5FF66 40%, #F6F7F81A 10%)",
                border: "1px solid #E8EAEE",
                width: "26rem"
              }}
            >



              <div className="space-y-4 lg:space-y-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full border border-primary flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-black" />
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