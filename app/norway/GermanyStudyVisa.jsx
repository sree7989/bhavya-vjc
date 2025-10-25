'use client';

import React from "react";
import Image from "next/image";
import Form from "./Form";

const NorwayStudyVisa = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8" style={{ fontFamily: "Times New Roman, serif" }}>
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">
            <span style={{ color: "#BA0C2F" }}>Norway</span> Study Visa Process – <span className="text-orange-500">VJC Overseas</span>
          </h1>

          <div className="relative h-64 w-full overflow-hidden mb-4">
            <Image
              src="/universities-in-norway-student-visa-steps.jpg"
              alt="Study in Norway"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="space-y-5 text-justify text-gray-800 leading-relaxed">
            <p>
              Planning to study in <span style={{ color: "#BA0C2F" }}>Norway</span>? With world-class education, tuition-free public universities, and a high quality of life, Norway is a top choice for students worldwide. <span className="text-orange-500">VJC Overseas</span> ensures a smooth process for your Norway study visa journey.
            </p>

            <h2 className="text-xl font-semibold">Why Study in <span style={{ color: "#BA0C2F" }}>Norway</span>?</h2>
            <p>
              Norway offers globally recognized degrees, a strong focus on research, and excellent English-taught programs. <span className="font-semibold">Public universities offer tuition-free education even for international students, with modern campuses and close industry connections</span>.
            </p>
          </div>
        </div>

        <div className="lg:ml-6">
          <Form />
        </div>
      </div>

      <h2 className="text-xl font-semibold text-red-700 mb-2">
        <span style={{ color: "#BA0C2F" }}>Norway</span> Student Visa Category
      </h2>
      <p>
        International students staying for more than 90 days must apply for a <strong>Norwegian Study Permit (Residence Permit for Studies)</strong>. VJC Overseas helps with documentation, university coordination, and seamless visa filing.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Step-by-Step Process</h2>
      <div className="grid grid-cols-1 lg:grid-cols-10 items-start mb-8">
        <div className="lg:col-span-7">
          <ul className="list-disc list-inside space-y-3 text-gray-800 leading-relaxed text-justify">
            <li><strong>Step 1: Get Admission</strong> – Obtain a letter of acceptance from a recognized Norwegian university.</li>
            <li><strong>Step 2: Prepare Documents</strong> – Passport, offer letter, proof of funds (minimum NOK 137,907/year), accommodation proof, and insurance.</li>
            <li><strong>Step 3: Apply Online</strong> – Submit application via the Norwegian Directorate of Immigration (UDI) portal.</li>
            <li><strong>Step 4: Pay Visa Fee</strong> – Pay the application fee (~NOK 5,900) and submit biometric data.</li>
            <li><strong>Step 5: Arrival Registration</strong> – Report to the local police within 7 days after arrival in Norway.</li>
          </ul>
        </div>

        <div className="lg:col-span-3 w-full h-[200px] relative overflow-hidden">
          <Image
            src="/norway-student-visa-process.jpg"
            alt="Norway Visa Steps"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 lg:ml-12 items-center mb-12 mt-8">
        <div className="lg:col-span-4 h-[250px] w-[450px] relative overflow-hidden">
          <Image
            src="/Education-in-Norway.jpg"
            alt="Norway Study Costs"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="lg:col-span-6 space-y-6 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            <span style={{ color: "#BA0C2F" }}>Norway</span> Study Visa Costs & Financial Overview
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>Tuition Fees:</strong> Most public universities are tuition-free; some specialized courses may have minimal fees.</li>
            <li><strong>Living Costs:</strong> Around NOK 12,000/month (housing, food, transport).</li>
            <li><strong>Study Permit Fee:</strong> NOK 5,900 (~€520).</li>
            <li><strong>Funds Requirement:</strong> Proof of NOK 137,907/year in a Norwegian bank account.</li>
            <li><strong>Work Rights:</strong> Students can work up to 20 hours/week during term and full-time in holidays.</li>
            <li><strong>Scholarships:</strong> VJC guides students in applying to state and university-funded scholarships.</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-center mb-12">
        <div className="lg:col-span-7 space-y-4 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            Why Choose <span className="text-orange-500">VJC Overseas</span>?
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>Tailored Guidance:</strong> University shortlisting and documentation planning made easy.</li>
            <li><strong>Visa Filing Help:</strong> Support from start to finish, including interview prep and documentation.</li>
            <li><strong>Post-Arrival Support:</strong> Help with registration, bank account, SIM card, and part-time job searches.</li>
            <li><strong>Travel & Housing:</strong> Assistance in booking affordable flights and student-friendly accommodation.</li>
          </ul>

          <div className="mt-10 max-w-4xl mx-auto text-justify text-gray-700 leading-relaxed">
            <h2 className="text-xl font-semibold mb-3">Conclusion</h2>
            <p className="mb-5">
              <span style={{ color: "#BA0C2F" }}>Norway</span> offers a perfect blend of affordability, world-class academics, and work opportunities. Let <span className="text-blue-800">VJC Overseas</span> be your trusted partner in your journey to study in Norway.
            </p>
            <p className="mb-5">
              We also assist with study visas for countries like Sweden, Spain, Germany, France, Canada, and Ireland.
            </p>
            <p className="text-sm font-bold italic">
              Disclaimer: Visa policies are subject to updates. Always refer to the Norwegian UDI for current information.
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

export default NorwayStudyVisa;
