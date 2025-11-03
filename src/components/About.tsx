import { Award, Clock, Truck } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Fresh Daily",
      description: "All our bakery products are baked fresh daily with premium ingredients"
    },
    {
      icon: Truck,
      title: "Early Morning Delivery",
      description: "Fresh baked goods delivered to your location before opening hours"
    },
    {
      icon: Clock,
      title: "Consistent Supply",
      description: "Reliable daily deliveries ensuring you never run out of fresh bakery items"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About Our Business
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With years of experience in bakery distribution, we've built strong 
            partnerships with local and artisan bakeries to bring you the freshest products daily.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 animate-scale-in hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
