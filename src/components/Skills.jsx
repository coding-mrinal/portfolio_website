import React from 'react';
import {
  FaJava, FaPython, FaReact, FaDatabase, FaServer, FaCode, FaLaptopCode, FaChartLine,
  FaChartBar, FaGlobe
} from 'react-icons/fa';
import {
  SiCplusplus, SiMongodb, SiPandas, SiNumpy, SiScikitlearn, SiJupyter,
  SiGooglecolab, SiVercel, SiGithub, SiIntellijidea, SiC
} from 'react-icons/si';
import { DiMysql } from 'react-icons/di';
import { BsFiletypeHtml, BsFiletypeCss } from 'react-icons/bs';
import { VscJson } from 'react-icons/vsc';
import { IoLogoJavascript } from 'react-icons/io5';

const Skills = () => {
  const skillsData = {
    languages: [
      { name: 'Java', icon: <FaJava />, color: 'text-orange-600 dark:text-orange-400' },
      { name: 'Python', icon: <FaPython />, color: 'text-blue-600 dark:text-blue-400' },
      { name: 'JavaScript', icon: <IoLogoJavascript />, color: 'text-yellow-500 dark:text-yellow-300' },
      { name: 'C++', icon: <SiCplusplus />, color: 'text-cyan-700 dark:text-cyan-300' },
      { name: 'C', icon: <SiC />, color: 'text-gray-600 dark:text-gray-300' }
    ],
    frameworks: [
      { name: 'ReactJS', icon: <FaReact />, color: 'text-sky-600 dark:text-sky-400' },
      { name: 'NumPy', icon: <SiNumpy />, color: 'text-teal-600 dark:text-teal-400' },
      { name: 'Pandas', icon: <SiPandas />, color: 'text-emerald-600 dark:text-emerald-400' },
      { name: 'Matplotlib', icon: <FaChartLine />, color: 'text-indigo-700 dark:text-indigo-400' },
      { name: 'Seaborn', icon: <FaChartBar />, color: 'text-indigo-600 dark:text-indigo-400' },
      { name: 'Scikit-Learn', icon: <SiScikitlearn />, color: 'text-yellow-600 dark:text-yellow-400' }
    ],
    databases: [
      { name: 'MySQL', icon: <DiMysql />, color: 'text-blue-700 dark:text-blue-300' },
      { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-600 dark:text-green-400' }
    ],
    web: [
      { name: 'RESTful APIs', icon: <VscJson />, color: 'text-emerald-700 dark:text-emerald-300' },
      { name: 'HTML5', icon: <BsFiletypeHtml />, color: 'text-orange-600 dark:text-orange-400' },
      { name: 'CSS3', icon: <BsFiletypeCss />, color: 'text-blue-600 dark:text-blue-400' },
      { name: 'React Hooks', icon: <FaReact />, color: 'text-sky-500 dark:text-sky-300' }
    ],
    tools: [
      { name: 'VS Code', icon: <span className="font-bold">VS</span>, color: 'text-sky-600 dark:text-sky-400' },
      { name: 'Jupyter Notebook', icon: <SiJupyter />, color: 'text-yellow-600 dark:text-yellow-400' },
      { name: 'Google Colab', icon: <SiGooglecolab />, color: 'text-yellow-500 dark:text-yellow-300' },
      { name: 'IntelliJ IDEA', icon: <SiIntellijidea />, color: 'text-indigo-600 dark:text-indigo-400' },
      { name: 'Vercel', icon: <SiVercel />, color: 'text-gray-800 dark:text-gray-200' },
      { name: 'GitHub', icon: <SiGithub />, color: 'text-gray-700 dark:text-gray-300' }
    ],
    subjects: [
      { name: 'DSA', icon: <FaCode />, color: 'text-blue-600 dark:text-blue-400' },
      { name: 'OOP', icon: <FaLaptopCode />, color: 'text-purple-600 dark:text-purple-400' },
      { name: 'OS', icon: <FaServer />, color: 'text-green-600 dark:text-green-400' },
      { name: 'DBMS', icon: <FaDatabase />, color: 'text-teal-600 dark:text-teal-400' },
      { name: 'CN', icon: <FaGlobe />, color: 'text-yellow-600 dark:text-yellow-400' }
    ]
  };

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-br from-slate-50 to-sky-100 dark:from-slate-900 dark:to-emerald-950 scroll-mt-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-sky-800 dark:text-emerald-300">Technical Skills</h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-2">
          A comprehensive showcase of technical expertise across various domains
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4 capitalize text-sky-700 dark:text-sky-300 border-b border-slate-200 dark:border-slate-700 pb-2">
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map(skill => (
                <div key={skill.name} className="flex flex-col items-center p-3 rounded-lg bg-slate-50 dark:bg-slate-700 hover:bg-sky-100 dark:hover:bg-slate-600 transition">
                  <div className={`text-2xl mb-1 ${skill.color}`}>
                    {skill.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-center text-gray-800 dark:text-gray-100">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
