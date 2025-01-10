import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Star,
  ChevronRight,
  ChevronLeft,
  Check,
  Globe,
  Users,
  Clock,
  Shield,
  Plane,
  Coffee,
  Wifi,
  Tv,
  Phone,
  Map,
  Mail,
  SquareArrowOutUpRight,
  Diamond,
  Heart,
  Crown,
  Lock,
} from "lucide-react";
import Navigation from "../components/Navigation";

// Import images
import jet1 from "../assets/images/jet1.jpg";
import jet2 from "../assets/images/jet2.jpg";
import jet3 from "../assets/images/jet3.jpeg";
import jet4 from "../assets/images/jet4.jpg";
import jet5 from "../assets/images/jet5.jpg";
import jet6 from "../assets/images/jet6.jpg";
import jet7 from "../assets/images/jet7.jpg";
import jet8 from "../assets/images/jet8.jpg";
import jet9 from "../assets/images/jet9.jpg";
import BookingModal from "../components/BookingModal";

const serviceData = [
  {
    id: 1,
    name: "Executive Business Escape",
    category: "Business Travel",
    images: [jet3, jet6, jet7],
    aircraft: "Embraer Praetor 600",
    capacity: "Up to 12",
    range: "4,000 nautical miles",
    description:
      "Tailored for executives and corporate teams, offering seamless business travel with in-flight productivity features and maximum privacy.",
    highlights: [
      "Direct flights to meeting destinations",
      "Fully equipped business suite",
      "High-speed Wi-Fi connectivity",
      "Private meeting areas",
      "Dedicated concierge service",
      "Premium catering options",
    ],
    amenities: [
      "High-speed Wi-Fi",
      "Conference facilities",
      "Power outlets",
      "Satellite phone",
      "Premium catering",
      "Entertainment system",
      "Private workspaces",
      "Fully reclining seats",
    ],
    specifications: {
      "Aircraft Type": "Embraer Praetor 600",
      "Passenger Capacity": "Up to 12",
      Range: "4,000 nautical miles",
      "Cruise Speed": "466 knots",
      "Cabin Height": "6 feet",
      "Cabin Width": "6.8 feet",
      "Baggage Capacity": "150 cubic feet",
    },
    features: [
      {
        icon: Users,
        title: "Corporate Groups",
        description: "Ideal for executive teams up to 12 passengers",
      },
      {
        icon: Clock,
        title: "Time Efficiency",
        description: "Direct flights to your business destination",
      },
      {
        icon: Shield,
        title: "Privacy Assured",
        description: "Confidential environment for meetings",
      },
      {
        icon: Globe,
        title: "Global Access",
        description: "Reach any business destination worldwide",
      },
    ],
    price: "Starting from $4,500/hour",
  },
  {
    id: 2,
    name: "The Elite Leisure Escape",
    category: "Luxury Leisure package",
    images: [jet6, jet4, jet7],
    aircraft: "Gulfstream G650ER",
    capacity: "Up to 18",
    range: "7,500 nautical miles",
    description:
      "Designed for high-net-worth individuals and families, this package ensures a luxurious and personalized travel experience for your leisure trips.",
    highlights: [
      "Fly directly to exotic destinations",
      "Gourmet in-flight dining",
      "Customized entertainment options",
      "Concierge services for villas and yachts",
      "Celebratory surprises for special occasions",
    ],
    features: [
      {
        icon: Plane,
        title: "Direct Access",
        description: "Travel directly to your desired destination",
      },
      {
        icon: Diamond,
        title: "Luxury Experience",
        description: "Unmatched comfort and style during travel",
      },
      {
        icon: Heart,
        title: "Personalized Service",
        description: "Tailored in-flight amenities and concierge options",
      },
      {
        icon: Star,
        title: "Exclusive Perks",
        description: "Access to premium services and packages",
      },
    ],
    amenities: [
      "Fully reclining seats",
      "Gourmet catering",
      "Panoramic windows",
      "Private sleeping quarters",
      "Entertainment system",
      "On-demand concierge",
    ],
    specifications: {
      "Aircraft Type": "Gulfstream G650ER",
      "Passenger Capacity": "Up to 18",
      Range: "7,500 nautical miles",
      "Cruise Speed": "516 knots",
      "Cabin Height": "6.5 feet",
      "Cabin Width": "8.5 feet",
      "Baggage Capacity": "195 cubic feet",
    },
    price: "Starting from $4,500/hour",
  },
  {
    id: 3,
    name: "Dignitary Prestige Transfer",
    category: "VIP Transfers",
    images: [jet6, jet4, jet7],
    aircraft: "Bombardier Global 7500",
    capacity: "Up to 19",
    range: "7,700 nautical miles",
    description:
      "Perfect for international dignitaries, celebrities, and government officials seeking unparalleled privacy, security, and luxury for their travel needs.",
    highlights: [
      "Seamless and secure transfers",
      "Red-carpet welcome services",
      "Tailored in-flight settings",
      "Enhanced security measures",
      "VIP lounge access",
    ],
    features: [
      {
        icon: Shield,
        title: "Enhanced Security",
        description: "Unmatched privacy and protection during travel",
      },
      {
        icon: Crown,
        title: "Red-Carpet Treatment",
        description: "Exclusive services for VIP travelers",
      },
      {
        icon: Lock,
        title: "Confidential Travel",
        description: "Secure environment for high-profile clients",
      },
      {
        icon: Map,
        title: "Global Reach",
        description: "Travel to key diplomatic and high-profile locations",
      },
    ],
    amenities: [
      "Private suites",
      "Conference rooms",
      "Luxury dining options",
      "Advanced entertainment systems",
      "Customized cabin settings",
      "Dedicated staff",
    ],
    specifications: {
      "Aircraft Type": "Bombardier Global 7500",
      "Passenger Capacity": "Up to 19",
      Range: "7,700 nautical miles",
      "Cruise Speed": "516 knots",
      "Cabin Height": "6.3 feet",
      "Cabin Width": "8.2 feet",
      "Baggage Capacity": "195 cubic feet",
    },
    price: "Starting from $4,500/hour",
  },
];

