import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Users, Clock, ArrowRight, Shield, Star, Plane } from "lucide-react";
import BookingModal from "../components/BookingModal";

import jet1 from "../assets/images/jet1.jpg";
import jet2 from "../assets/images/jet2.jpg";
import jet3 from "../assets/images/jet3.jpeg";
import jet4 from "../assets/images/jet4.jpg";
import jet5 from "../assets/images/jet5.jpg";
import jet6 from "../assets/images/jet6.jpg";
import jet7 from "../assets/images/jet7.jpg";
import jet8 from "../assets/images/jet8.jpg";
import jet9 from "../assets/images/jet9.jpg";

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
    amenities: "Full refreshment center, Enhanced entertainment, Premium catering, Satellite phone",
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
    amenities: "Master suite, Multiple living areas, Gourmet kitchen, Advanced entertainment systems",
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
    amenities: "Master bedroom, Multiple living areas, Conference room, Gourmet kitchen",
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
    amenities: "Enhanced entertainment, Premium catering, Satellite communications",
    price: "Starting from $5,500/hour",
  },
];

const FleetCard = ({ fleet }) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={fleet.image}
          alt={fleet.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="absolute top-4 right-4">
          <div className="bg-white/10 backdrop-blur-md px-4 py-1 rounded-full">
            <span className="text-white font-bold">{fleet.category}</span>
          </div>
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
          {fleet.name}
        </h3>
        <p className="text-gray-600 mb-6 line-clamp-2">{fleet.description}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-primary-600" />
            <span className="text-gray-700">{fleet.capacity} Passengers</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-primary-600" />
            <span className="text-gray-700">{fleet.range}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {fleet.amenities.split(", ").slice(0, 3).map((amenity, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
            >
              {amenity}
            </span>
          ))}
          {fleet.amenities.split(", ").length > 3 && (
            <span className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm">
              +{fleet.amenities.split(", ").length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
          <div className="text-primary-600 font-bold">{fleet.price}</div>
          <div className="flex items-center space-x-4">
            {/* <button
              onClick={() => setIsBookingModalOpen(true)}
              className="inline-flex items-center space-x-2 text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300"
            >
              <span>Book Now</span>
              <Plane className="h-5 w-5" />
            </button> */}
            <Link
              to={`/fleet/${fleet.id}`}
              className="inline-flex items-center space-x-2 text-primary-600 font-medium hover:text-primary-700 transition-colors duration-300"
            >
              <span>View Details</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
      <BookingModal
        isOpen={isBookingModalOpen}
        setIsOpen={setIsBookingModalOpen}
      />
    </motion.div>
  );
};

const Fleet = () => {
  const navigate = useNavigate();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Luxury Fleet
              <span className="block text-primary-600 text-2xl mt-2">
                Experience Unparalleled Comfort
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Choose from our diverse range of meticulously maintained private jets,
              each offering unique features and capabilities to match your specific needs.
            </p>
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
                navigate('/#contact');
              }}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-xl font-medium hover:bg-primary-50 transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
        <BookingModal
          isOpen={isBookingModalOpen}
          setIsOpen={setIsBookingModalOpen}
        />
      </div>
    </div>
  );
};

export default Fleet;
