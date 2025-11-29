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
                  onClick={() => window.open('https://www.researchgate.net/profile/Tajwar-Razib?ev=hdr_xprf', '_blank')}
                >
                  <svg className="mr-3 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53 3.334 3.334 0 0 0 .113.438c.245.743.65 1.302 1.214 1.68.565.374 1.256.564 2.075.564.8 0 1.489-.182 2.064-.547.577-.364.98-.923 1.208-1.675.07-.233.12-.483.148-.753.027-.27.037-.56.037-.87 0-.228-.004-.443-.012-.645a7.53 7.53 0 0 0-.05-.617 4.436 4.436 0 0 0-.098-.485 2.97 2.97 0 0 0-.163-.472c-.23-.752-.632-1.311-1.209-1.675C21.088.183 20.396 0 19.586 0zm-6.958 0l-.005.005H6.687v23.99h5.959V14.02l3.458 9.975h5.96V0h-5.958v9.977L12.628 0zm-8.216 6.276v6.85h3.958v-6.85H4.412z"/>
                  </svg>
                  ResearchGate Profile
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