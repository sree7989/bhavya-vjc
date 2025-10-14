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
              src="/visit-visa-stage2.jpg"
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
              VJC Overseas: More Rapid Documentation in Immigration and Student Visa Process 
            </h2>
            <p className="text-lg text-white">
              In the fast-paced world of global mobility, timely and accurate documentation can make all the difference between a successful visa approval and an unnecessary delay or rejection.
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
             At VJC Overseas, we specialize in delivering more rapid documentation in immigration and student visa processes, helping you meet tight deadlines and avoid the stress of last-minute issues. 
            </p>
            <p>We understand that applying for a student visa or immigration pathway is not just a formality—it’s a crucial step toward building your future abroad. That’s why our expert team is trained to handle documentation with speed, precision, and professionalism—without compromising quality or compliance. </p>
            
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

        {/* Additional Paragraph */}
        <div className="text-lg text-justify px-6  md:px-24 text-gray-700">
        <h2 className='font-bold text-2xl mb-2'>Fast, Accurate, and Compliant Documentation Services: </h2>
        <p >
          Documentation is the backbone of any successful visa or immigration application. From identity proofs and financial statements to academic records, sponsorship letters, and application forms, every document must meet the specific criteria set by the destination country’s immigration authorities. 
        </p>
        <p>At VJC Overseas, we’ve developed a streamlined documentation process designed to minimize delays and eliminate common errors. Our experienced consultants help clients gather, verify, and organize the necessary documents quickly and efficiently, ensuring that every submission is complete and ready for review. </p>
        <p>By using advanced tools, digital document management systems, and country-specific checklists, we reduce the time spent on back-and-forth corrections and missing paperwork. This results in faster application submission and quicker turnaround times for both student visas and immigration cases. </p>
        {/* Highlight Cards */}
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            
            {
              title: 'Rapid Student Visa Documentation Support ',
              desc: 'Applying for a student visa often involves time-sensitive elements like university deadlines, course start dates, and embassy interview slots. At VJC Overseas, we offer rapid student visa documentation support that aligns perfectly with these timelines. ',
              color: 'blue-500',
              textColor: 'orange-700',
            },
            {
              title: 'Swift Immigration Filing with No Compromise on Quality ',
              desc: 'For immigration aspirants—whether you’re applying for skilled migration, permanent residency, or family sponsorship—our faster documentation services ensure your application is lodged promptly and correctly.',
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
              <h3 className={`text-xl font-bold mb-2 text-${card.textColor}`}>
                {card.title}
              </h3>
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
  width={600}
  height={400}
  className="w-full h-auto"
  unoptimized
/>

            </motion.div>
            <motion.div
              className="lg:w-2/3 w-full space-y-6 text-black"
              variants={fadeInUp}
            >
              {[
                "Dedicated document specialists for different countries and visa types .",
                "Dedicated document specialists for different countries and visa types .",
                "Digital documentation tools to simplify the process .",
                "Real-time updates and communication for better transparency .",
                "Proven track record of quick turnarounds and high approval rates .",
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
