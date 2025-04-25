import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { about, socialLinks } from '../data';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const iconMap = {
    Github,
    Linkedin,
    Twitter,
    Mail
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.8
      }
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-16 relative"
      style={{
        background: darkMode 
          ? 'linear-gradient(135deg, #022c22 0%, #115e59 100%)' 
          : 'linear-gradient(135deg, #ccfbf1 0%, #a7f3d0 100%)'
      }}
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary-500/10"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="lg:w-1/2"
            variants={itemVariants}
          >
            <motion.h1 
              className="mb-6 text-center lg:text-left"
              variants={itemVariants}
            >
              <motion.span 
                className="block text-primary-500 mb-2"
                variants={itemVariants}
              >
                Hello, I'm
              </motion.span>
              <motion.span 
                className={`block ${darkMode ? 'text-white' : 'text-gray-900'}`}
                variants={itemVariants}
              >
                {about.name}
              </motion.span>
              <motion.span 
                className="block text-2xl sm:text-3xl mt-2 font-normal text-primary-600"
                variants={itemVariants}
              >
                {about.title}
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className={`text-lg mb-8 max-w-2xl text-center lg:text-left ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
              variants={itemVariants}
            >
              {about.description}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
              variants={itemVariants}
            >
              <motion.a 
                href={about.resumeUrl} 
                download 
                className="btn btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                Download Resume
              </motion.a>
              <motion.a 
                href="#contact" 
                className="btn btn-outline dark:border-white dark:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="flex justify-center lg:justify-start gap-4"
              variants={itemVariants}
            >
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full transition-colors duration-300 ${
                      darkMode 
                        ? 'bg-gray-800 text-white hover:bg-gray-700' 
                        : 'bg-white text-gray-800 hover:bg-gray-100'
                    } shadow-md`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.name}
                  >
                    <Icon size={20} className="text-primary-600" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            variants={imageVariants}
          >
            <div className="relative">
              <motion.div 
                className={`w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 ${darkMode ? 'border-primary-600' : 'border-white'} shadow-xl`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <img 
                  src={about.image} 
                  alt={about.name} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* <motion.div 
                className={`absolute -bottom-4 -right-4 py-2 px-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
              >
                <p className="text-primary-600 font-medium">{about.location}</p>
              </motion.div> */}
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          <a 
            href="#about" 
            className={`flex flex-col items-center ${darkMode ? 'text-white' : 'text-gray-800'}`}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;