import React, { useState, useRef } from "react";
import Image from "next/image";
import Background from "../../../../public/bg-2.png";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import Form from "@/app/components/Form"; // Your existing form component
import ModalFormWithPopup from "../../../Popup/Popup"; // Adjust path if needed
import HomeImageContent from "../../../Popup/Home"; // Import your custom content

export default function Hero() {
  const [showForm, setShowForm] = useState(false);
  const container = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div
      className="relative h-[80vh] lg:h-[80vh] overflow-hidden bg-gray-700"
      ref={container}
    >
      {/* Background Image with Parallax Effect */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={Background}
          fill
          alt="background"
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-85"></div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center">
        <motion.h1
          className="text-[6vw] md:text-[3vw] font-bold text-transparent bg-clip-text bg-gradient-to-tr from-orange-500 to-orange-600 drop-shadow-lg uppercase"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Turning your global dreams to reality with <br /> VJC Overseas
        </motion.h1>

        <motion.h2
          className="text-[3vw] md:text-[1rem] max-w-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-orange-500 to-orange-600 drop-shadow-lg uppercase"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Welcome to VJC Overseas, a trusted name in overseas education and
          immigration services
        </motion.h2>

        <motion.p
          className="mt-4 text-base md:text-xl text-gray-300 max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          At VJC Overseas, we feel that your international journey deserves the
          best guidance. Our team of{" "}
          <Link
            href="https://www.vjcoverseas.com"
            className="text-orange-400  hover:text-orange-500"
          >
            Best Visa Immigration Consultants
          </Link>{" "}
          simplifies the complex process so that you don’t have to face it
          alone. With years of expertise and over 1,000 success stories, we help
          students, professionals, and families achieve their global dreams.
          Trust us to be your partners in creating a brighter future abroad.
        </motion.p>

        <motion.div
          className="mt-6 space-x-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Link href="/services">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 ml-4 md:ml-0 lg:ml-0 rounded-lg shadow-lg transition-all">
              Explore Services
            </button>
          </Link>
          <button
            type="button"
            className="bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-2 px-6 mt-4 md:mt-0 lg:mt-0 rounded-lg shadow-lg transition-all"
            onClick={() => setIsOpen(true)}
          >
            Contact Our Experts
          </button>
        </motion.div>
      </div>

      {/* Legacy Form (optional) */}
      {showForm && (
        <div className="fixed top-16 inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-20">
          <div className="relative bg-white rounded-lg p-8 w-[30rem]">
            <button
              onClick={handleCloseForm}
              className="absolute top-4 right-2 text-xl w-16 h-16 text-gray-700 hover:text-gray-900"
            >
              &times;
            </button>
            <Form />
          </div>
        </div>
      )}

      {/* Modal Form with Custom Content */}
      <ModalFormWithPopup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        customContent={<HomeImageContent />}
      />
    </div>
  );
}
