import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import auroraImage from "@/assets/aurora-dashboard.png";
import vocasenseImage from "@/assets/vocasense-hero.png";
import nexusImage from "@/assets/nexus-dashboard.png";
import { Shield, MessageSquare, Building2, Eye, Clock, Award } from "lucide-react";

const solutions = [
  {
    title: "AURORA Intelligence Platform",
    subtitle: "Advanced Public Safety AI",
    description: "A unified, agentic AI-driven platform designed for public safety agencies, providing real-time intelligence, case management, and predictive insights.",
    image: auroraImage,
    features: [
      "AI-powered entity resolution & threat fusion",
      "Dynamic case collaboration & global tracking", 
      "Enterprise-grade security & governance",
      "Real-time operational intelligence"
    ],
    icon: Shield,
    color: "blue",
    industries: ["Public Safety", "Law Enforcement", "Intelligence"]
  },
  {
    title: "VocaSense AI",
    subtitle: "Restaurant Intelligence Platform",
    description: "Transform customer feedback into actionable intelligence with our AI-driven platform that captures, analyzes, and converts multi-modal feedback into prioritized action plans.",
    image: vocasenseImage,
    features: [
      "Advanced NLP & Agentic AI processing",
      "Real-time multi-touch feedback collection",
      "HACCP, FDA & ISO compliance ready",
      "Predictive quality analytics"
    ],
    icon: MessageSquare,
    color: "orange",
    industries: ["Hospitality", "Restaurants", "Retail"]
  },
  {
    title: "Nexus GovProcure",
    subtitle: "AI-Powered Procurement Platform",
    description: "Revolutionize public procurement with an AI-first platform ensuring compliance with Canadian federal, provincial, and international trade policies.",
    image: nexusImage,
    features: [
      "Real-time compliance & validation",
      "AI-powered document drafting & evaluation",
      "Audit-proof record retention",
      "Multilingual accessibility"
    ],
    icon: Building2,
    color: "green",
    industries: ["Government", "Public Sector", "Procurement"]
  }
];

export const SolutionsShowcase = () => {
  return (
    <section className="section-container">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Our <span className="gradient-text">Flagship Solutions</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Purpose-built AI platforms that address the unique challenges of complex industries 
          with cutting-edge technology and regulatory compliance.
        </p>
      </div>
      
      <div className="space-y-16">
        {solutions.map((solution, index) => (
          <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
            <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <solution.icon className="w-5 h-5 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    {solution.subtitle}
                  </Badge>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                  {solution.title}
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-primary" />
                  <span>Key Capabilities</span>
                </h4>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold flex items-center space-x-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span>Target Industries</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {solution.industries.map((industry, industryIndex) => (
                    <Badge key={industryIndex} variant="outline" className="text-sm">
                      {industry}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="default" size="lg">
                  Request Demo
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
              <Card className="tech-card overflow-hidden">
                <CardContent className="p-0">
                  <img 
                    src={solution.image} 
                    alt={`${solution.title} Dashboard`}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-16">
        <Button variant="hero" size="lg" className="text-lg px-12 py-6">
          Explore All Solutions
        </Button>
      </div>
    </section>
  );
};