import {
  FaCode,
  FaBookOpen,
  FaLaptopCode,
  FaCoffee,
  FaGithub,
  FaPencilAlt,
  FaHeadphones,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import profileImage from "../assets/profile.jpg";

const About = () => {
  const whatIDo = [
    {
      icon: FaLaptopCode,
      text: "Full-stack development with modern frameworks",
    },
    { icon: FaCode, text: "Building AI-powered applications" },
    { icon: FaGithub, text: "Contributing to open-source ecosystem" },
  ];

  const whoIAm = [
    { icon: FaCoffee, text: "Coffee enthusiast (still perfecting that brew)" },
    { icon: FaBookOpen, text: "Late-night reader & philosophy dabbler" },
    { icon: FaPencilAlt, text: "Sketcher & idea hoarder" },
    { icon: FaHeadphones, text: "Playlist curator for every mood" },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Comic Title Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent comic-text">
              Explore Me
            </span>
            <div className="absolute -inset-2 bg-yellow-300 dark:bg-yellow-600 -skew-y-2 -z-10 opacity-50"></div>
          </h2>
          {/* <div className="mt-4 flex items-center justify-center gap-2">
            <div className="h-1 w-8 sm:w-12 bg-black dark:bg-white"></div>
            <HiSparkles className="text-yellow-500 text-xl sm:text-2xl" />
            <div className="h-1 w-8 sm:w-12 bg-black dark:bg-white"></div>
          </div> */}
        </div>

        {/* Manga Panel Grid */}
        <div className="comic-grid grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 auto-rows-auto md:auto-rows-[120px]">
          {/* Panel 1: Large Hero Image with Speech Bubble */}
          <div className="md:col-span-5 md:row-span-3 comic-panel group h-64 md:h-auto">
            <div className="relative h-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl border-4 border-black dark:border-white">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover grayscale-[30%] contrast-125"
              />

              {/* Halftone overlay effect */}
              {/* <div
                className="absolute inset-0 opacity-20 dark:opacity-10 mix-blend-multiply dark:mix-blend-screen pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle, black 1px, transparent 1px)`,
                  backgroundSize: "4px 4px",
                }}
              ></div> */}

              {/* Speech Bubble */}
              {/* <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white dark:bg-gray-100 rounded-2xl p-3 sm:p-4 shadow-lg border-3 border-black max-w-[160px] sm:max-w-[200px] speech-bubble">
                <p className="text-xs font-bold text-gray-900 leading-tight">
                  "Builder of sleek, human-friendly digital experiences!"
                </p>
                <div className="absolute -bottom-3 right-6 sm:right-8 w-0 h-0 border-l-[12px] border-l-transparent border-t-[16px] border-t-white dark:border-t-gray-100 border-r-[12px] border-r-transparent">
                  <div className="absolute -top-[18px] -left-[13px] w-0 h-0 border-l-[13px] border-l-transparent border-t-[18px] border-t-black border-r-[13px] border-r-transparent"></div>
                </div>
              </div> */}

              {/* Corner fold effect */}
              <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 bg-yellow-300 dark:bg-yellow-600 clip-corner"></div>
            </div>
          </div>

          {/* Panel 2: Origin Story / Description */}
          <div className="md:col-span-7 md:row-span-2 comic-panel">
            <div className="h-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-950 dark:to-purple-950 rounded-lg p-4 sm:p-6 border-4 border-black dark:border-white shadow-xl relative overflow-hidden">
              {/* Comic action lines */}
              <div className="absolute top-0 right-0 w-full h-full opacity-10">
                <div className="absolute top-1/2 left-1/2 w-[200%] h-[2px] bg-black dark:bg-white transform -translate-x-1/2 -translate-y-1/2 rotate-12"></div>
                <div className="absolute top-1/2 left-1/2 w-[200%] h-[2px] bg-black dark:bg-white transform -translate-x-1/2 -translate-y-1/2 -rotate-12"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-black uppercase mb-3 text-indigo-900 dark:text-indigo-300 comic-text">
                  Origin Story
                </h3>
                <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                  I'm a developer on a continuous learning journey, passionate
                  about creating meaningful digital solutions. Every project
                  teaches me something new, and I love the challenge of turning
                  complex problems into simple, elegant code.
                </p>
              </div>

              {/* Sound effect text */}
              {/* <div className="absolute bottom-2 right-2 text-2xl sm:text-4xl font-black text-purple-300 dark:text-purple-700 opacity-30 rotate-12 comic-text">
                CODE!
              </div> */}
            </div>
          </div>

          {/* Panel 3: What I Do */}
          <div className="md:col-span-7 md:row-span-2 comic-panel">
            <div className="h-full bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-950 dark:to-orange-950 rounded-lg p-4 sm:p-5 border-4 border-black dark:border-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-xl sm:text-2xl font-black uppercase mb-3 sm:mb-4 text-red-900 dark:text-red-300 comic-text">
                  Powers & Abilities
                </h3>

                <div className="space-y-2 sm:space-y-3 flex-1">
                  {whatIDo.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 bg-white/50 dark:bg-black/20 p-2 sm:p-3 rounded-lg border-2 border-black/20 dark:border-white/20 hover:scale-105 transition-transform"
                    >
                      <div className="bg-red-500 dark:bg-red-600 p-1.5 sm:p-2 rounded-lg flex-shrink-0 mt-0.5">
                        <item.icon className="text-white text-xs sm:text-sm" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200 flex-1 leading-tight">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comic burst effect - moved to not interfere with content */}
              {/* <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 opacity-20">
                <div className="relative w-full h-full">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 w-1 h-8 sm:w-1.5 sm:h-12 bg-yellow-400 dark:bg-yellow-600"
                      style={{
                        transform: `rotate(${i * 45}deg) translateY(-50%)`,
                        transformOrigin: "center",
                      }}
                    ></div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>

          {/* Panel 4: Who I Am */}
          <div className="md:col-span-5 md:row-span-3 comic-panel">
            <div className="h-full bg-gradient-to-br from-pink-100 to-yellow-100 dark:from-pink-950 dark:to-yellow-950 rounded-lg p-4 sm:p-6 border-4 border-black dark:border-white shadow-xl relative overflow-hidden">
              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-xl sm:text-2xl font-black uppercase mb-4 text-pink-900 dark:text-pink-300 comic-text">
                  Character Traits
                </h3>

                <div className="space-y-3 flex-1">
                  {whoIAm.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-white/50 dark:bg-black/20 p-3 rounded-lg border-2 border-black/20 dark:border-white/20 transform hover:rotate-1 transition-transform"
                    >
                      <div className="bg-pink-500 dark:bg-pink-600 p-2 rounded-lg flex-shrink-0">
                        <item.icon className="text-white text-sm" />
                      </div>
                      <span className="text-sm font-bold text-gray-800 dark:text-gray-200 flex-1">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots pattern */}
              <div
                className="absolute bottom-0 left-0 w-full h-20 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle, currentColor 2px, transparent 2px)`,
                  backgroundSize: "12px 12px",
                }}
              ></div>
            </div>
          </div>

          {/* Panel 5: Quote/Thought Bubble */}
          <div className="md:col-span-7 md:row-span-1 comic-panel">
            <div className="h-full bg-white dark:bg-gray-800 rounded-lg p-4 border-4 border-black dark:border-white shadow-xl relative overflow-hidden flex items-center">
              {/* Thought bubble clouds */}
              <div className="absolute -left-3 top-1/2 transform -translate-y-1/2">
                <div className="w-2 h-2 bg-white dark:bg-gray-800 border-2 border-black dark:border-white rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-white dark:bg-gray-800 border-2 border-black dark:border-white rounded-full ml-1 mt-0.5"></div>
              </div>

              <div className="flex-1 px-3 sm:px-4">
                <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-medium italic">
                  <span className="font-black not-italic text-yellow-600 dark:text-yellow-400">
                    OFF THE CLOCK:
                  </span>{" "}
                  You'll find me sketching ideas, obsessing over the perfect
                  playlist for deep work, and experimenting with matcha recipes
                  I never quite perfect.
                </p>
              </div>

              {/* Small decorative stars */}
              <div className="absolute top-2 right-2 text-yellow-400 text-xs">
                ✦
              </div>
              <div className="absolute bottom-2 right-3 text-pink-400 text-xs">
                ✦
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
