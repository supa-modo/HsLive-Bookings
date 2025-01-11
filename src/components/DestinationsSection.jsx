import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import dubai from "../assets/images/dubai.jpeg";
import arusha from "../assets/images/arusha.jpg";
import capetown from "../assets/images/capetown.jpeg";
import ngorongoro from "../assets/images/ngorongoro.jpg";
import kilimanjaro from "../assets/images/kilimanjaro.jpg";
import zanzibar from "../assets/images/zanzibar.jpeg";
import nairobi from "../assets/images/nairobi.jpeg";

const destinations = [
  {
    id: 1,
    name: "Dubai, UAE",
    image: dubai,
    price: "$1,200",
    featured: true,
    gridArea: "span 1 / span 2",
  },
  {
    id: 2,
    name: "Arusha, Tanzania",
    image: arusha,
    price: "$1,050",
    featured: true,
    gridArea: "span 1 / span 1",
  },
  {
    id: 3,
    name: "Cape Town, SA",
    featured: true,
    image: capetown,
    price: "$1,800",
  },
  {
    id: 4,
    name: "Zanzibar, URT",
    image: zanzibar,
    price: "$650",
    featured: true,
    gridArea: "span 1 / span 1",
  },
  {
    id: 5,
    name: "Nairobi, Kenya",
    image: nairobi,

    price: "$550",
    featured: true,
    gridArea: "span 1 / span 1",
  },
  {
    id: 3,
    name: "Kilimanjaro, Tanzania",
    featured: true,
    image: kilimanjaro,
    price: "$1,800",
    gridArea: "span 1 / span 2",
  },
  // Additional destinations for expanded view
  {
    id: 7,
    name: "New York, USA",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
    price: "$1,800",
    gridArea: "span 1 / span 2",
  },
  {
    id: 8,
    name: "London, UK",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
    price: "$1,800",
  },
  {
    id: 7,
    name: "Mauritius",

    image: "https://images.unsplash.com/photo-1589979481223-deb893043163",
    price: "$2,500",
  },
  {
    id: 10,
    name: "Seychelles",
    image: "https://images.unsplash.com/photo-1589979481223-deb893043163",
    price: "$1,800",
  },
  {
    id: 11,
    name: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
    price: "$1,800",
  },
  {
    id: 12,
    name: "Sydney, Australia",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
    price: "$1,800",
    gridArea: "span 1 / span 2",
  },
];

const DestinationCard = ({ destination, className = "" }) => {
  if (!destination) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`relative group overflow-hidden rounded-xl ${className}`}
      style={destination.gridArea ? { gridArea: destination.gridArea } : {}}
    >
      <div className="relative h-full overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 font-nunito-sans font-bold">
          <h3 className="text-white sm:text-2xl font-extrabold sm:mb-1">
            {destination.name}
          </h3>
          <p className="text-white/90">
            from <span className="font-extrabold">{destination.price}</span>
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
    <section id="destinations" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className=" p-2 text-2xl sm:text-5xl font-extrabold mb-2 md:mb-4 bg-gradient-to-r from-gray-600 via-primary-800 to-gray-700 bg-clip-text text-transparent">
              Popular Featured Destinations
            </h2>

            <p className="text-base sm:text-lg text-gray-500 leading-relaxed font-semibold">
              Embark on unforgettable journeys with our handpicked selection of
              premium travel destinations. From pristine beaches and vibrant
              cityscapes to serene mountain retreats and exotic cultural hubs,
              discover the world with us and explore destinations that redefine
              the art of travel.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 px-6 auto-rows-[230px] md:auto-rows-[350px]">
          {hasEnoughDestinations ? (
            <>
              <DestinationCard
                destination={visibleDestinations[0]}
                className="lg:col-span-2 lg:row-span-1"
              />
              <DestinationCard destination={visibleDestinations[1]} />
              <DestinationCard destination={visibleDestinations[2]} />

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
            className="inline-flex items-center space-x-3 justify-center px-8 py-3 text-[15px] bg-white text-primary-600 border-2 border-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300"
          >
            <span>{isExpanded ? "Show Less" : "View All Destinations"}</span>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationsSection;
