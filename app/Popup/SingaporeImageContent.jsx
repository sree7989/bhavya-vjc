'use client';
import React, { useEffect, useState } from "react";

const backgroundImages = [
  "/singapore-study-visa-process-vjc.jpg",
  "/singapore.jpg",
  "/singapore-student-visa-process.jpg",
 
];

const SingaporeImageContent = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative rounded-xl overflow-hidden pt-4 md:pt-6 px-6 md:px-10 pb-4 text-white"
      style={{
        backgroundImage: `url(${backgroundImages[bgIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0" />
      <div className="relative z-10 space-y-3 mt-0 md:-mt-4">
        <h2 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-orange-500 via-white to-sky-500 bg-clip-text text-transparent drop-shadow-lg">
          Study in Singapore – 2025 Intakes
        </h2>
        <p className="text-sm sm:text-base font-medium leading-relaxed text-white">
          Begin your global education journey with <span className="text-orange-400 font-semibold">VJC Overseas</span>. Apply to top Singapore universities with full support on <span className="text-orange-400">Student Pass</span>, documentation, SOPs, and more. Experience a secure, modern, and high-ROI academic destination.
        </p>
      </div>
    </div>
  );
};

export default SingaporeImageContent;
