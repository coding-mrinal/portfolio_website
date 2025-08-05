import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaJava, FaPython, FaReact, FaDatabase, FaServer, FaCode, FaLaptopCode, FaChartLine, FaChartBar, FaGlobe } from 'react-icons/fa';
import { SiCplusplus, SiMongodb, SiPandas, SiNumpy, SiScikitlearn, SiJupyter, SiGooglecolab, SiVercel, SiGithub, SiIntellijidea, SiC } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';
import { BsFiletypeHtml, BsFiletypeCss } from 'react-icons/bs';
import { VscJson } from 'react-icons/vsc';
import { IoLogoJavascript } from 'react-icons/io5';

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-20%' });
  const mainControls = useAnimation();

  useEffect(() => { if (isInView) mainControls.start('visible') }, [isInView]);

  const skillsData = {
    languages: [
      { name: 'Java', icon: <FaJava />, color: 'text-amber-600 dark:text-amber-400' },
      { name: 'Python', icon: <FaPython />, color: 'text-sky-600 dark:text-sky-400' },
      { name: 'JavaScript', icon: <IoLogoJavascript />, color: 'text-amber-500 dark:text-amber-300' },
      { name: 'C++', icon: <SiCplusplus />, color: 'text-sky-700 dark:text-sky-300' },
      { name: 'C', icon: <SiC />, color: 'text-slate-600 dark:text-slate-300' }
    ],
    frameworks: [
      { name: 'ReactJS', icon: <FaReact />, color: 'text-sky-600 dark:text-sky-400' },
      { name: 'NumPy', icon: <SiNumpy />, color: 'text-emerald-600 dark:text-emerald-400' },
      { name: 'Pandas', icon: <SiPandas />, color: 'text-teal-600 dark:text-teal-400' },
      { name: 'Matplotlib', icon: <FaChartLine />, color: 'text-sky-700 dark:text-sky-300' },
      { name: 'Seaborn', icon: <FaChartBar />, color: 'text-indigo-600 dark:text-indigo-400' },
      { name: 'Scikit-Learn', icon: <SiScikitlearn />, color: 'text-amber-600 dark:text-amber-400' }
    ],
    databases: [
      { name: 'MySQL', icon: <DiMysql />, color: 'text-sky-700 dark:text-sky-300' },
      { name: 'MongoDB', icon: <SiMongodb />, color: 'text-emerald-600 dark:text-emerald-400' }
    ],
    web: [
      { name: 'RESTful APIs', icon: <VscJson />, color: 'text-emerald-700 dark:text-emerald-300' },
      { name: 'HTML5', icon: <BsFiletypeHtml />, color: 'text-amber-600 dark:text-amber-400' },
      { name: 'CSS3', icon: <BsFiletypeCss />, color: 'text-sky-600 dark:text-sky-400' },
      { name: 'React Hooks', icon: <FaReact />, color: 'text-sky-500 dark:text-sky-300' }
    ],
    tools: [
      { name: 'VS Code', icon: <span className="font-bold">VS</span>, color: 'text-sky-600 dark:text-sky-400' },
      { name: 'Jupyter Notebook', icon: <SiJupyter />, color: 'text-amber-600 dark:text-amber-400' },
      { name: 'Google Colab', icon: <SiGooglecolab />, color: 'text-amber-500 dark:text-amber-300' },
      { name: 'IntelliJ IDEA', icon: <SiIntellijidea />, color: 'text-indigo-600 dark:text-indigo-400' },
      { name: 'Vercel', icon: <SiVercel />, color: 'text-slate-800 dark:text-slate-200' },
      { name: 'GitHub', icon: <SiGithub />, color: 'text-slate-700 dark:text-slate-300' }
    ],
    subjects: [
      { name: 'DSA', icon: <FaCode />, color: 'text-sky-600 dark:text-sky-400' },
      { name: 'OOP', icon: <FaLaptopCode />, color: 'text-indigo-600 dark:text-indigo-400' },
      { name: 'OS', icon: <FaServer />, color: 'text-emerald-600 dark:text-emerald-400' },
      { name: 'DBMS', icon: <FaDatabase />, color: 'text-teal-600 dark:text-teal-400' },
      { name: 'CN', icon: <FaGlobe />, color: 'text-amber-600 dark:text-amber-400' }
    ]
  };

  const categoryStyles = {
    languages: 'from-sky-100 to-blue-300 dark:from-slate-800 dark:to-emerald-900 text-sky-700 dark:text-emerald-300',
    frameworks: 'from-blue-100 to-purple-200 dark:from-indigo-900 dark:to-emerald-800 text-blue-700 dark:text-indigo-300',
    databases: 'from-emerald-100 to-cyan-300 dark:from-emerald-900 dark:to-slate-800 text-emerald-700 dark:text-emerald-300',
    web: 'from-amber-100 to-sky-200 dark:from-amber-900 dark:to-slate-800 text-amber-700 dark:text-amber-300',
    tools: 'from-indigo-100 to-sky-300 dark:from-indigo-900 dark:to-slate-800 text-indigo-700 dark:text-indigo-300',
    subjects: 'from-teal-100 to-sky-300 dark:from-teal-900 dark:to-slate-800 text-teal-700 dark:text-teal-300'
  };

  const variants = {
    category: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } },
    skill: { hidden: { opacity: 0, y: 10 }, visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.03 } }) }
  };

  return (
    <section id="skills" ref={sectionRef} className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 bg-gradient-to-br from-slate-50 to-sky-50 dark:from-slate-900 dark:to-emerald-950">
      <motion.div initial="hidden" animate={mainControls} variants={variants.category} className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-sky-700 dark:text-emerald-300">Technical Skills</h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
          A comprehensive showcase of technical expertise across various domains
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
        {Object.entries(skillsData).map(([category, skills]) => (
          <motion.div key={category} variants={variants.category} initial="hidden" animate={mainControls} 
            className={`rounded-xl overflow-hidden shadow-lg bg-white/80 dark:bg-slate-800/90 border backdrop-blur-sm`}>
            <div className={`h-3 bg-gradient-to-r ${categoryStyles[category].split(' ')[0]} ${categoryStyles[category].split(' ')[1]}`} />
            <div className="p-4 sm:p-5">
              <h3 className={`text-lg font-semibold mb-4 ${categoryStyles[category].split(' ').at(-2)}`}>
                {category.replace(/^./, str => str.toUpperCase())}
              </h3>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {skills.map((skill, i) => (
                  <motion.div key={skill.name} custom={i} variants={variants.skill} initial="hidden" animate={mainControls}
                    whileHover={{ scale: 1.05, zIndex: 10 }} whileTap={{ scale: 0.98 }}
                    className="relative flex flex-col items-center p-2 sm:p-3 rounded-lg bg-slate-50/80 dark:bg-slate-700/40 border border-slate-200/60 dark:border-slate-600/30 backdrop-blur-sm group">
                    <div className={`text-xl sm:text-2xl mb-1 z-10 ${skill.color}`}>{skill.icon}</div>
                    <span className="text-xs sm:text-sm font-medium text-center text-slate-700 dark:text-slate-200 z-10">
                      {skill.name}
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-sky-400 to-emerald-400 dark:from-emerald-400 dark:to-teal-300" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;