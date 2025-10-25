"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

// Variants for the content
const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Variants for individual content items
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

// Variants for the image
const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: 0.1 },
  },
};

const ContentSection = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="py-10"
    >
      <div
        className="max-w-[85rem] mx-auto px-5 sm:px-8 tablet:px-8 md:px-12 lg:px-10 flex flex-col md:flex-row gap-12 py-10 rounded-2xl bg-gradient-to-bl from-orange-50 to-orange-50"
        style={{
          backgroundImage: "url(/comp-22.webp)",
        }}
      >
        {/* Image Section */}
        <motion.div
          variants={imageVariants}
          className="flex md:flex-1 justify-center"
        >
          <Image
            src="/vjc-1.jpg"
            alt="Visa consultation services"
            width={1000}
            height={1000}
            className="w-full md:h-full object-cover rounded-lg"
            unoptimized
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          variants={contentVariants}
          className="md:w-1/2 space-y-6 text-gray-700"
        >
          <motion.h1
            variants={itemVariants}
            className="text-transparent bg-clip-text bg-gradient-to-tr from-orange-500 to-orange-600 uppercase font-semibold text-2xl sm:text-3xl md:text-[2.50rem]"
          >
            At VJC Overseas,<br /> We Make Your<br /> Dreams a Reality
          </motion.h1>

          <motion.p variants={itemVariants} className="text-justify">
            With our wide spectrum of services,{" "}
            <Link
              href="https://www.vjcoverseas.com"
              className="text-orange-500 font-bold hover:text-orange-600"
            >
              VJC Overseas
            </Link>{" "}
            stands as one of India’s most trusted partners for global
            aspirations. Whether you’re planning to study abroad, migrate for
            work, or secure permanent residency, we provide expert{" "}
            <Link
              href="https://www.vjcoverseas.com/services"
              className="text-orange-500 font-bold hover:text-orange-600"
            >
              Immigration Support Services
            </Link>{" "}
            tailored to your needs. Families, professionals, and students trust
            us for end-to-end guidance in fulfilling their international goals.
          </motion.p>

          <motion.ul
            variants={contentVariants}
            className="space-y-4 text-left"
          >
            {[
              <>
                Study – Our{" "}
                <Link
                  href="https://www.vjcoverseas.com/study-abroad"
                  className="text-orange-500 font-bold hover:text-orange-600"
                >
                  Study Abroad Consultants
                </Link>{" "}
                provide expert counseling and visa support for admission to top
                universities worldwide.
              </>,
              <>
                Migrate – Get a secure pathway to Permanent Residency with our{" "}
                <Link
                  href="https://www.vjcoverseas.com/pr-visas"
                  className="text-orange-500 font-bold hover:text-orange-600"
                >
                  PR Visa Consultants
                </Link>{" "}
                and settle down in your dream destination with ease.
              </>,
              <>
                Work – Explore global opportunities with professional visa
                assistance from our expert team.
              </>,
              <>
                Invest – Kick-start your international business journey with
                investor visa support from our specialists.
              </>,
              <>
                Visit – Travel without stress with the help of our{" "}
                <Link
                  href="https://www.vjcoverseas.com/visit-visas"
                  className="text-orange-500 font-bold hover:text-orange-600"
                >
                  Visit Visa Consultants
                </Link>{" "}
                who make your holiday or business travel completely hassle-free.
              </>,
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-center gap-x-2"
              >
                <span className="text-2xl text-orange-600 mb-2">
                  <FaCheckCircle />
                </span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContentSection;
