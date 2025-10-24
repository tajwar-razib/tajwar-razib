import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, DollarSign, MessageSquare, Wrench } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  organization: string;
  period: string;
  description: string;
  icon: React.ReactNode;
}

const ExperienceItem = ({ title, organization, period, description, icon }: ExperienceItemProps) => (
  <Card className="glass-effect p-6 hover-glow">
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="flex-1 space-y-2">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{organization}</p>
          <p className="text-sm text-muted-foreground">{period}</p>
        </div>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  </Card>
);

const Experience = () => {
  const experiences = [
    {
      title: "Vice President",
      organization: "Multiscale Mechanical Modeling and Research Network (MMMRN)",
      period: "June 2025 – Present",
      description: "Leading research-related programs and networking initiatives with alumni. Coordinating collaborative research projects and organizing academic events to foster knowledge exchange in mechanical engineering research.",
      icon: <Users className="h-6 w-6 text-primary-foreground" />
    },
    {
      title: "Treasurer",
      organization: "BUET Automobile Club (BAC)",
      period: "March 2025 – Present",
      description: "Managing financial records, budgeting, and coordinating fundraising activities for one of BUET's premier technical clubs. Ensuring transparent financial operations and resource allocation for club activities.",
      icon: <DollarSign className="h-6 w-6 text-primary-foreground" />
    },
    {
      title: "Director",
      organization: "BUET Debating Club (BUETDC)",
      period: "April 2025 – Present",
      description: "Leading event planning and member engagement initiatives. Organizing debates, workshops, and training sessions to enhance public speaking and critical thinking skills among club members.",
      icon: <MessageSquare className="h-6 w-6 text-primary-foreground" />
    },
    {
      title: "Vice Chairperson",
      organization: "G17 UAC Bangladesh",
      period: "March 2024 – Present",
      description: "Handling recruitment, onboarding, and team communications for the organization. Managing member relations and coordinating activities to support organizational growth and development.",
      icon: <Users className="h-6 w-6 text-primary-foreground" />
    },
    {
      title: "Engine and Powertrain Sub-team Member",
      organization: "Team Automaestro",
      period: "September 2023 – July 2024",
      description: "Worked on the design, testing, and optimization of engine components for the team's racing vehicle. Contributed to performance analysis and implemented improvements in powertrain efficiency.",
      icon: <Wrench className="h-6 w-6 text-primary-foreground" />
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Leadership & <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">My journey in leadership and technical roles</p>
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