import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { projectsData } from "./ProjectsData";

const Projects = ({ filter, setFilter }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [visitedProjects, setVisitedProjects] = useState([]);
  const mapRef = useRef(null);

  const drawPath = (from, to) => 
    `M ${from.x} ${from.y} Q ${(from.x + to.x) / 2} ${Math.min(from.y, to.y) - 10} ${to.x} ${to.y}`;

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    !visitedProjects.includes(project.id) && setVisitedProjects(prev => [...prev, project.id]);
  };

  const filteredProjects = filter ? projectsData.filter(p => p.tags.includes(filter)) : projectsData;
  
  const mapStyles = "relative w-full h-[600px] bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100 dark:from-amber-900/30 dark:via-yellow-900/20 dark:to-orange-900/30 rounded-3xl shadow-2xl overflow-hidden border-8 border-amber-700/20 dark:border-amber-600/20";

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 dark:from-amber-950 dark:via-orange-950 dark:to-yellow-950 px-6 py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 dark:opacity-5" />

      <div className="container mx-auto relative z-10">
        <header className="text-center mb-8">
          <h2 className="text-5xl font-bold text-amber-800 dark:text-amber-200 mb-2">
             Project Treasure Map
          </h2>
          <p className="text-lg text-amber-700 dark:text-amber-300 mb-4">
            Navigate through my coding adventures - click on any landmark to explore!
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <span className="text-amber-600 dark:text-amber-400">
               Discovered: {visitedProjects.length}/{projectsData.length}
            </span>
            {filter && (
              <button onClick={() => setFilter(null)} className="text-red-600 dark:text-red-400 hover:underline">
                Clear filter: {filter} ✕
              </button>
            )}
          </div>
        </header>

        <div ref={mapRef} className={mapStyles} style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(251, 191, 36, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(251, 146, 60, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 40% 40%, rgba(254, 215, 170, 0.1) 0%, transparent 50%)`
        }}>
          <svg className="absolute inset-0 w-full h-full opacity-10 dark:opacity-5">
            <defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern></defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          <div className="absolute top-4 right-4 w-20 h-20 opacity-30 dark:opacity-20">
            <div className="text-6xl animate-spin-slow">🧭</div>
          </div>

          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {filteredProjects.slice(0, -1).map((project, i) => (
              <path key={project.id} d={drawPath(project.mapPosition, filteredProjects[i + 1].mapPosition)}
                    fill="none" stroke="rgba(251, 146, 60, 0.3)" strokeWidth="0.5" strokeDasharray="1,1" className="animate-pulse" />
            ))}
          </svg>

          {filteredProjects.map((project) => {
            const isVisited = visitedProjects.includes(project.id);
            const isHovered = hoveredProject === project.id;
            return (
              <div key={project.id} className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                   style={{ left: `${project.mapPosition.x}%`, top: `${project.mapPosition.y}%`, zIndex: isHovered ? 50 : 10 }}
                   onMouseEnter={() => setHoveredProject(project.id)}
                   onMouseLeave={() => setHoveredProject(null)}
                   onClick={() => handleProjectClick(project)}>
                
                <div className={`relative transition-all duration-300 ${isHovered ? 'scale-125' : ''}`}>
                  <div className={`absolute inset-0 rounded-full animate-ping opacity-30 ${isVisited ? 'bg-green-400' : 'bg-amber-400'}`} />
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg transition-all duration-300 border-4 border-white dark:border-gray-800 ${
                    isVisited ? 'bg-gradient-to-br from-green-400 to-emerald-500 shadow-green-300/50' 
                              : 'bg-gradient-to-br from-amber-400 to-orange-500 shadow-amber-300/50'
                  } ${isHovered ? 'shadow-2xl -translate-y-1' : ''}`}>
                    {project.icon}
                  </div>
                  {isVisited && <div className="absolute -top-2 -right-2 text-lg">🚩</div>}
                  
                  {isHovered && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-amber-200 dark:border-amber-700 animate-fade-in">
                      <h4 className="font-bold text-sm text-gray-800 dark:text-white mb-1">{project.title}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">{project.description}</p>
                      <div className="mt-2 text-xs text-amber-600 dark:text-amber-400">Click to explore →</div>
                    </div>
                  )}
                </div>

                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
                  <span className="text-xs font-medium text-amber-800 dark:text-amber-200 bg-white/80 dark:bg-gray-800/80 px-2 py-1 rounded-full whitespace-nowrap">
                    {project.title.split('-')[0].trim()}
                  </span>
                </div>
              </div>
            );
          })}

          <div className="absolute bottom-8 left-8 text-4xl opacity-20 dark:opacity-10 rotate-12">❌</div>
          <div className="absolute top-20 left-1/2 text-3xl opacity-15 dark:opacity-10 -rotate-6">⚓</div>
        </div>

        {selectedProject && (
          <div className="mt-8 animate-fade-in">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-amber-200 dark:border-amber-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {selectedProject.icon} {selectedProject.title}
                </h3>
                <button onClick={() => setSelectedProject(null)} 
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">✕</button>
              </div>
              <ProjectCard project={selectedProject} />
            </div>
          </div>
        )}

        <footer className="mt-8 flex justify-center gap-6 text-sm">
          {[
            { bg: 'from-amber-400 to-orange-500', text: 'Undiscovered' },
            { bg: 'from-green-400 to-emerald-500', text: 'Discovered' },
            { text: '🚩 Visited' }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              {item.bg && <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${item.bg}`} />}
              <span className="text-amber-700 dark:text-amber-300">{item.text}</span>
            </div>
          ))}
        </footer>
      </div>
    </div>
  );
};

export default Projects;