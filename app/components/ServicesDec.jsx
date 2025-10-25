"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaPassport,
  FaUniversity,
  FaRegHandshake,
  FaMapMarkerAlt,
  FaChalkboardTeacher,
  FaMoneyCheckAlt,
  FaFileAlt,
  FaAirbnb,
} from "react-icons/fa";
 
const ServicesDec = () => {
  const [currentImage, setCurrentImage] = useState("/service.png");
 
  const boxData = [
    {
      icon: <FaPassport />, title: "PR Visa", content: "Premium Immigration Services For PR Visas To Australia, Canada, New Zealand Etc.", image: "/PR Visa.png", link: "/pr-visas",
    },
    {
      icon: <FaUniversity />, title: "Student Visa", content: "Apply for student visas from the hands of an experienced professional team.", image: "/Student-Visa.png", link: "/study-abroad",
    },
    {
      icon: <FaRegHandshake />, title: "Jobseeker Visa", content: "Get started now to open doors with our three-step Jobseeker Visa services that speak for themselves.", image: "/job.png", link: "/jobseeker-visas",
    },
    {
      icon: <FaMapMarkerAlt />, title: "Visit Visa/Dependent Visa", content: "Visit and dependent visa processing across the globe in a matter of days.", image: "/Visit Visa.png", link: "/visit-visas",
    },
    {
      icon: <FaChalkboardTeacher />, title: "Coaching", content: "Get a high score with guidance from our certified English language specialists.", image: "/33.png", link: "/coaching-training",
    },
    {
      icon: <FaMoneyCheckAlt />, title: "Investor Visa", content: "Work With Us For Stress Free Processing Of Investor Visa To Top European Nations.", image: "/Investor Visa.png", link: "/investor-visas",
    },
    {
      icon: <FaFileAlt />, title: "Resume Marketing", content: "Get your resume marketed internationally by us at a cost-effective price.", image: "/31.png", link: "/resume-marketing",
    },
    {
      icon: <FaAirbnb />, title: "Air ticketing", content: "Make your travel planning easier with our ticketing and passport services.", image: "/34.png", link: "/services/air-ticketing",
    },
  ];
 
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
 
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } },
  };
 
  const handleBoxClick = (image) => {
    setCurrentImage(image);
  };
 
  const Box = ({ index, box }) => (
    <motion.div
      key={index}
      className="w-72 h-28 bg-white border border-gray-300 shadow-lg flex items-center justify-between p-4 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-black hover:bg-orange-400 group"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      transition={{ delay: 0.3 + index * 0.2 }}
      onClick={() => handleBoxClick(box.image)}
    >
      <div className="text-orange-500 group-hover:text-white text-4xl">{box.icon}</div>
      <div className="w-0.5 h-12 bg-orange-400 group-hover:bg-white mx-2" />
      <div className="flex flex-col text-center relative">
        <Link href={box.link} passHref>
          <p className="text-base font-semibold uppercase hover:underline cursor-pointer">{box.title}</p>
        </Link>
        <p className="text-sm text-gray-600">{box.content}</p>
        <motion.span
          className="absolute bottom-2 right-2 text-xl font-extrabold hover:text-white cursor-pointer"
          whileHover={{ rotate: -10 }}
          transition={{ duration: 0.2 }}
        >
          →
        </motion.span>
      </div>
    </motion.div>
  );
 
  return (
    <motion.div
      className="flex items-center justify-center w-screen min-h-screen relative bg-cover bg-center bg-no-repeat py-16"
      style={{ backgroundImage: `url('/comp-21.webp')` }}
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      {/* Large Screen Layout */}
      <div className="hidden lg:flex flex-col items-center w-full px-8 z-10">
        {/* Top Card */}
        <Box index={0} box={boxData[0]} />
 
        <div className="flex items-center justify-center w-full mt-8 gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            <Box index={1} box={boxData[1]} />
            <Box index={2} box={boxData[2]} />
            <Box index={3} box={boxData[3]} />
          </div>
 
          {/* Center Image */}
          <motion.div
  className="relative z-30"
  whileHover={{ scale: 1.05 }} // Zoom only on hover
>
  <motion.img
    key={currentImage}
    src={currentImage}
    alt="Services"
    className={`object-cover rounded-full transition-transform duration-500 ${
      currentImage === "/service.png" ? "w-[24rem] h-[28rem]" : "w-[30rem] h-[30rem]"
    }`}
    whileHover={{ scale: 1.1 }} // Zoom effect
    transition={{ duration: 0.4, ease: "easeInOut" }}
  />
 
  {currentImage === "/service.png" && (
    <div className="absolute inset-0 flex flex-col mt-52 ml-4 items-center justify-center text-black text-center">


<Link href="/services">
  <h2 className="text-2xl font-bold cursor-pointer hover:text-blue-600 transition">
    Our Services
  </h2>
</Link>

      <p className="mt-2 text-sm px-4">Discover a range of top-notch services designed to meet your needs.</p>
    </div>
  )}
</motion.div>
 
 
          {/* Right Column */}
          <div className="flex flex-col gap-8">
            <Box index={4} box={boxData[4]} />
            <Box index={5} box={boxData[5]} />
            <Box index={6} box={boxData[6]} />
          </div>
        </div>
 
        {/* Bottom Card */}
        <div className="mt-8">
          <Box index={7} box={boxData[7]} />
        </div>
      </div>
 
 
     
     {/* Mobile View */}
<div className="lg:hidden flex flex-col items-center space-y-6 px-4 py-8">
  {/* Image shown in mobile */}
  <motion.div className="relative z-30" whileHover={{ scale: 1.05 }}>
    <motion.img
      key={currentImage}
      src={currentImage}
      alt="Services"
      className={`object-cover rounded-full mx-auto transition-transform duration-500 ${
        currentImage === "/service.png"
          ? "w-80 h-[26rem] -mt-28"
          : "w-[50%] h-auto -mt-28"
      }`}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    />
 
    {currentImage === "/service.png" && (
      <div className="absolute inset-0 mt-[90px] ml-5 flex flex-col items-center justify-center text-black text-center px-6">
        <h2 className="text-2xl font-bold leading-tight">Our Services</h2>
        <p className="mt-3 text-sm leading-snug">
          Discover a range of top-notch services designed to meet your needs.
        </p>
      </div>
    )}
  </motion.div>
 
  {/* Cards */}
  {boxData.map((box, index) => (
    <motion.div
      key={index}
      className="w-full max-w-md bg-white border border-gray-300 shadow-lg flex items-center justify-between p-4 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:border-black hover:bg-orange-400 group"
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      transition={{ delay: 0.3 + index * 0.1 }}
      onClick={() => handleBoxClick(box.image)}
    >
      <div className="text-orange-500 group-hover:text-white text-4xl">{box.icon}</div>
      <div className="w-0.5 h-12 bg-orange-400 group-hover:bg-white mr-1 ml-2" />
      <div className="flex flex-col justify-between text-center">
        <Link href={box.link} passHref>
          <p className="text-base font-semibold uppercase hover:underline cursor-pointer">
            {box.title}
          </p>
        </Link>
        <p className="text-sm text-gray-600">{box.content}</p>
      </div>
    </motion.div>
  ))}
</div>
 
 
   
    </motion.div>
  );
};
 
export default ServicesDec;