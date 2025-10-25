'use client';

import { motion } from 'framer-motion';
import { FileText, ShieldCheck, Users, Clock, Star } from 'lucide-react';

const steps = [
  {
    icon: <FileText className="text-orange-500 w-6 h-6" />,
    title: 'Secure Admission from a Recognized Institution',
    text: `Apply and receive an admission offer from a recognized Singaporean university or institution. Once accepted, the institution will initiate your Student Pass application through the ICA (Immigration & Checkpoints Authority).`,
  },
  {
    icon: <ShieldCheck className="text-orange-500 w-6 h-6" />,
    title: 'Register on SOLAR System',
    text: `Your institution will register you on the Student’s Pass Online Application & Registration (SOLAR) system. You will receive an application reference number to fill out Form 16 and Form V36 online.`,
  },
  {
    icon: <Users className="text-orange-500 w-6 h-6" />,
    title: 'Prepare Required Documents',
    text: `Submit a valid passport, passport-sized photos, Letter of Offer, academic transcripts, completed Form 16 & V36, financial proof, and medical report (if required).`,
  },
  {
    icon: <Clock className="text-orange-500 w-6 h-6" />,
    title: 'Pay the Application Fee',
    text: `Pay the online visa application fee through SOLAR. The processing period is usually 2–4 weeks depending on your application completeness.`,
  },
  {
    icon: <Star className="text-orange-500 w-6 h-6" />,
    title: 'Receive In-Principle Approval (IPA) Letter',
    text: `If your application is approved, you’ll receive an IPA letter. This letter functions as an entry visa and must be carried during travel to Singapore.`,
  },
  {
    icon: <ShieldCheck className="text-orange-500 w-6 h-6" />,
    title: 'Travel and Finalize Formalities in Singapore',
    text: `Upon arrival, visit the ICA to complete biometric verification and collect your Student Pass. Also arrange accommodation and attend orientation sessions.`,
  },
  {
    icon: <FileText className="text-orange-500 w-6 h-6" />,
    title: 'Post-Arrival Services by VJC Overseas',
    text: `VJC Overseas offers full support post-arrival, including airport pickup, housing guidance, local SIM setup, and registering with institutions.`,
  },
  {
    icon: <Star className="text-orange-500 w-6 h-6" />,
    title: 'Extra Benefits for Students in Singapore',
    text: `• Work part-time up to 16 hrs/week during semesters
• Affordable tuition with high ROI
• Live in one of the world’s safest, cleanest, and most multicultural environments
• 100% English-speaking academic curriculum
• Pathway to jobs in Asia-Pacific business hubs`,
  },
];

export default function SingaporeVisaProcess() {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center text-gray-800"
      style={{ backgroundImage: "url('/best-singapore-student-visa-process-vjc.jpg')" }}
    >
      <div className="bg-black bg-opacity-30 px-6 md:px-20 py-14">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-white"
          >
            Step-by-Step Singapore Student Visa Process
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
                  <p className="text-sm text-gray-700 whitespace-pre-line">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
