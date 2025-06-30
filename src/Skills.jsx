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
  <div className="w-full max-w-7xl">
    <h1 className="text-6xl font-bold mb-30 text-center justify-center pl-200">My Skills</h1>
    
    <div className="flex gap-18">
      {/* Technical Skills - Left Side */}
      <div className="flex-1 pl-100 min-w-5xl">
        <h2 className="text-4xl font-bold mb-8">Technical Skills</h2>
        {technicalSkills.map((group) => (
          <div key={group.group} className="mb-8">
            <h3 className="text-2xl font-bold mb-6">{group.group}</h3>
            <div className="flex flex-wrap gap-6">
              {group.items.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-40 cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform"
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                >
                  <div className="text-5xl mb-3">{skill.icon()}</div>
                  <span className="text-xl font-semibold text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Soft Skills - Right Side */}
      <div className="flex-1 pl-10 min-w-4xl">
        <h2 className="text-4xl font-bold mb-8">Soft Skills</h2>
        {softSkills.map((group) => (
          <div key={group.group} className="mb-8">
            <h3 className="text-2xl font-bold mb-6">{group.group}</h3>
            <div className="flex flex-wrap gap-6">
              {group.items.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center w-40 cursor-pointer hover:scale-105 hover:shadow-2xl transition-transform"
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                >
                  <div className="text-5xl mb-3">{skill.icon()}</div>
                  <span className="text-xl font-semibold text-center">{skill.name}</span>
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