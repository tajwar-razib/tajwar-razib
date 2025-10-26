import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import IndustrialAttachment from "@/components/IndustrialAttachment";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Hero />;
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "publications":
        return <Publications />;
      case "industrial-attachment":
        return <IndustrialAttachment />;
      case "experience":
        return <Experience />;
      case "skills":
        return <Skills />;
      case "education":
        return <Education />;
      case "contact":
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      <div className="animate-fade-in">
        {renderSection()}
      </div>
      
      {activeSection !== "home" && (
        <footer className="py-8 text-center text-muted-foreground border-t">
          <p>&copy; {new Date().getFullYear()} Tajwar Razib. All rights reserved.</p>
        </footer>
      )}
    </div>
  );
};

export default Index;