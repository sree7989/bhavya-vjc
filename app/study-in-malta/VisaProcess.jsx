'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const finalSteps = [
  {
    step: '5. Apply for a Malta Student Visa',
    description: (
      <>
        Non-EU/EEA students must apply for a student visa. Visa documentation includes:
        <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700">
          <li>Valid passport</li>
          <li>Admission letter</li>
          <li>Proof of financial means</li>
          <li>Health insurance</li>
          <li>Police clearance</li>
          <li>Accommodation proof</li>
        </ul>
        <p className="mt-3 font-semibold text-gray-800">
          Processing time: 3–6 weeks. Early application is recommended.
        </p>
      </>
    ),
    imageUrl: '/steps-to-apply-study-in-malta.png',
  },
  {
    step: '6. Plan Your Travel',
    description:
      'Once your visa is approved, arrange accommodation, flights, and prepare required documents for immigration at the Maltese port of entry.',
  },
  {
    step: '7. Register with Local Authorities',
    description:
      'Upon arrival, register with the Identity Malta Agency and apply for a residence permit for the duration of your studies.',
  },
];

export default function FinalSteps() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-6 py-0 lg:-mt-8 -mt-6">
      {/* Step 5: Visa with Image */}
      <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-orange-100 via-orange-50 to-white border-l-8 border-orange-500 rounded-lg p-8 mb-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
        {/* Text Section */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">{finalSteps[0].step}</h3>
          <div className="text-gray-800 text-lg leading-relaxed">
            {finalSteps[0].description}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 relative mt-6 md:mt-0 md:ml-12 w-full max-w-md">
          <Image
            src={finalSteps[0].imageUrl}
            alt="Step-by-step guide to apply for Malta student visa"
            title="How to Apply for a Malta Student Visa"
            width={500}
            height={600}
            priority
            unoptimized
            className="rounded-lg shadow-md object-cover"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
          {isHovered && (
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white text-sm px-4 py-1 rounded shadow-md">
              Malta Student Visa Process
            </div>
          )}
        </div>
      </div>

      {/* Steps 6 & 7 */}
      <div className="space-y-6">
        {finalSteps.slice(1).map(({ step, description }, idx) => (
          <div
            key={idx}
            className="bg-white border border-orange-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-900 mb-3">{step}</h3>
            <p className="text-gray-700 text-base leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
