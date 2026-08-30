import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logoImg from '../assets/images/madhvalogo.svg'; 

const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavigation = (path) => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[2000] transition-all duration-300 ${scrolled || menuOpen ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-[1400px] w-full px-6 mx-auto flex items-center justify-between">
        
        {/* LOGO */}
        <div onClick={() => handleNavigation('/')} className="flex items-center cursor-pointer">
          <img src={logoImg} alt="Madhava Global" className="h-8 md:h-10 w-auto" />
        </div>

        {/* CENTER MENU */}
        <div className={`fixed lg:static top-[60px] left-0 w-full lg:w-auto bg-white lg:bg-transparent flex flex-col lg:flex-row items-center gap-8 lg:gap-10 py-12 lg:py-0 shadow-xl lg:shadow-none transition-all duration-300 z-[1500] ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible lg:opacity-100 lg:visible'} lg:top-auto`}>
          <ul className="flex flex-col lg:flex-row gap-8 lg:gap-10 list-none text-center">
            <li><span onClick={() => handleNavigation('/')} className="cursor-pointer font-medium text-[#0f172a] hover:text-[#539A21] transition-colors">Home</span></li>
            <li><a href="/#product" onClick={() => setMenuOpen(false)} className="font-medium text-[#0f172a] hover:text-[#539A21] transition-colors">Product</a></li>
            <li><a href="/#services" onClick={() => setMenuOpen(false)} className="font-medium text-[#0f172a] hover:text-[#539A21] transition-colors">Services</a></li>
            <li><a href="/#portfolio" onClick={() => setMenuOpen(false)} className="font-medium text-[#0f172a] hover:text-[#539A21] transition-colors">Projects</a></li>
            <li><a href="/#contact" onClick={() => setMenuOpen(false)} className="font-medium text-[#0f172a] hover:text-[#539A21] transition-colors">Contact</a></li>
          </ul>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 w-4/5 lg:hidden mt-6">
            <button onClick={() => handleNavigation('/userform')} className="bg-[#1a1a1a] text-white font-semibold px-6 py-3 rounded-md">Start For Free</button>
          </div>
        </div>

        {/* RIGHT ACTION BUTTONS (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <button onClick={() => handleNavigation('/userform')} className="bg-[#1a1a1a] text-white font-semibold text-[15px] px-5 py-2.5 rounded-md hover:bg-gray-800 transition-colors">
            Start For Free
          </button>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-2xl cursor-pointer text-[#0f172a] z-[1600] p-1">
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;