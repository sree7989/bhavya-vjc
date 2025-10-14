"use client";

import { useState } from "react";
import Image from "next/image";
import Nav from "./Nav";
import Two from "./Two";
// import Content from "./Content";
// import Form from "./Form";


const ContactPage = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <>
      {/* Navbar */}
      <div className="bg-white">
        <Two/>
       
      </div>
     

    </>
  );
};

export default ContactPage;