const FleetDetails = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { id } = useParams();
  const selectedFleet = serviceData.find((item) => item.id === parseInt(id));
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!selectedFleet) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation
          scrolled={scrolled}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-red-600 mb-6">
              Selected Package Not Found!!
            </h2>
            <Link
              to="/fleet"
              className="inline-flex items-center space-x-2 text-primary-600 font-semibold underline hover:text-primary-700 transition-colors duration-300"
            >
              <span>Return to Fleet Overview</span>
              <SquareArrowOutUpRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedFleet.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedFleet.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* Hero Image Section */}
      <div className="relative h-[50vh] sm:h-[80vh] w-full">
        <div className="absolute inset-0">
          <img
            src={selectedFleet.images[currentImageIndex]}
            alt={selectedFleet.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-gray-100" />
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prevImage}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {selectedFleet.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex ? "bg-white w-4" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-10 sm:bottom-32 left-0 w-full">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <motion.h1
                className="text-3xl sm:text-4xl md:text-6xl font-extrabold font-sans text-primary-800 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: 0.5,
                    ease: "easeOut",
                  },
                }}
              >
                {selectedFleet.name}
                <span className="block text-xl sm:text-3xl font-sans text-amber-600 pt-2 sm:pt-3 mt-2">
                  {selectedFleet.category}
                </span>
              </motion.h1>
              <motion.p
                className="backdrop-blur-sm rounded-2xl text-base md:text-xl text-gray-700 font-nunito-sans font-bold mb-4 sm:mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: 0.7,
                    ease: "easeOut",
                  },
                }}
              >
                {selectedFleet.description}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-2xl mx-auto py-8 sm:py-10 pb-16 sm:pb-24 px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {/* Features */}
        <div className="lg:col-span-2 space-y-6 sm:space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-extrabold mb-4 bg-gradient-to-r from-gray-600 via-primary-500 to-gray-600 bg-clip-text text-transparent">
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedFleet.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50"
                >
                  <feature.icon className="h-6 w-6 text-primary-600" />
                  <div>
                    <h3 className="font-bold text-gray-600">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-extrabold mb-4 bg-gradient-to-r from-gray-600 via-primary-500 to-gray-600 bg-clip-text text-transparent">
              Aircraft Technical Specifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {Object.entries(selectedFleet.specifications).map(
                ([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <span className="text-sm sm:text-base text-gray-600 font-semibold">
                      {key}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-primary-600">
                      {value}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Package Highlights */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-extrabold mb-4 bg-gradient-to-r from-gray-600 via-primary-500 to-gray-600 bg-clip-text text-transparent">
              Package Highlights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {selectedFleet.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                >
                  <Check className="h-5 w-5 text-primary-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-600 font-semibold">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-extrabold mb-4 bg-gradient-to-r from-gray-600 via-primary-500 to-gray-600 bg-clip-text text-transparent">
              Onboard Amenities
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {selectedFleet.amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg"
                >
                  <Star className="h-5 w-5 text-primary-600" />
                  <span className="text-sm sm:text-base text-gray-600 font-semibold">
                    {amenity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-extrabold mb-4 bg-gradient-to-r from-gray-600 via-primary-500 to-gray-600 bg-clip-text text-transparent">
                Book This Aircraft
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm sm:text-base text-gray-500 font-bold">
                    Starting Price
                  </span>
                  <span className="text-sm sm:text-base font-bold text-red-600">
                    {selectedFleet.price}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm sm:text-base text-gray-500 font-bold">
                    Capacity
                  </span>
                  <span className="text-sm sm:text-base font-semibold">
                    {selectedFleet.capacity} Passengers
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm sm:text-base text-gray-500 font-bold">
                    Flight Range
                  </span>
                  <span className="text-sm sm:text-base font-semibold">
                    {selectedFleet.range}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full bg-primary-600 text-white py-3 sm:py-4 rounded-xl text-sm sm:text-base font-medium hover:bg-primary-700 transition-colors duration-300"
              >
                Book Now
              </button>
              <div className="mt-6">
                <h3 className="text-sm sm:text-base font-bold text-gray-600 mb-2">
                  Need assistance?
                </h3>
                <p className="text-sm text-gray-600">
                  Contact our team for personalized booking support and
                  additional information.
                </p>
                <div className="mt-4 space-y-2">
                  <a
                    href="tel:+255743060660"
                    className="flex items-center space-x-4 text-sm sm:text-base font-bold text-primary-600 hover:underline hover:text-primary-700"
                  >
                    <Phone className="h-4 w-4" />
                    <span>+255 743 060 660</span>
                  </a>
                  <a
                    href="mailto:info@shineluxuryprivatejets.com"
                    className="flex items-center space-x-4 text-sm sm:text-base font-semibold text-primary-600 hover:underline hover:text-primary-700"
                  >
                    <Mail className="h-4 w-4" />
                    <span>info@shineluxuryprivatejets.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default FleetDetails;
