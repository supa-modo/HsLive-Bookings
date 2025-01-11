import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, X, Menu, MousePointerClick } from "lucide-react";
import BookingModal from "./BookingModal";
import { Link } from "react-router-dom";
import { TbHandFinger } from "react-icons/tb";

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-700 pl-4 hover:text-primary-600 transition-colors duration-300 text-base sm:text-lg font-semibold relative group font-poppins"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full" />
  </a>
);

const PageLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-700 hover:text-primary-600 transition-colors duration-300 text-base sm:text-lg font-semibold relative group font-open-sans"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full" />
  </Link>
);

const Navigation = ({ scrolled, isMenuOpen, setIsMenuOpen }) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md py-1 shadow-lg"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo and Branding */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img
                src="/logo.png"
                alt="Luxury Private Jet"
                className="h-16 w-16 sm:h-20 sm:w-20"
              />
              <span className="bg-gradient-to-r from-primary-900 via-primary-700 to-primary-900 bg-clip-text text-transparent text-xl sm:text-2xl font-bold">
                Shine Luxury Private Jets
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/#services">Services</NavLink>
              <NavLink href="/#destinations">Destinations</NavLink>
              <NavLink href="/#contact">Contact Us</NavLink>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-primary-600 text-white px-6 sm:px-8 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-primary-500/20"
              >
                Book Now
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-900 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 backdrop-blur-md rounded-b-2xl border-t border-gray-200"
            >
              <div className="flex flex-col container mx-auto px-6 sm:px-8 py-6 space-y-4">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/#services">Services</NavLink>
                <NavLink href="/#destinations">Destinations</NavLink>
                <NavLink href="/#contact">Contact Us</NavLink>
                <button
                  onClick={() => {
                    setIsBookingModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center space-x-3 bg-primary-600 text-white px-6 py-3 rounded-xl text-[15px] font-medium hover:bg-primary-700 transform hover:scale-105 transition-all duration-300"
                >
                  {/* <TbHandFinger size={18} /> */}
                  <MousePointerClick />
                  <span>Book Now</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
};

export default Navigation;
