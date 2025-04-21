import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileNavigationProps {
  activeSection: string;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "certifications", label: "Certifications" },
    { id: "achievements", label: "Achievements" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ];
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md p-4 z-50 lg:hidden">
      <div className="flex justify-between items-center">
        <div className="font-poppins text-xl font-bold text-primary">Ravi Kiran</div>
        <button 
          onClick={toggleMenu} 
          className="text-gray-700 focus:outline-none"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <i className={`${isMenuOpen ? 'fas fa-times' : 'fas fa-bars'} text-2xl`}></i>
        </button>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="mt-4"
          >
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`} 
                    className={`block py-2 transition-colors ${
                      activeSection === link.id ? 'text-primary font-medium' : 'hover:text-primary'
                    }`}
                    onClick={closeMenu}
                  >
                    {link.label}
                    {activeSection === link.id && (
                      <motion.div
                        layoutId="mobile-indicator"
                        className="h-0.5 bg-primary mt-1 w-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNavigation;
