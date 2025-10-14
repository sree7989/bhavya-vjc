"use client";

import Link from "next/link";
import Form from "./Form";
import {
  FaGlobeAmericas,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaPassport,
  FaUniversity,
  FaBriefcase,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function ServicesCTA() {
  const services = [
    {
      icon: <FaGlobeAmericas className="text-4xl text-orange-500" />,
      title: "Global Opportunities",
      desc: "Study or settle in your dream country with our guidance.",
      link: "/work-abroad",
    },
    {
      icon: <FaUserGraduate className="text-4xl text-orange-500" />,
      title: "Expert Counseling",
      desc: "Get tailored advice for courses and universities abroad.",
      link: "/contact-us",
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-orange-500" />,
      title: "Test Prep & Training",
      desc: "Prepare for IELTS, TOEFL, and more with our expert trainers.",
      link: "/coaching",
    },
    {
      icon: <FaPassport className="text-4xl text-orange-500" />,
      title: "Visa Assistance",
      desc: "End-to-end support with your visa documentation and filing.",
      link: "/assessment",
    },
    {
      icon: <FaUniversity className="text-4xl text-orange-500" />,
      title: "Top University Access",
      desc: "Connect with reputed global institutions and programs.",
      link: "/study-abroad",
    },
    {
      icon: <FaBriefcase className="text-4xl text-orange-500" />,
      title: "Job Seeker Visas",
      desc: "Explore pathways to work abroad with job-oriented visas.",
      link: "/jobseeker-visas",
    },
  ];

  return (
    <section className="bg-white py-6 sm:py-10 px-6 sm:px-12 -mt-8">
      <div className="max-w-6xl mx-auto space-y-6 mb-10">
        {/* Top SEO paragraphs */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg text-gray-700"
        >
          Choosing the{" "}
          <Link
            href="https://www.vjcoverseas.com"
            className="text-blue-600 font-semibold hover:text-orange-500"
          >
            Best Visa Immigration Consultants
          </Link>{" "}
          ensures that your application process is handled professionally,
          increasing your chances of success whether you are moving for studies,
          work, or permanent residency.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-700"
        >
          With decades of trusted service,{" "}
          <Link
            href="https://www.vjcoverseas.com"
            className="text-blue-600 font-semibold hover:text-orange-500"
          >
            VJC Overseas
          </Link>{" "}
          is a leading consultancy providing expert guidance for study abroad,
          jobseeker visas, and PR visas across top destinations worldwide.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-gray-700"
        >
          Our dedicated{" "}
          <Link
            href="https://www.vjcoverseas.com/services"
            className="text-blue-600 font-semibold hover:text-orange-500"
          >
            Immigration Support Services
          </Link>{" "}
          include eligibility assessments, documentation review, and visa filing
          assistance to ensure a smooth and stress-free application process.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start -mt-4">
        {/* Left Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-transparent shadow-none"
        >
          <Form />
        </motion.div>

        {/* Right Side - Service Highlights */}
        <div className="grid gap-4">
          {services.map((service, index) => (
            <Link href={service.link} key={index}>
              <div className="flex items-start gap-4 p-5 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group">
                {service.icon}
                <div>
                  <h4 className="text-lg font-bold text-black group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="text-sm text-gray-700 group-hover:text-orange-500 transition-colors duration-300">
                    {service.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

     

      {/* Bottom SEO paragraphs */}
      <div className="max-w-6xl mx-auto space-y-6 mt-10">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg text-gray-700"
        >
          Our{" "}
          <Link
            href="https://www.vjcoverseas.com/visit-visas"
            className="text-blue-600 font-semibold hover:text-orange-500"
          >
            Visit Visa Consultants
          </Link>{" "}
          provide specialized support for travelers, tourists, and families
          planning short-term stays across multiple destinations.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-700"
        >
          Alongside visa guidance, we also offer{" "}
          <Link
            href="https://www.vjcoverseas.com/tours-ticketing"
            className="text-blue-600 font-semibold hover:text-orange-500"
          >
            Travel and Tourism Packages
          </Link>{" "}
          designed to make your international journeys seamless, affordable, and
          memorable.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-gray-700"
        >
          For students aspiring to build global careers, our{" "}
          <Link
            href="https://www.vjcoverseas.com/study-abroad"
            className="text-blue-600 font-semibold hover:text-orange-500"
          >
            Study Abroad Consultants
          </Link>{" "}
          guide you through university selection, admission processes, and visa
          filing for a smooth education abroad experience.
        </motion.p>
      </div>
       {/* CTA Section */}
      <div className="relative mt-16 rounded-lg overflow-hidden">
        {/* Background and overlay */}
        <div className="absolute inset-0 bg-[url('/studyinuk/c1.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Animated Text Content */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center p-8 sm:p-16"
        >
          <h3 className="text-2xl sm:text-4xl font-bold text-white mb-4">
            Ready to begin your journey?
          </h3>
          <p className="text-white max-w-3xl mx-auto mb-6 text-base sm:text-lg">
            Contact VJC Overseas today for a free consultation and let us help
            you achieve your dreams — confidently and affordably.
          </p>

          <Link href="/assessment">
            <button className="relative overflow-hidden bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out group">
              <span className="relative z-10">Apply Now</span>
              <span className="absolute top-0 left-[-100%] w-full h-full bg-blue-400 transition-all duration-500 ease-out group-hover:left-0"></span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
