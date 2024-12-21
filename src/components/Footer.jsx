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
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <Plane className="text-primary-500 h-10 w-10" />
              <span className="text-3xl font-bold bg-gradient-to-r from-primary-500 to-primary-400 text-transparent bg-clip-text">
                HS Live
              </span>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Your trusted partner in luxury private aviation, delivering
              exceptional travel experiences worldwide. Experience the pinnacle of
              private jet charter services.
            </p>
            <div className="flex space-x-5">
              <a
                href="#facebook"
                className="p-3 rounded-full bg-[#1877F2] hover:bg-[#0d6efd] transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} className="h-5 w-5 text-white" />
              </a>
              <a
                href="#twitter"
                className="p-3 rounded-full bg-[#1DA1F2] hover:bg-[#0c85d0] transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} className="h-5 w-5 text-white" />
              </a>
              <a
                href="#instagram"
                className="p-3 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:from-[#6d2e94] hover:via-[#d41919] hover:to-[#cf6530] transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="h-5 w-5 text-white" />
              </a>
              <a
                href="#linkedin"
                className="p-3 rounded-full bg-[#0A66C2] hover:bg-[#084d93] transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-primary-400">Quick Links</h4>
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
                    className="text-gray-300 hover:text-primary-400 transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-2 h-2 bg-primary-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-primary-400">Our Services</h4>
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
                    className="text-gray-300 hover:text-primary-400 transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-2 h-2 bg-primary-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 text-primary-400">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-primary-500 h-5 w-5 mt-1"
                />
                <span className="text-gray-300">
                  Bondeni Street, Arusha,
                  <br />
                  Tanzania
                </span>
              </li>
              <li className="flex items-center space-x-4">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-primary-500 h-5 w-5"
                />
                <span className="text-gray-300">+255 743 060 660</span>
              </li>
              <li className="flex items-center space-x-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-primary-500 h-5 w-5"
                />
                <span className="text-gray-300">joebiseko@gmail.com</span>
              </li>
              <li className="flex items-center space-x-4">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-primary-500 h-5 w-5"
                />
                <span className="text-gray-300">24/7 Flight Support</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-16 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {new Date().getFullYear()} HS Live Limited. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
