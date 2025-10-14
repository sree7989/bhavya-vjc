'use client';

import { useEffect } from "react";
import { FaRegClipboard, FaUserGraduate, FaEnvelopeOpenText, FaUniversity, FaCheckCircle } from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    title: "Choose a University and Course",
    desc: "Select from Australia's world-class universities and courses that align with your career aspirations.",
    icon: <HiOutlineClipboardList size={28} className="text-orange-500" />,
  },
  {
    title: "Check Entry Requirements",
    desc: (
      <>
        Meet academic qualifications (ATAR or equivalent)<br />
        English proficiency (IELTS 6.0-7.0 or equivalent)<br />
        Work experience (for some postgraduate courses)<br />
        Portfolio/audition (for creative arts programs)
      </>
    ),
    icon: <FaUserGraduate size={28} className="text-orange-500" />,
  },
  {
    title: "Submit Your Application",
    desc: (
      <>
        Apply directly or through an agent<br />
        Include academic transcripts, English test results, and supporting documents<br />
        Pay application fee (AUD$50-$100 typically)
      </>
    ),
    icon: <FaEnvelopeOpenText size={28} className="text-orange-500" />,
  },
  {
    title: "Receive Letter of Offer",
    desc: "You'll receive either a conditional or unconditional offer letter from the university.",
    icon: <FaUniversity size={28} className="text-orange-500" />,
  },
  {
    title: "Accept Offer and Pay Tuition",
    desc: "Sign acceptance form and pay tuition deposit to secure your place.",
    icon: <FaCheckCircle size={28} className="text-orange-500" />,
  },
  {
    title: "Apply for Student Visa (Subclass 500)",
    desc: (
      <>
        Obtain Confirmation of Enrollment (CoE)<br />
        Provide proof of financial capacity<br />
        Meet health insurance (OSHC) requirements<br />
        Submit visa application
      </>
    ),
    icon: <FaCheckCircle size={28} className="text-orange-500" />,
  },
];

export default function AustraliaAdmissionProcess() {
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
          Admission Process to Study in Australia
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