import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";

const Achievements: React.FC = () => {
  const { achievements } = portfolioData;
  
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <section id="achievements" className="mb-16 section-container scroll-mt-16 md:scroll-mt-8">
      <div className="mb-10">
        <h2 className="text-2xl font-bold font-poppins inline-block pb-2 mb-2 border-b-2 border-primary">
          <i className="fas fa-trophy mr-2 text-primary"></i>Competitions, Hackathons, & Achievements
        </h2>
        <p className="text-gray-600">Recognition and notable accomplishments</p>
      </div>
      
      <motion.div 
        className="grid gap-6 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {achievements.map((achievement, index) => (
          <motion.div 
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            variants={itemVariants}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <div className={`w-12 h-12 flex items-center justify-center ${achievement.bgColor} ${achievement.textColor} rounded-full`}>
                  <i className={`${achievement.icon} text-xl`}></i>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Achievements;
