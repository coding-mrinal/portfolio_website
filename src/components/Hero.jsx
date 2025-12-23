import { useCallback, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiEye, FiCode, FiGitMerge, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import resumePDF from "../assets/Mrinal_Mahapatra_Resume.pdf";

const CodeEditor = ({ fullCode }) => {
  const [typedCode, setTypedCode] = useState("");
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i < fullCode.length ? setTypedCode(fullCode.slice(0, i + 1)) : clearInterval(timer);
      i++;
    }, 25);
    return () => clearInterval(timer);
  }, [fullCode]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      className="w-full max-w-2xl max-h-[450px] bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff] dark:from-[#1e293b] dark:to-[#0f172a] rounded-xl shadow-2xl overflow-hidden border-2 border-indigo-300 dark:border-cyan-500/50"
    >
      <div className="flex items-center p-3 bg-gradient-to-r from-indigo-500 to-blue-500 dark:from-cyan-700 dark:to-teal-700 border-b border-indigo-400 dark:border-cyan-600">
        <div className="flex gap-1.5 mr-3">
          {["bg-red-400", "bg-amber-400", "bg-emerald-400"].map((c) => (
            <div key={c} className={`w-2.5 h-2.5 rounded-full ${c}`} />
          ))}
        </div>
        <div className="text-xs font-mono text-white/90">about-me.js</div>
      </div>
      <pre className="p-3 font-mono text-sm sm:text-base leading-relaxed h-[calc(100%-44px)] overflow-auto text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
        {typedCode}
      </pre>
    </motion.div>
  );
};

export default function Hero() {
  const gradients = [
    "from-rose-500 via-fuchsia-500 to-violet-500",
    "from-cyan-500 via-blue-500 to-indigo-500",
    "from-emerald-500 via-teal-500 to-cyan-500",
    "from-amber-500 via-orange-500 to-rose-500",
  ];

  const fullCode = `const developer = {\n  name: "Mrinal Mahapatra",\n  role: ["Full Stack Developer", "ML Enthusiast"],\n  location: "Kolkata, India",\n  skills: ["Java", "Python", "JavaScript", "Tailwind CSS", "ReactJS", "Figma", "C++"],\n  description: "Passionate about creating intuitive digital experiences that combine design with robust functionality.",\n  currentlyLearning: ["Machine Learning", "NodeJS"],\n  hobbies: ["Photography", "Drawing", "Reading"]\n};`;

  const [gradient, setGradient] = useState(gradients[0]);

  useEffect(() => {
    const id = setInterval(
      () =>
        setGradient((g) => gradients[(gradients.indexOf(g) + 1) % gradients.length]),
      5000
    );
    return () => clearInterval(id);
  }, []);

  const scrollTo = useCallback(
    (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }),
    []
  );

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = resumePDF;
    a.download = "Mrinal_Mahapatra_Resume.pdf";
    a.click();
  };

  const actions = [
    { icon: <FiEye />, title: "Discover Me", subtitle: "My Story", onClick: () => scrollTo("about") },
    // { icon: <FiGitMerge />, title: "See How I Think", subtitle: "Process & Approach", onClick: () => scrollTo("approach") },
    { icon: <FiCode />, title: "Show My Craft", subtitle: "Skills & Projects", onClick: () => scrollTo("skills") },
  ];

  const socials = [
    { icon: <FiGithub />, href: "https://github.com/coding-mrinal/", label: "Github" },
    { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/mrinal-mahapatra/", label: "Linkedin" },
    { icon: <FiDownload />, onClick: handleDownload, label: "Resume" },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#f0f9ff] via-white to-[#e0e7ff] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#3b0764]">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        {["top-1/4 left-1/4 bg-rose-500/10", "bottom-1/4 right-1/4 bg-indigo-500/10"].map((p) => (
          <div key={p} className={`absolute ${p} w-64 h-64 rounded-full blur-3xl animate-pulse-slow`} />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen gap-8 lg:gap-12">
        {/* Left Side - Header & Buttons */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 md:px-10 lg:px-12 relative z-20 text-center lg:text-left">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="block text-gray-800 dark:text-gray-100">Hi, I'm</span>
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>
                M.R.I.N.A.L
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-4">
              Full Stack Developer & ML Enthusiast from India
            </p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1 }}
              className={`h-1 rounded-full mt-6 bg-gradient-to-r ${gradient}`}
            />
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {actions.map((a, i) => (
              <motion.button
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={a.onClick}
                className="w-full p-5 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-indigo-300 dark:border-cyan-500/50 hover:border-indigo-500 dark:hover:border-cyan-400"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-indigo-500 to-blue-500 dark:from-cyan-500 dark:to-teal-500 text-white rounded-xl text-xl">
                      {a.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {a.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {a.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="text-2xl text-indigo-500 dark:text-cyan-400">→</div>
                </div>
              </motion.button>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center lg:justify-start flex-wrap gap-3 mt-8 pt-6 border-t border-gray-200 dark:border-gray-700"
            >
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={s.href}
                  onClick={s.onClick}
                  target={s.href ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="px-4 py-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-2 border-violet-400 dark:border-fuchsia-500/50 rounded-xl hover:border-violet-500 dark:hover:border-fuchsia-400 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span className="text-lg text-violet-600 dark:text-fuchsia-400">
                    {s.icon}
                  </span>
                  <span className="text-sm font-medium text-violet-600 dark:text-fuchsia-400">
                    {s.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>

            {/* Scroll Hint */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              onClick={() => scrollTo("about")}
              className="mt-4 text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors font-medium"
            >
              or scroll to explore ↓
            </motion.button>
          </motion.div>
        </div>

        {/* Right Side - Code Editor */}
        <div className="w-full lg:w-1/2 flex justify-center p-4 md:p-6 lg:p-8">
          <CodeEditor fullCode={fullCode} />
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.15; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
}