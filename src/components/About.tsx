import { Card } from "@/components/ui/card";
import profileImage from "@/assets/profile.jpg";

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
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Tajwar Razib - Mechanical Engineering Researcher" 
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>

          <div className="space-y-6 animate-slide-up">
            <h3 className="text-3xl font-bold">Research-Driven Scholar</h3>
            <p className="text-muted-foreground leading-relaxed">
              As a passionate researcher, I specialize in Thermodynamics, Heat Transfer, Molecular Dynamics, Additive Manufacturing, Control Systems, and Machine Learning. My expertise lies at the intersection of computational methods and data-driven analysis, enabling me to push the boundaries of energy systems and thermal process optimization.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently completing my Bachelor's in Mechanical Engineering at Bangladesh University of Engineering and Technology (BUET), I'm dedicated to advancing interdisciplinary research across multiple scientific fields. My work focuses on leveraging cutting-edge machine learning algorithms and computational techniques to revolutionize energy efficiency and additive manufacturing processes.
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