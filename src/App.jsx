import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import CurrentlyLearning from './components/CurrentlyLearning';
import Education from './components/Education';
import Projects from './components/projects/Projects';
import ContactForm from './components/contact/Contact';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedTech, setSelectedTech] = useState(null);
  const mainRef = useRef(null);

  // Force scroll to top on component mount and setup event listeners
  useEffect(() => {
    // Scroll to top on initial load
    window.scrollTo(0, 0);
    
    const sections = ['home', 'about', 'skills', 'learning', 'education', 'technologies', 'projects', 'contact'];
    
    // Keyboard navigation handler for both arrow keys and directional navigation
    const handleKeyDown = (e) => {
      const currentIndex = sections.indexOf(activeSection);
      
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        let nextIndex = currentIndex;
        
        // Vertical navigation (up/down)
        if (e.key === 'ArrowDown') {
          nextIndex = Math.min(currentIndex + 1, sections.length - 1);
        } else if (e.key === 'ArrowUp') {
          nextIndex = Math.max(currentIndex - 1, 0);
        } 
        // Horizontal navigation (left/right)
        else if (e.key === 'ArrowRight') {
          nextIndex = Math.min(currentIndex + 1, sections.length - 1);
        } else if (e.key === 'ArrowLeft') {
          nextIndex = Math.max(currentIndex - 1, 0);
        }
        
        if (nextIndex !== currentIndex) {
          const nextSection = sections[nextIndex];
          setActiveSection(nextSection);
          document.getElementById(nextSection)?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Scroll handler
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Add event listeners
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 ease-in-out w-full">
        {/* Skip to Content Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:dark:bg-gray-800 focus:px-4 focus:py-2 focus:rounded focus:shadow-lg transition-colors duration-300"
        >
          Skip to main content
        </a>

        <Navbar activeSection={activeSection} />
        
        {/* Main content wrapper with id for better scroll control */}
        <div id="main-content" ref={mainRef}>
          <section id="home" className="min-h-screen w-full">
            <Hero />
          </section>
          
          <section id="about" className="py-20 w-full transition-colors duration-300">
            <About />
          </section>
          
          <section id="skills" className="py-20 w-full bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
            <Skills />
          </section>
          
          <section id="projects" className="py-20 w-full transition-colors duration-300">
            <Projects filter={selectedTech} setFilter={setSelectedTech} />
          </section>

          <section id="learning" className="py-20 w-full transition-colors duration-300">
            <CurrentlyLearning />
          </section>

          <section id="education" className="py-20 w-full bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
            <Education />
          </section>
          
          <section id="contact" className="py-20 w-full bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
            <ContactForm />
          </section>
        </div>

        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;