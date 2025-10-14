"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Form from "./Form";
import Canada from "./Canada";
import Australia from "./Australia";
import Italy from "./Italy";
import France from './France';
import Bali from "./Bali";
import Usa from "./Usa";
import Turckey from "./Turckey";
import Ireland from "./Ireland";
import Dubai from "./Dubai";
import Austria from "./Austria";
import Singapore from "./Singapore";
import Fiji from "./Fiji";
import Malaysia from "./Malaysia";
import Philippines from "./Philippines";
import Link from "next/link";
import Europe from "./Europe";
import Switzerland from "./Switzerland";
import Greece from "./Greece";
import Andaman from "./Andaman";
import Thailand from "./Thailand";
import Maldives from "./Maldives";
import Azerbaijan from "./Azerbaijan";
import Southafrica from "./Southafrica";
import Japan from "./Japan";
import ModalFormWithPopup from "../../Popup/Popup"; // adjust path if needed
import Vietnam from "./Vietnam";
import MaltaImageContent from "../../Popup/Toursandtickeing";

const visaData = [
    { name: "Europe Tours and Ticketing", image: "/europe-tour.jpg", path: "/tours-ticketing/europe" },
    { name: "USA Tours and Ticketing", image: "/usa-tour-places.jpeg", path: "/tours-ticketing/usa" },
    { name: "Australia Tours and Ticketing", image: "/australia-tour-places.jpeg", path: "/tours-ticketing/australia" },
    { name: "Canada Tours and Ticketing", image: "/Beautiful-Canada-Stanley-Park.webp", path: "/tours-ticketing/canada" },
    { name: "France Tours and Ticketing", image: "/french-best-places.jpg", path: "/tours-ticketing/france" },
    { name: "Italy Tours and Ticketing", image: "/italy-tour.jpg", path: "/tours-ticketing/italy" },
    { name: "Switzerland Tours and Ticketing", image: "/switzerland-tour.png", path: "/tours-ticketing/switzerland" },
    { name: "Dubai Tours and Ticketing", image: "/dubai-torist-places.jpg", path: "/tours-ticketing/dubai" },
    { name: "Turkey Tours and Ticketing", image: "/cappadocia-turkey-tour-places.webp", path: "/tours-ticketing/turkey" },
    { name: "Malaysia Tours and Ticketing", image: "/malaysia-best-places.jpg", path: "/tours-ticketing/malaysia" },
    { name: "Singapore Tours and Ticketing", image: "/singapore-tour-packages.jpg", path: "/tours-ticketing/singapore" },
    { name: "Greece Tours and Ticketing", image: "/greece1.webp", path: "/tours-ticketing/greece" },
    { name: "Bali Tours and Ticketing", image: "/bali-tour.jpg", path: "/tours-ticketing/bali" },
    { name: "Andaman Tours and Ticketing", image: "/Andaman-and-Nicobar-Islands-Package.jpg", path: "/tours-ticketing/andaman" },   
    { name: "Thailand Tours and Ticketing", image: "/thailand-tour-packages.jpg", path: "/tours-ticketing/thailand" }, 
    { name: "Philippines Tours and Ticketing", image: "/Philippines-tour.jpg", path: "/tours-ticketing/philippines" },
    { name: "Maldives Tours and Ticketing", image: "/Tour-du-lich-maldives.jpg", path: "/tours-ticketing/maldives" },
    { name: "Fiji Island Tours and Ticketing", image: "/fiji-island-tour-packages.jpg", path: "/tours-ticketing/fiji-island" },   
    { name: "Azerbaijan Tours and Ticketing", image: "/Tourist-Attractions-in-Azerbaijan.png", path: "/tours-ticketing/azerbaijan" }, 
    { name: "Austria Tours and Ticketing", image: "/austriavisit.jpg", path: "/tours-ticketing/austria" },
    { name: "South Africa Tours and Ticketing", image: "/south-africa-tour-packages.jpg", path: "/tours-ticketing/south-africa" },
    { name: "Japan Tours and Ticketing", image: "/japan-tourist-places.jpg", path: "/tours-ticketing/japan" },
    { name: "Vietnam Tours and Ticketing", image: "/Vietnam-trips-tour-packages-from-India.jpg", path: "/tours-ticketing/vietnam" },
];

const defaultVisa = {
  name: "Tours and Ticketing",
  path: "/tours-ticketing",
  image: "/1.jpg",
};

