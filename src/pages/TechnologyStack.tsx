import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Database, 
  Cloud, 
  Shield, 
  Cpu, 
  Network, 
  Code, 
  Zap,
  Eye,
  Workflow,
  Lock,
  Activity,
  Calendar,
  ArrowRight
} from "lucide-react";
import aiNetworkImage from "@/assets/ai-network.jpg";

const technologyLayers = [
  {
    category: "AI Foundation Layer",
    description: "Core artificial intelligence capabilities powering all our solutions",
    technologies: [
      {
        name: "Multi-LLM Orchestration",
        description: "Vendor-neutral optimization leveraging GPT-4, Claude, Gemini, and specialized models",
        icon: Brain,
        tags: ["OpenAI", "Anthropic", "Google", "Custom Models"]
      },
      {
        name: "Agentic AI Framework",
        description: "Autonomous reasoning agents with planning, execution, and self-correction capabilities",
        icon: Workflow,
        tags: ["LangChain", "AutoGen", "Custom Framework"]
      },
      {
        name: "Fusion AI Engine",
        description: "Multi-modal data processing combining text, voice, image, and structured data",
        icon: Eye,
        tags: ["Computer Vision", "NLP", "Speech Recognition"]
      }
    ]
  },
  {
    category: "Data & Analytics Layer",
    description: "Advanced data processing and analytics infrastructure",
    technologies: [
      {
        name: "Real-time Data Pipelines",
        description: "Scalable ETL/ELT pipelines with stream processing capabilities",
        icon: Database,
        tags: ["Apache Kafka", "Spark", "Airflow", "dbt"]
      },
      {
        name: "Vector Database Systems",
        description: "High-performance vector storage for AI embeddings and semantic search",
        icon: Network,
        tags: ["Pinecone", "Weaviate", "Chroma", "Qdrant"]
      },
      {
        name: "Advanced Analytics",
        description: "Statistical modeling, predictive analytics, and business intelligence",
        icon: Activity,
        tags: ["Python", "R", "TensorFlow", "PyTorch"]
      }
    ]
  },
  {
    category: "Infrastructure Layer", 
    description: "Scalable, secure cloud infrastructure supporting enterprise workloads",
    technologies: [
      {
        name: "Multi-Cloud Architecture",
        description: "Hybrid deployment across AWS, Azure, and Google Cloud with edge computing",
        icon: Cloud,
        tags: ["AWS", "Azure", "GCP", "Kubernetes"]
      },
      {
        name: "Edge Computing",
        description: "Distributed processing for low-latency AI inference at the edge",
        icon: Zap,
        tags: ["Edge Nodes", "5G Integration", "IoT Gateways"]
      },
      {
        name: "Auto-scaling Systems",
        description: "Dynamic resource allocation based on demand and workload patterns",
        icon: Cpu,
        tags: ["Docker", "Kubernetes", "Serverless", "Auto-scaling"]
      }
    ]
  },
  {
    category: "Security & Compliance Layer",
    description: "Enterprise-grade security with comprehensive compliance frameworks",
    technologies: [
      {
        name: "Zero Trust Architecture",
        description: "Multi-layered security with identity verification and micro-segmentation",
        icon: Shield,
        tags: ["IAM", "mTLS", "Network Policies", "RBAC"]
      },
      {
        name: "Data Privacy & Governance",
        description: "End-to-end encryption with privacy-preserving AI techniques",
        icon: Lock,
        tags: ["Encryption", "Differential Privacy", "Data Governance"]
      },
      {
        name: "Compliance Automation",
        description: "Automated compliance monitoring for GDPR, SOC 2, and industry standards",
        icon: Eye,
        tags: ["GDPR", "SOC 2", "ISO 27001", "Audit Trails"]
      }
    ]
  }
];

const developmentStack = [
  {
    category: "Frontend Technologies",
    items: ["React/TypeScript", "Next.js", "Tailwind CSS", "D3.js", "WebAssembly"]
  },
  {
    category: "Backend Technologies", 
    items: ["Python/FastAPI", "Node.js", "Go", "Rust", "GraphQL"]
  },
  {
    category: "AI/ML Frameworks",
    items: ["TensorFlow", "PyTorch", "Hugging Face", "LangChain", "MLflow"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis", "ClickHouse", "Vector DBs"]
  },
  {
    category: "DevOps & Monitoring",
    items: ["Kubernetes", "Terraform", "Prometheus", "Grafana", "ELK Stack"]
  }
];

const TechnologyStack = () => {
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
              Technology Stack
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
              Advanced <span className="gradient-text">Technology Stack</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built on cutting-edge technologies that deliver scalable, secure, and 
              intelligent AI solutions for enterprise environments.
            </p>
          </div>

          {/* Technology Architecture Overview */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="outline" className="text-sm px-3 py-1">
                    <Code className="w-4 h-4 mr-2" />
                    Enterprise Architecture
                  </Badge>
                  <h2 className="text-3xl font-bold">
                    Modular, Scalable AI Platform
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our technology stack is designed with modularity and scalability at its core, 
                    enabling rapid deployment and seamless integration with existing enterprise systems.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="text-2xl font-bold text-primary">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime SLA</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-accent/5 border border-accent/20">
                    <div className="text-2xl font-bold text-accent">&lt;100ms</div>
                    <div className="text-sm text-muted-foreground">Response Time</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <div className="text-2xl font-bold text-primary">Auto</div>
                    <div className="text-sm text-muted-foreground">Scaling</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-accent/5 border border-accent/20">
                    <div className="text-2xl font-bold text-accent">Multi</div>
                    <div className="text-sm text-muted-foreground">Cloud</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Card className="tech-card overflow-hidden">
                  <CardContent className="p-0">
                    <img 
                      src={aiNetworkImage} 
                      alt="AI Technology Architecture"
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  </CardContent>
                </Card>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              </div>
            </div>
          </section>

          {/* Technology Layers */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Technology Architecture Layers</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Each layer is designed for maximum flexibility, security, and performance
              </p>
            </div>

            <div className="space-y-12">
              {technologyLayers.map((layer, layerIndex) => (
                <div key={layerIndex} className="space-y-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold">{layer.category}</h3>
                    <p className="text-muted-foreground">{layer.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {layer.technologies.map((tech, techIndex) => (
                      <Card key={techIndex} className="tech-card h-full">
                        <CardHeader className="space-y-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <tech.icon className="w-6 h-6 text-primary" />
                          </div>
                          <CardTitle className="text-xl">{tech.name}</CardTitle>
                          <CardDescription className="text-base leading-relaxed">
                            {tech.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {tech.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Development Stack */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Development Technologies</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Modern development tools and frameworks for rapid, reliable deployment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {developmentStack.map((category, index) => (
                <Card key={index} className="tech-card">
                  <CardHeader>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
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
                  <h2 className="text-3xl font-bold">Interested in Our Technology?</h2>
                  <p className="text-muted-foreground text-lg">
                    Our technical team can provide detailed architecture discussions 
                    and demonstrate how our technology stack meets your specific requirements.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="hero" size="lg" asChild>
                      <Link to="/schedule-consultation">
                        <Calendar className="w-4 h-4 mr-2" />
                        Technical Consultation
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link to="/solutions">
                        View Solutions
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

export default TechnologyStack;