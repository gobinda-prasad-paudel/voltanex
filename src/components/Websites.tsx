import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { websites } from '../data';

interface WebsitesProps {
  darkMode: boolean;
}

const Websites: React.FC<WebsitesProps> = ({ darkMode }) => {
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
        duration: 0.5,
      },
    },
  };

  return (
    <section 
      id="websites" 
      className={`section ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
      ref={ref}
    >
      <div className="container">
        <SectionTitle title="Websites Built" darkMode={darkMode} />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {websites.map((website, index) => (
            <motion.div 
              key={website.id}
              variants={itemVariants}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              <div className="md:w-1/2">
                <div className={`relative overflow-hidden rounded-xl group ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-100'
                } p-2`}>
                  <img 
                    src={website.image} 
                    alt={website.title} 
                    className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-primary-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a 
                      href={website.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-4 bg-white rounded-full text-primary-600 hover:bg-primary-50 transition-colors duration-300 shadow-lg"
                      aria-label="Visit website"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <h3 className={`text-2xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {website.title}
                </h3>
                
                <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {website.description}
                </p>
                
                <div className="mb-6">
                  <h4 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    TECHNOLOGIES USED
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {website.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className={`text-sm px-3 py-1 rounded-full ${
                          darkMode 
                            ? 'bg-gray-800 text-primary-400 border border-primary-900' 
                            : 'bg-primary-50 text-primary-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={website.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary inline-flex items-center gap-2"
                >
                  Visit Website
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Websites;