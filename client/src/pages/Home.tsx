import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import MobileNavigation from "@/components/MobileNavigation";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import Achievements from "@/components/sections/Achievements";
import Blog from "@/components/sections/Blog";
import Resume from "@/components/sections/Resume";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>('.section-container');
      
      let currentActiveSection = "";
      let minDistance = Infinity;
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY + 300; // offset for better UX
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentActiveSection = section.id;
          return;
        }
        
        // Find closest section when not directly in a section
        const distance = Math.abs(scrollPosition - sectionTop);
        if (distance < minDistance) {
          minDistance = distance;
          currentActiveSection = section.id;
        }
      });
      
      setActiveSection(currentActiveSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initialize active section
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-light text-gray-800 min-h-screen">
      <MobileNavigation activeSection={activeSection} />
      
      <div className="flex flex-col lg:flex-row">
        <Sidebar activeSection={activeSection} />
        
        <main className="w-full lg:ml-64 flex-1">
          <div className="container mx-auto px-4 py-6 lg:py-10">
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Certifications />
            <Achievements />
            <Blog />
            <Resume />
            <Contact />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
