import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.jpg";

export const PresentationHero = () => {
  return (
    <section className="hero-section relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>
      
      <div className="hero-content space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="gradient-text">KaiAion</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Pioneering AI, Enduring Solutions
          </p>
        </div>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
            Empowering organizations across industries with cutting-edge artificial intelligence 
            solutions and expert consulting. We transform data into actionable insights, enabling 
            strategic decision-making and sustainable growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/solutions">
                Explore Our Solutions
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/schedule-consultation">
                Schedule Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      </div>
    </section>
  );
};