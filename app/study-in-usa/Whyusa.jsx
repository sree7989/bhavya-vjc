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
    label: 'Student Counselling',
    points: [
      'Our certified counselors provide personalized guidance to help you choose the best universities and courses across the USA, tailored to your academic and financial profile.',
      'We assist with university shortlisting, SOP drafting, and mock interviews to prepare you thoroughly for admission.',
      'Support continues through visa application, travel arrangements, and settling in the USA, ensuring a smooth transition.'
    ],
  },
  {
    id: 1,
    icon: <FaUniversity className="text-3xl" />,
    label: 'Top Universities',
    points: [
      'The USA hosts world-class universities such as Harvard, MIT, Stanford, and Yale, offering diverse programs across STEM, business, arts, and more.',
      'Degrees from these institutions are globally recognized and valued, opening doors to excellent career opportunities.',
      'American universities emphasize research, innovation, and practical learning, fostering creativity and real-world experience.'
    ],
  },
  {
    id: 2,
    icon: <FaGraduationCap className="text-3xl" />,
    label: 'Scholarships',
    points: [
      'The USA offers numerous scholarships for international students, including merit-based, need-based, and university-specific awards.',
      'Scholarships can cover tuition fees partially or fully and sometimes living expenses, helping ease the financial burden.',
      'We guide you to identify scholarship opportunities and assist with the application process to maximize your chances.'
    ],
  },
  {
    id: 3,
    icon: <FaGlobe className="text-3xl" />,
    label: 'Global Exposure',
    points: [
      'Studying in the USA immerses you in a multicultural environment with students from all over the world.',
      'This experience hones your communication skills, adaptability, and global perspective — key traits for a successful career.',
      'Universities provide internship opportunities, research collaborations, and networking with top global companies.'
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

export default function StudyInUSA() {
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
            Study in <span className="bg-gradient-to-r from-blue-700 to-red-600 bg-clip-text text-transparent font-extrabold">
              USA
            </span> – Start Your Global Education Journey with <span className='text-orange-500'>VJC Overseas</span>
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
                src="/usa-student-visa-process-vjc.avif"
                alt="Study USA"
                title="Study in USA"
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
                The United States is a global leader in higher education, offering world-renowned universities, cutting-edge research, and a diverse cultural experience. At <span className='text-orange-500'>VJC Overseas</span>, we guide you to not only apply but thrive in this dynamic environment.
              </motion.p>
              <p className='mb-2'>
                From Ivy League institutions to innovative tech schools, the USA provides unparalleled opportunities across fields like engineering, business, arts, and sciences. With over one million international students, it’s a hub of academic excellence and diversity.
              </p>
              <p className='mb-2'>
                American universities consistently rank among the world’s best, combining rigorous academics with practical learning experiences. Graduates leave equipped with skills and connections to succeed globally.
              </p>
              <p>
                <span className='text-orange-500'>VJC Overseas</span> is dedicated to supporting you at every stage — from university selection and application to visa processing and settling in the USA. Our experts offer personalized advice tailored to your ambitions.
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

          {/* Feature Section with Background and Counters */}
          <motion.div
            className="relative mt-12 rounded-xl overflow-hidden shadow-lg"
            initial="hidden"
            animate="visible"
            custom={6}
            variants={fadeUp}
          >
            <div className="absolute inset-0 bg-[url('/usa1.jpg')] bg-cover bg-center">
              <div className="absolute inset-0 bg-black opacity-70" />
            </div>

            <div className="relative z-10 grid md:grid-cols-3 gap-8 p-6 md:p-8 text-white text-center">
              <div>
                <FaAward className="text-4xl text-yellow-400 mx-auto" />
                <h4 className="mt-2 text-lg font-bold">Students Placed</h4>
                <p className="text-3xl font-extrabold text-orange-400">
                  <CountUp end={1200} duration={10} /> +
                </p>
                <p className="text-sm mt-1">Guided into top US universities for UG, PG, MBA & more.</p>
              </div>
              <div>
                <FaHandshake className="text-4xl text-yellow-400 mx-auto" />
                <h4 className="mt-2 text-lg font-bold">US University Tie-ups</h4>
                <p className="text-3xl font-extrabold text-orange-400">50+</p>
                <p className="text-sm mt-1">Direct partnerships for faster and easier admissions.</p>
              </div>
              <div>
                <FaGlobe className="text-4xl text-yellow-400 mx-auto" />
                <h4 className="mt-2 text-lg font-bold">Global Careers</h4>
                <p className="text-3xl font-extrabold text-orange-400">98%</p>
                <p className="text-sm mt-1">Graduates placed in MNCs, startups & Fortune 500 companies.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
