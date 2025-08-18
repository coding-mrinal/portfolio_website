import { FiGithub } from 'react-icons/fi';

const ProjectCard = ({ project, index, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer
                before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-indigo-500/20 before:via-purple-500/20 before:to-pink-500/20 before:opacity-0 before:transition-all before:duration-500 before:pointer-events-none
                hover:before:opacity-100
                bg-gradient-to-br from-white/30 to-white/5 dark:from-gray-800/30 dark:to-gray-900/10
                backdrop-blur-lg shadow-lg hover:shadow-2xl
                border border-white/50 dark:border-white/10"
    >
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 group-hover:from-indigo-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500"></div>
      </div>
      
      <div className="h-48 overflow-hidden relative z-10">
        <img 
          src={project.images[0]} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300"></div>
        <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.accentColor}`}></div>
        <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/10 transition-all duration-300 flex items-center justify-center">
        </div>
      </div>
      
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="px-3 py-1.5 border border-indigo-500/30 dark:border-indigo-400/30 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-medium group-hover:border-indigo-500 dark:group-hover:border-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-200 transition-all backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.github, '_blank');
            }}
            className="flex-1 px-4 py-3 border-2 border-indigo-500 dark:border-indigo-400 hover:border-indigo-600 dark:hover:border-indigo-300 text-indigo-600 dark:text-indigo-300 hover:text-indigo-700 dark:hover:text-indigo-200 rounded-xl font-medium transition-all duration-300 text-center shadow-md hover:shadow-lg transform hover:scale-105 flex items-center justify-center gap-2 bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm"
          >
            <FiGithub size={18} />
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;