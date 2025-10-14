"use client";
import React, { useEffect, useState } from "react";

const backgroundImages = [
  
];

const AboutUsContent = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000); // switch every 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative rounded-2xl  overflow-hidden pt-6 md:pt-10 px-6 md:px-12 pb-8 text-white shadow-2xl"
      style={{
        backgroundImage: `url(${backgroundImages[bgIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60 z-0" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide 
                       bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 
                       bg-clip-text text-transparent drop-shadow-lg">
          About VJC Overseas
        </h2>

        <p className="text-sm sm:text-lg font-medium leading-relaxed text-gray-200">
          For over <span className="text-orange-400 font-bold">15 years</span>, VJC Overseas has
          guided dreamers to study, work, and settle abroad with <span className="text-yellow-300 font-semibold">trust</span>, 
          <span className="text-yellow-300 font-semibold">transparency</span>, and 
          <span className="text-yellow-300 font-semibold"> success</span>.
        </p>

        

      </div>
    </div>
  );
};

export default AboutUsContent;
