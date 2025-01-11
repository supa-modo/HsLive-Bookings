// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Link, useNavigate } from "react-router-dom";
// import { Users, Clock, ArrowRight, Shield, Star, Plane } from "lucide-react";
// import BookingModal from "../components/BookingModal";
// import Navigation from "../components/Navigation";

// import jet1 from "../assets/images/jet1.jpg";
// import jet2 from "../assets/images/jet2.jpg";
// import jet3 from "../assets/images/jet3.jpeg";
// import jet4 from "../assets/images/jet4.jpg";
// import jet5 from "../assets/images/jet5.jpg";
// import jet6 from "../assets/images/jet6.jpg";
// import jet7 from "../assets/images/jet7.jpg";
// import jet8 from "../assets/images/jet8.jpg";
// import jet9 from "../assets/images/jet9.jpg";
// import { FleetCard } from "../components/FleetSection";

// const fleetData = [
//   {
//     id: 1,
//     name: "Midsize Jet",
//     category: "Standard Package",
//     image: jet2,
//     capacity: "7-8",
//     range: "Up to 5 hours flight time",
//     description:
//       "Perfect for shorter trips and small groups, our Midsize Jet offers exceptional comfort and efficiency. Ideal for business executives and small groups seeking a premium travel experience.",
//     amenities: "Wi-Fi, Refreshments, Comfortable seating, Entertainment system",
//     price: "Starting from $4,500/hour",
//   },
//   {
//     id: 2,
//     name: "Super Midsize Jet",
//     category: "Premium Package",
//     image: jet8,
//     capacity: "9-12",
//     range: "Up to 7 hours flight time",
//     description:
//       "Experience superior comfort and range with our Super Midsize Jet. Perfect for larger groups and longer flights, offering enhanced amenities and more cabin space.",
//     amenities:
//       "Full refreshment center, Enhanced entertainment, Premium catering, Satellite phone",
//     price: "Starting from $6,500/hour",
//   },
//   {
//     id: 3,
//     name: "Heavy Jet",
//     category: "Executive Package",
//     image: jet6,
//     capacity: "19",
//     range: "Up to 10 hours flight time",
//     description:
//       "The ultimate in luxury air travel, our Heavy Jet provides unmatched comfort and capabilities. Perfect for large groups, long-distance flights, and those demanding the very best.",
//     amenities:
//       "Master suite, Multiple living areas, Gourmet kitchen, Advanced entertainment systems",
//     price: "Starting from $8,500/hour",
//   },
//   {
//     id: 4,
//     name: "Light Jet",
//     category: "Standard Package",
//     image: jet4,
//     capacity: "6-7",
//     range: "Up to 4 hours flight time",
//     description:
//       "Our Light Jet offers the perfect balance of comfort and efficiency for shorter trips. Ideal for small groups and quick business trips.",
//     amenities: "Wi-Fi, Refreshments, Comfortable seating",
//     price: "Starting from $3,500/hour",
//   },
//   {
//     id: 5,
//     name: "Ultra Long Range Jet",
//     category: "Executive Package",
//     image: jet9,
//     capacity: "14-16",
//     range: "Up to 14 hours flight time",
//     description:
//       "For those who demand the absolute best in luxury air travel. Our Ultra Long Range Jet offers unmatched comfort and capabilities for intercontinental flights.",
//     amenities:
//       "Master bedroom, Multiple living areas, Conference room, Gourmet kitchen",
//     price: "Starting from $12,500/hour",
//   },
//   {
//     id: 6,
//     name: "Regional Jet",
//     category: "Premium Package",
//     image: jet7,
//     capacity: "10-12",
//     range: "Up to 6 hours flight time",
//     description:
//       "The perfect choice for regional travel, offering exceptional comfort and reliability for medium-range flights.",
//     amenities:
//       "Enhanced entertainment, Premium catering, Satellite communications",
//     price: "Starting from $5,500/hour",
//   },
// ];

// const Fleet = () => {
//   const navigate = useNavigate();
//   const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navigation
//         scrolled={scrolled}
//         isMenuOpen={isMenuOpen}
//         setIsMenuOpen={setIsMenuOpen}
//       />
//       <div className="pt-32 pb-16">
//         <div className="container mx-auto px-4">
//           <div className="text-center max-w-5xl mx-auto mb-16">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <motion.h1
//                 className="text-3xl md:text-5xl font-extrabold font-sans bg-gradient-to-r from-gray-700 via-primary-700 to-gray-600 bg-clip-text text-transparent mb-4"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                   transition: {
//                     duration: 0.8,
//                     delay: 0.5,
//                     ease: "easeOut",
//                   },
//                 }}
//               >
//                 Explore Our Luxury Fleet
//                 <span className="block text-2xl font-sans text-red-500  pt-3">
//                   Experience Unparalleled Comfort
//                 </span>
//               </motion.h1>
//               <motion.p
//                 className="text-gray-600 font-nunito-sans font-bold text-xl mb-8 leading-relaxed"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                   transition: {
//                     duration: 0.8,
//                     delay: 0.7,
//                     ease: "easeOut",
//                   },
//                 }}
//               >
//                 Choose from our diverse range of meticulously maintained private
//                 jets, each offering unique features and capabilities to match
//                 your specific needs.
//               </motion.p>
//             </motion.div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//             {fleetData.map((fleet) => (
//               <FleetCard key={fleet.id} fleet={fleet} />
//             ))}
//           </div>

