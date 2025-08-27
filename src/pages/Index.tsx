import { PresentationHero } from "@/components/PresentationHero";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { SolutionsShowcase } from "@/components/SolutionsShowcase";
import { TechnologySection } from "@/components/TechnologySection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <PresentationHero />
      
      {/* Why Choose KaiAion */}
      <WhyChooseSection />
      
      {/* Solutions Showcase */}
      <SolutionsShowcase />
      
      {/* Technology Section */}
      <TechnologySection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Index;
