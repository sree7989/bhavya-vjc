'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaUniversity,
  FaUserGraduate,
  FaGlobe,
  FaPlane,
} from "react-icons/fa";
import CountUp from 'react-countup';
import Image from 'next/image';

const iconContent = [
  {
    id: 0,
    icon: <FaUserGraduate className="text-3xl" />,
    label: 'Personalized Counseling',
    points: [
      'Get expert guidance on choosing the right course and university in Dubai based on your background, goals, and financial capacity.',
      'From application assistance to SOP reviews and mock interviews — we support your journey end-to-end.',
      'We guide you through visa filing, accommodation search, and even post-arrival orientation.',
    ],
  },
  {
    id: 1,
    icon: <FaUniversity className="text-3xl" />,
    label: 'Top Universities',
    points: [
      'Dubai hosts globally accredited institutions like Heriot-Watt, Middlesex University Dubai, and University of Wollongong.',
      'These universities offer internationally recognized degrees in Business, IT, Engineering, Hospitality, and more.',
      'Courses are tailored to global standards with strong industry links and internship opportunities.',
    ],
  },
  {
    id: 2,
    icon: <FaGlobe className="text-3xl" />,
    label: 'Global Environment',
    points: [
      'Dubai is home to students from over 140 nationalities, offering rich cultural exposure and networking opportunities.',
      'Students benefit from a safe, inclusive environment and dynamic lifestyle.',
      'Global internships and industry exposure add value to your profile and employment potential.',
    ],
  },
  {
    id: 3,
    icon: <FaPlane className="text-3xl" />,
    label: 'Easy Visa Process',
    points: [
      'Dubai offers a streamlined student visa application process with quick turnaround.',
      'We help prepare documentation, medicals, and ensure compliance with UAE regulations.',
      'VJC Overseas ensures you meet deadlines and smoothly transition to your academic life in Dubai.',
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function StudyInDubai() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prev) => (prev + 1) % iconContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full mt-8 bg-white px-4 md:px-12 py-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:items-stretch">
        <div className="lg:w-full flex flex-col space-y-6 h-full">
          <motion.h2
            className="text-3xl md:text-3xl text-center font-bold text-gray-900"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
          >
            Study in{' '}
            <span className="bg-gradient-to-r from-blue-700 to-red-600 bg-clip-text text-transparent font-extrabold">
              DUBAI
            </span>{' '}
            – Start Your Global Education Journey with{' '}
            <span className="text-orange-500">VJC Overseas</span>
          </motion.h2>

          <motion.div
            className="flex flex-col md:flex-row gap-4 items-start"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
          >
            <div className="md:w-1/3 w-full">
              <Image
                src="/studyindubai/dubai-study.png"
                alt="Study in Dubai"
                title="Study in Dubai"
                width={500}
                height={300}
                layout="responsive"
                className="object-cover rounded-md"
                unoptimized
              />
            </div>
            <div className="md:w-2/3 w-full text-gray-700 text-md leading-relaxed">
              <p className="mb-3">
                Dubai, the vibrant heart of the UAE, is emerging as a leading destination for international education. Known for its world-class infrastructure, multicultural environment, and globally recognized universities, Dubai offers students a unique opportunity to study in a dynamic and rapidly growing academic hub. If you’re planning to <span className='text-orange-600'>study in Dubai</span>, understanding the <span className='text-orange-600'>student visa process</span> is essential. At <span className='text-orange-600'>VJC Overseas</span>, we provide expert guidance to make your journey to Dubai seamless and successful. 
              </p>
              <p className="mb-3">
                Whether you're pursuing an undergraduate program or a master's degree, Dubai provides cutting-edge facilities, internship opportunities, and a direct connection to global industries. It’s an ideal mix of tradition and innovation.
              </p>
              <p>
                At <span className="text-orange-500">VJC Overseas</span>, we guide you through every step — university selection, application, visa filing, and settling in Dubai — ensuring a smooth transition into your academic future.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
          >
            {iconContent.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelected(item.id)}
                aria-label={item.label}
                className={`flex flex-col items-center justify-center p-4 rounded-xl shadow transition-all duration-300 text-center ${
                  selected === item.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-800 hover:bg-orange-500 hover:text-white'
                }`}
              >
                {item.icon}
                <p className="text-sm mt-2 font-semibold">{item.label}</p>
              </button>
            ))}
          </motion.div>

          {/* Animated feature box */}
          <motion.div
            key={selected}
            className="bg-gray-100 rounded-md p-6 mt-4 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-lg font-bold mb-3 text-orange-600">
              {iconContent[selected].label}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {iconContent[selected].points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
