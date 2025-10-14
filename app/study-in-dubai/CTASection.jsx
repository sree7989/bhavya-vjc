"use client";
import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export default function DubaiStudyServices() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const points = [
    "Personalized University & Course Counselling: Get tailored advice on top Dubai universities and programs that align with your career goals.",
    "Comprehensive Visa & Documentation Support: From application to visa filing, we guide you through each step for smooth processing.",
    "Experienced Dubai Education Consultants: Friendly experts well-versed with UAE regulations and admission policies.",
    "Proven Track Record: Hundreds of successful student admissions in Dubai’s leading universities and colleges.",
    "Transparent & Student-Focused Approach: Honest advice with regular updates to keep you informed at every stage.",
  ];

  return (
    <section className="relative py-16 px-6 sm:px-12 bg-gradient-to-br from-orange-50 to-blue-50 overflow-hidden text-gray-900">
      <div className="relative z-10 max-w-7xl mx-auto space-y-16">

        {/* Heading */}
        <div className="text-center" data-aos="fade-down">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight text-[#f97316]">
            Our Dubai Study Services
          </h2>
          <p className="text-lg sm:text-xl text-[#2563eb] max-w-xl mx-auto">
            Expert guidance tailored for your study abroad journey in Dubai.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-16" data-aos="fade-up">
          {/* Image */}
          <div className="lg:w-1/3 w-full rounded-xl overflow-hidden shadow-lg hover:shadow-orange-400 transition-shadow duration-500">
            <Image
              src="/study-in-dubai-visa-process.webp"
              alt="Dubai Student Counselling"
              width={500}
              height={350}
              className="w-full object-cover"
              priority
            />
          </div>

          {/* Bullet Points */}
          <div className="lg:w-2/3 w-full space-y-8 text-gray-900">
            {points.map((text, index) => {
              const [title, description] = text.split(":");
              return (
                <motion.div
                  key={index}
                  className="flex items-start gap-5 cursor-default group"
                  data-aos="fade-right"
                  data-aos-delay={index * 120}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-[#f97316] text-3xl mt-1 group-hover:text-[#c2410c] transition-colors duration-300">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <p className="text-xl font-semibold">{title}:</p>
                    <p className="text-gray-700 leading-relaxed">{description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 rounded-xl overflow-hidden relative shadow-lg"
        >
          {/* Background Image with overlay */}
          <div className="absolute inset-0 bg-[url('/studyindubai/dubaibg.jpeg')] bg-cover bg-center brightness-75"></div>

          {/* Animated Text Content */}
          <motion.div
            initial={{ x: -120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative z-10 text-center p-10 sm:p-16 text-white max-w-4xl mx-auto"
          >
            <h3 className="text-3xl font-extrabold mb-4 drop-shadow-lg">
              Ready to start your Dubai education journey?
            </h3>
            <p className="text-lg mb-8 drop-shadow-md">
              Connect with VJC Overseas today for a free consultation and let us guide you towards achieving your study abroad dreams with confidence and ease.
            </p>

            <Link href="/assessment" passHref>
              <button className="relative overflow-hidden bg-gradient-to-r from-[#f97316] to-[#2563eb] hover:from-[#c2410c] hover:to-[#1e40af] text-white font-semibold px-8 py-4 rounded-full shadow-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#f97316]">
                Apply Now
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
