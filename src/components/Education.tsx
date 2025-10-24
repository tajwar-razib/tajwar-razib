import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

interface EducationItemProps {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

const EducationItem = ({ degree, institution, period, description }: EducationItemProps) => (
  <Card className="glass-effect p-6 hover-glow">
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center">
          <GraduationCap className="h-6 w-6 text-primary-foreground" />
        </div>
      </div>
      <div className="flex-1 space-y-2">
        <h3 className="text-xl font-bold">{degree}</h3>
        <p className="text-muted-foreground">{institution}</p>
        <p className="text-sm text-muted-foreground">{period}</p>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  </Card>
);

const Education = () => {
  const education = [
    {
      degree: "Degree Name / Field of Study",
      institution: "University / Institution Name",
      period: "Year - Year",
      description: "Relevant coursework, achievements, honors, or focus areas during your studies."
    },
    {
      degree: "Previous Degree / Certification",
      institution: "Previous Institution",
      period: "Year - Year",
      description: "Additional academic background or certifications that showcase your qualifications."
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg">My academic background</p>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="animate-slide-in" style={{animationDelay: `${index * 0.1}s`}}>
              <EducationItem {...edu} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;