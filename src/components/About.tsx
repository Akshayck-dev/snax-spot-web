import { Award, Clock, Truck } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Quality Guaranteed",
      description: "Only the finest brands and freshest products make it to our catalog"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Reliable distribution network ensuring timely delivery across regions"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our dedicated team is always ready to assist with your orders"
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
            With years of experience in snack distribution, we've built strong 
            partnerships with leading brands to bring you the best selection.
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
