import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const paragraphs = [
  "I'm a passionate and results-driven <b>Software Engineering</b> graduate from <b>Babcock University</b>, where I graduated with a CGPA of <b>4.41</b>. With a strong foundation in computer science principles and real-world development experience, I've grown into a <b>frontend</b> and <b>fullstack web developer</b> who is constantly exploring new ways to build impactful, user-friendly solutions.",
  "I love to <b>create</b> — whether it's designing intuitive interfaces, developing scalable web applications, or bringing fresh ideas to life through code. What drives me most is the need to <b>solve</b> real problems for real people. I believe technology should be practical, beautiful, and above all, <b>helpful</b>. My focus is always on delivering tangible value through the <b>solutions</b> I build.",
  "Beyond code, I'm someone whose life is centered on faith and purpose. I love God deeply, and I draw strength and inspiration from my values every day. In my free time, you'll often find me on the football pitch, enjoying the beautiful game and staying active."
];

const AboutMe = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [typedText, setTypedText] = useState('');
  const fullText = "Hello, I'm Victor";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 150); // Speed of typing

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setFade(false), 4500);
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % paragraphs.length);
        setFade(true);
      }, 500);
    }, 5000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-left">
      <div className="flex items-left justify-start pl-120 pr-90">
        {/* Replace the div below with an <img> tag for your picture */}
        <div className="flex items-left justify-left text-white text-2xl font-bold ml-8">
          Picture
        </div>
      </div>
      <div className="flex items-center justify-left p-6">
        <div className='text-gray-300 p-8 relative'>
          {/* Top-left border */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-8 border-l-8 border-black"></div>
          {/* Bottom-right border */}
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-8 border-r-8 border-black"></div>
          <motion.h1 
            className="text-8xl font-bold mb-4 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {typedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block w-2 h-20 bg-gray-300 ml-2"
            />
          </motion.h1>
          <p className={`text-4xl max-w-4xl relative transition-opacity duration-500 leading-relaxed ${fade ? 'opacity-100' : 'opacity-0'}`} dangerouslySetInnerHTML={{ __html: paragraphs[index] }} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe; 