import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Calendar, MessageSquare, Users } from "lucide-react";

const contactMethods = [
  {
    icon: Calendar,
    title: "Schedule Consultation",
    description: "Book a strategic consultation with our AI experts",
    action: "Book Meeting",
    highlight: true
  },
  {
    icon: MessageSquare,
    title: "Request Demo",
    description: "See our flagship solutions in action",
    action: "Get Demo",
    highlight: false
  },
  {
    icon: Users,
    title: "Partner Inquiry",
    description: "Explore collaboration opportunities",
    action: "Partner with Us",
    highlight: false
  }
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@kaiaion.com",
    link: "mailto:hello@kaiaion.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567"
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Toronto, Canada",
    link: null
  }
];

export const ContactSection = () => {
  return (
    <section className="section-container">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Ready to Transform with <span className="gradient-text">AI</span>?
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Get in touch with our experts to discuss your needs, request demos, 
          or explore collaboration opportunities that will drive your organization forward.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {contactMethods.map((method, index) => (
          <Card key={index} className={`tech-card group text-center ${method.highlight ? 'ring-2 ring-primary/20' : ''}`}>
            <CardHeader className="space-y-4">
              <div className={`w-16 h-16 rounded-xl mx-auto flex items-center justify-center ${
                method.highlight 
                  ? 'bg-primary/20 group-hover:bg-primary/30' 
                  : 'bg-primary/10 group-hover:bg-primary/20'
              } transition-colors`}>
                <method.icon className={`w-8 h-8 ${method.highlight ? 'text-primary' : 'text-primary'}`} />
              </div>
              <CardTitle className="text-xl">{method.title}</CardTitle>
              <CardDescription className="text-base">
                {method.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant={method.highlight ? "hero" : "outline"} 
                size="lg" 
                className="w-full"
              >
                {method.action}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <Card className="tech-card">
          <CardHeader>
            <CardTitle className="text-2xl mb-4">Get in Touch</CardTitle>
            <CardDescription className="text-lg">
              Connect with our team to explore how KaiAion can accelerate your AI transformation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">{info.label}</p>
                  {info.link ? (
                    <a 
                      href={info.link} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card className="tech-card">
          <CardHeader>
            <CardTitle className="text-2xl mb-4">What Happens Next?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Initial Consultation</h4>
                  <p className="text-muted-foreground text-sm">
                    We'll discuss your challenges, objectives, and current AI readiness
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Solution Design</h4>
                  <p className="text-muted-foreground text-sm">
                    Our experts will design a tailored AI strategy and implementation plan
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Implementation</h4>
                  <p className="text-muted-foreground text-sm">
                    We'll execute the plan with continuous monitoring and optimization
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                <strong>Typical Response Time:</strong> Within 24 hours<br />
                <strong>Initial Consultation:</strong> Complimentary 60-minute session
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border border-primary/20">
        <h3 className="text-2xl font-bold mb-4">
          Join the AI Revolution
        </h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Don't let your competition get ahead. Start your AI transformation today 
          and unlock the full potential of artificial intelligence for your organization.
        </p>
        <Button variant="hero" size="lg" className="text-lg px-12 py-6">
          Start Your AI Journey Today
        </Button>
      </div>
    </section>
  );
};