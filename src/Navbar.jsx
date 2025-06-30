import React, { useEffect, useState } from 'react';
import { FaUserTie } from 'react-icons/fa';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`p-12 fixed w-full top-0 left-0 z-10 flex items-center transition-colors duration-300 ${
        scrolled ? 'bg-black' : 'bg-stone-500'
      }`}
      style={{ minHeight: '140px' }}
    >
      <div className="flex-1 flex items-center">
        <FaUserTie className={`text-3xl mr-4 ${scrolled ? 'text-white' : 'text-black'}`} />
        <span className={`font-bold text-4xl ${scrolled ? 'text-white' : 'text-black'}`}>Opara Chukwuemeka</span>
      </div>
      <div className="flex-1 flex justify-center items-center gap-12">
        <button className={`text-2xl px-6 py-2 font-bold ${scrolled ? 'text-white' : 'text-black'}`} onClick={() => scrollToSection('aboutme')}>Introduction</button>
        <button className={`text-2xl px-6 py-2 font-bold ${scrolled ? 'text-white' : 'text-black'}`} onClick={() => scrollToSection('skills')}>Skills</button>
        <button className={`text-2xl px-6 py-2 font-bold ${scrolled ? 'text-white' : 'text-black'}`} onClick={() => scrollToSection('projects')}>Projects</button>
        <button className={`text-2xl px-6 py-2 font-bold ${scrolled ? 'text-white' : 'text-black'}`} onClick={() => scrollToSection('experience')}>Experience</button>
        <button className={`text-2xl px-6 py-2 font-bold ${scrolled ? 'text-white' : 'text-black'}`} onClick={() => scrollToSection('contact')}>Contact</button>
      </div>
      <div className="flex-1"></div>
    </nav>
  );
};

export default Navbar;
