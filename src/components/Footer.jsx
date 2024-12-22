import React from "react";
import { Plane } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="font-nunito-sans font-medium bg-gradient-to-br from-primary-800 via-gray-200 to-primary-400 text-gray-600 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/400/400')] opacity-3 bg-repeat"></div>

      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info Section */}
          <div className="relative">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/logo.png"
                alt="Luxury Private Jet"
                className="h-20 w-20 transition-transform duration-500 hover:scale-105"
              />
              <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-900 to-blue-800 text-transparent bg-clip-text">
                Shine Luxury Private Jets
              </span>
            </div>
            <p className="text-gray-800 font-medium mb-8 leading-relaxed">
              Your trusted partner in luxury private aviation, delivering
              exceptional travel experiences worldwide.
            </p>

            <div>
              <p className="text-gray-800 mb-3 leading-relaxed">
                Find us on our social media.
              </p>
              <div className="flex space-x-4">
                {[
                  {
                    icon: faFacebookF,
                    bg: "bg-blue-600 hover:bg-blue-200",
                    color: "hover:text-blue-600 text-white",
                  },
                  {
                    icon: faXTwitter,
                    bg: "bg-gray-800 hover:bg-gray-200",
                    color: "hover:text-gray-600 text-white",
                  },
                  {
                    icon: faInstagram,
                    bg: "hover:bg-pink-100 bg-gradient-to-br from-pink-600 to-purple-600",
                    color: "text-white",
                  },
                  {
                    icon: faLinkedinIn,
                    bg: "hover:bg-blue-500 bg-blue-700",
                    color: "hovertext-blue-700 text-white",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`${social.bg} ${social.color} p-2 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1`}
                  >
                    <FontAwesomeIcon icon={social.icon} className="w-6 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-800">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                ["Home", "#"],
                ["About Us", "#about"],
                ["Services", "#services"],
                ["Fleet", "#fleet"],
                ["Destinations", "#destinations"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-gray-500 hover:text-blue-600 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <div className="h-1 w-1 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-800">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "Private Jet Charter",
                "Group Charter",
                "Empty Leg Flights",
                "Aircraft Management",
                "Jet Card Program",
                "Concierge Services",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-blue-600 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <div className="h-1 w-1 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gray-800">
              Contact Info
            </h4>
            <ul className="space-y-4">
              {[
                {
                  icon: faMapMarkerAlt,
                  text: ["Bondeni Street, Arusha,", "Tanzania"],
                  // bg: "bg-blue-50",
                  iconColor: "text-red-600",
                },
                {
                  icon: faPhone,
                  text: ["+255 743 060 660"],
                  // bg: "bg-green-50",
                  iconColor: "text-green-600",
                },
                {
                  icon: faEnvelope,
                  text: ["info@shineluxuryprivatejets.com"],
                  // bg: "bg-purple-50",
                  iconColor: "text-purple-600",
                },
                {
                  icon: faClock,
                  text: ["24/7 Flight Support"],
                  // bg: "bg-orange-50",
                  iconColor: "text-orange-600",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3 group">
                  <div
                    className={`p-2 ${item.bg} rounded-lg transition-all duration-300`}
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className={`${item.iconColor} h-5 w-5`}
                    />
                  </div>
                  <div className="text-gray-500">
                    {item.text.map((line, i) => (
                      <p
                        key={i}
                        className="hover:text-blue-600 transition-colors duration-300"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-400 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} HS Live Limited. All rights
              reserved.
            </p>
            <div className="flex space-x-8">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-500 hover:text-blue-600 text-sm transition-colors duration-300"
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
