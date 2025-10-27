import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Luxury real estate design" 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-6 max-w-5xl text-5xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl animate-fade-in">
          Transforming Real Estate Through{" "}
          <span className="text-gradient">Stunning Visuals</span>
        </h1>
        <p className="mb-10 max-w-2xl text-lg text-primary-foreground/90 md:text-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Graphics & Videos That Sell Dreams
        </p>
        <Button 
          variant="hero" 
          size="lg" 
          onClick={scrollToGallery}
          className="text-base animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          View My Work
        </Button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-primary-foreground/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
