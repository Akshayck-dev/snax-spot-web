import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bakery.jpg";
import logo from "@/assets/snackit-logo.png";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          <div className="mb-8 animate-scale-in flex justify-center md:justify-start">
            <img 
              src={logo} 
              alt="SnacKit Logo" 
              className="h-48 md:h-64 lg:h-80 w-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]" 
            />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in">
            Fresh Bakery, Delivered Daily
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl">
            Your trusted partner for premium bakery distribution. From artisan breads to delicious pastries, 
            we bring fresh baked goods to your business every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-left">
            <Button 
              size="lg" 
              className="text-lg shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
              onClick={() => scrollToSection("products")}
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg hover:scale-105 transition-transform"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-subtle">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
