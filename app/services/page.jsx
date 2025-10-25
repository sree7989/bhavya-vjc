"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import Content from "./Content";
import Two from "./Two";
import Internal from "./Internal";
import Hero from "./Hero";
const textContainerVariants = {
 
   
};



const ContactPage = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <>
      {/* Navbar */}
      <div style={{ marginTop: "5%", zIndex: 20, position: "relative" }}>
       
      </div>
   <Content />
      {/* Main Section */}
      
      <Two />
      <FadeIn />
      {/* Other Sections */}
      <Hero />
    

    </>
  );
};

export default ContactPage;
