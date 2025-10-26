import { Home, User, Briefcase, FileText, Building2, Award, Code, GraduationCap, Mail } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { label: "Home", value: "home", icon: Home },
  { label: "About", value: "about", icon: User },
  { label: "Projects", value: "projects", icon: Code },
  { label: "Publications", value: "publications", icon: FileText },
  { label: "Industrial Attachment", value: "industrial-attachment", icon: Building2 },
  { label: "Experience", value: "experience", icon: Briefcase },
  { label: "Skills", value: "skills", icon: Award },
  { label: "Education", value: "education", icon: GraduationCap },
  { label: "Contact", value: "contact", icon: Mail }
];

export function AppSidebar({ activeSection, onSectionChange }: AppSidebarProps) {
  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            {state === "expanded" && <span className="text-lg font-bold gradient-text">Tajwar Razib</span>}
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.value}>
                  <SidebarMenuButton
                    onClick={() => onSectionChange(item.value)}
                    isActive={activeSection === item.value}
                    className="cursor-pointer"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
