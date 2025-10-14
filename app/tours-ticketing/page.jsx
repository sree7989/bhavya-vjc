'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import animationData from '../../public/models/travel.json';
import AirTicketingDetails from './AirTicketingDetails';
import Tour from './Tour';
import ExploreDestination from './ExploreDestination';
import Link from 'next/link';
import Destinations from './Destinations';
import ModalFormWithPopup from "../Popup/Popup";
import MaltaImageContent from "../Popup/Toursandtickeing";

export default function ExploreDestinations() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative min-h-screen bg-white text-gray-800 overflow-hidden font-serif"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      {/* Hero Section with Video BG */}
      <div className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/travel.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80 z-10" />

        {/* Foreground Content */}
        <div className="relative z-20 flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl px-4 md:px-12 py-16 md:py-24 gap-10 text-center md:text-left">
          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-500 via-white to-orange-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-shine leading-tight">
              Tour & Air Ticketing Services
            </h1>

            <p className="text-base sm:text-lg text-gray-200">
              Book the best flights and unforgettable tours—globally trusted, beautifully managed.
            </p>

            <button
              className="relative inline-block px-8 py-3 font-bold text-white bg-gradient-to-r from-orange-500 via-black to-orange-500 rounded-xl overflow-hidden group shadow-xl animate-pulse-glow"
              onClick={() => setIsOpen(true)}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-400 via-black to-orange-600 transition-transform duration-500 ease-in-out group-hover:bg-blue-400 rounded-xl animate-shimmer"></span>
              <span className="relative z-10">Apply Now</span>
            </button>

            <p className="text-sm text-gray-300 pt-2">
              24/7 booking support. Instant e-ticket delivery. 10,000+ happy flyers.
            </p>
          </motion.div>

          {/* Right Lottie Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="w-72 sm:w-96 md:w-full max-w-md">
              <Lottie animationData={animationData} loop={true} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Other Sections */}
      <div>
        <Destinations />
        <AirTicketingDetails />
        <Tour />
        <ExploreDestination />
      </div>

      {/* Modal */}
      <ModalFormWithPopup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        customContent={<MaltaImageContent />}
      />
    </div>
  );
}
