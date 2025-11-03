import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Products />
      <Benefits />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
