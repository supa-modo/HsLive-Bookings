import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, X, Check, ChevronRight, ArrowRight } from "lucide-react";

import jet1 from "../assets/images/jet1.jpg";
import jet2 from "../assets/images/jet2.jpg";
import jet3 from "../assets/images/jet3.jpeg";
import jet4 from "../assets/images/jet4.jpg";
import jet5 from "../assets/images/jet5.jpg";
import jet6 from "../assets/images/jet6.jpg";
import jet7 from "../assets/images/jet7.jpg";
import jet8 from "../assets/images/jet8.jpg";
import jet9 from "../assets/images/jet9.jpg";

// Mock data for aircraft options
const aircraftOptions = {
  "Light Jet": [
    {
      id: 1,
      name: "Citation CJ3+",
      image: jet1,
      capacity: "6 passengers",
    },
    {
      id: 2,
      name: "Phenom 300",
      image: jet2,
      capacity: "7 passengers",
    },
    {
      id: 3,
      name: "Learjet 45XR",
      image: jet3,
      capacity: "8 passengers",
    },
  ],
  "Midsize Jet": [
    {
      id: 4,
      name: "Citation XLS+",
      image: jet4,
      capacity: "8 passengers",
    },
    {
      id: 5,
      name: "Learjet 60XR",
      image: jet5,
      capacity: "7 passengers",
    },
    {
      id: 6,
      name: "Hawker 800XP",
      image: jet6,
      capacity: "8 passengers",
    },
  ],
  "Super Midsize Jet": [
    {
      id: 7,
      name: "Citation Sovereign+",
      image: jet6,
      capacity: "9 passengers",
    },
    {
      id: 8,
      name: "Challenger 350",
      image: jet8,
      capacity: "10 passengers",
    },
    {
      id: 9,
      name: "Citation Longitude",
      image: jet9,
      capacity: "10 passengers",
    },
    {
      id: 14,
      name: "Citation Sovereign+",
      image: jet6,
      capacity: "9 passengers",
    },
    {
      id: 28,
      name: "Challenger 350",
      image: jet8,
      capacity: "10 passengers",
    },
    {
      id: 49,
      name: "Citation Longitude",
      image: jet9,
      capacity: "10 passengers",
    },
    {
        id: 54,
        name: "Citation Sovereign+",
        image: jet6,
        capacity: "9 passengers",
      },
      {
        id: 18,
        name: "Challenger 350",
        image: jet8,
        capacity: "10 passengers",
      },
      {
        id: 89,
        name: "Citation Longitude",
        image: jet9,
        capacity: "10 passengers",
      },
  ],
  "Heavy Jet": [
    {
      id: 10,
      name: "Gulfstream G450",
      image: jet5,
      capacity: "14 passengers",
    },
    {
      id: 11,
      name: "Global 6000",
      image: jet3,
      capacity: "13 passengers",
    },
    {
      id: 12,
      name: "Falcon 7X",
      image: jet6,
      capacity: "12 passengers",
    },
  ],
};

const AircraftPicker = ({ isOpen, onClose, fleetType, onSelect }) => {
  const [selectedAircraft, setSelectedAircraft] = useState(null);
  const aircraftList = aircraftOptions[fleetType] || [];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden"
          >
            <div className="p-6">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-red-500 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              <h3 className="text-2xl font-bold text-gray-700 mb-6">
                Select your {fleetType}
              </h3>

              <div className="overflow-y-auto max-h-[60vh] pr-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {aircraftList.map((aircraft) => (
                    <button
                      key={aircraft.id}
                      onClick={() => setSelectedAircraft(aircraft)}
                      className={`relative group rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        selectedAircraft?.id === aircraft.id
                          ? "border-primary-600"
                          : "border-gray-200 hover:border-primary-300"
                      }`}
                    >
                      <div className="aspect-[16/10]">
                        <img
                          src={aircraft.image}
                          alt={aircraft.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-gray-700">
                          {aircraft.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {aircraft.capacity}
                        </p>
                      </div>
                      {selectedAircraft?.id === aircraft.id && (
                        <div className="absolute top-2 right-2 bg-primary-600 text-white p-2 rounded-full">
                          <Check className="h-4 w-4" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => {
                    if (selectedAircraft) {
                      onSelect(selectedAircraft);
                      onClose();
                    }
                  }}
                  disabled={!selectedAircraft}
                  className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-700 transition-colors"
                >
                  <span className="font-semibold">Continue</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// Modified Fleet Selection section for step 2
const JetSelection = ({ formData, handleInputChange }) => {
  const [isAircraftPickerOpen, setIsAircraftPickerOpen] = useState(false);
  const [selectedAircraft, setSelectedAircraft] = useState(null);

  const handleAircraftSelect = (aircraft) => {
    setSelectedAircraft(aircraft);
    handleInputChange({
      target: {
        name: "selectedAircraft",
        value: aircraft,
      },
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Select Jet Category
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["Light Jet", "Midsize Jet", "Super Midsize Jet", "Heavy Jet"].map(
            (type) => (
              <button
                key={type}
                className={`p-4 rounded-xl font-semibold border-2 transition-all duration-300 text-left ${
                  formData.fleetType === type
                    ? "border-primary-600 bg-primary-50 text-primary-700"
                    : "text-gray-500 border-gray-300 hover:border-primary-200"
                }`}
                onClick={() => {
                  handleInputChange({
                    target: { name: "fleetType", value: type },
                  });
                  setSelectedAircraft(null);
                }}
              >
                <Plane className="h-7 w-7 mb-2" />
                <span className="block">{type}</span>
                <span className="font-medium text-sm text-gray-500">
                  Perfect for{" "}
                  {type === "Light Jet"
                    ? "4-6"
                    : type === "Midsize Jet"
                      ? "7-8"
                      : type === "Super Midsize Jet"
                        ? "9-10"
                        : "11-19"}{" "}
                  passengers
                </span>
              </button>
            )
          )}
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Choose Jet from the category you picked above
        </label>
        <div className="relative">
          <input
            type="text"
            readOnly
            value={selectedAircraft ? selectedAircraft.name : ""}
            placeholder="Choose a specific aircraft"
            className="w-full pl-4 pr-32 py-3 rounded-lg font-semibold text-gray-600 border disabled:cursor-not-allowed border-gray-300 bg-gray-50"
            disabled={!formData.fleetType}
          />
          <button
            onClick={() => setIsAircraftPickerOpen(true)}
            disabled={!formData.fleetType}
            className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-700 transition-colors"
          >
            <span className="font-semibold font-nunito-sans text-sm">Select Aircraft</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <AircraftPicker
        isOpen={isAircraftPickerOpen}
        onClose={() => setIsAircraftPickerOpen(false)}
        fleetType={formData.fleetType}
        onSelect={handleAircraftSelect}
      />
    </div>
  );
};

export { JetSelection };
