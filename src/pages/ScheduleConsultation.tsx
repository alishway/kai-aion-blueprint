import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Calendar, Download, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import QRCode from 'qrcode';

const ScheduleConsultation = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');

  const contactInfo = {
    company: "KaiAion",
    name: "Jeff Kolako",
    position: "Director of KaiAion",
    phone: "+13000303030",
    email: "Jeff.Kolako@KaiAion.ai",
    website: "https://kaiaion.ai"
  };

  // Generate vCard format for business card
  const generateVCard = () => {
    return `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
ORG:${contactInfo.company}
TITLE:${contactInfo.position}
TEL:${contactInfo.phone}
EMAIL:${contactInfo.email}
URL:${contactInfo.website}
END:VCARD`;
  };

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        const vCard = generateVCard();
        const qrDataUrl = await QRCode.toDataURL(vCard, {
          width: 256,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        });
        setQrCodeUrl(qrDataUrl);
      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    };

    generateQRCode();
  }, []);

  const downloadQRCode = () => {
    if (qrCodeUrl) {
      const link = document.createElement('a');
      link.download = 'jeff-kolako-kaiaion-contact.png';
      link.href = qrCodeUrl;
      link.click();
    }
  };

  const copyContact = () => {
    const contactText = `${contactInfo.name}\n${contactInfo.position}\n${contactInfo.company}\n${contactInfo.phone}\n${contactInfo.email}`;
    navigator.clipboard.writeText(contactText);
  };

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
              Contact Information
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Schedule Your <span className="gradient-text">AI Consultation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with our AI experts to discuss your organization's unique challenges 
              and explore how our solutions can drive transformative results.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Digital Business Card */}
            <Card className="tech-card">
              <CardHeader className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Share2 className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Digital Business Card</CardTitle>
                <CardDescription>
                  Scan the QR code to save contact information directly to your device
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                {qrCodeUrl && (
                  <div className="flex justify-center">
                    <img 
                      src={qrCodeUrl} 
                      alt="Contact QR Code"
                      className="w-48 h-48 border border-border rounded-lg"
                    />
                  </div>
                )}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{contactInfo.name}</h3>
                  <p className="text-muted-foreground">{contactInfo.position}</p>
                  <p className="text-sm text-muted-foreground">{contactInfo.company}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant="outline" size="sm" onClick={downloadQRCode}>
                    <Download className="w-4 h-4 mr-2" />
                    Download QR
                  </Button>
                  <Button variant="outline" size="sm" onClick={copyContact}>
                    <Share2 className="w-4 h-4 mr-2" />
                    Copy Contact
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Direct Contact Information */}
            <Card className="tech-card">
              <CardHeader className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Direct Contact</CardTitle>
                <CardDescription>
                  Reach out directly to schedule your consultation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-background/50 border border-border/50">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a 
                        href={`mailto:${contactInfo.email}?subject=AI Consultation Request`}
                        className="text-primary hover:underline"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-background/50 border border-border/50">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a 
                        href={`tel:${contactInfo.phone}`}
                        className="text-primary hover:underline"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-background/50 border border-border/50">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Canada</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full" 
                  size="lg"
                  asChild
                >
                  <a href={`mailto:${contactInfo.email}?subject=AI Consultation Request&body=Hello Jeff,%0D%0A%0D%0AI'm interested in scheduling an AI consultation to discuss how KaiAion can help transform our organization.%0D%0A%0D%0APlease let me know your availability.%0D%0A%0D%0AThank you!`}>
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Consultation
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Consultation Process */}
          <Card className="tech-card">
            <CardHeader className="text-center space-y-4">
              <CardTitle className="text-2xl">What to Expect</CardTitle>
              <CardDescription>
                Our consultation process is designed to understand your unique needs and provide actionable insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <span className="text-lg font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-semibold">Discovery Session</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll discuss your current challenges, goals, and explore how AI can address your specific needs
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto">
                    <span className="text-lg font-bold text-accent">2</span>
                  </div>
                  <h3 className="font-semibold">Solution Mapping</h3>
                  <p className="text-sm text-muted-foreground">
                    Our experts will identify the most suitable AI solutions and create a tailored implementation roadmap
                  </p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <span className="text-lg font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-semibold">Next Steps</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive a detailed proposal with timelines, investment requirements, and expected outcomes
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

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

export default ScheduleConsultation;