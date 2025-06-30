import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaShieldAlt, FaTools } from 'react-icons/fa';

const experience = [
  {
    role: "Hardware Intern",
    company: "New Horizons",
    duration: "2018 (3 Months)",
    description: "Gained foundational experience in computer hardware, including assembly, troubleshooting, and system maintenance. Assisted senior technicians with component installation and network cabling.",
    technologies: ["Hardware Assembly", "Troubleshooting", "Component Installation", "Network Cabling", "System Maintenance"],
    icon: <FaTools className="text-gray-500" />
  },
  {
    role: "Ethical Hacking Intern",
    company: "Aptech",
    duration: "Jan 2024 - June 2024",
    description: "Completed an intensive internship focused on ethical hacking and cybersecurity principles. Gained hands-on experience in identifying and mitigating security vulnerabilities in web applications and networks.",
    technologies: ["Network Security", "Penetration Testing", "Cryptography", "Kali Linux", "Metasploit", "Microsoft System Administration", "Nmap"],
    icon: <FaShieldAlt className="text-blue-500" />
  },
  {
    role: "Freelance Full Stack Developer",
    company: "",
    duration: "2023 - Present",
    description: "Developed and delivered custom web solutions for a diverse range of clients, from small businesses to startups. Specialized in creating responsive, high-performance applications tailored to specific client needs.",
    technologies: ["HTML/CSS", "JavaScript", "React", "Node.js", "Express.js", "Bootstrap", "Framer-motion", "MongoDB"],
    icon: <FaBriefcase className="text-green-500" />
  },
  {
    role: "B.Sc. in Software Engineering",
    company: "Babcock University",
    duration: "Jan 2022 - July 2025",
    description: "Pursued a comprehensive curriculum in software engineering, focusing on software development lifecycle, data structures, algorithms, and system design. Maintained a strong academic record and came out with a CGPA of 4.41",
    technologies: ["HTML/CSS", "Basic Python", "Php", "Data Structures", "Software Architectures"],
    icon: <FaGraduationCap className="text-purple-500" />
  }
];

// Animation for the entire entry block
const entryVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.3, duration: 0.8 } }
};

// Stagger container for the card content
const cardContentContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Animation for individual items within the card
const cardItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Experience = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-6xl font-bold mb-16 text-center">My Experience</h1>
      
      <div className="relative">
        {/* The vertical timeline line */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>

        {experience.map((job, index) => (
          <motion.div
            key={index}
            className="mb-16 pl-12 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={entryVariants} // Use entry variants for the whole block
          >
            {/* The timeline dot */}
            <div className="absolute left-4 -translate-x-1/2 top-1">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
            </div>
            
            {/* Job Details Card */}
            <motion.div 
              className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              variants={cardContentContainerVariants} // Use stagger container variants
            >
              <motion.div className="flex items-center mb-3" variants={cardItemVariants}>
                <div className="text-3xl mr-4">{job.icon}</div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">{job.role}</h3>
                  <p className="text-lg font-semibold text-blue-600">{job.company} | {job.duration}</p>
                </div>
              </motion.div>
              <motion.p className="text-base text-gray-700 mb-6" variants={cardItemVariants}>
                {job.description}
              </motion.p>
              
              <motion.div variants={cardItemVariants}>
                <h4 className="text-md font-semibold text-gray-800 mb-3">Notable Knowledge Gained:</h4>
                <div className="flex flex-wrap gap-3">
                  {job.technologies.map(tech => (
                    <span key={tech} className="bg-blue-100 text-blue-800 text-base font-medium px-4 py-2 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;