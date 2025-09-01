import { Card } from "@/components/ui/card";
import { Package, DollarSign, Users, Warehouse, User, BarChart3 } from "lucide-react";

const ProductsSection = () => {
  const products = [
    {
      icon: Package,
      title: "Product Management",
      description: "Streamline your product lifecycle from concept to delivery with our comprehensive management tools.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: DollarSign,
      title: "Accounting & Finance",
      description: "Manage your finances with precision using our advanced accounting and financial management solutions.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Sales & CRM",
      description: "Build stronger customer relationships and boost sales with our intelligent CRM platform.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Warehouse,
      title: "Inventory & Warehouse",
      description: "Optimize your inventory management and warehouse operations for maximum efficiency.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: User,
      title: "HR & Payroll",
      description: "Simplify human resources management and payroll processing with our integrated solutions.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: BarChart3,
      title: "Report & Analytics",
      description: "Make data-driven decisions with comprehensive reporting and advanced analytics capabilities.",
      gradient: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section id="products" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-display-md xl:text-display-lg font-bold mb-4">
            Our <span className="text-primary">Products</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Modular and Platforms
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <Card key={index} className="p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20 group">
              <div className="space-y-6">
                <div className="relative">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <product.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  {/* Isometric effect */}
                  <div className={`absolute -top-2 -right-2 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${product.gradient} opacity-20 rounded-2xl -z-10`}></div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {product.description}
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

export default ProductsSection;