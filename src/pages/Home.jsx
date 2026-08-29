import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import MidCTA from '../components/currentProject'
import ClientMarquee from '../components/ClientAdds';
import ProductSection from '../components/ProductSection';
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
  <div  className="home">
    <Navbar />
    <Hero />
    <ClientMarquee />
    <ProductSection />
    <Services />
    <MidCTA />
    <Portfolio />
    <Contact />
    <Footer />
  </div>
);
};

export default Home;