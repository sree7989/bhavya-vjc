"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ModalFormWithPopup from "../../Popup/Popup";
import Studyabroad from "../../Popup/Studyabroad";
import Form from "./Form";
import USAStudyVisa from "./usa";
import UAEStudyVisa from "./uae";
import CanadaStudyVisa from "./CanadaStudyVisa";
import AustraliaStudyVisa from "./AustraliaStudyVisa";
import UKStudyVisa from "./uk";
import NZStudyVisa from "./Newzealand";
import HongStudyVisa from "./HongStudyVisa";
import Germany from "./Germany";
import Norway from "./Norway";
import Poland from "./Poland";
import Switzerland from "./Switzerland";
import Sweden from "./Sweden";
import Spain from "./Spain";
import Philippines from "./Philippines";
import Southafrica from "./Southafrica";
import Singapore from "./Singapore";
import Malaysia from "./Malaysia";
import France from "./France";
import Itlay from "./Itlay";
import Ireland from "./Ireland";
import Netherland from "./Netherland";
import Lux from "./Lux";
import Dubai from "./Dubai";
import Denmark from "./Denmark";

// Visa Data
const visaData = [
  { name: "Study in USA", path: "/study-abroad/usa", image: "/usa1.jpg" },
  { name: "Study in Uk", path: "/study-abroad/uk", image: "/uk1.webp" },
  { name: "Study in Canada", path: "/study-abroad/canada", image: "/canada1.jpg" },
  { name: "Study in Australia", path: "/study-abroad/australia", image: "/study-in-australia-flag.jpg" },
  { name: "Study in Germany", path: "/study-abroad/germany", image: "/germany.jpg" },
  { name: "Study in Italy", path: "/study-abroad/italy", image: "/itlay.jpg" },
  { name: "Study in France", path: "/study-abroad/france", image: "/france.jpg" },
  { name: "Study in Singapore", path: "/study-abroad/singapore", image: "/singapore.jpg" },
  { name: "Study in Malaysia", path: "/study-abroad/malaysia", image: "/m.jpg" },
  { name: "Study in South Africa", path: "/study-abroad/southafrica", image: "/sa.webp" },
  { name: "Study in New Zealand", path: "/study-abroad/newzealand", image: "/nz.webp" },
  { name: "Study in Philippines", path: "/study-abroad/philippines", image: "/p.jpg" },
  { name: "Study in Poland", path: "/study-abroad/poland", image: "/pol.webp" },
  { name: "Study in Ireland", path: "/study-abroad/ireland", image: "/ir.jpg" },
  { name: "Study in Spain", path: "/study-abroad/spain", image: "/spa.avif" },
  { name: "Study in Netherlands", path: "/study-abroad/netherlands", image: "/net.webp" },
  { name: "Study in Switzerland", path: "/study-abroad/switzerland", image: "/sw.webp" },
  { name: "Study in Denmark", path: "/study-abroad/denmark", image: "/de.jpg" },
  { name: "Study in Dubai", path: "/study-abroad/dubai", image: "/du.webp" },
  { name: "Study in Luxembourg", path: "/study-abroad/luxembourg", image: "/lux.jpg" },
  { name: "Study in Hongkong", path: "/study-abroad/hongkong", image: "/study-in-hongkong-flag.jpg" },
  { name: "Study in UAE", path: "/study-abroad/uae", image: "/ua.jpg" },
  { name: "Study in Norway", path: "/study-abroad/norway", image: "/norwaystudy.avif" },
  { name: "Study in Sweden", path: "/study-abroad/sweden", image: "/swedenstudy.jpg" },
];

const defaultVisa = {
  name: "Study Abroad with VJC",
  path: "/study-abroad",

};

