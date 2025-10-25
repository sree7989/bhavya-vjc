"use client";
import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

export default function AustraliaStudyServices() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const points = [
    "Tailored Course & University Guidance: Personalized advice to help you choose the right course and university in Australia.",
    "GTE & SOP Assistance: Expert help with Genuine Temporary Entrant (GTE) requirements and Statement of Purpose drafting.",
    "Complete Visa Support: From application to submission, we ensure every document meets Australian visa standards.",
    "Financial Planning & Documentation: Assistance with funds planning, CA reports, and affidavits for a smooth visa process.",
    "High Visa Success Rate: Backed by a team of experienced Australia education consultants with a proven track record.",
  ];

  return (
    <section className="relative py-16 px-6 sm:px-12 bg-gradient-to-br from-orange-50 to-blue-50 overflow-hidden text-gray-900">
      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* Heading */}
        <div className="text-center" data-aos="fade-down">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight text-[#f97316]">
            Our Australia Study Services
          </h2>
          <p className="text-lg sm:text-xl text-[#2563eb] max-w-xl mx-auto">
            Expert support for every step of your journey to study in Australia.
          </p>
        </div>

        {/* Content */}
        <div
          className="flex flex-col lg:flex-row items-center gap-16"
          data-aos="fade-up"
        >
          {/* Image */}
          <div className="lg:w-1/3 w-full rounded-xl overflow-hidden shadow-lg hover:shadow-orange-400 transition-shadow duration-500">
            <Image
              src="/studyinaustralia/austud.png"
              alt="Australia Student Counselling"
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
                    <p className="text-gray-700 leading-relaxed">
                      {description}
                    </p>
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
          <div className="absolute inset-0 bg-[url('/studyinaustralia/australiabg.jpeg')] bg-cover bg-center brightness-75"></div>

          {/* Animated Text Content */}
          <motion.div
            initial={{ x: -120, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative z-10 text-center p-10 sm:p-16 text-white max-w-4xl mx-auto"
          >
            <h3 className="text-3xl font-extrabold mb-4 drop-shadow-lg">
              Ready to begin your study journey in Australia?
            </h3>
            <p className="text-lg mb-8 drop-shadow-md">
              Get in touch with VJC Overseas for a free consultation and start
              your path to studying in Australia with confidence and clarity.
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
