"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Form from "./Form";
import Content from "./Content";
import ModalFormWithPopup from "../Popup/Popup";
import MigrateImageContent from "../Popup/MigrateImageContent";

// 🔹 Animation Variants
const textContainerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const titleVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const descriptionVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: 0.2 },
  },
};

// 🔹 Countries Data
const countriesData = [
  { name: "Migrate to Germany", path: "/migrate/germany" },
  { name: "Migrate to Canada", path: "/migrate/canada" },
  { name: "Migrate to United States", path: "/migrate/united-states" },
  { name: "Migrate to Australia", path: "/migrate/australia" },
  { name: "Migrate to United Kingdom", path: "/migrate/united-kingdom" },
  { name: "Migrate to New Zealand", path: "/migrate/new-zealand" },
  { name: "Migrate to South Africa", path: "/migrate/south-africa" },
  { name: "Migrate to Hong Kong", path: "/migrate/hong-kong" },
  { name: "Migrate to Denmark", path: "/migrate/denmark" },
  { name: "Migrate to UAE", path: "/migrate/uae" },
];

const Migrate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [background, setBackground] = useState("/migratepageimg.avif");
  const router = useRouter();

  const handleCountryClick = (path, image) => {
    setBackground(image || "/migratepageimg.avif");
    router.push(path);
  };

  return (
    <>
      {/* 🔷 Hero Section with Background + Overlay */}
      <section
        className="relative bg-cover bg-center min-h-[600px] lg:h-[680px] flex items-center"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Black Transparent Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* 🔹 Text Section */}
            <motion.div
              className="w-full lg:w-1/2 text-center lg:text-left"
              variants={textContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="font-semibold uppercase leading-tight text-white text-3xl mt-24 lg:mt-0 sm:text-4xl md:text-5xl lg:text-[3.25rem]"
                style={{ fontFamily: "Times New Roman, serif" }}
                variants={titleVariants}
              >
                Migrate to Your Dream Country
              </motion.h1>

              <motion.p
                className="text-white tracking-tight md:font-medium max-w-xl lg:max-w-lg mt-4 mx-auto lg:mx-0"
                style={{
                  fontWeight: "bolder",
                  fontFamily: "Times New Roman, serif",
                }}
                variants={descriptionVariants}
              >
                Discover endless opportunities with our expert immigration
                services. Whether you're looking to study or work abroad, we
                help make your dreams a reality.
              </motion.p>

              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="relative mt-6 overflow-hidden bg-gradient-to-r from-sky-400 to-orange-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <span className="relative z-10">Apply Now</span>
                <span className="absolute top-0 left-[-100%] w-full h-full bg-white/30 animate-shine pointer-events-none" />
              </button>
            </motion.div>

            {/* 🔹 Form Section */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <Form />
            </div>
          </div>
        </div>
      </section>

      {/* 🔷 Content + Buttons Section */}
      <div className="bg-white py-4">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* 📌 Switch order: buttons left (lg), content right (lg); content first (sm) */}
          <div className="flex flex-col lg:flex-row md:items-start md:justify-between gap-8">
            
            {/* Buttons (Left on lg, Below on sm) */}
            <div className="w-full lg:w-1/3 order-2 lg:order-1">
          <div className="flex flex-col items-center text-center mb-8">
  <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent">
    Migrate to Your Dream Country
  </h2>
      <div className="mt-4 mb-10 flex justify-center lg:hidden">
    <button
      type="button"
      onClick={() => setIsOpen(true)}
      className="relative overflow-hidden bg-gradient-to-r from-sky-400 to-orange-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
    >
      <span className="relative z-10">Apply Now</span>
      <span className="absolute top-0 left-[-100%] w-full h-full bg-white/30 animate-shine" />
    </button>
  </div>
</div>


              {countriesData.map(({ name, path }) => (
                <div key={path} className="mb-4 w-full flex justify-center">
                  <Link
                    href={path}
                    className="w-[350px] flex items-center justify-between text-lg font-semibold bg-white text-black border border-orange-500 px-6 py-4 rounded-xl transition duration-300 
                      shadow-lg shadow-orange-200 hover:shadow-2xl hover:shadow-orange-400 
                      hover:bg-orange-500 hover:text-white transform hover:scale-105"
                  >
                    {name}
                    <ArrowRight className="w-6 h-6 transition duration-300" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Content (Right on lg, Top on sm) */}
            <div className="w-full lg:w-2/3 order-1 lg:order-2 overflow-y-auto max-h-[900px] bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <Content />
            </div>
          </div>
        </div>
      </div>

      {/* 🔷 Modal */}
      <ModalFormWithPopup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        customContent={<MigrateImageContent />}
      />
    </>
  );
};

export default Migrate;