const Migrate = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedVisa, setSelectedVisa] = useState(defaultVisa);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const foundVisa = visaData.find((visa) => visa.path === pathname);
    if (foundVisa) {
      setSelectedVisa(foundVisa);
    } else {
      setSelectedVisa(defaultVisa);
    }
  }, [pathname]);

  const handleVisaClick = (visa) => {
    setSelectedVisa(visa);
    router.push(visa.path);
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* ===== TOP SECTION ===== */}
      <div
        className="relative w-full min-h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${selectedVisa.image})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 w-full h-full flex items-center justify-center px-6 lg:px-12 py-8">
          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10">
            <motion.div
              className="w-full lg:w-1/2 text-white text-center lg:text-left pt-24 sm:pt-32 lg:pt-0 lg:pl-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-semibold uppercase leading-tight">
                {selectedVisa.name}
              </h1>
              <div className="mt-4 max-w-xl">
                <p className="text-base sm:text-lg lg:text-xl text-white">
                  "Kickstart your journey with seamless tours & ticketing. Choose your destination, and we’ll take care of the rest!"
                </p>

                <button
                  className="mt-4 relative inline-block px-8 py-3 font-bold text-white bg-gradient-to-r from-orange-500 via-black to-orange-500 rounded-xl overflow-hidden group shadow-xl animate-pulse-glow"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400 via-black to-orange-600 transition-transform duration-500 ease-in-out group-hover:bg-blue-400 rounded-xl animate-shimmer"></span>
                  <span className="relative z-10">Apply Now</span>
                </button>

              </div>
            </motion.div>

            <div className="w-full lg:w-1/2 mt-8 lg:mt-16">
              <Form />
            </div>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM SECTION ===== */}
      <div className="relative z-10 w-full bg-white px-4 sm:px-6 lg:px-12 pt-10 pb-16">
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-10 items-start">
          {/* Left: Heading + Visa Buttons Section */}
          <div className="w-full md:w-1/3 order-2 md:order-1">
            <div className="flex justify-center md:justify-start mb-8 mr-8 md:ml-16">
              <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent">
                <span className="block md:text-left text-center">From tickets to</span>
                <span className="block text-center"> tales, we deliver!</span>
              </h2>
            </div>

            {/* Apply Button for Small Screens Only */}
            <div className="block lg:hidden mb-6 text-center">
              <button
                className="mt-2 relative inline-block px-8 py-3 font-bold text-white bg-gradient-to-r from-orange-500 via-black to-orange-500 rounded-xl overflow-hidden group shadow-xl animate-pulse-glow"
                onClick={() => setIsOpen(true)}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400 via-black to-orange-600 transition-transform duration-500 ease-in-out group-hover:bg-blue-400 rounded-xl animate-shimmer"></span>
                <span className="relative z-10">Apply Now</span>
              </button>
            </div>

            {visaData.map((visa) => (
              <Link
                key={visa.path}
                href={visa.path}
                className={`block mb-4 w-full no-underline`}
              >
                <div
                  className={`w-full flex items-center justify-between text-lg font-semibold px-6 py-4 rounded-xl transition duration-300 shadow-lg ${
                    selectedVisa.path === visa.path
                      ? "bg-orange-500 text-white border-orange-500 shadow-orange-400"
                      : "bg-transparent text-black border border-orange-500 hover:bg-orange-500 hover:text-white"
                  } transform hover:scale-105`}
                >
                  {visa.name}
                  <ArrowRight className="w-6 h-6" />
                </div>
              </Link>
            ))}
          </div>

          {/* Right: Visa Info Content Box */}
          <div
            className="w-full md:w-2/3 p-4 md:p-6 rounded-xl border border-gray-300 shadow-md relative mt-6 order-1 md:order-2"
            style={{ maxHeight: "1800px", minHeight: "1300px", overflowY: "auto" }}
          >
            {selectedVisa.path === defaultVisa.path ? (
              <div className="text-gray-700 text-lg leading-relaxed">
                "Kickstart your journey with seamless tours & ticketing. Choose your destination, and we’ll take care of the rest!"
              </div>
            ) : selectedVisa.path === "/tours-ticketing/canada" ? (
              <Canada />
            ) : selectedVisa.path === "/tours-ticketing/australia" ? (
              <Australia />
            ) : selectedVisa.path === "/tours-ticketing/greece" ? (
              <Greece />
            ) : selectedVisa.path === "/tours-ticketing/france" ? (
              <France />
            ) : selectedVisa.path === "/tours-ticketing/italy" ? (
              <Italy />
            ) : selectedVisa.path === "/tours-ticketing/turkey" ? (
              <Turckey />
            ) : selectedVisa.path === "/tours-ticketing/bali" ? (
              <Bali />
            ) : selectedVisa.path === "/tours-ticketing/usa" ? (
              <Usa />
            ) : selectedVisa.path === "/tours-ticketing/switzerland" ? (
              <Switzerland />
            ) : selectedVisa.path === "/tours-ticketing/ireland" ? (
              <Ireland />
            ) : selectedVisa.path === "/tours-ticketing/dubai" ? (
              <Dubai />
            ) : selectedVisa.path === "/tours-ticketing/austria" ? (
              <Austria />
            ) : selectedVisa.path === "/tours-ticketing/singapore" ? (
              <Singapore />
            ) : selectedVisa.path === "/tours-ticketing/maldives" ? (
              <Maldives />
            ) : selectedVisa.path === "/tours-ticketing/malaysia" ? (
              <Malaysia />
            ) : selectedVisa.path === "/tours-ticketing/philippines" ? (
              <Philippines />
            ) : selectedVisa.path === "/tours-ticketing/europe" ? (
              <Europe />
            ) : selectedVisa.path === "/tours-ticketing/andaman" ? (
              <Andaman />
            ) : selectedVisa.path === "/tours-ticketing/thailand" ? (
              <Thailand />
            ) : selectedVisa.path === "/tours-ticketing/fiji-island" ? (
              <Fiji />
            ) : selectedVisa.path === "/tours-ticketing/azerbaijan" ? (
              <Azerbaijan />
            ) : selectedVisa.path === "/tours-ticketing/japan" ? (
              <Japan />
            ) : selectedVisa.path === "/tours-ticketing/south-africa" ? (
              <Southafrica />
            ) : selectedVisa.path === "/tours-ticketing/vietnam" ? (
              <Vietnam />
            ) : (
              <div className="text-gray-700 text-lg leading-relaxed">
                Information about <strong>{selectedVisa.name}</strong> will be displayed here.
              </div>
            )}
          </div>
        </div>
      </div>
      
      <ModalFormWithPopup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        customContent={<MaltaImageContent />}
      />
    </div>
  );
};

export default Migrate;
