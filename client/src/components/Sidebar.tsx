import React from "react";
import { motion } from "framer-motion";

interface SidebarProps {
  activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  const navLinks = [
    { id: "about", icon: "fas fa-user-alt", label: "About" },
    { id: "skills", icon: "fas fa-code", label: "Skills" },
    { id: "projects", icon: "fas fa-project-diagram", label: "Projects" },
    { id: "experience", icon: "fas fa-briefcase", label: "Experience" },
    { id: "certifications", icon: "fas fa-certificate", label: "Certifications" },
    { id: "achievements", icon: "fas fa-trophy", label: "Achievements" },
    { id: "blog", icon: "fas fa-rss", label: "Blog" },
    { id: "contact", icon: "fas fa-envelope", label: "Contact" },
  ];
  
  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-64 fixed h-screen bg-white shadow-lg">
      <div className="h-full flex flex-col justify-between p-6">
        <div>
          <div className="mb-10 text-center">
            <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 overflow-hidden mb-4">
              {/* This is a placeholder - in production, you would use an actual image */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                <i className="fas fa-user-circle text-6xl"></i>
              </div>
            </div>
            <h1 className="font-poppins text-2xl font-bold text-gray-800">Ravi Kiran</h1>
            <p className="text-gray-600 text-sm mt-1">B.Tech Computer Science Student</p>
          </div>
          
          <nav>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`} 
                    className={`flex items-center space-x-2 p-2 rounded-lg transition-all ${
                      activeSection === link.id 
                        ? "bg-blue-50 text-primary" 
                        : "hover:bg-blue-50 hover:text-primary"
                    }`}
                  >
                    <i className={`${link.icon} w-5 text-center`}></i>
                    <span>{link.label}</span>
                    {activeSection === link.id && (
                      <motion.div
                        layoutId="sidebar-indicator"
                        className="h-2 w-2 rounded-full bg-primary ml-auto"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className="mt-auto pt-6 border-t border-gray-200">
          <div className="flex justify-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/ravi-kiran" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a 
              href="https://github.com/RaviKiran752" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
            <a 
              href="mailto:ravi742t7p@gmail.com" 
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
