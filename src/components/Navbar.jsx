import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Add these icons
import '../assets/styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to close menu when a link is clicked
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <div className="logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </svg>
          </div>
          <span className="logo-text">Madhava Studios</span>
        </Link>
        
        {/* Toggle Nav Links with active class */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          <li className="mobile-only">
             <button className="cta-nav-btn mobile-cta">Start for free</button>
          </li>
        </ul>

        <div className="nav-actions">
          <button className="cta-nav-btn desktop-only">Start for free</button>
          
          {/* Hamburger Icon */}
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;