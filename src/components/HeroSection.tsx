import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import PurchaseManagement from './PurchaseGraph'
const HeroSection = () => {
  return (
    <section className="h-auto lg:h-screen flex flex-col lg:flex-row pl-20">
      {/* Left half */}
      <div className="w-full lg:w-1/2 h-64 lg:h-full flex items-center justify-start">
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
        className="w-full lg:w-1/2 h-64 lg:h-full flex flex-col items-center justify-center p-4 gap-4"
        style={{
          background: "radial-gradient(circle, #F6F7F8 0%, #EBF5FF 100%)",
        }}
      >
        {/* Cards container */}
        <div className="grid grid-cols-2 gap-8 w-full h-full">

          <div
            className="flex items-center justify-center bg-white rounded-2xl shadow-[0px_1.81px_5.42px_0px_rgba(13,10,44,0.08)]"
            // style={{ height: "100%", minHeight: "120px" }}
          >
            <PurchaseManagement />
          </div>

          <div
            className="flex items-center justify-center bg-white rounded-2xl shadow-[0px_1.81px_5.42px_0px_rgba(13,10,44,0.08)]"
            // style={{ height: "100%", minHeight: "120px" }}
          >
            <PurchaseManagement />
          </div>

          <div
            className="flex items-center justify-center bg-white rounded-2xl shadow-[0px_1.81px_5.42px_0px_rgba(13,10,44,0.08)]"
            // style={{ height: "100%", minHeight: "120px" }}
          >
            <PurchaseManagement />
          </div>

          <div
            className="flex items-center justify-center bg-white rounded-2xl shadow-[0px_1.81px_5.42px_0px_rgba(13,10,44,0.08)]"
            // style={{ height: "100%", minHeight: "120px" }}
          >
            <PurchaseManagement />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
