import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, File, Presentation, Send, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface PublicationItemProps {
  title: string;
  authors?: string;
  venue?: string;
  status: string;
  type: "preprint" | "manuscript" | "conference" | "submitted";
  abstract?: string;
}

const PublicationItem = ({ title, authors, venue, status, type, link, abstract }: PublicationItemProps & { link?: string }) => {
  const [showAbstract, setShowAbstract] = useState(false);
  
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
      title: "A Comprehensive Thermodynamic Analysis of a Bottoming Organic Rankine Cycle",
      authors: "T. Razib, A. Saha",
      venue: "Authorea (au.176124781.14639217)",
      status: "Under Review",
      type: "preprint" as const,
      link: "https://doi.org/10.22541/au.176124781.14639217/v1"
    },
    {
      title: "Physics Informed Disentanglement of Multimodal Data on Additive Manufacturing by Variational Auto-Encoder",
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
      title: "Thermodynamic Analysis of a Bottoming Organic Rankine Cycle for Waste Heat Recovery",
      venue: "BSME 2024",
      status: "Waiting to be Published",
      type: "conference" as const,
      abstract: "Waste Heat Recovery has received a lot of attention in recent years due to the increasing environmental effect. Fossil-fuel driven powerplants are major contributors to global warming. So Organic Rankine Cycle (ORC) can work as the bottoming cycle to utilize this low-grade waste heat to lower carbon emissions as well as contribute to power generation. However, the working conditions for the ORC must be compatible with the Gas Turbine System. This study performs a thorough thermodynamic analysis of a bottoming ORC cycle. It is observed that each working fluid achieves its highest thermal and exergetic efficiencies in the critical region. However, the topping cycle shows acceptable power output at turbine outlet temperatures above 450 K, corresponding to a turbine inlet temperature of approximately 435 K for the bottoming ORC. Within this temperature range, Benzene and Isopentane are acceptable working fluids, as their critical temperatures exceed 435 K. However, considering the fluid quality at the ORC turbine outlet, Isopentane shows better results than Benzene."
    },
    {
      title: "A Comprehensive Study on Energy, COP, and Exergy of a Coupled ORC-VCC Cogeneration System Employing Dual Working Fluids",
      venue: "ICME 2025",
      status: "Accepted",
      type: "conference" as const,
      abstract: "This paper aims to provide a detailed performance evaluation of a combined power and refrigeration system consisting of an organic Rankine cycle driven vapor compression cycle employing dual fluids. Performance of the combined system is systematically interrogated utilizing the strategically chosen working fluids- MM, R-1234yf, R236ea, R245ca, R113, R124, based on their critical temperature ranging from 95℃ to 250℃. Thermal and exergy efficiencies of the combined system at various turbine inlet temperatures are observed to establish the thermodynamic analysis. The optimized results indicate that the highest energy and exergy efficiencies, achieved using a combination of R113 and R124 as working fluids, are over 70% and 27%, respectively. Results from the analyses indicate that fluid pairs with intermediate critical temperature differences yield superior thermodynamic performance, whereas larger differences reduce both types of efficiencies."
    },
    {
      title: "Application of Bayesian Optimization on Design and Working Parameters of an Inclined baffle Shell and Tube Heat Exchanger",
      venue: "ASTFE 2026",
      status: "Submitted",
      type: "submitted" as const,
      abstract: "Shell and Tube Heat Exchangers (STHX) have been employed in industrial applications since its introduction. Despite extensive utilization, achieving the optimal design for certain operating conditions such as Inlet Temperatures that are controlled by the process- remains challenging and may lead to suboptimal heat transfer, resulting in heightened energy consumption, extended operational periods, and increased maintenance costs. This work seeks to enhance the design and working parameters of inclined baffle shell and tube heat exchangers by Bayesian Optimization to maximize the total heat transfer coefficient. The study develops a comprehensive Machine Learning framework enabling users to define the Shell Side Inlet Temperature and Tube Side Inlet Temperature. The optimized system will provide the ideal combinations of Shell Mass Flow Rate, Tube Mass Flow Rate, Baffle Spacing, Baffle Angle, and Shell Diameter to maximize the overall heat transfer coefficient under optimal conditions. Six Machine Learning models—Lasso Regression, Random Forest Regression, Decision Tree Regression, Support Vector Regression, Gradient Boosting Regression, and Polynomial Regression -were employed for approximation on a simulated dataset consisting of 78,125 data points. The Gradient Boosting Regressor proved to be the most efficient model, attaining Mean Squared Error, Mean Absolute Error, Mean Relative Error, and R-squared values of 0.98, 0.739, 0.0023, and 0.99989, respectively. The Gradient Boosting Regressor, fine-tuned with appropriate hyperparameters has been utilized as the Surrogate Function for the optimization model."
    },
    {
      title: "Application of Improved Particle Swarm Optimization (PSO) on a Gas Turbine Model",
      venue: "ICME 2025",
      status: "Submitted",
      type: "submitted" as const,
      abstract: "This research investigated a case of predictive modeling and optimization of a gas turbine cogeneration facility using machine learning techniques combined with an advanced Particle Swarm Optimization (PSO) algorithm. Five machine learning models, K-Nearest Neighbors (KNN), Random Forest Regression (RFR), Decision Tree Regression (DTR), Support Vector Regression (SVR), and Gradient Boosting Regression (GBR), were used to train using turbine operational data to predict turbine thermal efficiency in order to examine their performance. The GBR had the best predicting accuracy with a Mean Absolute Error (MAE) of 0.00836, Mean Relative Error (MRE) of 0.00030, Mean Squared Error (MSE) of 0.00012, and R² of 0.99967. Then, an Improved PSO Algorithm was applied to the turbine flow rates in order to find gas turbine thermal efficiency maximization. Over several iterations, the majority of the PSO runs converged within 15 iterations to a maximum thermal efficiency of 32.62%. This value was very similar to the highest value of 32.63% identified in the dataset. Further analysis of the populations while the PSO algorithm converged showed that the metrics for population diversity were smooth between the exploratory to the exploitative phases. For the optimized maximum efficiency, each flow rates were achieved at the optimized condition. The pre- and post-optimization flow rate of gas into the turbine has had an upward adjusted entry flow rate, and boosted the compressor and boiler gas flows while decreased combustor outlet gas flows, which maintains the established limits of the gas turbine. The study produced a solid foundation to be used for the real-time prediction of performance, and operational optimization of gas turbine facilities."
    },
    {
      title: "A Comparative Analysis of Basic and Regenerative Organic Rankine Cycle with a Reactive Flow Model",
      venue: "ICME 2025",
      status: "Submitted",
      type: "submitted" as const,
      abstract: "In recent years, waste-heat-recovery has emerged as a crucial area of research among researchers due to its potential to support sustainable energy landscape and help meet climate targets and regulations. The dependency on fossil-fuel of conventional powerplants works as one of the major contributors to global warming and climate change. Organic Rankine Cycle (ORC), working as a bottoming cycle, can be a promising approach to utilize this low-grade waste heat, thereby lowering carbon emissions as well as contributing to power generation. However, the working conditions for the ORC system working with a Reactive Flow Model needs to be mutually compatible. Furthermore, integrating a regenerator to recover additional heat from exhaust can enhance the overall performance of the ORC system. This study provides a comprehensive thermodynamic analysis, comparing two configurations of bottoming ORC cycle: Basic Organic Rankine Cycle (BORC) and Regenerative Organic Rankine Cycle (RORC), using three working fluids-R1234yf, R365MFC and MM, ranging in three distinct optimal heat source requirement regions and compatibility with a Reactive Flow Model-Gas Turbine (GT). It is observed that apart from the lower critical temperature refrigerant R1234yf, RORC shows higher thermal efficiency than BORC while exergetic efficiencies remain higher in RORC for all three cases. Notably, the BORC-based combined cycle starts to exhibit acceptable power output at turbine inlet temperature above 450K whereas the temperature requirement for RORC-based combined cycle is quite lower being at 350 K."
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