'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaGraduationCap, FaGlobe, FaThumbsUp, FaStar } from 'react-icons/fa';
import Form from '../components/Form';
import Image from 'next/image';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

const VJCOverseasDedicated = () => {
  return (
    <div
      className="bg-gradient-to-br from-blue-50 via-white to-orange-100  py-10 lg:py-20 text-gray-800"
      style={{ fontFamily: 'Times New Roman, serif' }}
    >
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Top Section */}
        <motion.div
          className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-start bg-black/80 overflow-hidden shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/plave-vjc-study.webp"
              alt="Top Section Background"
              fill
              quality={100}
              className="object-cover opacity-40"
              priority
              unoptimized
            />
          </div>

          {/* Left Text Content */}
          <motion.div
            className="relative z-0 p-6 mt-36 lg:pl-20 lg:pr-12 space-y-6"
            custom={0.1}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-extrabold text-white drop-shadow-md">
              VJC Overseas: Dedicated Assistance in Immigration and Student Visa Process
            </h2>
            <p className="text-lg text-white">
              Navigating the complex world of global migration and overseas education can be overwhelming without the right guidance. 
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/assessment" passHref>
                <motion.button
                  className="bg-orange-500 text-white px-6 py-2 rounded-full shadow hover:bg-blue-500 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Free Assessment
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            className="relative z-10 p-6 lg:p-10"
            custom={0.2}
            variants={fadeInUp}
          >
            <Form />
          </motion.div>
        </motion.div>

        {/* Experience & Approach */}
        <motion.div
  className="grid md:grid-cols-2 gap-4 lg:gap-6 items-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  <motion.div
  className="mx-auto"
  style={{ maxHeight: '450px', width: 'auto', position: 'relative', height: '100%', minHeight: '350px' }}
  whileHover={{ scale: 1.03 }}
  transition={{ type: 'spring', stiffness: 300 }}
>
  <Image
    src="/study-abroad-vjcoversaes.png"
    alt="VJC Overseas Team"
    layout="fill"
    objectFit="contain"
    unoptimized
  />
</motion.div>

  <div className="space-y-6 text-lg text-justify pr-2 font-[Times New Roman]">
    <p>
      At VJC Overseas, we offer dedicated assistance in immigration and student visa processes, ensuring a smooth and successful journey for every client. Whether you're aiming to study abroad or build a new life in another country, our expert consultants are with you at every step—turning your goals into achievements. With years of hands-on experience and an in-depth understanding of international visa regulations, VJC Overseas has earned a reputation as one of the most reliable and client-focused immigration consultancies in India. Our commitment to personalized support and attention to detail sets us apart in a competitive industry.
    </p>
    <p>
      <strong className="text-orange-600">Personalized Guidance for Every Aspirant</strong><br />
      At VJC Overseas, we believe that no two cases are the same. Each individual has unique goals, qualifications, and circumstances. That’s why we offer tailored, one-on-one support to every student and immigration applicant. Our expert counselors take the time to understand your background and aspirations before crafting a strategic plan that aligns with the visa and admission requirements of your chosen country.
    </p>
  </div>
</motion.div>


        {/* Visa Assistance */}
        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-center text-blue-600">Student Visa Support with Care and Precision</h2>
          <p className="text-lg text-justify max-w-5xl mx-auto">
            VJC Overseas is especially renowned for its exceptional student visa support. We help students explore top universities and institutions across Canada, the USA, the UK, Australia, Germany, and New Zealand. Our dedicated education counselors assist with course selection, application submissions, financial documentation, SOP writing, and visa interview preparation.
            <br /><br />
            By offering comprehensive support throughout the student journey, we not only improve approval chances but also make the entire process stress-free and efficient. From admission to arrival, we are with you at every milestone.
          </p>
        </motion.div>

        {/* Immigration Help */}
        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-center text-orange-600">Immigration Support That Builds Futures</h2>
          <p className="text-lg text-justify max-w-5xl mx-auto">
            For professionals and families looking to relocate, VJC Overseas offers expert guidance in skilled migration, family sponsorship, PR processes, and more. Our experienced immigration consultants keep up-to-date with the latest policies, ensuring your application meets all the legal and procedural requirements. Our goal is to make your immigration process transparent, efficient, and successful.
          </p>
        </motion.div>

        {/* Why VJC Cards - Single Row Layout */}
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
  <h2 className="text-3xl font-bold text-center mb-10 text-blue-700 font-[Times New Roman]">
    Why VJC Overseas Stands Out
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-0">
    {[
      {
        icon: <FaStar className="text-4xl text-orange-500 mb-4" />,
        title: 'Client-First Approach',
        text: 'We treat your dreams like our own, offering full support and honest advice at every stage.'
      },
      {
        icon: <FaUserTie className="text-4xl text-blue-500 mb-4" />,
        title: 'Experienced Team',
        text: 'Our consultants are trained, certified, and well-versed in international visa laws and procedures.'
      },
      {
        icon: <FaThumbsUp className="text-4xl text-green-600 mb-4" />,
        title: 'High Success Rate',
        text: 'Our dedicated assistance has led to a consistently high approval rate for both student and immigration visas.'
      },
      {
        icon: <FaGlobe className="text-4xl text-purple-500 mb-4" />,
        title: 'Complete Transparency',
        text: 'No hidden charges, false promises, or shortcuts—just straightforward guidance and genuine support.'
      }
    ].map((item, idx) => (
      <motion.div
        key={idx}
        className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-400 space-y-4 text-center font-[Times New Roman]"
        custom={idx}
        variants={fadeInUp}
      >
        <div className="flex justify-center">{item.icon}</div>
        <h4 className="text-xl font-bold">{item.title}</h4>
        <p className="text-gray-700 text-sm">{item.text}</p>
      </motion.div>
    ))}
  </div>
</motion.div>

        {/* Final Call To Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center space-y-6 mt-20"
        >
          <h2 className="text-3xl font-bold text-orange-700">Begin Your Journey with Confidence</h2>
          <p className="text-lg max-w-4xl mx-auto text-gray-700">
            At VJC Overseas, we are not just a visa consultancy—we are your dedicated partners in global success. Our mission is to empower students, professionals, and families with the knowledge, tools, and support they need to thrive internationally.
          </p>
          <p className="text-lg text-gray-700">Contact VJC Overseas today to experience the difference of working with a team that is truly committed to your journey. With our dedicated assistance in immigration and student visa processes, your global future is within reach.</p>
          <Link href="/contact-us" passHref>
            <motion.button
              className="px-8 py-3 bg-orange-500 text-white rounded-full text-lg hover:bg-blue-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Talk to Our Experts
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default VJCOverseasDedicated;
