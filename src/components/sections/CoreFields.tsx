import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit as Circuit, Cpu, Brain } from 'lucide-react';
import Section from '../ui/Section';
import Card, { CardContent } from '../ui/Card';
import { coreFields } from '../../utils/constants';

const iconMap: Record<string, React.ReactNode> = {
  Circuit: <Circuit size={48} className="text-primary-600" />,
  Cpu: <Cpu size={48} className="text-primary-600" />,
  Brain: <Brain size={48} className="text-primary-600" />,
};

const CoreFields: React.FC = () => {
  return (
    <Section 
      id="core-fields"
      title="Core Fields"
      subtitle="We specialize in three interconnected areas that form the foundation of our research and development activities."
      centered
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {coreFields.map((field, index) => (
          <motion.div
            key={field.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card 
              hover
              className="text-center p-8"
            >
              <motion.div 
                className="flex justify-center mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {iconMap[field.icon]}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {field.title}
              </h3>
              <CardContent className="px-0">
                <p className="text-gray-600">
                  {field.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg p-8 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">Integrated Approach</h3>
            <p className="mb-4">
              At Voltanex, we don't just work with these technologies in isolation. We believe that the most innovative solutions come from integrating these fields in novel ways.
            </p>
            <p>
              By combining expertise across electronics, embedded systems, and artificial intelligence, we create holistic solutions that harness the strengths of each discipline.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-0.5 bg-white/20 rounded-lg blur-sm"></div>
            <div className="relative bg-primary-800 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Our Interdisciplinary Process</h4>
              <ul className="space-y-3">
                {[
                  'Identify complex problems requiring multifaceted solutions',
                  'Design innovative electronic hardware tailored to the challenge',
                  'Develop efficient embedded systems for real-time control',
                  'Implement AI algorithms that enable continuous learning and adaptation'
                ].map((step, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white text-primary-600 font-bold flex-shrink-0">{index + 1}</span>
                    <span>{step}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default CoreFields;