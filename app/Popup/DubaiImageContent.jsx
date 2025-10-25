'use client';
import React, { useEffect, useState } from "react";

const backgroundImages = [
  "/dubai.svg",
  "/the-university-of-toronto-university-canada.jpg",
  "/canada-student-full-visa-process.avif",

];

const GermanyImageContent = () => {
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
        <h2 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-red-400 via-green-500 to-white bg-clip-text text-transparent drop-shadow-lg">
          Study in Dubai 2025
        </h2>
        <p className="text-sm sm:text-base font-medium leading-relaxed text-white">
          Unlock prestigious <span className="text-yellow-400 font-semibold">Dubai universities</span> with no tuition fees, strong job opportunities, and global recognition. Get support with{" "}
          <span className="text-yellow-400 font-semibold">blocked account setup</span>,{" "}
          <span className="text-yellow-400 font-semibold">student visa process</span>, and customized{" "}
          <span className="text-yellow-400 font-semibold">study programs</span> that ensure your academic success and cultural experience in Dubai.
        </p>
      </div>
    </div>
  );
};

export default GermanyImageContent;
