import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
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
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        
        <main className="flex-1">
          <header className="h-16 md:h-12 flex items-center border-b sticky top-0 bg-background/80 backdrop-blur-sm z-40">
            <SidebarTrigger className="ml-3 md:ml-2 h-12 w-12 md:h-10 md:w-10 text-primary hover:text-primary/80 [&>svg]:stroke-[2.5]" />
          </header>
          
          <div className="animate-fade-in">
            {renderSection()}
          </div>
          
          {activeSection !== "home" && (
            <footer className="py-8 text-center text-muted-foreground border-t">
              <p>&copy; {new Date().getFullYear()} Tajwar Razib. All rights reserved.</p>
            </footer>
          )}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;