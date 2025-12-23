import skillsData, { iconComponents } from "./skillsData.jsx";

const Skills = () => {
  const getIconComponent = (iconName) => {
    return iconComponents[iconName] || null;
  };

  const colorClasses = {
    blue: "text-blue-500 dark:text-blue-400",
    orange: "text-orange-500 dark:text-orange-400",
    yellow: "text-yellow-500 dark:text-yellow-400",
    sky: "text-sky-500 dark:text-sky-400",
    green: "text-green-500 dark:text-green-400",
    gray: "text-gray-600 dark:text-gray-400",
    emerald: "text-emerald-500 dark:text-emerald-400",
    indigo: "text-indigo-500 dark:text-indigo-400",
    purple: "text-purple-500 dark:text-purple-400",
    violet: "text-violet-500 dark:text-violet-400",
    amber: "text-amber-500 dark:text-amber-400",
    cyan: "text-cyan-500 dark:text-cyan-400",
    teal: "text-teal-500 dark:text-teal-400",
  };

  const SkillCard = ({ name, icon, color }) => (
    <div className="group flex flex-col items-center p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-cyan-400 dark:hover:border-cyan-500">
      <div className={`text-3xl mb-3 transition-transform duration-300 group-hover:scale-110 ${colorClasses[color] || "text-gray-600 dark:text-gray-400"}`}>
        {getIconComponent(icon)}
      </div>
      <span className="text-sm font-medium text-center text-gray-700 dark:text-gray-200">
        {name}
      </span>
    </div>
  );

  const CategoryCard = ({ category, skills }) => (
    <div className="rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <div className="px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-600 dark:to-blue-600">
        <h3 className="text-lg font-bold text-white">{category}</h3>
      </div>
      <div className="p-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3">
        {skills.map(([name, icon, color]) => (
          <SkillCard key={name} name={name} icon={icon} color={color} />
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the technologies I work with
          </p>
          <div className="mt-4 w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <CategoryCard key={category} category={category} skills={skills} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;