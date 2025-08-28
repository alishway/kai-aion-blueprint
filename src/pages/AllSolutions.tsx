import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Shield, MessageSquare, Building2, Ship, Eye, Award, ArrowRight, Calendar } from "lucide-react";
import auroraImage from "@/assets/aurora-dashboard.png";
import vocasenseImage from "@/assets/vocasense-hero.png";
import nexusImage from "@/assets/nexus-dashboard.png";

const flagshipSolutions = [
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
    status: "Development",
    industries: ["Public Safety", "Law Enforcement", "Intelligence"],
    launchTimeline: "Q2 2025"
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
    status: "Beta",
    industries: ["Hospitality", "Restaurants", "Retail"],
    launchTimeline: "Q1 2025"
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
    status: "Concept",
    industries: ["Government", "Public Sector", "Procurement"],
    launchTimeline: "Q3 2025"
  }
];

const clientProjects = [
  {
    title: "Commercial Shipment Tracking System",
    description: "AI-powered logistics platform for real-time shipment tracking and predictive delivery optimization across Canadian supply chains.",
    client: "Canadian Logistics Corporation",
    industry: "Logistics & Transportation",
    features: [
      "Real-time GPS tracking with AI predictions",
      "Automated delay notifications",
      "Route optimization algorithms",
      "Integration with customs systems"
    ],
    status: "Deployed",
    year: "2024"
  },
  {
    title: "Contraband Detection AI System",
    description: "Advanced machine learning system for border security agencies to identify and intercept contraband materials using multi-modal data analysis.",
    client: "Canadian Border Agency",
    industry: "Border Security",
    features: [
      "Multi-modal threat detection",
      "Real-time risk assessment",
      "Automated alert systems",
      "Integration with existing security infrastructure"
    ],
    status: "In Production",
    year: "2023"
  },
  {
    title: "Predictive Maintenance Platform",
    description: "IoT-enabled AI system for predicting equipment failures in manufacturing environments, reducing downtime by 40%.",
    client: "Manufacturing Partner",
    industry: "Manufacturing",
    features: [
      "IoT sensor integration",
      "Predictive failure analysis",
      "Maintenance scheduling optimization",
      "Cost reduction analytics"
    ],
    status: "Deployed",
    year: "2024"
  },
  {
    title: "Financial Risk Assessment AI",
    description: "Machine learning platform for automated credit risk assessment and fraud detection in financial transactions.",
    client: "Financial Services Client",
    industry: "Financial Services",
    features: [
      "Real-time fraud detection",
      "Credit risk scoring",
      "Regulatory compliance automation",
      "Customer behavior analysis"
    ],
    status: "In Production",
    year: "2023"
  }
];

const AllSolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold gradient-text">
              KaiAion
            </Link>
            <Badge variant="outline">
              Solutions Portfolio
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Complete <span className="gradient-text">Solutions Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive range of AI-powered solutions, from flagship platforms 
              to custom implementations delivered for clients across Canada.
            </p>
          </div>

          {/* Flagship Solutions */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Flagship AI Platforms</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Next-generation AI platforms designed to transform entire industries
              </p>
            </div>

            <div className="space-y-12">
              {flagshipSolutions.map((solution, index) => (
                <Card key={index} className="tech-card overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="p-8 space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                              <solution.icon className="w-5 h-5 text-primary" />
                            </div>
                            <Badge variant="secondary">
                              {solution.subtitle}
                            </Badge>
                          </div>
                          <Badge variant={solution.status === 'Deployed' ? 'default' : 'outline'}>
                            {solution.status}
                          </Badge>
                        </div>
                        
                        <h3 className="text-2xl font-bold">{solution.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {solution.description}
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold flex items-center space-x-2">
                          <Eye className="w-4 h-4 text-primary" />
                          <span>Key Features</span>
                        </h4>
                        <ul className="space-y-2">
                          {solution.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold flex items-center space-x-2">
                          <Award className="w-4 h-4 text-primary" />
                          <span>Target Industries</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {solution.industries.map((industry, industryIndex) => (
                            <Badge key={industryIndex} variant="outline" className="text-xs">
                              {industry}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border/50">
                        <p className="text-sm text-muted-foreground">
                          Expected Launch: <span className="font-medium">{solution.launchTimeline}</span>
                        </p>
                      </div>
                    </div>
                    
                    <div className="relative bg-background/40 backdrop-blur-sm border border-primary/20 rounded-r-lg overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-background/80 z-10" />
                      <img 
                        src={solution.image} 
                        alt={`${solution.title} Interface`}
                        className="w-full h-full object-cover mix-blend-screen opacity-90 contrast-110 brightness-105"
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Client Projects */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Delivered Client Solutions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Custom AI implementations successfully deployed for clients across Canada
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {clientProjects.map((project, index) => (
                <Card key={index} className="tech-card h-full">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant={project.status === 'Deployed' ? 'default' : 'secondary'}>
                        {project.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Industry: <span className="text-muted-foreground">{project.industry}</span></p>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm">Key Features</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center space-y-8">
            <Card className="tech-card">
              <CardContent className="py-12 px-8">
                <div className="max-w-2xl mx-auto space-y-6">
                  <h2 className="text-3xl font-bold">Ready to Discuss Your AI Solution?</h2>
                  <p className="text-muted-foreground text-lg">
                    Whether you're interested in our flagship platforms or need a custom AI solution, 
                    our experts are ready to help transform your organization.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="hero" size="lg" asChild>
                      <Link to="/schedule-consultation">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule Consultation
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link to="/technology-stack">
                        Explore Technology
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/">
                ← Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllSolutions;