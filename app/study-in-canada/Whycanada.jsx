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
      'Study Permit: For students who have received a letter of acceptance from a Canadian Designated Learning Institution (DLI).',
      'Temporary Resident Visa (TRV): Required for students from certain countries in addition to the study permit.',
    ],
  },
  {
    id: 1,
    icon: <FaUniversity className="text-3xl" />,
    label: 'University Admission',
    points: [
      'Apply and secure admission from a Canadian DLI.',
      'Receive a Letter of Acceptance (LOA), mandatory for visa application.'
    ],
  },
  {
    id: 2,
    icon: <FaGraduationCap className="text-3xl" />,
    label: 'Financial Requirements',
    points: [
      'Proof of funds: Minimum CAD 20,000 to cover tuition and living expenses.',
      'Submit bank statements, scholarships, or sponsor letters as evidence.'
    ],
  },
  {
    id: 3,
    icon: <FaGlobe className="text-3xl" />,
    label: 'Visa Processing',
    points: [
      'Apply online through the IRCC website or via VAC in your region.',
      'Attend biometrics appointment and medical exams (if required).'
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

export default function CanadaVisaProcess() {
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
            Study in <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent font-extrabold">Canada</span> – Begin Your Future with <span className='text-orange-500'>VJC Overseas</span>
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
                src="/canada-student.jpg"
                alt="Study in Canada"
                title="Study in Canada"
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
                Canada is one of the top study destinations for international students with its globally ranked institutions, high quality of life, and welcoming immigration policies. <span className='text-orange-500'>VJC Overseas</span> guides you through every step of the journey.
              </motion.p>
              <p className='mb-3'>From selecting a university to receiving your study permit, our expert counselors ensure a seamless application experience. Canada offers extensive options in technology, healthcare, management, and more.</p>
              <p className='mb-3'>A study permit in Canada is your gateway to permanent residency and future career opportunities.</p>
              <p><span className='text-orange-500'>VJC Overseas</span> assists with SOP writing, application reviews, visa file submission, and post-landing services.</p>
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
            <div className="absolute inset-0 bg-[url('/canada.webp')] bg-cover bg-center">
              <div className="absolute inset-0 bg-black opacity-70" />
            </div>

            <div className="relative z-10 grid md:grid-cols-3 gap-8 p-6 md:p-8 text-white text-center">
              <div>
                <FaAward className="text-4xl text-yellow-400 mx-auto" />
                <h4 className="mt-2 text-lg font-bold">Students Placed</h4>
                <p className="text-3xl font-extrabold text-orange-400">
                  <CountUp end={2000} duration={10} /> +
                </p>
                <p className="text-sm mt-1">Placed in top Canadian DLIs and community colleges.</p>
              </div>
              <div>
                <FaHandshake className="text-4xl text-yellow-400 mx-auto" />
                <h4 className="mt-2 text-lg font-bold">Institutional Partnerships</h4>
                <p className="text-3xl font-extrabold text-orange-400">60+</p>
                <p className="text-sm mt-1">Tie-ups with reputed institutions and visa offices.</p>
              </div>
              <div>
                <FaGlobe className="text-4xl text-yellow-400 mx-auto" />
                <h4 className="mt-2 text-lg font-bold">Post-Study Work</h4>
                <p className="text-3xl font-extrabold text-orange-400">98%</p>
                <p className="text-sm mt-1">Students gain PGWP and PR eligibility through study route.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
