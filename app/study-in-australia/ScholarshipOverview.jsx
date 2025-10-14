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
  Clock,
  BookOpen,
  Home,
} from "lucide-react";

const whyAustralia = [
  {
    icon: <Landmark className="text-orange-500" />,
    text: "Home to 7 of the world's top 100 universities including University of Melbourne and University of Sydney",
  },
  {
    icon: <BookOpen className="text-orange-500" />,
    text: "Wide range of courses across disciplines with strong industry connections",
  },
  {
    icon: <Briefcase className="text-orange-500" />,
    text: "Work up to 48 hours per fortnight during studies and full-time during vacations",
  },
  {
    icon: <BadgeCheck className="text-orange-500" />,
    text: "Post-study work visa (PSWV) allowing 2-6 years to work after graduation",
  },
  {
    icon: <Home className="text-orange-500" />,
    text: "High quality of life with 6 Australian cities ranked among world's most livable",
  },
  {
    icon: <Users className="text-orange-500" />,
    text: "Multicultural society with welcoming environment for international students",
  },
];

const tips = [
  "Begin applications 6-12 months before intake (February/July/November)",
  "Craft a compelling Statement of Purpose highlighting your academic goals",
  "Secure strong Letters of Recommendation from academic or professional referees",
  "Ensure all documents are certified and translated if necessary",
];

const scholarships = [
  {
    icon: <GraduationCap className="text-orange-500 w-8 h-8" />,
    title: "Australia Awards Scholarships",
    description: `Fully-funded scholarships by the Australian government for students from developing countries.`,
  },
  {
    icon: <HandCoins className="text-orange-500 w-8 h-8" />,
    title: "University-specific Scholarships",
    description: `Most Australian universities offer merit-based scholarships covering 25-50% tuition fees.`,
  },
  {
    icon: <Globe className="text-orange-500 w-8 h-8" />,
    title: "Destination Australia",
    description: `Government-funded scholarships for international students studying in regional Australia.`,
  },
];

export default function AustraliaScholarshipInfo() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-10  bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Scholarships Section */}
        <div data-aos="fade-up" className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-black to-blue-400 bg-clip-text text-transparent mb-6">
            Study in Australia Scholarships for International Students
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Discover financial support options to make your Australian education more affordable.
          </p>

          <div className="grid md:grid-cols-3  gap-8">
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

        {/* Why Australia Section */}
        <div
          data-aos="fade-left"
          className="grid grid-cols-1 pt-10 md:grid-cols-2 gap-10 items-center"
        >
          {/* Text Side */}
          <div className="flex flex-col justify-between pl-4 md:pl-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-black to-blue-400 bg-clip-text text-transparent mb-6 text-left">
                Why Study in Australia?
              </h2>

              <p className="text-gray-700 mb-6">
                Australia is home to leading universities such as the University of Melbourne, 
                University of Sydney, and Australian National University. It offers a wide range 
                of undergraduate, postgraduate, diploma, and vocational courses. With flexible 
                work rights during study, generous post-study work visas, and excellent quality 
                of life, Australia continues to attract thousands of international students every year.
              </p>

              <div className="space-y-5 text-sm md:text-base">
                
              </div>

              <div className="mt-10">
                <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-3">
                  Application Tips
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
              src="/studyinaustralia/schoralshipprocess.png"
              alt="Australian Education"
              width={480}
              height={480}
              className="object-contain rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}