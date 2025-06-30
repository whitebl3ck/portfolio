import React from 'react';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import Navbar from './Navbar';
import './index.css';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

function App() {
  return (
    <div>
      {/* Hero Section: Navbar + AboutMe */}
     
        <Navbar />
        <section id="aboutme" className="relative h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center bg-stone-500">
          <AboutMe />
        </div>
      </section>
      {/* Other Sections with equal spacing and white background */}
      <section id="skills" className="min-h-screen flex items-center px-30 py-24 bg-stone-300"><Skills /></section>
      <section id="projects" className="min-h-screen flex items-center justify-center py-24 bg-stone-200"><Projects /></section>
      <section id="experience" className="min-h-screen flex items-center justify-center py-24 bg-stone-100"><Experience /></section>
      <section id="contact" className="min-h-screen flex items-center justify-center bg-stone-700"><Contact /></section>
    </div>
  );
}

export default App;