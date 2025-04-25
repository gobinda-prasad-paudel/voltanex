import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionTitleProps {
  title: string;
  darkMode: boolean;
  center?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, darkMode, center = true }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div 
      ref={ref} 
      className={`relative mb-12 pb-5 ${center ? 'text-center' : ''}`}
    >
      <motion.h2 
        className={darkMode ? 'text-white' : 'text-gray-900'}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      
      <motion.div 
        className={`h-1 w-20 bg-primary-600 ${center ? 'mx-auto' : ''}`}
        initial={{ width: 0 }}
        animate={inView ? { width: 80 } : { width: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </div>
  );
};

export default SectionTitle;