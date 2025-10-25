'use client';

import {
  FileText,
  Clock,
  Star,
  Users,
  GraduationCap,
  HandCoins,
  Globe,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    icon: <FileText className="text-orange-500" />,
    text: 'Research scholarships via university websites, EducationUSA, and Fulbright portals.',
  },
  {
    icon: <Star className="text-orange-500" />,
    text: 'Check eligibility: academic, standardized tests (SAT, GRE, TOEFL), and financial need.',
  },
  {
    icon: <Users className="text-orange-500" />,
    text: 'Prepare documents: SOP, LORs, transcripts, IELTS/TOEFL, bank statements.',
  },
  {
    icon: <Clock className="text-orange-500" />,
    text: 'Apply before deadlines via official university portals or scholarship websites.',
  },
];

const tips = [
  'Start your search at least 8–12 months before your intake.',
  'Customize your SOP to align with U.S. university values.',
  'Reach out to EducationUSA or VJC Overseas counselors for expert guidance.',
];

const scholarships = [
  {
    icon: <GraduationCap className="text-orange-500 w-8 h-8" />,
    title: 'Merit-Based Scholarships',
    description: `Offered by universities like Harvard, MIT, Stanford, and others based on GPA, GRE/GMAT/SAT scores, and leadership.`,
  },
  {
    icon: <HandCoins className="text-orange-500 w-8 h-8" />,
    title: 'Need-Based Scholarships',
    description: `Includes financial aid packages from U.S. universities and programs like Fulbright-Nehru Masters Fellowship.`,
  },
  {
    icon: <Globe className="text-orange-500 w-8 h-8" />,
    title: 'Indian/International Student Scholarships',
    description: `Special awards for Indian students, such as Inlaks Scholarship, Tata Scholarship (Cornell), and others.`,
  },
];

export default function ScholarshipStepsUSA() {
  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section - Scholarships Grid */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-black to-blue-400 bg-clip-text text-transparent mb-6">
            Study in USA Scholarships for Indian Students
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Make your American education dream affordable with top scholarships and financial aid options for Indian students.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {scholarships.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-xl p-6 rounded-2xl hover:shadow-blue-100 transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-black">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Steps + Image Side by Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center mb-12"
        >
          {/* Left: How to Apply */}
          <div className="pl-4">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-black to-blue-400 bg-clip-text text-transparent mb-6">
              How to Apply for USA Scholarships
            </h2>
            <div className="space-y-5 text-sm md:text-base">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="p-2 bg-orange-100 rounded-full">{step.icon}</div>
                  <p className="text-gray-700">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex items-center justify-center">
            <Image
              src="/usa-student-scholarships.png"
              alt="USA Scholarships"
              width={450}
              height={300}
              className="rounded-xl shadow-lg transition-transform duration-500 hover:scale-105 object-contain"
              priority
              unoptimized
            />
          </div>
        </motion.div>

        {/* Bottom: Tips */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-3">
            Tips for a Successful Application
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
            {tips.map((tip, idx) => (
              <li key={idx}>{tip}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
