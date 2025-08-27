import { Users, Award, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const foundingPrinciples = [
  {
    icon: Award,
    title: "25+ Years of Excellence",
    description: "Decades of proven experience in AI and data analytics consulting across public and private sectors."
  },
  {
    icon: Briefcase,
    title: "Strategic Partnership",
    description: "Leveraging world-class expertise from Kaiforma Inc., a premier consulting firm based in Ottawa, Canada."
  },
  {
    icon: Users,
    title: "The 3 A's Framework",
    description: "Our proven methodology focusing on Automation, Analytics, and Artificial Intelligence for comprehensive solutions."
  }
];

export const FoundersSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Who We Are
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            KaiAion is founded by a team of seasoned AI solutions architects and consulting professionals 
            who bring over 25 years of combined expertise to the forefront of artificial intelligence innovation. 
            Our leadership team maintains strategic partnerships with industry leaders, ensuring access to 
            world-class talent and proven methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {foundingPrinciples.map((principle, index) => (
            <Card key={index} className="border-2 hover:border-primary/20 transition-all duration-300 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <principle.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{principle.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Our Foundation of Excellence</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Through our strategic alliance with established industry leaders, KaiAion delivers enterprise-grade 
              AI solutions with the agility of an innovative startup. Our founders' extensive background in 
              <span className="text-primary font-medium"> Automation, Analytics, and Artificial Intelligence</span> 
              ensures that every client engagement is backed by proven methodologies and deep technical expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};