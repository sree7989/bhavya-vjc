"use client";



import Nav from "./Nav";

import Two from "./Two";


const textContainerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};




const ContactPage = () => {
  

  

  return (
    <>
      {/* Navbar */}
      <div style={{ marginTop: "5%", zIndex: 20, position: "relative" }}>
        <Nav />
      </div>

      {/* Main Section */}
     

      {/* Other Sections */}
      <Two />
    </>
  );
};

export default ContactPage;
