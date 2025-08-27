import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Target, 
  Users, 
  Zap, 
  Shield, 
  CheckCircle2, 
  ArrowRight, 
  Calendar,
  Lightbulb,
  Code,
  Rocket,
  RotateCcw,
  Eye,
  Award
} from "lucide-react";

const methodologySteps = [
  {
    phase: "Discovery & Assessment",
    duration: "1-2 weeks",
    icon: Eye,
    description: "Deep dive into your organization's challenges, goals, and existing infrastructure",
    activities: [
      "Stakeholder interviews and workshops",
      "Current state assessment and gap analysis", 
      "Data audit and readiness evaluation",
      "Technical infrastructure review"
    ],
    deliverables: ["Assessment Report", "Opportunity Matrix", "Risk Analysis"]
  },
  {
    phase: "Strategy & Planning", 
    duration: "1-2 weeks",
    icon: Target,
    description: "Develop comprehensive AI roadmap aligned with business objectives",
    activities: [
      "AI use case prioritization",
      "Technical architecture design",
      "Implementation timeline planning",
      "ROI modeling and business case development"
    ],
    deliverables: ["AI Strategy Document", "Technical Blueprint", "Implementation Roadmap"]
  },
  {
    phase: "Proof of Concept",
    duration: "2-4 weeks", 
    icon: Lightbulb,
    description: "Validate feasibility with rapid prototyping and testing",
    activities: [
      "Data preparation and modeling",
      "Algorithm selection and training",
      "Prototype development",
      "Performance validation testing"
    ],
    deliverables: ["Working Prototype", "Performance Metrics", "Feasibility Report"]
  },
  {
    phase: "Development & Integration",
    duration: "6-12 weeks",
    icon: Code,
    description: "Build production-ready solutions with seamless enterprise integration",
    activities: [
      "Full-scale development and testing",
      "System integration and API development",
      "Security implementation and compliance",
      "User interface and experience design"
    ],
    deliverables: ["Production System", "Integration Documentation", "Security Certification"]
  },
  {
    phase: "Deployment & Training",
    duration: "2-4 weeks",
    icon: Rocket,
    description: "Launch solutions with comprehensive user training and support",
    activities: [
      "Production deployment and monitoring",
      "User training and onboarding",
      "Performance optimization",
      "Support documentation creation"
    ],
    deliverables: ["Deployed Solution", "Training Materials", "Support Framework"]
  },
  {
    phase: "Optimization & Evolution",
    duration: "Ongoing",
    icon: RotateCcw,
    description: "Continuous improvement through monitoring, feedback, and enhancement",
    activities: [
      "Performance monitoring and analytics",
      "User feedback collection and analysis",
      "Model retraining and optimization",
      "Feature enhancement and expansion"
    ],
    deliverables: ["Performance Reports", "Enhancement Recommendations", "Updated Models"]
  }
];

const principles = [
  {
    title: "Business-First Approach",
    description: "We start with your business goals and work backwards to identify the right AI solutions",
    icon: Target,
    benefits: ["Aligned outcomes", "Measurable ROI", "Strategic impact"]
  },
  {
    title: "Human-Centered Design",
    description: "AI should augment human capabilities, not replace them. We design for human-AI collaboration",
    icon: Users,
    benefits: ["User adoption", "Ethical AI", "Enhanced productivity"]
  },
  {
    title: "Rapid Innovation",
    description: "Fast iteration cycles with continuous feedback to accelerate time-to-value",
    icon: Zap,
    benefits: ["Quick wins", "Reduced risk", "Faster deployment"]
  },
  {
    title: "Enterprise Security",
    description: "Security and compliance are built into every solution from day one",
    icon: Shield,
    benefits: ["Data protection", "Regulatory compliance", "Risk mitigation"]
  }
];

const differentiators = [
  "25+ years combined experience in AI and data analytics",
  "Proven track record with Canadian organizations",
  "Industry-specific expertise and compliance knowledge",
  "End-to-end delivery from strategy to deployment",
  "Ongoing support and optimization services",
  "Vendor-neutral technology approach"
];

const OurApproach = () => {
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
              Our Methodology
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
              Our Strategic <span className="gradient-text">Approach</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful AI implementation through 
              strategic planning, iterative development, and sustainable deployment.
            </p>
          </div>

          {/* Core Principles */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Guiding Principles</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our approach is built on four fundamental principles that guide every engagement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {principles.map((principle, index) => (
                <Card key={index} className="tech-card">
                  <CardHeader className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <principle.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{principle.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {principle.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Key Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {principle.benefits.map((benefit, benefitIndex) => (
                          <Badge key={benefitIndex} variant="secondary" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Implementation Methodology */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Implementation Methodology</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our six-phase approach ensures systematic, low-risk AI implementation
              </p>
            </div>

            <div className="space-y-8">
              {methodologySteps.map((step, index) => (
                <Card key={index} className="tech-card">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                    {/* Phase Overview */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-2">
                            Phase {index + 1}
                          </Badge>
                          <h3 className="text-xl font-bold">{step.phase}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">Duration:</span>
                        <Badge variant="secondary" className="text-xs">
                          {step.duration}
                        </Badge>
                      </div>
                    </div>

                    {/* Activities */}
                    <div className="space-y-4">
                      <h4 className="font-semibold">Key Activities</h4>
                      <ul className="space-y-2">
                        {step.activities.map((activity, activityIndex) => (
                          <li key={activityIndex} className="flex items-start space-x-2">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div className="space-y-4">
                      <h4 className="font-semibold">Deliverables</h4>
                      <div className="space-y-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className="flex items-start space-x-2">
                            <Award className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Why Choose Our Approach */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Badge variant="outline" className="text-sm px-3 py-1">
                    <Award className="w-4 h-4 mr-2" />
                    Proven Excellence
                  </Badge>
                  <h2 className="text-3xl font-bold">
                    Why Our Approach Works
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our methodology has been refined through years of successful AI implementations 
                    across various industries and organizational sizes.
                  </p>
                </div>
              </div>

              <Card className="tech-card">
                <CardHeader>
                  <CardTitle className="text-xl">What Sets Us Apart</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {differentiators.map((differentiator, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{differentiator}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center space-y-8">
            <Card className="tech-card">
              <CardContent className="py-12 px-8">
                <div className="max-w-2xl mx-auto space-y-6">
                  <h2 className="text-3xl font-bold">Ready to Start Your AI Journey?</h2>
                  <p className="text-muted-foreground text-lg">
                    Let's discuss how our proven approach can be tailored to your organization's 
                    specific needs and objectives.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="hero" size="lg" asChild>
                      <Link to="/schedule-consultation">
                        <Calendar className="w-4 h-4 mr-2" />
                        Schedule Strategy Session
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link to="/solutions">
                        View Our Solutions
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

export default OurApproach;