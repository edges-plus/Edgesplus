import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="h-auto lg:h-screen flex flex-col lg:flex-row">
      {/* Left half */}
      <div className="w-full lg:w-1/2 h-64 lg:h-full flex items-center justify-center">
        <div className="text-left max-w-lg">
          {/* Headings */}
          <h1
            className="text-4xl lg:text-6xl font-semibold leading-tight mb-4"
            style={{
              background: "linear-gradient(135deg, #3399FF, #0073E6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Freedom to Focus.
          </h1>

          <h1 className="text-4xl lg:text-6xl font-semibold leading-tight text-foreground dark:text-white mb-6">
            Power to Grow.
          </h1>

          {/* Paragraph */}
          <p className="text-base leading-relaxed text-muted-foreground mb-8">
            We specialize in building intelligent, scalable solutions tailored to
            modern business challenges, fueling operational excellence and
            data-driven decision making.
          </p>

          {/* Contact Button */}
          <Button
            className="bg-[#006BD6] text-base text-white flex items-center gap-2 px-6 py-6 rounded-md transition-colors"
          >
            Contact <ArrowUpRight className="w-5 h-5" />
          </Button>


        </div>
      </div>

      {/* Right half */}
      <div
        className="w-full lg:w-1/2 h-64 lg:h-full flex items-center justify-center"
        style={{
          background: "radial-gradient(circle, #F6F7F8 0%, #EBF5FF 100%)",
        }}
      >
        <h1 className="text-foreground dark:text-white text-3xl lg:text-5xl font-bold">
          Right Side
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
