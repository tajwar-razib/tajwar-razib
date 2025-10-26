import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, ExternalLink } from "lucide-react";

const Education = () => {
  const certifications = [
    {
      name: "COMSOL",
      link: "https://drive.google.com/drive/folders/12gdXCw3QvUCCgx0EAMRK1fcZB1Oikc6O?usp=drive_link"
    },
    {
      name: "Machine Learning and Deep Learning",
      link: "https://drive.google.com/file/d/1SAl1wGhNzLdRje_9otasd99l8bnkhcpi/view"
    },
    {
      name: "ML Terminology and Process",
      link: "https://drive.google.com/file/d/1rEXv8vrq3QPDJWDrzkbmGNl3lEFaJgEs/view?usp=drivesdk"
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg">My academic background and professional training</p>
        </div>

        <div className="space-y-6">
          <Card className="glass-effect p-8 hover-glow animate-slide-in">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-lg gradient-primary flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Bachelor of Science in Mechanical Engineering</h3>
                  <p className="text-lg text-muted-foreground font-medium">Bangladesh University of Engineering and Technology (BUET)</p>
                  <p className="text-muted-foreground">Expected Graduation: March 2026</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="px-4 py-2 rounded-lg glass-effect">
                    <p className="text-sm text-muted-foreground">Current CGPA</p>
                    <p className="text-2xl font-bold gradient-text">3.69 / 4.00</p>
                  </div>
                  <div className="px-4 py-2 rounded-lg glass-effect">
                    <p className="text-sm text-muted-foreground">Completed</p>
                    <p className="text-2xl font-bold gradient-text">6 Semesters</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Specializing in advanced thermodynamics, heat transfer, molecular dynamics, and machine learning applications in mechanical engineering. Conducting research on energy systems optimization and sustainable technologies.
                </p>
              </div>
            </div>
          </Card>

          <Card className="glass-effect p-8 hover-glow animate-slide-in" style={{animationDelay: '0.1s'}}>
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-lg gradient-primary flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold">Professional Certifications</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Completed specialized training programs to enhance technical expertise in computational modeling, machine learning, and data-driven engineering approaches.
                </p>
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <Button
                      key={cert.name}
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => window.open(cert.link, '_blank')}
                    >
                      <Award className="mr-2 h-4 w-4" />
                      {cert.name}
                      <ExternalLink className="ml-auto h-4 w-4" />
                    </Button>
                  ))}
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