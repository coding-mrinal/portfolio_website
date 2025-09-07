import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const MyHobbies = () => {
  const photographyRef = useRef(null);
  const drawingRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const photographyImages = [
    { id: 1, src: '/photographs/photo1.jpeg' },
    { id: 2, src: '/photographs/photo2.jpeg' },
    { id: 3, src: '/photographs/photo3.jpeg' },
    { id: 4, src: '/photographs/photo4.jpeg' },
    { id: 5, src: '/photographs/photo5.jpeg' },
    { id: 6, src: '/photographs/photo6.jpeg' },
    { id: 7, src: '/photographs/photo7.jpeg' },
    { id: 8, src: '/photographs/photo8.jpeg' },
    { id: 9, src: '/photographs/photo9.jpeg' },
    { id: 10, src: '/photographs/photo10.jpeg' },
  ];

  const drawingImages = [
    { id: 1, src: '/drawings/drawing1.jpeg' },
    { id: 2, src: '/drawings/drawing2.jpeg' },
    { id: 3, src: '/drawings/drawing3.jpeg' },
    { id: 4, src: '/drawings/drawing4.jpeg' },
    { id: 5, src: '/drawings/drawing5.jpeg' },
    { id: 6, src: '/drawings/drawing6.jpeg' },
    { id: 7, src: '/drawings/drawing7.jpeg' },
  ];

  const scrollGallery = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = ref.current.offsetWidth;
      const currentScroll = ref.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
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
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h3>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scrollGallery(scrollRef, 'left')}
              className={`p-2 rounded-full text-white ${buttonColor} transition-colors shadow-md`}
              aria-label={`Scroll ${title} left`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scrollGallery(scrollRef, 'right')}
              className={`p-2 rounded-full text-white ${buttonColor} transition-colors shadow-md`}
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
            className="flex overflow-x-auto scrollbar-hide scroll-smooth pb-4 snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitScrollbar: { display: 'none' }
            }}
          >
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-full snap-start px-2"
              >
                <div
                  onClick={() => setSelectedImage({ ...image, type })}
                  className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-full md:w-[calc(100vw-200px)] lg:w-[600px] mx-auto">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 md:h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="font-semibold text-lg">{image.alt}</p>
                        <p className="text-sm text-gray-200">
                          {type === 'photography' ? image.category : image.medium}
                        </p>
                      </div>
                    </div>
                    <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-semibold text-white ${isPhotography ? 'bg-blue-500' : 'bg-purple-500'}`}>
                      {type === 'photography' ? image.category : image.medium}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gradient overlays for visual cue */}
          <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent pointer-events-none" />
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          My Creative Pursuits
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
          Beyond coding, I find creative expression through photography and drawing. 
          These hobbies help me see the world from different perspectives and fuel my creativity in development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Photography Section */}
        <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-2xl shadow-lg">
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-md mb-4 pl-2">
            Click for better view
          </p>
          <HobbySection
            title="Photography"
            images={photographyImages}
            scrollRef={photographyRef}
            type="photography"
          />
        </div>

        {/* Drawing Section */}
        <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-2xl shadow-lg">
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-md mb-4 pl-2">
            Click for better view
          </p>
          <HobbySection
            title="Drawing"
            images={drawingImages}
            scrollRef={drawingRef}
            type="drawing"
          />
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/70 rounded-full p-2 hover:bg-black transition-colors shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
          </motion.div>
        </motion.div>
      )}

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default MyHobbies;