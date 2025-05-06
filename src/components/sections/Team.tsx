import React from 'react';
import Section from '../ui/Section';
import { teamMembers } from '../../utils/constants';

const Team: React.FC = () => {
  return (
    <Section 
      id="team"
      title=" Team"
      subtitle="Meet the experts behind Voltanex who bring diverse skills and expertise to our research and development initiatives."
      centered
    >
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div 
            key={member.id} 
            className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="aspect-square overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name} 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-primary-600 mb-4">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary-100 mb-4">{member.role}</p>
                <p className="text-white/90 text-sm">{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div> */}
       <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member) => (
          <div 
            key={member.id} 
            className="group relative overflow-hidden rounded-lg w-1/4 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="aspect-square overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name} 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-primary-600 mb-4">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary-100 mb-4">{member.role}</p>
                <p className="text-white/90 text-sm">{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 flex justify-center">
        <div className="bg-primary-50 border border-primary-100 p-8 rounded-lg max-w-3xl text-center">
          <h3 className="text-2xl font-bold text-primary-800 mb-4">Join Our Team</h3>
          <p className="text-gray-600 mb-4">
            We're always looking for talented individuals who are passionate about innovation at the intersection of AI and electronics.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
          >
            Learn about opportunities
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Team;