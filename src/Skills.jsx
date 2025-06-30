import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaDatabase, FaCode, FaUsers, FaLightbulb, FaComments, FaHandshake, FaClock, FaChartLine } from "react-icons/fa";
import { SiPostman, SiTailwindcss, SiBootstrap, SiFramer, SiExpress, SiMongodb, SiMysql, SiMongoose } from "react-icons/si";
import { motion } from "framer-motion";

const technicalSkills = [
  {
    group: "Frontend",
    items: [
      { name: "React", icon: () => <FaReact className="text-blue-400" /> },
      { name: "HTML5", icon: () => <FaHtml5 className="text-orange-500" /> },
      { name: "Tailwind", icon: () => <SiTailwindcss className="text-cyan-500" /> },
      { name: "CSS3", icon: () => <FaCss3Alt className="text-blue-600" /> },
      { name: "Bootstrap", icon: () => <SiBootstrap className="text-purple-600" /> },
      { name: "Framer Motion", icon: () => <SiFramer className="text-black" /> },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "Node.js", icon: () => <FaNodeJs className="text-green-600" /> },
      { name: "Express.js", icon: () => <SiExpress className="text-gray-600" /> },
    ],
  },
  {
    group: "Database",
    items: [
      { name: "Mongoose", icon: () => <SiMongoose className="text-green-600" /> },
      { name: "SQL", icon: () => <FaDatabase className="text-blue-600" /> },
    ],
  },
  {
    group: "Tools",
    items: [
      { name: "Git", icon: () => <FaGitAlt className="text-red-500" /> },
      { name: "VS Code", icon: () => <FaCode className="text-blue-500" /> },
      { name: "Postman", icon: () => <SiPostman className="text-orange-500" /> },
      { name: "MongoDB", icon: () => <SiMongodb className="text-green-500" /> },
      { name: "MySQL", icon: () => <SiMysql className="text-blue-600" /> },
    ],
  },
];

const softSkills = [
  {
    group: "Communication",
    items: [
      { name: "Team Collaboration", icon: () => <FaUsers className="text-blue-500" /> },
      { name: "Active Listening", icon: () => <FaComments className="text-green-500" /> },
    ],
  },
  {
    group: "Problem Solving",
    items: [
      { name: "Critical Thinking", icon: () => <FaLightbulb className="text-yellow-500" /> },
      { name: "Analytical Skills", icon: () => <FaChartLine className="text-blue-600" /> },
    ],
  },
  {
    group: "Professional",
    items: [
      { name: "Time Management", icon: () => <FaClock className="text-red-500" /> },
      { name: "Adaptability", icon: () => <FaChartLine className="text-purple-600" /> },
    ],
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.3, duration: 0.8 } },
};

const Skills = () => (
  <div className="w-full max-w-7xl mx-auto p-2 sm:p-6 md:p-12">
    <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center">My Skills</h1>
    
    <div className="flex flex-col lg:flex-row gap-12 sm:px-8">
      {/* Technical Skills - Left Side */}
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center lg:text-left">Technical Skills</h2>
        {technicalSkills.map((group) => (
          <div key={group.group} className="mb-6">
            <h3 className="text-xl font-semibold mb-4">{group.group}</h3>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {group.items.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  className="bg-white sm:w-4xl rounded-lg shadow-md p-2 flex flex-col items-center justify-center aspect-square cursor-pointer hover:scale-105 hover:shadow-xl transition-transform"
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                >
                  <div className="text-3xl mb-1 flex-grow flex items-center">{skill.icon()}</div>
                  <span className="text-xs text-center font-semibold">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Soft Skills - Right Side */}
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center lg:text-left">Soft Skills</h2>
        {softSkills.map((group) => (
          <div key={group.group} className="mb-6">
            <h3 className="text-xl font-semibold mb-4">{group.group}</h3>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {group.items.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  className="bg-white rounded-lg shadow-md p-2 flex flex-col items-center justify-center aspect-square cursor-pointer hover:scale-105 hover:shadow-xl transition-transform"
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                >
                  <div className="text-3xl mb-1 flex-grow flex items-center">{skill.icon()}</div>
                  <span className="text-xs text-center font-semibold">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Skills; 