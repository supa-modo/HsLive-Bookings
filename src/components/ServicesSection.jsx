import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Plane,
  Users,
  Map,
  Shield,
  Clock,
  Award,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Check,
} from "lucide-react";

const ServiceCard = ({ service, isSelected, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      onClick={onClick}
      className={`group relative p-1 hover:shadow-xl shadow-lg border border-gray-100  rounded-3xl bg-white backdrop-blur-sm cursor-pointer ${
        isSelected ? "ring-2 ring-primary-600" : ""
      }`}
    >
      <div className="relative h-full bg-white/90 backdrop-blur-md rounded-[22px] p-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="relative mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-all duration-500">
            <service.icon
              className="w-10 h-10 text-primary-600 group-hover:rotate-12 transition-transform duration-500"
              strokeWidth={1.5}
            />
          </div>
        </div>

        <div className="relative z-10">
          <h3 className="text-2xl font-extrabold bg-gradient-to-r from-primary-600 to-gray-500 bg-clip-text text-transparent mb-3">
            {service.title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            {service.description}
          </p>

          <div className="space-y-3">
            {service.packages.map((pkg, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 text-gray-600"
              >
                <Sparkles className="w-5 h-5 text-primary-500" />
                <span className="font-semibold">{pkg.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ServiceDetailsCard = ({ service }) => {
  const [expandedPackage, setExpandedPackage] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-10 bg-white max-w-screen-2xl mx-auto rounded-3xl shadow-xl border border-gray-50 overflow-hidden"
    >
      <div className="p-8">
        <h3 className="text-3xl font-extrabold bg-gradient-to-r from-primary-800 to-gray-600 bg-clip-text text-transparent mb-6">
          {service.title}
        </h3>
        <p className="text-gray-500 text-lg font-semibold font-nunito-sans leading-relaxed mb-8">
          {service.detailedDescription}
        </p>

        <div className="space-y-4">
          {service.packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl border shadow-md border-gray-200"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-xl font-semibold text-amber-700 mb-2">
                    {pkg.title}
                  </h4>
                  <p className="text-gray-600">{pkg.targetClients}</p>
                </div>
                <button
                  onClick={() =>
                    setExpandedPackage(expandedPackage === index ? null : index)
                  }
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  {expandedPackage === index ? (
                    <ChevronUp className="w-6 h-6 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-600" />
                  )}
                </button>
              </div>

              {expandedPackage === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 space-y-4"
                >
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">
                      Key Features:
                    </h5>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-3 text-gray-600"
                        >
                          <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {pkg.aircraft && (
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">
                        Available Aircraft for this package:
                      </h5>
                      <div className="space-y-3">
                        {pkg.aircraft.map((aircraft, idx) => (
                          <div
                            key={idx}
                            className="bg-gradient-to-br from-primary-50 to-white border border-gray-200/50 p-4 rounded-lg shadow-sm"
                          >
                            <h6 className="font-bold font-nunito-sans text-primary-800">
                              {aircraft.name}
                            </h6>
                            <p className="text-gray-600 text-sm">
                              Capacity: {aircraft.capacity}
                            </p>
                            <p className="text-gray-600 text-sm">
                              Range: {aircraft.range}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      icon: Plane,
      title: "Private Jet Charters",
      description:
        "Experience unparalleled luxury and convenience with the world's most reputable international jet charters for both business and leisure travel.",
      detailedDescription:
        "Our private jet charters offer the ultimate in luxury air travel, tailored to your specific needs. Whether for business or leisure, we provide seamless experiences with world-class service. Explore our various jet charters packages below",
      packages: [
        {
          title: "Executive Business Escape Package",
          targetClients: "Executives, corporate teams, and professionals",
          features: [
            "Direct flights to meeting destinations",
            "In-flight Wi-Fi and workspace",
            "Private meeting areas",
            "Concierge services",
          ],
          aircraft: [
            {
              name: "Embraer Praetor 600",
              capacity: "Up to 12 passengers",
              range: "4,000 nautical miles",
            },
            {
              name: "Cessna Citation Longitude",
              capacity: "Up to 10 passengers",
              range: "3,500 nautical miles",
            },
          ],
        },
        {
          title: "Elite Escape: Luxury Leisure Package",
          targetClients: "High-net-worth individuals and families",
          features: [
            "Tailored travel itineraries",
            "Gourmet in-flight dining",
            "Premium champagne service",
            "Exclusive destination experiences",
          ],
          aircraft: [
            {
              name: "Gulfstream G650ER",
              capacity: "Up to 18 passengers",
              range: "7,500 nautical miles",
            },
            {
              name: "Dassault Falcon 8X",
              capacity: "Up to 14 passengers",
              range: "6,450 nautical miles",
            },
          ],
        },
        {
          title: "Dignitary Prestige Transfer",
          targetClients: "High-net-worth individuals and families",
          features: [
            "Tailored travel itineraries",
            "Gourmet in-flight dining",
            "Premium champagne service",
            "Exclusive destination experiences",
          ],
          aircraft: [
            {
              name: "Gulfstream G650ER",
              capacity: "Up to 18 passengers",
              range: "7,500 nautical miles",
            },
            {
              name: "Dassault Falcon 8X",
              capacity: "Up to 14 passengers",
              range: "6,450 nautical miles",
            },
          ],
        },
      ],
    },
    {
      icon: Shield,
      title: "Logistics & Operations",
      description:
        "Comprehensive support services ensuring seamless travel experiences with meticulous attention to every detail.",
      detailedDescription:
        "Our logistics and operations team ensures every aspect of your journey is handled with precision, from flight planning to ground services.",
      packages: [
        {
          title: "24/7 Flight Support",
          targetClients: "All private aviation clients",
          features: [
            "Round-the-clock customer service",
            "Emergency response team",
            "Real-time flight monitoring",
            "Weather updates and routing",
          ],
        },
        {
          title: "Complete Flight Planning",
          targetClients: "Charter and private jet owners",
          features: [
            "Optimal route planning",
            "Fuel stop coordination",
            "Weather analysis",
            "Permit acquisition",
          ],
        },
      ],
    },
    {
      icon: Map,
      title: "Private Aircraft Safaris",
      description:
        "Discover Tanzania's breathtaking national parks from above with our exclusive safari flight experiences.",
      detailedDescription:
        "Our private aircraft safaris offer a unique way to explore Tanzania's wildlife and landscapes, combining luxury travel with unforgettable adventures.",
      packages: [
        {
          title: "Serengeti Luxury Safari Flight",
          targetClients: "Luxury safari enthusiasts",
          features: [
            "Direct flights to Seronera Airstrip",
            "Aerial wildlife viewing",
            "Gourmet safari meals",
            "Private game drives",
          ],
        },
        {
          title: "Ngorongoro Crater Adventure",
          targetClients: "Premium adventure seekers",
          features: [
            "Scenic crater flights",
            "Private game drives",
            "Cultural Maasai visits",
            "Luxury lodge accommodation",
          ],
        },
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative pt-20 pb-10 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-violet-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="relative mx-auto px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold pt-8 mb-4 bg-gradient-to-r from-gray-700 via-primary-700 to-gray-600 bg-clip-text text-transparent"
          >
            Our Premium Aviation Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 font-semibold leading-relaxed"
          >
            Experience the epitome of luxury travel with our comprehensive suite
            of private aviation services
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 font-semibold leading-relaxed"
          >
            Click on any of the service cards below to view more details about
            the service.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-2xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              isSelected={selectedService === index}
              onClick={() => setSelectedService(index)}
            />
          ))}
        </div>

        {services[selectedService] && (
          <ServiceDetailsCard service={services[selectedService]} />
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
