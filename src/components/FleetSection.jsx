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
    name: "Executive Business Escape",
    category: "Premium Business Travel",
    image: jet2,
    aircraft: "Embraer Praetor 600",
    capacity: "Up to 12",
    range: "4,000 nautical miles",
    description:
      "Tailored for executives and corporate teams, offering seamless business travel with in-flight productivity features and maximum privacy.",
    amenities:
      "In-flight Wi-Fi, Concierge services, Private meeting areas, Catered Meals & Refreshments,",
    price: "Starting from $3,500/hour",
    additionalInfo: [
      "High levels of privacy for confidential discussions or strategic planning sessions.",
      "Spacious cabin with standing room",
      "Generous baggage capacity",
      "Arrange transportation to and from the airport",
    ],
  },
  {
    id: 2,
    name: "Elite Leisure Escape",
    category: "Luxury Leisure",
    image: jet8,
    capacity: "Up to 18",
    range: "7,500 nautical miles",
    description:
      "Ultimate luxury travel experience for high-net-worth individuals and families, featuring personalized service and premium amenities.",
    amenities:
      "Gourmet dining, Premium entertainment, Customizable itineraries, Luxury concierge services",
    price: "Starting from $4,500/hour",
    additionalInfo: [
      "Suitable for transcontinental flights",
      "Stand-up cabin with enhanced comfort",
      "Large baggage compartment",
      "Separate lavatory area",
    ],
  },
  {
    name: "Dignitary Prestige Transfer",
    category: "VIP Transport",
    image: jet6,
    aircraft: "Bombardier Global 7500",
    capacity: "Up to 19",
    range: "7,700 nautical miles",
    description:
      "Exclusive transportation solution for dignitaries and VIPs, ensuring privacy, security, and world-class comfort.",
    amenities:
      "Enhanced security measures, Diplomatic handling, Private suites, 24/7 dedicated support, Gourmet kitchen, Advanced entertainment systems, Luxurious seats",
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
    <section id="fleet" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className=" p-2 text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-gray-700 via-primary-600 to-gray-600 bg-clip-text text-transparent">
              Private Jet Charter Services
            </h2>

            <p className="text-base sm:text-lg text-gray-500 leading-relaxed font-semibold">
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
              Book a Service Now
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
