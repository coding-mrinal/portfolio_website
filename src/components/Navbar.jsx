import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import logoImage from '../assets/M.jpeg';

const navLinks = [
  { name: 'Home', id: 'home' }, { name: 'About', id: 'about' }, { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' }, { name: 'Education', id: 'education' }, { name: 'Contact', id: 'contact' }
];

const socialLinks = [
  { href: 'https://github.com/coding-mrinal/', icon: FiGithub },
  { href: 'https://www.linkedin.com/in/mrinal-mahapatra/', icon: FiLinkedin }
];

const Navbar = ({ activeSection, setActiveSection }) => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (sectionId, e) => {
    e?.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setMobileOpen(false);
  };

  const styles = {
    nav: `fixed w-full ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-sm z-50 shadow-lg py-4`,
    navItem: (active) => `px-2 py-1 text-sm font-medium relative focus:ring-2 focus:ring-indigo-500 ${active ? 'text-indigo-400' : darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`,
    mobileItem: (active) => `block px-4 py-3 rounded-lg text-base font-medium ${active ? darkMode ? 'bg-gray-700 text-indigo-400' : 'bg-gray-100 text-indigo-600' : darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`,
    themeBtn: `p-2 rounded-full focus:ring-2 focus:ring-indigo-500 ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`,
    socialLink: `focus:ring-2 focus:ring-indigo-500 ${darkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'}`,
    mobileMenu: `md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'}`,
    mobileSocial: `p-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`
  };

  const animations = {
    nav: { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 } },
    underline: { layoutId: "nav-underline", transition: { type: 'spring', bounce: 0.2, duration: 0.6 } },
    mobile: { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: 'auto' }, exit: { opacity: 0, height: 0 } }
  };

  const NavItem = ({ id, name, mobile = false }) => {
    const isActive = activeSection === id;
    return (
      <a 
        key={id} 
        href={`#${id}`} 
        onClick={(e) => scrollTo(id, e)} 
        className={mobile ? styles.mobileItem(isActive) : styles.navItem(isActive)}
        aria-current={isActive ? 'page' : undefined}
      >
        {name}
        {!mobile && isActive && <motion.span className="absolute left-0 top-full h-0.5 w-full bg-indigo-500" {...animations.underline} />}
      </a>
    );
  };

  const SocialLinks = ({ mobile = false }) => (
    <div className={mobile ? "flex justify-center gap-6 pt-4" : "hidden md:flex gap-4"}>
      {socialLinks.map(({ href, icon: Icon }, i) => (
        <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={mobile ? styles.mobileSocial : styles.socialLink}>
          <Icon size={20} />
        </a>
      ))}
    </div>
  );

  return (
    <motion.nav {...animations.nav} className={styles.nav}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center">
        <a href="#home" onClick={(e) => scrollTo('home', e)} className="focus:ring-2 focus:ring-indigo-500" aria-label="Home">
          <img src={logoImage} alt="M Logo" className="h-10 w-10 rounded-full" />
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => <NavItem key={link.id} {...link} />)}
        </div>
        
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className={styles.themeBtn} aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}>
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          
          <SocialLinks />

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
          <motion.div {...animations.mobile} className={styles.mobileMenu}>
            <div className="px-4 sm:px-6 py-4 space-y-3">
              {navLinks.map((link) => <NavItem key={link.id} {...link} mobile />)}
              <SocialLinks mobile />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
