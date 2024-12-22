import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Clock,
  Globe,
  Shield,
  Star,
  ArrowUpRight,
  ChevronLeft,
  CheckCircle,
  ChevronRight,
  Phone,
  Calendar,
  Plus,
  Minus,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

const FeatureCard = ({ icon: Icon, title, description, onClick, isActive }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={`flex flex-col cursor-pointer ${
      isActive ? "bg-primary-50 border-primary-200" : "bg-white border-gray-100"
    } rounded-xl border p-6 backdrop-blur-sm transition-all duration-300`}
  >
    <div
      className={`${
        isActive ? "bg-primary-100" : "bg-gray-50"
      } p-3 rounded-xl w-fit mb-4`}
    >
      <Icon
        className={`h-6 w-6 ${isActive ? "text-primary-600" : "text-gray-600"}`}
      />
    </div>
    <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
    <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const ImageGallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-full w-full">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          src={images[currentIndex]}
          alt="Aircraft"
          className="w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute bottom-8 right-8 flex space-x-4">
        <button
          onClick={prevImage}
          className="p-3 bg-black/30 backdrop-blur-sm rounded-full text-white hover:bg-black/50 transition-all"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextImage}
          className="p-3 bg-black/30 backdrop-blur-sm rounded-full text-white hover:bg-black/50 transition-all"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute bottom-8 left-8 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
        <p className="text-white text-sm">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
};

const AmenityTag = ({ children, isExpanded }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="group cursor-pointer"
  >
    <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
      <CheckCircle className="h-5 w-5 text-primary-600 group-hover:scale-110 transition-transform duration-300" />
      <span className="text-gray-800 font-medium">{children}</span>
    </div>
  </motion.div>
);

const QuickAction = ({ icon: Icon, label }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="flex flex-col items-center space-y-2 p-4 bg-white/80 backdrop-blur-sm rounded-xl cursor-pointer hover:shadow-lg transition-all duration-300"
  >
    <div className="p-3 bg-primary-50 rounded-full">
      <Icon className="h-6 w-6 text-primary-600" />
    </div>
    <span className="text-sm font-medium text-gray-700">{label}</span>
  </motion.div>
);

const FleetDetails = () => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [isAmenitiesExpanded, setIsAmenitiesExpanded] = useState(false);
  const { id } = useParams();

  // Fleet data remains the same as your original component
  const fleet = [
    /* ... your existing fleet data ... */
  ];
  const selectedFleet = fleet.find((item) => item.id === parseInt(id));

  const features = [
    /* ... your existing features data ... */
  ];

  const quickActions = [
    { icon: Calendar, label: "Schedule Viewing" },
    { icon: Phone, label: "Request Callback" },
    { icon: Star, label: "Save to Favorites" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Image Gallery */}
      <div className="relative h-[80vh]">
        <ImageGallery images={[selectedFleet.image /* add more images */]} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-0 left-0 right-0 p-6"
        >
          <div className="container mx-auto flex justify-between items-center">
            <Link
              to="/"
              className="flex items-center space-x-2 text-white hover:text-primary-400 transition-all duration-300 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
              <span>Back to Fleet</span>
            </Link>

            <div className="flex space-x-4">
              {quickActions.map((action, index) => (
                <QuickAction key={index} {...action} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-0 left-0 right-0 p-12"
        >
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                </div>
                <span className="text-yellow-400 font-medium">
                  {selectedFleet.category}
                </span>
              </div>
              <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                {selectedFleet.name}
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                {selectedFleet.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 -mt-20 relative z-10">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                {...feature}
                isActive={activeFeature === index}
                onClick={() =>
                  setActiveFeature(index === activeFeature ? null : index)
                }
              />
            ))}
          </motion.div>

          {/* Amenities */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gray-50/50 backdrop-blur-sm rounded-2xl p-12"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Premium Amenities
              </h2>
              <button
                onClick={() => setIsAmenitiesExpanded(!isAmenitiesExpanded)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                {isAmenitiesExpanded ? (
                  <Minus className="h-6 w-6 text-gray-600" />
                ) : (
                  <Plus className="h-6 w-6 text-gray-600" />
                )}
              </button>
            </div>
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            >
              {selectedFleet.amenities.split(", ").map((amenity, index) => (
                <AmenityTag key={index} isExpanded={isAmenitiesExpanded}>
                  {amenity}
                </AmenityTag>
              ))}
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-6 py-12"
          >
            <Link
              to="/booking"
              className="group inline-flex justify-center items-center px-8 py-4 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-all duration-300 shadow-lg shadow-primary-100 hover:shadow-xl"
            >
              <span className="text-lg">Book This Aircraft</span>
              <ArrowUpRight className="h-5 w-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex justify-center items-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300"
            >
              <Phone className="h-5 w-5 mr-2" />
              <span className="text-lg">Contact Us</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FleetDetails;
