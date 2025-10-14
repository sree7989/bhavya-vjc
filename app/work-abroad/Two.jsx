"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const countriesData = [
  {
    name: "Germany Work Permit",
    path: "/work-abroad/germany-work-permit",
    image: "/germany.jpg",
  },
  {
    name: "Canada Work Permit",
    path: "/work-abroad/canada-work-permit",
    image: "/canada.webp",
  },
  {
    name: "USA H1b Visa",
    path: "/work-abroad/usa-h1b-visa",
    image: "/usa1.jpg",
  },
  {
    name: "Australia Work Permit",
    path: "/work-abroad/australia-work-permit",
    image: "/australia.jpg",
  },
  {
    name: "UK Work Permit",
    path: "/work-abroad/united-kingdom-work-permit",
    image: "/uk1.webp",
  },
  {
    name: "Denmark Work Permit",
    path: "/work-abroad/denmark-work-permit",
    image: "/de.jpg",
  },
  {
    name: "Dubai Work Permit",
    path: "/work-abroad/dubai-work-permit",
    image: "/du.webp",
  },
];

const Migrate = () => {
  const router = useRouter();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        scrollRef.current.scrollBy({
          left: 300,
          behavior: "smooth",
        });

        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full bg-white pt-16 pb-0 px-4 lg:px-20">
      <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-4">
        Select Your Work Permit Destination
      </h2>

      <div className="relative">
        <div
          ref={scrollRef}
          className="scroll-wrapper flex overflow-x-auto space-x-4 sm:space-x-6 scroll-smooth"
        >
          {countriesData.map((country, index) => (
  <Link
    href={country.path}
    key={index}
    className="min-w-[240px] sm:min-w-[280px] max-w-[300px] h-[220px] sm:h-[260px] rounded-lg bg-white border border-gray-200 cursor-pointer relative overflow-hidden block"
  >
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="w-full h-full relative"
    >
      <div
        className="w-full h-full bg-cover bg-center transition-transform scale-100 hover:scale-105"
        style={{ backgroundImage: `url(${country.image})` }}
      />

      <div className="absolute inset-0 bg-black/30 flex items-end p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-white w-full text-center">
          {country.name}
        </h3>
      </div>
    </motion.div>
  </Link>
))}

        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 -translate-y-1/2 left-0 z-20 bg-blue-700 text-white p-2 rounded-full hover:bg-blue-900 shadow-md"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 -translate-y-1/2 right-0 z-20 bg-blue-700 text-white p-2 rounded-full hover:bg-blue-900 shadow-md"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <style jsx>{`
        .scroll-wrapper {
          scrollbar-width: none; /* Firefox */
        }

        .scroll-wrapper::-webkit-scrollbar {
          display: none; /* Chrome, Safari */
        }
      `}</style>
    </main>
  );
};

export default Migrate;
