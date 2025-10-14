"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Form from "./Form";
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
      {/* Navbar */}
      <div style={{ marginTop: "2%", zIndex: 20, position: "relative" }}>
     <Two />
      </div>

      {/* Main Section */}
      
      {/* Other Sections */}
      
      

    </>
  );
};

export default ContactPage;
