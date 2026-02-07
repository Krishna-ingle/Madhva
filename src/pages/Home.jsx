import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import MidCTA from '../components/currentProject'
const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay to ensure the component is fully rendered
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash]);
  return (
    <div className="home"style={{ overflow: 'hidden', width: '100vw' }} >
      <Navbar />
      <Hero />
      <Services />
      <MidCTA />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;