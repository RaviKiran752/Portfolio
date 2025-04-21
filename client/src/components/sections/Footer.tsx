import React from "react";
import { portfolioData } from "@/data/portfolio-data";

const Footer: React.FC = () => {
  const { contact } = portfolioData;
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="text-center py-6 border-t border-gray-200">
      <p className="text-gray-600">© {currentYear} Ravi Kiran. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-3">
        <a 
          href={contact.linkedin.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-500 hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin text-xl"></i>
        </a>
        <a 
          href={contact.github.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-500 hover:text-primary transition-colors"
          aria-label="GitHub"
        >
          <i className="fab fa-github text-xl"></i>
        </a>
        <a 
          href={`mailto:${contact.email}`} 
          className="text-gray-500 hover:text-primary transition-colors"
          aria-label="Email"
        >
          <i className="fas fa-envelope text-xl"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
