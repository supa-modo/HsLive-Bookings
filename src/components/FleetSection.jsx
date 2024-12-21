import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";
import FleetDetailsModal from "./FleetDetailsModal";

import jet1 from "../assets/images/jet1.png";
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
    description: "Perfect for shorter trips and small groups, our Midsize Jet offers exceptional comfort and efficiency. Ideal for business executives and small groups seeking a premium travel experience.",
    amenities: "Wi-Fi, Refreshments, Comfortable seating, Entertainment system",
    additionalInfo: [
      "Ideal for domestic and short international flights",
      "Spacious cabin with standing room",
      "Generous baggage capacity",
      "Cost-effective for small groups"
    ]
  },
  {
    id: 2,
    name: "Super Midsize Jet",
    category: "Premium Package",
    image: jet1,
    capacity: "9-12",
    range: "Up to 7 hours flight time",
    description: "Experience superior comfort and range with our Super Midsize Jet. Perfect for larger groups and longer flights, offering enhanced amenities and more cabin space.",
    amenities: "Full refreshment center, Enhanced entertainment, Premium catering, Satellite phone",
    additionalInfo: [
      "Suitable for transcontinental flights",
      "Stand-up cabin with enhanced comfort",
      "Large baggage compartment",
      "Separate lavatory area"
    ]
  },
  {
    id: 3,
    name: "Heavy Jet",
    category: "Executive Package",
    image: jet8,
    capacity: "19",
    range: "Up to 10 hours flight time",
    description: "The ultimate in luxury air travel, our Heavy Jet provides unmatched comfort and capabilities. Perfect for large groups, long-distance flights, and those demanding the very best.",
    amenities: "Master suite, Multiple living areas, Gourmet kitchen, Advanced entertainment systems",
    additionalInfo: [
      "Intercontinental flight capability",
      "Multiple cabin zones",
      "Full-service galley",
      "Private bedroom available",
      "Conference facilities"
    ]
  }
];

const FleetCard = ({ fleet, onViewDetails }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
  >
    <div className="relative h-64 overflow-hidden">
      <img
        src={fleet.image}
        alt={fleet.name}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{fleet.name}</h3>
        <p className="text-gray-200">{fleet.category}</p>
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Users className="text-primary-600" />
        <span className="text-gray-600">Up to {fleet.capacity} passengers</span>
      </div>
      <p className="text-gray-600 mb-6 line-clamp-2">{fleet.description}</p>
      <div className="flex justify-between items-center">
        <button
          onClick={() => onViewDetails(fleet)}
          className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300 group"
        >
          <span>View Details</span>
          <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  </motion.div>
);

const FleetSection = () => {
  const [selectedFleet, setSelectedFleet] = useState(null);

  return (
    <section id="fleet" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Premium Fleet
          </h2>
          <p className="text-gray-600">
            Experience luxury and comfort with our diverse fleet of private jets.
            Each aircraft is maintained to the highest standards of safety and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleetData.map((fleet) => (
            <FleetCard
              key={fleet.id}
              fleet={fleet}
              onViewDetails={(fleet) => setSelectedFleet(fleet)}
            />
          ))}
        </div>
      </div>

      <FleetDetailsModal
        isOpen={!!selectedFleet}
        onClose={() => setSelectedFleet(null)}
        fleet={selectedFleet}
      />
    </section>
  );
};

export default FleetSection;
