"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ArrowRight } from "lucide-react";
import Content from "./Content";
import Link from "next/link"; 
import Image from "next/image";
const visaData = [
  { name: "USA Visit Visa", path: "/visit-visas/usa", bg: "/usavisvitvisa.jpg" },
  { name: "USA B1/B2 Visa", path: "/visit-visas/usa-b1-b2-visa", bg: "/usabgh1h2.jpg" },
  { name: "Canada Visit Visa", path: "/visit-visas/canada", bg: "/canadavisitvisa.avif" },
  { name: "Australia Visit Visa", path: "/visit-visas/australia", bg: "/best-places-to-visit-in-Australia.jpg" },
  { name: "UK Visit Visa", path: "/visit-visas/uk", bg: "/ukvisitvisas.jpg" },
  { name: "Dubai Visit Visa", path: "/visit-visas/dubai", bg: "/dubaivisit.avif" },
  { name: "Denmark Visit Visa", path: "/visit-visas/denmark", bg: "/denmarktimg.avif" },
  { name: "Austria Visit Visa", path: "/visit-visas/austria", bg: "/austriavisit.jpg" },
  { name: "Italy Visit Visa", path: "/visit-visas/italy", bg: "/italyvist.jpeg" },
  { name: "Schengen Visit Visa", path: "/visit-visas/schengen", bg: "/schenvivas.jpg" },
];

const defaultVisa = {
  name: "Job Seeker Visa",
  bg: "/visitvisas.jpg",
};

const Migrate = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [selectedVisa, setSelectedVisa] = useState(defaultVisa);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredVisa, setHoveredVisa] = useState(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const foundVisa = visaData.find((visa) => visa.path === pathname);
    setSelectedVisa(foundVisa || defaultVisa);
  }, [pathname]);

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % visaData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovering]);

  const currentVisa = hoveredVisa || visaData[currentIndex];

  const handleVisaClick = (visa) => {
    setSelectedVisa(visa);
    router.push(visa.path);
  };

 const renderVisaCard = (visa, index) => (
  <Link href={visa.path} key={visa.name} className="block">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative p-4 h-36 rounded-xl shadow-lg transition hover:scale-105 cursor-pointer flex flex-col justify-between overflow-hidden group"
      onMouseEnter={() => {
        setHoveredVisa(visa);
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        setTimeout(() => setHoveredVisa(null), 2000);
      }}
      style={{
        backgroundImage: `url(${visa.bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "1px solid #4b5563",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0 group-hover:bg-opacity-40 transition duration-300"></div>
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe className="text-orange-400 w-5 h-5" />
          <h3 className="text-sm font-semibold text-white">{visa.name}</h3>
        </div>
        <ArrowRight className="text-gray-300 w-4 h-4" />
      </div>
      <p className="text-xs text-white mt-3 relative z-10">Apply Now</p>
    </motion.div>
  </Link>
);


  return (
    <>
      <Head>
        <title>Visit Visas - VJC Overseas</title>
        <meta
          name="description"
          content="Apply for USA, Canada, Australia, UK, Schengen and other Visit Visas with expert guidance from VJC Overseas."
        />
        <link rel="canonical" href="https://www.vjcoverseas.com/visitvisas" />
        <meta property="og:image" content={`https://www.vjcoverseas.com${currentVisa.bg}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`https://www.vjcoverseas.com${currentVisa.bg}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "VJC Overseas",
              "url": "https://www.vjcoverseas.com",
              "logo": "https://www.vjcoverseas.com/logo.png",
              "image": visaData.map((visa) => `https://www.vjcoverseas.com${visa.bg}`),
            }),
          }}
        />
      </Head>

      <div className="w-full min-h-screen bg-white text-black">
        {/* Hero Section */}
        <div className="relative h-[70vh] w-full overflow-hidden">
         

<Image
  key={currentVisa.bg}
  src={currentVisa.bg}
  alt={`VJC Overseas - ${currentVisa.name} Background`}
  fill
  priority
  className="absolute inset-0 w-full h-full object-cover brightness-75 transition-all duration-1000 will-change-transform"
/>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentVisa.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg"
              >
                {currentVisa.name}
              </motion.h1>
            </AnimatePresence>
            <p className="text-lg text-gray-200 mt-4 max-w-xl">
              Choose your destination and begin your journey with VJC Overseas.
            </p>
          </div>
        </div>

        {/* Grid Section - Two Rows of 5 Columns */}
<div className="relative -mt-24 z-10 px-6 md:px-12">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
    {visaData.slice(0, 5).map((visa, index) => renderVisaCard(visa, index))}
  </div>
</div>

<div className="relative mt-5 z-0 px-6 md:px-12">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
    {visaData.slice(5, 10).map((visa, index) => renderVisaCard(visa, index + 5))}
  </div>
</div>


        {/* Visa Content */}
        
      </div>
    
    </>
  );
};

export default Migrate;