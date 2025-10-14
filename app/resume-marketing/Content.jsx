"use client";
 
import Head from "next/head";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaFileAlt, FaLinkedin, FaBriefcase, FaRedo } from "react-icons/fa";
 
const Content = () => {
  return (
    <>
      <Head>
        <title>VJC Overseas | Resume Marketing Services</title>
        <meta
          name="description"
          content="Boost your international job prospects with VJC Overseas' expert resume marketing services tailored for countries like the USA, UK, Canada, Australia, and more."
        />
        <meta property="og:title" content="VJC Overseas | Resume Marketing Services" />
        <meta
          property="og:description"
          content="Boost your international job prospects with expert resume marketing tailored for global success."
        />
        <meta property="og:image" content="/resume-marketing-bg.webp" />
      </Head>
 
      <div className="w-full bg-gradient-to-b from-blue-400 to-white min-h-screen sm:h-screen relative flex items-center justify-center overflow-y-auto sm:overflow-hidden">
        {/* Small Screen Layout */}
        <div className="flex flex-col items-center gap-4 p-6 sm:hidden">
          {/* Top Two Boxes */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/80 border border-gray-300 p-4 text-left w-full max-w-xs rounded shadow-xl"
          >
            <ul className="list-disc ml-4 text-sm font-[Times_New_Roman] space-y-2">
              <li>ATS-compliant formatting</li>
              <li>Keyword-rich content</li>
            </ul>
          </motion.div>
 
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/80 border border-gray-300 p-4 text-left w-full max-w-xs rounded shadow-xl"
          >
            <ul className="list-disc ml-4 text-sm font-[Times_New_Roman] space-y-2">
              <li>Industry-specific templates</li>
              <li>International HR best practices</li>
            </ul>
          </motion.div>
 
          {/* Center Circle Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="z-10"
          >
            <Image
              src="/resume-marketing-bg.webp"
              alt="Resume Marketing Centerpiece"
              width={192}
              height={192}
              className="rounded-full border-4 border-orange-600 shadow-xl object-cover"
            />
          </motion.div>
 
          {/* Bottom Two Boxes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/80 border border-gray-300 p-4 text-left w-full max-w-xs rounded shadow-xl"
          >
            <ul className="list-disc ml-4 text-sm font-[Times_New_Roman] space-y-2">
              <li>
                <FaFileAlt className="inline mr-2 text-orange-600" /> Profile highlights & summaries
              </li>
              <li>
                <FaLinkedin className="inline mr-2 text-orange-600" /> LinkedIn profile optimization
              </li>
            </ul>
          </motion.div>
 
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/80 border border-gray-300 p-4 text-left w-full max-w-xs rounded shadow-xl"
          >
            <ul className="list-disc ml-4 text-sm font-[Times_New_Roman] space-y-2">
              <li>
                <FaBriefcase className="inline mr-2 text-orange-600" /> Professional cover letters
              </li>
              <li>
                <FaRedo className="inline mr-2 text-orange-600" /> Unlimited revisions
              </li>
            </ul>
          </motion.div>
 
          {/* Bottom Text */}
          <div className="backdrop-blur-md bg-white/80 border border-gray-300 p-4 text-center w-full max-w-md rounded text-sm font-[Times_New_Roman]">
            <p>
              Whether you're targeting jobs in <strong>USA, UK, Canada, Australia, Germany, or UAE</strong>, our 
              <Link href="https://www.vjcoverseas.com/resume-marketing" className="text-orange-600 font-bold"> Resume Marketing Services </Link> 
              ensure you’re seen by the right recruiters.
              <Link href="https://www.vjcoverseas.com/" className="text-orange-600 font-bold"> VJC Overseas </Link> is your trusted global career accelerator.
            </p>
          </div>
 
          {/* CTA Button */}
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-orange-600 text-white px-6 py-2 rounded shadow-md hover:bg-orange-700"
            >
              Get Resume Help Now
            </motion.button>
          </Link>
        </div>
 
        {/* Large Screen Layout */}
        <div className="hidden sm:grid absolute inset-0 grid-cols-3 grid-rows-3 gap-8 p-8 z-0">
          {/* Top Text */}
          <motion.div
            className="col-span-3 row-start-1 flex items-center justify-center"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="backdrop-blur-md bg-white/80 border border-gray-300 p-4 text-center w-full sm:max-w-3xl rounded shadow-lg">
              <p className="text-base font-[Times_New_Roman]">
  <Link href="https://www.vjcoverseas.com/" className="text-orange-600 font-bold">VJC Overseas</Link> crafts resumes that align with global hiring
  standards and trends. A powerful resume unlocks interviews and builds confidence. We specialize in 
  <Link href="https://www.vjcoverseas.com/resume-marketing-services" className="text-orange-600 font-bold"> Resume Marketing Services</Link>, helping professionals highlight their strengths and land their dream opportunities abroad.
</p>

            </div>
          </motion.div>
 
          {/* Left Text */}
          <motion.div
            className="row-span-1 col-start-1 row-start-2 flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 1 }}
            viewport={{ once: true }}
          >
            <div className="backdrop-blur-md bg-white/80 border border-gray-300 p-4 text-left w-64 rounded shadow-xl">
              <ul className="list-disc ml-4 text-base font-[Times_New_Roman] space-y-2">
                <li>
                  <FaBriefcase className="inline mr-2 text-orange-600" /> ATS-compliant formatting
                </li>
                <li>
                  <FaFileAlt className="inline mr-2 text-orange-600" /> Keyword-rich content
                </li>
                <li>
                  <FaRedo className="inline mr-2 text-orange-600" /> Industry-specific templates
                </li>
                <li>
                  <FaLinkedin className="inline mr-2 text-orange-600" /> International HR best practices
                </li>
              </ul>
            </div>
          </motion.div>
 
          {/* Center Image */}
          <motion.div
            className="col-start-2 row-start-2 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <Image
              src="/resume-marketing-bg.webp"
              alt="Resume Center"
              width={256}
              height={256}
              className="rounded-full border-4 border-orange-600 shadow-xl object-cover"
              unoptimized
            />
          </motion.div>
 
          {/* Right Text */}
          <motion.div
            className="row-span-1 col-start-3 row-start-2 flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, delay: 1 }}
            viewport={{ once: true }}
          >
            <div className="backdrop-blur-md bg-white/80 border border-gray-300 p-4 text-left w-64 rounded shadow-xl">
              <ul className="list-disc ml-4 text-base font-[Times_New_Roman] space-y-2">
                <li>
                  <FaFileAlt className="inline mr-2 text-orange-600" /> Profile highlights & summaries
                </li>
                <li>
                  <FaLinkedin className="inline mr-2 text-orange-600" /> LinkedIn profile optimization
                </li>
                <li>
                  <FaBriefcase className="inline mr-2 text-orange-600" /> Professional cover letters
                </li>
                <li>
                  <FaRedo className="inline mr-2 text-orange-600" /> Unlimited revisions
                </li>
              </ul>
            </div>
          </motion.div>
 
          {/* Bottom CTA */}
          <motion.div
            className="col-span-3 row-start-3 flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center">
              <p className="text-sm font-[Times_New_Roman] text-center max-w-2xl mb-4 backdrop-blur-md bg-white/80 border border-gray-300 p-4 rounded shadow">
                With our 
                <Link href="https://www.vjcoverseas.com/resume-marketing" className="text-orange-600 font-bold"> Global Career Services </Link>, 
                job seekers gain an edge in overseas job markets. <strong>VJC Overseas</strong> doesn’t just create resumes—we market your profile to recruiters worldwide.
                Recognized among the <Link href="https://www.vjcoverseas.com/" className="text-orange-600 font-bold">Best Visa Immigration Consultants</Link>, we maximize your chances of success through 
                <Link href="https://www.vjcoverseas.com/resume-marketing" className="text-orange-600 font-bold"> Professional CV Marketing</Link>.
              </p>
              <Link href="/contact-us">
                <button className="bg-orange-600 text-white px-6 py-2 rounded shadow-md hover:bg-orange-700">
                  Get Resume Help Now
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};
 
export default Content;