const Migrate = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedVisa, setSelectedVisa] = useState(defaultVisa);
 const [isImageLoaded, setIsImageLoaded] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
 
   useEffect(() => {
     setIsImageLoaded(true);
   }, []);
  
    
  useEffect(() => {
    const foundVisa = visaData.find((visa) => visa.path === pathname);
    setSelectedVisa(foundVisa || defaultVisa);
  }, [pathname]);

  const handleVisaClick = (visa) => {
    setSelectedVisa(visa);
    router.push(visa.path);
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* ===== TOP SECTION ===== */}
      <div
        className="relative w-full min-h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${selectedVisa.image})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 w-full h-full flex items-center justify-center px-6 lg:px-10 py-4">
          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10">
            {/* Heading */}
            <motion.div
              className="w-full lg:w-1/2 text-white text-center lg:text-left pt-24 sm:pt-32 lg:pt-0 lg:pl-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-semibold uppercase leading-tight">
                {selectedVisa.name}
              </h1>
              <p className="mt-4 text-base sm:text-lg lg:text-xl max-w-xl">
                Discover top global destinations to pursue your dreams. Choose your study country and take the first step today!
              </p>
               <div className="mt-8 flex justify-center lg:justify-start">
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="relative overflow-hidden bg-gradient-to-r from-sky-400 to-orange-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
            >
              <span className="relative z-10">Apply Now</span>
              <span className="absolute top-0 left-[-100%] w-full h-full bg-white/30 animate-shine" />
            </button>
          </div>
            </motion.div>

            {/* Form */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-12">
              <Form />
            </div>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM SECTION ===== */}
      <div className="relative z-10 w-full bg-white px-4 sm:px-6 lg:px-12 pt-10 pb-16">
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-10 items-start">
          {/* Visa Info Content Box (first on mobile, last on desktop) */}
          <div
  className="w-full md:w-2/3 p-4 md:p-6 rounded-xl border border-gray-300 shadow-md relative mt-6 
             order-first md:order-last
             max-h-[900px] md:max-h-[700px] lg:max-h-[1900px] overflow-y-auto"
>
            {selectedVisa.name === "Study in USA" ? (
              <USAStudyVisa />
            ) : selectedVisa.name === "Study in Canada" ? (
              <CanadaStudyVisa />
            ) : selectedVisa.name === "Study in Australia" ? (
              <AustraliaStudyVisa />
            ) : selectedVisa.name === "Study in Uk" ? (
              <UKStudyVisa />
            ) : selectedVisa.name === "Study in New Zealand" ? (
              <NZStudyVisa />
            ) : selectedVisa.name === "Study in Hongkong" ? (
              <HongStudyVisa />
            ) : selectedVisa.name === "Study in UAE" ? (
              <UAEStudyVisa />
            ) : selectedVisa.name === "Study in Germany" ? (
              <Germany />
            ) : selectedVisa.name === "Study in Norway" ? (
              <Norway />
            ) : selectedVisa.name === "Study in Poland" ? (
              <Poland />
            ) : selectedVisa.name === "Study in Switzerland" ? (
              <Switzerland />
            ) : selectedVisa.name === "Study in Sweden" ? (
              <Sweden />
            ) : selectedVisa.name === "Study in Spain" ? (
              <Spain />
            ) : selectedVisa.name === "Study in Philippines" ? (
              <Philippines />
            ) : selectedVisa.name === "Study in South Africa" ? (
              <Southafrica />
            ) : selectedVisa.name === "Study in Singapore" ? (
              <Singapore />
            ) : selectedVisa.name === "Study in Malaysia" ? (
              <Malaysia />
            ) : selectedVisa.name === "Study in France" ? (
              <France />
            ) : selectedVisa.name === "Study in Italy" ? (
              <Itlay />
            ) : selectedVisa.name === "Study in Ireland" ? (
              <Ireland />
            ) : selectedVisa.name === "Study in Netherlands" ? (
              <Netherland />
            ) : selectedVisa.name === "Study in Luxembourg" ? (
              <Lux />
            ) : selectedVisa.name === "Study in Dubai" ? (
              <Dubai />
            ) : selectedVisa.name === "Study in Denmark" ? (
              <Denmark />
            ) : (
              <div className="text-gray-700 text-lg leading-relaxed">
                Please select a visa type from the left to view more details.
              </div>
            )}
          </div>

          {/* Study Destination Buttons (last on mobile, first on desktop) */}
          <div className="w-full md:w-1/3 order-last md:order-first">
            <div className="flex justify-center md:justify-start mb-8 ml-0 md:ml-11">
              <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent text-center md:text-left">
                <span className="block">Plan Your Study Abroad,</span>
                <span className="block">Shape Your Future</span>
                
              </h2>
              
            </div>
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
            {visaData.map((visa) => (
              <div key={visa.path} className="mb-4 w-full">
                <Link href={visa.path} className="block w-full">
                  <div
                    className={`w-full flex items-center justify-between text-lg font-semibold px-6 py-4 rounded-xl transition duration-300 shadow-lg ${
                      selectedVisa.path === visa.path
                        ? "bg-orange-500 text-white border-orange-500 shadow-orange-400"
                        : "bg-transparent text-black border border-orange-500 hover:bg-orange-500 hover:text-white"
                    } transform hover:scale-105`}
                  >
                    {visa.name}
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
       {/* POPUP FORM */}
      <ModalFormWithPopup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        customContent={<Studyabroad />}
      />
    </div>
  );
};

export default Migrate;
