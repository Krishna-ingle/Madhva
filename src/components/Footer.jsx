import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';
import '../assets/styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', link: '#home' },
    { name: 'Services', link: '#services' },
    { name: 'Portfolio', link: '#portfolio' },
    { name: 'Contact', link: '#contact' }
  ];

  const services = [
    'Mobile App Development',
    'Web Development',
    'E-commerce Solutions',
    'Custom Software'
  ];

  const socialLinks = [
    { icon: <FiGithub />, link: 'https://github.com/Krishna-ingle', name: 'GitHub' },
    { icon: <FiLinkedin />, link: '#', name: 'LinkedIn' },
    { icon: <FiTwitter />, link: '#', name: 'Twitter' },
    { icon: <FiMail />, link: 'mailto:hello@madhavastudios.com', name: 'Email' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="footer-logo">
              <div className="logo-icon">M</div>
              <span>Madhava Studios</span>
            </div>
            <p className="footer-tagline">माधव स्टूडियोज़</p>
            <p className="footer-description">
              Building digital excellence through innovative solutions. 
              Transforming ideas into reality, one project at a time.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  className="social-icon"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services">{service}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="footer-title">Stay Updated</h3>
            <p className="newsletter-text">
              Subscribe to our newsletter for latest updates and insights.
            </p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
              />
              <motion.button 
                className="newsletter-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Madhava Studios. All rights reserved.
          </p>
          <p className="made-with">
            Made with <FiHeart className="heart-icon" /> in India
          </p>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="footer-decoration"></div>
    </footer>
  );
};

export default Footer;