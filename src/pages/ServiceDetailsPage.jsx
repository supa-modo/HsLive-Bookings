import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import jet6 from "../assets/images/jet6.jpg";
import jet5 from "../assets/images/jet5.jpg";
import jet8 from "../assets/images/jet8.jpg";

import {
  Users,
  Clock,
  Shield,
  Star,
  Plane,
  Coffee,
  ChevronRight,
  ChevronLeft,
  Mail,
  Phone,
  Check,
  Globe,
} from "lucide-react";

const serviceData = [
  {
    id: 1,
    name: "Executive Business Escape",
    category: "Business Travel",
    images: [jet6, jet5, jet8],
    aircraft: "Embraer Praetor 600",
    capacity: "Up to 12",
    range: "4,000 nautical miles",
    description:
      "Tailored for executives and corporate teams, offering seamless business travel with in-flight productivity features and maximum privacy.",
    highlights: [
      "Direct flights to meeting destinations",
      "Fully equipped business suite",
      "High-speed Wi-Fi connectivity",
      "Private meeting areas",
      "Dedicated concierge service",
      "Premium catering options",
    ],
    features: [
      {
        icon: Users,
        title: "Corporate Groups",
        description: "Ideal for executive teams up to 12 passengers",
      },
      {
        icon: Clock,
        title: "Time Efficiency",
        description: "Direct flights to your business destination",
      },
      {
        icon: Shield,
        title: "Privacy Assured",
        description: "Confidential environment for meetings",
      },
      {
        icon: Globe,
        title: "Global Access",
        description: "Reach any business destination worldwide",
      },
    ],
    amenities: [
      "High-speed Wi-Fi",
      "Conference facilities",
      "Power outlets",
      "Satellite phone",
      "Premium catering",
      "Entertainment system",
      "Private workspaces",
      "Fully reclining seats",
    ],
    specifications: {
      "Aircraft Type": "Embraer Praetor 600",
      "Passenger Capacity": "Up to 12",
      Range: "4,000 nautical miles",
      "Cruise Speed": "466 knots",
      "Cabin Height": "6 feet",
      "Cabin Width": "6.8 feet",
      "Baggage Capacity": "150 cubic feet",
    },
    price: "Starting from $5,500/hour",
  },
  // ... other service data
];

const ServiceDetails = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { id } = useParams();
  const selectedService = serviceData.find((item) => item.id === parseInt(id));

  if (!selectedService) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600">Service Not Found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[80vh]">
        <div className="absolute inset-0">
          <img
            src={selectedService.images[currentImageIndex]}
            alt={selectedService.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-gray-100" />
        </div>

        <div className="absolute bottom-32 left-0 w-full">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl font-extrabold text-white mb-4">
                {selectedService.name}
                <span className="block text-3xl text-primary-400 mt-2">
                  {selectedService.category}
                </span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                {selectedService.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedService.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50"
                  >
                    <feature.icon className="h-6 w-6 text-primary-600" />
                    <div>
                      <h3 className="font-bold text-gray-700">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Aircraft Specifications
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(selectedService.specifications).map(
                  ([key, value]) => (
                    <div
                      key={key}
                      className="flex justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <span className="text-gray-600 font-semibold">{key}</span>
                      <span className="text-primary-600 font-semibold">
                        {value}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  Book This Package
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600 font-semibold">
                      Starting Price
                    </span>
                    <span className="text-red-600 font-bold">
                      {selectedService.price}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600 font-semibold">
                      Aircraft
                    </span>
                    <span className="font-semibold">
                      {selectedService.aircraft}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600 font-semibold">
                      Capacity
                    </span>
                    <span className="font-semibold">
                      {selectedService.capacity}
                    </span>
                  </div>
                </div>
                <button className="w-full bg-primary-600 text-white py-4 rounded-xl font-medium hover:bg-primary-700 transition-colors">
                  Book Now
                </button>
                <div className="mt-8">
                  <h3 className="font-bold text-gray-700 mb-4">
                    Need assistance?
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+1234567890"
                      className="flex items-center space-x-3 text-primary-600 hover:text-primary-700"
                    >
                      <Phone className="h-5 w-5" />
                      <span>+1 234 567 890</span>
                    </a>
                    <a
                      href="mailto:info@example.com"
                      className="flex items-center space-x-3 text-primary-600 hover:text-primary-700"
                    >
                      <Mail className="h-5 w-5" />
                      <span>info@example.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Package Highlights */}
        <div className="mt-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Package Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedService.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
                >
                  <Check className="h-5 w-5 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="mt-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Onboard Amenities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {selectedService.amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg"
                >
                  <Star className="h-5 w-5 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Navigation */}
        <div className="absolute top-1/2 inset-x-0 flex justify-between items-center px-4">
          <button
            onClick={() =>
              setCurrentImageIndex((prev) =>
                prev === 0 ? selectedService.images.length - 1 : prev - 1
              )
            }
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() =>
              setCurrentImageIndex((prev) =>
                prev === selectedService.images.length - 1 ? 0 : prev + 1
              )
            }
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {selectedService.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex ? "bg-white w-4" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
