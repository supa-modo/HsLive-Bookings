import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSection = ({ currentSlide, setCurrentSlide, heroImages }) => {
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  return (
    <div className="relative h-[75vh]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ 
            duration: 1.2,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="absolute inset-0"
        >
          <img
            src={heroImages[currentSlide].url}
            alt="Luxury Private Jet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-1/2 left-4 right-4 flex justify-between items-center transform translate-y-1/2 z-10">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full hover:bg-white  hover:scale-110 transition-all duration-300"
        >
          <ChevronLeft className="h-8 w-8 text-gray-400" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full  hover:bg-white hover:scale-110 transition-all duration-300"
        >
          <ChevronRight className="h-8 w-8 text-gray-400" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 transition-all duration-300 rounded-full ${
              currentSlide === index
                ? "w-8 bg-primary-600"
                : "w-2 bg-gray-400 hover:bg-gray-600"
            }`}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-6 h-full flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut"
            }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              {heroImages[currentSlide].title}
              <span className="block text-primary-600">
                {heroImages[currentSlide].subtitle}
              </span>
            </h1>
            <p className="text-gray-700 text-xl mb-8 leading-relaxed">
              {heroImages[currentSlide].description}
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="bg-primary-600 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-primary-700 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-primary-500/20">
                <span>Book Your Flight</span>
                <ChevronRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-gray-300 text-gray-900 px-10 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-all duration-300">
                Explore Fleet
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroSection;
