import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ProjectModal = ({ project, currentImageIndex, setCurrentImageIndex, onClose }) => {
  const onPrev = () => {
    setCurrentImageIndex(prev => (prev - 1 + project.images.length) % project.images.length);
  };

  const onNext = () => {
    setCurrentImageIndex(prev => (prev + 1) % project.images.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ scale: 0.8, y: 50, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.8, y: 50, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => {}}
            className="absolute -top-14 right-0 p-2 text-white hover:text-red-400 transition-colors rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 z-10"
            aria-label="Close modal"
          >
            <FiX size={24} />
          </button>

          {/* Image Navigation Buttons */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={onPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 z-10"
                aria-label="Previous image"
              >
                <FiChevronLeft size={24} />
              </button>
              
              <button
                onClick={onNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 z-10"
                aria-label="Next image"
              >
                <FiChevronRight size={24} />
              </button>
            </>
          )}
          
          {/* Keyboard navigation handler */}
          {project.images.length > 1 && (
            <div 
              className="hidden" 
              // This div is a placeholder for potential additional navigation UI
            />
          )}
          
          <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
            <div className="relative">
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-auto max-h-[60vh] object-contain bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900"
              />
              
              <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${project.accentColor}`}></div>
            </div>
            
            {/* Image counter */}
            {project.images.length > 1 && (
              <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-black/50 rounded-full text-white text-sm backdrop-blur-sm">
                {currentImageIndex + 1}/{project.images.length}
              </div>
            )}
            
            <div className="p-8">
              <div className={`w-24 h-1.5 mb-6 rounded-full bg-gradient-to-r ${project.accentColor}`}></div>
              <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-full text-sm font-medium text-indigo-700 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 flex-wrap">
                <a 
                  href={project.github} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-600 dark:to-gray-700 hover:from-gray-900 hover:to-black dark:hover:from-gray-500 dark:hover:to-gray-600 text-white rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <FiGithub size={20} />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;