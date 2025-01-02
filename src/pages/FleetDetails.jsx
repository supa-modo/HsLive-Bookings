import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users,
  Clock,
  Shield,
  Star,
  Plane,
  Coffee,
  Wifi,
  Tv,
  Phone,
  Map,
  ChevronRight,
  ChevronLeft,
  Mail,
  SquareArrowOutUpRight,
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

const fleetData = [
  {
    id: 1,
    name: "Midsize Jet",
    category: "Standard Package",
    images: [jet9, jet3, jet7],
    capacity: "7-8",
    range: "Up to 5 hours flight time",
    description:
      "Perfect for shorter trips and small groups, our Midsize Jet offers exceptional comfort and efficiency. Ideal for business executives and small groups seeking a premium travel experience.",
    amenities: [
      "Wi-Fi Connectivity",
      "Refreshment Center",
      "Comfortable Seating",
      "Entertainment System",
      "Workspace",
      "Climate Control",
      "Restroom",
      "Baggage Space",
    ],
    specifications: {
      "Cabin Height": "5.8 ft",
      "Cabin Width": "5.5 ft",
      "Cabin Length": "17.5 ft",
      "Maximum Speed": "534 mph",
      "Maximum Range": "2,000 nm",
      "Maximum Altitude": "45,000 ft",
    },
    features: [
      {
        icon: Users,
        title: "Passenger Capacity",
        description: "Comfortably seats 7-8 passengers",
      },
      {
        icon: Clock,
        title: "Flight Range",
        description: "Up to 5 hours non-stop flight",
      },
      {
        icon: Shield,
        title: "Safety Features",
        description: "Advanced safety systems and experienced crew",
      },
      {
        icon: Star,
        title: "Luxury Experience",
        description: "Premium comfort and personalized service",
      },
    ],
    price: "Starting from $4,500/hour",
  },
  {
    id: 2,
    name: "Super Midsize Jet",
    category: "Standard Package",
    images: [jet6, jet4, jet7],
    capacity: "7-8",
    range: "Up to 5 hours flight time",
    description:
      "Perfect for shorter trips and small groups, our Midsize Jet offers exceptional comfort and efficiency. Ideal for business executives and small groups seeking a premium travel experience.",
    amenities: [
      "Wi-Fi Connectivity",
      "Refreshment Center",
      "Comfortable Seating",
      "Entertainment System",
      "Workspace",
      "Climate Control",
      "Restroom",
      "Baggage Space",
    ],
    specifications: {
      "Cabin Height": "5.8 ft",
      "Cabin Width": "5.5 ft",
      "Cabin Length": "17.5 ft",
      "Maximum Speed": "534 mph",
      "Maximum Range": "2,000 nm",
      "Maximum Altitude": "45,000 ft",
    },
    features: [
      {
        icon: Users,
        title: "Passenger Capacity",
        description: "Comfortably seats 7-8 passengers",
      },
      {
        icon: Clock,
        title: "Flight Range",
        description: "Up to 5 hours non-stop flight",
      },
      {
        icon: Shield,
        title: "Safety Features",
        description: "Advanced safety systems and experienced crew",
      },
      {
        icon: Star,
        title: "Luxury Experience",
        description: "Premium comfort and personalized service",
      },
    ],
    price: "Starting from $4,500/hour",
  },
  {
    id: 3,
    name: "Heavy Jet",
    category: "Standard Package",
    images: [jet6, jet4, jet7],
    capacity: "7-8",
    range: "Up to 5 hours flight time",
    description:
      "Perfect for shorter trips and small groups, our Midsize Jet offers exceptional comfort and efficiency. Ideal for business executives and small groups seeking a premium travel experience.",
    amenities: [
      "Wi-Fi Connectivity",
      "Refreshment Center",
      "Comfortable Seating",
      "Entertainment System",
      "Workspace",
      "Climate Control",
      "Restroom",
      "Baggage Space",
    ],
    specifications: {
      "Cabin Height": "5.8 ft",
      "Cabin Width": "5.5 ft",
      "Cabin Length": "17.5 ft",
      "Maximum Speed": "534 mph",
      "Maximum Range": "2,000 nm",
      "Maximum Altitude": "45,000 ft",
    },
    features: [
      {
        icon: Users,
        title: "Passenger Capacity",
        description: "Comfortably seats 7-8 passengers",
      },
      {
        icon: Clock,
        title: "Flight Range",
        description: "Up to 5 hours non-stop flight",
      },
      {
        icon: Shield,
        title: "Safety Features",
        description: "Advanced safety systems and experienced crew",
      },
      {
        icon: Star,
        title: "Luxury Experience",
        description: "Premium comfort and personalized service",
      },
    ],
    price: "Starting from $4,500/hour",
  },
  {
    id: 4,
    name: "Light Jet",
    category: "Standard Package",
    images: [jet2, jet8, jet5],
    capacity: "7-8",
    range: "Up to 5 hours flight time",
    description:
      "Perfect for shorter trips and small groups, our Midsize Jet offers exceptional comfort and efficiency. Ideal for business executives and small groups seeking a premium travel experience.",
    amenities: [
      "Wi-Fi Connectivity",
      "Refreshment Center",
      "Comfortable Seating",
      "Entertainment System",
      "Workspace",
      "Climate Control",
      "Restroom",
      "Baggage Space",
    ],
    specifications: {
      "Cabin Height": "5.8 ft",
      "Cabin Width": "5.5 ft",
      "Cabin Length": "17.5 ft",
      "Maximum Speed": "534 mph",
      "Maximum Range": "2,000 nm",
      "Maximum Altitude": "45,000 ft",
    },
    features: [
      {
        icon: Users,
        title: "Passenger Capacity",
        description: "Comfortably seats 7-8 passengers",
      },
      {
        icon: Clock,
        title: "Flight Range",
        description: "Up to 5 hours non-stop flight",
      },
      {
        icon: Shield,
        title: "Safety Features",
        description: "Advanced safety systems and experienced crew",
      },
      {
        icon: Star,
        title: "Luxury Experience",
        description: "Premium comfort and personalized service",
      },
    ],
    price: "Starting from $4,500/hour",
  },
  // ... (other fleet data)
];

