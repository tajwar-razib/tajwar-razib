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
            <h3 className="text-3xl font-bold">Research-Driven Scholar</h3>
            <p className="text-muted-foreground leading-relaxed">
              I am a research-driven scholar with a solid background in Thermodynamics, Heat Transfer, Molecular Dynamics, Additive Manufacturing, Control Systems, and expertise in Machine Learning. My work combines computational and data-driven approaches to investigate energy systems and thermal processes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing my Bachelor's degree in Mechanical Engineering at Bangladesh University of Engineering and Technology (BUET), I am committed to interdisciplinary exploration and academic advancement in various scientific domains. My research focuses on optimizing energy systems through advanced computational methods and machine learning algorithms.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <Card className="p-4 text-center glass-effect hover-glow">
                <div className="text-3xl font-bold gradient-text">3.69</div>
                <div className="text-sm text-muted-foreground mt-2">CGPA / 4.00</div>
              </Card>
              <Card className="p-4 text-center glass-effect hover-glow">
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-sm text-muted-foreground mt-2">Research Publications</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;