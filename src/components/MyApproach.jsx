import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, GitCommit, Terminal, Search, BookOpen, PenTool, Settings, TestTube, RefreshCw, GitMerge, Code2, ArrowRight } from 'lucide-react';

const MyApproach = () => {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const timelineRef = useRef(null);
  const stepsRef = useRef([]);

  const steps = [
    {
      id: 'commit-01',
      icon: Search,
      title: 'ZoomIn()',
      description: 'Understand the core problem before writing a single line of code.',
      details: 'Frame the problem: goals, stakeholders, constraints. Ask the right questions early.',
      color: 'text-yellow-400 dark:text-yellow-400',
      borderColor: 'border-yellow-400/30 dark:border-yellow-400/30',
      glowColor: 'shadow-yellow-400/20 dark:shadow-yellow-400/20',
      bgReplace: 'bg-yellow-400 dark:bg-yellow-400'
    },
    {
      id: 'commit-02',
      icon: BookOpen,
      title: 'DigDeep()',
      description: 'Gather context—user needs, system constraints, edge cases.',
      details: 'Read docs, audit systems, and surface root causes and risks.',
      color: 'text-cyan-400 dark:text-cyan-400',
      borderColor: 'border-cyan-400/30 dark:border-cyan-400/30',
      glowColor: 'shadow-cyan-400/20 dark:shadow-cyan-400/20',
      bgReplace: 'bg-cyan-400 dark:bg-cyan-400'
    },
    {
      id: 'commit-03',
      icon: PenTool,
      title: 'MapIt()',
      description: 'Sketch the logic, flow, and structure before implementation.',
      details: 'Pseudocode, quick diagrams, acceptance criteria. Clarity before complexity.',
      color: 'text-green-400 dark:text-green-400',
      borderColor: 'border-green-400/30 dark:border-green-400/30',
      glowColor: 'shadow-green-400/20 dark:shadow-green-400/20',
      bgReplace: 'bg-green-400 dark:bg-green-400'
    },
    {
      id: 'commit-04',
      icon: Settings,
      title: 'BuildSmart()',
      description: 'Write modular, clean code with tools that scale.',
      details: 'Performance, readability, and maintainability drive every decision.',
      color: 'text-orange-400 dark:text-orange-400',
      borderColor: 'border-orange-400/30 dark:border-orange-400/30',
      glowColor: 'shadow-orange-400/20 dark:shadow-orange-400/20',
      bgReplace: 'bg-orange-400 dark:bg-orange-400'
    },
    {
      id: 'commit-05',
      icon: TestTube,
      title: 'TestEverything()',
      description: 'Test for behavior, not just bugs.',
      details: 'Unit/integration tests and observability ensure it works as users expect.',
      color: 'text-pink-400 dark:text-pink-400',
      borderColor: 'border-pink-400/30 dark:border-pink-400/30',
      glowColor: 'shadow-pink-400/20 dark:shadow-pink-400/20',
      bgReplace: 'bg-pink-400 dark:bg-pink-400'
    },
    {
      id: 'commit-06',
      icon: RefreshCw,
      title: 'RefineFast()',
      description: 'Ship, monitor, and iterate based on real feedback.',
      details: "Software isn't done until it runs well in the wild.",
      color: 'text-purple-400 dark:text-purple-400',
      borderColor: 'border-purple-400/30 dark:border-purple-400/30',
      glowColor: 'shadow-purple-400/20 dark:shadow-purple-400/20',
      bgReplace: 'bg-purple-400 dark:bg-purple-400'
    }
  ];

  // Handle scroll progress for timeline animation
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const rect = timelineRef.current.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      const height = rect.height - window.innerHeight;
      const progress = Math.min(100, (scrolled / height) * 100);
      setScrollProgress(progress);

      // Check which steps are visible
      stepsRef.current.forEach((stepEl, index) => {
        if (stepEl) {
          const stepRect = stepEl.getBoundingClientRect();
          if (stepRect.top < window.innerHeight * 0.8 && stepRect.bottom > 0) {
            setVisibleSteps(prev => new Set([...prev, index]));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-[#0d1117] py-20 px-4 overflow-hidden relative">
      {/* Grid background pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10" ref={timelineRef}>
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <Code2 className="w-5 h-5 text-green-600 dark:text-green-400" />
            <span className="text-sm font-mono text-gray-600 dark:text-gray-500">// PROCESS PIPELINE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 font-mono">
            <span className="text-gray-600 dark:text-gray-500">const</span> myApproach <span className="text-gray-600 dark:text-gray-500">=</span> <span className="text-yellow-600 dark:text-yellow-400">[</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-sans">
            How I tackle problems, from concept to production
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Progress line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-300 dark:bg-gray-800 md:-translate-x-1/2">
            <div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-green-500 via-cyan-500 to-purple-500 dark:from-green-400 dark:via-cyan-400 dark:to-purple-400 transition-all duration-300 ease-out"
              style={{ height: `${scrollProgress}%` }}
            ></div>
          </div>

          {/* Steps */}
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isHovered = hoveredStep === index;
            const isVisible = visibleSteps.has(index);
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                ref={el => stepsRef.current[index] = el}
                className={`relative flex items-center mb-12 md:mb-16 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-20 md:pl-0`}>
                  <div
                    className={`
                      bg-white dark:bg-[#161b22] border ${step.borderColor} rounded-lg p-6
                      transform transition-all duration-500
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                      ${isHovered ? `shadow-lg ${step.glowColor}` : ''}
                    `}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    {/* Commit header */}
                    <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                      <span className={`font-mono text-sm ${step.color}`}>#{step.id}</span>
                      <Icon className={`w-5 h-5 ${step.color} ${isHovered ? 'animate-pulse' : ''}`} />
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl font-mono font-bold text-gray-900 dark:text-white mb-2 ${isLeft ? 'md:text-right' : ''}`}>
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-gray-600 dark:text-gray-400 text-sm mb-3 ${isLeft ? 'md:text-right' : ''}`}>
                      {step.description}
                    </p>

                    {/* Details */}
                    <p className={`text-gray-500 dark:text-gray-500 text-xs ${isLeft ? 'md:text-right' : ''}`}>
                      {step.details}
                    </p>
                  </div>
                </div>

                {/* Timeline node */}
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 z-10">
                  <div className={`
                    w-4 h-4 rounded-full border-2 ${step.borderColor}
                    ${isVisible ? step.bgReplace : 'bg-gray-50 dark:bg-[#0d1117]'}
                    transform transition-all duration-500
                    ${isHovered ? 'scale-150' : ''}
                  `}>
                    {isHovered && (
                      <div className={`absolute inset-0 rounded-full ${step.bgReplace} animate-ping`}></div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing bracket */}
        <div className="text-center mt-12 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-mono">
            <span className="text-yellow-600 dark:text-yellow-400">]</span><span className="text-gray-600 dark:text-gray-500">;</span>
          </h2>
        </div>

        {/* Merge to Projects button */}
        <div className="text-center">
          <button
  onClick={() => scrollToSection('projects')}
  className="
    group inline-flex items-center gap-3 px-8 py-4 
    font-mono rounded-lg bg-transparent
    border-2 border-green-300/60 dark:border-teal-400/30
    hover:border-green-400 dark:hover:border-teal-300
    hover:shadow-lg hover:shadow-green-400/20 dark:hover:shadow-teal-500/20
    transform hover:scale-105 transition-all duration-300
    text-green-600 dark:text-teal-300
    hover:text-green-700 dark:hover:text-teal-200
  "
>
  <GitMerge className="w-5 h-5 text-green-500/80 dark:text-teal-300/90" />
  <span className="bg-gradient-to-r from-green-600 to-emerald-600 dark:from-teal-300 dark:to-cyan-400 bg-clip-text text-transparent">
    Merge to Projects
  </span>
  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-green-500 dark:text-teal-300/90" />
</button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default MyApproach;