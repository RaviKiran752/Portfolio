import React from "react";
import { motion } from "framer-motion";
import SkillBar from "@/components/ui/skill-bar";
import { portfolioData } from "@/data/portfolio-data";

const Skills: React.FC = () => {
  const { skills } = portfolioData;
  
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <section id="skills" className="mb-16 section-container scroll-mt-16 md:scroll-mt-8">
      <div className="mb-10">
        <h2 className="text-2xl font-bold font-poppins inline-block pb-2 mb-2 border-b-2 border-primary">
          <i className="fas fa-code mr-2 text-primary"></i>Skills & Technologies
        </h2>
        <p className="text-gray-600">My technical skillset and proficiency levels</p>
      </div>
      
      <motion.div 
        className="grid gap-8 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Programming Languages */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-6"
          variants={itemVariants}
        >
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <i className="fas fa-laptop-code mr-2 text-primary"></i>
            Programming Languages
          </h3>
          
          {skills.programming.map((skill, index) => (
            <SkillBar
              key={index}
              name={skill.name}
              level={skill.level}
              percentage={skill.percentage}
            />
          ))}
        </motion.div>
        
        {/* Frontend Development */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-6"
          variants={itemVariants}
        >
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <i className="fas fa-desktop mr-2 text-secondary"></i>
            Frontend Development
          </h3>
          
          {skills.frontend.map((skill, index) => (
            <SkillBar
              key={index}
              name={skill.name}
              level={skill.level}
              percentage={skill.percentage}
              color="bg-secondary"
            />
          ))}
        </motion.div>
        
        {/* Backend Development */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-6"
          variants={itemVariants}
        >
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <i className="fas fa-server mr-2 text-accent"></i>
            Backend Development
          </h3>
          
          {skills.backend.map((skill, index) => (
            <SkillBar
              key={index}
              name={skill.name}
              level={skill.level}
              percentage={skill.percentage}
              color="bg-accent"
            />
          ))}
        </motion.div>
        
        {/* Machine Learning */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-6"
          variants={itemVariants}
        >
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <i className="fas fa-brain mr-2 text-primary"></i>
            Machine Learning
          </h3>
          
          {skills.machineLearning.map((skill, index) => (
            <SkillBar
              key={index}
              name={skill.name}
              level={skill.level}
              percentage={skill.percentage}
            />
          ))}
        </motion.div>
        
        {/* Databases */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-6"
          variants={itemVariants}
        >
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <i className="fas fa-database mr-2 text-secondary"></i>
            Databases
          </h3>
          
          {skills.databases.map((skill, index) => (
            <SkillBar
              key={index}
              name={skill.name}
              level={skill.level}
              percentage={skill.percentage}
              color="bg-secondary"
            />
          ))}
        </motion.div>
        
        {/* Cloud & DevOps */}
        <motion.div 
          className="bg-white rounded-xl shadow-md p-6"
          variants={itemVariants}
        >
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <i className="fas fa-cloud mr-2 text-accent"></i>
            Cloud & DevOps
          </h3>
          
          {skills.cloudDevOps.map((skill, index) => (
            <SkillBar
              key={index}
              name={skill.name}
              level={skill.level}
              percentage={skill.percentage}
              color="bg-accent"
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
