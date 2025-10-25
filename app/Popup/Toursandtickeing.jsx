'use client';
import React, { useEffect, useState } from "react";

const backgroundImages = [
  "/bali-tour.jpg",
  "/Tour-du-lich-maldives.jpg",
  "/Andaman-and-Nicobar-Islands-Package.jpg",
  "/dubaivisit.avif",
];

const MaltaImageContent = () => {
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
          Tour & Ticketing 2025
        </h2>
        <p className="text-sm sm:text-base font-medium leading-relaxed text-white">
          Plan perfect getaways with <span className="text-orange-400 font-semibold">VJC Overseas</span>. Book <span className="text-orange-400">low-cost flights</span> with instant e-tickets and 24/7 support. Explore <span className="text-orange-400">tailored tour packages</span> designed for comfort, fun, and unforgettable experiences.
        </p>
      </div>
    </div>
  );
};

export default MaltaImageContent;
