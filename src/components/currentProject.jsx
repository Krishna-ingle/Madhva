import React from 'react';
import { motion } from 'framer-motion';
import '../assets/styles/currentProject.css'; 
import { useNavigate } from 'react-router-dom';
const MidCTA = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    window.scrollTo(0, 0);
    navigate('/processdealpage');
  }
  return (
    <div className="mid-cta-wrapper">
      <section className="mid-cta-section">
        {/* The blurred background accents from your screenshot */}
        <div className="glow glow-left"></div>
        <div className="glow glow-right"></div>

        <div className="mid-cta-content">
          <motion.h2 
            className="mid-cta-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Software That Works for You
          </motion.h2>
          
          <motion.p 
            className="mid-cta-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Plan, build, and deploy web and mobile applications with <br className="d-none d-md-block" />
            clean design and strong technology.
          </motion.p>

          <motion.button 
            className="mid-cta-button"
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onClick={handleNavigation}
          >
            Get Started
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default MidCTA;