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
                  <a href="tel:+8801782510340" className="text-muted-foreground hover:text-primary transition-colors">
                    +880 1782510340
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
                  <p className="text-muted-foreground">Bashundhara R/A, Dhaka, Bangladesh</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="animate-slide-up">
            <Card className="glass-effect p-8">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <Button 
                  className="w-full justify-start gradient-primary hover-glow" 
                  size="lg"
                  onClick={() => window.open('https://www.linkedin.com/in/tajwar-razib-19217a1aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', '_blank')}
                >
                  <Linkedin className="mr-3 h-5 w-5" />
                  LinkedIn Profile
                </Button>
                <Button 
                  className="w-full justify-start gradient-primary hover-glow" 
                  size="lg"
                  onClick={() => window.open('https://orcid.org/0009-0001-6886-2649', '_blank')}
                >
                  <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 7.781c.48 0 .87.39.87.87 0 .48-.39.87-.87.87-.48 0-.87-.39-.87-.87 0-.48.39-.87.87-.87zm-.357 2.551h.714v7.668h-.714v-7.668zm3.714 0h2.357c2.265 0 3.357 1.377 3.357 3.051 0 1.674-1.092 3.051-3.357 3.051h-2.357v-6.102zm.714.612v4.878h1.643c1.674 0 2.643-.969 2.643-2.439 0-1.47-.969-2.439-2.643-2.439h-1.643z"/>
                  </svg>
                  ORCID Profile
                </Button>
                <Button 
                  className="w-full justify-start gradient-primary hover-glow" 
                  size="lg"
                  asChild
                >
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=tajwar021@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail className="mr-3 h-5 w-5" />
                    Send Email
                  </a>
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