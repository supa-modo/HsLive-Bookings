import React from "react";
import { Shield, Globe, Clock, Users, Award } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, index }) => {
  return (
    <div className="group relative p-1 rounded-3xl bg-gradient-to-br from-white/20 to-white/0 backdrop-blur-sm">
      <div className="relative h-full bg-white/90 backdrop-blur-md rounded-[22px] p-8 overflow-hidden transition-all duration-500 shadow-2xl hover:shadow-xl">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* Floating dots decoration */}
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-primary-200/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

        {/* Icon container */}
        <div className="relative mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl">
            <Icon
              className="w-10 h-10 text-primary-600 transform transition-transform duration-500 group-hover:rotate-12"
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 mt-8">
          <h3 className="text-2xl font-extrabold bg-gradient-to-r from-primary-600 to-gray-500 bg-clip-text text-transparent mb-4">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed font-semibold">
            {description}
          </p>
        </div>

        {/* Hover state indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-primary-300 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Global Accessibility",
      description:
        "Access to over 5,000 airports worldwide with our extensive network of private jets and dedicated terminals departuring from anywhere within the United Republic of Tanzania or East African Countries.",
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

  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-violet-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-primary-800 to-gray-700 bg-clip-text text-transparent">
            Exceptional Private Aviation
          </h2>
          <p className="text-xl sm:text-2xl text-gray-500 leading-relaxed font-semibold">
            Experience the pinnacle of luxury travel with our comprehensive
            suite of private aviation services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
