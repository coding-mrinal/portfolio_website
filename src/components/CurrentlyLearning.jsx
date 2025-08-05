import { motion } from 'framer-motion';

const CurrentlyLearning = () => {
  const learningItems = [
    {
      skill: "Advanced Node.js",
      focus: "Mastering event loop architecture, worker threads, and performance optimization",
      application: "Building scalable backend services and high-performance APIs",
      icon: "🚀",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      skill: "Machine Learning Fundamentals",
      focus: "Studying supervised/unsupervised learning algorithms and model evaluation",
      application: "Developing predictive analytics for web applications",
      icon: "🧠",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      skill: "Generative AI Principles",
      focus: "Exploring diffusion models, LLM fine-tuning, and prompt engineering",
      application: "Creating intelligent content generation systems",
      icon: "🤖",
      gradient: "from-blue-500 to-cyan-600"
    }
  ];

  return (
    <section id="learning" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-400 dark:to-blue-500">
          Currently Learning
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Deepening my expertise in backend development and AI technologies
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {learningItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ 
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 15,
              delay: index * 0.1,
              hover: { duration: 0.3 }
            }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl dark:shadow-gray-900/30 border border-gray-200/70 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            {/* Gradient accent */}
            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.gradient} dark:opacity-90`}></div>
            
            <div className="flex items-start gap-4 mb-6">
              <motion.div 
                initial={{ rotate: -5, scale: 0.9 }}
                whileInView={{ rotate: 0, scale: 1 }}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", delay: index * 0.1 + 0.2 }}
                className={`p-3 rounded-xl bg-gradient-to-br ${item.gradient} shadow-md`}
              >
                <span className="text-3xl">{item.icon}</span>
              </motion.div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-500 group-hover:to-blue-600 transition-all duration-300">
                  {item.skill}
                </h3>
                <div className={`h-1 w-12 mt-2 rounded-full bg-gradient-to-r ${item.gradient}`}></div>
              </div>
            </div>
            
            <div className="space-y-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.gradient}`}></div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Focus Area</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 pl-5">{item.focus}</p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.gradient}`}></div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Application</h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 pl-5">{item.application}</p>
              </div>
            </div>

            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} blur-lg opacity-10`}></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CurrentlyLearning;