import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";

const Experience: React.FC = () => {
  const { experience } = portfolioData;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <section id="experience" className="mb-16 section-container scroll-mt-16 md:scroll-mt-8">
      <div className="mb-10">
        <h2 className="text-2xl font-bold font-poppins inline-block pb-2 mb-2 border-b-2 border-primary">
          <i className="fas fa-briefcase mr-2 text-primary"></i>Experience
        </h2>
        <p className="text-gray-600">My professional journey and work experience</p>
      </div>
      
      <motion.div 
        className="bg-white rounded-xl shadow-md p-6 lg:p-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {experience.map((job, index) => (
          <motion.div 
            key={index}
            className="relative pl-8 border-l-2 border-primary"
            variants={itemVariants}
          >
            <div className="absolute -left-2 top-0 w-5 h-5 rounded-full bg-primary"></div>
            
            <div className="mb-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-xl font-bold">{job.company}</h3>
                <span className="text-sm text-gray-500">{job.period}</span>
              </div>
              <p className="text-lg text-primary font-medium mb-2">{job.title}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {job.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
