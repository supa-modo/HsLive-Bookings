import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, X, Menu } from "lucide-react";

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-800 hover:text-primary-600 transition-colors duration-300 text-base font-semibold tracking-wide relative group font-poppins"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full" />
  </a>
);

const Navigation = ({ scrolled, isMenuOpen, setIsMenuOpen }) => {
  return (
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
            <span className="text-gray-800 text-2xl font-bold">
              Shine Luxury Private Jets
            </span>
          </div>

          <div className="hidden md:flex  items-center space-x-10">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#fleet">Fleet</NavLink>
            <NavLink href="#destinations">Destinations</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <button className="bg-primary-600 text-white px-8 py-2.5 rounded-full text-base font-medium hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-primary-500/20">
              Book Now
            </button>
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
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#fleet">Fleet</NavLink>
              <NavLink href="#destinations">Destinations</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <button className="w-full bg-primary-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-primary-700">
                Book Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
