import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { companyInfo } from '../../utils/constants';

const CircuitAnimation = () => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.5
      }
    }
  };

  const dotVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: [0, 1, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="absolute inset-0 z-0"
      initial="hidden"
      animate="visible"
    >
      {/* Circuit paths */}
      <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M20,20 L80,20 L80,80 L20,80 L20,20"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="0.5"
          fill="none"
          variants={pathVariants}
        />
        <motion.path
          d="M30,30 L70,30 L70,70 L30,70 L30,30"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="0.5"
          fill="none"
          variants={pathVariants}
        />
        <motion.path
          d="M40,40 L60,40 L60,60 L40,60 L40,40"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="0.5"
          fill="none"
          variants={pathVariants}
        />
      </svg>

      {/* Moving dots */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full"
          style={{
            top: `${20 + i * 20}%`,
            left: `${20 + i * 20}%`
          }}
          variants={dotVariants}
        />
      ))}
    </motion.div>
  );
};

const Hero: React.FC = () => {
  return (
    <div 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-primary-900 to-primary-700 text-white overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-center bg-cover"></div>
      
      <CircuitAnimation />
      
      <motion.div 
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary-500 rounded-full opacity-20"
        animate={{ y: [-10, 10] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-secondary-500 rounded-full opacity-20"
        animate={{ y: [-10, 10] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
      />
      <motion.div 
        className="absolute top-1/3 left-1/3 w-32 h-32 bg-accent-500 rounded-full opacity-20"
        animate={{ y: [-10, 10] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1 }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary-300">Volt</span>anex
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-light mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {companyInfo.motto}
          </motion.p>
          <motion.p 
            className="text-lg mb-12 text-blue-100 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Merging cutting-edge artificial intelligence with innovative electronic systems to create the technology of tomorrow.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              variant="primary" 
              size="lg"
              className="bg-blue-500 text-primary-600 hover:bg-gray-100"
              onClick={() => window.location.href = '#projects'}
            >
              Explore Our Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.location.href = '#about'}
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.a 
          href="#about" 
          className="text-white flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-sm mb-1">Scroll Down</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Hero;