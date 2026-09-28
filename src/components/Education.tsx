import { Card } from "@/components/ui/card";
import rensselaerLogo from "@/assets/rensselaer-logo.png.asset.json";
import buetLogo from "@/assets/buet-logo.png.asset.json";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg">My academic background</p>
        </div>

        <div className="space-y-6">
          <Card className="glass-effect p-8 hover-glow animate-slide-in">
            <div className="flex gap-6">
              <div className="h-20 w-32 md:w-44 flex-shrink-0 overflow-hidden rounded-md bg-foreground p-2">
                <img src={rensselaerLogo.url} alt="Rensselaer Polytechnic Institute logo" className="h-full w-full object-contain" />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-2xl font-bold">Graduate Teaching Assistant</h3>
                <p className="text-lg text-muted-foreground font-medium">Rensselaer Polytechnic Institute</p>
                <p className="text-muted-foreground">August 2026 – Present</p>
              </div>
            </div>
          </Card>

          <Card className="glass-effect p-8 hover-glow animate-slide-in">
            <div className="flex gap-6">
              <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md bg-foreground p-1">
                <img src={buetLogo.url} alt="Bangladesh University of Engineering and Technology logo" className="h-full w-full object-contain" />
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Bachelor of Science in Mechanical Engineering</h3>
                  <p className="text-lg text-muted-foreground font-medium">Bangladesh University of Engineering and Technology (BUET)</p>
                  <p className="text-muted-foreground">June 2026</p>
                  <p className="text-muted-foreground">CGPA: 3.68 out of 4.00</p>
                </div>
              </div>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default Education;