import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import DestinationsSection from "./components/DestinationsSection";
import ServicePackages from "./components/ServicePackages";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

// Import images
import jet1 from "./assets/images/jet1.jpg";
import jet2 from "./assets/images/jet2.jpg";
import jet3 from "./assets/images/jet3.jpeg";
import jet4 from "./assets/images/jet4.jpg";
import jet5 from "./assets/images/jet5.jpg";
import jet6 from "./assets/images/jet6.jpg";
import jet7 from "./assets/images/jet7.jpg";
import jet8 from "./assets/images/jet8.jpg";
import jet9 from "./assets/images/jet9.jpg";

const heroImages = [
  {
    url: jet3,
    title: "Experience Luxury",
    subtitle: "Beyond Boundaries",
    description:
      "Elevate your travel with our bespoke private jet services, designed for the discerning traveler.",
  },
  {
    url: jet2,
    title: "Ultimate Comfort",
    subtitle: "Redefined in the Skies",
    description:
      "Indulge in unparalleled luxury and comfort aboard our state-of-the-art private jets.",
  },
  {
    url: jet5,
    title: "Your Journey",
    subtitle: "Tailored to Perfection",
    description:
      "Customize every detail of your flight for a seamless and personalized travel experience.",
  },
  {
    url: jet4,
    title: "Fly Exclusively",
    subtitle: "On Your Terms & Schedule",
    description:
      "Enjoy the freedom of flexible schedules and private terminals for a stress-free journey.",
  },
  {
    url: jet1,
    title: "Unmatched Elegance",
    subtitle: "In Every Detail",
    description:
      "From gourmet dining to plush interiors, experience the epitome of luxury in the skies.",
  },
  {
    url: jet6,
    title: "Seamless Travel",
    subtitle: "From Takeoff to Landing",
    description:
      "Our dedicated team ensures a smooth and luxurious journey from start to finish.",
  },
  {
    url: jet7,
    title: "Global Reach",
    subtitle: "Unlimited Destinations",
    description:
      "Access over 5,000 airports worldwide with our extensive private jet network.",
  },
  {
    url: jet8,
    title: "Privacy Redefined",
    subtitle: "Your Personal Sanctuary",
    description:
      "Travel in complete privacy and comfort, away from the crowds and hassles of commercial flights.",
  },
  {
    url: jet9,
    title: "Luxury Awaits",
    subtitle: "Your Skyward Escape",
    description:
      "Step into a world of opulence and convenience with our premium private aviation services.",
  },
];  

const LuxuryJetLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <HeroSection
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        heroImages={heroImages}
      />
      <ServicesSection />
      <ServicePackages />
      <DestinationsSection />
      <ContactSection />
    </div>
  );
};

export default LuxuryJetLanding;
