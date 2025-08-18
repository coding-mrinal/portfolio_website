import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';

const ContactForm = () => {
  const [data, setData] = useState({name:'', email:'', message:''});
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const validate = () => {
    const e = {};
    if(!data.name.trim()) e.name = 'Name is required';
    if(!data.email.trim()) e.email = 'Email is required';
    else if(!/^\S+@\S+\.\S+$/.test(data.email)) e.email = 'Please enter a valid email';
    if(!data.message.trim()) e.message = 'Message is required';
    return e;
  }

  const onChange = ({target:{name,value}}) => {
    setData(s => ({...s,[name]:value}));
    if(errors[name]) setErrors(s => ({...s,[name]:''}));
  }

  const onSubmit = async e => {
    e.preventDefault();
    const validationErrors = validate();
    if(Object.keys(validationErrors).length){ setErrors(validationErrors); return; }
    setSubmitting(true);
    setStatus(null);
    try{
      const r = await fetch('YOUR_BACKEND_ENDPOINT',{
        method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data)
      });
      if(r.ok){
        setStatus('success');
        setData({name:'', email:'', message:''});
      } else throw new Error('failed');
    }catch{
      setStatus('error');
    }
    setSubmitting(false);
  }

  const inputClass = field => `pl-10 w-full rounded-lg py-3 px-4 border ${errors[field] ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white`;

  return(
    <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="max-w-lg mx-auto">
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Your Name</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><FiUser className="text-gray-500 dark:text-gray-400"/></div>
            <input name="name" id="name" value={data.name} onChange={onChange} className={inputClass('name')} placeholder="John Doe" />
          </div>
          {errors.name && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Email Address</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><FiMail className="text-gray-500 dark:text-gray-400"/></div>
            <input type="email" name="email" id="email" value={data.email} onChange={onChange} className={inputClass('email')} placeholder="john@example.com" />
          </div>
          {errors.email && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Your Message</label>
          <div className="relative">
            <div className="absolute top-3 left-3"><FiMessageSquare className="text-gray-500 dark:text-gray-400"/></div>
            <textarea id="message" name="message" rows="5" value={data.message} onChange={onChange} className={inputClass('message')} placeholder="Hello, I would like to talk about..."></textarea>
          </div>
          {errors.message && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.message}</p>}
        </div>

        <div>
          <motion.button type="submit" whileHover={{scale:1.02}} whileTap={{scale:0.98}} disabled={submitting} className={`w-full flex justify-center items-center gap-2 py-3 px-6 rounded-lg font-medium ${submitting? 'bg-blue-400 dark:bg-blue-500 cursor-not-allowed' : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'} shadow-lg transition-all`}>
            {submitting ? <><svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Sending...</> : <><FiSend /> Send Message</>}
          </motion.button>
        </div>

        {status==='success' && <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg text-green-800 dark:text-green-300">Thank you! Your message has been sent successfully.</motion.div>}
        {status==='error' && <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg text-red-800 dark:text-red-300">Oops! Something went wrong. Please try again later.</motion.div>}
      </form>
    </motion.div>
  );
}
export default ContactForm;