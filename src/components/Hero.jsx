import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay } from 'react-icons/fi';
import '../assets/styles/Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated Badge */}
          <motion.div 
            className="hero-badge"
            variants={itemVariants}
          >
            <span className="badge-dot"></span>
            Available for new projects
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            className="hero-title"
            variants={itemVariants}
          >
            Building Digital
            <br />
            <span className="gradient-text">Excellence</span>
          </motion.h1>

          {/* Sanskrit Text */}
          <motion.p 
            className="hero-sanskrit"
            variants={itemVariants}
          >
            माधव स्टूडियोज़
          </motion.p>

          {/* Description */}
          <motion.p 
            className="hero-description"
            variants={itemVariants}
          >
            We craft exceptional digital experiences through innovative web and mobile solutions. 
            From concept to deployment, we transform your ideas into reality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="hero-cta"
            variants={itemVariants}
          >
            <motion.button 
              className="btn-primary"
            //   whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
              <FiArrowRight className="btn-icon" />
            </motion.button>

            <motion.button 
              className="btn-secondary"
            //   whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiPlay className="btn-icon" />
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Stats */}
          {/* <motion.div 
            className="hero-stats"
            variants={itemVariants}
          >
            <div className="stat-item">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3>30+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </motion.div> */}
        </motion.div>

        {/* Animated Illustration */}
        <motion.div 
          className="hero-illustration"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div 
            className="floating-card card-1"
            animate={floatingAnimation}
          >
            <div className="card-icon"></div>
            <p>Web Development</p>
          </motion.div>

          <motion.div 
            className="floating-card card-2"
            animate={{
              ...floatingAnimation,
              transition: { ...floatingAnimation.transition, delay: 0.5 }
            }}
          >
            <div className="card-icon"></div>
            <p>Mobile Apps</p>
          </motion.div>

          <motion.div 
            className="floating-card card-3"
            animate={{
              ...floatingAnimation,
              transition: { ...floatingAnimation.transition, delay: 1 }
            }}
          >
            <div className="card-icon"></div>
            <p>UI/UX Design</p>
          </motion.div>

          {/* Central Glow */}
          <div className="hero-glow"></div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
};

export default Hero;