import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Add useLocation
import { FiMenu, FiX } from 'react-icons/fi';
import logoImg from '../assets/images/madhvalogo.svg';
import '../assets/styles/Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Use this function for ALL navigation to ensure the menu closes
  const handleNavigation = (path) => {
    setMenuOpen(false); // Force close menu state
    window.scrollTo(0, 0); // Reset scroll position
    navigate(path);
  };

  // ... (keep useEffect for scroll)

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* LOGO */}
        <div className="logo-link" onClick={() => handleNavigation('/')} style={{cursor: 'pointer'}}>
          <img src={logoImg} alt="Madhava Studios" className="navbar-brand-svg" />
        </div>
        
        {/* MENU WRAPPER */}
        <div className={`nav-menu-wrapper ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            {/* Use the new unified handler for links too */}
            <li><span onClick={() => handleNavigation('/')}>Home</span></li>
            <li><a href="/#services" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="/#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a></li>
            <li><a href="/#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>

          {/* MOBILE BUTTON */}
          <button 
            className="cta-nav-btn mobile-only-btn" 
            onClick={() => handleNavigation('/processdealpage')}
          >
            Start for free
          </button>
        </div>

        <div className="nav-actions">
          {/* DESKTOP BUTTON */}
          <button 
            className="cta-nav-btn desktop-only-btn"
            onClick={() => handleNavigation('/processdealpage')}
          >
            Start for free
          </button>
          
          <div className="menu-toggle-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;