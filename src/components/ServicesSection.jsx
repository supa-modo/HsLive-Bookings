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

const ServiceCard = ({ service, isSelected, onClick, showDetailsBelow }) => {
  const maxPackagesToShow = 3; // Maximum number of packages to show in the card
  const extraPackagesCount = service.packages.length - maxPackagesToShow; // Number of extra packages

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -10 }}
        onClick={onClick}
        className={`group relative p-1 hover:shadow-xl shadow-lg border border-gray-100 rounded-3xl bg-white backdrop-blur-sm cursor-pointer ${
          isSelected ? "ring-2 ring-primary-600" : ""
        }`}
      >
        <div className="relative h-full bg-white/90 backdrop-blur-md rounded-[22px] p-6 sm:p-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-all duration-500">
              <service.icon
                className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 group-hover:rotate-12 transition-transform duration-500"
                strokeWidth={1.5}
              />
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-primary-600 to-gray-500 bg-clip-text text-transparent mb-3">
              {service.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              {service.description}
            </p>

            <div className="space-y-3">
              {service.packages
                .slice(0, maxPackagesToShow)
                .map((pkg, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-gray-600"
                  >
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500" />
                    <span className="text-sm sm:text-base font-semibold">
                      {pkg.title}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Show details below the selected card on small screens */}
      {showDetailsBelow && isSelected && (
        <div className="sm:hidden mt-6">
          <ServiceDetailsCard service={service} />
        </div>
      )}
    </div>
  );
};

const ServiceDetailsCard = ({ service }) => {
  const [expandedPackage, setExpandedPackage] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-6 sm:mt-10 bg-white max-w-screen-2xl mx-auto rounded-3xl shadow-xl border border-gray-50 overflow-hidden"
    >
      <div className="p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-primary-800 to-gray-600 bg-clip-text text-transparent mb-4 sm:mb-6">
          {service.title} Service
        </h3>
        <p className="text-sm sm:text-lg text-gray-500 font-semibold font-nunito-sans leading-relaxed mb-6 sm:mb-8">
          {service.detailedDescription}
        </p>

        <div className="space-y-4">
          {service.packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 sm:p-6 rounded-xl border shadow-md border-gray-200"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-base sm:text-lg md:text-xl font-semibold text-amber-700 mb-2">
                    {pkg.title}
                  </h4>
                  <p className="text-[13px] sm:text-base text-gray-600">
                    {pkg.targetClients}
                  </p>
                </div>
                <button
                  onClick={() =>
                    setExpandedPackage(expandedPackage === index ? null : index)
                  }
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  {expandedPackage === index ? (
                    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
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
                    <h5 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                      Key Features:
                    </h5>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-3 text-gray-600"
                        >
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
        "As trusted brokers, we connect you with the world's most reputable international jet charters offering the ultimate luxury in air travel, tailored to your specific needs. Whether for business or leisure, we provide seamless experiences with world-class service. Explore our premium jet charters packages below",
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
          title: "Dignitary Prestige Transfer Package",
          targetClients:
            "International dignitaries, celebrities, government officials",
          features: [
            "Seamless Transfers: Private jet travel to ensure quick, secure, and comfortable movement to diplomatic meetings or high-profile events.",
            "Red-Carpet Treatment: Personalized welcome services, VIP lounge access, and a team dedicated to handling all logistics.",
            "Enhanced Security: Discreet and secure travel arrangements to protect privacy and safety.",
            "Custom Comfort: Tailored in-flight settings, from reclining seats to on-demand entertainment and meals designed to perfection.",
          ],
          aircraft: [
            {
              name: "Bombardier Global 7500",
              capacity: "Up to 19 passengers",
              range: "7,700 nautical miles",
              features: [
                "Unmatched range and speed for long-distance travel.",
                "Private suites and conference areas for dignitaries.",
                "Top-tier security and privacy features for high-profile clients.",
              ],
            },
            {
              name: "Boeing Business Jet (BBJ)",
              capacity: "Up to 25 passengers (customizable configurations)",
              range: "6,000-6,500 nautical miles",
              features: [
                "Customized cabins with offices, bedrooms, and shower facilities.",
                "Advanced communication systems for in-flight operations.",
                "High security and enhanced privacy features, ideal for VIP travel.",
              ],
            },
          ],
        },
      ],
    },
    {
      icon: Shield,
      title: "Logistics & Operations",
      description:
        "Comprehensive logistical support services ensuring seamless travel experiences with meticulous attention to every detail.",
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
            "Weather analysis and considerations",
            "Permit & clearence acquisition for take-off, landing, and overflight",
          ],
        },
        {
          title: "Ground Support & Handling",
          targetClients: "Charter and private jet owners",
          features: [
            "VIP Lounge access",
            "Catering Services",
            "Aircraft Refueling Services",
          ],
        },
      ],
    },
    {
      icon: Map,
      title: "Private Aircraft Safaris",
      description:
        "Discover Tanzania's breathtaking national parks from above with our exclusive safari flight experiences in some of the best safari destinations.",
      detailedDescription:
        "Our private aircraft safaris offer a unique way to explore Tanzania's wildlife and landscapes, combining luxury travel with unforgettable adventures.",
      packages: [
        {
          title: "Serengeti Luxury Safari Flight",
          targetClients: "Luxury safari enthusiasts and families",
          features: [
            "Direct flights to Seronera Airstrip",
            "Aerial wildlife viewing",
            "Gourmet safari meals",
            "Private game drives",
          ],
        },
        {
          title: "Ngorongoro Crater Adventure",
          targetClients: "Premium adventure seekers and tourists",
          features: [
            "Scenic crater flights",
            "Private game drives",
            "Cultural Maasai visits",
            "Luxury lodge accommodation",
          ],
        },
        {
          title: "Tarangire Wilderness Escape...",
          targetClients:
            "Families and photographers seeking an off-the-beaten-path adventure",
          features: [
            "Quick flights to Kuro Airstrip",
            "Private safari drives with expert guides",
            "Romantic bush dinners, spa treatments",
            "Eco-Tourism Focus: eco-lodges and fuel-efficient aircraft",
          ],
        },
        {
          title: "Selous Exclusive Safari Adventure Package",
          targetClients:
            "Couples, honeymooners, and high-end tourists seeking remote luxury experiences",
          features: [
            "Direct Flights: Fly to Selous Game Reserve’s private airstrips, avoiding lengthy road transfers.",
            "Luxury Safari: Partnerships with exclusive lodges offering boat safaris, walking tours, and sunset drives.",
            "Tailored Experiences: Romantic bush dinners, spa treatments, and private guides for personalized safaris.",
            "Eco-Tourism Focus: Highlight sustainable practices, such as eco-lodges and fuel-efficient aircraft.",
          ],
        },
        {
          title: "The Grand Tanzania Safari Circuit Package",
          targetClients:
            "Tourists looking for a multi-destination, all-inclusive safari adventure",
          features: [
            "Multi-Park Itinerary: Fly to Serengeti, Ngorongoro, Tarangire, and Selous in one seamless circuit.",
            "Exclusive Scenic Flights: Enjoy aerial views of Tanzania’s diverse landscapes, from savannahs to volcanic craters and rivers.",
            "Customized Experiences: Combine private game drives, guided walking tours, and hot air balloon rides.",
            "Luxury Comforts: Premium in-flight dining, personalized ground transfers, and stays at luxury lodges in each destination.",
          ],
        },
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative pt-16 sm:pt-20 pb-10 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-violet-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="relative mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl font-extrabold pt-8 mb-4 bg-gradient-to-r from-gray-700 via-primary-700 to-gray-600 bg-clip-text text-transparent"
          >
            Our Premium Aviation Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-gray-600 font-semibold leading-relaxed"
          >
            Experience the epitome of luxury travel with our comprehensive suite
            of private aviation services
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-gray-600 font-semibold leading-relaxed"
          >
            Click on any of the service cards below to view more details about
            the service.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-screen-2xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              isSelected={selectedService === index}
              onClick={() => setSelectedService(index)}
              showDetailsBelow={true}
            />
          ))}
        </div>

        {/* Show details below all cards on larger screens */}
        <div className="hidden sm:block">
          {services[selectedService] && (
            <ServiceDetailsCard service={services[selectedService]} />
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
