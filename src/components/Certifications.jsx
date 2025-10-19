import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  Calendar,
  Building2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const Certifications = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Certification data remains the same...
  const certifications = [
    {
      id: 1,
      title: "Artificial Intelligence: Search Methods for Problem Solving",
      issuer: "SWAYAM NPTEL",
      date: "October 2024",
      image: "/certificates/nptel_ai.jpg",
      verifyLink:
        "https://drive.google.com/file/d/1vgtu4GQ2fpUkxBcW070me5AcNn0ndmwc/view?usp=sharing",
      skills: [
        "Introduction to Artificial Intelligence",
        "Searching Algorithms",
      ],
    },
    {
      id: 2,
      title: "Python With Django",
      issuer: "Ardent Computech Pvt Ltd.",
      date: "February 2024",
      image: "/certificates/python_django.jpg",
      verifyLink:
        "https://drive.google.com/file/d/1rMRF1poS55OqKqNe_M5yODXGN8zcXDrS/view?usp=sharing",
      skills: ["Python", "Backend Development", "API"],
    },
    {
      id: 3,
      title: "Data Structures",
      issuer: "UC San Diego (Coursera)",
      date: "November 2023",
      image: "/certificates/coursera_dsa.jpg",
      verifyLink:
        "https://drive.google.com/file/d/1s82ZKfupss3O-uF7Sap_SwD4r_aO8gIH/view?usp=sharing",
      skills: ["Data Structures", "Java", "Algorithms", "Problem Solving"],
    },
    {
      id: 4,
      title: "Soft Computing Techniques",
      issuer: "SWAYAM NPTEL",
      date: "April 2025",
      credentialId: "META-11111-22222",
      image: "/certificates/soft_computing.jpg",
      verifyLink:
        "https://drive.google.com/file/d/1L52aRCbTEPrD5s_UABVZO9qzMV-v3xN6/view?usp=sharing",
      skills: ["Mathematics", "Computation", "Neural Networks"],
    },
    {
      id: 5,
      title: "AI Foundations Associate",
      issuer: "Oracle",
      date: "October 2025",
      credentialId: "GOOG-33333-44444",
      image: "/certificates/oracle_ai.jpg",
      verifyLink:
        "https://drive.google.com/file/d/16iG9UFMNtujmVEg3b7xzvyx3rxIY7iAv/view?usp=sharing",
      skills: ["AI", "Deep Learning"],
    },
  ];

  return (
    // UPDATED: Responsive vertical padding
    <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          // UPDATED: Responsive bottom margin
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            {/* <Award className="w-8 h-8 text-cyan-600 dark:text-cyan-400" /> */}
            {/* UPDATED: Responsive heading font size */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Certifications
            </h2>
          </div>
          {/* UPDATED: Responsive paragraph font size */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Professional certifications that validate my expertise
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
            loop={true}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            // UPDATED: Set mobile-first defaults
            slidesPerView={1}
            spaceBetween={20}
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
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              // UPDATED: Removed 320 breakpoint (it's now the default)
              // 320: { ... }
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
            // UPDATED: Responsive bottom padding for pagination
            className="pb-12 md:pb-16"
          >
            {certifications.map((cert, index) => (
              // UPDATED: Removed fixed width class "!w-[350px]"
              <SwiperSlide key={cert.id}>
                <CertificationCard
                  cert={cert}
                  isActive={index === activeIndex}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          {/* UPDATED: Responsive padding */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-cyan-500/20 hover:bg-white dark:hover:bg-cyan-500/40 backdrop-blur-sm text-slate-700 dark:text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 group shadow-lg border border-slate-200 dark:border-transparent">
            {/* UPDATED: Responsive icon size */}
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          {/* UPDATED: Responsive padding */}
          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-cyan-500/20 hover:bg-white dark:hover:bg-cyan-500/40 backdrop-blur-sm text-slate-700 dark:text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 group shadow-lg border border-slate-200 dark:border-transparent">
            {/* UPDATED: Responsive icon size */}
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
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
      </div>

      {/* Certificate Details */}
      {/* UPDATED: Responsive padding */}
      <div className="p-4 sm:p-6">
        {/* UPDATED: Responsive font size */}
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 min-h-[56px]">
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

        {/* Verify Button */}
        <a
          href={cert.verifyLink}
  target="_blank"
  rel="noopener noreferrer"
  className={`relative flex items-center justify-center gap-2 w-full bg-gradient-to-r ${cert.color} text-white font-semibold py-3.5 rounded-xl transition-all duration-300 group/button before:absolute before:top-0 before:left-0 before:w-4 before:h-4 before:border-t-2 before:border-l-2 before:border-white after:absolute after:bottom-0 after:right-0 after:w-4 after:h-4 after:border-b-2 after:border-r-2 after:border-white`}
>
          <span>View Certificate</span>
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

export default Certifications;
