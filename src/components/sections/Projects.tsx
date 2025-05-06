import React from 'react';
import Section from '../ui/Section';
import Card, { CardContent, CardFooter } from '../ui/Card';
import Button from '../ui/Button';
import { keyProjects } from '../../utils/constants';

const statusColors: Record<string, string> = {
  Ongoing: 'bg-blue-100 text-blue-700',
  Completed: 'bg-green-100 text-green-700',
  Planning: 'bg-yellow-100 text-yellow-700',
};

const Projects: React.FC = () => {
  return (
    <Section 
      id="projects"
      className="bg-gray-50"
      title="Key Projects"
      subtitle="Discover our innovative initiatives where we apply our expertise in electronics, embedded systems, and AI to solve real-world challenges."
      centered
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {keyProjects.map((project) => (
          <Card key={project.id} hover>
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
                  {project.status}
                </span>
              </div>
            </div>
            <CardContent>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600">
                {project.description}
              </p>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button variant="ghost" size="sm">
                Learn More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <div className="inline-block bg-white p-8 rounded-lg shadow-md max-w-3xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Have a project in mind?</h3>
          <p className="text-gray-600 mb-6">
            We're always looking for new challenges and collaborative opportunities. Let's discuss how our expertise can help bring your ideas to life.
          </p>
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => window.location.href = '#contact'}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Projects;