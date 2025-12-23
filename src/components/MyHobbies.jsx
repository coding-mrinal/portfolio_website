import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MyHobbies = () => {
  const photographyRef = useRef(null);
  const drawingRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const photographyImages = [
    { id: 1, src: '/photographs/photo1.jpeg', alt: 'Mountain Landscape' },
    { id: 2, src: '/photographs/photo2.jpeg', alt: 'Urban Architecture' },
    { id: 3, src: '/photographs/photo3.jpeg', alt: 'Portrait Photography' },
    { id: 4, src: '/photographs/photo4.jpeg', alt: 'Macro Detail' },
    { id: 5, src: '/photographs/photo5.jpeg', alt: 'Street Photography' },
    { id: 6, src: '/photographs/photo6.jpeg', alt: 'Sunset Scene' },
    { id: 7, src: '/photographs/photo7.jpeg', alt: 'Abstract Art' },
    { id: 8, src: '/photographs/photo8.jpeg', alt: 'Wildlife Shot' },
    { id: 9, src: '/photographs/photo9.jpeg', alt: 'Night Photography' },
    { id: 10, src: '/photographs/photo10.jpeg', alt: 'Fashion Photography' },
  ];

  const drawingImages = [
    { id: 1, src: '/drawings/drawing1.jpeg', alt: 'Pencil Portrait' },
    { id: 2, src: '/drawings/drawing2.jpeg', alt: 'Digital Art' },
    { id: 3, src: '/drawings/drawing3.jpeg', alt: 'Watercolor Landscape' },
    { id: 4, src: '/drawings/drawing4.jpeg', alt: 'Charcoal Sketch' },
    { id: 5, src: '/drawings/drawing5.jpeg', alt: 'Ink Illustration' },
    { id: 6, src: '/drawings/drawing6.jpeg', alt: 'Pastel Drawing' },
    { id: 7, src: '/drawings/drawing7.jpeg', alt: 'Oil Painting' },
  ];

  const scrollGallery = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = ref.current.offsetWidth * 0.8;
      const currentScroll = ref.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? Math.max(0, currentScroll - scrollAmount) 
        : currentScroll + scrollAmount;
      
      ref.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const HobbySection = ({ title, images, scrollRef, type }) => {
    const isPhotography = type === 'photography';
    const accentColor = isPhotography 
      ? 'bg-gradient-to-r from-blue-500 to-teal-400' 
      : 'bg-gradient-to-r from-purple-500 to-pink-400';
    const buttonColor = isPhotography 
      ? 'bg-blue-500 hover:bg-blue-600' 
      : 'bg-purple-500 hover:bg-purple-600';
    
    return (
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {title}
            </h3>
            <div className={`w-3 h-3 rounded-full ${accentColor}`}></div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scrollGallery(scrollRef, 'left')}
              className={`p-3 rounded-full text-white ${buttonColor} transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105`}
              aria-label={`Scroll ${title} left`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scrollGallery(scrollRef, 'right')}
              className={`p-3 rounded-full text-white ${buttonColor} transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105`}
              aria-label={`Scroll ${title} right`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide scroll-smooth pb-4 snap-x snap-mandatory gap-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitScrollbar: { display: 'none' }
            }}
          >
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-80 snap-start"
              >
                <div
                  onClick={() => setSelectedImage({ ...image, type })}
                  className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="font-bold text-lg">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white/80 dark:from-gray-800/80 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white/80 dark:from-gray-800/80 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          My Creative Pursuits
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-2 text-balance">
          Beyond coding, I find creative expression through photography and drawing. 
          These hobbies help me see the world from different perspectives and fuel my creativity in development.
        </p>
      </motion.div>

      <div className="space-y-16">
        {/* Photography Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20"
        >
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 pl-2 flex items-center gap-2">
            <span className="text-2xl">📸</span>
            Click on any image for a better view
          </p>
          <HobbySection
            title="Photography"
            images={photographyImages}
            scrollRef={photographyRef}
            type="photography"
          />
        </motion.div>

        {/* Drawing Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-800/80 dark:to-gray-900/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/20"
        >
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6 pl-2 flex items-center gap-2">
            <span className="text-2xl">✏️</span>
            Click on any artwork for a better view
          </p>
          <HobbySection
            title="Drawing"
            images={drawingImages}
            scrollRef={drawingRef}
            type="drawing"
          />
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt="Enlarged view"
                className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="absolute top-4 left-4 text-white bg-black/70 backdrop-blur-sm rounded-xl px-4 py-2">
                <p className="font-bold text-lg">{selectedImage.alt}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/70 backdrop-blur-sm rounded-full p-3 hover:bg-black/90 transition-all duration-300 shadow-lg hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Navigation buttons */}
              <button
                onClick={() => {
                  const currentImages = selectedImage.type === 'photography' ? photographyImages : drawingImages;
                  const currentIndex = currentImages.findIndex(img => img.id === selectedImage.id);
                  const prevIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
                  setSelectedImage({ ...currentImages[prevIndex], type: selectedImage.type });
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/70 backdrop-blur-sm rounded-full p-3 hover:bg-black/90 transition-all duration-300 shadow-lg hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => {
                  const currentImages = selectedImage.type === 'photography' ? photographyImages : drawingImages;
                  const currentIndex = currentImages.findIndex(img => img.id === selectedImage.id);
                  const nextIndex = (currentIndex + 1) % currentImages.length;
                  setSelectedImage({ ...currentImages[nextIndex], type: selectedImage.type });
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/70 backdrop-blur-sm rounded-full p-3 hover:bg-black/90 transition-all duration-300 shadow-lg hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbarWidth: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default MyHobbies;