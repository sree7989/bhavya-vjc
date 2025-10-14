"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGlobe, FaUserTie, FaPlaneDeparture, FaBook, FaPassport, FaHeadset } from "react-icons/fa";

const links = [
  {
    title: "Best Visa Immigration Consultants",
    href: "https://www.vjcoverseas.com",
    icon: <FaUserTie className="text-4xl text-orange-500 mb-4" />,
    desc: "Trusted experts guiding you with the right path for a brighter future abroad.",
  },
  {
    title: "VJC Overseas",
    href: "https://www.vjcoverseas.com",
    icon: <FaGlobe className="text-4xl text-blue-500 mb-4" />,
    desc: "Your global partner for migration, settlement, and career opportunities.",
  },
  {
    title: "Immigration Support Services",
    href: "https://www.vjcoverseas.com/services",
    icon: <FaHeadset className="text-4xl text-green-500 mb-4" />,
    desc: "Step-by-step assistance to make your visa journey stress-free.",
  },
  {
    title: "Visit Visa Consultants",
    href: "https://www.vjcoverseas.com/visit-visas",
    icon: <FaPlaneDeparture className="text-4xl text-purple-500 mb-4" />,
    desc: "Explore new destinations with hassle-free visitor visa guidance.",
  },
  {
    title: "PR Visa Consultants",
    href: "https://www.vjcoverseas.com/pr-visas",
    icon: <FaPassport className="text-4xl text-red-500 mb-4" />,
    desc: "Permanent residency experts opening doors to your dream country.",
  },
  {
    title: "Study Abroad Consultants",
    href: "https://www.vjcoverseas.com/study-abroad",
    icon: <FaBook className="text-4xl text-yellow-500 mb-4" />,
    desc: "Shape your career with world-class education opportunities abroad.",
  },
];

export default function InternalLinksGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
        Connect With <span className="text-orange-500">VJC Overseas</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {links.map((link, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl shadow-lg bg-white border border-gray-200 overflow-hidden"
          >
            <Link href={link.href} target="_blank" className="block h-full p-8 text-center group">
              <div className="flex justify-center">{link.icon}</div>
              <h3 className="text-lg font-semibold mt-4 text-gray-800 group-hover:text-orange-500 transition">
                {link.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{link.desc}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
