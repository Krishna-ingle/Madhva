import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logoImg from '../assets/images/madhvalogo.svg';
import '../assets/styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Logo Section - Extra text removed as per your request */}
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <img src={logoImg} alt="Madhava Studios" className="navbar-brand-svg" />
        </Link>
        
        {/* Desktop & Mobile Navigation Links */}
        <div className={`nav-menu-wrapper ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#services" onClick={closeMenu}>Services</a></li>
            <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
          {/* Action button inside menu for mobile */}
          <button className="cta-nav-btn mobile-only-btn">Start for free</button>
        </div>

        {/* Right side actions */}
        <div className="nav-actions">
          <button className="cta-nav-btn desktop-only-btn">Start for free</button>
          
          {/* Hamburger Icon - Only visible on mobile */}
          <div className="menu-toggle-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;