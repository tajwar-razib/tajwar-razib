import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, File, Presentation, Send } from "lucide-react";

interface PublicationItemProps {
  title: string;
  authors?: string;
  venue?: string;
  status: string;
  type: "preprint" | "manuscript" | "conference" | "submitted";
}

const PublicationItem = ({ title, authors, venue, status, type }: PublicationItemProps) => {
  const getIcon = () => {
    switch (type) {
      case "preprint":
        return <FileText className="h-5 w-5 text-primary-foreground" />;
      case "manuscript":
        return <File className="h-5 w-5 text-primary-foreground" />;
      case "conference":
        return <Presentation className="h-5 w-5 text-primary-foreground" />;
      case "submitted":
        return <Send className="h-5 w-5 text-primary-foreground" />;
    }
  };

  const getStatusColor = () => {
    switch (type) {
      case "preprint":
        return "bg-blue-500/10 text-blue-500";
      case "manuscript":
        return "bg-purple-500/10 text-purple-500";
      case "conference":
        return "bg-green-500/10 text-green-500";
      case "submitted":
        return "bg-orange-500/10 text-orange-500";
    }
  };

  return (
    <Card className="glass-effect p-6 hover-glow">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center">
            {getIcon()}
          </div>
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-semibold leading-tight">{title}</h3>
            <Badge className={getStatusColor()}>{status}</Badge>
          </div>
          {authors && <p className="text-sm text-muted-foreground">{authors}</p>}
          {venue && <p className="text-sm font-medium text-primary">{venue}</p>}
        </div>
      </div>
    </Card>
  );
};

const Publications = () => {
  const publications = [
    {
      title: "A Comprehensive Thermodynamic Analysis of a Bottoming Organic Rankine Cycle",
      authors: "T. Razib, A. Saha",
      venue: "Authorea (au.176124781.14639217)",
      status: "Under Review",
      type: "preprint" as const
    },
    {
      title: "Physics Informed Disentanglement of Multimodal Data on Additive Manufacturing by Variational Auto-Encoder",
      status: "In Preparation",
      type: "manuscript" as const
    },
    {
      title: "Comparative Analysis of PI and PID Controllers for Traction Motors in Hybrid Electrical Vehicles Using Multi-Objective Optimization via NSGA-III",
      status: "In Preparation",
      type: "manuscript" as const
    },
    {
      title: "Thermodynamic Analysis of a Bottoming Organic Rankine Cycle for Waste Heat Recovery",
      venue: "BSME 2024",
      status: "Published",
      type: "conference" as const
    },
    {
      title: "A Comprehensive Study on Energy, COP, and Exergy of a Coupled ORC-VCC Cogeneration System Employing Dual Working Fluids",
      venue: "ICME 2025",
      status: "Accepted",
      type: "conference" as const
    },
    {
      title: "Application of Bayesian Optimization on Design and Working Parameters of an Inclined baffle Shell and Tube Heat Exchanger",
      venue: "ASTFE 2026",
      status: "Submitted",
      type: "submitted" as const
    },
    {
      title: "Application of Improved Particle Swarm Optimization (PSO) on a Gas Turbine Model",
      venue: "ICME 2025",
      status: "Submitted",
      type: "submitted" as const
    },
    {
      title: "A Comparative Analysis of Basic and Regenerative Organic Rankine Cycle with a Reactive Flow Model",
      venue: "ICME 2025",
      status: "Submitted",
      type: "submitted" as const
    }
  ];

  return (
    <section id="publications" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Publications</span> & Research
          </h2>
          <p className="text-muted-foreground text-lg">My academic contributions and ongoing research</p>
        </div>

        <div className="space-y-4">
          {publications.map((pub, index) => (
            <div key={index} className="animate-slide-in" style={{animationDelay: `${index * 0.05}s`}}>
              <PublicationItem {...pub} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;