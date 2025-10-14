"use client";

import { useEffect } from "react";
import { FaRegClipboard } from "react-icons/fa";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image"; // <-- Added import

const items = [
  {
   
    title: "Get Admission in a Recognized Institution",
    desc: "Apply to a Dubai-based university or college and obtain an official Offer Letter to start your visa application.",
  },
  {
   
    title: "Documentation and Visa Application",
    desc: `Once your admission is confirmed, the university typically acts as your visa sponsor. You’ll need to submit:
• Valid passport (min 6 months’ validity)
• Passport-size photos
• Admission letter
• Tuition fee payment proof
• Medical fitness certificate (UAE-approved clinic)
• Emirates ID application form
• Student visa application form.`,
  },
  {
    
    title: "Medical Test and Biometrics",
    desc: "Undergo a medical fitness test (blood test and chest X-ray) and submit biometrics for your Emirates ID card.",
  },
  {
   
    title: "Visa Approval and Travel",
    desc: "After approval, receive your one-year renewable visa. Book your flight, travel to Dubai, and complete residency stamping and ID registration.",
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
          Dubai Student Visa Process
        </h2>

        {/* Top Split Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mb-12">
          {/* Left Image */}
          <div className="lg:w-1/4 w-full" data-aos="fade-up" data-aos-delay="100">
            <Image
              src="/studyindubai/studentcounciling.png"
              alt="Dubai Student Visa"
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
              Planning to study in Dubai? Here’s a simplified step-by-step guide to help you understand the student visa process. From admission to final travel, each stage is essential for a smooth transition to your educational journey in the UAE.
            </p>
            <p>
              Our experts will guide you through document preparation, visa submission, and post-arrival steps such as Emirates ID registration and residency stamping. With our support, studying in Dubai becomes stress-free.
            </p>
            <p>
              Reach out to us today and take the first step toward your academic future in Dubai.
            </p>

            <div className="pt-4">
              <Link href="/assessment" passHref>
                <button className="relative overflow-hidden inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-orange-500 rounded-full group hover:bg-blue-400 transition-all duration-300 ease-in-out">
                  <span className="relative z-10">Start Your Dubai Journey</span>
                  <span className="absolute inset-0 bg-blue-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={item.id}
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
