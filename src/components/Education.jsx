import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaBook, FaAward, FaCode, FaLightbulb, FaRocket, FaCoffee, FaBrain, FaUsers } from 'react-icons/fa';

const Education = () => {
  const data = [
    {
      year: "2022 - 2026", title: "B.Tech in Computer Science", institution: "Guru Nanak Institute Of Technology",
      icon: FaGraduationCap, color: "from-purple-500 to-indigo-500", milestone: "Currently pursuing",
      funFact: "Discovered my love for AI when I made a chatbot that roasted my coding style",
      highlights: [
        { icon: FaBrain, text: "Deep diving into ML algorithms at 2 AM", color: "text-purple-500" },
        { icon: FaUsers, text: "Member of GDSC Club", color: "text-blue-500" },
        { icon: FaCode, text: "Building cool stuff with Bit2Byte club", color: "text-green-500" }
      ],
      achievements: ["Top 10% of the batch", "10+ projects deployed"]
    },
    {
      year: "2018 - 2022", title: "Higher Secondary Education", institution: "BBIT Public School",
      icon: FaBook, color: "from-blue-500 to-cyan-500", milestone: "The foundation years",
      funFact: "Wrote my first Python script to automate my homework scheduling (teachers never knew!)",
      highlights: [
        { icon: FaRocket, text: "First rank holder & Green House Captain", color: "text-yellow-500" },
        { icon: FaCoffee, text: "Survived on coffee and Python documentation", color: "text-amber-600" }
      ],
      achievements: ["School topper", "Led My House To Be The Inter-house champion"]
    }
  ];

  const styles = {
    section: "py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden",
    title: "bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 dark:from-purple-400 dark:via-indigo-400 dark:to-blue-400",
    timeline: "absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-300 via-indigo-300 to-blue-300 dark:from-purple-600 dark:via-indigo-600 dark:to-blue-600",
    card: "bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden relative group",
    badge: "px-2 sm:px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-800 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-800"
  };

  const animations = {
    title: { initial: { opacity: 0, y: -20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true } },
    card: (index) => ({ initial: { opacity: 0, x: index % 2 === 0 ? -50 : 50 }, whileInView: { opacity: 1, x: 0 }, transition: { type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }, viewport: { once: true, margin: "-100px" } }),
    highlight: (i) => ({ initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, transition: { delay: i * 0.1 }, viewport: { once: true } })
  };

  const TimelineIcon = ({ item, index }) => (
    <div className={`absolute left-6 sm:left-8 md:left-1/2 transform md:-translate-x-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg ring-4 ring-white dark:ring-gray-800`}>
      <item.icon className="text-white text-lg sm:text-xl md:text-2xl" />
    </div>
  );

  const FunFact = ({ funFact }) => (
    <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg sm:rounded-xl border border-yellow-200 dark:border-yellow-800">
      <div className="flex items-start gap-2 sm:gap-3">
        <FaLightbulb className="text-yellow-500 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
        <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 italic leading-relaxed">"{funFact}"</p>
      </div>
    </div>
  );

  return (
    <section id="education" className={styles.section}>
      <motion.div {...animations.title} className="text-center mb-12 sm:mb-16 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
          <span className={styles.title}>My Learning Journey</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
          From "Hello World" to building AI models – every bug taught me something new
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={styles.timeline} />
        
        <div className="space-y-8 sm:space-y-12 md:space-y-20">
          {data.map((item, index) => (
            <motion.div key={index} {...animations.card(index)} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <TimelineIcon item={item} index={index} />
              <div className="hidden md:block md:w-1/2" />
              <div className={`ml-16 sm:ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className={styles.card}>
                  <div className={`h-1 bg-gradient-to-r ${item.color}`} />
                  <div className="p-4 sm:p-6 md:p-8">
                    <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3 sm:mb-4">
                      <FaCalendarAlt className="text-xs" />
                      <span>{item.year}</span>
                      <span className="ml-2 text-xs bg-green-500 text-white px-1.5 sm:px-2 py-0.5 rounded-full">{item.milestone}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-2 leading-tight">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 flex items-center gap-2 mb-3 sm:mb-4">
                      <FaUniversity className="text-sm flex-shrink-0" />
                      <span className="break-words">{item.institution}</span>
                    </p>
                    <FunFact funFact={item.funFact} />
                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {item.highlights.map((highlight, i) => (
                        <motion.div key={i} {...animations.highlight(i)} className="flex items-start sm:items-center gap-2 sm:gap-3">
                          <highlight.icon className={`${highlight.color} text-sm sm:text-base md:text-lg flex-shrink-0`} />
                          <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{highlight.text}</span>
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {item.achievements.map((achievement, i) => (
                        <span key={i} className={styles.badge}>{achievement}</span>
                      ))}
                    </div>
                  </div>
                  <div className={`absolute -bottom-10 -right-10 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-gradient-to-r ${item.color} opacity-10 blur-2xl`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12 sm:mt-16 md:mt-20 relative z-10">
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 font-medium">... and the learning never stops</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
