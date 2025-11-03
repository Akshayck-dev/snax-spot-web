import { CheckCircle2 } from "lucide-react";

const Benefits = () => {
  const benefits = [
    "Competitive wholesale pricing for bulk orders",
    "Wide variety of brands and products",
    "Flexible delivery schedules",
    "Quality assurance on all products",
    "Custom order options available",
    "Dedicated account managers"
  ];

  return (
    <section id="benefits" className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Partner with a distributor that puts your business first
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-card rounded-lg shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <p className="text-lg font-medium pt-1">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
