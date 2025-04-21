import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: string;
  percentage: number;
  color?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ 
  name, 
  level, 
  percentage, 
  color = "bg-primary" 
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.2 });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      controls.start({
        width: `${percentage}%`,
        transition: { duration: 1, ease: "easeOut" }
      });
    }
  }, [controls, inView, percentage]);
  
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-gray-600">{level}</span>
      </div>
      <div className="relative h-1.5 bg-gray-200 rounded-full overflow-hidden" ref={ref}>
        <motion.div
          initial={{ width: "0%" }}
          animate={controls}
          className={`absolute top-0 left-0 h-full ${color} rounded-full`}
        />
      </div>
    </div>
  );
};

export default SkillBar;
