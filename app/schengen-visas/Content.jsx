// components/WhyWithUs.jsx

"use client";

import { motion } from "framer-motion";
import {
  FaClipboardCheck,
  FaMapMarkedAlt,
  FaCalendarCheck,
  FaComments,
  FaShieldAlt,
  FaPlaneDeparture,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaClipboardCheck className="text-3xl text-orange-500" />,
    title: "Complete Document Checklist",
    desc: "We provide and review every document to ensure nothing is missed.",
  },
  {
    icon: <FaMapMarkedAlt className="text-3xl text-orange-500" />,
    title: "Travel Itinerary Guidance",
    desc: "Personalized route and trip planning for visa success.",
  },
  {
    icon: <FaCalendarCheck className="text-3xl text-orange-500" />,
    title: "Visa Appointment Booking",
    desc: "We handle your embassy appointments seamlessly.",
  },
  {
    icon: <FaComments className="text-3xl text-orange-500" />,
    title: "Interview Preparation",
    desc: "If needed, we train you for visa interviews with confidence.",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-orange-500" />,
    title: "Insurance & Flight Support",
    desc: "Help with verified travel insurance and flight reservations.",
  },
  {
    icon: <FaPlaneDeparture className="text-3xl text-orange-500" />,
    title: "End-to-End Visa Support",
    desc: "From consultation to visa stamping, we’re by your side.",
  },
];

export default function WhyWithUs() {
  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold text-gray-800"
        >
          Why Apply With Us?
        </motion.h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Our Schengen visa experts ensure a smooth, secure, and successful visa process — saving your time and boosting approval chances.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {benefits.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 bg-white border border-orange-200 rounded-xl shadow hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              {item.icon}
              <h4 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h4>
            </div>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
