import React, { useEffect, useState } from 'react';
import { FaUserTie, FaBars, FaTimes } from 'react-icons/fa';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100 && !isMenuOpen) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMenuOpen]);

  const navLinks = (
    <>
      <button className={`text-xl px-4 py-2 font-bold ${scrolled || isMenuOpen ? 'text-white' : 'text-black'}`} onClick={() => { scrollToSection('aboutme'); setIsMenuOpen(false); }}>Introduction</button>
      <button className={`text-xl px-4 py-2 font-bold ${scrolled || isMenuOpen ? 'text-white' : 'text-black'}`} onClick={() => { scrollToSection('skills'); setIsMenuOpen(false); }}>Skills</button>
      <button className={`text-xl px-4 py-2 font-bold ${scrolled || isMenuOpen ? 'text-white' : 'text-black'}`} onClick={() => { scrollToSection('projects'); setIsMenuOpen(false); }}>Projects</button>
      <button className={`text-xl px-4 py-2 font-bold ${scrolled || isMenuOpen ? 'text-white' : 'text-black'}`} onClick={() => { scrollToSection('experience'); setIsMenuOpen(false); }}>Experience</button>
      <button className={`text-xl px-4 py-2 font-bold ${scrolled || isMenuOpen ? 'text-white' : 'text-black'}`} onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }}>Contact</button>
    </>
  );

  return (
    <nav
      className={`p-4 sm:p-6 md:p-8 fixed w-full top-0 left-0 z-20 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'bg-black' : 'bg-stone-500'
      } ${showNav ? 'translate-y-0' : '-translate-y-full'}`}
      style={{ minHeight: '80px' }}
    >
      {/* Brand */}
      <div className="flex items-center">
        <FaUserTie className={`text-2xl md:text-3xl mr-3 sm:mr-4 ${scrolled ? 'text-white' : 'text-black'}`} />
        <span className={`font-bold text-lg sm:text-xl md:text-3xl pr-30 ${scrolled ? 'text-white' : 'text-black'}`}>Opara Chukwuemeka</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-1 justify-center items-center gap-8">
        {navLinks}
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl text-white z-30">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      
      {/* Spacer for desktop to balance the layout */}
      <div className="hidden md:flex flex-1"></div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-0 left-0 w-full bg-black h-screen flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks}
      </div>
    </nav>
  );
};

export default Navbar;
