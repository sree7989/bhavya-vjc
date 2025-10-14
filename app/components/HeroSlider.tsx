"use client";
import React, { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type Service = {
  text: string;
  link: string;
};

type Slide = {
  services: Service[];
  backgroundImage: string;
  title: string;
  gradient: string;
};

const sliderData: Slide[] = [
  {
    services: [
      { text: "Apply For Canada Permanent Residency", link: "/migrate-canada-permanent-residency-visa" },
      { text: "Apply For Canada Study Visa", link: "/study-in-canada" },
    ],
    backgroundImage: "/canada.webp",
    title: "Canada",
    gradient: "bg-gradient-to-r from-red-300 to-white",
  },
  {
    services: [
      { text: "Apply For Australia Permanent Residency Visa", link: "/migrate-australia-permanent-residency-visa" },
      { text: "Apply For Australia Study Visa", link: "/study-in-australia" },
    ],
    backgroundImage: "/australia.jpg",
    title: "Australia",
    gradient: "bg-gradient-to-r from-green-500 to-yellow-500",
  },
  {
    services: [
      { text: "Apply For Germany Opportunity Card Visa", link: "germany-opportunity-card" },
      { text: "Apply For Germany Study Visa", link: "/study-in-germany" },
    ],
    backgroundImage: "/germany.jpg",
    title: "Germany",
    gradient: "bg-gradient-to-r from-white to-yellow-500",
  },
  {
    services: [{ text: "Apply For UK Study Visa", link: "/uk-student-study-visa-benefits-requirments" }],
    backgroundImage: "/uk-flag.png",
    title: "United Kingdom",
    gradient: "bg-gradient-to-r from-blue-500 to-white",
  },
  {
    services: [{ text: "Apply For Malta Study Visa", link: "/study-in-malta" }],
    backgroundImage: "/malta.png",
    title: "Malta",
    gradient: "bg-gradient-to-r from-red-700 to-white",
  },
];

const SlideContent = memo(({ slide }: { slide: Slide }) => (
  <div className="relative z-10 text-center px-4 py-0 select-none">
    <h2 className={`text-xl lg:text-3xl font-extrabold uppercase text-transparent bg-clip-text ${slide.gradient}`}>
      {slide.title}
    </h2>
    <ul className={`space-y-1 ${slide.title === "United Kingdom" || slide.title === "Malta" ? "mt-3" : ""}`}>
      {slide.services.map((service, index) => (
        <li key={index}>
          <Link
            href={service.link}
            className="text-sm lg:text-base underline text-white hover:text-orange-400 transition-colors"
          >
            {service.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
));
SlideContent.displayName = "SlideContent";

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderData.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    setCurrentSlide(index);
  };

  return (
    <div
      className="relative w-full max-w-xs sm:max-w-md lg:w-[28rem] h-[8rem] mx-auto bg-gray-900 rounded-lg shadow-lg overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-live="polite"
      style={{ position: "relative" }}
    >
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${sliderData[currentSlide].backgroundImage})` }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
      </div>

      {/* Animated Slide Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={sliderData[currentSlide].title}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="relative z-20"
        >
          <SlideContent slide={sliderData[currentSlide]} />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1 z-30">
        {sliderData.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full focus:outline-none ${
              idx === currentSlide ? "bg-orange-500 scale-110" : "bg-gray-400"
            } transition-transform duration-200`}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => goToSlide(idx)}
            type="button"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
