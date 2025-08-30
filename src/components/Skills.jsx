import { useState, useEffect, useRef } from 'react';
import {
  FaJava, FaPython, FaReact, FaDatabase, FaServer, FaCode, FaLaptopCode, FaChartLine,
  FaChartBar, FaGlobe
} from 'react-icons/fa';
import {
  SiCplusplus, SiMongodb, SiPandas, SiNumpy, SiScikitlearn, SiJupyter,
  SiGooglecolab, SiVercel, SiGithub, SiIntellijidea, SiC, SiNodedotjs, SiExpress
} from 'react-icons/si';
import { DiMysql } from 'react-icons/di';
import { BsFiletypeHtml, BsFiletypeCss } from 'react-icons/bs';
import { VscJson } from 'react-icons/vsc';
import { IoLogoJavascript } from 'react-icons/io5';

const Skills = () => {
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [showSkillsGrid, setShowSkillsGrid] = useState(false);
  const terminalRef = useRef(null);

  const skillsData = {
    'Programming & Scripting': [
      ['C', <SiC />, 'blue'],
      ['C++', <SiCplusplus />, 'blue'],
      ['Java', <FaJava />, 'orange'],
      ['Python', <FaPython />, 'yellow']
    ],
    'Frontend Development': [
      ['HTML5', <BsFiletypeHtml />, 'orange'],
      ['CSS3', <BsFiletypeCss />, 'blue'],
      ['JavaScript', <IoLogoJavascript />, 'yellow'],
      ['ReactJS', <FaReact />, 'sky']
    ],
    'Backend Development': [
      ['NodeJS', <SiNodedotjs />, 'green'],
      ['ExpressJS', <SiExpress />, 'gray'],
      ['RESTful APIs', <VscJson />, 'emerald']
    ],
    'Data Science & ML': [
      ['NumPy', <SiNumpy />, 'blue'],
      ['Pandas', <SiPandas />, 'indigo'],
      ['Matplotlib', <FaChartLine />, 'purple'],
      ['Seaborn', <FaChartBar />, 'violet'],
      ['Scikit-Learn', <SiScikitlearn />, 'amber']
    ],
    'Databases & Storage': [
      ['MySQL', <DiMysql />, 'blue'],
      ['MongoDB', <SiMongodb />, 'green']
    ],
    'Tools & Platforms': [
      ['VS Code', <span className="font-bold text-blue-600 dark:text-blue-400">VS</span>, ''],
      ['Jupyter Notebook', <SiJupyter />, 'orange'],
      ['Google Colab', <SiGooglecolab />, 'yellow'],
      ['IntelliJ IDEA', <SiIntellijidea />, 'purple'],
      ['Vercel', <SiVercel />, 'gray'],
      ['GitHub', <SiGithub />, 'gray']
    ],
    'Core CS Subjects': [
      ['DSA', <FaCode />, 'cyan'],
      ['OOP', <FaLaptopCode />, 'purple'],
      ['OS', <FaServer />, 'emerald'],
      ['DBMS', <FaDatabase />, 'teal'],
      ['CN', <FaGlobe />, 'sky']
    ]
  };

  const commands = {
    'show skills': () => {
      setShowSkillsGrid(true);
      return ['> LOADING SKILLS VISUALIZATION...'];
    },
    'help': () => [
      "> AVAILABLE COMMANDS:",
      "  show skills        - Display technical skills",
      "  show projects      - View portfolio projects",
      "  show approach      - View development approach",
      "  clear              - Clear terminal",
      "  help               - Show this help menu"
    ],
    'clear': () => {
      setTerminalOutput(getInitialOutput());
      return [];
    },
    'show projects': () => {
      setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), 800);
      return ['> LOADING PROJECTS...'];
    },
    'show approach': () => {
      setTimeout(() => document.getElementById('approach')?.scrollIntoView({ behavior: 'smooth' }), 800);
      return ['> LOADING MY APPROACH...'];
    }
  };

  const getInitialOutput = () => [
    "> SYSTEM INITIALIZED",
    "> USER_ACCESS: GRANTED",
    "> TERMINAL READY",
    "> TYPE 'help' FOR COMMANDS"
  ];

  const getColorClass = (color) => {
    if (!color) return '';
    const colors = {
      blue: 'text-blue-600 dark:text-blue-400',
      orange: 'text-orange-600 dark:text-orange-400',
      yellow: 'text-yellow-500 dark:text-yellow-300',
      sky: 'text-sky-600 dark:text-sky-400',
      green: 'text-green-600 dark:text-green-400',
      gray: 'text-gray-800 dark:text-gray-200',
      emerald: 'text-emerald-600 dark:text-emerald-400',
      indigo: 'text-indigo-700 dark:text-indigo-300',
      purple: 'text-purple-600 dark:text-purple-400',
      violet: 'text-violet-600 dark:text-violet-400',
      amber: 'text-amber-600 dark:text-amber-400',
      cyan: 'text-cyan-600 dark:text-cyan-400',
      teal: 'text-teal-600 dark:text-teal-400'
    };
    return colors[color] || '';
  };

  useEffect(() => {
    setTerminalOutput(getInitialOutput());
  }, []);

  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
  }, [terminalOutput]);

  const executeCommand = (cmd) => {
    const command = cmd.trim().toLowerCase();
    const handler = commands[command];
    
    if (handler) {
      const output = handler();
      if (output.length) setTerminalOutput(prev => [...prev, ...output]);
    } else {
      setTerminalOutput(prev => [...prev, 
        `> COMMAND NOT RECOGNIZED: ${cmd}`,
        ...commands['help']()
      ]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (currentCommand) {
        setTerminalOutput(prev => [...prev, `> ${currentCommand}`]);
        executeCommand(currentCommand);
        setCurrentCommand('');
      } else {
        setTerminalOutput(prev => [...prev, '>']);
      }
    }
  };

  const SkillCard = ({ name, icon, color }) => (
    <div className="flex flex-col items-center p-4 rounded-xl bg-white dark:bg-gray-700/50 border border-gray-100 dark:border-gray-700/50 shadow-sm
                    transition-all duration-300 hover:shadow-md hover:border-cyan-300 dark:hover:border-cyan-700">
      <div className={`text-3xl mb-2 ${getColorClass(color)}`}>{icon}</div>
      <span className="text-sm font-medium text-center text-gray-700 dark:text-gray-200">{name}</span>
    </div>
  );

  const CategoryCard = ({ category, skills }) => (
    <div className="rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                    bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900
                    border border-gray-200 dark:border-gray-700">
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30">
        <h4 className="text-xl font-bold text-gray-800 dark:text-white">{category}</h4>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4">
          {skills.map(([name, icon, color]) => (
            <SkillCard key={name} name={name} icon={icon} color={color} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-green-400 font-mono scroll-mt-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-cyan-700 dark:text-cyan-400 mb-2">
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          [INTERACTIVE TERMINAL INTERFACE v2.0]
        </p>
      </div>

      <div 
        className="border-2 border-cyan-700 dark:border-cyan-500 rounded-lg bg-gray-100 dark:bg-black bg-opacity-80 dark:bg-opacity-80 p-4 h-[500px] overflow-y-auto shadow-lg shadow-cyan-500/20 dark:shadow-cyan-500/10"
        onClick={() => document.getElementById('terminal-input')?.focus()}
        ref={terminalRef}
      >
        <div className="mb-4">
          {terminalOutput.map((line, index) => (
            <div key={index} className="mb-1 whitespace-pre-wrap">{line}</div>
          ))}
        </div>

        <div className="flex items-center">
          <span className="text-cyan-700 dark:text-cyan-400 mr-2">{'>'}</span>
          <input
            id="terminal-input"
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyPress={handleKeyPress}
            className="bg-transparent border-none outline-none flex-grow text-gray-900 dark:text-green-400 caret-cyan-700 dark:caret-cyan-400"
          />
          <span className="ml-1 w-2 h-5 bg-cyan-700 dark:bg-cyan-400 animate-pulse" />
        </div>
      </div>

      <div className="mt-6 text-center text-gray-600 dark:text-gray-400 text-sm">
        <p>SYSTEM STATUS: <span className="text-green-600 dark:text-green-400">ONLINE</span> | USER: <span className="text-cyan-700 dark:text-cyan-400">DEVELOPER</span></p>
        <p className="mt-2">TIP: Try typing <span className="text-cyan-700 dark:text-cyan-400">show skills</span> to explore my technical expertise</p>
      </div>

      {showSkillsGrid && (
        <div className="mt-12 animate-fadeIn grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {Object.entries(skillsData).map(([category, skills]) => (
            <CategoryCard key={category} category={category} skills={skills} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Skills;