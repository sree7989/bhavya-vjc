'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    step: '2. Check Eligibility Requirements',
    points: [
      'Academic transcripts',
      'English language proficiency (IELTS/TOEFL)',
      'Passport copy',
      'Motivation letter',
      'CV/resume',
      'References',
    ],
  },
  {
    step: '3. Apply to the Institution',
    description:
      'Apply directly through the university’s official portal or with assistance from certified Malta education consultants. Most institutions offer rolling admissions with intakes in February and October.',
  },
  {
    step: '4. Receive Offer Letter',
    description:
      'Once accepted, you will receive a conditional or unconditional offer. Accept the offer by paying a deposit if required.',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function EligibilitySteps() {
  return (
    <motion.section
      className="max-w-7xl mx-auto px-6"
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* Three steps + image */}
      <div className="flex flex-col lg:flex-row items-start gap-10 mb-12">
        {/* Text Column */}
        <div className="flex-1 space-y-2">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="transition-shadow duration-300 p-5 rounded-xl bg-orange-50 border-l-4 border-orange-500 hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-3">{item.step}</h3>
              {item.points ? (
                <ul className="list-disc list-inside space-y-1 text-gray-800">
                  {item.points.map((point, i) => (
                    <li key={i} className="hover:text-orange-600">{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-800 leading-relaxed">{item.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* Image Column */}
        <div className="flex-shrink-0 w-full lg:w-1/4 max-w-lg mt-8 lg:mt-8">
          <Image
            src="/study-in-malta-document.png" // Replace with your image
            alt="Eligibility Steps"
            width={500}
            height={300}
            className="rounded-xl object-cover "
            priority
            unoptimized
          />
        </div>
      </div>
    </motion.section>
  );
}
