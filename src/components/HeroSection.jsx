import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BookingModal from "./BookingModal";

const HeroSection = ({ currentSlide, setCurrentSlide, heroImages }) => {
  const navigate = useNavigate();
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Preload images for smoother transitions
  React.useEffect(() => {
    heroImages.forEach((image) => {
      const img = new Image();
      img.src = image.url;
    });
  }, [heroImages]);

  return (
    <div className="relative h-[50vh] sm:h-[80vh] overflow-hidden bg-gray-50">
      {/* Background layer with subtle pattern */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] bg-[length:24px_24px]" />

      {/* Image carousel */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={currentSlide}>
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={(next) => ({
              scale: 1.2,
              opacity: 0,
              transformOrigin: next ? "right center" : "left center",
            })}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                duration: 1.2,
                ease: [0.45, 0, 0.55, 1],
              },
            }}
            exit={(next) => ({
              scale: 0.9,
              opacity: 0,
              transformOrigin: next ? "left center" : "right center",
              transition: {
                duration: 1.2,
                ease: [0.45, 0, 0.55, 1],
              },
            })}
          >
            <motion.div
              className="relative h-full w-full"
              initial={false}
              animate={{
                scale: 1.1,
              }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <img
                src={heroImages[currentSlide].url}
                alt={heroImages[currentSlide].title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Enhanced gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-gray-50" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/20 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <div className="absolute inset-x-4 top-1/2 flex justify-between items-center -translate-y-1/2 z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={prevSlide}
          className="p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors duration-300 group"
        >
          <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8 text-white group-hover:text-white/90" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextSlide}
          className="p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors duration-300 group"
        >
          <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8 text-white group-hover:text-white/90" />
        </motion.button>
      </div>

      {/* Progress indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 sm:space-x-4 z-10">
        {heroImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group relative h-2 focus:outline-none"
            whileHover={{ scale: 1.2 }}
          >
            <div
              className={`h-2 rounded-full transition-all duration-500 ${
                currentSlide === index
                  ? "w-8 sm:w-12 bg-white"
                  : "w-2 bg-white/50 group-hover:bg-white/70"
              }`}
            />
          </motion.button>
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-screen-2xl mx-auto px-3 pt-20 sm:px-6 h-full flex items-center z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            exit={{
              opacity: 0,
              y: -40,
              transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="max-w-[54rem]"
          >
            <motion.h1
              className="text-4xl sm:text-6xl md:text-8xl mt-4 font-extrabold font-open-sans text-primary-600/70 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.5,
                  ease: "easeOut",
                },
              }}
            >
              {heroImages[currentSlide].title}
              <span className="block text-red-500/80 pt-1 sm:pt-2">
                {heroImages[currentSlide].subtitle}
              </span>
            </motion.h1>
            <motion.p
              className="rounded-xl backdrop-blur-sm px-1 text-sm md:text-xl text-gray-700 font-sans font-semibold mb-4 sm:mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.7,
                  ease: "easeOut",
                },
              }}
            >
              {heroImages[currentSlide].description}
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.9,
                  ease: "easeOut",
                },
              }}
            >
              <motion.button
                onClick={() => setIsBookingModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-500 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full text-[13px] sm:text-lg font-medium hover:bg-primary-600 transition-colors duration-300 flex items-center space-x-2 shadow-lg shadow-primary-500/20"
              >
                <span>Book Your Jet Today</span>
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/fleet")}
                className="bg-white/40 backdrop-blur-md text-gray-600 border-2 border-gray-200 px-6 sm:px-10 py-3 sm:py-4 rounded-full text-[13px] sm:text-lg font-bold font-nunito-sans hover:bg-white/20 transition-colors duration-300"
              >
                Explore Services
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
};

export default HeroSection;