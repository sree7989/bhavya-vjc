// app/study-abroad/malta/page.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Hero from './Hero';
import WhyStudy from './WhyStudy';
import TopUniversities from './TopUniversities';
import CostOfLiving from './CostOfLiving';
import VisaProcess from './VisaProcess';
import OurServices from './OurServices';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function StudyInMaltaPage() {
  return (
    <main className="space-y-16 py-8 bg-white text-gray-800 overflow-hidden">
      {/* Hero section full width */}
      
      <div className="w-full">
        <Hero />
      </div>

      {/* Padded sections */}
      <div className="px-4 md:px-16 space-y-16">
        <motion.div variants={fadeIn} initial="hidden" animate="show">
          <WhyStudy />
        </motion.div>
      </div>

      {/* Full width TopUniversities */}
      <div className="w-full">
        <TopUniversities />
      </div>

      {/* Remaining sections padded */}
      <div className="px-4 md:px-16 space-y-16">
        <motion.div variants={fadeIn} initial="hidden" animate="show">
          <CostOfLiving />
        </motion.div>
        <motion.div variants={fadeIn} initial="hidden" animate="show">
          <VisaProcess />
        </motion.div>
        <motion.div variants={fadeIn} initial="hidden" animate="show">
          <OurServices />
        </motion.div>
      </div>
    </main>
  );
}
