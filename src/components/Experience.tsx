import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

const ExperienceItem = ({ title, company, period, description, skills }: ExperienceItemProps) => (
  <Card className="glass-effect p-6 hover-glow">
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center">
          <Briefcase className="h-6 w-6 text-primary-foreground" />
        </div>
      </div>
      <div className="flex-1 space-y-3">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{company}</p>
          <p className="text-sm text-muted-foreground">{period}</p>
        </div>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  </Card>
);

const Experience = () => {
  const experiences = [
    {
      title: "Position Title",
      company: "Company Name",
      period: "Month Year - Present",
      description: "Brief description of your role, responsibilities, and key achievements. Highlight the impact you made and the technologies you worked with.",
      skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"]
    },
    {
      title: "Previous Position",
      company: "Previous Company",
      period: "Month Year - Month Year",
      description: "Description of your previous role and accomplishments. Emphasize the results you delivered and the expertise you developed.",
      skills: ["Skill A", "Skill B", "Skill C"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">My professional journey</p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="animate-slide-in" style={{animationDelay: `${index * 0.1}s`}}>
              <ExperienceItem {...exp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;