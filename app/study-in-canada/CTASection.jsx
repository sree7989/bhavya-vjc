'use client';
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Image from "next/image"; // ✅ Imported Image

export default function GermanyStudyServices() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative py-12 px-6 sm:px-12 text-black bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto space-y-16">

        {/* Heading */}
        <div className="text-center" data-aos="fade-down">
          <h2 className="text-4xl font-bold mb-4">Our Canada Study Services</h2>
          <p className="text-lg text-gray-800">From admission to arrival – we've got you covered.</p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12" data-aos="fade-up">
          {/* Image */}
          <div className="lg:w-1/3 w-full">
            <Image
              src="/student-in-germany-student-visa.png"
              alt="Germany Visa Steps"
              width={600}
              height={600}
              className="w-full h-auto object-contain"
              unoptimized={true}
            />
          </div>

          {/* Bullet Points */}
          <div className="lg:w-2/3 w-full space-y-6 text-black">
            {[
              "Student Visa Types: Understand the critical difference between an Applicant Visa (Visum zur Studienbewerbung) and a Student Visa (Visum zu Studienzwecken). The Applicant Visa is ideal if you’re still awaiting admission confirmation, giving you time in canada to attend interviews or entrance exams. Once admitted, you can convert it into a full Student Visa without leaving the country.",
              "Blocked Account Setup: Guidance on opening a mandatory blocked account with the required balance for visa approval.",
              "Document Preparation: From compiling your university admission letter, language proficiency certificates (IELTS/TestDaF), and valid passport to arranging health insurance, CV, and motivation letter – we walk you through each step, ensuring zero document errors or omissions that could delay your visa approval.",
              "Interview Preparation: Get ready for your visa interview with mock sessions led by expert counselors.",
              "Post-Arrival Support: Registration, accommodation, and orientation guidance once you land in Canada."
            ].map((text, index) => (
              <div key={index} className="flex items-start gap-4" data-aos="fade-right" data-aos-delay={index * 100}>
                <div className="text-orange-500 text-2xl mt-1">
                  <FaCheckCircle />
                </div>
                <p className="text-lg text-black">
                  <span className="font-bold">{text.split(':')[0]}:</span>
                  {text.split(':')[1]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 rounded-xl overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-[url('/canada-pr.jpeg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-10 text-center p-6 sm:p-10"
          >
            <h3 className="text-3xl font-bold text-white mb-2">
              Start Your canada Education Journey
            </h3>
            <p className="text-white text-1sm max-w-3xl mx-auto mb-6">
              canada offers world-class education with low or no tuition fees. Let VJC Overseas simplify your journey from application to arrival. Get expert guidance and visa support today!
            </p>

            <Link href="/assessment">
              <button className="relative overflow-hidden bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out group">
                <span className="relative z-10">Book Free Consultation</span>
                <span className="absolute top-0 left-[-100%] w-full h-full bg-blue-400 transition-all duration-500 ease-out group-hover:left-0"></span>
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
