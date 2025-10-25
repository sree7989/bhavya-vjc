"use client";
import dynamic from 'next/dynamic';
import Hero from "./components/Hero";

import React, { useState } from "react";
import ModalFormWithPopup from '../Popup/Popup';

import { FaWhatsapp } from 'react-icons/fa'; // Import the WhatsApp icon

// Dynamically import non-critical components with { ssr: false } to ensure they load on the client side
const RoadmapComponent = dynamic(() => import("./components/RoadmapComponent"), { ssr: false });
const Steps = dynamic(() => import("./components/Steps"), { ssr: false });
const Requirements = dynamic(() => import("./components/Requirements"), { ssr: false });
const Services = dynamic(() => import("@/app/components/Services"), { ssr: false });
const Why = dynamic(() => import("./components/Why"), { ssr: false });
const Between = dynamic(() => import("./components/Between"), { ssr: false });
const Book = dynamic(() => import("./components/Book"), { ssr: false });
const Vjcinfo = dynamic(() => import("./components/Vjcinfo"), { ssr: false });


export default function Home() {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Above-the-fold content */}
      <Hero setIsOpen={setIsOpen} />
      <ModalFormWithPopup isOpen={isOpen} setIsOpen={setIsOpen} />

      <RoadmapComponent />

      {/* Lazy-loaded components for better performance */}
      <Book />
      <Steps />
      <Between />
      <Requirements />
      <Services />
      <Why />
      <Vjcinfo />
      

      
    </>
  );
}
