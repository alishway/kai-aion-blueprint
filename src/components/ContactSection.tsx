import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users } from "lucide-react";

const contactMethods = [
  {
    icon: Calendar,
    title: "Schedule Consultation",
    description: "Book a strategic consultation with our AI experts",
    action: "Book Meeting",
    highlight: true
  },
  {
    icon: Users,
    title: "Partner Inquiry",
    description: "Explore collaboration opportunities",
    action: "Partner with Us",
    highlight: false
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
          Get in touch with our experts to discuss your needs and explore 
          collaboration opportunities that will drive your organization forward.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
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
                asChild
              >
                {method.highlight ? (
                  <a href="/schedule-consultation">{method.action}</a>
                ) : (
                  <a href="mailto:Jeff.Kolako@KaiAion.ai?subject=Partnership Inquiry">{method.action}</a>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
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