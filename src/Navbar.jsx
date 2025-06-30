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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = (
    <>
      <button className={`text-2xl px-6 py-2 font-bold ${scrolled || isMenuOpen ? 'text-white' : 'text-black'}`} onClick={() => { scrollToSection('aboutme'); setIsMenuOpen(false); }}>Introduction</button>
      <button className={`text-2xl px-6 py-2 font-bold ${scrolled || isMenuOpen ? 'text-white' : 'text-black'}`} onClick={() => { scrollToSection('skills'); setIsMenuOpen(false); }}>Skills</button>
      <button className={`text-2xl px-6 py-2 font-bold ${scrolled || isMenuOpen ? 'text-white' : 'text-black'}`} onClick={() => { scrollToSection('projects'); setIsMenuOpen(false); }}>Projects</button>
      <button className={`text-2xl px-6 py-2 font-bold ${scrolled || isMenuOpen ? 'text-white' : 'text-black'}`} onClick={() => { scrollToSection('experience'); setIsMenuOpen(false); }}>Experience</button>
      <button className={`text-2xl px-6 py-2 font-bold ${scrolled || isMenuOpen ? 'text-white' : 'text-black'}`} onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }}>Contact</button>
    </>
  );

  return (
    <nav
      className={`p-4 sm:p-6 md:p-8 fixed w-full top-0 left-0 z-20 flex items-center justify-between transition-colors duration-300 ${
        scrolled ? 'bg-black' : 'bg-stone-500'
      }`}
      style={{ minHeight: '80px' }}
    >
      {/* Brand */}
      <div className="flex items-center">
        <FaUserTie className={`text-2xl md:text-3xl mr-3 sm:mr-4 ${scrolled ? 'text-white' : 'text-black'}`} />
        <span className={`font-bold text-lg sm:text-xl md:text-3xl ${scrolled ? 'text-white' : 'text-black'}`}>Opara Chukwuemeka</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-1 justify-center items-center gap-8">
        {navLinks}
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl text-white">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      
      {/* Spacer for desktop to balance the layout */}
      <div className="hidden md:flex flex-1"></div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black flex flex-col items-center gap-6 py-8">
          {navLinks}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
