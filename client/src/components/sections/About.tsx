import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 } 
    }
  };
  
  return (
    <section id="about" className="mb-16 section-container scroll-mt-16 md:scroll-mt-8">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="bg-white rounded-xl shadow-md p-6 lg:p-8"
      >
        <div className="lg:flex items-center lg:space-x-8">
          <div className="mb-6 lg:mb-0 lg:w-1/3 flex justify-center">
            <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-lg">
              {/* This is a placeholder - in production, you would use an actual image */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                <i className="fas fa-user-circle text-6xl"></i>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold font-poppins mb-2 text-gray-800">Welcome to My Portfolio!</h2>
            <h3 className="text-xl text-primary font-semibold mb-4">Full-Stack Developer | AI Enthusiast | Cloud Computing</h3>
            
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Hi, I'm Ravi Kiran, a B.Tech Computer Science student at Lovely Professional University, specializing in Full-Stack Development, Artificial Intelligence, and Cloud Computing. I focus on building scalable applications and have a solid foundation in both front-end and back-end development. I am committed to continuously improving my skills in emerging technologies.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button className="flex items-center gap-2">
                <i className="fas fa-download"></i> Download CV
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <i className="fab fa-linkedin"></i> 
                <a 
                  href="https://www.linkedin.com/in/ravi-kiran" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
