import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Clock,
  Globe,
  Shield,
  Star,
  ArrowUpRight,
  ChevronLeft,
  CheckCircle,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import jet1 from "../assets/images/jet1.jpg";
import jet2 from "../assets/images/jet2.jpg";
import jet3 from "../assets/images/jet3.jpeg";
import jet4 from "../assets/images/jet4.jpg";
import jet5 from "../assets/images/jet5.jpg";
import jet6 from "../assets/images/jet6.jpg";
import jet7 from "../assets/images/jet7.jpg";
import jet8 from "../assets/images/jet8.jpg";
import jet9 from "../assets/images/jet9.jpg";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col md:flex-row items-start gap-4 p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
  >
    <div className="bg-primary-50 p-3 rounded-xl shrink-0">
      <Icon className="h-6 w-6 text-primary-600" />
    </div>
    <div>
      <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const AmenityTag = ({ children }) => (
  <div className="flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg">
    <CheckCircle className="h-4 w-4 text-primary-600" />
    <span className="text-sm text-gray-700">{children}</span>
  </div>
);

const FleetDetails = () => {
  const { id } = useParams();
  // Find the selected fleet from the array
  const fleet = [
    {
      id: 1,
      name: "Midsize Jet",
      category: "Standard Package",
      image: jet5,
      capacity: "7-8",
      range: "Up to 5 hours flight time",
      description:
        "Perfect for shorter trips and small groups, our Midsize Jet offers exceptional comfort and efficiency. Ideal for business executives and small groups seeking a premium travel experience.",
      amenities:
        "Wi-Fi, Refreshments, Comfortable seating, Entertainment system",
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

  const selectedFleet = fleet.find((item) => item.id === parseInt(id));

  if (!selectedFleet) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Fleet Not Found
          </h2>
          <Link to="/fleet" className="text-primary-600 hover:text-primary-700">
            Return to Fleet Overview
          </Link>
        </div>
      </div>
    );
  }

  const features = [
    {
      icon: Users,
      title: "Passenger Capacity",
      description: `Comfortably accommodates ${selectedFleet.capacity} passengers with luxurious seating.`,
    },
    {
      icon: Clock,
      title: "Flight Duration",
      description: selectedFleet.range,
    },
    {
      icon: Globe,
      title: "Travel Radius",
      description: "Ideal for regional and international flights.",
    },
    {
      icon: Shield,
      title: "Safety Standards",
      description:
        "Equipped with latest safety features and maintained to highest standards.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <img
          src={selectedFleet.image}
          alt={selectedFleet.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Back Button */}
        <Link
          to="/"
          className="absolute top-8 left-8 z-10 flex items-center space-x-2 text-white hover:text-primary-400 transition-colors duration-300 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full"
        >
          <ChevronLeft className="h-5 w-5" />
          <span>Back to Fleet</span>
        </Link>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                <span className="text-yellow-400 font-medium text-lg">
                  {selectedFleet.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {selectedFleet.name}
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                {selectedFleet.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          {/* Amenities */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Premium Amenities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {selectedFleet.amenities.split(", ").map((amenity, index) => (
                <AmenityTag key={index}>{amenity}</AmenityTag>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 md:p-12 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold mb-8">Additional Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedFleet.additionalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="mt-1">
                    <CheckCircle className="h-5 w-5 text-primary-400" />
                  </div>
                  <span className="text-gray-200 text-lg">{info}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
            <Link
              to="/booking"
              className="inline-flex justify-center items-center px-8 py-4 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-all duration-300 shadow-lg shadow-primary-100 hover:shadow-xl text-center text-lg"
            >
              Book This Aircraft
            </Link>
            <Link
              to="/contact"
              className="inline-flex justify-center items-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 text-center text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetDetails;
