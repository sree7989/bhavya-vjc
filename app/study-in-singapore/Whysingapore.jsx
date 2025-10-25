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
    label: 'Visa Types',
    points: [
      'Student Pass: Required for full-time studies in Singapore institutions.',
      'Short-Term Visa: For courses under 30 days or exchange programs.',
    ],
  },
  {
    id: 1,
    icon: <FaUniversity className="text-3xl" />,
    label: 'University Admission',
    points: [
      'Apply to MOE-approved institutions like NUS, NTU, SMU, or private colleges.',
      'Secure an offer letter – mandatory for Student Pass application.'
    ],
  },
  {
    id: 2,
    icon: <FaGraduationCap className="text-3xl" />,
    label: 'Financial Proof',
    points: [
      'Show proof of funds for tuition & living (~SGD 10,000+).',
      'Tuition fees vary by program – ensure payment confirmation.',
    ],
  },
  {
    id: 3,
    icon: <FaGlobe className="text-3xl" />,
    label: 'Student Pass & ICA Approval',
    points: [
      'Apply via ICA’s SOLAR+ system with your institution’s registration.',
      'Approval usually takes 2–4 weeks. Entry visa may also be needed.',
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

export default function StudyInSingapore() {
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
            Study in <span className="bg-gradient-to-r from-black to-red-600 bg-clip-text text-transparent font-extrabold">Singapore</span> – Transform Your Career with <span className='text-orange-500'>VJC Overseas</span>
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
                src="/singapore-best-study-abroad.png"
                alt="Study in Singapore"
                title="Study in Singapore"
                width={500}
                height={100}
                unoptimized
              />
            </div>
            <div className="md:w-3/4 w-full text-gray-700 text-md leading-relaxed space-y-4">
  <motion.p
    className="text-gray-700 text-md leading-relaxed"
    initial="hidden"
    animate="visible"
    custom={2}
    variants={fadeUp}
  >
    Singapore is a global hub for education, innovation, and multicultural experiences. With top universities, industry-driven education, and vibrant career prospects, it’s a smart choice for international students. <span className='text-orange-500'>VJC Overseas</span> ensures a seamless admission-to-visa process.
  </motion.p>

  <p>
    We guide you through every stage – from course selection to ICA application, visa documentation, and travel. Study in Singapore to experience academic excellence and work opportunities in Asia’s business powerhouse.
  </p>

  <p>
    A <strong>Student Pass</strong> allows you to build a global future in a secure, English-speaking country with world-class infrastructure.
  </p>

  <ul className="list-disc list-inside space-y-2 pl-4">
    <li><strong>Work While You Study:</strong> Students can work part-time up to 16 hours/week during semesters.</li>
    <li><strong>Affordable & High ROI:</strong> Get world-class education at lower tuition costs compared to the UK, US, or Australia.</li>
    <li><strong>Safe & Student-Friendly:</strong> Ranked among the safest cities globally, with a clean, efficient, and high-tech environment.</li>
    <li><strong>Multicultural & English-speaking:</strong> Blend of Asian and Western values in a 100% English-speaking country.</li>
    <li><strong>Quick Visa Processing:</strong> Faster and more transparent process through Singapore’s SOLAR+ ICA system.</li>
    <li><strong>Career-Oriented Programs:</strong> Degrees designed with real-world industry requirements and employer expectations.</li>
    
  </ul>

  <p>
    <span className='text-orange-500'>VJC Overseas</span> also provides complete support with university selection, SOP writing, interview preparation, and post-arrival housing and settlement assistance.
  </p>
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
            <div className="absolute inset-0 bg-[url('/singapore-study-visa-process-vjc.jpg')] bg-cover bg-center">
              <div className="absolute inset-0 bg-black opacity-70" />
            </div>

            <div className="relative z-10 grid md:grid-cols-3 gap-8 p-6 md:p-8 text-white text-center">
              <div>
                <FaAward className="text-4xl text-yellow-400 mx-auto" />
                <h4 className="mt-2 text-lg font-bold">Students Guided</h4>
                <p className="text-3xl font-extrabold text-orange-400">
                  <CountUp end={750} duration={8} /> +
                </p>
                <p className="text-sm mt-1">Students placed in top Singapore universities & colleges.</p>
              </div>
              <div>
                <FaHandshake className="text-4xl text-yellow-400 mx-auto" />
                <h4 className="mt-2 text-lg font-bold">Partner Institutes</h4>
                <p className="text-3xl font-extrabold text-orange-400">30+</p>
                <p className="text-sm mt-1">Collaborations with top MOE-recognized institutions.</p>
              </div>
              <div>
                <FaGlobe className="text-4xl text-yellow-400 mx-auto" />
                <h4 className="mt-2 text-lg font-bold">Work Opportunities</h4>
                <p className="text-3xl font-extrabold text-orange-400">90%</p>
                <p className="text-sm mt-1">Our students secure internships & jobs post-study.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
