import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { certificates } from '../data';

interface CertificatesProps {
  darkMode: boolean;
}

const Certificates: React.FC<CertificatesProps> = ({ darkMode }) => {
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
      id="certificates" 
      className={`section ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
      ref={ref}
    >
      <div className="container">
        <SectionTitle title="Certificates & Education" darkMode={darkMode} />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {certificates.map((certificate) => (
            <motion.div 
              key={certificate.id}
              className={`card group ${
                darkMode ? 'bg-gray-800 hover:bg-gray-800/90' : 'bg-white hover:bg-gray-50 border border-gray-200'
              }`}
              variants={itemVariants}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={certificate.image} 
                  alt={certificate.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary-900/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {certificate.link && (
                    <a 
                      href={certificate.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-white rounded-full text-primary-600 hover:bg-primary-50 transition-colors duration-300 shadow-lg"
                      aria-label="View certificate"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <div className={`text-sm font-medium mb-2 ${
                  darkMode ? 'text-primary-400' : 'text-primary-600'
                }`}>
                  {certificate.date}
                </div>
                
                <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {certificate.title}
                </h3>
                
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {certificate.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;