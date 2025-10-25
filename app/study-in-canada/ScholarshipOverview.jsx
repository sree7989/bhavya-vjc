'use client';

import { motion } from 'framer-motion';
import { FileText, ShieldCheck, Users, Clock, PlaneTakeoff, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const steps = [
  {
    icon: <FileText className="text-orange-500 w-6 h-6" />,
    title: 'Secure an Admission Offer (Letter of Acceptance)',
    text: 'The first step is to apply and receive a Letter of Acceptance (LOA) from a Designated Learning Institution (DLI) in Canada. This document is mandatory for starting your student visa application.',
  },
  {
    icon: <ShieldCheck className="text-orange-500 w-6 h-6" />,
    title: 'Gather Required Documents',
    text: (
      <div className="grid md:grid-cols-2 gap-4">
        <ul className="list-disc pl-6 space-y-2 text-base text-gray-800">
          <li>Valid passport</li>
          <li>Letter of Acceptance from a DLI</li>
          <li>Proof of funds (minimum CAD 20,000 for tuition and living expenses)</li>
          <li>Statement of Purpose (SOP)</li>
          <li>Academic transcripts and certificates</li>
          <li>English language test scores (IELTS/TOEFL)</li>
          <li>Passport-size photographs</li>
          <li>Medical exam reports (if applicable)</li>
        </ul>
        <div className="relative group">
         <Image
  src="/Canada-Student-Visas.jpg"
  alt="Canada Visa Documents"
  width={400}
  height={200} // Increase from 70 to a more balanced height
  className="rounded-lg shadow-lg object-cover h-70 w-full sm:w-[400px]"
  unoptimized
/>

         
        </div>
      </div>
    ),
  },
  {
    icon: <Users className="text-orange-500 w-6 h-6" />,
    title: 'Apply for the Student Visa',
    text: 'You can apply online via the IRCC (Immigration, Refugees and Citizenship Canada) website or submit a paper application at the nearest Visa Application Center (VAC). Our team at VJC Overseas ensures that your application is complete and well-presented to minimize delays or rejections.',
  },
  {
    icon: <Clock className="text-orange-500 w-6 h-6" />,
    title: 'Biometrics and Medical Examination',
    text: 'After submission, you may be required to provide biometrics and undergo a medical examination by a panel physician approved by the Canadian government.',
  },
  {
    icon: <CheckCircle2 className="text-orange-500 w-6 h-6" />,
    title: 'Visa Processing and Decision',
    text: 'Visa processing times may vary depending on your country of residence and the time of year, typically ranging from 2 to 12 weeks. You will be notified once a decision is made.',
  },
  {
    icon: <PlaneTakeoff className="text-orange-500 w-6 h-6" />,
    title: 'Travel to Canada',
    text: 'Once approved, you will receive a Port of Entry (POE) Letter of Introduction and a temporary resident visa (TRV) if required. Upon arrival in Canada, your Study Permit will be issued at the port of entry by immigration officers.',
  },
];

export default function CanadaVisaProcess() {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center text-gray-800"
      style={{ backgroundImage: "url('/canada-student-full-visa-process.avif')" }}
    >
      <div className=" px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-white"
          >
             Step-by-Step <span className='text-red-500'>Canada</span> Student Visa Process
          </motion.h2>

          <div className="space-y-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-red-400 transition flex flex-col md:flex-row gap-4"
              >
                <div className="flex items-center justify-center text-lg font-bold text-white bg-orange-500 rounded-full w-10 h-10">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-semibold text-black mb-2 flex items-center gap-2">
                    {step.icon} {step.title}
                  </h4>
                  <div className="text-base text-gray-800 leading-relaxed">
                    {step.text}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}