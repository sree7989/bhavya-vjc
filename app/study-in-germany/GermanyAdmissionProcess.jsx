'use client';

import { useEffect } from "react";
import { FaRegClipboard, FaUserGraduate, FaEnvelopeOpenText, FaUniversity, FaCheckCircle } from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    title: "Choose Your Course and University",
    desc: "Select a program that aligns with your goals and find a recognized German university offering it.",
    icon: <HiOutlineClipboardList size={28} className="text-orange-500" />,
  },
  {
    title: "Check Admission Requirements",
    desc: (
      <>
        Secondary school certificate (equivalent to German Abitur)<br />
        Bachelor's degree (for Master's programs)<br />
        English or German language proficiency (IELTS/TOEFL/TestDaF/DSH)<br />
        Minimum GPA or subject-specific scores
      </>
    ),
    icon: <FaUserGraduate size={28} className="text-orange-500" />,
  },
  {
    title: "Prepare and Submit Application",
    desc: (
      <>
        Apply via uni-assist or directly to the university<br />
        Required documents: transcripts, resume/CV, SOP, LORs, language proof
      </>
    ),
    icon: <FaEnvelopeOpenText size={28} className="text-orange-500" />,
  },
  {
    title: "Receive Admission Letter",
    desc: "If selected, you'll receive a conditional or unconditional admission letter from the university.",
    icon: <FaUniversity size={28} className="text-orange-500" />,
  },
  {
    title: "Open a Blocked Bank Account",
    desc: "Open a blocked account with sufficient funds (~€11,208/year) as financial proof for visa.",
    icon: <FaCheckCircle size={28} className="text-orange-500" />,
  },
  {
    title: "Apply for German Student Visa",
    desc: "Apply at the nearest German embassy with admission letter, financial proof, health insurance, etc.",
    icon: <FaCheckCircle size={28} className="text-orange-500" />,
  },
];


export default function UKAdmissionProcess() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="w-full px-6 md:px-20 pt-12 pb-8 bg-white"> {/* Reduced the bottom padding (pb-20 -> pb-8) */}
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
       <h2
  className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-black to-blue-400 bg-clip-text text-transparent mb-14"
  data-aos="fade-up"
>
  Admission Process for German Universities
</h2>


        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white border border-orange-500 shadow-md hover:shadow-xl transition rounded-xl p-6 space-y-3 group hover:border-orange-500"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-orange-50 rounded-full group-hover:bg-orange-100 transition">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-black to-blue-400 text-transparent bg-clip-text">
                  {step.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
