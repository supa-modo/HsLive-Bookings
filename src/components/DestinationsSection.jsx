import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    price: "£1,200",
    featured: true,
    gridArea: "span 1 / span 2",
  },
  {
    id: 2,
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
    price: "£1,050",
    featured: true,
    gridArea: "span 1 / span 1",
  },
  {
    id: 3,
    name: "Singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd",
    price: "£1,800",
  },
  {
    id: 4,
    name: "Zanzibar",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe",
    price: "£3,050",
    featured: true,
    gridArea: "span 1 / span 1",
  },
  {
    id: 5,
    name: "Cape Town, South Africa",
    image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99",
    price: "£1,050",
    featured: true,
    gridArea: "span 1 / span 1",
  },
  {
    id: 6,
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    price: "£1,100",
    featured: true,
    gridArea: "span 1 / span 2",
  },
  // Additional destinations for expanded view
  {
    id: 7,
    name: "Mauritius",
    image: "https://images.unsplash.com/photo-1589979481223-deb893043163",
    price: "£2,500",
  },
  {
    id: 8,
    name: "London, UK",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    price: "£1,800",
  },
  {
    id: 9,
    name: "New York, USA",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
    price: "£1,800",
    gridArea: "span 1 / span 2",
  },
  {
    id: 10,
    name: "Seychelles",
    image: "https://images.unsplash.com/photo-1589979481223-deb893043163",
    price: "£1,800",
  },
  {
    id: 11,
    name: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
    price: "£1,800",
  },
  {
    id: 12,
    name: "Sydney, Australia",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
    price: "£1,800",
  },
];

const DestinationCard = ({ destination, className = "" }) => {
  if (!destination) return null; // Add null check

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`relative group overflow-hidden rounded-lg ${className}`}
      style={destination.gridArea ? { gridArea: destination.gridArea } : {}}
    >
      <div className="relative h-full overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-white text-2xl font-semibold mb-2">
            {destination.name}
          </h3>
          <p className="text-white/90">
            from <span className="font-semibold">{destination.price}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const DestinationsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const featuredDestinations = destinations.filter((d) => d.featured);
  const visibleDestinations = isExpanded ? destinations : featuredDestinations;

  // Only render the initial grid if we have enough destinations
  const hasEnoughDestinations = visibleDestinations.length >= 6;

  return (
    <section className="py-16 px-4 md:px-8 max-w-screen-2xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Popular Destinations
        </h2>
        <p className="text-lg text-gray-600">
          Explore our selection of premium travel destinations
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[330px]">
        {hasEnoughDestinations ? (
          <>
            {/* First row - 3 equal cards */}
            <DestinationCard
              destination={visibleDestinations[0]}
              className="lg:col-span-2 lg:row-span-1"
            />
            <DestinationCard destination={visibleDestinations[1]} />
            <DestinationCard destination={visibleDestinations[2]} />

            {/* Second row - 2 equal cards and 1 wide card */}
            <DestinationCard destination={visibleDestinations[3]} />
            <DestinationCard destination={visibleDestinations[4]} />
            <DestinationCard
              destination={visibleDestinations[5]}
              className="lg:col-span-2 lg:row-span-1"
            />
          </>
        ) : (
          // If we don't have enough featured destinations, render them in a simple grid
          visibleDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              className={
                destination.gridArea === "span 1 / span 2"
                  ? "lg:col-span-2"
                  : ""
              }
            />
          ))
        )}

        {/* Additional destinations when expanded */}
        <AnimatePresence>
          {isExpanded &&
            visibleDestinations
              .slice(6)
              .map((destination) => (
                <DestinationCard
                  key={destination.id}
                  destination={destination}
                />
              ))}
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-12 text-center"
      >
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center space-x-2 bg-white border border-gray-200 px-6 py-3 rounded-full text-gray-600 hover:bg-gray-50 transition-colors duration-300"
        >
          <span>{isExpanded ? "Show Less" : "See All Destinations"}</span>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
      </motion.div>
    </section>
  );
};

export default DestinationsSection;
