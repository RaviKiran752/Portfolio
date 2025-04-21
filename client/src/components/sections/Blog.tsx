import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio-data";

const Blog: React.FC = () => {
  const { blog } = portfolioData;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <section id="blog" className="mb-16 section-container scroll-mt-16 md:scroll-mt-8">
      <div className="mb-10">
        <h2 className="text-2xl font-bold font-poppins inline-block pb-2 mb-2 border-b-2 border-primary">
          <i className="fas fa-rss mr-2 text-primary"></i>Blog
        </h2>
        <p className="text-gray-600">My thoughts, tutorials and insights on technology</p>
      </div>
      
      <motion.div 
        className="bg-white rounded-xl shadow-md p-6 lg:p-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="text-center mb-6">
          <a 
            href={blog.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xl font-bold text-primary hover:underline"
          >
            {blog.platform}: {blog.username}
          </a>
          <p className="text-gray-600 mt-2">{blog.description}</p>
        </div>
        
        <div className="flex justify-center">
          <Button asChild>
            <a 
              href={blog.url}
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2"
            >
              <i className="fas fa-external-link-alt"></i> Visit My Blog
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default Blog;
