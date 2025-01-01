import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  Plane,
  SquareArrowOutUpLeft,
  SquareArrowOutUpRight,
  Users,
} from "lucide-react";
import BookingModal from "./BookingModal";

// Import all fleet images
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
    price: "Starting from $3,500/hour",
    additionalInfo: [
      "Ideal for domestic and short international flights",
      "Spacious cabin with standing room",
      "Generous baggage capacity",
      "Cost-effective for small groups",
    ],
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
      "Full refreshment center, Enhanced entertainment, Premium catering, Satellite phone, Wifi",
    price: "Starting from $4,500/hour",
    additionalInfo: [
      "Suitable for transcontinental flights",
      "Stand-up cabin with enhanced comfort",
      "Large baggage compartment",
      "Separate lavatory area",
    ],
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
      "Master suite, Multiple living areas, Gourmet kitchen, Advanced entertainment systems, Wifi, Luxurious seats",
    price: "Starting from $7,500/hour",
    additionalInfo: [
      "Intercontinental flight capability",
      "Multiple cabin zones",
      "Full-service galley",
      "Private bedroom available",
      "Conference facilities",
    ],
  },
];

export const FleetCard = ({ fleet }) => {
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
        <div className="mb-6">
          <h3 className="text-2xl font-extrabold bg-gradient-to-r from-primary-900 to-gray-500 bg-clip-text text-transparent mb-3 group-hover:text-primary-600 transition-colors duration-300">
            {fleet.name}
          </h3>
          <p className="text-gray-500 line-clamp-2">{fleet.description}</p>
        </div>

        <div className="flex space-x-5 md:space-x-10 mb-6">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-primary-600" />
            <span className="font-semibold text-gray-600">
              {fleet.capacity} Passengers
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-primary-600" />
            <span className="font-semibold text-gray-500">
              {/* {fleet.range.replace("Up to ", "")} */}
              {fleet.range}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-5 font-open-sans text-gray-500">
          {fleet.amenities
            .split(", ")
            .slice(0, 4)
            .map((amenity, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-500 px-3 py-1 rounded-full text-[12px]"
              >
                {amenity}
              </span>
            ))}
          {fleet.amenities.split(", ").length > 3 && (
            <span className="bg-blue-50 text-primary-600 px-2 py-1 rounded-full text-[12px]">
              +{fleet.amenities.split(", ").length - 4} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
          <div className="text-red-600 font-bold">{fleet.price}</div>
          <div className="flex items-center space-x-4">
            <Link
              to={`/fleet/${fleet.id}`}
              className="inline-flex items-center font-nunito-sans space-x-2 text-primary-600 font-bold hover:text-primary-700 transition-colors duration-300"
            >
              <span>View Details</span>
              <SquareArrowOutUpRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FleetSection = () => {
  const navigate = useNavigate();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <section id="fleet" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className=" p-2 text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-primary-800 to-gray-700 bg-clip-text text-transparent">
              Our Luxury Fleet Packages
            </h2>

            <p className="text-lg sm:text-xl text-gray-500 leading-relaxed font-semibold">
              Choose from our diverse range of packages with meticulously
              maintained private jets, each offering unique features and
              capabilities to match your specific needs and budget.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleetData.map((fleet) => (
            <FleetCard key={fleet.id} fleet={fleet} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
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
        </motion.div>
      </div>
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
};

export default FleetSection;
