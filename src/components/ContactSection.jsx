import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, ChevronRight } from "lucide-react";
import bg from "../assets/images/jet9.jpg";

const ContactCard = ({ icon: Icon, title, content }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="group flex items-center space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-primary-500 transition-all duration-500 hover:shadow-xl hover:shadow-primary-500/10"
  >
    <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 p-4 rounded-xl group-hover:scale-110 transition-transform duration-500">
      <Icon className="h-6 w-6 text-primary-600" />
    </div>
    <div>
      <div className="text-sm font-medium text-gray-500 mb-1">{title}</div>
      <div className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors duration-300">
        {content}
      </div>
    </div>
  </motion.div>
);

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className=" p-2 text-2xl sm:text-5xl font-extrabold mb-2 md:mb-4 bg-gradient-to-r from-gray-900 via-primary-800 to-gray-700 bg-clip-text text-transparent">
              Get in Touch
              <span className="block text-primary-600 font-nunito-sans text-2xl mt-3">
                We're Here to Serve You
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-500 leading-relaxed font-semibold">
              Experience luxury private jet travel with HS Live. Our dedicated
              team is available 24/7 to assist you with your premium aviation
              needs.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-2xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary-50 rounded-full filter blur-2xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>

            <h3 className="text-2xl font-extrabold mb-2 md:mb-4 bg-gradient-to-r from-gray-600 via-primary-600 to-gray-700 bg-clip-text text-transparent flex items-center space-x-3">
              <Send className="h-6 w-6 text-primary-600" />
              <span>Send us a Message or Inquiry</span>
            </h3>

            <form className="space-y-6 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-gray-700 text-sm font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 font-semibold text-gray-600 rounded-lg border  border-gray-300  focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700 text-sm font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 font-semibold text-gray-600 rounded-lg border  border-gray-300  focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 font-semibold text-gray-600 rounded-lg border  border-gray-300  focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-gray-700 text-sm font-medium">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 font-semibold text-gray-600 rounded-lg border  border-gray-300  focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-primary-500/30 flex items-center justify-center space-x-2 group"
              >
                <span>Send Message</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ContactCard
                icon={Phone}
                title="Phone"
                content="+255 743 060 660"
              />
              <ContactCard
                icon={Mail}
                title="Email"
                content="info@shineluxuryprivatejets.com"
              />
            </div>

            <ContactCard
              icon={MapPin}
              title="Address"
              content="Bondeni Street, Arusha, Tanzania"
            />

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-primary-800 to-gray-500 p-8 rounded-2xl shadow-xl text-white relative overflow-hidden group"
            >
              <div className="}relative">
                <h3 className="text-xl font-bold mb-6 flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-primary-400" />
                  <span>Operating Hours</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 bg-white/20 p-4 rounded-xl backdrop-blur-sm">
                    <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-gray-200">
                      24/7 Flight Support Available
                    </span>
                  </div>
                  <div className="bg-white/15 p-4 rounded-xl backdrop-blur-sm">
                    <p className="text-primary-400 font-medium mb-2">
                      Office Hours:
                    </p>
                    <p className="text-gray-300">Monday - Friday</p>
                    <p className="text-gray-300">8:00 AM - 6:00 PM EAT</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-6"
        >
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8116076102745!2d36.6897!3d-3.3731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMjInMjMuMiJTIDM2wrA0MScyMy4wIkU!5e0!3m2!1sen!2s!4v1635959562000!5m2!1sen!2s"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
              <MapPin className="h-6 w-6 text-primary-600" />
              <span>Visit Our Office</span>
            </h3>
            <div className="space-y-6 text-gray-600">
              <p className="leading-relaxed">
                Experience the luxury of private jet travel firsthand. Visit our
                office to discuss your travel needs and explore our premium
                services.
              </p>
              <div className="h-px bg-gray-200"></div>
              <div className="space-y-3">
                <p className="font-medium text-gray-900">Directions:</p>
                {[
                  "Located in the heart of Arusha",
                  "Easily accessible from major highways",
                  "Parking available on premises",
                ].map((text, index) => (
                  <p key={index} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span>{text}</span>
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
        {/* </motion.div> */}
      </div>
    </section>
  );
};

export default ContactSection;
