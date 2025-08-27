import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Shield, Target, Zap, Globe, Lightbulb } from "lucide-react";

const advantages = [
  {
    icon: Brain,
    title: "Innovative AI Technologies",
    description: "Leveraging advanced Agentic AI, multi-modal data processing, and explainable AI for superior outcomes."
  },
  {
    icon: Target,
    title: "Industry Expertise",
    description: "Tailored AI solutions for public safety, government, hospitality, finance, manufacturing, and healthcare."
  },
  {
    icon: Shield,
    title: "Trusted Consulting Partner",
    description: "A strategic approach blending technology, compliance, and business transformation."
  },
  {
    icon: Zap,
    title: "Proven Performance",
    description: "Track record of delivering measurable ROI and operational improvements across complex industries."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Scalable solutions designed for international compliance and multi-jurisdictional operations."
  },
  {
    icon: Lightbulb,
    title: "Innovation Focus",
    description: "Continuous R&D investment ensuring you stay ahead with cutting-edge AI capabilities."
  }
];

export const WhyChooseSection = () => {
  return (
    <section className="section-container">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Why Choose <span className="gradient-text">KaiAion</span>?
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We combine cutting-edge artificial intelligence with deep industry expertise 
          to deliver transformative solutions that drive lasting business value.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {advantages.map((advantage, index) => (
          <Card key={index} className="tech-card group">
            <CardHeader className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <advantage.icon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">{advantage.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                {advantage.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Button variant="tech" size="lg">
          Learn More About Our Approach
        </Button>
      </div>
    </section>
  );
};