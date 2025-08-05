import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import resumePDF from "../assets/Mrinal_Mahapatra_Resume.pdf";

const useCodeTypewriter = (text, speed = 25) => {
  const [code, setCode] = useState("");
  useEffect(() => {
    let i = 0;
    const type = () => i <= text.length && (setCode(text.slice(0, i++)), setTimeout(type, speed));
    type();
  }, [text, speed]);
  return code;
};

function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const fullCode = `const developer = {\n  name: "Mrinal Mahapatra",
  role: {"Full Stack Developer" , "ML Enthusiast"},
  location: "Kolkata, India",
  skills: ["Java", "Python", "JavaScript", "Tailwind CSS", "ReactJS", "Figma", "C++"],
  description: "Passionate about creating intuitive digital experiences that combine design with robust functionality.",
  currentlyLearning: ["Machine Learning", "NodeJS"],
  hobbies: ["Photography", "Drawing", "Reading"]\n};`;
  const typedCode = useCodeTypewriter(fullCode);
  const gradients = [
    "from-indigo-600 via-purple-600 to-pink-600",
    "from-blue-500 via-teal-500 to-green-500",
    "from-purple-500 via-pink-500 to-red-500",
    "from-blue-600 via-indigo-600 to-violet-600"
  ];
  const [gradient, setGradient] = useState(gradients[0]);

  useEffect(() => {
    const id = setInterval(() => 
      setGradient(p => gradients[(gradients.indexOf(p) + 1) % gradients.length]), 
      5000
    );
    return () => clearInterval(id);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Mrinal_Mahapatra_Resume.pdf';
    document.body.appendChild(link).click();
    document.body.removeChild(link);
  };

  const buttons = [
    { 
      text: "Get In Touch", 
      icon: <FiMail />, 
      onClick: () => scrollTo("contact"),
      style: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
    },
    { 
      text: "Explore My Work", 
      icon: <FiArrowRight className="group-hover:translate-x-1 text-blue-600 dark:text-cyan-400" />, 
      onClick: () => scrollTo("projects"),
      style: "bg-white dark:bg-gray-800 border-2 border-blue-500 dark:border-cyan-400"
    },
    { 
      text: "Download Resume", 
      icon: <FiDownload className="group-hover:animate-bounce" />, 
      onClick: handleDownload,
      style: "bg-white dark:bg-gray-800 border-2 border-blue-500 dark:border-cyan-400"
    }
  ];

  const socials = [
    { 
      icon: <FiGithub />, 
      href: "https://github.com/coding-mrinal/", 
      color: "gray",
      hoverClass: "hover:bg-gray-100 dark:hover:bg-gray-700"
    },
    { 
      icon: <FiLinkedin />, 
      href: "https://www.linkedin.com/in/mrinal-mahapatra/", 
      color: "blue",
      hoverClass: "hover:bg-blue-100 dark:hover:bg-blue-900/20"
    }
  ];

  return (
    <section className="relative min-h-screen lg:flex pt-20 md:pt-24 bg-gradient-to-br from-[#f0f9ff] via-white to-[#e0e7ff] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#3b0764]">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 md:px-10 lg:px-12 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="block">Hi, I'm</span>
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>
              M.R.I.N.A.L
            </span>
          </h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1 }}
            className={`h-1 rounded-full mb-6 bg-gradient-to-r ${gradient}`}
          />

          <div className="text-lg md:text-xl lg:text-xl font-semibold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">
            Full Stack Developer & ML Enthusiast
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div className="my-6 md:my-8 space-y-3 md:space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            {buttons.slice(0,2).map((btn, i) => (
              <motion.button
                key={i}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-6 py-3 rounded-xl text-base w-full flex items-center justify-center gap-2 shadow-xl font-semibold group ${btn.style}`}
                onClick={btn.onClick}
              >
                {btn.icon}
                {btn.text}
              </motion.button>
            ))}
          </div>
          
          <motion.button
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`px-6 py-3 rounded-xl text-base w-full flex items-center justify-center gap-2 shadow-xl font-semibold text-gray-800 dark:text-gray-200 ${buttons[2].style}`}
            onClick={handleDownload}
          >
            {buttons[2].icon}
            {buttons[2].text}
          </motion.button>
        </motion.div>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center lg:justify-start">
          {socials.map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 text-${s.color}-600 dark:text-${s.color}-400 ${s.hoverClass}`}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Code Panel */}
      <div className="w-full lg:w-1/2 bg-white dark:bg-gray-900 border-t lg:border-l border-gray-200 dark:border-gray-700 flex justify-center p-4 min-h-[350px]">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-2xl h-full max-h-[450px] bg-[#f8fafc] dark:bg-[#1e293b] rounded-xl shadow-2xl overflow-hidden border-2 border-blue-500 dark:border-cyan-500"
        >
          <div className="flex items-center p-3 bg-gray-100 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600">
            <div className="flex gap-1.5 mr-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            </div>
            <div className="text-xs font-mono text-gray-500 dark:text-gray-400">about-me.js</div>
          </div>

          {/* Updated div with increased font size and better line spacing */}
          <div className="p-3 font-mono text-sm sm:text-base leading-relaxed h-[calc(100%-44px)] overflow-auto">
            <pre className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
              {typedCode}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;