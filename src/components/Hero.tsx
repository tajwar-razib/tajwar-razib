import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 animate-slide-up">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold">
              <span className="gradient-text">Tajwar Razib</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
              Professional Title | Expertise Area
            </p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Brief introduction about your professional background, core competencies, and what drives your passion in your field.
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" className="gradient-primary hover-glow">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button size="lg" variant="outline" className="hover-glow">
              <FileText className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          <div className="flex gap-6 justify-center pt-6">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;