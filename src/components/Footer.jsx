import React from "react";
import { Plane } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-24 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/api/placeholder/400/400')] opacity-5 bg-repeat"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="relative">
            <div className="flex items-center space-x-3 mb-8 group">
              <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm group-hover:bg-primary-500/20 transition-all duration-500">
                <Plane className="text-primary-400 h-8 w-8 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-primary-300 text-transparent bg-clip-text">
                HS Live
              </span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Your trusted partner in luxury private aviation, delivering
              exceptional travel experiences worldwide.
            </p>
            <div className="flex space-x-6">
              {[
                { icon: faFacebookF, color: "#1877F2", label: "Facebook" },
                { icon: faTwitter, color: "#1DA1F2", label: "Twitter" },
                { icon: faInstagram, gradient: "from-[#833AB4] via-[#FD1D1D] to-[#F77737]", label: "Instagram" },
                { icon: faLinkedinIn, color: "#0A66C2", label: "LinkedIn" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={`#${social.label.toLowerCase()}`}
                  className={`p-3 rounded-lg transform hover:-translate-y-1 transition-all duration-300 ${
                    social.gradient 
                      ? `bg-gradient-to-br ${social.gradient} hover:shadow-lg hover:shadow-pink-500/20` 
                      : `bg-white/10 hover:bg-[${social.color}] hover:shadow-lg`
                  } backdrop-blur-sm`}
                  aria-label={social.label}
                >
                  <FontAwesomeIcon 
                    icon={social.icon} 
                    className="h-5 w-5 text-white hover:scale-110 transition-transform duration-300" 
                  />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 text-primary-400 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary-500/30 rounded-full"></span>
            </h4>
            <ul className="space-y-4">
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
                    className="text-gray-400 hover:text-primary-400 transition-all duration-300 flex items-center space-x-3 group"
                  >
                    <span className="w-2 h-2 bg-primary-500/50 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    <span className="relative overflow-hidden">
                      {label}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500/30 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 text-primary-400 relative">
              Our Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary-500/30 rounded-full"></span>
            </h4>
            <ul className="space-y-4">
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
                    className="text-gray-400 hover:text-primary-400 transition-all duration-300 flex items-center space-x-3 group"
                  >
                    <span className="w-2 h-2 bg-primary-500/50 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    <span className="relative overflow-hidden">
                      {service}
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500/30 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 text-primary-400 relative">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary-500/30 rounded-full"></span>
            </h4>
            <ul className="space-y-6">
              {[
                { icon: faMapMarkerAlt, text: ["Bondeni Street, Arusha,", "Tanzania"] },
                { icon: faPhone, text: ["+255 743 060 660"] },
                { icon: faEnvelope, text: ["joebiseko@gmail.com"] },
                { icon: faClock, text: ["24/7 Flight Support"] }
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-4 group">
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-primary-500/20 transition-all duration-300">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-primary-400 h-5 w-5 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-gray-400">
                    {item.text.map((line, i) => (
                      <p key={i} className="hover:text-primary-400 transition-colors duration-300">{line}</p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/30 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} HS Live Limited. All rights reserved.
            </p>
            <div className="flex space-x-8">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-primary-400 text-sm relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500/30 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;