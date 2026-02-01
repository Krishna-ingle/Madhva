import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import MidCTA from '../components/currentProject'
const Home = () => {
  return (
    <div className="home">
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