import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "NewsHub - React News App",
    description: "Stay ahead of the headlines with NewsHub — a sleek React-powered app that delivers real-time breaking news across every category. Built with Tailwind CSS and ShadCN UI, it's fast, modern, and easy on the eyes.",
    tags: ["React", "Tailwind CSS", "ShadCN UI", "News API"],
    category: "web",
    images: ["/projects/images/newshub-1.png"],
    github: "https://github.com/coding-mrinal/news_app",
    accentColor: "from-amber-400 via-orange-500 to-red-500",
  },
  {
    id: 2,
    title: "SanShop - Ecom Website",
    description: "Your one-stop shop for everything stylish — SanShop is a modern e-commerce website built with React, Tailwind CSS, and Vite. Packed with smooth navigation, a responsive design, and a seamless cart system for a delightful shopping experience.",
    tags: ["React", "Tailwind CSS", "JavaScript", "Vite"],
    category: "web",
    images: ["/projects/images/ecom.png"],
    github: "https://github.com/coding-mrinal/SanShop_Best_Ecom_Website",
    accentColor: "from-emerald-400 via-teal-500 to-cyan-600",
  },
  {
    id: 3,
    title: "Weather Pulse - Real-Time Weather App",
    description: "Never get caught in the rain again — Weather Pulse brings you live, location-based forecasts in a clean, mobile-friendly interface. Powered by the OpenWeatherMap API for accurate and instant updates.",
    tags: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    category: "web",
    images: ["/projects/images/weatherapp-1.png"],
    github: "https://github.com/coding-mrinal/weather_app",
    accentColor: "from-blue-400 via-purple-500 to-indigo-600",
  },
  {
    id: 4,
    title: "Savory Delights - Fine Dining Restaurant",
    description: "A feast for the senses — Savory Delights is a visually stunning restaurant website crafted with React, TailwindCSS, and Vite. From elegant menus to mouthwatering imagery, it's designed to leave a lasting impression.",
    tags: ["React", "TailwindCSS", "Vite", "JavaScript"],
    category: "web",
    images: ["/projects/images/restaurant.png"],
    github: "https://github.com/coding-mrinal/Savory_Delights_Fine_Dining_Restaurant",
    accentColor: "from-violet-400 via-purple-500 to-fuchsia-600",
  },
  {
    id: 5,
    title: "Resumee - Modern Resume Builder",
    description: "Build a resume that lands the job — Resumee is a sleek, React-based builder that lets you design, preview, and download professional resumes in minutes. Clean, customizable, and ready to impress.",
    tags: ["React", "TailwindCSS", "JavaScript"],
    category: "tool",
    images: ["/projects/images/resumebuilder.png"],
    github: "https://github.com/coding-mrinal/Resume_Builder",
    accentColor: "from-slate-400 via-gray-500 to-zinc-600",
  },
  {
    id: 6,
    title: "Chatty - Modern AI Chatbot",
    description: "Your personal digital assistant — this AI Chatbot, built with React, TailwindCSS, and powered by the Gemini API, delivers intelligent, real-time responses in a clean and intuitive interface.",
    tags: ["React", "TailwindCSS", "JavaScript", "Gemini API"],
    category: "game",
    images: ["/projects/images/chatbot1.png"],
    github: "https://github.com/coding-mrinal/AI_Chat_Assistant",
    accentColor: "from-green-400 via-cyan-500 to-blue-600",
  },
];

const categoryLabels = { all: "All Projects", web: "Web Applications", tool: "Tools", game: "AI & Experimental" };

const Projects = ({ filter, setFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => { if (filter) setSelectedCategory("all"); }, [filter]);

  const categories = ["all", "web", "tool", "game"];
  const filteredProjects = selectedCategory === "all" ? projects : projects.filter(p => p.category === selectedCategory);
  const finalProjects = filter ? filteredProjects.filter(p => p.tags.includes(filter)) : filteredProjects;
  
  const clearAllFilters = () => { setFilter(null); setSelectedCategory("all"); };

  const FilterTag = ({ label, onRemove, colors }) => (
    <div className={`px-4 py-2 bg-gradient-to-r ${colors} rounded-full border backdrop-blur-sm flex items-center gap-2`}>
      <span className="font-medium">{label}</span>
      <button onClick={onRemove} className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors">×</button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 px-6 py-12">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 dark:from-pink-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
            Here's a showcase of my passion projects and coding adventures
          </p>
        </div>

        {(selectedCategory !== "all" || filter) && (
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {selectedCategory !== "all" && (
              <FilterTag 
                label={categoryLabels[selectedCategory]} 
                onRemove={() => setSelectedCategory("all")}
                colors="from-indigo-500/10 to-purple-500/10 dark:from-indigo-400/20 dark:to-purple-400/20 border-indigo-300/30 dark:border-indigo-500/40 text-indigo-700 dark:text-indigo-300"
              />
            )}
            {filter && (
              <FilterTag 
                label={filter} 
                onRemove={() => setFilter(null)}
                colors="from-emerald-500/10 to-teal-500/10 dark:from-emerald-400/20 dark:to-teal-400/20 border-emerald-300/30 dark:border-emerald-500/40 text-emerald-700 dark:text-emerald-300"
              />
            )}
          </div>
        )}

        <div className="flex justify-center mb-10 flex-wrap gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-sm ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 dark:shadow-indigo-400/25"
                  : "bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 border border-gray-200/50 dark:border-gray-600/50 hover:shadow-md"
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {finalProjects.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 dark:text-gray-400 text-xl mb-6">No projects found matching your filters.</p>
            <button onClick={clearAllFilters} className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {finalProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
