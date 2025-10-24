import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Layers, Database, Wrench } from "lucide-react";

interface SkillCategoryProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const SkillCategory = ({ icon, title, skills }: SkillCategoryProps) => (
  <Card className="glass-effect p-6 hover-glow">
    <div className="flex items-center gap-3 mb-4">
      <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <Badge key={skill} className="bg-primary/10 text-primary hover:bg-primary/20">
          {skill}
        </Badge>
      ))}
    </div>
  </Card>
);

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-5 w-5 text-primary-foreground" />,
      title: "Programming Languages",
      skills: ["Language 1", "Language 2", "Language 3", "Language 4"]
    },
    {
      icon: <Layers className="h-5 w-5 text-primary-foreground" />,
      title: "Frameworks & Libraries",
      skills: ["Framework 1", "Framework 2", "Library 1", "Library 2"]
    },
    {
      icon: <Database className="h-5 w-5 text-primary-foreground" />,
      title: "Databases & Tools",
      skills: ["Database 1", "Database 2", "Tool 1", "Tool 2"]
    },
    {
      icon: <Wrench className="h-5 w-5 text-primary-foreground" />,
      title: "Other Skills",
      skills: ["Skill A", "Skill B", "Skill C", "Skill D"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg">Technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="animate-slide-in" style={{animationDelay: `${index * 0.1}s`}}>
              <SkillCategory {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;