import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiEye, FiCode, FiGitMerge, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import resumePDF from "../assets/Mrinal_Mahapatra_Resume.pdf";

const useTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!text) return;
    setDisplayText("");
    setIsComplete(false);
    
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) setDisplayText(text.slice(0, i + 1));
      else {
        setIsComplete(true);
        clearInterval(timer);
      }
      i++;
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayText, isComplete };
};

const CodeEditor = ({ fullCode }) => {
  const [typedCode, setTypedCode] = useState("");
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullCode.length) setTypedCode(fullCode.slice(0, i + 1));
      else clearInterval(timer);
      i++;
    }, 25);
    
    return () => clearInterval(timer);
  }, [fullCode]);

  return (
    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
      className="w-full max-w-2xl h-full max-h-[450px] bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff] dark:from-[#1e293b] dark:to-[#0f172a] rounded-xl shadow-2xl overflow-hidden border-2 border-indigo-300 dark:border-cyan-500/50">
      
      <div className="flex items-center p-3 bg-gradient-to-r from-indigo-500 to-blue-500 dark:from-cyan-700 dark:to-teal-700 border-b border-indigo-400 dark:border-cyan-600">
        <div className="flex gap-1.5 mr-3">
          {['bg-red-400', 'bg-amber-400', 'bg-emerald-400'].map(color => 
            <div key={color} className={`w-2.5 h-2.5 rounded-full ${color}`} />
          )}
        </div>
        <div className="text-xs font-mono text-white/90">about-me.js</div>
      </div>

      <div className="p-3 font-mono text-sm sm:text-base leading-relaxed h-[calc(100%-44px)] overflow-auto">
        <pre className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
          <code>
            {typedCode.split('\n').map((line, idx) => (
              <div key={idx}>
                {line}
              </div>
            ))}
          </code>
        </pre>
      </div>
    </motion.div>
  );
};

