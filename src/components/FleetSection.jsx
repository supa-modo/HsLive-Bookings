import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Clock,
  ArrowRight,
  Compass,
  Shield,
  WifiHigh,
  Wine,
  Timer,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

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
    image: jet5,
    capacity: "7-8",
    range: "Up to 5 hours flight time",
    description:
      "Perfect for shorter trips and small groups, our Midsize Jet offers exceptional comfort and efficiency. Ideal for business executives and small groups seeking a premium travel experience.",
    amenities: "Wi-Fi, Refreshments, Comfortable seating, Entertainment system",
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
    image: jet1,
    capacity: "9-12",
    range: "Up to 7 hours flight time",
    description:
      "Experience superior comfort and range with our Super Midsize Jet. Perfect for larger groups and longer flights, offering enhanced amenities and more cabin space.",
    amenities:
      "Full refreshment center, Enhanced entertainment, Premium catering, Satellite phone",
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
    image: jet8,
    capacity: "19",
    range: "Up to 10 hours flight time",
    description:
      "The ultimate in luxury air travel, our Heavy Jet provides unmatched comfort and capabilities. Perfect for large groups, long-distance flights, and those demanding the very best.",
    amenities:
      "Master suite, Multiple living areas, Gourmet kitchen, Advanced entertainment systems",
    additionalInfo: [
      "Intercontinental flight capability",
      "Multiple cabin zones",
      "Full-service galley",
      "Private bedroom available",
      "Conference facilities",
    ],
  },
];

const FleetCard = ({ fleet }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500"
      onClick={() => navigate(`/fleet/${fleet.id}`)}
    >
      <div className="relative h-64 sm:h-72 overflow-hidden">
        <motion.img
          src={fleet.image}
          alt={fleet.name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full">
          <span className="text-white text-sm font-medium">
            {fleet.category}
          </span>
        </div>
      </div>

      <div className="p-8">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {fleet.name}
          </h3>
          <p className="text-gray-600 line-clamp-2">{fleet.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-2 text-gray-700">
            <Users className="h-5 w-5 text-blue-600" />
            <span>{fleet.capacity} Passengers</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <Clock className="h-5 w-5 text-blue-600" />
            <span>{fleet.range.replace("Up to ", "")}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {fleet.amenities
            .split(", ")
            .slice(0, 3)
            .map((amenity, index) => (
              <span
                key={index}
                className="bg-gray-50 text-gray-600 px-3 py-1 rounded-full text-sm"
              >
                {amenity}
              </span>
            ))}
          {fleet.amenities.split(", ").length > 3 && (
            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
              +{fleet.amenities.split(", ").length - 3} more
            </span>
          )}
        </div>

        <div className="flex justify-between items-center border-t border-gray-100 pt-6">
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-green-600" />
            <span className="text-green-600 text-sm font-medium">
              Safety Certified
            </span>
          </div>
          <motion.button
            whileHover={{ x: 5 }}
            className="flex items-center space-x-2 text-blue-600 font-medium"
          >
            <span>Explore Details</span>
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const FleetSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Experience Luxury in the Sky
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover our meticulously maintained fleet of private jets, each
            offering unparalleled comfort and sophistication for your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {fleetData.map((fleet) => (
            <FleetCard key={fleet.id} fleet={fleet} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
