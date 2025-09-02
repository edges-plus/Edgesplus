import { Card } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";
import { TbShoppingCartCopy } from "react-icons/tb";
import { TbUsersGroup } from "react-icons/tb";
import { FaCalculator } from "react-icons/fa6";
import { VscGraph } from "react-icons/vsc";
import { TbBuildingWarehouse } from "react-icons/tb";
import PMImage from "../../assets/PMImage.png"
import HRImage from "../../assets/HRImage.png"
import IWImage from "../../assets/IWImage.png"
import AFImage from "../../assets/AFImage.png"
import ReportImage from "../../assets/ReportImage.png"
import SalesImage from "../../assets/SalesImage.png"

const ProductsSection = () => {
  const products = [
    {
      icon: TbShoppingCartCopy,
      title: "Product Management",
      image: PMImage
    },
    {
      icon: FaCalculator,
      title: "Accounting & Finance",
      image: AFImage

    },
    {
      icon: VscGraph,
      title: "Sales & CRM",
      image: SalesImage

    },
    {
      icon: TbBuildingWarehouse,
      title: "Inventory & Warehouse",
      image: IWImage

    },
    {
      icon: TbUsersGroup,
      title: "HR & Payroll",
      image: HRImage

    },
    {
      icon: BarChart3,
      title: "Report & Analytics",
      image: ReportImage

    }
  ];

  return (
    <section id="products" className="py-16 sm:py-20 lg:py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/20 dark:bg-none">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-display-md xl:text-display-lg font-bold mb-4">
            Our <span className="text-primary">Products</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Modular <span className="text-primary text-bold">ERP</span> Platforms
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="flex flex-col bg-transparent justify-between px-6 pt-6 pb-0 sm:px-8 sm:pt-8 sm:pb-0 hover:shadow-xl transition-all duration-300 border-[#E8EAEE] dark:border-primary hover:border-primary/20 group"
            >
              {/* Top icon */}
              <div className="relative">
                <div className="w-6 h-6 sm:w-12 sm:h-12 bg-primary/30 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-primary">
                  <product.icon className="w-4 h-4 sm:w-8 sm:h-8 text-blue-700" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {product.title}
              </h3>

              {/* Image pinned at bottom */}
              <img src={product.image} alt="" className="self-center mt-auto" />
            </Card>

          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;