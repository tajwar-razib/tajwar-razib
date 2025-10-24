import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg">Get to know me better</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-slide-in">
            <Card className="glass-effect p-8 hover-glow">
              <div className="aspect-square rounded-2xl gradient-primary flex items-center justify-center">
                <User className="h-32 w-32 text-primary-foreground" />
              </div>
            </Card>
          </div>

          <div className="space-y-6 animate-slide-up">
            <h3 className="text-3xl font-bold">Professional Background</h3>
            <p className="text-muted-foreground leading-relaxed">
              Add your professional summary here. Describe your journey, key achievements, and what makes you unique in your field. Highlight your expertise and passion.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Include additional details about your approach to work, your values, and what drives you. This is your chance to tell your professional story.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Card className="p-4 text-center glass-effect hover-glow">
                <div className="text-3xl font-bold gradient-text">X+</div>
                <div className="text-sm text-muted-foreground mt-2">Years Experience</div>
              </Card>
              <Card className="p-4 text-center glass-effect hover-glow">
                <div className="text-3xl font-bold gradient-text">X+</div>
                <div className="text-sm text-muted-foreground mt-2">Projects Completed</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;