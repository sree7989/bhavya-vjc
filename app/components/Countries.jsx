"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from "next/image";
import ModalFormWithPopup from "../Popup/Popup";
import Studyabroad from "../Popup/Studyabroad";
import 'swiper/css';
import {
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { countries } from "./CountriesData";

const CountrySlider = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const sliderRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const logos = Array.from({ length: 8 }, (_, i) => `/logo${i + 1}.png`);

  const handleClick = (index) => {
    const fullIndex = scrollPosition * 5 + index;
    setExpandedIndex(fullIndex === expandedIndex ? null : fullIndex);
  };

  const handleCancel = () => {
    setExpandedIndex(null);
  };

  const handleWheel = (e) => {
    if (sliderRef.current) {
      e.preventDefault();
      sliderRef.current.scrollBy({
        left: e.deltaY > 0 ? 300 : -300,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    setScrollPosition((prev) => Math.max(prev - 1, 0));
  };

  const scrollRight = () => {
    setScrollPosition((prev) =>
      Math.min(prev + 1, Math.floor(countries.length / 5) - 1)
    );
  };

  useEffect(() => {
    const currentSliderRef = sliderRef.current;
    if (currentSliderRef) {
      currentSliderRef.addEventListener("wheel", handleWheel, {
        passive: false,
      });
    }
    return () => {
      if (currentSliderRef) {
        currentSliderRef.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  }, [isOpen]);

  // CSS style to hide scrollbars cross-browser
  const scrollbarStyles = `
    .hide-scrollbar {
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
    .hide-scrollbar::-webkit-scrollbar {
      display: none; /* Chrome, Safari, and Opera */
    }
  `;

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Inject scrollbar hiding style */}
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />

      {expandedIndex !== null && (
        <motion.div
          className="absolute top-0 left-0 w-full h-[60vh] lg:h-full bg-cover bg-center z-50 flex flex-col lg:flex-row"
          style={{ backgroundImage: `url(${countries[expandedIndex].image})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logos carousels */}
          <div
            className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] sm:w-[80vw] md:w-[60vw] h-[35vh] md:h-[40vh] overflow-y-hidden rounded-lg p-4 sm:p-6 bg-white bg-opacity-90 shadow-lg"
          >
            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              loop
              autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }}
              speed={3000}
              allowTouchMove={false}
              modules={[Autoplay]}
              breakpoints={{
                320: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
            >
              {logos.map((logo, i) => (
                <SwiperSlide key={`top-${i}`}>
                  <div className="flex items-center justify-center bg-white rounded-md p-3 shadow-md h-24 w-full hover:scale-105 transition-transform duration-300">
                    <Image src={logo} alt={`Logo ${i + 1}`} width={100} height={70} className="object-contain" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              loop
              autoplay={{
                delay: 0,
                reverseDirection: true,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              speed={3000}
              allowTouchMove={false}
              modules={[Autoplay]}
              className="mt-6"
              breakpoints={{
                320: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
            >
              {logos.map((logo, i) => (
                <SwiperSlide key={`bottom-${i}`}>
                  <div className="flex items-center justify-center bg-white rounded-md p-3 shadow-md h-24 w-full hover:scale-105 transition-transform duration-300">
                    <Image src={logo} alt={`Logo ${i + 1}`} width={100} height={70} className="object-contain" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Close button */}
          <motion.button
            className="absolute top-6 right-6 bg-neutral-200 text-neutral-600 p-3 rounded-full z-50 shadow-md hover:bg-neutral-300 transition"
            onClick={handleCancel}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            aria-label="Close expanded view"
          >
            <FaTimes size={18} />
          </motion.button>

          {/* Description panel (scrollable) */}
          <motion.div
            className="absolute top-0 right-0 w-full lg:w-[35vw] h-full bg-white bg-opacity-95 p-6 flex flex-col justify-center shadow-lg hide-scrollbar"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ minWidth: '280px' }}
          >
            <div className="mx-4 flex flex-col h-full">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 uppercase">
                {countries[expandedIndex].name}
              </h2>
              <div
                className="text-gray-800 text-justify text-base md:text-lg mb-6 max-h-[60vh] overflow-y-auto scroll-smooth"
              >
                {countries[expandedIndex].description}
              </div>
              <button
  type="button"
  onClick={() => setIsOpen(true)}
  className="relative overflow-hidden bg-gradient-to-r from-sky-400 to-orange-500 text-white font-semibold py-1.5 px-4 sm:py-2 sm:px-6 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition duration-300 self-start text-sm sm:text-base"
>
  <span className="relative z-10">Apply Now</span>
  <span className="absolute top-0 left-[-100%] w-full h-full bg-white/30 animate-shine" />
</button>

            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Scroll Buttons */}
      <motion.button
        className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2 bg-neutral-200 text-neutral-400 p-2 rounded-full"
        onClick={scrollLeft}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        aria-label="Scroll countries left"
      >
        <MdOutlineKeyboardDoubleArrowLeft size={24} />
      </motion.button>

      <motion.button
        className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2 bg-neutral-200 text-neutral-400 p-2 rounded-full"
        onClick={scrollRight}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        aria-label="Scroll countries right"
      >
        <MdOutlineKeyboardDoubleArrowRight size={24} />
      </motion.button>

      {/* Country cards slider with responsive widths and proper horizontal scroll */}
      <motion.div
        ref={sliderRef}
        className="flex w-full h-auto min-h-[34rem] snap-x snap-mandatory gap-4 rounded-lg mt-0 lg:mt-10 px-4 overflow-x-auto hide-scrollbar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ scrollBehavior: "smooth" }}
      >
        {countries
          .slice(scrollPosition * 5, (scrollPosition + 1) * 5)
          .map((country, index) => (
            <motion.div
              key={index}
              className="relative flex-shrink-0 min-w-[50vw] sm:min-w-[45vw] md:min-w-[28vw] lg:min-w-[20vw] h-[32rem] -mt-16 lg:mt-10
 bg-cover bg-center flex items-center justify-center rounded-xl snap-center overflow-hidden cursor-pointer"
              style={{ backgroundImage: `url(${country.image})` }}
              onClick={() => handleClick(index)}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              aria-label={`View details about ${country.name}`}
            >
              <motion.div
                className="absolute inset-0 bg-orange-500 opacity-50 z-10 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.5 }}
                transition={{ duration: 0.3 }}
              />
              <motion.h2
                className={`absolute bottom-16 left-4 text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-white z-20 uppercase ${country.color}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                style={{writingMode: "vertical-rl", transform: "rotate(180deg)"}}
              >
                {country.name}
              </motion.h2>
              <motion.p
                className="absolute bottom-16 left-12 text-sm sm:text-base font-semibold text-white z-20 max-w-[8rem] truncate"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                style={{writingMode: "vertical-rl", transform: "rotate(180deg)"}}
              >
                Explore the best universities
              </motion.p>
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black via-gray-900 to-transparent opacity-65" />
              <div className="absolute -bottom-4 left-0 w-full h-1/2 bg-gradient-to-t from-black via-gray-900 to-transparent opacity-65" />
            </motion.div>
          ))}
      </motion.div>

      <ModalFormWithPopup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        customContent={<Studyabroad />}
      />
    </div>
  );
};

export default CountrySlider;
