import { FaCode, FaPalette, FaBookOpen, FaLaptopCode, FaCoffee, FaGithub, FaPencilAlt, FaHeadphones } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import profileImage from '../assets/profile.jpg';

const About = () => {
  const whatIDo = [
    { icon: FaLaptopCode, text: "Full-stack development with modern frameworks" },
    { icon: FaCode, text: "Building AI-powered applications" },
    { icon: FaGithub, text: "Contributing to open-source ecosystem" }
  ];

  const whoIAm = [
    { icon: FaCoffee, text: "Coffee enthusiast (still perfecting that brew)" },
    { icon: FaBookOpen, text: "Late-night reader & philosophy dabbler" },
    { icon: FaPencilAlt, text: "Sketcher & idea hoarder" },
    { icon: FaHeadphones, text: "Playlist curator for every mood" }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative order-1 lg:order-1">
            <div className="relative mx-auto w-fit">
              <div className="absolute inset-0 -m-8">
                <div className="absolute top-0 left-0 w-32 h-32 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-indigo-300 dark:bg-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30" />
              </div>

              <div className="relative">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl object-cover shadow-2xl border-2 border-white dark:border-gray-700"
                />
              </div>
            </div>
          </div>

          <div className="order-2 lg:order-2 space-y-6 mt-8 lg:mt-0">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-gray-900 dark:text-white">Explore </span>
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  Me
                </span>
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                Builder of sleek, human-friendly digital experiences.
              </p>
              
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm a developer on a continuous learning journey, passionate about creating meaningful digital solutions. Every project teaches me something new, and I love the challenge of turning complex problems into simple, elegant code.
              </p>
            </div>

            {/* Dual Sections Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {/* What I Do - Professional */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-indigo-100 dark:border-indigo-900/30">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-indigo-900 dark:text-indigo-300">
                  <FaCode className="text-indigo-600 dark:text-indigo-400" />
                  What I Do
                </h3>
                <ul className="space-y-3">
                  {whatIDo.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <item.icon className="text-indigo-500 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who I Am - Personal */}
              <div className="bg-gradient-to-br from-pink-50 to-amber-50 dark:from-pink-900/20 dark:to-amber-900/20 rounded-2xl p-6 border border-pink-100 dark:border-pink-900/30">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-pink-900 dark:text-pink-300">
                  <HiSparkles className="text-pink-600 dark:text-pink-400" />
                  Who I Am
                </h3>
                <ul className="space-y-3">
                  {whoIAm.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <item.icon className="text-pink-500 dark:text-pink-400 mt-0.5 flex-shrink-0" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Off the clock text */}
            <p className="text-base text-gray-600 dark:text-gray-400 italic mt-6 pl-4 border-l-2 border-gray-300 dark:border-gray-600">
              Off the clock? You'll find me sketching ideas, 
              obsessing over the perfect playlist for deep work, and 
              experimenting with matcha recipes I never quite perfect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;