import { motion } from 'framer-motion';

const CurrentlyLearning = () => {
  const data = [
    { skill: "Advanced Node.js", focus: "Event loop architecture, worker threads, performance optimization", app: "Scalable backend services", icon: "🚀", color: "emerald" },
    { skill: "Machine Learning", focus: "Supervised/unsupervised learning, model evaluation", app: "Predictive analytics", icon: "🧠", color: "purple" },
    { skill: "Generative AI", focus: "Diffusion models, LLM fine-tuning, prompt engineering", app: "Content generation systems", icon: "🤖", color: "cyan" }
  ];

  const animations = {
    title: { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true } },
    card: (i) => ({ initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, whileHover: { y: -8, scale: 1.02 }, transition: { delay: i * 0.1, hover: { duration: 0.2 } }, viewport: { once: true } }),
    icon: (i) => ({ initial: { scale: 0.8 }, whileInView: { scale: 1 }, whileHover: { scale: 1.1, rotate: 5 }, transition: { delay: i * 0.1 } })
  };

  const colors = {
    emerald: "from-emerald-400 to-teal-500",
    purple: "from-purple-400 to-indigo-500", 
    cyan: "from-cyan-400 to-blue-500"
  };

  const InfoItem = ({ label, text, color }) => (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors[color]}`} />
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">{label}</span>
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed pl-4">{text}</p>
    </div>
  );

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div {...animations.title} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
          Currently Learning
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Deepening expertise in backend development and AI technologies
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, i) => (
          <motion.div
            key={i}
            {...animations.card(i)}
            className="relative group p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${colors[item.color]}`} />
            
            <div className="flex items-start gap-4 mb-6">
              <motion.div 
                {...animations.icon(i)}
                className={`p-3 rounded-xl bg-gradient-to-r ${colors[item.color]} shadow-lg`}
              >
                <span className="text-2xl">{item.icon}</span>
              </motion.div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-blue-500 transition-all duration-300">
                  {item.skill}
                </h3>
                <div className={`h-0.5 w-8 rounded-full bg-gradient-to-r ${colors[item.color]}`} />
              </div>
            </div>
            
            <div className="space-y-4">
              <InfoItem label="Focus" text={item.focus} color={item.color} />
              <InfoItem label="Application" text={item.app} color={item.color} />
            </div>

            <div className={`absolute -inset-0.5 bg-gradient-to-r ${colors[item.color]} opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300 -z-10`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CurrentlyLearning;
