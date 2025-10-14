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
      className="bg-gradient-to-br from-blue-50 via-white to-orange-100 py-10 lg:py-20 text-gray-800"
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
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/study-sycess.jpg"
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
              VJC Overseas: Achieving a High Rate of Success in Immigration and Student Visa Processes
            </h2>
            <p className="text-lg text-white">
              When it comes to fulfilling your dreams of studying or settling abroad, success is not just about desire—it’s about choosing the right partner to guide you through the process.
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
          <motion.div
            className="space-y-6 text-lg leading-8 text-justify text-gray-700"
            variants={fadeInUp}
          >
            <p>
              VJC Overseas is proud to be recognized for its high rate of success in immigration and student visa processes, helping thousands of clients turn their global aspirations into reality...
            </p>
            <h2 className='font-bold text-2xl'>Why Our Success Rate Stands Out</h2>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Image
              src="/study-abroad-vjcoversaes.png"
              alt="VJC Support Team"
              width={500}
              height={300}
              className="rounded-xl"
              unoptimized
            />
          </motion.div>
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
            <h2 className="text-4xl font-bold mb-4 text-orange-600">
              Why Choose VJC Overseas?
            </h2>
            <p className="text-lg text-gray-800">
              Our values and expertise put your success first.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center ml-6 lg:ml-24 gap-24">
            <motion.div className="lg:w-1/3 w-full" variants={fadeInUp}>
              <Image
                src="/studyinuk/uksteps.png"
                alt="Why VJC"
                width={400}
                height={300}
                className="rounded-xl w-full h-auto"
              />
            </motion.div>
            <motion.div
              className="lg:w-2/3 w-full space-y-6 text-black"
              variants={fadeInUp}
            >
              {[
                "Over a decade of visa consulting excellence.",
                "High approval rate in both immigration and student visa categories.",
                "Country-specific experts for customized guidance.",
                "End-to-end support including application, documentation, and post-visa services.",
                "Transparent processes with no hidden fees.",
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
            At VJC Overseas, we don’t just aim for approvals—
          </h4>
          <p className="text-lg text-gray-700">
            we aim for success with integrity. Partner with us and experience why we’re known for having one of the highest success rates in immigration and student visa processing.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default VJCCompetentSection;
