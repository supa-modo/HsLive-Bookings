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
  WifiHigh,
  Wine,
  MapPin,
  Plane,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

const FeatureCard = ({ icon: Icon, title, description, highlight }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="relative overflow-hidden group"
  >
    <div className="p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-500">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500" />
      <div className="relative">
        <div className="bg-blue-50 p-4 rounded-xl w-fit mb-6">
          <Icon className="h-7 w-7 text-blue-600" />
        </div>
        <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
        <p className="text-gray-600 leading-relaxed">{description}</p>
        {highlight && (
          <span className="absolute top-4 right-4 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
            {highlight}
          </span>
        )}
      </div>
    </div>
  </motion.div>
);

const AmenityTag = ({ icon: Icon, children }) => (
  <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
    <div className="bg-blue-50 p-2 rounded-lg">
      <Icon className="h-5 w-5 text-blue-600" />
    </div>
    <span className="text-gray-700 font-medium">{children}</span>
  </div>
);

const FleetDetails = () => {
  const { id } = useParams();
  // ... (rest of the data finding logic remains the same)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={selectedFleet.image}
          alt={selectedFleet.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        <Link
          to="/"
          className="absolute top-8 left-8 z-10 flex items-center space-x-2 text-white hover:text-blue-400 transition-colors duration-300 bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full"
        >
          <ChevronLeft className="h-5 w-5" />
          <span>Back to Fleet</span>
        </Link>

        <div className="absolute bottom-0 left-0 right-0 p-12 md:p-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-blue-400 font-medium">
                  {selectedFleet.category}
                </span>
              </div>
              <div className="w-2 h-2 bg-white rounded-full" />
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-white">
                  {selectedFleet.capacity} Passengers
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {selectedFleet.name}
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">
              {selectedFleet.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Users}
              title="Passenger Capacity"
              description={`Luxurious seating for ${selectedFleet.capacity} passengers with premium comfort and personal space.`}
              highlight="Premium Seating"
            />
            <FeatureCard
              icon={Clock}
              title="Flight Range"
              description={selectedFleet.range}
              highlight="Non-Stop"
            />
            <FeatureCard
              icon={Globe}
              title="Global Access"
              description="Capable of reaching major destinations worldwide with optimal fuel efficiency."
            />
          </div>

          {/* Amenities */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-12 rounded-3xl">
            <h2 className="text-3xl font-bold text-white mb-12">
              Luxury Amenities & Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedFleet.amenities.split(", ").map((amenity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AmenityTag icon={index % 2 === 0 ? WifiHigh : Wine}>
                    {amenity}
                  </AmenityTag>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-8">
            <h3 className="text-3xl font-bold text-gray-900">
              Ready to Experience Luxury in the Sky?
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/booking"
                className="inline-flex justify-center items-center px-8 py-4 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-100 hover:shadow-xl text-lg"
              >
                Book This Aircraft
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex justify-center items-center px-8 py-4 bg-white text-gray-900 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl text-lg border border-gray-200"
              >
                Request Information
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetDetails;
