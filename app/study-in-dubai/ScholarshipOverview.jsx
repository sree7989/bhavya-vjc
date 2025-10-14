"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Landmark,
  Users,
  Briefcase,
  BadgeCheck,
  Coins,
  GraduationCap,
  HandCoins,
  Globe,
} from "lucide-react";

const steps = [
  {
    icon: <Landmark className="text-orange-500" />,
    text: "Global campuses of top universities.",
  },
  {
    icon: <Users className="text-orange-500" />,
    text: "Multicultural student community.",
  },
  {
    icon: <Briefcase className="text-orange-500" />,
    text: "Opportunities to work part-time during study.",
  },
  {
    icon: <BadgeCheck className="text-orange-500" />,
    text: "Pathway to career opportunities in the UAE.",
  },
  {
    icon: <Coins className="text-orange-500" />,
    text: "High standard of living with affordable education.",
  },
];

const tips = [
  "Start the application process well in advance – ideally 6–9 months before intake.",
  "Write a clear, personalized SOP explaining why you chose Dubai.",
  "Secure LORs from professors or professionals in your field.",
];

const scholarships = [
  {
    icon: <GraduationCap className="text-orange-500 w-8 h-8" />,
    title: "Merit-Based Scholarships",
    description: `Offered by universities like Heriot-Watt, University of Dubai, and Amity Dubai for students with excellent academic performance.`,
  },
  {
    icon: <HandCoins className="text-orange-500 w-8 h-8" />,
    title: "Need-Based Scholarships",
    description: `Some institutions offer tuition discounts and bursaries for students from economically disadvantaged backgrounds.`,
  },
  {
    icon: <Globe className="text-orange-500 w-8 h-8" />,
    title: "International Student Scholarships",
    description: `Specific scholarships are available for Indian and South Asian students studying in Dubai-based international campuses.`,
  },
];

export default function ScholarshipSteps() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Scholarships Section */}
        <div data-aos="fade-up" className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-black to-blue-400 bg-clip-text text-transparent mb-6">
            Study in Dubai Scholarships for Indian Students
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Explore various scholarships to make your Dubai education more affordable and accessible.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {scholarships.map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="bg-white shadow-xl p-6 rounded-2xl hover:shadow-blue-100 transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-black">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits Section */}
        <div
          data-aos="fade-left"
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          {/* Text Side */}
          <div className="flex flex-col justify-between pl-4 md:pl-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-black to-blue-400 bg-clip-text text-transparent mb-6 text-left">
                Key Benefits of Studying in Dubai
              </h2>

              <div className="space-y-5 text-sm md:text-base">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3"
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                  >
                    <div className="p-2 bg-orange-100 rounded-full">
                      {step.icon}
                    </div>
                    <p className="text-gray-700">{step.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-3">
                  Tips for a Successful Application
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
                  {tips.map((tip, idx) => (
                    <li
                      key={idx}
                      data-aos="fade-right"
                      data-aos-delay={idx * 100}
                    >
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div
            className="flex items-center justify-center"
            data-aos="zoom-in"
          >
            <Image
              src="/studyindubai/scholarshipprocess.png"
              alt="Dubai Scholarships"
              width={520}
              height={520}
              className="object-contain rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
