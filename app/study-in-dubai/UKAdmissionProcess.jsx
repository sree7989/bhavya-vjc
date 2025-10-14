'use client';

import { useEffect } from "react";
import { FaRegClipboard, FaUserGraduate, FaEnvelopeOpenText, FaUniversity, FaCheckCircle } from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    title: "Choose a University and Program",
    desc: "Explore Dubai's top universities and select a course that fits your academic and career goals.",
    icon: <HiOutlineClipboardList size={28} className="text-orange-500" />,
  },
  {
    title: "Check Eligibility Requirements",
    desc: (
      <>
        Meet academic qualifications<br />
        Provide English proficiency scores (IELTS/TOEFL)<br />
        Submit portfolio (if applicable)<br />
        Recommendation letters (for PG programs)
      </>
    ),
    icon: <FaUserGraduate size={28} className="text-orange-500" />,
  },
  {
    title: "Submit Application",
    desc: (
      <>
        Apply through the university's online portal<br />
        Upload required documents and pay application fee
      </>
    ),
    icon: <FaEnvelopeOpenText size={28} className="text-orange-500" />,
  },
  {
    title: "Attend Interview (If Required)",
    desc: "Some institutions may schedule interviews for specific programs.",
    icon: <FaUniversity size={28} className="text-orange-500" />,
  },
  {
    title: "Receive Admission Offer",
    desc: "Get your conditional/unconditional offer and confirm your admission.",
    icon: <FaCheckCircle size={28} className="text-orange-500" />,
  },
  {
    title: "Apply for UAE Student Visa",
    desc: "After receiving your admission letter, apply for a student visa with university support.",
    icon: <FaCheckCircle size={28} className="text-orange-500" />,
  },
];

export default function DubaiAdmissionProcess() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="w-full px-6 md:px-20 pt-12 pb-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-black to-blue-400 bg-clip-text text-transparent mb-14"
          data-aos="fade-up"
        >
          Admission Process to Study in Dubai
        </h2>

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
