import { motion } from "framer-motion";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";
import { useState } from "react";

const fields = [
  { name: "name", label: "Your Name", type: "text", icon: FiUser, placeholder: "Rahul Kumar" },
  { name: "email", label: "Email Address", type: "email", icon: FiMail, placeholder: "rahul24@gmail.com" },
  { name: "message", label: "Your Message", type: "textarea", icon: FiMessageSquare, placeholder: "Hello, I would like to talk about..." },
];

const Alert = ({ type, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className={`mt-4 p-3 rounded ${
      type === "success"
        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
        : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
    }`}
  >
    {text}
  </motion.div>
);

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch("https://formsubmit.co/ajax/mrinalmhptr@gmail.com", {
        method: "POST",
        body: new FormData(e.target),
      });
      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else throw new Error();
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="hidden" name="_captcha" value="false" />

        {fields.map(({ name, label, type, icon: Icon, placeholder }) => (
          <div key={name}>
            <label htmlFor={name} className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">{label}</label>
            <div className="relative">
              <Icon className="absolute left-3 top-3 text-gray-500 dark:text-gray-400" />
              {type === "textarea" ? (
                <textarea
                  name={name}
                  id={name}
                  rows="5"
                  required
                  placeholder={placeholder}
                  className="pl-10 w-full rounded-lg py-3 px-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                />
              ) : (
                <input
                  type={type}
                  name={name}
                  id={name}
                  required
                  placeholder={placeholder}
                  className="pl-10 w-full rounded-lg py-3 px-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
                />
              )}
            </div>
          </div>
        ))}

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={submitting}
          className={`w-full flex justify-center items-center gap-2 py-3 px-6 rounded-lg font-medium shadow-lg transition-all ${
            submitting
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
          }`}
        >
          {submitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4zm2 5.3A8 8 0 014 12H0c0 3 1.1 5.8 3 7.9l3-2.6z" />
              </svg>
              Sending...
            </>
          ) : (
            <>
              <FiSend /> Send Message
            </>
          )}
        </motion.button>
      </form>

      {status === "success" && <Alert type="success" text="Thank you! Your message has been sent successfully." />}
      {status === "error" && <Alert type="error" text="Oops! Something went wrong. Please try again." />}
    </motion.div>
  );
}
