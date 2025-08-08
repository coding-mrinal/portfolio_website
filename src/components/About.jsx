import { motion } from 'framer-motion';
import { FaReact, FaBookOpen, FaPalette } from 'react-icons/fa';
import { FiGitMerge } from 'react-icons/fi';
import profileImage from '../assets/profile.jpg';

const About = () => {
  const interests = [
    { icon: <FaBookOpen size={18} />, name: "Reading Books", color: "purple" },
    { icon: <FiGitMerge size={18} />, name: "Open Source", color: "blue" },
    { icon: <FaPalette size={18} />, name: "Drawing", color: "amber" },
    { icon: <FaReact size={18} />, name: "Web Development", color: "teal" }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 px-4 md:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-20"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', damping: 20 }}
          className="relative flex-shrink-0"
        >
          <div className="absolute -inset-3 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 rounded-full blur-lg opacity-60 dark:opacity-30" />
          <img
            src={profileImage}
            alt="Profile"
            className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
          />
        </motion.div>

        <div className="lg:w-2/3 space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Who <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">Am I?</span>
            </h2>
          </div>

          <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <p>I'm a passionate developer who loves continuous learning and creative expression through technology, art, and open-source collaboration. I balance technical problem-solving with artistic pursuits.</p>
            <p>When not coding, you'll find me reading, contributing to open-source projects, or sketching. My passion for technology extends beyond applications into creative digital experiences.</p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">My Interests</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`flex flex-col items-center gap-3 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-${interest.color}-300 dark:hover:border-${interest.color}-600`}
                >
                  <div className={`text-${interest.color}-600 dark:text-${interest.color}-400 p-3 rounded-full bg-${interest.color}-100 dark:bg-${interest.color}-900/30`}>
                    {interest.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">{interest.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
