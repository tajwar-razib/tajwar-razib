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
            <a
              href="https://semi-lab.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-base md:text-lg text-primary font-medium hover:text-primary/80 transition-colors"
            >
              Laboratory for Smart Engineering and Manufacturing Intelligence
            </a>
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
            <a href="https://scholar.google.com/citations?user=fln7AIUAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar profile" title="Google Scholar" className="text-foreground/60 hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2 1 8l11 6 9-4.91V16h2V8L12 2Zm-6.5 9.1V16c0 2.1 2.91 4 6.5 4s6.5-1.9 6.5-4v-4.9L12 14.65 5.5 11.1Z" />
              </svg>
            </a>
            <a href="https://www.researchgate.net/profile/Tajwar-Razib?ev=hdr_xprf" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors hover:scale-110 transform duration-200">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-label="ResearchGate">
                <path d="M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.123 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.353-.306-.203-.517-.454-.67-.915a3.136 3.136 0 0 1-.147-.762 17.366 17.367 0 0 1-.034-.656c-.01-.26-.014-.572-.014-.939a26.401 26.403 0 0 1 .014-.938 15.821 15.822 0 0 1 .035-.656 3.19 3.19 0 0 1 .148-.76 1.89 1.89 0 0 1 .742-1.01c.344-.244.593-.352 1.137-.352.508 0 .815.096 1.144.303.33.207.528.492.764.925.047.094.111.118.198.07l1.044-.43c.075-.048.09-.115.042-.199a3.549 3.549 0 0 0-.466-.742 3 3 0 0 0-.679-.607 3.313 3.313 0 0 0-.903-.41A4.068 4.068 0 0 0 19.586 0zM8.217 5.836c-1.69 0-3.036.086-4.297.086-1.146 0-2.291 0-3.007-.029v.831l1.088.2c.744.144 1.174.488 1.174 2.264v11.288c0 1.777-.43 2.12-1.174 2.263l-1.088.2v.832c.773-.029 2.12-.086 3.465-.086 1.29 0 2.951.057 3.667.086v-.831l-1.49-.2c-.773-.115-1.174-.487-1.174-2.264v-4.784c.688.057 1.29.057 2.206.057 1.748 3.123 3.41 5.472.4.355 6.56.86 1.032 2.177 1.691 3.839 1.691.487 0 1.003-.086 1.318-.23v-.744c-1.031 0-2.063-.716-2.808-1.518-1.26-1.376-2.95-3.582-4.355-6.074 2.32-.545 4.04-2.722 4.04-4.9 0-3.208-2.492-4.698-5.758-4.698zm-.515 1.29c2.406 0 3.839 1.26 3.839 3.552 0 2.263-1.547 3.782-4.097 3.782-.974 0-1.404-.03-2.063-.086v-7.19c.66-.059 1.547-.059 2.32-.059z" />
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