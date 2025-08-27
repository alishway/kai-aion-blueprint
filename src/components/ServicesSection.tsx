import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import dataCenterImage from "@/assets/data-center.jpg";
import { 
  Lightbulb, 
  Code, 
  Database, 
  Puzzle, 
  Users, 
  ArrowRight,
  CheckCircle2,
  Clock,
  Target
} from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    title: "AI Strategy Consulting",
    description: "Craft a comprehensive roadmap to align AI investments with your business objectives, mitigating risks and maximizing ROI.",
    features: ["Strategic roadmapping", "Risk assessment", "ROI modeling", "Technology selection"],
    timeline: "2-4 weeks",
    outcome: "AI Implementation Roadmap"
  },
  {
    icon: Code,
    title: "Custom AI Development",
    description: "Build tailored AI models and applications leveraging the latest technologies and deep domain expertise.",
    features: ["Custom model development", "API integration", "Performance optimization", "Testing & validation"],
    timeline: "8-16 weeks",
    outcome: "Production-Ready AI Solution"
  },
  {
    icon: Database,
    title: "Data & Analytics Transformation",
    description: "Unlock actionable insights by modernizing data infrastructure, analytics capabilities, and governance frameworks.",
    features: ["Data architecture design", "ETL pipeline development", "Analytics dashboard creation", "Governance framework"],
    timeline: "6-12 weeks",
    outcome: "Modern Data Platform"
  },
  {
    icon: Puzzle,
    title: "AI Integration & Deployment",
    description: "Seamlessly embed AI into your existing enterprise ecosystem with minimal disruption and maximum effectiveness.",
    features: ["System integration", "Deployment automation", "Performance monitoring", "Scalability planning"],
    timeline: "4-8 weeks",
    outcome: "Integrated AI Ecosystem"
  },
  {
    icon: Users,
    title: "Change Management & Training",
    description: "Drive successful adoption with strategic change initiatives and comprehensive workforce training programs.",
    features: ["Change strategy development", "Training program design", "User onboarding", "Success metrics"],
    timeline: "3-6 weeks",
    outcome: "AI-Ready Organization"
  }
];

export const ServicesSection = () => {
  return (
    <section className="section-container">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Comprehensive <span className="gradient-text">AI Services</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          From strategy to deployment and change management, we provide end-to-end consulting 
          that ensures your AI investments deliver lasting value and transformative results.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <Badge variant="outline" className="text-sm px-3 py-1">
              <Target className="w-4 h-4 mr-2" />
              End-to-End Solutions
            </Badge>
            <h3 className="text-3xl font-bold">
              Your Complete AI Transformation Partner
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We guide organizations through every stage of their AI journey, from initial 
              strategy development to full-scale deployment and ongoing optimization.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                <CheckCircle2 className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Proven Methodology</h4>
                <p className="text-muted-foreground text-sm">
                  Battle-tested approaches refined through hundreds of successful AI implementations
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                <Clock className="w-4 h-4 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Accelerated Delivery</h4>
                <p className="text-muted-foreground text-sm">
                  Rapid implementation timelines without compromising quality or thoroughness
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                <Target className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Measurable Results</h4>
                <p className="text-muted-foreground text-sm">
                  Clear success metrics and ROI tracking from day one through full deployment
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <Card className="tech-card overflow-hidden">
            <CardContent className="p-0">
              <img 
                src={dataCenterImage} 
                alt="Data Center Visualization"
                className="w-full h-auto rounded-lg object-cover"
              />
            </CardContent>
          </Card>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="tech-card group h-full">
            <CardHeader className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <Badge variant="secondary" className="text-xs">
                  {service.timeline}
                </Badge>
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 flex-1">
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                  Key Deliverables
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-4 border-t border-border/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">Final Outcome</p>
                    <p className="text-sm text-muted-foreground">{service.outcome}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-16 space-y-6">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your AI Journey?</h3>
          <p className="text-muted-foreground">
            Let's discuss how our comprehensive AI services can transform your organization 
            and drive sustainable competitive advantage.
          </p>
        </div>
        <Button variant="hero" size="lg" className="text-lg px-12 py-6" asChild>
          <Link to="/schedule-consultation">
            Schedule Strategy Session
          </Link>
        </Button>
      </div>
    </section>
  );
};