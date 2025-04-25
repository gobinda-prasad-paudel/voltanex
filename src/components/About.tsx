import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { about } from '../data';
import SectionTitle from './SectionTitle';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section 
      id="about" 
      className={`section ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
      ref={ref}
    >
      <div className="container">
        <SectionTitle title="About Me" darkMode={darkMode} />
        
        <motion.div 
          className="flex flex-col md:flex-row gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="md:w-1/3" variants={itemVariants}>
            <div className={`rounded-xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} p-2 shadow-lg`}>
              <img 
                src={about.image} 
                alt={about.name} 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>
          
          <motion.div className="md:w-2/3" variants={itemVariants}>
            <h3 className={`text-xl md:text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <span className="text-primary-600">Frontend</span> & <span className="text-secondary-500">Backend</span> Developer
            </h3>
            
            <div className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>{about.longDescription.split('\n\n')[0]}</p>
              <p>{about.longDescription.split('\n\n')[1]}</p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h4 className={`font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Personal Info</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className={`font-medium mr-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Name:</span>
                    <span className={darkMode ? 'text-white' : 'text-gray-900'}>{about.name}</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`font-medium mr-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Location:</span>
                    <span className={darkMode ? 'text-white' : 'text-gray-900'}>{about.location}</span>
                  </li>
                  <li className="flex items-start">
                    <span className={`font-medium mr-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Experience:</span>
                    <span className={darkMode ? 'text-white' : 'text-gray-900'}>1+ Years</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className={`font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {['Web Development', 'UI/UX Design', 'Open Source', 'New Technologies'].map((interest) => (
                    <span 
                      key={interest}
                      className={`inline-block px-3 py-1 rounded-full text-sm ${
                        darkMode 
                          ? 'bg-gray-800 text-primary-400 border border-primary-800' 
                          : 'bg-primary-50 text-primary-700 border border-primary-100'
                      }`}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <a 
              href={about.resumeUrl} 
              download
              className="btn btn-primary mt-8"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;