import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio-data";

const Resume: React.FC = () => {
  const { resumeUrl } = portfolioData;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };
  
  const handleDownloadResume = () => {
    window.open(resumeUrl, '_blank');
  };
  
  return (
    <section id="resume" className="mb-16 section-container scroll-mt-16 md:scroll-mt-8">
      <div className="mb-10">
        <h2 className="text-2xl font-bold font-poppins inline-block pb-2 mb-2 border-b-2 border-primary">
          <i className="fas fa-file-alt mr-2 text-primary"></i>Resume
        </h2>
        <p className="text-gray-600">Download my complete resume</p>
      </div>
      
      <motion.div 
        className="bg-white rounded-xl shadow-md p-6 lg:p-8 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="mb-6">
          <div className="flex justify-center mb-4 text-6xl text-gray-400">
            <i className="far fa-file-pdf"></i>
          </div>
          <h3 className="text-xl font-bold mb-2">My Resume</h3>
          <p className="text-gray-600 mb-6">Download a comprehensive PDF version of my resume</p>
        </div>
        
        <Button onClick={handleDownloadResume} className="flex items-center gap-2">
          <i className="fas fa-download"></i> Download Resume
        </Button>
      </motion.div>
    </section>
  );
};

export default Resume;
