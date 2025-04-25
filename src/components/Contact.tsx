import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import SectionTitle from './SectionTitle';
import portfolioData from '../data/portfolio.json';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const mailtoLink = `mailto:${portfolioData.developer.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <section 
      id="contact" 
      className={`section ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
      ref={ref}
    >
      <div className="container">
        <SectionTitle title="Get In Touch" darkMode={darkMode} />
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Contact Information
            </h3>
            
            <p className={`mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full ${
                  darkMode ? 'bg-gray-700 text-primary-400' : 'bg-primary-100 text-primary-600'
                }`}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Location</h4>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{portfolioData.developer.location}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full ${
                  darkMode ? 'bg-gray-700 text-primary-400' : 'bg-primary-100 text-primary-600'
                }`}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>Email</h4>
                  <a 
                    href={`mailto:${portfolioData.developer.email}`}
                    className={`hover:underline ${
                      darkMode ? 'text-gray-400 hover:text-primary-400' : 'text-gray-600 hover:text-primary-600'
                    }`}
                  >
                    {portfolioData.developer.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className={`rounded-xl p-8 ${
              darkMode ? 'bg-gray-900' : 'bg-white shadow-lg'
            }`}>
              <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label 
                    htmlFor="name" 
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-primary-500' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-primary-500'
                    } border focus:ring-2 focus:ring-primary-500/20 outline-none transition-colors duration-300`}
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="mb-6">
                  <label 
                    htmlFor="email" 
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-primary-500' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-primary-500'
                    } border focus:ring-2 focus:ring-primary-500/20 outline-none transition-colors duration-300`}
                    placeholder="email@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label 
                    htmlFor="subject" 
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-primary-500' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-primary-500'
                    } border focus:ring-2 focus:ring-primary-500/20 outline-none transition-colors duration-300`}
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div className="mb-6">
                  <label 
                    htmlFor="message" 
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Message
                  </label>
                  <textarea 
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4} 
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode 
                        ? 'bg-gray-800 border-gray-700 text-white focus:border-primary-500' 
                        : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-primary-500'
                    } border focus:ring-2 focus:ring-primary-500/20 outline-none transition-colors duration-300`}
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn btn-primary w-full flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={16} />
                </button>

                {submitStatus === 'success' && (
                  <p className="mt-4 text-green-500 text-center">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="mt-4 text-red-500 text-center">Failed to send message. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;