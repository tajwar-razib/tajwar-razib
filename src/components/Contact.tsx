import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">Let's connect and discuss opportunities</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6 animate-slide-in">
            <Card className="glass-effect p-6 hover-glow">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">your.email@example.com</p>
                </div>
              </div>
            </Card>

            <Card className="glass-effect p-6 hover-glow">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">+1 (234) 567-8900</p>
                </div>
              </div>
            </Card>

            <Card className="glass-effect p-6 hover-glow">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">City, Country</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="animate-slide-up">
            <Card className="glass-effect p-8">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <Button className="w-full justify-start gradient-primary hover-glow" size="lg">
                  <Linkedin className="mr-3 h-5 w-5" />
                  LinkedIn Profile
                </Button>
                <Button className="w-full justify-start gradient-primary hover-glow" size="lg">
                  <Github className="mr-3 h-5 w-5" />
                  GitHub Profile
                </Button>
                <Button className="w-full justify-start gradient-primary hover-glow" size="lg">
                  <Mail className="mr-3 h-5 w-5" />
                  Send Email
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;