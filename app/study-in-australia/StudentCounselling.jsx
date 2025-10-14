"use client";

import { useEffect } from "react";
import { FaRegClipboard } from "react-icons/fa";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const items = [
  {
    title: "Get Enrolled in a CRICOS-Registered Course",
    desc: "Apply and receive an offer letter from a CRICOS-registered institution. After accepting the offer, you will be issued a Confirmation of Enrolment (CoE)—a key document for visa application.",
  },
  {
    title: "Gather Required Documents",
    desc: `You will need the following documents for your student visa application (subclass 500):
• Valid passport
• CoE from an Australian institution
• Proof of funds (tuition fees, living expenses)
• English proficiency test scores (IELTS/TOEFL/PTE)
• Genuine Temporary Entrant (GTE) statement
• Health insurance (Overseas Student Health Cover - OSHC)
• Academic transcripts and certificates
• Statement of Purpose (SOP)
• Passport-size photographs`,
  },
  {
    title: "Apply Online for Student Visa (Subclass 500)",
    desc: "Apply online through the ImmiAccount portal on the Department of Home Affairs website. Our expert team will help you fill out your visa application accurately, upload all required documents, and submit the application efficiently.",
  },
  {
    title: "Undergo Health and Character Checks",
    desc: "You may be required to complete a medical examination and provide police clearance certificates as part of the visa assessment process.",
  },
  {
    title: "Visa Processing and Approval",
    desc: "The processing time typically ranges from 3 to 8 weeks. Once approved, you will receive your Visa Grant Letter, including your visa conditions, duration, and expiry date.",
  },
  {
    title: "Prepare for Travel",
    desc: "After receiving your visa, you can book your flight and travel to Australia up to 90 days before your course begins. Upon arrival, make sure to attend orientation and comply with all student visa conditions.",
  },
];

export default function StudentCounselling() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <section className="w-full px-4 md:px-10 pt-10 pb-16 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h2
          className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black via-orange-600 to-orange-400 text-center mb-12"
          data-aos="fade-up"
        >
          Australia Student Visa Process
        </h2>

        {/* Top Split Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-12">
          {/* Left Image */}
          <div className="lg:w-1/4 w-full" data-aos="fade-up" data-aos-delay="100">
            <Image
              src="/studyinaustralia/studentcounselling.jpeg"
              alt="Australia Student Visa"
              width={400}
              height={300}
              className="w-full h-auto shadow-md rounded-lg"
              unoptimized
            />
          </div>

          {/* Right Text */}
          <div
            className="lg:w-3/4 w-full text-gray-700 text-base space-y-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <p>
              Planning to study in Australia? Here's a clear step-by-step guide to help you navigate the student visa (Subclass 500) process. From securing admission to final travel arrangements, we'll guide you through each essential stage.
            </p>
            <p>
              Our experts assist with document preparation, visa submission, and post-arrival formalities. We provide support for health insurance (OSHC), financial proof requirements, and the Genuine Temporary Entrant (GTE) statement.
            </p>
            <p>
              Begin your Australian education journey with confidence. Contact us today for personalized guidance.
            </p>

            <div className="pt-4">
              <Link href="/assessment" passHref>
                <button className="relative overflow-hidden inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-orange-500 rounded-full group hover:bg-blue-400 transition-all duration-300 ease-in-out">
                  <span className="relative z-10">Start Your Australia Journey</span>
                  <span className="absolute inset-0 bg-blue-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Cards Grid - Now 6 items in 2 rows of 3 */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-orange-500 rounded-2xl shadow-md hover:shadow-xl transition p-6 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center justify-between mb-4">
                <FaRegClipboard className="text-orange-500 text-xl group-hover:scale-110 transition" />
              </div>
              <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-black to-orange-400 bg-clip-text text-transparent">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm whitespace-pre-line">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}