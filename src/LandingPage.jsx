import React from "react";
import { motion } from "framer-motion";
import plane from "/plane.png";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <motion.div
        className="w-4 h-4 bg-blue-400 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="w-4 h-4 bg-blue-300 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.2,
        }}
      />
      <motion.div
        className="w-4 h-4 bg-blue-200 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.4,
        }}
      />
    </div>
  );
};

const LandingPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-sky-100 to-blue-200 flex items-center justify-center overflow-hidden">
      {/* Sophisticated Airplane Background */}
      <motion.div
        className="absolute top-0 left-0 right-0 bottom-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.05, 0.1, 0.08],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="text-blue-500 w-full"
        >
          <path
            fill="currentColor"
            fillOpacity="0.1"
            d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,101.3C672,96,768,128,864,154.7C960,181,1056,203,1152,202.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320L192,320L96,320L0,320Z"
          />
        </svg>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/90 backdrop-blur-lg rounded-2xl p-10 shadow-2xl max-w-xl mx-auto border border-blue-100/50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex justify-center"
          >
            <img
              src={plane}
              className="text-blue-600 drop-shadow-lg w-28" alt="planeLogo"
            />
          </motion.div>

          <h1 className="text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900">
            Shine Luxury Private Jets
          </h1>
          <h2 className="text-2xl font-semibold mb-6 text-blue-700 tracking-wide">
            Private Jet Consultancy
          </h2>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 120,
            }}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-xl inline-block shadow-lg"
          >
            <div className="flex items-center justify-center space-x-3">
              <p className="text-xl font-bold">Website In Development</p>
              <LoadingSpinner />
            </div>
          </motion.div>

          <div className="mt-8 text-gray-600 space-y-2">
            <p className="text-sm font-medium">
              Coming Soon: Luxury Private Jet Charters
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <a
                href="tel:+255743060660"
                className="hover:text-blue-600 transition-colors flex items-center space-x-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+255 743 060 660</span>
              </a>
              <a
                href="mailto:joebiseko@gmail.com"
                className="hover:text-blue-600 transition-colors flex items-center space-x-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>joebiseko@gmail.com</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
