'use client';

import { useEffect } from "react";
import { FaUserGraduate, FaUniversity, FaEnvelopeOpenText, FaCheckCircle, FaRegFileAlt, FaFileSignature } from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    title: "Choose Program and College/University",
    desc: "Select your preferred course and find a Designated Learning Institution (DLI) in Canada that offers it.",
    icon: <HiOutlineClipboardList size={28} className="text-orange-500" />,
  },
  {
    title: "Meet Eligibility Requirements",
    desc: (
      <>
        High school diploma for UG / Bachelor's for PG<br />
        English/French proficiency – IELTS/TOEFL/TEF/TCF<br />
        Meet minimum academic percentage and prerequisites
      </>
    ),
    icon: <FaUserGraduate size={28} className="text-orange-500" />,
  },
  {
    title: "Gather Required Documents",
    desc: (
      <>
        Academic transcripts, SOP, LORs, resume<br />
        Valid passport, language test results<br />
        Work experience documents (if applicable)
      </>
    ),
    icon: <FaRegFileAlt size={28} className="text-orange-500" />,
  },
  {
    title: "Apply to Institutions",
    desc: "Apply through the official university website or authorized portals. Pay application fees if required.",
    icon: <FaEnvelopeOpenText size={28} className="text-orange-500" />,
  },
  {
    title: "Receive Offer Letter",
    desc: "Once selected, you’ll receive a Conditional or Unconditional Offer Letter from the Canadian institution.",
    icon: <FaUniversity size={28} className="text-orange-500" />,
  },
  {
    title: "Pay Tuition and GIC",
    desc: (
      <>
        Pay first-year tuition fees to the institution<br />
        Deposit CAD 10,000 into a GIC account for living expenses
      </>
    ),
    icon: <FaCheckCircle size={28} className="text-orange-500" />,
  },
  {
    title: "Medical & Biometrics",
    desc: "Complete your medical examination and submit biometrics at the nearest VAC.",
    icon: <FaFileSignature size={28} className="text-orange-500" />,
  },
  {
    title: "Apply for Study Permit",
    desc: "Submit your Canada Study Visa application via IRCC with all documents, GIC, and payment proof.",
    icon: <FaCheckCircle size={28} className="text-orange-500" />,
  },
];

export default function CanadaAdmissionProcess() {
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
          className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-black to-red-500 bg-clip-text text-transparent mb-14"
          data-aos="fade-up"
        >
          Admission Process for Canadian Institutions
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
                <h3 className="text-lg font-semibold bg-gradient-to-r from-black to-red-500 text-transparent bg-clip-text">
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
