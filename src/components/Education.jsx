import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaBook, FaAward } from 'react-icons/fa';

const Education = () => {
  const educationItems = [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science Engineering",
      institution: "Guru Nanak Institute Of Technology, Kolkata",
      period: "2022 - 2026",
      focus: "Specialized in Web Technologies And AI/ML",
      achievements: [
        "75% Merit (Top 10%)",
        "Member of Google Developer Student Club",
        "Member of Bit2Byte, Official Coding Club Of GNIT"
      ],
      courses: [
        "Machine Learning",
        "Web Development",
        "Internet Of Things (IoT)",
        "Computer Vision"
      ]
    },
    {
      degree: "Secondary ;  Higher Secondary",
      institution: "BBIT Public School, Kolkata",
      period: "2018 - 2022",
      focus: "Core curriculum in Python, Data Structures, Algorithms, and Computer Science",
      achievements: [
        "Graduated with First Rank Holder",
        "Winner Of The Inter-House Competition As Green House Captain",
      ],
      courses: [
        "Python",
        "Database Management Systems",
        "Web Technologies",
        "Operating Systems"
      ]
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
          Educational Journey
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          My academic path with milestones and special achievements
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-12">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.15
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div className="p-6 md:p-8">
                {/* Degree Header */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6"
                >
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white flex items-center gap-3">
                      <motion.div
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-600 dark:to-purple-600 p-2 rounded-lg"
                      >
                        <FaGraduationCap className="text-white flex-shrink-0" />
                      </motion.div>
                      {item.degree}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2 flex items-center gap-3">
                      <FaUniversity className="text-indigo-500 dark:text-indigo-400 opacity-70 flex-shrink-0" />
                      {item.institution}
                    </p>
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 rounded-full text-indigo-800 dark:text-indigo-200 text-sm font-medium flex items-center gap-2 self-start md:self-auto"
                  >
                    <FaCalendarAlt className="flex-shrink-0" />
                    {item.period}
                  </motion.div>
                </motion.div>
                
                {/* Focus Area */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="mb-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg border border-indigo-100 dark:border-indigo-900/30"
                >
                  <h4 className="text-sm font-medium text-indigo-700 dark:text-indigo-300 mb-2 flex items-center gap-2">
                    <FaBook className="text-indigo-500 dark:text-indigo-400" />
                    Focus Areas
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">{item.focus}</p>
                </motion.div>
                
                {/* Key Courses */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Key Courses</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.courses.map((course, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-indigo-500 dark:text-indigo-400 mt-1">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{course}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Achievements */}
                {item.achievements && item.achievements.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2">
                      <motion.div
                        whileHover={{ rotate: 15 }}
                        className="bg-gradient-to-r from-yellow-400 to-amber-500 dark:from-yellow-500 dark:to-amber-600 p-1 rounded-full"
                      >
                        <FaAward className="text-white" />
                      </motion.div>
                      Notable Achievements
                    </h4>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ x: 5 }}
                          className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                        >
                          <span className="text-indigo-500 dark:text-indigo-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;