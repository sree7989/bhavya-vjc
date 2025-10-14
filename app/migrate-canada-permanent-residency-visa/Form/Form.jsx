'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaPassport, FaMapMarkedAlt, FaChartLine, FaHandshake, FaAward } from "react-icons/fa";
import CountUp from 'react-countup';
import Image from 'next/image';

const iconContent = [
  {
    id: 0,
    icon: <FaFileAlt className="text-3xl" />,
    label: 'Eligibility Check',
    points: [
      'We evaluate your age, education, work experience, and language skills to determine eligibility for PR.',
      'Guidance on maximizing CRS score through strategic improvements.',
      'Transparent assessment with no hidden conditions or fees.',
    ],
  },
  {
    id: 1,
    icon: <FaMapMarkedAlt className="text-3xl" />,
    label: 'Express Entry & PNP',
    points: [
      'Profile creation and Express Entry pool submission with expert guidance.',
      'Support for Provincial Nominee Programs (PNPs) tailored to your background.',
      'Real-time updates on draw trends, invitations, and documentation.',
    ],
  },
  {
    id: 2,
    icon: <FaPassport className="text-3xl" />,
    label: 'Document Assistance',
    points: [
      'Complete support in collecting, preparing, and verifying your documents.',
      'Help with ECA, IELTS, police clearance, medicals, and more.',
      'Avoid rejections with our double-verification process.',
    ],
  },
  {
    id: 3,
    icon: <FaChartLine className="text-3xl" />,
    label: 'Post-Visa Support',
    points: [
      'Assistance with job search, housing, and arrival planning.',
      'Orientation on life in Canada: banking, healthcare, schooling, etc.',
      'Support in transitioning from PR to Canadian citizenship over time.',
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

export default function CanadaPRSection() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected(prev => (prev + 1) % iconContent.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white px-4 md:px-8 py-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:items-stretch">
        <div className="lg:w-full flex flex-col space-y-6 h-full">
          <motion.h2
            className="text-3xl md:text-3xl text-center font-bold text-gray-900"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
          >
            Canada <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent font-extrabold">
              PR Visa
            </span> – Build Your Future with <span className='text-orange-500'>VJC Overseas</span>
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
                src="/canadapr-family-sponsership-visa1.png"
                alt="Canada PR"
                title="Canada PR Visa"
                width={500}
                height={60}
                className="object-cover rounded-md"
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
                Canada offers one of the world's most immigration-friendly PR programs. With <span className='text-orange-500'>VJC Overseas</span>, your pathway to permanent residency is structured, simplified, and successful.
              </motion.p>
              <p className='mb-2'>
                Whether you're applying through Express Entry or a Provincial Nominee Program (PNP), we ensure your profile meets all criteria and stands out.
              </p>
              <p className='mb-2'>
                From eligibility checks to post-arrival support, we guide you at every stage—making your journey to Canadian PR smooth and stress-free.
              </p>
              <p><span className='text-orange-500'>VJC Overseas</span> has helped thousands achieve their Canadian dream. Now it’s your turn.</p>
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
                className={`flex flex-col items-center justify-center p-4 rounded-xl shadow transition-all duration-300 text-center ${selected === item.id
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
            <div className="absolute inset-0 bg-[url('/assets/canadapr/require.png')] bg-cover bg-center">
              <div className="absolute inset-0 bg-black opacity-70" />
            </div>

            <div className="relative z-10 grid md:grid-cols-3 gap-8 p-6 md:p-8 text-white text-center">
              <div>
                <FaAward className="text-4xl text-yellow-400 mx-auto" />
                <h4 className="mt-2 text-lg font-bold">PR Success</h4>
                <p className="text-3xl font-extrabold text-orange-400">
                  <CountUp end={3000} duration={30} /> +
                </p>
                <p className="text-sm mt-1">Approved PR Visas through VJC Overseas expertise.</p>
              </div>
              <div>
                <FaHandshake className="text-4xl text-yellow-400 mx-auto" />
                <h4 className="mt-2 text-lg font-bold">Visa Consultations</h4>
                <p className="text-3xl font-extrabold text-orange-400">20K+</p>
                <p className="text-sm mt-1">Trusted one-on-one consultations delivered globally.</p>
              </div>
              <div>
                <FaChartLine className="text-4xl text-yellow-400 mx-auto" />
                <h4 className="mt-2 text-lg font-bold">Approval Rate</h4>
                <p className="text-3xl font-extrabold text-orange-400">98%</p>
                <p className="text-sm mt-1">Clients achieve PR and settle successfully in Canada.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
