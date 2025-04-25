import React, { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Simulate loading
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center bg-primary-900 z-50"
        >
          <div className="text-center">
            <motion.div
              className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-white font-medium"
            >
              Loading...
            </motion.p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
        >
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <main>
            <Suspense fallback={null}>
              <Hero darkMode={darkMode} />
              <About darkMode={darkMode} />
              <Skills darkMode={darkMode} />
              <Projects darkMode={darkMode} />
              <Contact darkMode={darkMode} />
            </Suspense>
          </main>
          <Footer darkMode={darkMode} />
          <ScrollToTop darkMode={darkMode} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default App;