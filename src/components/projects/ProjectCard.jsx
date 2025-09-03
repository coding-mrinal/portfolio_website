import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project, onClick }) => {
  const { title, description, tags, images, github, live } = project;

  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer rounded-3xl transition-transform duration-700 hover:scale-[1.02]"
    >
      <div className="rounded-3xl border border-gray-200/50 bg-white shadow-2xl dark:border-gray-700/50 dark:bg-gray-900">
        <div className="relative h-56 overflow-hidden">
          <img
            src={images?.[0] || '/placeholder.png'}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
        </div>

        <div className="p-6">
          <h3 className="mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-2xl font-bold text-transparent">
            {title}
          </h3>
          <p className="mb-4 line-clamp-3 text-gray-600 dark:text-gray-400">{description}</p>

          <div className="mb-6 flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(github, '_blank');
              }}
              className="flex-1 rounded-xl px-4 py-3 font-medium transition-all"
            >
              <FiGithub size={18} /> View Code
            </button>
            {live && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(live, '_blank');
                }}
                className="rounded-xl border-2 border-indigo-500 px-4 py-3 font-medium text-indigo-600 transition-all"
              >
                <FiExternalLink size={18} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;