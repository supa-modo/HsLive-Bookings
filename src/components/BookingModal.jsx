import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Plane,
  Users,
  Calendar,
  MapPin,
  Phone,
  ArrowRight,
  Map,
  CheckCircle,
  PhoneCall,
  TicketsPlane,
} from "lucide-react";
import formatDateShort from "../utils/dateTimeFunctions";

const StepIndicator = ({ currentStep, totalSteps }) => (
  <div className="flex items-center justify-center space-x-2 mb-8">
    {[...Array(totalSteps)].map((_, index) => (
      <div
        key={index}
        className={`h-3 rounded-full transition-all duration-300 ${
          index + 1 === currentStep
            ? "w-9 bg-primary-600"
            : index + 1 < currentStep
              ? "w-3 bg-primary-400"
              : "w-3 bg-gray-300"
        }`}
      />
    ))}
  </div>
);

const options = [
  {
    icon: Plane,
    title: "Executive Business Escape",
    description: "For corporate teams and professionals.",
    features: [
      "In-flight Wi-Fi",
      "Private meeting areas",
      "Concierge services",
    ],
  },
  {
    icon: Plane,
    title: "Elite Escape: Luxury Leisure",
    description: "For high-net-worth individuals and families.",
    features: ["Gourmet dining", "Premium champagne", "Exclusive experiences"],
  },
  {
    icon: Plane,
    title: "Dignitary Prestige Transfer",
    description: "For dignitaries, celebrities, and officials.",
    features: ["Enhanced security", "Custom comfort", "Seamless transfers"],
  },
  {
    icon: Map,
    title: "Private Aircraft Safaris",
    description: "Explore Tanzania's national parks from above.",
    features: [
      "Aerial wildlife viewing",
      "Luxury lodges",
      "Private game drives",
    ],
  },
];

const BookingModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    tripType: "oneWay",
    passengers: 1,
    contactInfo: "",
    departureLocation: "",
    arrivalLocation: "",
    departureDate: "",
    returnDate: "",
    selectedOption: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleOptionSelect = (option) => {
    setFormData((prev) => ({ ...prev, selectedOption: option }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 font-open-sans">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-red-500 transition-colors duration-300"
            >
              <X className="h-7 w-7" />
            </button>

            <div className="p-6 md:p-10">
              {/* Header */}
              <div className="text-center mb-5">
                <h2 className="text-2xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-gray-900 via-primary-800 to-gray-700 bg-clip-text text-transparent mb-2">
                  Book Your Private Jet
                </h2>
                <p className="text-sm sm:text-base  text-gray-500 font-semibold">
                  Experience luxury travel at its finest
                </p>
              </div>

              {/* Step Indicator */}
              <StepIndicator currentStep={step} totalSteps={3} />

              {/* Form Steps */}
              <div className="mt-8">
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    {/* Trip Type Selection */}
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        className={`p-4 font-semibold rounded-xl border-2 transition-all duration-300 ${
                          formData.tripType === "oneWay"
                            ? "border-primary-600 bg-primary-50 text-primary-700"
                            : "text-gray-400  border-gray-400 hover:border-primary-200"
                        }`}
                        onClick={() =>
                          handleInputChange({
                            target: { name: "tripType", value: "oneWay" },
                          })
                        }
                      >
                        <Plane className="h-8 w-8 mx-auto sm:mb-2" />
                        <span className="text-sm sm:text-base">One Way</span>
                      </button>
                      <button
                        className={`p-4 font-semibold  rounded-xl border-2 transition-all duration-300 ${
                          formData.tripType === "roundTrip"
                            ? "border-primary-600 bg-primary-50 text-primary-700"
                            : "text-gray-400 border-gray-400 hover:border-primary-200"
                        }`}
                        onClick={() =>
                          handleInputChange({
                            target: { name: "tripType", value: "roundTrip" },
                          })
                        }
                      >
                        <div className="flex justify-center mb-2 space-x-2">
                          <Plane className="h-8 w-8 sm:mb-2" />
                          <Plane className="h-8 w-8 rotate-180 sm:mb-2" />
                        </div>
                        <span className="text-sm sm:text-base">Round Trip</span>
                      </button>
                    </div>

                    {/* Passenger Count */}
                    <div>
                      <label className="block text-[13px] sm:text-sm font-medium text-gray-700 mb-2">
                        Number of Passengers
                      </label>
                      <div className="relative">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="number"
                          name="passengers"
                          value={formData.passengers}
                          onChange={handleInputChange}
                          min="1"
                          max="19"
                          className="w-full text-sm md:text-[15px] pl-14 pr-4 py-3 font-semibold text-gray-600 rounded-lg border border-gray-300  focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        />
                      </div>
                    </div>

                    {/* Locations */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-[13px] sm:text-sm font-medium text-gray-700 mb-2">
                          Departure Location
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            name="departureLocation"
                            value={formData.departureLocation}
                            onChange={handleInputChange}
                            placeholder="City or Airport"
                            className="w-full text-sm md:text-[15px] pl-14 pr-4 py-3 font-semibold text-gray-600 rounded-lg border  border-gray-300  focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[13px] sm:text-sm font-medium text-gray-700 mb-2">
                          Arrival Location
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            name="arrivalLocation"
                            value={formData.arrivalLocation}
                            onChange={handleInputChange}
                            placeholder="City or Airport"
                            className="w-full text-sm md:text-[15px] pl-14 pr-4 py-3 font-semibold text-gray-600 rounded-lg border  border-gray-300  focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[13px] sm:text-sm font-medium text-gray-700 mb-2">
                          Your Contact Information
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="text"
                            name="contactInfo"
                            value={formData.contactInfo}
                            onChange={handleInputChange}
                            placeholder="Email Adddress or Phone Number"
                            className="w-full text-sm md:text-[15px] pl-14 pr-4 py-3 font-semibold text-gray-600 rounded-lg border  border-gray-300  focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    {/* Date Selection */}
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                      <div className="w-full">
                        <label className="block text-sm  font-medium text-gray-700 mb-2">
                          Departure Date
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="date"
                            name="departureDate"
                            value={formData.departureDate}
                            onChange={handleInputChange}
                            className="w-full pl-12 text-sm pr-4 py-3 rounded-lg font-semibold text-gray-600 border  border-gray-300  focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                          />
                        </div>
                      </div>
                      {formData.tripType === "roundTrip" && (
                        <div className="w-full">
                          <label className="block text-sm  font-medium text-gray-700 mb-2">
                            Return Date
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                              type="date"
                              name="returnDate"
                              value={formData.returnDate}
                              onChange={handleInputChange}
                              className="w-full pl-12 pr-4 text-sm py-3 rounded-lg font-semibold text-gray-600 border  border-gray-300  focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Package Selection */}
                    <div className="space-y-4">
                      <h3 className="text-base font-bold text-amber-700">
                        Select Your Experience
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {options.map((option, index) => (
                          <div
                            key={index}
                            className={`px-6 py-5 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                              formData.selectedOption?.title === option.title
                                ? "border-primary-600 bg-primary-50"
                                : "border-gray-300 hover:border-primary-200"
                            }`}
                            onClick={() => handleOptionSelect(option)}
                          >
                            <div className="flex items-center space-x-4">
                              <div className="p-3 bg-primary-100 rounded-lg">
                                <option.icon className="h-6 w-6 text-primary-600" />
                              </div>
                              <div>
                                <h4 className="text-sm sm:text-base font-bold text-primary-600">
                                  {option.title}
                                </h4>
                                <p className="text-[13px] sm:text-sm text-gray-500">
                                  {option.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    {/* Booking Summary  */}
                    <div className="relative bg-gradient-to-br from-gray-100 to-gray-50 shadow-lg rounded-2xl overflow-hidden border border-gray-300">
                      <div className="flex justify-between items-center py-4 px-6 bg-primary-600 text-white">
                        <div>
                          <h3 className="text-base sm:text-lg font-bold">
                            Your Booking Summary
                          </h3>
                          <p className="text-[13px] font-semibold text-amber-400">
                            {formData.contactInfo}
                          </p>
                        </div>

                        <Plane className="h-6 w-6" />
                      </div>
                      <div className="px-6 py-4">
                        <div className="flex flex-wrap items-center justify-between border-b-2 border-dashed border-gray-300 pb-4">
                          <div className="w-1/2 md:w-auto text-left">
                            <p className="text-gray-500 text-sm font-bold">
                              From
                            </p>
                            <p className="text-base sm:text-lg font-nunito-sans md:font-sans font-bold text-primary-700">
                              {formData.departureLocation}
                            </p>
                          </div>
                          <div className="w-1/2 md:w-auto text-right">
                            <p className="text-gray-500 text-sm  font-bold">
                              To
                            </p>
                            <p className="text-base sm:text-lg font-nunito-sans md:font-sans font-bold text-green-700">
                              {formData.arrivalLocation}
                            </p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 text-sm">
                          <div>
                            <p className="text-gray-500 font-bold">
                              Departure Date
                            </p>
                            <p className="font-bold text-gray-700">
                              {formatDateShort(formData.departureDate)}
                            </p>
                          </div>
                          {formData.tripType === "roundTrip" && (
                            <div>
                              <p className="text-gray-500 font-bold">
                                Return Date
                              </p>
                              <p className="font-bold text-gray-700">
                                {formatDateShort(formData.returnDate)}
                              </p>
                            </div>
                          )}
                          <div>
                            <p className="text-gray-500 font-bold">
                              Passengers
                            </p>
                            <p className="font-bold text-gray-700">
                              {formData.passengers}
                            </p>
                          </div>
                          <div>
                            {formData.selectedOption && (
                              <div className="">
                                <p className="text-sm text-gray-500 font-bold mb-2">
                                  Selected Option:{" "}
                                  <span className="text-red-500 font-extrabold">
                                    {formData.selectedOption.title}
                                  </span>
                                </p>
                                <p className="text-xs md:text-sm text-gray-500">
                                  {formData.selectedOption.description}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* What's Next Section */}
                    <div className="bg-white font-nunito-sans shadow-lg rounded-xl border border-gray-300 p-6">
                      <h3 className="text-base sm:text-lg font-bold text-gray-700 mb-4">
                        What's Next?
                      </h3>
                      <div className="space-y-4 font-semibold ">
                        <div className="flex items-center space-x-4">
                          <CheckCircle className="text-green-500 h-6 w-6" />
                          <p className="text-sm sm:text-base text-gray-500">
                            Our team will review your booking request details.
                          </p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <PhoneCall className="text-blue-500 h-6 w-6" />
                          <p className="text-sm sm:text-base text-gray-500">
                            We'll contact you within 2 hours with a quote matching your preferences.
                          </p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <TicketsPlane className="text-purple-500 h-6 w-6" />
                          <p className="text-sm sm:text-base text-gray-500">
                            Finalize your booking and payment with our team.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {step > 1 && (
                    <button
                      onClick={prevStep}
                      className="px-6 sm:px-10 py-3 text-gray-500 bg-gray-200 rounded-lg hover:bg-gray-300 font-semibold transition-colors duration-300"
                    >
                      Back
                    </button>
                  )}
                  <button
                    onClick={() => {
                      if (step === 3) {
                        console.log("Booking Details:", {
                          tripType: formData.tripType,
                          passengers: formData.passengers,
                          contactInfo: formData.contactInfo,
                          departure: formData.departureLocation,
                          arrival: formData.arrivalLocation,
                          departureDate: formData.departureDate,
                          returnDate: formData.returnDate,
                          selectedOption: formData.selectedOption,
                        });
                        onClose();
                      } else {
                        nextStep();
                      }
                    }}
                    className="ml-auto flex items-center space-x-2 px-6 sm:px-10 py-2 sm:py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300"
                  >
                    <span className="font-semibold text-sm sm:text-base">
                      {step === 3 ? "Submit Request" : "Continue"}
                    </span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
