import React from "react";
import { motion } from "framer-motion";
import { Users, Map, Clock } from "lucide-react";

const FleetCard = ({ image, name, passengers, range, speed }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="group relative overflow-hidden rounded-2xl bg-white shadow-xl"
  >
    <div className="aspect-[16/10] overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{name}</h3>
      <div className="space-y-3">
        <div className="flex items-center text-gray-600">
          <Users className="h-5 w-5 mr-3 text-primary-600" />
          <span>{passengers} Passengers</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Map className="h-5 w-5 mr-3 text-primary-600" />
          <span>{range} Range</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="h-5 w-5 mr-3 text-primary-600" />
          <span>{speed} Cruise Speed</span>
        </div>
      </div>
      <button className="mt-6 w-full bg-gray-100 text-gray-900 py-3 rounded-full font-medium hover:bg-primary-600 hover:text-white transition-colors duration-300">
        View Details
      </button>
    </div>
  </motion.div>
);

const FleetSection = () => {
  const fleet = [
    {
      image: "/path/to/light-jet.jpg",
      name: "Light Jet",
      passengers: "6-8",
      range: "2,000 nm",
      speed: "440 kts",
    },
    {
      image: "/path/to/midsize-jet.jpg",
      name: "Midsize Jet",
      passengers: "8-10",
      range: "3,000 nm",
      speed: "470 kts",
    },
    {
      image: "/path/to/heavy-jet.jpg",
      name: "Heavy Jet",
      passengers: "10-16",
      range: "4,000 nm",
      speed: "500 kts",
    },
  ];

  return (
    <section id="fleet" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Premium Fleet
          </h2>
          <p className="text-gray-600 text-lg">
            Choose from our diverse fleet of meticulously maintained private jets,
            each offering unique capabilities to match your travel requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleet.map((aircraft, index) => (
            <FleetCard key={index} {...aircraft} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-primary-600 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-primary-500/20">
            View Full Fleet
          </button>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
