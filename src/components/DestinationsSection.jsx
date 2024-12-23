import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Star, Clock, Plane, ChevronLeft, ChevronRight } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
    description: 'Experience luxury in the heart of the Middle East',
    flightTime: '5-6 hours',
    rating: 4.9,
    popular: true,
  },
  {
    id: 2,
    name: 'Maldives',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8',
    description: 'Paradise found in the Indian Ocean',
    flightTime: '6-7 hours',
    rating: 4.8,
    popular: true,
  },
  {
    id: 3,
    name: 'Seychelles',
    image: 'https://images.unsplash.com/photo-1589979481223-deb893043163',
    description: 'Pristine beaches and crystal clear waters',
    flightTime: '4-5 hours',
    rating: 4.7,
    popular: true,
  },
  {
    id: 4,
    name: 'Zanzibar',
    image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe',
    description: 'Exotic island paradise with rich culture',
    flightTime: '2-3 hours',
    rating: 4.6,
    popular: true,
  },
  {
    id: 5,
    name: 'Cape Town, South Africa',
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99',
    description: 'Where mountains meet the ocean',
    flightTime: '8-9 hours',
    rating: 4.8,
    popular: true,
  },
  {
    id: 6,
    name: 'Mauritius',
    image: 'https://images.unsplash.com/photo-1589979481223-deb893043163',
    description: 'A tropical paradise in the Indian Ocean',
    flightTime: '6-7 hours',
    rating: 4.7,
    popular: true,
  },
  {
    id: 7,
    name: 'Paris, France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    description: 'The city of love and luxury',
    flightTime: '9-10 hours',
    rating: 4.9,
    popular: true,
  },
  {
    id: 8,
    name: 'London, UK',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad',
    description: 'A blend of history and modernity',
    flightTime: '10-11 hours',
    rating: 4.8,
    popular: true,
  },
  {
    id: 9,
    name: 'New York, USA',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9',
    description: 'The city that never sleeps',
    flightTime: '15-16 hours',
    rating: 4.9,
    popular: true,
  },
  {
    id: 10,
    name: 'Singapore',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd',
    description: 'Modern luxury in Southeast Asia',
    flightTime: '12-13 hours',
    rating: 4.8,
    popular: true,
  },
  {
    id: 11,
    name: 'Tokyo, Japan',
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26',
    description: 'Where tradition meets future',
    flightTime: '14-15 hours',
    rating: 4.9,
    popular: true,
  },
  {
    id: 12,
    name: 'Sydney, Australia',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9',
    description: 'Iconic landmarks and beautiful beaches',
    flightTime: '16-17 hours',
    rating: 4.7,
    popular: true,
  },
];

const DestinationCard = ({ destination }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="group bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="relative h-64 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        {destination.popular && (
          <div className="absolute top-4 right-4">
            <div className="bg-primary-600/90 backdrop-blur-md px-4 py-1 rounded-full">
              <span className="text-white text-sm font-semibold">Popular</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
            {destination.name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{destination.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4">{destination.description}</p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2 text-gray-500">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{destination.flightTime}</span>
          </div>
          <button
            onClick={() => {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center space-x-2 text-primary-600 font-medium hover:text-primary-700"
          >
            <span>Book Now</span>
            <Plane className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const DestinationsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(destinations.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentDestinations = destinations.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id="destinations" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Popular Destinations
              <span className="block text-primary-600 text-xl mt-2">
                Fly in Style to Your Dream Location
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Discover our most sought-after destinations, each offering unique experiences
              and unforgettable memories. From pristine beaches to vibrant cities, we'll
              take you there in ultimate luxury.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentDestinations.map((destination) => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute -left-12 top-1/2 -translate-y-1/2">
            <button
              onClick={prevPage}
              className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          <div className="absolute -right-12 top-1/2 -translate-y-1/2">
            <button
              onClick={nextPage}
              className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Page Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentPage ? "w-6 bg-primary-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-primary-700 transition-colors duration-300"
          >
            Plan Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsSection;
