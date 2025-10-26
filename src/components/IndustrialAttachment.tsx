import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, ExternalLink } from "lucide-react";

const IndustrialAttachment = () => {
  return (
    <section id="industrial-attachment" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Industrial</span> Attachment
          </h2>
          <p className="text-muted-foreground text-lg">Practical experience in the petroleum refining industry</p>
        </div>

        <div className="max-w-4xl mx-auto animate-slide-in">
          <Card className="glass-effect p-8 hover-glow">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-lg gradient-primary flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold">Eastern Refinery Limited</h3>
                <p className="text-muted-foreground leading-relaxed">
                  In March 2025, I completed an industrial attachment program at Eastern Refinery Limited, 
                  gaining hands-on exposure to petroleum refining operations, process engineering, 
                  and industrial safety protocols. This experience provided valuable insights into 
                  the practical application of thermodynamics and heat transfer principles in large-scale 
                  industrial operations.
                </p>
                <Button 
                  className="gradient-primary hover-glow"
                  onClick={() => window.open('https://docs.google.com/presentation/d/1pYZ0H-zJ1d6LiLppHSz7fAAKIm485o1t/edit?usp=sharing&ouid=107689851903068043352&rtpof=true&sd=true', '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Presentation
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IndustrialAttachment;
