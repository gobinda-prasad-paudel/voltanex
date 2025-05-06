import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { companyInfo } from '../../utils/constants';

const About: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Section 
      id="about"
      className="bg-gray-50 overflow-x-hidden"
      title="About Voltanex"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-full"
        >
          <h3 className="text-2xl font-semibold text-primary-700 mb-4">Our Story</h3>
          <p className="text-gray-600 mb-6">
            Founded in {companyInfo.foundingDate} by {companyInfo.founder}, Voltanex was established with a vision to bridge the gap between artificial intelligence and electronic systems. We believe that the future of technology lies at the intersection of these rapidly evolving fields.
          </p>
          <p className="text-gray-600 mb-6">
            What began as a research initiative has grown into a dynamic organization focused on developing innovative solutions for complex problems across various domains.
          </p>
          
          <h3 className="text-2xl font-semibold text-primary-700 mb-4">Our Mission</h3>
          <p className="text-gray-600">
            {companyInfo.mission}
          </p>
        </motion.div>
        
        <motion.div 
          className="relative max-w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute -inset-4 rounded-xl bg-primary-900/10 transform rotate-3"></div>
          <div className="absolute -inset-4 rounded-xl bg-primary-600/10 transform -rotate-3"></div>
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Team collaboration at Voltanex" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {[
          { title: 'Founded', value: companyInfo.foundingDate },
          { title: 'Founder', value: companyInfo.founder },
          { title: 'Focus', value: 'Research & Development' },
          { title: 'Audience', value: 'Students & Researchers' }
        ].map((item, index) => (
          <motion.div
            key={item.title}
            className="bg-white p-6 rounded-lg shadow-md transform transition-transform hover:-translate-y-2"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold text-primary-600 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.value}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default About;