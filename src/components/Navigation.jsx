import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, X, Menu } from "lucide-react";
import BookingModal from "./BookingModal";
import { Link } from "react-router-dom";

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-700 hover:text-primary-600 transition-colors duration-300 text-[17px] font-semibold relative group font-poppins"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full" />
  </a>
);
const PageLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-700 hover:text-primary-600 transition-colors duration-300 text-[16px] font-semibold relative group font-open-sans"
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
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="Luxury Private Jet"
                className="text-primary-600 h-24 w-24"
              />
              <span className="bg-gradient-to-r from-primary-900 via-primary-700 to-primary-900 bg-clip-text text-transparent text-2xl font-bold">
                Shine Luxury Private Jets
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-10">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/#services">Services</NavLink>
              <NavLink href="/#destinations">Destinations</NavLink>
              {/* <PageLink to={"/fleet"}>Jet Fleet</PageLink> */}
              <NavLink href="/#contact">Contact Us</NavLink>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-primary-600 text-white px-8 py-2.5 rounded-full text-base font-medium hover:bg-primary-600 transition-colors duration-300 shadow-lg hover:shadow-primary-500/20 transform "
              >
                Book Now
              </motion.button>
            </div>

            <button
              className="md:hidden text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 mt-4"
            >
              <div className="container mx-auto px-6 py-6 space-y-6">
                <NavLink href="/#services">Services</NavLink>
                <NavLink href="/#destinations">Destinations</NavLink>
                <Link
                  to="/fleet"
                  className="text-gray-700 hover:text-primary-600 transition-colors duration-300"
                >
                  Fleet
                </Link>
                <NavLink href="/#contact">Contact</NavLink>
                <button
                  onClick={() => {
                    setIsBookingModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-primary-700 transform hover:scale-105 transition-all duration-300"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
};

export default Navigation;
