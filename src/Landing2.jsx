import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import FleetSection from "./components/FleetSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

// Import images
import jet1 from "./assets/images/jet1.png";
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
    subtitle: "Private Aviation",
    description:
      "Discover unparalleled comfort and convenience with our premium private jet charter services.",
  },
  {
    url: jet2,
    title: "Ultimate Comfort",
    subtitle: "In The Skies",
    description:
      "Travel in style with our world-class fleet of private aircraft and exceptional service.",
  },
  {
    url: jet5,
    title: "Your Journey",
    subtitle: "Your Schedule",
    description:
      "Flexible departure times and personalized flight experiences tailored to your needs.",
  },
  {
    url: jet4,
    title: "Your Journey",
    subtitle: "Your Schedule",
    description:
      "Flexible departure times and personalized flight experiences tailored to your needs.",
  },
  {
    url: jet1,
    title: "Your Journey",
    subtitle: "Your Schedule",
    description:
      "Flexible departure times and personalized flight experiences tailored to your needs.",
  },
  {
    url: jet6,
    title: "Ultimate Comfort",
    subtitle: "In The Skies",
    description:
      "Travel in style with our world-class fleet of private aircraft and exceptional service.",
  },
  {
    url: jet7,
    title: "Your Journey",
    subtitle: "Your Schedule",
    description:
      "Flexible departure times and personalized flight experiences tailored to your needs.",
  },
  {
    url: jet8,
    title: "Your Journey",
    subtitle: "Your Schedule",
    description:
      "Flexible departure times and personalized flight experiences tailored to your needs.",
  },
  {
    url: jet9,
    title: "Your Journey",
    subtitle: "Your Schedule",
    description:
      "Flexible departure times and personalized flight experiences tailored to your needs.",
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
    <div className="min-h-screen bg-white">
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
      <FleetSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LuxuryJetLanding;
