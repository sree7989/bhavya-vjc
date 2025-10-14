'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaUserGraduate, FaGraduationCap, FaGlobe, FaHandshake, FaAward } from "react-icons/fa";
import CountUp from 'react-countup';
import Image from 'next/image';

const iconContent = [
  {
    id: 0,
    icon: <FaUserGraduate className="text-3xl" />,
    label: 'Student Visa Types',
    points: [
      'Student Applicant Visa: For students who haven’t yet received a final admission letter.',
      'Student Visa: For students who have received admission to a German university.',
    ],
  },
  {
    id: 1,
    icon: <FaUniversity className="text-3xl" />,
    label: 'University Admission',
    points: [
      'Apply and get accepted into a recognized German university.',
      'Obtain the letter of acceptance which is mandatory for visa application.'
    ],
  },
  {
    id: 2,
    icon: <FaGraduationCap className="text-3xl" />,
    label: 'Financial Requirements',
    points: [
      'Open a blocked account with approx. €11,208 to show sufficient funds.',
      'Blocked account is required for visa processing.'
    ],
  },
  {
    id: 3,
    icon: <FaGlobe className="text-3xl" />,
    label: 'Visa Interview & Approval',
    points: [
      'Book an appointment with the German Embassy at least 3 months in advance.',
      'Attend the visa interview and wait 4–12 weeks for processing and approval.'
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

export default function StudyInGermany() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected(prev => (prev + 1) % iconContent.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white px-4 md:px-12 py-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:items-stretch">
        <div className="lg:w-full flex flex-col space-y-6 h-full">
          <motion.h2
            className="text-3xl md:text-3xl text-center font-bold text-gray-900"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
          >
            Study in <span className="bg-gradient-to-r from-black to-red-600 bg-clip-text text-transparent font-extrabold">Germany</span> – Begin Your Future with <span className='text-orange-500'>VJC Overseas</span>
          </motion.h2>

          <motion.div
            className="flex flex-col md:flex-row gap-4 items-start"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
          >
            <div className="md:w-1/4">
              <Image
                src="/germany-study-full-process.png"
                alt="Study Germany"
                title="Study in Germany"
                width={500}
                height={150}
                unoptimized
              />
            </div>
            <div className="md:w-3/4 w-full text-gray-700 text-md leading-relaxed">
              <motion.p
                className="text-gray-700 text-md leading-relaxed"
                initial="hidden"
                animate="visible"
                custom={2}
                variants={fadeUp}
              >
                Germany is a top destination for international education with its tuition-free universities, cutting-edge technology, and globally respected degrees. <span className='text-orange-500'>VJC Overseas</span> ensures you navigate the process smoothly and confidently.
              </motion.p>
              <p className='mb-3'>We assist you from choosing the right program to your visa application and travel. With globally ranked institutions and practical-focused education, Germany offers unmatched opportunities in engineering, business, science, and more.</p>
              <p className='mb-3'>A student visa for Germany opens doors to a world-class education system with affordable living and post-study work options.</p>
              <p><span className='text-orange-500'>VJC Overseas</span> provides end-to-end support including SOP writing, mock interviews, and post-arrival services.</p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial="hidden"
            animate="visible"
            custom={4}
            variants={fadeUp}
          >
            {iconContent.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelected(item.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-xl shadow transition-all duration-300 text-center ${
                  selected === item.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-800 hover:bg-orange-500 hover:text-white'
                }`}
              >
                {item.icon}
                <p className="text-sm mt-2">{item.label}</p>
              </button>
            ))}
          </motion.div>

          <motion.div
            className="bg-gray-50 p-4 rounded-md shadow-md text-gray-700"
            initial="hidden"
            animate="visible"
            custom={5}
            variants={fadeUp}
          >
            <ol className="list-decimal list-inside space-y-3">
              {iconContent[selected].points.map((point, index) => (
                <li key={index}>
                  <span className="font-semibold text-gray-800">Step {index + 1}:</span> {point}
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            className="relative mt-12 rounded-xl overflow-hidden shadow-lg"
            initial="hidden"
            animate="visible"
            custom={6}
            variants={fadeUp}
          >
            <div className="absolute inset-0 bg-[url('/germanypr.jpg')] bg-cover bg-center">
              <div className="absolute inset-0 bg-black opacity-70" />
            </div>

            <div className="relative z-10 grid md:grid-cols-3 gap-8 p-6 md:p-8 text-white text-center">
              <div>
                <FaAward className="text-4xl text-yellow-400 mx-auto" />
                <h4 className="mt-2 text-lg font-bold">Students Placed</h4>
                <p className="text-3xl font-extrabold text-orange-400">
                  <CountUp end={1000} duration={10} /> +
                </p>
                <p className="text-sm mt-1">Placed across top German public and private universities.</p>
              </div>
              <div>
                <FaHandshake className="text-4xl text-yellow-400 mx-auto" />
                <h4 className="mt-2 text-lg font-bold">University Tie-ups</h4>
                <p className="text-3xl font-extrabold text-orange-400">40+</p>
                <p className="text-sm mt-1">Strong ties with DAAD & German institutions for easy access.</p>
              </div>
              <div>
                <FaGlobe className="text-4xl text-yellow-400 mx-auto" />
                <h4 className="mt-2 text-lg font-bold">Post-Study Careers</h4>
                <p className="text-3xl font-extrabold text-orange-400">95%</p>
                <p className="text-sm mt-1">Students secure internships & jobs in Germany and the EU.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
