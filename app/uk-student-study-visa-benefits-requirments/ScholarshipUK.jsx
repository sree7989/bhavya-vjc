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
      'Our certified counselors offer one-on-one personalized guidance to identify the right course and university based on their academic background,financial profile.',
      'From shortlisting institutions to drafting the perfect Statement of Purpose (SOP), we assist throughout the process with mock interviews.',
      'We don’t stop at the application — our support continues through visa filing, travel arrangements, and post-landing guidance.'
    ],
  },
  {
    id: 1,
    icon: <FaUniversity className="text-3xl" />,
    label: 'Top Universities',
    points: [
      'The UK is home to globally renowned universities like Oxford, Cambridge, and Imperial College, with diverse programs in STEM, business, arts, and more.',
      'Degrees from these institutions carry prestige and are accepted across industries and continents, boosting your employability.',
      'UK institutions integrate theoretical knowledge with practical learning, allowing you to engage in real-world research and industry-linked projects.'
    ],
  },
  {
    id: 2,
    icon: <FaGraduationCap className="text-3xl" />,
    label: 'Scholarships',
    points: [
      'UK offers an extensive range of scholarships to international students including Chevening, Commonwealth, GREAT Scholarships and university-specific awards.',
      'Scholarships cover partial to full tuition fees and even living expenses in some cases, significantly reducing the financial burden.',
      'We help identify scholarship eligibility and provide application assistance to maximize your chances of receiving aid.'
    ],
  },
  {
    id: 3,
    icon: <FaGlobe className="text-3xl" />,
    label: 'Global Exposure',
    points: [
      'Studying in the UK provides an opportunity to immerse yourself in a multicultural environment with peers from over 150 countries.',
      'International exposure enhances your adaptability, communication skills, and global mindset – traits highly valued by employers.',
      'Universities also offer global internships, study exchange programs, and networking with global industry experts.'
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

export default function StudyInUK() {
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
            Study in <span className="bg-gradient-to-r from-blue-700  to-red-600 bg-clip-text text-transparent font-extrabold">
    UK
  </span> – Start Your Global Education Journey with <span className='text-orange-500'>VJC Overseas</span>
          </motion.h2>

         

          <motion.div
            className="flex flex-col md:flex-row gap-4 items-start"
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
          >
            <div className="md:w-1/4 ">
            

<Image
  src="/studyinuk/ukstudy.png"
  alt="Study UK"
  title="Study in UK"
  width={500} // You can adjust this based on your layout
  height={60}
  className="object-cover rounded-md  "
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
            The United Kingdom is a premier education hub, offering centuries-old universities, diverse courses, and a rich multicultural environment. At  <span className='text-orange-500'>VJC Overseas</span>, we don’t just help you apply—we help you thrive.
          </motion.p>
              <p className='mb-2'>
                Whether it’s a world-class degree in engineering or a foundation course in arts, the UK is a melting pot of innovation and tradition. With over 400,000 international students, its education system is designed to develop global citizens.
              </p>
               <p className='mb-2'>
                The UK’s universities consistently rank among the top in the world, providing cutting-edge research facilities and highly qualified faculty. Students benefit from a wide array of programs tailored to meet the demands of the global job market, ensuring they graduate with skills that employers value.
              </p>
              <p><span className='text-orange-500'>VJC Overseas</span> is committed to guiding you through every step — from choosing the right university and course, handling visa formalities, to helping you settle comfortably in the UK. Our expert counselors provide personalized support to make your study abroad dream a reality.</p>
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

          {/* 🔥 Feature Section with Background */}
         

{/* Feature Section with BG + Counter */}
<motion.div
  className="relative mt-12 rounded-xl overflow-hidden shadow-lg"
  initial="hidden"
  animate="visible"
  custom={6}
  variants={fadeUp}
>
  {/* 🔥 Background Image */}
  <div className="absolute inset-0 bg-[url('/study-in-uk-process.jpg')] bg-cover bg-center">
    <div className="absolute inset-0 bg-black opacity-70" />
  </div>

  {/* Feature Content */}
  <div className="relative z-10 grid md:grid-cols-3 gap-8 p-6 md:p-8 text-white text-center">
    <div>
      <FaAward className="text-4xl text-yellow-400 mx-auto" />
      <h4 className="mt-2 text-lg font-bold">Students Placed</h4>
      <p className="text-3xl font-extrabold text-orange-400">
        <CountUp end={1000} duration={10} /> 


    +
      </p>
      <p className="text-sm mt-1">Guided into top UK universities for UG, PG, MBA & more.</p>
    </div>
    <div>
      <FaHandshake className="text-4xl text-yellow-400 mx-auto" />
      <h4 className="mt-2 text-lg font-bold">UK University Tie-ups</h4>
      <p className="text-3xl font-extrabold text-orange-400">40+</p>
      <p className="text-sm mt-1">Direct partnerships ensuring fast, easy applications.</p>
    </div>
    <div>
      <FaGlobe className="text-4xl text-yellow-400 mx-auto" />
      <h4 className="mt-2 text-lg font-bold">Global Careers</h4>
      <p className="text-3xl font-extrabold text-orange-400">100%</p>
      <p className="text-sm mt-1">Graduates land roles in MNCs, start-ups & global sectors.</p>
    </div>
  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
}
