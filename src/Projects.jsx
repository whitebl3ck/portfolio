import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaCloud } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';
import digitalClockImg from './assets/digital-clock.png';
import WeatherImg from './assets/weather.png';
import EmanImg from './assets/Eman.png'
const projects = [
  {
    title: "Digital Clock",
    description: "A sleek and stylish digital clock application built using React for the user interface and custom CSS for styling. It displays the current time with a clean and modern design.",
    technologies: ["React", "CSS"],
    github: "https://github.com/whitebl3ck/clock",
    live: "https://clock-ashen-alpha.vercel.app",
    image: digitalClockImg,
    status: "Completed"
  },
  {
    title: "Weather Dashboard",
    description: "A weather application that displays current weather conditions and forecasts. Built with React and Tailwind CSS, it utilizes the OpenWeatherMap API for real-time data.",
    technologies: ["React", "Tailwind CSS", "OpenWeatherMap API"],
    github: "https://github.com/whitebl3ck/weather",
    live: "https://weather-team-7-c0544782.vercel.app/",
    image: WeatherImg,
    status: "Completed"
  },
  {
    title: "Event Management System",
    description: "A comprehensive event management system for creating, managing, and promoting events. Features include user authentication, event creation, ticket booking, and an admin dashboard.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS"],
    github: "https://github.com/whitebl3ck/Emanfront",
    live: "https://emanfront.vercel.app/",
    image: EmanImg,
    status: "In Progress"
  },
  
];

const getTechnologyIcon = (tech) => {
  const iconMap = {
    "React": <FaReact className="text-blue-400" />,
    "Node.js": <FaNodeJs className="text-green-600" />,
    "Express.js": <SiExpress className="text-gray-600" />,
    "MongoDB": <FaDatabase className="text-green-500" />,
    "Tailwind CSS": <SiTailwindcss className="text-cyan-500" />,
    "Framer Motion": <FaReact className="text-purple-500" />,
    "CSS": <FaCss3Alt className="text-blue-600" />,
    "OpenWeatherMap API": <FaCloud className="text-indigo-400" />
  };
  return iconMap[tech];
};

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3, duration: 0.8 } }
};

const Projects = () => {
  return (
    <div className="w-full mx-auto px-25">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">My Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            {/* Project Image */}
            <div className="relative h-48">
      
              <div className="absolute inset-0 bg-blue-600 bg-opacity-20"><img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              /></div>
              <span className={`absolute top-2 right-2 px-3 py-1 text-sm font-semibold text-white rounded-full ${
                project.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'
              }`}>
                {project.status}
              </span>
            </div>
            
            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
              
              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700"
                    >
                      {getTechnologyIcon(tech)}
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Project Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  <FaGithub />
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors duration-200"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 