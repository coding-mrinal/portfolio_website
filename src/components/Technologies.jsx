import React from 'react';
import { motion } from 'framer-motion';

const Technologies = ({ selectedTech, setSelectedTech }) => {
  const techData = {
    languages: [
      { name: 'JavaScript', icon: '📘', color: 'bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-300' },
      { name: 'TypeScript', icon: '🟦', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300' },
      { name: 'Python', icon: '🐍', color: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' },
      { name: 'Java', icon: '☕', color: 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300' }
    ],
    frameworks: [
      { name: 'React', icon: '⚛️', color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/50 dark:text-cyan-300' },
      { name: 'Next.js', icon: '⏭️', color: 'bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300' },
      { name: 'Node.js', icon: '🟢', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300' },
      { name: 'Express', icon: '🚂', color: 'bg-lime-100 text-lime-800 dark:bg-lime-900/50 dark:text-lime-300' }
    ],
    databases: [
      { name: 'MongoDB', icon: '🍃', color: 'bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-300' },
      { name: 'PostgreSQL', icon: '🐘', color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300' },
      { name: 'Firebase', icon: '🔥', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300' },
      { name: 'MySQL', icon: '🐬', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300' }
    ],
    tools: [
      { name: 'Git', icon: '🐙', color: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300' },
      { name: 'Docker', icon: '🐳', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300' },
      { name: 'Figma', icon: '✏️', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300' },
      { name: 'VSCode', icon: '💻', color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300' }
    ]
  };

  return (
    <section id="technologies" className="py-16 px-4 max-w-6xl mx-auto">

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(techData).map(([category, items]) => (
          <motion.div 
            key={category}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg dark:shadow-gray-800/20 border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white capitalize">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {items.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedTech(tech.name === selectedTech ? null : tech.name)}
                  className={`${tech.color} px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer transition-all hover:shadow-md dark:hover:shadow-gray-700/50 ${selectedTech === tech.name ? "ring-2 ring-offset-2 ring-indigo-500 dark:ring-offset-gray-800" : ""}`}
                >
                  <span className="text-lg">{tech.icon}</span>
                  <span className="font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-500 dark:text-gray-400 italic">
          Click on any technology and scroll to see projects using it
        </p>
      </div>
    </section>
  );
};

export default Technologies;