//           <div className="mt-16 text-center">
//             <div className="flex flex-col sm:flex-row justify-center gap-4">
//               <button
//                 onClick={() => setIsBookingModalOpen(true)}
//                 className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-all duration-300"
//               >
//                 Book Now
//               </button>
//               <button
//                 onClick={() => {
//                   navigate("/#contact");
//                 }}
//                 className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-xl font-medium hover:bg-primary-50 transition-all duration-300"
//               >
//                 Contact Us
//               </button>
//             </div>
//           </div>
//           <BookingModal
//             isOpen={isBookingModalOpen}
//             onClose={() => setIsBookingModalOpen(false)}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Fleet;
import React, { useState } from "react";
import {
  Plane,
  Shield,
  Map,
  Check,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Users,
} from "lucide-react";
import Navigation from "../components/Navigation";

const ServiceBox = ({ service, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl border transition-all duration-500 ${
        isActive
          ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white border-transparent shadow-xl"
          : "bg-white text-gray-900 border-gray-100 hover:border-primary-100 hover:shadow-lg"
      }`}
    >
      <div className={`p-2 sm:p-3 rounded-xl ${isActive ? 'bg-white/10' : 'bg-primary-50'}`}>
        <service.icon
          className={`w-6 h-6 sm:w-8 sm:h-8 ${isActive ? "text-white" : "text-primary-600"}`}
        />
      </div>
      <h2 className="text-lg sm:text-xl font-semibold mt-3 sm:mt-4">{service.title}</h2>
    </button>
  );
};

const PackageCard = ({ pkg, isExpanded, onToggle }) => {
  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
      <div className="p-6 sm:p-8">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
              {pkg.title}
            </h3>
            <p className="text-base sm:text-lg text-gray-600 font-light">{pkg.targetClients}</p>
          </div>
          <button
            onClick={onToggle}
            className="ml-4 p-2 sm:p-3 hover:bg-gray-50 rounded-full transition-colors"
          >
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
            )}
          </button>
        </div>

        <div className={`mt-4 sm:mt-6 space-y-4 sm:space-y-6 ${isExpanded ? 'block' : 'hidden'}`}>
          <div>
            <h4 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 sm:mb-4">
              Signature Features
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-primary-50 rounded-full p-1">
                    <Check className="w-4 h-4 text-primary-600" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {pkg.aircraft && (
            <div>
              <h4 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 sm:mb-4">
                Premium Fleet Selection
              </h4>
              <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                {pkg.aircraft.map((aircraft, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 sm:p-6 rounded-xl">
                    <h5 className="font-medium text-gray-900 mb-2 sm:mb-3">
                      {aircraft.name}
                    </h5>
                    <div className="space-y-1 sm:space-y-2 text-sm text-gray-600">
                      <p className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{aircraft.capacity}</span>
                      </p>
                      <p className="flex items-center space-x-2">
                        <Map className="w-4 h-4" />
                        <span>{aircraft.range}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);
  const [expandedPackages, setExpandedPackages] = useState({});
  const [scrolled, setScrolled] = useState(false); 
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  // Scroll event handler
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const togglePackage = (serviceIndex, packageIndex) => {
    setExpandedPackages((prev) => ({
      ...prev,
      [`${serviceIndex}-${packageIndex}`]: !prev[`${serviceIndex}-${packageIndex}`],
    }));
  };

  const services = [
    {
      icon: Plane,
      title: "Private Jet Charters",
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
          targetClients: "International dignitaries and government officials",
          features: [
            "Enhanced security measures",
            "VIP ground handling",
            "Private terminal access",
            "Dedicated flight crew",
          ],
          aircraft: [
            {
              name: "Bombardier Global 7500",
              capacity: "Up to 19 passengers",
              range: "7,700 nautical miles",
            },
            {
              name: "Boeing Business Jet",
              capacity: "Up to 25 passengers",
              range: "6,500 nautical miles",
            },
          ],
        },
      ],
    },
    {
      icon: Shield,
      title: "Logistics & Operations",
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
        {
          title: "VIP Ground Services",
          targetClients: "Premium aviation clients",
          features: [
            "Luxury ground transportation",
            "VIP terminal access",
            "Premium catering services",
            "Baggage handling",
          ],
        },
      ],
    },
    {
      icon: Map,
      title: "Private Aircraft Safaris",
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
        {
          title: "Grand Tanzania Circuit",
          targetClients: "Comprehensive safari explorers",
          features: [
            "Multi-park aerial circuit",
            "Customized safari experiences",
            "Premium lodging",
            "Expert wildlife guides",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation Component */}
      <Navigation scrolled={scrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Services Content */}
      <div className="pt-24 pb-16 sm:pb-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-primary-600 via-primary-800 to-gray-900 bg-clip-text text-transparent">
              Elevate Your Journey
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Experience unparalleled luxury and sophistication with our bespoke aviation services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {services.map((service, index) => (
              <ServiceBox
                key={index}
                service={service}
                isActive={activeService === index}
                onClick={() => setActiveService(index)}
              />
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <div className="space-y-6">
              {services[activeService].packages.map((pkg, index) => (
                <PackageCard
                  key={index}
                  pkg={pkg}
                  isExpanded={expandedPackages[`${activeService}-${index}`]}
                  onToggle={() => togglePackage(activeService, index)}
                />
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-16 sm:mt-20">
            <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-gray-600 rounded-2xl shadow-2xl p-8 sm:p-12 text-center text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                Begin Your Premium Journey
              </h3>
              <p className="text-sm sm:text-base font-semibold text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto">
                Connect with our dedicated concierge team to curate your perfect aviation experience
              </p>
              <button className="group bg-white text-sm sm:text-base text-gray-900 px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center space-x-2 mx-auto">
                <span >Schedule a Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;