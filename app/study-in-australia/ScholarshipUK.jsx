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
      'Receive expert guidance to choose the best course and university in Australia based on your interests, qualifications, and career goals.',
      'Support with application processes, Statement of Purpose reviews, and interview preparation.',
      'Assistance with visa applications, accommodation options, and pre-departure briefings.',
    ],
  },
  {
    id: 1,
    icon: <FaUniversity className="text-3xl" />,
    label: 'Top Universities',
    points: [
      'Australia is home to world-renowned universities such as University of Melbourne, University of Sydney, and Australian National University.',
      'These institutions offer a wide range of globally recognized degrees across fields like Business, Engineering, IT, Health Sciences, and more.',
      'Strong industry connections and excellent internship opportunities enhance employability.',
    ],
  },
  {
    id: 2,
    icon: <FaGlobe className="text-3xl" />,
    label: 'Global Environment',
    points: [
      'Australia welcomes students from over 190 countries, providing a multicultural and inclusive atmosphere.',
      'Enjoy safe campuses, vibrant student communities, and opportunities to network globally.',
      'Gain international exposure through internships and collaborative research projects.',
    ],
  },
  {
    id: 3,
    icon: <FaPlane className="text-3xl" />,
    label: 'Simplified Visa Process',
    points: [
      'Australia offers a straightforward student visa process with clear guidelines and reasonable timelines.',
      'We assist in preparing necessary documents, health checks, and meeting immigration requirements.',
      'Our team ensures your visa application is thorough and increases your chances of approval.',
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

export default function StudyInAustralia() {
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
            <span className="bg-gradient-to-r from-green-600 to-yellow-400 bg-clip-text text-transparent font-extrabold">
              AUSTRALIA
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
                src="/studyinaustralia/australia-study.png"
                alt="Study in Australia"
                title="Study in Australia"
                width={500}
                height={300}
                layout="responsive"
                className="object-cover rounded-md"
                unoptimized
              />
            </div>
            <div className="md:w-2/3 w-full text-gray-700 text-md leading-relaxed">
              <p className="mb-3">
               Australia has become one of the most popular destinations for international students, offering world-class education, globally recognized degrees, and a vibrant, multicultural lifestyle. With top universities, innovative learning environments, and high employability after graduation, studying in Australia opens the door to exciting global opportunities. At <span className='text-orange-600'>VJC Overseas</span>, we simplify the entire <span className='text-orange-600'>Australia student visa process</span>, helping you achieve your dream of studying in this beautiful and diverse country. 
              </p>
              <p className="mb-3">
                Whether you're pursuing a bachelor's or master's degree, Australia’s education system combines innovative teaching with practical experience and industry connections.
              </p>
              <p>
                Trust <span className="text-orange-500">VJC Overseas</span> to support you with university selection, application assistance, visa filing, and settling into your new academic home.
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
