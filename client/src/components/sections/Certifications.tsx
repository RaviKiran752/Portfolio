import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";

const Certifications: React.FC = () => {
  const { certifications } = portfolioData;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const iconColors = ["text-primary", "text-secondary", "text-accent"];
  
  return (
    <section id="certifications" className="mb-16 section-container scroll-mt-16 md:scroll-mt-8">
      <div className="mb-10">
        <h2 className="text-2xl font-bold font-poppins inline-block pb-2 mb-2 border-b-2 border-primary">
          <i className="fas fa-certificate mr-2 text-primary"></i>Certifications & Courses
        </h2>
        <p className="text-gray-600">Professional development and continuous learning</p>
      </div>
      
      <motion.div 
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {certifications.map((cert, index) => (
          <motion.div 
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className={`flex justify-center mb-4 text-4xl ${iconColors[index % iconColors.length]}`}>
              <i className={cert.icon}></i>
            </div>
            <h3 className="text-lg font-bold text-center mb-2">{cert.title}</h3>
            <p className="text-gray-600 text-center mb-3">by {cert.issuer}</p>
            <div className="flex justify-center">
              <span className={`px-3 py-1 bg-${index % 3 === 0 ? 'blue' : index % 3 === 1 ? 'green' : 'purple'}-100 text-${index % 3 === 0 ? 'blue' : index % 3 === 1 ? 'green' : 'purple'}-800 text-sm rounded-full`}>
                {cert.category}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Certifications;
