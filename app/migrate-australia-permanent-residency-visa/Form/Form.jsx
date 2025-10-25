'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaFileAlt,
  FaPassport,
  FaMapMarkedAlt,
  FaChartLine,
  FaHandshake,
  FaAward,
} from "react-icons/fa";
import CountUp from 'react-countup';
import Image from 'next/image';

const iconContent = [
  {
    id: 0,
    icon: <FaFileAlt className="text-3xl" />,
    label: 'Eligibility Check',
    points: [
      'We evaluate your age, education, work experience, and language skills to determine eligibility for PR.',
      'Guidance on maximizing points under Australia’s Skilled Migration system.',
      'Transparent assessment with no hidden conditions or fees.',
    ],
  },
  {
    id: 1,
    icon: <FaMapMarkedAlt className="text-3xl" />,
    label: 'SkillSelect & State Nomination',
    points: [
      'Expression of Interest (EOI) creation with expert guidance.',
      'Support for state/territory nomination pathways tailored to your profile.',
      'Real-time updates on invitations, occupation ceilings, and nomination trends.',
    ],
  },
  {
    id: 2,
    icon: <FaPassport className="text-3xl" />,
    label: 'Document Assistance',
    points: [
      'Complete support in collecting, preparing, and verifying your documents.',
      'Help with skill assessment, IELTS/PTE, police clearance, medicals, etc.',
      'Avoid delays and rejections with our thorough verification process.',
    ],
  },
  {
    id: 3,
    icon: <FaChartLine className="text-3xl" />,
    label: 'Post-Visa Support',
    points: [
      'Job search assistance, housing support, and pre-departure briefing.',
      'Help with Medicare, banking, education, and relocation setup.',
      'Support to eventually transition from PR to Australian citizenship.',
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

export default function AustraliaPRSection() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prev) => (prev + 1) % iconContent.length);
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
            Work in <span className="bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent font-extrabold">
              Australia PR Visa
            </span> – Empower Your Career with <span className='text-orange-500'>VJC Overseas</span>
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
    src="/Australian-PR.png"
    alt="Australia PR"
    title="Australia PR Visa"
    unoptimized
    width={800}
    height={80}
    className="object-cover h-[280px] rounded-md"
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
                Looking to take your career global? With a Permanent Residency (PR) Visa, your professional journey begins in one of the world’s most stable, welcoming, and opportunity-rich countries—Australia.
              </motion.p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-[15px]">
                <li><strong>Unlock a World of Job Opportunities:</strong> Work in any industry, for any employer, anywhere in Australia—no separate work permit needed.</li>
                <li><strong>High-Paying Jobs & Skill Demand:</strong> From IT and engineering to healthcare and finance, skilled talent is in demand.</li>
                <li><strong>No Job Offer? No Problem!</strong> Apply for PR and unlock top opportunities even after arrival.</li>
                <li><strong>Equal Access to Growth:</strong> Upskilling, government training, and business support—PR holders get it all.</li>
                <li><strong>Pathway to Citizenship:</strong> Every working day builds toward your Australian citizenship.</li>
                <li><strong>Work-Life Balance:</strong> Flexible hours, paid leaves, and life in one of the happiest countries.</li>
              </ul>
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
            <div className="absolute inset-0 bg-[url('/Australia-PR.jpg')] bg-cover bg-center">
              <div className="absolute inset-0 bg-black opacity-70" />
            </div>

            <div className="relative z-10 grid md:grid-cols-3 gap-8 p-6 md:p-8 text-white text-center">
              <div>
                <FaAward className="text-4xl text-yellow-400 mx-auto" />
                <h4 className="mt-2 text-lg font-bold">PR Success</h4>
                <p className="text-3xl font-extrabold text-orange-400">
                  <CountUp end={2500} duration={30} /> +
                </p>
                <p className="text-sm mt-1">Australia PRs granted via VJC Overseas expertise.</p>
              </div>
              <div>
                <FaHandshake className="text-4xl text-yellow-400 mx-auto" />
                <h4 className="mt-2 text-lg font-bold">Visa Consultations</h4>
                <p className="text-3xl font-extrabold text-orange-400">15K+</p>
                <p className="text-sm mt-1">Global clients trust our PR guidance.</p>
              </div>
              <div>
                <FaChartLine className="text-4xl text-yellow-400 mx-auto" />
                <h4 className="mt-2 text-lg font-bold">Approval Rate</h4>
                <p className="text-3xl font-extrabold text-orange-400">97%</p>
                <p className="text-sm mt-1">Clients achieve PR and settle in Australia.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
