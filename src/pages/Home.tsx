import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import CoreFields from '../components/sections/CoreFields';
import Projects from '../components/sections/Projects';
import Team from '../components/sections/Team';
import Contact from '../components/sections/Contact';

const Home: React.FC = () => {
  return (
    <div className="font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <CoreFields />
        <Projects />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;