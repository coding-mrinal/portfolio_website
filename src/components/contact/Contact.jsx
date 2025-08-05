import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin
} from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="relative min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl dark:bg-blue-400"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl dark:bg-purple-400"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-20 relative z-10 flex-grow w-full max-w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500">Touch</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
            >
              Have a project in mind or want to discuss opportunities? Feel free to reach out!
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form Section */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
                Send me a message
              </h3>
              <ContactForm />
            </motion.div>
            
            {/* Contact Info Section */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
                Contact Information
              </h3>
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ y: -3 }}
                  className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-blue-400/50 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-1 text-white">
                    <FaEnvelope className="text-lg" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Email</h4>
                    <a 
                      href="mailto:mrinalmahapatra2004@gmail.com" 
                      className="text-sm sm:text-base md:text-lg text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                    >
                      mrinalmahapatra2004@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -3 }}
                  className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-blue-400/50 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-1 text-white">
                    <FaMapMarkerAlt className="text-lg" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Location</h4>
                    <p className="text-sm sm:text-base md:text-lg text-gray-800 dark:text-white">Kolkata, India</p>
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  <motion.a 
                    whileHover={{ y: -3 }}
                    href="https://github.com/coding-mrinal" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-blue-400/50 transition-all shadow-sm hover:shadow-md"
                  >
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-1 text-white">
                      <FaGithub className="text-lg" />
                    </div>
                    <div className="overflow-hidden whitespace-nowrap">
                      <h4 className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">GitHub</h4>
                      <span className="text-sm sm:text-base md:text-lg text-gray-800 dark:text-white truncate">github.com/coding-mrinal</span>
                    </div>
                  </motion.a>
                  
                  <motion.a 
                    whileHover={{ y: -3 }}
                    href="https://www.linkedin.com/in/mrinal-mahapatra/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-blue-400/50 transition-all shadow-sm hover:shadow-md"
                  >
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-1 text-white">
                      <FaLinkedin className="text-lg" />
                    </div>
                    <div className="overflow-hidden whitespace-nowrap">
                      <h4 className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">LinkedIn</h4>
                      <span className="text-sm sm:text-base md:text-lg text-gray-800 dark:text-white truncate">linkedin.com/in/mrinal-mahapatra</span>
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <footer className="py-4 border-t border-gray-200 dark:border-gray-800 mt-auto">
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
