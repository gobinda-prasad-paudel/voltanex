import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitle';
import { skills } from '../data';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section 
      id="skills" 
      className={`section ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
      ref={ref}
    >
      <div className="container">
        <SectionTitle title="My Skills" darkMode={darkMode} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={skill.name} className="w-full">
              <div className="flex justify-between items-center mb-2">
                <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {skill.name}
                </h3>
                <span className={`text-sm ${darkMode ? 'text-primary-400' : 'text-primary-600'}`}>
                  {skill.level}%
                </span>
              </div>
              
              <div 
                className={`w-full h-2 rounded-full overflow-hidden ${
                  darkMode ? 'bg-gray-700' : 'bg-gray-200'
                }`}
              >
                <motion.div 
                  className="h-full bg-primary-600"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;