import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, Building2, ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Certifications = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const certifications = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'January 2024',
      credentialId: 'AWS-12345-67890',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
      verifyLink: '#',
      skills: ['Cloud Architecture', 'AWS', 'Infrastructure'],
    },
    {
      id: 2,
      title: 'Professional Scrum Master I',
      issuer: 'Scrum.org',
      date: 'December 2023',
      credentialId: 'PSM-98765-43210',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      verifyLink: '#',
      skills: ['Agile', 'Scrum', 'Project Management'],
    },
    {
      id: 3,
      title: 'Meta Front-End Developer',
      issuer: 'Meta',
      date: 'November 2023',
      credentialId: 'META-11111-22222',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
      verifyLink: '#',
      skills: ['React', 'JavaScript', 'CSS'],
    },
    {
      id: 4,
      title: 'Google Data Analytics Certificate',
      issuer: 'Google',
      date: 'October 2023',
      credentialId: 'GOOG-33333-44444',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      verifyLink: '#',
      skills: ['Data Analysis', 'SQL', 'Tableau'],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Certifications
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="pb-16"
          >
            {certifications.map((cert, index) => (
              <SwiperSlide key={cert.id} className="!w-[350px]">
                <CertificationCard cert={cert} isActive={index === activeIndex} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-cyan-500/20 hover:bg-white dark:hover:bg-cyan-500/40 backdrop-blur-sm text-slate-700 dark:text-white p-3 rounded-full transition-all duration-300 hover:scale-110 group shadow-lg border border-slate-200 dark:border-transparent">
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-cyan-500/20 hover:bg-white dark:hover:bg-cyan-500/40 backdrop-blur-sm text-slate-700 dark:text-white p-3 rounded-full transition-all duration-300 hover:scale-110 group shadow-lg border border-slate-200 dark:border-transparent">
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// Certification Card Component
const CertificationCard = ({ cert, isActive }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 shadow-xl hover:shadow-cyan-500/20"
    >
      {/* Certificate Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-500/10 dark:to-blue-500/10">
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-white/50 dark:via-slate-900/50 to-transparent"></div>
        
        {/* Award Icon Badge */}
        <div className="absolute top-4 right-4 bg-white/80 dark:bg-cyan-500/20 backdrop-blur-md p-2 rounded-full border border-cyan-200 dark:border-cyan-500/50">
          <Award className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
        </div>
      </div>

      {/* Certificate Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 min-h-[56px]">
          {cert.title}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
            <Building2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span className="text-sm">{cert.issuer}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
            <Calendar className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span className="text-sm">{cert.date}</span>
          </div>
        </div>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {cert.skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-xs rounded-full border border-cyan-200 dark:border-cyan-500/20"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Credential ID */}
        <div className="mb-4 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700/50">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Credential ID</p>
          <p className="text-sm text-slate-700 dark:text-slate-200 font-mono">{cert.credentialId}</p>
        </div>

        {/* Verify Button */}
        <a
          href={cert.verifyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 group"
        >
          <span>Verify Certificate</span>
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

export default Certifications;