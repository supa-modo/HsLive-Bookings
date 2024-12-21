import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const ContactCard = ({ icon: Icon, title, content }) => (
  <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
    <div className="bg-primary-50 p-3 rounded-full">
      <Icon className="h-6 w-6 text-primary-600" />
    </div>
    <div>
      <div className="text-sm font-medium text-gray-500">{title}</div>
      <div className="font-semibold text-gray-800">{content}</div>
    </div>
  </div>
);

const SocialIcon = ({ icon: Icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-primary-50 p-3 rounded-full hover:bg-primary-100 transition-all duration-300"
  >
    <Icon className="h-5 w-5 text-primary-600" />
  </a>
);

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated team is ready to assist you with any inquiries about
              our private aviation services. Experience luxury travel at its finest.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Message</label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-primary-500/20"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <ContactCard
                  icon={Phone}
                  title="Phone"
                  content="+255 743 060 660"
                />
                <ContactCard
                  icon={Mail}
                  title="Email"
                  content="joebiseko@gmail.com"
                />
                <ContactCard
                  icon={MapPin}
                  title="Address"
                  content="Bondeni Street, Arusha, Tanzania"
                />
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Operating Hours
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-600 flex items-center space-x-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    <span>24/7 Flight Request Support</span>
                  </p>
                  <p className="text-gray-600">
                    Office Hours:
                    <br />
                    Monday - Friday
                    <br />
                    8:00 AM - 6:00 PM EAT
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Connect With Us
                </h3>
                <div className="flex space-x-4">
                  <SocialIcon icon={Facebook} href="#" />
                  <SocialIcon icon={Twitter} href="#" />
                  <SocialIcon icon={Instagram} href="#" />
                  <SocialIcon icon={Linkedin} href="#" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-3/4 bg-white p-4 rounded-2xl shadow-xl overflow-hidden">
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
              <div className="lg:w-1/4 space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Our Location
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary-600 mt-1" />
                      <div>
                        <p className="text-gray-900 font-medium">Address</p>
                        <p className="text-gray-600">
                          Bondeni Street, Arusha, Tanzania
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-primary-600 mt-1" />
                      <div>
                        <p className="text-gray-900 font-medium">Email</p>
                        <p className="text-gray-600">joebiseko@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-primary-600 mt-1" />
                      <div>
                        <p className="text-gray-900 font-medium">Phone</p>
                        <p className="text-gray-600">+255 743 060 660</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Operating Hours
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <span className="text-gray-600">24/7 Flight Support</span>
                    </div>
                    <div className="text-gray-600">
                      <p className="font-medium">Office Hours:</p>
                      <p>Monday - Friday</p>
                      <p>8:00 AM - 6:00 PM EAT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
