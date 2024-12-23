import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users,
  Clock,
  Shield,
  Star,
  Plane,
  Coffee,
  Wifi,
  Tv,
  Phone,
  Map,
  ChevronRight,
  ChevronLeft,
  Mail,
} from "lucide-react";

// Import images
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
    images: [jet2, jet4, jet7],
    capacity: "7-8",
    range: "Up to 5 hours flight time",
    description:
      "Perfect for shorter trips and small groups, our Midsize Jet offers exceptional comfort and efficiency. Ideal for business executives and small groups seeking a premium travel experience.",
    amenities: [
      "Wi-Fi Connectivity",
      "Refreshment Center",
      "Comfortable Seating",
      "Entertainment System",
      "Workspace",
      "Climate Control",
      "Restroom",
      "Baggage Space"
    ],
    specifications: {
      "Cabin Height": "5.8 ft",
      "Cabin Width": "5.5 ft",
      "Cabin Length": "17.5 ft",
      "Maximum Speed": "534 mph",
      "Maximum Range": "2,000 nm",
      "Maximum Altitude": "45,000 ft"
    },
    features: [
      {
        icon: Users,
        title: "Passenger Capacity",
        description: "Comfortably seats 7-8 passengers"
      },
      {
        icon: Clock,
        title: "Flight Range",
        description: "Up to 5 hours non-stop flight"
      },
      {
        icon: Shield,
        title: "Safety Features",
        description: "Advanced safety systems and experienced crew"
      },
      {
        icon: Star,
        title: "Luxury Experience",
        description: "Premium comfort and personalized service"
      }
    ],
    price: "Starting from $4,500/hour",
  },
  // ... (other fleet data)
];

const FleetDetails = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { id } = useParams();
  const selectedFleet = fleetData.find((item) => item.id === parseInt(id));

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

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedFleet.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedFleet.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Navigation */}
        <div className="mb-8">
          <Link
            to="/fleet"
            className="inline-flex items-center text-gray-600 hover:text-primary-600"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Fleet
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="relative h-[60vh]">
            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              src={selectedFleet.images[currentImageIndex]}
              alt={selectedFleet.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            
            {/* Image Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md p-2 rounded-full"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-md p-2 rounded-full"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {selectedFleet.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-white w-6"
                      : "bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="max-w-4xl">
                <div className="text-white/80 mb-2">{selectedFleet.category}</div>
                <h1 className="text-4xl font-bold text-white mb-4">
                  {selectedFleet.name}
                </h1>
                <p className="text-white/90 text-lg max-w-2xl">
                  {selectedFleet.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Features */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedFleet.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50"
                  >
                    <feature.icon className="h-6 w-6 text-primary-600" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Technical Specifications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(selectedFleet.specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <span className="text-gray-600">{key}</span>
                    <span className="font-semibold text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Onboard Amenities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {selectedFleet.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg"
                  >
                    <Star className="h-5 w-5 text-primary-600" />
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Book This Aircraft
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Starting Price</span>
                    <span className="font-semibold text-primary-600">
                      {selectedFleet.price}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Capacity</span>
                    <span className="font-semibold">
                      {selectedFleet.capacity} Passengers
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Flight Range</span>
                    <span className="font-semibold">{selectedFleet.range}</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    // Handle booking
                  }}
                  className="w-full bg-primary-600 text-white py-4 rounded-xl font-medium hover:bg-primary-700 transition-colors duration-300"
                >
                  Book Now
                </button>
                <div className="mt-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Need assistance?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Contact our team for personalized booking support and additional
                    information.
                  </p>
                  <div className="mt-4 space-y-2">
                    <a
                      href="tel:+255743060660"
                      className="flex items-center space-x-2 text-primary-600 hover:text-primary-700"
                    >
                      <Phone className="h-4 w-4" />
                      <span>+255 743 060 660</span>
                    </a>
                    <a
                      href="mailto:info@shineluxuryprivatejets.com"
                      className="flex items-center space-x-2 text-primary-600 hover:text-primary-700"
                    >
                      <Mail className="h-4 w-4" />
                      <span>info@shineluxuryprivatejets.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetDetails;
