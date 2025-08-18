import React, { useState, useEffect, useRef } from "react";
import {
  Search, BookOpen, PenTool, Settings, TestTube, RefreshCw,
  GitMerge, Code2, ArrowRight
} from "lucide-react";

const steps = [
  {
    id: "commit-01", icon: Search, title: "ZoomIn()",
    desc: "Understand the core problem before writing a single line of code.",
    details: "Frame the problem: goals, stakeholders, constraints. Ask the right questions early.",
    color: "yellow"
  },
  {
    id: "commit-02", icon: BookOpen, title: "DigDeep()",
    desc: "Gather context—user needs, system constraints, edge cases.",
    details: "Read docs, audit systems, and surface root causes and risks.",
    color: "cyan"
  },
  {
    id: "commit-03", icon: PenTool, title: "MapIt()",
    desc: "Sketch the logic, flow, and structure before implementation.",
    details: "Pseudocode, quick diagrams, acceptance criteria. Clarity before complexity.",
    color: "green"
  },
  {
    id: "commit-04", icon: Settings, title: "BuildSmart()",
    desc: "Write modular, clean code with tools that scale.",
    details: "Performance, readability, and maintainability drive every decision.",
    color: "orange"
  },
  {
    id: "commit-05", icon: TestTube, title: "TestEverything()",
    desc: "Test for behavior, not just bugs.",
    details: "Unit/integration tests and observability ensure it works as users expect.",
    color: "pink"
  },
  {
    id: "commit-06", icon: RefreshCw, title: "RefineFast()",
    desc: "Ship, monitor, and iterate based on real feedback.",
    details: "Software isn't done until it runs well in the wild.",
    color: "purple"
  }
];

const MyApproach = () => {
  const [hovered, setHovered] = useState(null);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(new Set());
  const timelineRef = useRef(null);
  const stepsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const rect = timelineRef.current?.getBoundingClientRect();
      if (!rect) return;
      const scrolled = Math.max(0, -rect.top);
      const height = rect.height - window.innerHeight;
      setProgress(Math.min(100, (scrolled / height) * 100));

      stepsRef.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.8 && r.bottom > 0)
          setVisible(prev => new Set(prev).add(i));
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = id =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-[#0d1117] py-20 px-4 overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px"
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10" ref={timelineRef}>
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <Code2 className="w-5 h-5 text-green-600 dark:text-green-400" />
            <span className="text-sm font-mono text-gray-600 dark:text-gray-500">// PROCESS PIPELINE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-mono">
            <span className="text-gray-600 dark:text-gray-500">const</span> myApproach{" "}
            <span className="text-gray-600 dark:text-gray-500">=</span>{" "}
            <span className="text-yellow-600 dark:text-yellow-400">[</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-sans">
            How I tackle problems, from concept to production
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-300 dark:bg-gray-800 md:-translate-x-1/2">
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-green-500 via-cyan-500 to-purple-500 dark:from-green-400 dark:via-cyan-400 dark:to-purple-400 transition-all duration-300 ease-out"
              style={{ height: `${progress}%` }}
            />
          </div>

          {steps.map(({ id, icon: Icon, title, desc, details, color }, i) => {
            const isLeft = i % 2 === 0;
            const active = visible.has(i);
            const hover = hovered === i;
            const col = `text-${color}-400 dark:text-${color}-400`;
            const border = `border-${color}-400/30 dark:border-${color}-400/30`;
            const bg = `bg-${color}-400 dark:bg-${color}-400`;
            const glow = `shadow-${color}-400/20 dark:shadow-${color}-400/20`;

            return (
              <div
                key={id}
                ref={el => (stepsRef.current[i] = el)}
                className={`relative flex items-center mb-12 md:mb-16 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`flex-1 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"} pl-20 md:pl-0`}>
                  <div
                    className={`bg-white dark:bg-[#161b22] border ${border} rounded-lg p-6 transform transition-all duration-500
                    ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} 
                    ${hover ? `shadow-lg ${glow}` : ""}`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                      <span className={`font-mono text-sm ${col}`}>#{id}</span>
                      <Icon className={`w-5 h-5 ${col} ${hover ? "animate-pulse" : ""}`} />
                    </div>
                    <h3 className={`text-xl font-mono font-bold text-gray-900 dark:text-white mb-2 ${isLeft ? "md:text-right" : ""}`}>
                      {title}
                    </h3>
                    <p className={`text-gray-600 dark:text-gray-400 text-sm mb-3 ${isLeft ? "md:text-right" : ""}`}>{desc}</p>
                    <p className={`text-gray-500 dark:text-gray-500 text-xs ${isLeft ? "md:text-right" : ""}`}>{details}</p>
                  </div>
                </div>

                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 z-10">
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${border} ${active ? bg : "bg-gray-50 dark:bg-[#0d1117]"}
                    transform transition-all duration-500 ${hover ? "scale-150" : ""}`}
                  >
                    {hover && <div className={`absolute inset-0 rounded-full ${bg} animate-ping`} />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-mono">
            <span className="text-yellow-600 dark:text-yellow-400">]</span>
            <span className="text-gray-600 dark:text-gray-500">;</span>
          </h2>
        </div>

        <div className="text-center">
          <button
            onClick={() => scrollToSection("projects")}
            className="group inline-flex items-center gap-3 px-8 py-4 font-mono rounded-lg bg-transparent
            border-2 border-green-300/60 dark:border-teal-400/30 hover:border-green-400 dark:hover:border-teal-300
            hover:shadow-lg hover:shadow-green-400/20 dark:hover:shadow-teal-500/20 transform hover:scale-105 transition-all duration-300
            text-green-600 dark:text-teal-300 hover:text-green-700 dark:hover:text-teal-200"
          >
            <GitMerge className="w-5 h-5 text-green-500/80 dark:text-teal-300/90" />
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 dark:from-teal-300 dark:to-cyan-400 bg-clip-text text-transparent">
              Want To See It In Action?
            </span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-green-500 dark:text-teal-300/90" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyApproach;