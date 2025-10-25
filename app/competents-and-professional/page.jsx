'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Form from '../components/Form';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
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

const VJCCompetentSection = () => {
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
              VJC Overseas: Competent and Professional in Immigration and Student Visa Process
            </h2>
            <p className="text-lg text-white">
              Planning your future abroad? VJC Overseas provides trustworthy and expert guidance for your education, career, and immigration goals.
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

        {/* Paragraph with Image */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-24 ml-6 md:ml-24 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="space-y-6 text-lg leading-8 text-justify text-gray-700" variants={fadeInUp}>
            <p>
              With over a decade of experience, VJC Overseas has become a name synonymous with excellence. We cater to students and professionals looking to settle or study in Canada, the UK, USA, Australia, Germany, New Zealand, and more.
            </p>
            <p>
              From selecting the right academic program to navigating immigration policies, our consultants provide comprehensive and up-to-date support to help you achieve your global dreams.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Image
              src="/study-abroad-vjcoversaes.png"
              alt="VJC Support Team"
              width={300}
              height={150}
              unoptimized
            />
          </motion.div>
        </motion.div>

        {/* Highlights Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              title: 'Expertise That Delivers Results',
              desc: 'Our deep knowledge of immigration law ensures every application is accurate, compliant, and timely—delivering successful outcomes.',
              color: 'orange-500',
              textColor: 'blue-800',
            },
            {
              title: 'Student Visa Process Made Simple',
              desc: 'From program selection to visa filing and pre-departure prep, we ensure a smooth, hassle-free journey for students.',
              color: 'blue-500',
              textColor: 'orange-700',
            },
            {
              title: 'Transparent & Client-Centric',
              desc: 'We set clear expectations and provide ethical, step-by-step support—building long-term trust with every client.',
              color: 'green-500',
              textColor: 'green-700',
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              className={`bg-white/70 backdrop-blur-lg rounded-xl shadow-lg p-6 border-l-4 border-${card.color} hover:scale-105 transition`}
              custom={idx}
              variants={fadeInUp}
            >
              <h3 className={`text-xl font-bold mb-2 text-${card.textColor}`}>{card.title}</h3>
              <p className="text-gray-700">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Section */}
        <motion.div
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-orange-600">Why Choose VJC Overseas?</h2>
            <p className="text-lg text-gray-800">
              Our values and expertise put your success first.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center ml-6 lg:ml-24 gap-24">
            <motion.div
              className="lg:w-1/3 w-full"
              variants={fadeInUp}
            >
              <Image
  src="/studyinuk/uksteps.png"
  alt="Why VJC"
  width={1200} // Replace with actual width
  height={600} // Replace with actual height
  className="w-full h-auto"
  unoptimized
/>

            </motion.div>
            <motion.div
              className="lg:w-2/3 w-full space-y-6 text-black"
              variants={fadeInUp}
            >
              {[
                "Proven Track Record of successful visa approvals.",
                "Experienced and Certified Consultants.",
                "Up-to-Date Knowledge of immigration policies.",
                "Comprehensive Support from start to finish.",
                "High Client Satisfaction and referrals.",
              ].map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  custom={index}
                  variants={fadeInUp}
                >
                  <FaCheckCircle className="text-orange-500 text-2xl mt-1" />
                  <p className="text-lg">{point}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center mt-16 space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h4 className="text-2xl font-bold text-blue-600">
            At VJC Overseas, we don’t just process applications—we build futures.
          </h4>
          <p className="text-lg text-gray-700">
            Connect with us and take your first step toward a successful global journey.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default VJCCompetentSection;
