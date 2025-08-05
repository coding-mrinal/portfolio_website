import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';

const ProjectCard = ({ project, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={onClick}
      className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-indigo-300/50 dark:hover:border-indigo-500/50 cursor-pointer"
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={project.images[0]} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
        <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.accentColor}`}></div>
        <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/10 transition-all duration-300 flex items-center justify-center">
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm">View Details</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium group-hover:scale-105 transition-transform"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click when clicking buttons
              window.open(project.github, '_blank');
            }}
            className="flex-1 px-4 py-3 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-600 dark:to-gray-700 hover:from-indigo-600 hover:to-purple-600 dark:hover:from-indigo-500 dark:hover:to-purple-500 text-white rounded-xl font-medium transition-all duration-300 text-center shadow-md hover:shadow-lg transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <FiGithub size={18} />
            GitHub
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;