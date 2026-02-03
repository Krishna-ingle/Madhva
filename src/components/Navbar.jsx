import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Add useLocation
import { FiMenu, FiX } from 'react-icons/fi';
import logoImg from '../assets/images/madhvalogo.svg';
import '../assets/styles/Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    window.scrollTo(0,0);
    navigate('/processdealpage');
  }


  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Detects which page you are on



  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  // Helper to handle scrolling to top when navigating to Home
  const scrollToTop = () => {
    window.scrollTo(0, 0);
    closeMenu();
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo-link" onClick={scrollToTop}>
          <img src={logoImg} alt="Madhava Studios" className="navbar-brand-svg" />
        </Link>
        
        <div className={`nav-menu-wrapper ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            {/* 1. Use Link for Home to ensure it works from any page */}
            <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
            
            {/* 2. For sections, if not on home, use <a> with /#section */}
            <li><a href="/#services" onClick={closeMenu}>Services</a></li>
            <li><a href="/#portfolio" onClick={closeMenu}>Portfolio</a></li>
            <li><a href="/#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
          <button className="cta-nav-btn mobile-only-btn">Start for free</button>
        </div>

        <div className="nav-actions">
          <button className="cta-nav-btn desktop-only-btn"
          onClick={handleNavigation}
          >Start for free</button>
          <div className="menu-toggle-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;