'use client';

import React from "react";
import Image from "next/image";
import Form from "./Form";

const PhilippinesStudyVisa = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8" style={{ fontFamily: "Times New Roman, serif" }}>
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">
            <span style={{ color: "#0038A8" }}>Philippines</span> Study Visa Process – <span className="text-orange-500">VJC Overseas</span>
          </h1>

          <div className="relative h-64 w-full overflow-hidden mb-4">
            <Image
              src="/philipiness-student-visa-best-universities.jpg"
              alt="Study in Philippines"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="space-y-5 text-justify text-gray-800 leading-relaxed">
            <p>
              Considering studying in the <span style={{ color: "#0038A8" }}>Philippines</span>? Known for its affordable education, English-speaking environment, and cultural hospitality, the Philippines is an ideal destination for international students. <span className="text-orange-500">VJC Overseas</span> offers full support for your Philippines study visa process.
            </p>

            <h2 className="text-xl font-semibold">Why Study in the <span style={{ color: "#0038A8" }}>Philippines</span>?</h2>
            <p>
              With over 2,000 higher education institutions and a strong emphasis on English-medium instruction, the Philippines welcomes students from around the world. From medicine and engineering to business and arts, it offers globally recognized degrees in a friendly and budget-friendly environment.
              <span className="font-semibold">
                The Philippines combines academic quality with warm hospitality and tropical beauty.
              </span>
            </p>
          </div>
        </div>

        <div className="lg:ml-6">
          <Form />
        </div>
      </div>

      <h2 className="text-xl font-semibold text-blue-900 mb-2">
        <span style={{ color: "#0038A8" }}>Philippines</span> Student Visa Categories
      </h2>
      <p>
        The primary visa for international students is the <strong>9(f) Student Visa</strong>, issued to foreign nationals who wish to take up formal education in the Philippines. For short-term courses, a Special Study Permit (SSP) is required. VJC Overseas helps you choose and apply for the appropriate visa type.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Step-by-Step Process</h2>
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-start mb-8">
        <div className="lg:col-span-7">
          <ul className="list-disc list-inside space-y-3 text-gray-800 leading-relaxed text-justify">
            <li><strong>Step 1: University Admission</strong> – Secure an acceptance letter from a CHED-recognized institution in the Philippines.</li>
            <li><strong>Step 2: Document Preparation</strong> – Gather passport, admission letter, proof of finances, medical and police clearances.</li>
            <li><strong>Step 3: Visa Application</strong> – Submit your application at a Philippine Embassy or Consulate in your home country.</li>
            <li><strong>Step 4: Approval Process</strong> – Wait for the 9(f) visa or SSP approval, typically within a few weeks.</li>
            <li><strong>Step 5: Arrival & Registration</strong> – Register with the school and report to the Bureau of Immigration for further processing.</li>
            <li><strong>Step 6: Follow Rules</strong> – Maintain full-time enrollment and renew your visa as required.</li>
          </ul>
        </div>

        <div className="lg:col-span-3 w-full h-[230px] relative overflow-hidden">
          <Image
            src="/phillipiness-best-visa-study.avif"
            alt="Philippines Visa Steps"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 lg:ml-12 items-center mb-12 mt-8">
        <div className="lg:col-span-4 h-[330px] w-[330px] relative overflow-hidden">
          <Image
            src="/study-in-Philippines.webp"
            alt="Philippines Study Costs"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="lg:col-span-6 space-y-6 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            <span style={{ color: "#0038A8" }}>Philippines</span> Study Visa Costs & Financial Planning
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>Tuition Fees:</strong> Range from PHP 40,000 to PHP 150,000 per year, depending on the course and institution.</li>
            <li><strong>Living Expenses:</strong> Estimated PHP 80,000 to PHP 150,000 annually for housing, food, and daily needs.</li>
            <li><strong>Visa Fees:</strong> Around PHP 8,000 to PHP 10,000 depending on visa type and processing duration.</li>
            <li><strong>Medical Exams:</strong> Required as part of the visa process, with variable costs.</li>
            <li><strong>Part-Time Work:</strong> Not generally allowed on a student visa; permission must be specially requested.</li>
            <li><strong>Accommodation:</strong> Costs vary by city, with options including dorms, apartments, and homestays.</li>
            <li><strong>Scholarships:</strong> VJC Overseas helps you access scholarships from universities and Philippine government programs.</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-center mb-12">
        <div className="lg:col-span-7 space-y-4 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            Why Choose <span className="text-orange-500">VJC Overseas</span>?
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>University Matching:</strong> Personalized support to help you find the best-fit university and course.</li>
            <li><strong>Complete Visa Guidance:</strong> Full help with documentation, embassy application, and approvals.</li>
            <li><strong>Travel Support:</strong> Assistance with travel bookings, airport pickup, and local stay arrangements.</li>
            <li><strong>After-Arrival Help:</strong> Help with university registration, daily life needs, and cultural adjustment.</li>
          </ul>

          <div className="mt-10 max-w-4xl mx-auto text-justify text-gray-700 leading-relaxed">
            <h2 className="text-xl font-semibold mb-3">Conclusion</h2>
            <p className="mb-5">
              The <span style={{ color: "#0038A8" }}>Philippines</span> offers quality education at affordable costs, with a friendly atmosphere and English-medium programs. <span className="text-blue-800">VJC Overseas</span> is your trusted partner for a smooth visa process and successful academic journey.
            </p>
            <p className="mb-5">
              We also support study visas to destinations including Australia, UK, Canada, Germany, France, Singapore, South Africa, and Malaysia. Reach out to VJC Overseas today!
            </p>
            <p className="text-sm font-bold italic">
              Disclaimer: Visa regulations and requirements are subject to change. Always verify with official Philippine immigration sources.
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

export default PhilippinesStudyVisa;
