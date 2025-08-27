import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import aiNetworkImage from "@/assets/ai-network.jpg";
import { 
  Cpu, 
  Network, 
  Shield, 
  Eye, 
  Layers, 
  Workflow,
  Lock,
  RotateCcw,
  GitBranch,
  Activity
} from "lucide-react";

const techFeatures = [
  {
    icon: Cpu,
    title: "Agentic AI Foundation",
    description: "Autonomous, reasoning, and adaptive AI that acts as your strategic digital teammate"
  },
  {
    icon: Layers,
    title: "Multi-LLM Orchestration",
    description: "Vendor-neutral optimization leveraging the best AI models for each specific task"
  },
  {
    icon: Network,
    title: "Fusion AI Architecture",
    description: "Multi-modal data understanding combining text, voice, image, and structured data"
  },
  {
    icon: RotateCcw,
    title: "Continuous Learning",
    description: "Future-proof intelligence with adaptive learning pipelines and model evolution"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Role-based access control with immutable audit trails and evidence chain-of-custody"
  },
  {
    icon: Eye,
    title: "Explainable AI",
    description: "Transparent AI decisions with visual explanations ensuring trust and human oversight"
  }
];

const complianceFeatures = [
  "GDPR & Privacy Compliance",
  "SOC 2 Type II Certified",
  "ISO 27001 Security Standards",
  "PIPEDA & Provincial Privacy Laws",
  "Industry-Specific Regulations",
  "Ethical AI Governance"
];

export const TechnologySection = () => {
  return (
    <section className="section-container">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Advanced <span className="gradient-text">AI Technology</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Built on a foundation of cutting-edge artificial intelligence, our platform delivers 
          autonomous, reasoning, and adaptive AI solutions with enterprise-grade security.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <Badge variant="outline" className="text-sm px-3 py-1">
              <Workflow className="w-4 h-4 mr-2" />
              Core AI Architecture
            </Badge>
            <h3 className="text-3xl font-bold">
              Next-Generation AI Platform
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our proprietary AI foundation combines multiple large language models, 
              fusion AI capabilities, and continuous learning systems to deliver 
              unparalleled intelligence and adaptability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {techFeatures.map((feature, index) => (
              <Card key={index} className="tech-card">
                <CardHeader className="space-y-3 pb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <Card className="tech-card overflow-hidden">
            <CardContent className="p-0">
              <img 
                src={aiNetworkImage} 
                alt="AI Network Visualization"
                className="w-full h-auto rounded-lg object-cover"
              />
            </CardContent>
          </Card>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Card className="tech-card">
          <CardHeader className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Lock className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="text-2xl">Security & Compliance</CardTitle>
            </div>
            <CardDescription className="text-lg">
              Enterprise-grade security with comprehensive compliance coverage
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {complianceFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="tech-card">
          <CardHeader className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Activity className="w-5 h-5 text-accent" />
              </div>
              <CardTitle className="text-2xl">Performance Metrics</CardTitle>
            </div>
            <CardDescription className="text-lg">
              Industry-leading performance across key AI capabilities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>AI Accuracy Rate</span>
                  <span className="font-semibold">94.7%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-[94.7%]" />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Processing Speed</span>
                  <span className="font-semibold">&lt; 1s</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full w-[95%]" />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>System Uptime</span>
                  <span className="font-semibold">99.9%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-[99.9%]" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="text-center mt-12">
        <Button variant="tech" size="lg">
          Discover Our Technology Stack
        </Button>
      </div>
    </section>
  );
};