function Hero() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showButtons, setShowButtons] = useState(false);
  
  const gradients = useMemo(() => [
    "from-rose-500 via-fuchsia-500 to-violet-500",
    "from-cyan-500 via-blue-500 to-indigo-500",
    "from-emerald-500 via-teal-500 to-cyan-500",
    "from-amber-500 via-orange-500 to-rose-500"
  ], []);
  
  const [gradient, setGradient] = useState(gradients[0]);

  useEffect(() => {
    const id = setInterval(() => setGradient(p => gradients[(gradients.indexOf(p) + 1) % gradients.length]), 5000);
    return () => clearInterval(id);
  }, [gradients]);

  const narrative = useMemo(() => [
    "You've Arrived.", "I've Been Expecting You.", "I'm A Vivid Developer",
    "Nice To Meet You", "You Choose How We Begin."
  ], []);

  const { displayText, isComplete } = useTypewriter(narrative[currentStep], 80);

  const scrollTo = useCallback(id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), []);
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Mrinal_Mahapatra_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const nextStep = useCallback(() => {
    if (currentStep < narrative.length - 1) setCurrentStep(p => p + 1);
    else if (!showButtons) setShowButtons(true);
  }, [currentStep, narrative.length, showButtons]);

  const actions = useMemo(() => [
  { 
    icon: <FiEye />, 
    title: "Discover Me", 
    subtitle: "My Story", 
    onClick: () => scrollTo("about")
  },
  { 
    icon: <FiGitMerge />, 
    title: "See How I Think", 
    subtitle: "Process & Approach", 
    onClick: () => scrollTo("approach")
  },
  { 
    icon: <FiCode />, 
    title: "Show My Craft", 
    subtitle: "Skills & Projects", 
    onClick: () => scrollTo("skills")
  }
], [scrollTo]);

  const socials = useMemo(() => [
    { icon: <FiGithub />, href: "https://github.com/coding-mrinal/", label: "GitHub" },
    { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/mrinal-mahapatra/", label: "LinkedIn" },
    { icon: <FiDownload />, onClick: handleDownload, label: "Resume" }
  ], [handleDownload]);

  const fullCode = useMemo(() => `const developer = {
  name: "Mrinal Mahapatra",
  role: ["Full Stack Developer", "ML Enthusiast"],
  location: "Kolkata, India",
  skills: ["Java", "Python", "JavaScript", "Tailwind CSS", "ReactJS", "Figma", "C++"],
  description: "Passionate about creating intuitive digital experiences that combine design with robust functionality.",
  currentlyLearning: ["Machine Learning", "NodeJS"],
  hobbies: ["Photography", "Drawing", "Reading"]
};`, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#f0f9ff] via-white to-[#e0e7ff] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#3b0764]">
      <div className="absolute inset-0 opacity-10">
        {['top-1/4 left-1/4 bg-rose-500/10', 'bottom-1/4 right-1/4 bg-indigo-500/10'].map(pos => (
          <div key={pos} className={`absolute ${pos} w-64 h-64 rounded-full blur-3xl animate-pulse-slow`} />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 md:px-10 lg:px-12 relative z-20">
          <div className="relative z-10 w-full max-w-md mx-auto text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                <span className="block text-gray-800 dark:text-gray-100">Hi, I'm</span>
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>M.R.I.N.A.L</span>
              </h1>
              <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 1 }}
                className={`h-1 rounded-full mb-6 bg-gradient-to-r ${gradient}`} />
            </motion.div>

            <AnimatePresence mode="wait">
              {!showButtons && (
                <motion.div key={currentStep} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="mb-8">
                  <div className="min-h-[100px] flex items-center justify-center lg:justify-start">
                    <p className="text-xl md:text-2xl lg:text-2xl font-light leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-cyan-400 dark:to-emerald-400">
                      {displayText}<span className="animate-pulse ml-1 text-cyan-500 dark:text-emerald-400">|</span>
                    </p>
                  </div>

                  {isComplete && (currentStep < narrative.length - 1 ? (
                    <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} onClick={nextStep}
                      className="mt-6 px-6 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 dark:from-cyan-500 dark:to-emerald-500 text-white dark:text-gray-900 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/20 dark:shadow-cyan-500/20">
                      Tap to continue
                    </motion.button>
                  ) : (
                    <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} onClick={nextStep}
                      className="mt-6 px-8 py-3 bg-gradient-to-r from-rose-500 to-fuchsia-500 rounded-full text-base font-medium hover:scale-105 transition-all duration-300 shadow-xl shadow-rose-500/30 hover:shadow-fuchsia-500/40 text-white dark:text-gray-900">
                      Let's Begin
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showButtons && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: "easeOut" }} className="space-y-4">
                  {actions.map((action, i) => (
                    <motion.button key={action.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={action.onClick}
                      className={`w-full p-6 bg-gradient-to-r ${action.gradient} rounded-2xl shadow-xl hover:shadow-lg ${action.hover} transition-all duration-300 border ${action.className}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-white/40 dark:bg-white/20 backdrop-blur-sm rounded-xl transition-colors">
                            {action.icon}
                          </div>
                          <div className="text-left">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{action.title}</h3>
                            <p className="text-sm text-gray-800 dark:text-gray-200">{action.subtitle}</p>
                          </div>
                        </div>
                        <div className="text-2xl text-gray-700 dark:text-white/60 transition-all">→</div>
                      </div>
                    </motion.button>
                  ))}

                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
                    className="flex justify-center lg:justify-start space-x-4 mt-8 pt-6 border-t border-white/10">
                    {socials.map((social, i) => (
                      <motion.a key={social.label} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} href={social.href} onClick={social.onClick}
                        target={social.href ? "_blank" : undefined} rel="noopener noreferrer"
                        className="p-3 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 group shadow-sm"
                        title={social.label}>
                        {social.icon}
                      </motion.a>
                    ))}
                  </motion.div>

                  <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} onClick={() => scrollTo("about")}
                    className="mt-6 text-sm text-indigo-600 dark:text-cyan-400 hover:text-indigo-800 dark:hover:text-cyan-300 transition-colors font-medium">
                    or scroll to explore traditionally ↓
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

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

export default Hero;