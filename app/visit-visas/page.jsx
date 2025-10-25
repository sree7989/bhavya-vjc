"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Content from "./Content";
import Two from "./Two";

const textContainerVariants = {
 
   
};



const ContactPage = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <>
  

      {/* Main Section */}
      
      {/* Other Sections */}
      <Two />
      <Content />


    </>
  );
};

export default ContactPage;
