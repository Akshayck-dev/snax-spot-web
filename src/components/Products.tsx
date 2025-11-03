import chipsImage from "@/assets/product-chips.jpg";
import nutsImage from "@/assets/product-nuts.jpg";
import candyImage from "@/assets/product-candy.jpg";
import barsImage from "@/assets/product-bars.jpg";
import { Card, CardContent } from "@/components/ui/card";

const Products = () => {
  const products = [
    {
      image: chipsImage,
      title: "Chips & Crisps",
      description: "Classic and gourmet potato chips in various flavors"
    },
    {
      image: nutsImage,
      title: "Nuts & Seeds",
      description: "Healthy snacking options with premium mixed nuts"
    },
    {
      image: candyImage,
      title: "Chocolates & Candy",
      description: "Sweet treats and premium chocolate selections"
    },
    {
      image: barsImage,
      title: "Granola Bars",
      description: "Energy-packed bars perfect for on-the-go"
    }
  ];

  return (
    <section id="products" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our Product Range
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse selection of premium snacks sourced from 
            top brands worldwide.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden group cursor-pointer shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-muted-foreground">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
