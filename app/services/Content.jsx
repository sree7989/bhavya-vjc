"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import {
  FaPassport,
  FaPlane,
  FaMoneyBillWave,
  FaClipboardCheck,
  FaUserGraduate,
} from "react-icons/fa";
import Link from "next/link";

// Lazy load modal + content
const ModalFormWithPopup = dynamic(() => import("../Popup/Popup"), {
  ssr: false,
  loading: () => <div className="text-center text-white">Loading...</div>,
});
const ServicesImageContent = dynamic(
  () => import("../Popup/ServicesImageContent"),
  { ssr: false }
);

// Background images for slideshow
const bgImages = [
  "/passportservices.png",
  "/airteckeingservices.png",
  "/forexservies.png",
  "/freeassement.png",
  "/freecouselling.png",
];

// Services list
const services = [
  {
    icon: FaPassport,
    label: "Passport Services",
    link: "/services/passport-services",
    image: "/passportservices.png",
  },
  {
    icon: FaPlane,
    label: "Air Ticketing",
    link: "/services/air-ticketing",
    image: "/airteckeingservices.png",
  },
  {
    icon: FaMoneyBillWave,
    label: "Forex Services",
    link: "/services/forex-services",
    image: "/forexservies.png",
  },
  {
    icon: FaClipboardCheck,
    label: "Free Assessment",
    link: "/services/free-assessment",
    image: "/freeassement.png",
  },
  {
    icon: FaUserGraduate,
    label: "Free Counselling",
    link: "/services/free-counselling",
    image: "/freecouselling.png",
  },
];

export default function ServicesPage() {
  const [bgIndex, setBgIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Background slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-white text-gray-900">
      {/* Background Image optimized with next/image */}
      <motion.div
        key={bgIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 left-0 right-0 z-0 h-[380px] sm:h-[420px] md:h-[500px]"
      >
        <Image
          src={bgImages[bgIndex]}
          alt="Background Services"
          fill
          sizes="100vw"
          priority // background is above the fold (LCP)
          fetchPriority="high"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Hero Header */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-28 pb-10 text-center text-white sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-4 text-4xl font-extrabold sm:text-5xl"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mx-auto max-w-2xl text-lg text-gray-200"
        >
          Empowering your journey with expert services in travel, documentation,
          and education.
        </motion.p>
        <button
          onClick={() => setIsOpen(true)}
          className="mt-6 rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white shadow-lg transition duration-150 hover:bg-blue-400"
        >
          Apply Now
        </button>
      </div>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="relative z-10 w-full px-4 py-12 sm:px-6 lg:px-12"
      >
        <h2 className="mb-8 text-center text-2xl font-bold text-white sm:text-3xl">
          What We Offer
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => {
            const MotionLink = motion(Link);
            return (
              <MotionLink
                key={index}
                href={service.link}
                whileHover={{ scale: 1.05 }}
                className="flex w-[160px] flex-col items-center justify-start rounded-2xl border-2 border-transparent bg-white px-6 py-5 text-gray-800 shadow-md transition-all duration-300 hover:bg-blue-50 sm:w-[180px]"
              >
                <Image
                  src={service.image}
                  alt={service.label}
                  width={64}
                  height={64}
                  className="mb-1 -mt-4 h-16 w-16 rounded-full border-2 border-white object-cover"
                  priority={index < 2} // only first two service icons above the fold
                  draggable={false}
                />
                <service.icon className="mb-2 mt-1 text-2xl text-blue-600" />
                <span className="text-center text-sm font-semibold">
                  {service.label}
                </span>
              </MotionLink>
            );
          })}
        </div>
      </motion.section>

      {/* Modal */}
      {isOpen && (
        <ModalFormWithPopup
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          customContent={<ServicesImageContent />}
        />
      )}
    </div>
  );
}
