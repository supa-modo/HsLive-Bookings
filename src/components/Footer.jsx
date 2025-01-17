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
    <footer className="font-nunito-sans font-medium bg-gradient-to-br from-primary-900 to-primary-700 text-gray-600 pt-12 sm:pt-16 pb-6 sm:pb-8 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('/api/placeholder/400/400')] opacity-3 bg-repeat"></div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Company Info Section */}
          <div className="relative">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="Luxury Private Jet"
                className="h-12 sm:h-16 w-12 sm:w-16 transition-transform duration-500 hover:scale-105"
              />
              <span className="text-lg sm:text-[22px] font-extrabold bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text">
                Shine Luxury Private Jets
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-400 font-medium mt-4 mb-6 sm:mb-8 leading-relaxed">
              Your trusted partner in luxury private aviation, delivering
              exceptional travel experiences worldwide.
            </p>

            <div>
              <p className="text-sm sm:text-base text-gray-400 mb-3 leading-relaxed">
                Connect with us on social media.
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
                    className={`${social.bg} ${social.color} px-[5px] py-1 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1`}
                  >
                    <FontAwesomeIcon
                      icon={social.icon}
                      className="w-5 h-[14px]"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-gray-100">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                ["Home", "/"],
                ["About Us", "#about"],
                ["Services", "#services"],
                // ["Fleet", "/fleet"],
                ["Destinations", "#destinations"],
                ["Contact Us", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm sm:text-base text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center space-x-2 group"
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
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-gray-100">
              Our Services
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Private Jet Charter",
                "Private Aircraft Safaris",
                "Ground Handling and Support",
                "Aircraft Management",
                "Logistical Flight Support",
                "Concierge Services",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-sm sm:text-base text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center space-x-2 group"
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
            <h4 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 text-gray-100">
              Contact Info
            </h4>
            <ul className="space-y-1 sm:space-y-4">
              {[
                {
                  icon: faMapMarkerAlt,
                  text: [`Bondeni Street, Arusha\, Tanzania`],
                  link: "https://maps.google.com/?q=Bondeni+Street+Arusha+Tanzania",
                  target: "_blank",
                  iconColor: "text-red-600",
                },
                {
                  icon: faPhone,
                  text: ["+255 743 060 660"],
                  link: "tel:+255743060660",
                  iconColor: "text-green-600",
                },
                {
                  icon: faEnvelope,
                  text: ["info@shineluxuryprivatejets.com"],
                  link: "mailto:info@shineluxuryprivatejets.com",
                  iconColor: "text-purple-600",
                },
                {
                  icon: faClock,
                  text: ["24/7 Flight Support"],
                  iconColor: "text-orange-600",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3 group">
                  <div className={`p-1 rounded-lg transition-all duration-300`}>
                    <FontAwesomeIcon
                      icon={item.icon}
                      className={`${item.iconColor} h-5  w-5 `}
                    />
                  </div>
                  <div className="text-gray-500">
                    {item.text.map((line, i) =>
                      item.link ? (
                        <a
                          key={i}
                          href={item.link}
                          target={item.target}
                          className="text-sm sm:text-base text-gray-400 hover:text-primary-400 transition-colors duration-300 block"
                        >
                          {line}
                        </a>
                      ) : (
                        <p
                          key={i}
                          className="text-sm sm:text-base text-gray-400 hover:text-primary-400 transition-colors duration-300"
                        >
                          {line}
                        </p>
                      )
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300/30 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-xs sm:text-sm text-gray-400">
              <span className="text-sm sm:text-[16px] mr-1">©</span>{" "}
              {new Date().getFullYear()} HS Live Limited. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-8">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-xs sm:text-sm text-gray-400 hover:text-primary-400 transition-colors duration-300"
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
