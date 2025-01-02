import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Users, Clock, ArrowRight, Shield, Star, Plane } from "lucide-react";
import BookingModal from "../components/BookingModal";
import Navigation from "../components/Navigation";

import jet1 from "../assets/images/jet1.jpg";
import jet2 from "../assets/images/jet2.jpg";
import jet3 from "../assets/images/jet3.jpeg";
import jet4 from "../assets/images/jet4.jpg";
import jet5 from "../assets/images/jet5.jpg";
import jet6 from "../assets/images/jet6.jpg";
import jet7 from "../assets/images/jet7.jpg";
import jet8 from "../assets/images/jet8.jpg";
import jet9 from "../assets/images/jet9.jpg";
import { FleetCard } from "../components/FleetSection";

const fleetData = [
  {
    id: 1,
    name: "Midsize Jet",
    category: "Standard Package",
    image: jet2,
    capacity: "7-8",
    range: "Up to 5 hours flight time",
    description:
      "Perfect for shorter trips and small groups, our Midsize Jet offers exceptional comfort and efficiency. Ideal for business executives and small groups seeking a premium travel experience.",
    amenities: "Wi-Fi, Refreshments, Comfortable seating, Entertainment system",
    price: "Starting from $4,500/hour",
  },
  {
    id: 2,
    name: "Super Midsize Jet",
    category: "Premium Package",
    image: jet8,
    capacity: "9-12",
    range: "Up to 7 hours flight time",
    description:
      "Experience superior comfort and range with our Super Midsize Jet. Perfect for larger groups and longer flights, offering enhanced amenities and more cabin space.",
    amenities:
      "Full refreshment center, Enhanced entertainment, Premium catering, Satellite phone",
    price: "Starting from $6,500/hour",
  },
  {
    id: 3,
    name: "Heavy Jet",
    category: "Executive Package",
    image: jet6,
    capacity: "19",
    range: "Up to 10 hours flight time",
    description:
      "The ultimate in luxury air travel, our Heavy Jet provides unmatched comfort and capabilities. Perfect for large groups, long-distance flights, and those demanding the very best.",
    amenities:
      "Master suite, Multiple living areas, Gourmet kitchen, Advanced entertainment systems",
    price: "Starting from $8,500/hour",
  },
  {
    id: 4,
    name: "Light Jet",
    category: "Standard Package",
    image: jet4,
    capacity: "6-7",
    range: "Up to 4 hours flight time",
    description:
      "Our Light Jet offers the perfect balance of comfort and efficiency for shorter trips. Ideal for small groups and quick business trips.",
    amenities: "Wi-Fi, Refreshments, Comfortable seating",
    price: "Starting from $3,500/hour",
  },
  {
    id: 5,
    name: "Ultra Long Range Jet",
    category: "Executive Package",
    image: jet9,
    capacity: "14-16",
    range: "Up to 14 hours flight time",
    description:
      "For those who demand the absolute best in luxury air travel. Our Ultra Long Range Jet offers unmatched comfort and capabilities for intercontinental flights.",
    amenities:
      "Master bedroom, Multiple living areas, Conference room, Gourmet kitchen",
    price: "Starting from $12,500/hour",
  },
  {
    id: 6,
    name: "Regional Jet",
    category: "Premium Package",
    image: jet7,
    capacity: "10-12",
    range: "Up to 6 hours flight time",
    description:
      "The perfect choice for regional travel, offering exceptional comfort and reliability for medium-range flights.",
    amenities:
      "Enhanced entertainment, Premium catering, Satellite communications",
    price: "Starting from $5,500/hour",
  },
];

const Fleet = () => {
  const navigate = useNavigate();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1
                className="text-3xl md:text-5xl font-extrabold font-sans bg-gradient-to-r from-gray-700 via-primary-700 to-gray-600 bg-clip-text text-transparent mb-4"
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
                Explore Our Luxury Fleet
                <span className="block text-2xl font-sans text-red-500  pt-3">
                  Experience Unparalleled Comfort
                </span>
              </motion.h1>
              <motion.p
                className="text-gray-600 font-nunito-sans font-bold text-xl mb-8 leading-relaxed"
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
                Choose from our diverse range of meticulously maintained private
                jets, each offering unique features and capabilities to match
                your specific needs.
              </motion.p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {fleetData.map((fleet) => (
              <FleetCard key={fleet.id} fleet={fleet} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-all duration-300"
              >
                Book Now
              </button>
              <button
                onClick={() => {
                  navigate("/#contact");
                }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-xl font-medium hover:bg-primary-50 transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
          <BookingModal
            isOpen={isBookingModalOpen}
            onClose={() => setIsBookingModalOpen(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Fleet;
