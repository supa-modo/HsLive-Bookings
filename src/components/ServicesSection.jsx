import React from "react";
import { motion } from "framer-motion";
import { Shield, Globe, Clock, Users, Award } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
  >
    <div className="bg-primary-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      <Icon className="text-primary-600 h-8 w-8" />
    </div>
    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const services = [
  {
    icon: Globe,
    title: "Global Access",
    description:
      "Access to over 5,000 airports worldwide with our extensive network of private jets and dedicated terminals.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Industry-leading safety standards with rigorous maintenance protocols and experienced flight crews.",
  },
  {
    icon: Clock,
    title: "24/7 Concierge",
    description:
      "Round-the-clock personal concierge service for seamless travel arrangements and special requests.",
  },
  {
    icon: Users,
    title: "Tailored Experience",
    description:
      "Customized flight experiences with personalized catering, ground transportation, and cabin configurations.",
  },
  {
    icon: Award,
    title: "Premium Service",
    description:
      "Unmatched luxury service with attention to every detail of your journey from takeoff to landing.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Exceptional Private Aviation
          </h2>
          <p className="text-gray-600 text-lg">
            Experience the pinnacle of luxury travel with our comprehensive suite of
            private aviation services tailored to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
