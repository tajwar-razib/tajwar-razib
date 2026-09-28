import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, File, Presentation, Send, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface PublicationItemProps {
  title: string;
  authors?: string;
  venue?: string;
  status: string;
  type: "journal" | "preprint" | "manuscript" | "conference" | "submitted";
  abstract?: string;
}

const PublicationItem = ({ title, authors, venue, status, type, link, abstract }: PublicationItemProps & { link?: string }) => {
  const [showAbstract, setShowAbstract] = useState(false);
  
  const getIcon = () => {
    switch (type) {
      case "journal":
        return <BookOpen className="h-5 w-5 text-primary-foreground" />;
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
      case "journal":
        return "bg-accent/10 text-accent";
      case "preprint":
        return "bg-primary/10 text-primary";
      case "manuscript":
        return "bg-secondary/10 text-secondary";
      case "conference":
        return "bg-accent/10 text-accent";
      case "submitted":
        return "bg-primary/10 text-primary";
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
            <h3 
              className={`text-lg font-semibold leading-tight ${link ? 'cursor-pointer hover:text-primary transition-colors' : ''}`}
              onClick={() => link && window.open(link, '_blank')}
            >
              {title}
            </h3>
            <Badge className={getStatusColor()}>{status}</Badge>
          </div>
          {authors && <p className="text-sm text-muted-foreground">{authors}</p>}
          {venue && <p className="text-sm font-medium text-primary">{venue}</p>}
          
          {abstract && (
            <div className="mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowAbstract(!showAbstract)}
                className="gap-2"
              >
                Abstract
                {showAbstract ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
              
              {showAbstract && (
                <div className="mt-3 p-4 bg-muted/50 rounded-lg border border-border">
                  <p className="text-sm text-foreground leading-relaxed">{abstract}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

const Publications = () => {
  const publications = [
    {
      title: "A Comprehensive Thermodynamic Analysis of a Bottoming Organic Rankine Cycle Using Optimized Working Fluids",
      authors: "T. Razib, A. Saha",
      venue: "Journal Publication",
      status: "Published",
      type: "journal" as const,
      link: "https://doi.org/10.1016/j.nxener.2026.100654"
    },
    {
      title: "LLM Agent-Guided Stochastic Control of Multi-Layer and Multi-Track Laser Powder Bed Fusion Process",
      authors: "A. Sarker, T. Razib, A. Saha, S. Saha",
      venue: "Preprint & Under Review",
      status: "Under Review",
      type: "preprint" as const,
      link: "https://dx.doi.org/10.21203/rs.3.rs-9315895/v1"
    },
    {
      title: "Thermodynamic Analysis of a Bottoming Organic Rankine Cycle for Waste Heat Recovery",
      authors: "T. Razib, A. Saha",
      venue: "Conference Proceeding",
      status: "Published",
      type: "conference" as const,
      link: "https://doi.org/10.1063/5.0327926"
    },
    {
      title: "A Comprehensive Study on Energy, COP, and Exergy of a Coupled ORC-VCC Cogeneration System Employing Dual Working Fluids",
      authors: "A. Nafis, A. M. Momtaz, T. Razib, A. Saha",
      venue: "Conference Proceeding",
      status: "Published",
      type: "conference" as const,
      link: "https://dx.doi.org/10.2139/ssrn.6204778"
    },
    {
      title: "Application of Improved Particle Swarm Optimization (PSO) on a Gas Turbine Model",
      authors: "T. Razib, S. A. Tapu",
      venue: "Conference Proceeding",
      status: "Published",
      type: "conference" as const,
      link: "https://doi.org/10.46254/BA08.20250303"
    },
    {
      title: "Physics-Informed Disentanglement of Multimodal Data on Additive Manufacturing by Variational Auto-Encoder",
      status: "In Preparation",
      type: "manuscript" as const
    },
    {
      title: "Comparative Analysis of PI and PID Controllers for Traction Motors in Hybrid Electrical Vehicles Using Multi-Objective Optimization via NSGA-III",
      status: "In Preparation",
      type: "manuscript" as const,
      abstract: "Precise speed control is one of the primary requirements for ensuring the universal adoption of Hybrid Electric Vehicles (HEVs) in widespread applications. However, variability in reference systems, parametric uncertainties, and load-type disturbances of the Traction Electric Motor (EM) transform this task into an inherently challenging problem. In the first step, the baseline system of EM is modelled without a controller to evaluate basic performance and identify the scope for improvement. Mathematical and functional block diagrams are constructed for proper visualization and assessment in this step. The evaluation reveals a deficient performance of the fundamental system with a prominent rise time of 134.04 seconds in step response and a dominant Root Mean Square Error (RMSE) in ramp and frequency responses. To address the existing limitations of the system, a Non-dominated Sorting Genetic Algorithm III (NSGA-III)-based optimization approach is proposed in this study, considering the controller parameters of Proportional-Integral (PI) and Proportional-Integral-Derivative (PID) as design variables. The comparative analysis highlights that the optimized PID controller provides the most significant improvement in step analysis with a reduced rise time of 4.76 seconds at zero overshoot. The demerit of this performance enhancement approach is the application of an aggressive control action. Under ramp response, the system could improve its control effort by PID and the rest of the objectives by PI, whereas PID can improve both control effort and settling error for sine response. But RMSE can significantly be enhanced by PI for both of the cases The findings of the study display the effectiveness of the NSGA-III approach in increasing dynamic accuracy, wherein the most appropriate controller selection depends largely on the intended application."
    },
    {
      title: "Application of Bayesian Optimization on Design and Working Parameters of an Inclined Baffle Shell and Tube Heat Exchanger",
      venue: "ASTFE 2026",
      status: "Abstract Accepted",
      type: "submitted" as const,
      abstract: "Shell and Tube Heat Exchangers (STHX) have been employed in industrial applications since its introduction. Despite extensive utilization, achieving the optimal design for certain operating conditions such as Inlet Temperatures that are controlled by the process- remains challenging and may lead to suboptimal heat transfer, resulting in heightened energy consumption, extended operational periods, and increased maintenance costs. This work seeks to enhance the design and working parameters of inclined baffle shell and tube heat exchangers by Bayesian Optimization to maximize the total heat transfer coefficient. The study develops a comprehensive Machine Learning framework enabling users to define the Shell Side Inlet Temperature and Tube Side Inlet Temperature. The optimized system will provide the ideal combinations of Shell Mass Flow Rate, Tube Mass Flow Rate, Baffle Spacing, Baffle Angle, and Shell Diameter to maximize the overall heat transfer coefficient under optimal conditions. Six Machine Learning models—Lasso Regression, Random Forest Regression, Decision Tree Regression, Support Vector Regression, Gradient Boosting Regression, and Polynomial Regression -were employed for approximation on a simulated dataset consisting of 78,125 data points. The Gradient Boosting Regressor proved to be the most efficient model, attaining Mean Squared Error, Mean Absolute Error, Mean Relative Error, and R-squared values of 0.98, 0.739, 0.0023, and 0.99989, respectively. The Gradient Boosting Regressor, fine-tuned with appropriate hyperparameters has been utilized as the Surrogate Function for the optimization model."
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