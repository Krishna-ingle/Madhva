import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';
import '../assets/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-evernote">
      <div className="container">
        {/* Top bar with Logo and Socials */}
        <div className="footer-top-bar">
          <div className="footer-logo-side">
            <div className="logo-square">M</div>
            <span className="logo-text">Madhava Studios</span>
          </div>
          <div className="footer-social-icons">
            <FiGithub /> <FiLinkedin /> <FiTwitter /> <FiInstagram /> <FiYoutube />
          </div>
        </div>

        {/* The Grid from your screenshot */}
        <div className="footer-grid-modern">
          <div className="footer-column">
            <h3>Solutions</h3>
            <ul>
              <li>Mobile Apps</li>
              <li>Web Development</li>
              <li>Self Organization</li>
              <li>Productivity</li>
              <li>Enterprise</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Explore</h3>
            <ul>
              <li>AI Features</li>
              <li>Collaboration</li>
              <li>Web Clipper</li>
              <li>Advanced Search</li>
              <li>Calendar</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li>Latest News</li>
              <li>Release Notes</li>
              <li>Help & Learning</li>
              <li>Templates</li>
              <li>Developers</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Get Started</h3>
            <ul>
              <li>Sign up for free</li>
              <li>Log in</li>
              <li>Download</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-copyright">
          <p>© {new Date().getFullYear()} Madhava Studios. All rights reserved.</p>
          <div className="footer-legal-links">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;