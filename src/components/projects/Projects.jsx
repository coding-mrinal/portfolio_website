import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "News App",
    description:
      "A sleek news application built with React, Tailwind CSS, and ShadCN UI that fetches and displays breaking news across various categories using an external API.",
    tags: ["React", "Tailwind CSS", "ShadCN UI", "News API"],
    category: "web",
    images: [
      "/projects/images/newshub-1.png",
      "/projects/images/newshub-2.png",
      "/projects/images/newshub-3.png",
    ],
    github: "https://github.com/coding-mrinal/news_app",
    accentColor: "from-amber-400 via-orange-500 to-red-500",
  },
  {
    id: 2,
    title: "Snake Game",
    description:
      "A classic snake game built from scratch using HTML, CSS, and JavaScript. Simple, addictive gameplay with real-time movement and scoring.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "game",
    images: [
      "/projects/images/snakegame-1.png",
      "/projects/images/snakegame-2.png",
    ],
    github: "https://github.com/coding-mrinal/snake_game",
    accentColor: "from-emerald-400 via-teal-500 to-cyan-600",
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "A responsive weather application using HTML, CSS, and JavaScript that fetches real-time weather data for any city via OpenWeatherMap API.",
    tags: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    category: "web",
    images: [
      "/projects/images/weatherapp-1.png",
      "/projects/images/weatherapp-2.png",
    ],
    github: "https://github.com/coding-mrinal/weather_app",
    accentColor: "from-blue-400 via-purple-500 to-indigo-600",
  },
  {
    id: 4,
    title: "Random Password Generator",
    description:
      "A secure and easy-to-use password generator built with HTML, CSS, and JavaScript. Supports custom password lengths, symbols, and copy-to-clipboard functionality.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "tool",
    images: ["/projects/images/randompasswordgenerator.png"],
    github: "https://github.com/coding-mrinal/random_password_generator",
    accentColor: "from-violet-400 via-purple-500 to-fuchsia-600",
  },
  {
    id: 5,
    title: "Scientific Calculator",
    description:
      "A fully functional scientific calculator with support for basic arithmetic, trigonometric functions, exponentials, and more — built with HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "tool",
    images: ["/projects/images/scientificcalculator.png"],
    github: "https://github.com/coding-mrinal/scientific_calculator",
    accentColor: "from-slate-400 via-gray-500 to-zinc-600",
  },
  {
    id: 6,
    title: "Quiz App",
    description:
      "An interactive quiz application built with HTML, CSS, and JavaScript featuring multiple categories, difficulty levels, and real-time scoring system.",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "game",
    images: [
      "/projects/images/quiz-1.png",
      "/projects/images/quiz-2.png",
      "/projects/images/quiz-3.png",
    ],
    github: "https://github.com/coding-mrinal/quiz_app",
    accentColor: "from-green-400 via-cyan-500 to-blue-600",
  },
];

const Projects = ({ filter, setFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    if (filter) setSelectedCategory("all");
  }, [filter]);



  const categories = ["all", "web", "game", "tool"];
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const finalFilteredProjects = filter
    ? filteredProjects.filter((project) => project.tags.includes(filter))
    : filteredProjects;



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 px-6 py-12">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 dark:from-pink-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              My Projects
            </h2>
          </div>

          {(selectedCategory !== "all" || filter) && (
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {selectedCategory !== "all" && (
                <div className="px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 dark:from-indigo-400/20 dark:to-purple-400/20 rounded-full border border-indigo-300/30 dark:border-indigo-500/40 backdrop-blur-sm flex items-center gap-2">
                  <span className="text-indigo-700 dark:text-indigo-300 font-medium capitalize">
                    {selectedCategory}
                  </span>
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
                  >
                    ×
                  </button>
                </div>
              )}
              {filter && (
                <div className="px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 dark:from-emerald-400/20 dark:to-teal-400/20 rounded-full border border-emerald-300/30 dark:border-emerald-500/40 backdrop-blur-sm flex items-center gap-2">
                  <span className="text-emerald-700 dark:text-emerald-300 font-medium">
                    {filter}
                  </span>
                  <button
                    onClick={() => setFilter(null)}
                    className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
                  >
                    ×
                  </button>
                </div>
              )}
            </div>
          )}

          <div className="flex justify-center mb-10 flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full capitalize font-medium transition-all duration-300 backdrop-blur-sm ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 dark:shadow-indigo-400/25"
                    : "bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 border border-gray-200/50 dark:border-gray-600/50 hover:shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {finalFilteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 dark:text-gray-400 text-xl mb-6">
                No projects found matching your filters.
              </p>
              <button
                onClick={() => {
                  setFilter(null);
                  setSelectedCategory("all");
                }}
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Clear all filters
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {finalFilteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Projects;
