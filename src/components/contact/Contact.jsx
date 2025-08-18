import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const contactData = [
    { icon: FaEnvelope, label: 'Email', value: 'mrinalmahapatra2004@gmail.com', href: 'mailto:mrinalmahapatra2004@gmail.com', span: 2 },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Kolkata, India', span: 2 },
    { icon: FaGithub, label: 'GitHub', value: 'github.com/coding-mrinal', href: 'https://github.com/coding-mrinal', span: 1 },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/mrinal-mahapatra', href: 'https://www.linkedin.com/in/mrinal-mahapatra/', span: 1 }
  ];

  const animations = {
    container: { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.8 }, viewport: { once: true } },
    title: { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, viewport: { once: true } },
    subtitle: { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.1 }, viewport: { once: true } },
    form: { initial: { opacity: 0, x: -20 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.5, delay: 0.2 }, viewport: { once: true } },
    info: { initial: { opacity: 0, x: 20 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.5, delay: 0.3 }, viewport: { once: true } }
  };

  const styles = {
    section: "relative min-h-screen bg-white dark:bg-gray-900 flex flex-col",
    background: "absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-10",
    blob1: "absolute top-20 left-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl dark:bg-blue-400",
    blob2: "absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl dark:bg-purple-400",
    container: "container mx-auto px-4 sm:px-6 py-20 relative z-10 flex-grow w-full max-w-full",
    title: "text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white",
    gradient: "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500",
    subtitle: "text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto",
    sectionTitle: "text-2xl font-semibold mb-6 text-gray-800 dark:text-white",
    card: "flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-blue-400/50 transition-all shadow-sm hover:shadow-md",
    icon: "p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-1 text-white",
    label: "text-xs sm:text-sm text-gray-500 dark:text-gray-400",
    value: "text-sm sm:text-base md:text-lg text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors",
    footer: "py-4 border-t border-gray-200 dark:border-gray-800 mt-auto"
  };

  const ContactCard = ({ item, index }) => {
    const Component = item.href ? motion.a : motion.div;
    const props = item.href ? { href: item.href, target: "_blank", rel: "noopener noreferrer" } : {};
    
    return (
      <Component
        {...props}
        whileHover={{ y: -3 }}
        className={`${styles.card} ${item.span === 1 ? '' : 'sm:col-span-2'}`}
      >
        <div className={styles.icon}>
          <item.icon className="text-lg" />
        </div>
        <div className={item.span === 1 ? "overflow-hidden whitespace-nowrap" : ""}>
          <h4 className={styles.label}>{item.label}</h4>
          <span className={`${styles.value} ${item.span === 1 ? 'truncate' : item.label === 'Email' ? 'break-all' : ''}`}>
            {item.value}
          </span>
        </div>
      </Component>
    );
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.background}>
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
      </div>

      <div className={styles.container}>
        <motion.div {...animations.container}>
          <div className="text-center mb-16">
            <motion.h2 {...animations.title} className={styles.title}>
              Get In <span className={styles.gradient}>Touch</span>
            </motion.h2>
            <motion.p {...animations.subtitle} className={styles.subtitle}>
              Have a project in mind or want to discuss opportunities? Feel free to reach out!
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div {...animations.form} className="order-2 lg:order-1">
              <h3 className={styles.sectionTitle}>Send me a message</h3>
              <ContactForm />
            </motion.div>
            
            <motion.div {...animations.info} className="order-1 lg:order-2">
              <h3 className={styles.sectionTitle}>Contact Information</h3>
              <div className="space-y-6">
                {contactData.slice(0, 2).map((item, index) => (
                  <ContactCard key={index} item={item} index={index} />
                ))}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  {contactData.slice(2).map((item, index) => (
                    <ContactCard key={index + 2} item={item} index={index + 2} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <footer className={styles.footer}>
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2025 Mrinal Mahapatra. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
