import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Plane,
  Users,
  Calendar,
  MapPin,
  Clock,
  Globe,
  Shield,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const BookingModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    tripType: "oneWay",
    passengers: 1,
    departureLocation: "",
    arrivalLocation: "",
    departureDate: "",
    returnDate: "",
    fleetType: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  const stepVariants = {
    enter: { x: 20, opacity: 0 },
    center: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: { x: -20, opacity: 0 },
  };

  const renderStep1 = () => (
    <motion.div
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="space-y-8"
    >
      <div>
        <label className="block text-gray-700 font-medium mb-3">
          Trip Type
        </label>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            className={`p-6 rounded-xl border-2 ${
              formData.tripType === "oneWay"
                ? "border-primary-600 bg-primary-50/50 shadow-lg shadow-primary-100"
                : "border-gray-200 hover:border-primary-300 hover:bg-gray-50"
            } transition-all duration-300 group`}
            onClick={() =>
              handleInputChange({
                target: { name: "tripType", value: "oneWay" },
              })
            }
          >
            <Plane
              className={`h-8 w-8 mx-auto mb-3 ${
                formData.tripType === "oneWay"
                  ? "text-primary-600"
                  : "text-gray-400 group-hover:text-primary-400"
              } transition-colors duration-300`}
            />
            <span
              className={`block text-sm font-medium ${
                formData.tripType === "oneWay"
                  ? "text-primary-600"
                  : "text-gray-600"
              }`}
            >
              One Way
            </span>
          </button>
          <button
            type="button"
            className={`p-6 rounded-xl border-2 ${
              formData.tripType === "roundTrip"
                ? "border-primary-600 bg-primary-50/50 shadow-lg shadow-primary-100"
                : "border-gray-200 hover:border-primary-300 hover:bg-gray-50"
            } transition-all duration-300 group`}
            onClick={() =>
              handleInputChange({
                target: { name: "tripType", value: "roundTrip" },
              })
            }
          >
            <div className="flex justify-center mb-3 space-x-2">
              <Plane
                className={`h-8 w-8 ${
                  formData.tripType === "roundTrip"
                    ? "text-primary-600"
                    : "text-gray-400 group-hover:text-primary-400"
                } transition-colors duration-300`}
              />
              <Plane
                className={`h-8 w-8 rotate-180 ${
                  formData.tripType === "roundTrip"
                    ? "text-primary-600"
                    : "text-gray-400 group-hover:text-primary-400"
                } transition-colors duration-300`}
              />
            </div>
            <span
              className={`block text-sm font-medium ${
                formData.tripType === "roundTrip"
                  ? "text-primary-600"
                  : "text-gray-600"
              }`}
            >
              Round Trip
            </span>
          </button>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-xl">
        <label className="block text-gray-700 font-medium mb-3">
          Number of Passengers
        </label>
        <div className="flex items-center space-x-4">
          <Users className="text-primary-600 h-6 w-6" />
          <input
            type="number"
            name="passengers"
            min="1"
            max="19"
            value={formData.passengers}
            onChange={handleInputChange}
            className="w-24 px-4 py-2 border border-gray-300 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200 text-center"
          />
        </div>
      </div>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="space-y-6"
    >
      <div className="space-y-6 bg-gray-50 p-6 rounded-xl">
        <div>
          <label className="block text-gray-700 font-medium mb-3">
            Departure Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-4 top-3 text-gray-400" />
            <input
              type="text"
              name="departureLocation"
              value={formData.departureLocation}
              onChange={handleInputChange}
              placeholder="Enter city or airport"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
            />
          </div>
        </div>

        <div className="relative py-4">
          <div className="absolute left-4 inset-y-0 flex items-center">
            <div className="w-0.5 h-full bg-gray-300"></div>
          </div>
          <ArrowRight className="absolute left-2.5 top-1/2 -translate-y-1/2 text-primary-600 h-5 w-5" />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-3">
            Arrival Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-4 top-3 text-gray-400" />
            <input
              type="text"
              name="arrivalLocation"
              value={formData.arrivalLocation}
              onChange={handleInputChange}
              placeholder="Enter city or airport"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-medium mb-3">
            Departure Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-4 top-3 text-gray-400" />
            <input
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleInputChange}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
            />
          </div>
        </div>

        {formData.tripType === "roundTrip" && (
          <div>
            <label className="block text-gray-700 font-medium mb-3">
              Return Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-4 top-3 text-gray-400" />
              <input
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleInputChange}
                min={formData.departureDate}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );

  const renderStep3 = () => (
    <motion.div
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      className="space-y-6"
    >
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900">Trip Summary</h3>
        <div className="bg-gray-50 p-6 rounded-xl space-y-4">
          <div className="flex justify-between items-center pb-4 border-b border-gray-200">
            <span className="text-gray-600">Trip Type</span>
            <span className="font-medium text-gray-900">
              {formData.tripType === "oneWay" ? "One Way" : "Round Trip"}
            </span>
          </div>
          <div className="flex justify-between items-center pb-4 border-b border-gray-200">
            <span className="text-gray-600">Passengers</span>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-primary-600" />
              <span className="font-medium text-gray-900">
                {formData.passengers}
              </span>
            </div>
          </div>
          <div className="pb-4 border-b border-gray-200">
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-600">From</span>
              <span className="font-medium text-gray-900">
                {formData.departureLocation}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">To</span>
              <span className="font-medium text-gray-900">
                {formData.arrivalLocation}
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center pb-4 border-b border-gray-200">
            <span className="text-gray-600">Departure</span>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-primary-600" />
              <span className="font-medium text-gray-900">
                {formData.departureDate}
              </span>
            </div>
          </div>
          {formData.tripType === "roundTrip" && (
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Return</span>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-primary-600" />
                <span className="font-medium text-gray-900">
                  {formData.returnDate}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={() => {
          console.log("Booking submitted:", formData);
          onClose();
        }}
        className="w-full bg-primary-600 text-white py-4 rounded-xl font-medium hover:bg-primary-700 transition-all duration-300 shadow-lg shadow-primary-100 hover:shadow-xl"
      >
        Get Quote
      </button>
    </motion.div>
  );

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl w-full max-w-lg"
          >
            <div className="absolute right-4 top-4">
              <button
                onClick={onClose}
                className="p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-all duration-300"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="px-6 pb-6 pt-8">
              <div className="text-center sm:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Book Your Flight
                </h3>

                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className={`flex items-center ${i < 3 ? "flex-1" : ""}`}
                      >
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            step >= i
                              ? "bg-primary-600 text-white shadow-lg shadow-primary-100"
                              : "bg-gray-100 text-gray-400"
                          } transition-all duration-300`}
                        >
                          {i}
                        </div>
                        {i < 3 && (
                          <div
                            className={`flex-1 h-1 mx-4 rounded-full transition-all duration-300 ${
                              step > i ? "bg-primary-600" : "bg-gray-200"
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between px-1">
                    <span
                      className={`text-sm font-medium transition-colors duration-300 ${
                        step === 1 ? "text-primary-600" : "text-gray-500"
                      }`}
                    >
                      Details
                    </span>
                    <span
                      className={`text-sm font-medium transition-colors duration-300 ${
                        step === 2 ? "text-primary-600" : "text-gray-500"
                      }`}
                    >
                      Schedule
                    </span>
                    <span
                      className={`text-sm font-medium transition-colors duration-300 ${
                        step === 3 ? "text-primary-600" : "text-gray-500"
                      }`}
                    >
                      Confirm
                    </span>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {step === 1 && renderStep1()}
                  {step === 2 && renderStep2()}
                  {step === 3 && renderStep3()}
                </AnimatePresence>
              </div>
            </div>

            <div className="bg-gray-50 px-6 py-4 rounded-b-2xl">
              <div className="flex justify-end space-x-3">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-100 transition-all duration-300"
                  >
                    Back
                  </button>
                )}
                {step < 3 && (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-3 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-all duration-300 shadow-lg shadow-primary-100 hover:shadow-xl"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />
    </AnimatePresence>
  );
};

export default BookingModal;
