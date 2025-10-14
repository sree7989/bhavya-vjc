'use client';

import { useEffect } from "react";
import {
  FaPassport,
  FaUniversity,
  FaFileSignature,
  FaClipboardCheck,
  FaPlaneArrival,
  FaIdCardAlt,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const steps = [
  {
    title: "Secure Admission from Recognized Institution",
    desc:
      "Apply to a recognized Singapore institution and obtain an offer letter. The school will then initiate your Student Pass application with the ICA.",
    icon: <FaUniversity size={28} className="text-orange-500" />,
  },
  {
    title: "Complete SOLAR Registration",
    desc:
      "Your institution will register you in SOLAR. You must fill out Form 16 and Form V36 using the SOLAR+ application reference number.",
    icon: <FaFileSignature size={28} className="text-orange-500" />,
  },
  {
    title: "Prepare Required Documents",
    desc: (
      <>
        Valid passport<br />
        Passport-sized photos<br />
        Offer letter from institution<br />
        Academic certificates<br />
        Form 16 & V36<br />
        Proof of funds & medical report (if required)
      </>
    ),
    icon: <FaClipboardCheck size={28} className="text-orange-500" />,
  },
  {
    title: "Pay Application Fee",
    desc:
      "Submit your documents via SOLAR and pay the application fee online. Processing usually takes 2–4 weeks.",
    icon: <FaIdCardAlt size={28} className="text-orange-500" />,
  },
  {
    title: "Receive IPA Letter",
    desc:
      "Once approved, you’ll receive an In-Principle Approval (IPA) letter. This acts as a visa for your travel to Singapore.",
    icon: <FaPassport size={28} className="text-orange-500" />,
  },
  {
    title: "Travel and Complete Formalities",
    desc:
      "Arrive in Singapore, complete biometric verification and collect your Student Pass from ICA.",
    icon: <FaPlaneArrival size={28} className="text-orange-500" />,
  },
];

export default function SingaporeAdmissionProcess() {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 120, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <section
      className="relative bg-fixed bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/sinagpore-university-admission-process.jpg')", // <- replace with your preferred image path
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />
      <div className="relative z-10 w-full px-6 md:px-20 pt-14 pb-12">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-orange-300 to-yellow-400 bg-clip-text text-transparent mb-14"
            data-aos="fade-up"
          >
            Admission Process for Singapore Student Visa
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-90 text-gray-800 border border-orange-400 shadow-md hover:shadow-lg transition rounded-xl p-6 space-y-3 group"
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
                <p className="text-sm text-gray-700 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
