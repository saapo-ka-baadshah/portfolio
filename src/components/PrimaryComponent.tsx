import React, { useState, useEffect } from 'react';
import IParallaxStyle from '../abstractions/interfaces/IParallaxStyle';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const MainComponent: React.FC = () => {

  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (): void => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = (speed: number): IParallaxStyle => ({
    transform: `translateY(${scrollY * speed}px)`
  });
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <Hero/>

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills/>

      {/* Projects Section */}
      <Projects/>

      {/* Contact Section */}
      <Contact/>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default MainComponent;