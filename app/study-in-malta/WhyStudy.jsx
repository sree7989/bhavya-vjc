'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function WhyStudy() {
  return (
    <motion.section
      className="w-full m-0 p-0 bg-white"
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="w-full max-w-7xl mx-auto px-0 md:px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mt-0 mb-4">
          Why Study in Malta?
        </h2>

        <p className="text-base md:text-lg text-gray-700 mb-4 text-center md:text-left">
          Malta is becoming a popular destination for international students seeking high-quality education in a safe, sunny, and English-speaking environment. Here's why Malta could be the perfect destination for your academic future:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          {/* Left: Bullet Points */}
          <div className="space-y-4">
            {[
              {
                title: 'English-Taught Programs',
                desc: 'As one of Malta’s official languages is English, most university programs are taught in English.',
              },
              {
                title: 'Affordable Tuition',
                desc: 'Compared to other EU countries, Malta offers lower tuition fees and cost of living.',
              },
              {
                title: 'EU-Recognized Degrees',
                desc: 'Degrees awarded by Maltese institutions are recognized across Europe and globally.',
              },
              {
                title: 'Safe and Welcoming',
                desc: 'Malta offers a secure environment with a high quality of life, beautiful Mediterranean weather, and a friendly, multicultural society.',
              },
              {
                title: 'Post-Study Work Options',
                desc: 'Students can extend their stay to find work in Malta after graduation.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-blue-50 p-4 rounded-lg shadow-sm border border-transparent transition-all duration-300 hover:shadow-lg hover:border-orange-500 hover:-translate-y-1"
              >
                <h3 className="text-lg md:text-xl font-semibold text-blue-900">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Right: Image */}
          <div
            className="relative flex justify-center items-center h-[520px]"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className="overflow-hidden -mt-64 md:mt-0  transition-transform duration-300 ">
              <Image
                src="/study-in-malta-process.png"
                alt="Study in Malta"
                width={680}
                height={780}
                priority
              unoptimized

              />
            </div>
          </div>
        </div>

        {/* Step-by-step Process */}
        <div className="mb-0 -mt-48 md:mt-4">
          <h3 className="text-3xl font-bold mb-8 text-blue-900">Step-by-Step: Study in Malta Process</h3>
          <ol className="list-decimal list-inside  text-gray-700">
            <li>
              <strong className="text-xl">Choose Your Program and University : </strong>
Malta offers a range of courses in fields like Business, IT, Hospitality, Medicine, Engineering, and more. Popular universities include...
            </li>
          </ol>
        </div>
      </div>
    </motion.section>
  );
}
