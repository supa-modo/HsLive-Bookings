import React from "react";
import { motion } from "framer-motion";
import {
  Plane,
  Users,
  Map,
  Shield,
  Clock,
  Award,
  Sparkles,
} from "lucide-react";

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="group relative p-1 rounded-3xl bg-gradient-to-br  from-white/20 to-white/0 backdrop-blur-sm"
    >
      <div className="relative h-full bg-white/90 backdrop-blur-md hover:shadow-xl shadow-lg border border-gray-100 rounded-[22px] p-8 overflow-hidden">
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
                <span className="font-semibold">{pkg}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: Plane,
      title: "Private Jet Charters",
      description:
        "Experience unparalleled luxury and convenience with with the world's most reputable international jet charters for both business and leisure travel with us as your trusted brokers ensuring a hassle-free experience for you.",
      packages: [
        "Executive Business Escape",
        "Elite Escape: Luxury Leisure",
        "Dignitary Prestige Transfer",
      ],
    },
    {
      icon: Shield,
      title: "Logistics & Operations",
      description:
        "Comprehensive support services ensuring seamless travel experiences with meticulous attention to every detail.",
      packages: [
        "24/7 Dedicated Support",
        "Complete Flight Planning",
        "VIP Ground Handling",
      ],
    },
    {
      icon: Map,
      title: "Private Aircraft Safaris",
      description:
        "Discover Tanzania's breathtaking national parks from above with our exclusive safari flight experiences.",
      packages: [
        "Serengeti Luxury Safari",
        "Ngorongoro Crater Adventure",
        "Grand Tanzania Circuit",
      ],
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-violet-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="relative  mx-auto px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-gray-700 via-primary-700 to-gray-600 bg-clip-text text-transparent"
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-2xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
