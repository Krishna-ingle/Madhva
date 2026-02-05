import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';
import '../assets/styles/Footer.css';
import logo from '../assets/images/madhvalogo.svg';

const Footer = () => {
  return (
    <footer className="footer-evernote">
      <div className="footer-container">
        <div className="footer-top-bar">
          <div className="footer-logo-side">
            <div className="footer-logo-wrapper">
              <img src={logo} alt='Madhava Global' className="footer-logo-img" />
            </div>
          </div>
          <div className="footer-social-icons">
            <a href="#github"><FiGithub /></a>
            <a href="#linkedin"><FiLinkedin /></a>
            <a href="#twitter"><FiTwitter /></a>
            <a href="#instagram"><FiInstagram /></a>
            <a href="#youtube"><FiYoutube /></a>
          </div>
        </div>

        <div className="footer-grid-modern">
          <div className="footer-column">
            <h3>Solutions</h3>
            <ul>
              <li><a href="/#services">Mobile App Development</a></li>
              <li><a href="/#services">Web Development</a></li>
              <li><a href="/#services">Backend Systems</a></li>
              <li><a href="/#services">UI / UX Design</a></li>
              <li><a href="/#services">Enterprise Solutions</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Explore</h3>
            <ul>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="/#services">Technologies</a></li>
              <li><a href="#cases">Case Studies</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#api">API Reference</a></li>
              <li><a href="#support">Help & Support</a></li>
              <li><a href="#tutorials">Tutorials</a></li>
              <li><a href="#devs">Developers</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Get Started</h3>
            <ul>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#quote">Get a Quote</a></li>
              <li><a href="#start">Start a Project</a></li>
              <li><a href="#login">Client Login</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-copyright">
          <p>© {new Date().getFullYear()} Madhava Global. All rights reserved.</p>
          <div className="footer-legal-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;