import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

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

        <div className="max-w-2xl mx-auto">
          <div className="space-y-6 animate-slide-in">
            <Card className="glass-effect p-6 hover-glow">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:tajwar021@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    tajwar021@gmail.com
                  </a>
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
                  <a href="tel:+15188808696" className="text-muted-foreground hover:text-primary transition-colors">
                    +1 (518) 880-8696
                  </a>
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
                  <p className="text-muted-foreground">Troy, NY, United States</p>
                </div>
              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;