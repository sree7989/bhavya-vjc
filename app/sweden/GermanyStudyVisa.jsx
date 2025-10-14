'use client';

import React from "react";
import Image from "next/image";
import Form from "./Form";

const SwedenStudyVisa = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8" style={{ fontFamily: "Times New Roman, serif" }}>
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">
            <span style={{ color: "#006AA7" }}>Sweden</span> Study Visa Process – <span className="text-orange-500">VJC Overseas</span>
          </h1>

          <div className="relative h-64 w-full overflow-hidden mb-4">
            <Image
              src="/sweaden-best-universites.jpg"
              alt="Study in Sweden"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="space-y-5 text-justify text-gray-800 leading-relaxed">
            <p>
              Considering studies in <span style={{ color: "#006AA7" }}>Sweden</span>? Known for innovation, sustainability, and inclusive education, Sweden offers globally respected degrees with a strong focus on research and real-world application. <span className="text-orange-500">VJC Overseas</span> helps make your Sweden study dream a reality.
            </p>

            <h2 className="text-xl font-semibold">Why Study in <span style={{ color: "#006AA7" }}>Sweden</span>?</h2>
            <p>
              Sweden ranks among the top for quality education and student satisfaction. <span className="font-semibold">It boasts globally ranked universities, a safe and progressive society, and close ties with industries like tech, sustainability, and design</span>. English-taught programs, part-time work rights, and post-study stay options make Sweden a top choice for international students.
            </p>
          </div>
        </div>

        <div className="lg:ml-6">
          <Form />
        </div>
      </div>

      <h2 className="text-xl font-semibold text-blue-800 mb-2">
        <span style={{ color: "#006AA7" }}>Sweden</span> Student Visa Categories
      </h2>
      <p>
        For courses longer than 90 days, international students must apply for a <strong>Swedish Residence Permit for Studies</strong>. VJC provides end-to-end support for successful application filing and follow-up.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Step-by-Step Process</h2>
      <div className="grid grid-cols-1 lg:grid-cols-10 items-start mb-8">
        <div className="lg:col-span-7">
          <ul className="list-disc list-inside space-y-3 text-gray-800 leading-relaxed text-justify">
            <li><strong>Step 1: Apply to a Swedish University</strong> – Secure an admission offer from a recognized university.</li>
            <li><strong>Step 2: Gather Documents</strong> – Prepare passport, acceptance letter, financial proof, insurance, and academic records.</li>
            <li><strong>Step 3: Online Application</strong> – Apply through the Swedish Migration Agency portal.</li>
            <li><strong>Step 4: Pay Fees</strong> – Pay the application fee and tuition (as required).</li>
            <li><strong>Step 5: Biometric & Decision</strong> – Complete biometrics at the embassy and await decision.</li>
          </ul>
        </div>

        <div className="lg:col-span-3 w-full h-[200px] relative overflow-hidden">
          <Image
            src="/study-in-sweden-visa-process.jpg"
            alt="Sweden Visa Steps"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 lg:ml-12 items-center mb-12 mt-8">
        <div className="lg:col-span-4 h-[250px] w-[450px] relative overflow-hidden">
          <Image
            src="/how-to-study-in-sweden.jpg"
            alt="Sweden Study Costs"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="lg:col-span-6 space-y-6 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            <span style={{ color: "#006AA7" }}>Sweden</span> Study Visa Costs & Financial Planning
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>Tuition Fees:</strong> €7,000 to €15,000 annually based on program and university.</li>
            <li><strong>Living Costs:</strong> Approx. SEK 9,450/month (around €850) for accommodation, food, and transport.</li>
            <li><strong>Residence Permit Fee:</strong> SEK 1,500 (~€130).</li>
            <li><strong>Medical Insurance:</strong> Required for non-EU students for complete coverage.</li>
            <li><strong>Work Rights:</strong> Students can work part-time without hourly restrictions.</li>
            <li><strong>Scholarships:</strong> VJC supports in applying for Swedish Institute and university-specific scholarships.</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-center mb-12">
        <div className="lg:col-span-7 space-y-4 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            Why Choose <span className="text-orange-500">VJC Overseas</span>?
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>Course & University Match:</strong> Personalized help in selecting the ideal program in Sweden.</li>
            <li><strong>Visa Documentation:</strong> Expert help with application paperwork and timelines.</li>
            <li><strong>Travel & Stay Planning:</strong> Assistance with flights, accommodation, and post-arrival needs.</li>
            <li><strong>On-site Support:</strong> Guidance for registration, health insurance, and banking in Sweden.</li>
          </ul>

          <div className="mt-10 max-w-4xl mx-auto text-justify text-gray-700 leading-relaxed">
            <h2 className="text-xl font-semibold mb-3">Conclusion</h2>
            <p className="mb-5">
              <span style={{ color: "#006AA7" }}>Sweden</span> stands out for its world-leading academics, open society, and career-focused education. Let <span className="text-blue-800">VJC Overseas</span> guide your journey to studying in Sweden.
            </p>
            <p className="mb-5">
              We also offer expert visa guidance for destinations including Germany, France, Spain, Ireland, Canada, and Australia.
            </p>
            <p className="text-sm font-bold italic">
              Disclaimer: Visa policies are subject to change. Always refer to the official Swedish Migration Agency website.
            </p>
          </div>
        </div>

        <div className="lg:col-span-3 w-full h-[350px] relative rounded-lg overflow-hidden">
          <Image
            src="/study-abroad-vjcoversaes.png"
            alt="Why Choose VJC Overseas"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default SwedenStudyVisa;
