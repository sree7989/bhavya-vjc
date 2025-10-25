'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import GermanyStudyVisa from './GermanyStudyVisa';
import Form from './Form';

const StudentVisaProcess = () => {
  const countries = [
        { name: "USA", path: "/usa" },
    { name: "UK", path: "/uk" },
    { name: "Canada", path: "/studycanada" },
    { name: "Australia", path: "/studyaustralia" },
    { name: "Germany", path: "/studyingermany" },
    { name: "Italy", path: "/italy" },
    { name: "France", path: "/france" },
    { name: "Singapore", path: "/singapore" },
    { name: "Malaysia", path: "/malaysia" },
    { name: "South Africa", path: "/studyinsouthafrica" },
    { name: "New Zealand", path: "/studyinnewzealand" },
    { name: "Philippines", path: "/philippines" },
    { name: "Poland", path: "/poland" },
    { name: "Ireland", path: "/ireland" },
    { name: "Spain", path: "/spain" },
    { name: "Sweden", path: "/sweden" },
    { name: "Norway", path: "/norway" },
    
  ];

  const bgImages = [
    "/study-abroad-vjc.jpg",
    "/study-abroad.jpg",
    "/studying-abroad-1.webp",
    "/texus-vjc.jpg",
    "/turckey-tour.jpg",
  ];

  const [currentBg, setCurrentBg] = useState(0);

   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [bgImages.length]); // ✅ fixed

  return (
    <div className="w-full min-h-screen text-black">
      {/* Top Content */}
      <div className="w-full px-4  bg-white">
        <div className="max-w-7xl mx-auto">
          <GermanyStudyVisa />
        </div>
      </div>

   
      {/* Country Buttons Section with Dynamic Background */}
      <div
        className="rounded-xl p-4 mb-10 transition-all duration-1000 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImages[currentBg]})`,
          backgroundBlendMode: "multiply",
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      >
        <h2 className="text-xl text-white font-bold text-center mb-4">
          Choose Your Destination
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {countries.map((c, i) => (
            <Link key={i} href={c.path}>
              <div className="px-4 py-3 bg-white/70 text-black border border-white rounded-lg text-sm font-semibold hover:bg-orange-500 hover:text-white hover:underline underline-offset-4 transition-all duration-300 shadow cursor-pointer text-center">
                {c.name} Student Visa Process
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentVisaProcess;
