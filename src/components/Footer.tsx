import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { socialLinks } from '../data';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const iconMap = {
    Github,
    Linkedin,
    Twitter,
    Mail
  };

  return (
    <footer 
      className={`py-10 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-primary-600">
              Gobinda Prasad Paudel
            </a>
            <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Building beautiful web experiences.
            </p>
          </div>
          
          <div className="flex gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-colors duration-300 ${
                    darkMode 
                      ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                      : 'text-gray-600 hover:text-primary-600 hover:bg-gray-200'
                  }`}
                  aria-label={link.name}
                >
                  <Icon size={20} className="" />
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <ul className="flex gap-4 flex-wrap justify-center">
              <li>
                <a 
                  href="#home" 
                  className={`text-sm ${
                    darkMode 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-600 hover:text-primary-600'
                  }`}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className={`text-sm ${
                    darkMode 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-600 hover:text-primary-600'
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className={`text-sm ${
                    darkMode 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-600 hover:text-primary-600'
                  }`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className={`text-sm ${
                    darkMode 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-600 hover:text-primary-600'
                  }`}
                >
                  Contact
                </a>
              </li>
              <li>
                <a 
                  href="https://voltanex.gobindapaudel.tech/" 
                  className={`text-sm ${
                    darkMode 
                      ? 'text-gray-400 hover:text-white' 
                      : 'text-gray-600 hover:text-primary-600'
                  }`}
                >
                  Voltanex
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
