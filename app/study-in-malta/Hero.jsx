'use client';

import React, { useState } from 'react';
import Form from './Form';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ModalFormWithPopup from "../Popup/Popup";
import MaltaImageContent from "../Popup/MaltaImageContent";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/malta-viedo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 pt-16 pb-8 max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col lg:pl-20 items-center lg:items-start mt-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Images */}
            <div className="w-full max-w-[500px]">
              <Image
                src="/1.gif"
                alt="Work in Germany"
                width={600}
                height={350}
                className="rounded-lg w-full h-auto"
                priority
              />
              <div className="flex justify-center mt-4">
                <Image
                  src="/award-vjc.png"
                  alt="Award VJC"
                  width={400}
                  height={200}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-3xl sm:text-3xl lg:text-5xl font-bold text-white text-center lg:text-left px-2 sm:px-0 leading-tight">
              Study Abroad in Malta with - 
              <span className="text-orange-500 typing-animation">VJC Overseas</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-200 text-center lg:text-left mt-4 max-w-[500px] px-2 sm:px-0">
              Explore your academic journey in the heart of the Mediterranean – quality education, rich culture, and an affordable lifestyle.
            </p>

            {/* Apply Button */}
            <div className="mt-6 w-full flex justify-center lg:justify-center">
              <button
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold shadow-lg transition duration-300 w-full sm:w-auto"
                onClick={() => setIsOpen(true)}
              >
                Apply Now
              </button>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="w-full max-w-md mx-auto">
              <Form />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal popup */}
      <ModalFormWithPopup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        customContent={<MaltaImageContent />}
      />

      {/* Typing animation styles */}
      <style jsx>{`
        .typing-animation {
          white-space: nowrap;
          overflow: hidden;
          border-right: 3px solid orange;
          width: 0;
          animation:
            typing 3.5s steps(12) forwards,
            blink 0.75s step-end infinite;
        }

        @keyframes typing {
          to {
            width: 12ch;
          }
        }

        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }
      `}</style>
    </section>
  );
}
