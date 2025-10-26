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
              Mechanical Engineering Researcher
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" variant="outline" className="hover-glow" onClick={() => window.open('/CV_Tajwar_Razib.pdf', '_blank')}>
              <FileText className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          <div className="flex gap-6 justify-center pt-6">
            <a href="https://orcid.org/0009-0001-6886-2649" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 7.781c.48 0 .87.39.87.87 0 .48-.39.87-.87.87-.48 0-.87-.39-.87-.87 0-.48.39-.87.87-.87zm-.357 2.551h.714v7.668h-.714v-7.668zm3.714 0h2.357c2.265 0 3.357 1.377 3.357 3.051 0 1.674-1.092 3.051-3.357 3.051h-2.357v-6.102zm.714.612v4.878h1.643c1.674 0 2.643-.969 2.643-2.439 0-1.47-.969-2.439-2.643-2.439h-1.643z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/tajwar-razib" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:tajwar021@gmail.com" className="text-foreground/60 hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;