import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import logoImage from '../assets/M.jpeg';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Education', id: 'education' },
  { name: 'Contact', id: 'contact' }
];

const socialLinks = [
  { href: 'https://github.com/coding-mrinal/', icon: <FiGithub size={20} /> },
  { href: 'https://www.linkedin.com/in/mrinal-mahapatra/', icon: <FiLinkedin size={20} /> }
];

const Navbar = ({ activeSection, setActiveSection }) => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (sectionId, e) => {
    e?.preventDefault();
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setMobileOpen(false);
    setTimeout(() => element?.focus({ preventScroll: true }), 350);
  };

  const navItemClass = (id) => 
    `px-2 py-1 text-sm font-medium relative focus:ring-2 focus:ring-indigo-500 ${
      activeSection === id 
        ? 'text-indigo-400' 
        : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
    }`;

  const mobileNavItemClass = (id) =>
    `block px-4 py-3 rounded-lg text-base font-medium ${
      activeSection === id
        ? darkMode ? 'bg-gray-700 text-indigo-400' : 'bg-gray-100 text-indigo-600'
        : darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
    }`;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed w-full ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-sm z-50 shadow-lg py-4`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center">
        <a href="#home" onClick={(e) => scrollTo('home', e)} className="focus:ring-2 focus:ring-indigo-500" aria-label="Home">
          <img src={logoImage} alt="M Logo" className="h-10 w-10 rounded-full" />
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ id, name }) => (
            <a key={id} href={`#${id}`} onClick={(e) => scrollTo(id, e)} className={navItemClass(id)} aria-current={activeSection === id ? 'page' : undefined}>
              {name}
              {activeSection === id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 top-full h-0.5 w-full bg-indigo-500"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full focus:ring-2 focus:ring-indigo-500 ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
            aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          
          <div className="hidden md:flex gap-4">
            {socialLinks.map(({ href, icon }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={`focus:ring-2 focus:ring-indigo-500 ${darkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'}`}>
                {icon}
              </a>
            ))}
          </div>

          <motion.button
            className="md:hidden p-2 rounded-full focus:ring-2 focus:ring-indigo-500"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <FiX size={24} className={darkMode ? 'text-gray-300' : 'text-gray-600'} /> : <FiMenu size={24} className={darkMode ? 'text-gray-300' : 'text-gray-600'} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
          >
            <div className="px-4 sm:px-6 py-4 space-y-3">
              {navLinks.map(({ id, name }) => (
                <a key={id} href={`#${id}`} onClick={(e) => scrollTo(id, e)} className={mobileNavItemClass(id)} aria-current={activeSection === id ? 'page' : undefined}>
                  {name}
                </a>
              ))}
              
              <div className="flex justify-center gap-6 pt-4">
                {socialLinks.map(({ href, icon }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;