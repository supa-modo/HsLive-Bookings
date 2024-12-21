import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Users,
  Clock,
  Globe,
  Shield,
  CheckCircle,
  Star,
  ArrowUpRight,
} from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex items-start space-x-4 p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
  >
    <div className="bg-primary-50 p-3 rounded-xl">
      <Icon className="h-6 w-6 text-primary-600" />
    </div>
    <div>
      <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
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

const FleetDetailsModal = ({ isOpen, onClose, fleet }) => {
  if (!isOpen || !fleet) return null;

  const features = [
    {
      icon: Users,
      title: "Passenger Capacity",
      description: `Comfortably seats up to ${fleet.capacity} passengers with luxurious cabin space`,
    },
    {
      icon: Clock,
      title: "Flight Duration",
      description: fleet.range,
    },
    {
      icon: Globe,
      title: "Travel Radius",
      description: "Available for domestic and international flights",
    },
    {
      icon: Shield,
      title: "Safety Standards",
      description: "Meets and exceeds all international safety regulations",
    },
  ];

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl w-full max-w-4xl"
          >
            <div className="absolute right-4 top-4 z-10">
              <button
                onClick={onClose}
                className="bg-white/80 backdrop-blur p-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-white transition-all duration-300"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="relative h-80 overflow-hidden">
              <img
                src={fleet.image}
                alt={fleet.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <span className="text-yellow-400 font-medium">
                    Premium Fleet
                  </span>
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">
                  {fleet.name}
                </h3>
                <p className="text-lg text-gray-200 flex items-center">
                  {fleet.category}
                  <ArrowUpRight className="h-5 w-5 ml-2" />
                </p>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>

              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    About This Aircraft
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {fleet.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Premium Amenities
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {fleet.amenities.split(", ").map((amenity, index) => (
                      <AmenityTag key={index}>{amenity}</AmenityTag>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Additional Information
                  </h4>
                  <ul className="space-y-3">
                    {fleet.additionalInfo.map((info, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="mt-1">
                          <CheckCircle className="h-5 w-5 text-primary-600" />
                        </div>
                        <span className="text-gray-600">{info}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={onClose}
                  className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-all duration-300"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    console.log("Booking aircraft:", fleet.name);
                    onClose();
                  }}
                  className="px-8 py-3 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-all duration-300 shadow-lg shadow-primary-100 hover:shadow-xl"
                >
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />
    </AnimatePresence>
  );
};

export default FleetDetailsModal;
