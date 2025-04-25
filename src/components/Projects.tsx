import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import SectionTitle from './SectionTitle';
import portfolioData from '../data/portfolio.json';

interface ProjectsProps {
  darkMode: boolean;
}

interface MousePosition {
  x: number;
  y: number;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const section = document.getElementById('projects');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom &&
          e.clientX >= rect.left &&
          e.clientX <= rect.right
        ) {
          setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="projects" 
      className={`section relative overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
      ref={ref}
    >
      {/* Mouse follower bubble */}
      <motion.div
        className="pointer-events-none fixed w-20 h-20 rounded-full mix-blend-screen filter blur-xl"
        animate={{
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
          backgroundColor: darkMode ? '#0f766e' : '#14b8a6',
          opacity: 0.5,
        }}
        transition={{ type: "spring", damping: 10, stiffness: 100 }}
      />
      
      <div className="container relative">
        <SectionTitle title="Featured Projects" darkMode={darkMode} />
        
        {/* Timeline Line */}
        <div 
          className={`absolute left-[50%] top-32 bottom-0 w-0.5  ${
            darkMode ? 'bg-gray-700' : 'bg-gray-200'
          }`}
        >
          <motion.div
            className="bg-primary-600"
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : { height: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            style={{ width: '100%' }}
          />
        </div>

        <div className="relative space-y-32">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Project Content */}
              <div className={`flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:pr-[55%]' : 'md:pl-[55%] md:flex-row-reverse'
              }`}>
                <div className="w-full">
                  <div className={`relative group overflow-hidden rounded-xl ${
                    darkMode ? 'bg-gray-700' : 'bg-white'
                  } shadow-xl`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 flex gap-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-300"
                            aria-label="View source code"
                          >
                            <Github size={20} />
                          </a>
                        )}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors duration-300"
                            aria-label="Visit project"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className={`text-2xl font-bold mb-4 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {project.title}
                    </h3>
                    
                    <p className={`mb-6 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-sm ${
                            darkMode
                              ? 'bg-gray-700 text-primary-400'
                              : 'bg-primary-50 text-primary-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;