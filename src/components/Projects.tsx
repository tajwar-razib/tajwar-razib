import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Flame, GraduationCap } from "lucide-react";

interface ProjectItemProps {
  title: string;
  description: string;
  role?: string;
  icon: React.ReactNode;
  tags: string[];
}

const ProjectItem = ({ title, description, role, icon, tags }: ProjectItemProps) => (
  <Card className="glass-effect p-6 hover-glow h-full">
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center">
            {icon}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          {role && <p className="text-sm text-primary font-medium mb-2">{role}</p>}
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="bg-secondary/20 text-secondary hover:bg-secondary/30">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  </Card>
);

const Projects = () => {
  const projects = [
    {
      title: "Saylobot: Digital Data Acquisition System for Saybolt Viscometer",
      description: "Automated the reading acquisition from Saybolt Viscometer using sensors and Arduino programming. Designed the complete CAD system for the project, integrating hardware and software components for accurate viscosity measurements.",
      role: "CAD Designer",
      icon: <Lightbulb className="h-6 w-6 text-primary-foreground" />,
      tags: ["Arduino", "CAD Design", "Automation", "Data Acquisition"]
    },
    {
      title: "Shell and Tube Heat Exchanger with Inclined Baffles",
      description: "Designed and built a shell and tube heat exchanger featuring inclined baffles for improved thermal performance. Developed Python-based analysis tools for comprehensive heat exchange evaluation and optimization.",
      role: "Python Programmer & Analyst",
      icon: <Flame className="h-6 w-6 text-primary-foreground" />,
      tags: ["Python", "Heat Transfer", "Thermal Analysis", "Design Optimization"]
    },
    {
      title: "ML-based Waste Heat Recovery Optimization",
      description: "Machine Learning based Comparative Study of Waste Heat Recovery in Combined Organic Rankine Cycle-Gas Turbine and Conventional Steam Turbine Powerplants. Applied metaheuristic algorithms for working fluid mixture optimization to maximize energy efficiency.",
      role: "Undergraduate Thesis",
      icon: <GraduationCap className="h-6 w-6 text-primary-foreground" />,
      tags: ["Machine Learning", "ORC", "Optimization", "Energy Systems", "Metaheuristic Algorithms"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Research & <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">Key projects and research initiatives</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="animate-slide-in" style={{animationDelay: `${index * 0.1}s`}}>
              <ProjectItem {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;