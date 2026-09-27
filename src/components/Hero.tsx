import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, FileText } from "lucide-react";
import cvAsset from "@/assets/Tajwar_Razib_CV.pdf.asset.json";

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
            <Button size="lg" variant="outline" className="hover-glow" onClick={() => window.open(cvAsset.url, '_blank', 'noopener,noreferrer')}>
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
            <a href="https://www.researchgate.net/profile/Tajwar-Razib?ev=hdr_xprf" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.121 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53 3.334 3.334 0 0 0 .113.438c.245.743.65 1.302 1.214 1.68.565.374 1.256.564 2.075.564.8 0 1.489-.182 2.064-.547.577-.364.98-.923 1.208-1.675.07-.233.12-.483.148-.753.027-.27.037-.56.037-.87 0-.228-.004-.443-.012-.645a7.53 7.53 0 0 0-.05-.617 4.436 4.436 0 0 0-.098-.485 2.97 2.97 0 0 0-.163-.472c-.23-.752-.632-1.311-1.209-1.675C21.088.183 20.396 0 19.586 0zm-6.958 0l-.005.005H6.687v23.99h5.959V14.02l3.458 9.975h5.96V0h-5.958v9.977L12.628 0zm-8.216 6.276v6.85h3.958v-6.85H4.412z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/tajwar-razib-19217a1aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=tajwar021@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors hover:scale-110 transform duration-200"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;