import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { portfolioData } from "@/data/portfolio-data";

const Projects: React.FC = () => {
  const { projects } = portfolioData;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="projects" className="mb-16 section-container scroll-mt-16 md:scroll-mt-8">
      <div className="mb-10">
        <h2 className="text-2xl font-bold font-poppins inline-block pb-2 mb-2 border-b-2 border-primary">
          <i className="fas fa-project-diagram mr-2 text-primary"></i>Projects
        </h2>
        <p className="text-gray-600">Showcasing my technical expertise and problem-solving skills</p>
      </div>
      
      <motion.div 
        className="grid gap-8 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300"
            variants={itemVariants}
          >
            <div className="h-48 overflow-hidden bg-gray-200">
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 group-hover:scale-105 transition-transform duration-300">
                <i className={`${project.icon} text-4xl`}></i>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex space-x-2">
                {project.demoLink && (
                  <Button size="sm" className="flex items-center gap-1">
                    <i className="fas fa-external-link-alt"></i> Demo
                  </Button>
                )}
                {project.codeLink && (
                  <Button size="sm" variant="outline" className="flex items-center gap-1">
                    <i className="fab fa-github"></i> Code
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