const FleetDetails = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { id } = useParams();
  const selectedFleet = fleetData.find((item) => item.id === parseInt(id));
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

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
              Selected Fleet Not Found!!
            </h2>
            <Link
              to="/fleet"
              className="inline-flex items-center  space-x-2 text-primary-600 font-semibold underline hover:text-primary-700 transition-colors duration-300"
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
      <div className="relative h-[80vh] w-full">
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
        <div className="absolute bottom-32 left-0 w-full">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <motion.h1
                className="text-4xl md:text-6xl font-extrabold font-sans text-primary-800 mb-4"
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
                <span className="block text-3xl font-sans text-amber-500  pt-3">
                  {selectedFleet.category}
                </span>
              </motion.h1>
              <motion.p
                className="text-gray-600 font-nunito-sans font-bold text-xl mb-8 leading-relaxed"
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
      <div className="max-w-screen-2xl mx-auto py-10 pb-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Features */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className=" p-2 text-xl sm:text-2xl font-extrabold mb-2 md:mb-4 bg-gradient-to-r from-gray-600 via-primary-500 to-gray-600 bg-clip-text text-transparent">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedFleet.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50"
                >
                  <feature.icon className="h-6 w-6 text-primary-600" />
                  <div>
                    <h3 className="font-bold text-gray-600">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className=" p-2 text-xl sm:text-2xl font-extrabold mb-2 md:mb-4 bg-gradient-to-r from-gray-600 via-primary-500 to-gray-600 bg-clip-text text-transparent">
              Technical Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {Object.entries(selectedFleet.specifications).map(
                ([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <span className="text-gray-600 font-semibold">{key}</span>
                    <span className="font-semibold text-primary-600">
                      {value}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Amenities */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className=" p-2 text-xl sm:text-2xl font-extrabold mb-2 md:mb-4 bg-gradient-to-r from-gray-600 via-primary-500 to-gray-600 bg-clip-text text-transparent">
              Onboard Amenities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {selectedFleet.amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg"
                >
                  <Star className="h-5 w-5 text-primary-600" />
                  <span className="text-gray-600 font-semibold">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className=" p-2 text-xl sm:text-2xl font-extrabold mb-2 md:mb-4 bg-gradient-to-r from-gray-600 via-primary-500 to-gray-600 bg-clip-text text-transparent">
                Book This Aircraft
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-500 font-extrabold">
                    Starting Price
                  </span>
                  <span className="font-bold text-red-600">
                    {selectedFleet.price}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-500 font-extrabold">Capacity</span>
                  <span className="font-semibold">
                    {selectedFleet.capacity} Passengers
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-500 font-extrabold">
                    Flight Range
                  </span>
                  <span className="font-semibold">{selectedFleet.range}</span>
                </div>
              </div>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="w-full bg-primary-600 text-white py-4 rounded-xl font-medium hover:bg-primary-700 transition-colors duration-300"
              >
                Book Now
              </button>
              <div className="mt-6">
                <h3 className="font-bold text-gray-600 mb-2">
                  Need assistance?
                </h3>
                <p className="text-gray-600 text-sm">
                  Contact our team for personalized booking support and
                  additional information.
                </p>
                <div className="mt-4 space-y-2">
                  <a
                    href="tel:+255743060660"
                    className="flex items-center space-x-4 font-bold text-primary-600 hover:underline hover:text-primary-700"
                  >
                    <Phone className="h-4 w-4" />
                    <span>+255 743 060 660</span>
                  </a>
                  <a
                    href="mailto:info@shineluxuryprivatejets.com"
                    className="flex items-center space-x-4 font-semibold text-primary-600 hover:underline hover:text-primary-700"
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
