'use client';

import { motion } from 'framer-motion';
import { FileText, Clock, Users, Star, ShieldCheck } from 'lucide-react';

const visaTypes = [
  {
    title: 'Student Applicant Visa (Visum Zur Studienbewerbung)',
    description:
      'For students who haven’t yet received a final admission letter.',
  },
  {
    title: 'Student Visa (Visum Zu Studienzwecken)',
    description:
      'For students who have received admission to a German university.',
  },
];

const steps = [
  {
    icon: <FileText className="text-orange-500 w-6 h-6" />,
    title: 'Secure University Admission',
    text: 'Apply and get accepted into a recognized German university. You’ll receive a letter of acceptance, mandatory for your visa.',
  },
  {
    icon: <ShieldCheck className="text-orange-500 w-6 h-6" />,
    title: 'Open a Blocked Account',
    text: 'Open a Blocked Account As part of the visa requirements, you must show proof of sufficient funds to support your stay. Opening a blocked account in a German bank with a minimum balance (approx. €11,208 for one year) is necessary.',
  },
  {
    icon: <Users className="text-orange-500 w-6 h-6" />,
    title: 'Compile Required Documents',
    text: `Prepare: valid passport, admission letter, financial proof, transcripts, health insurance, visa form, and biometric photos.`,
  },
  {
    icon: <Clock className="text-orange-500 w-6 h-6" />,
    title: 'Book a Visa Appointment',
    text: 'Schedule an appointment with the German Embassy or Consulate in your country. Be sure to apply at least 3 months in advance, as the processing time can take several weeks.',
  },
  {
    icon: <Star className="text-orange-500 w-6 h-6" />,
    title: 'Attend the Visa Interview',
    text: 'During your interview, you’ll be asked about your academic background, reasons for choosing Germany, study plans, and financial arrangements. Our experts at VJC Overseas provide professional mock interview sessions to help you prepare confidently.',
  },
  {
    icon: <Clock className="text-orange-500 w-6 h-6" />,
    title: 'Wait for Processing & Approval',
    text: 'The German student visa typically takes 4–12 weeks to process. Once approved, you can travel to Germany and must register with the local foreigner’s office (Ausländerbehörde) upon arrival.',
  },
];

export default function GermanyVisaProcess() {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center text-gray-800"
      style={{ backgroundImage: "url('/university-of-bonn-best-in-germany.jpeg')" }}
    >
      <div className="bg-black bg-opacity-50  px-6 md:px-20 py-14">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-white"
          >
            Germany Student Visa Types
          </motion.h2>

          {/* Visa Types */}
          <div className="grid gap-6 md:grid-cols-2 mb-16">
            {visaTypes.map((visa, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-orange-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-orange-600 mb-2">{visa.title}</h3>
                <p className="text-gray-700 text-sm">{visa.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Step-by-Step Process */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-10 text-center text-white"
          >
            Step-by-Step Germany Student Visa Process
          </motion.h2>

          <div className="space-y-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-orange-200 transition flex items-start gap-4"
              >
                <div className="flex items-center justify-center text-lg font-bold text-white bg-orange-500 rounded-full w-10 h-10">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="text-md font-semibold text-black mb-1 flex items-center gap-2">
                    {step.icon} {step.title}
                  </h4>
                  <p className="text-sm text-gray-700">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
