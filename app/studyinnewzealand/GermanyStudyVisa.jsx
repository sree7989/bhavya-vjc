'use client';

import React from "react";
import Image from "next/image";
import Form from "./Form";

const NewZealandStudyVisa = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8" style={{ fontFamily: "Times New Roman, serif" }}>
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">
            <span className="text-blue-700">New Zealand</span> Study Visa Process – <span className="text-orange-500">VJC Overseas</span>
          </h1>

          <div className="relative h-64 w-full overflow-hidden mb-4">
            <Image
              src="/Universities-and-Courses-in-New-Zealand-1.jpg"
              alt="Study in New Zealand"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="space-y-5 text-justify text-gray-800 leading-relaxed">
            <p>
              Dreaming of studying in <span className="text-blue-700">New Zealand</span>? Known for its world-class universities, scenic beauty, and supportive student environment, New Zealand offers excellent opportunities for international students. <span className="text-orange-500">VJC Overseas</span> is here to assist you with the entire study visa application process.
            </p>

            <h2 className="text-xl font-semibold">Why Study in <span className="text-red-500">New Zealand</span>?</h2>
            <p>
              New Zealand provides quality education with a focus on innovation, research, and practical skills. International students enjoy a safe, multicultural society with friendly communities and access to part-time work options. Graduates have opportunities to stay and work post-study under the post-study work visa program, enhancing career prospects. The country’s beautiful environment and high quality of life make it a preferred study destination.
              <span className="font-semibold">
                New Zealand’s flexible visa rules and strong student support services make it an excellent choice for those seeking global education and work experience.
              </span>
            </p>
          </div>
        </div>

        <div className="lg:ml-6">
          <Form />
        </div>
      </div>

      <h2 className="text-xl font-semibold text-blue-800 mb-2">
        <span className="text-blue-700">New Zealand</span> Student Visa Categories
      </h2>
      <p>
        The main visa for international students is the <strong>Student Visa</strong>, allowing full-time study at accredited institutions. It includes work rights of up to 20 hours per week during term time and full-time during breaks. VJC Overseas also supports with visitor visas for short courses and post-study work visas.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Step-by-Step Process</h2>
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-start mb-8">
        <div className="lg:col-span-7">
          <ul className="list-disc list-inside space-y-3 text-gray-800 leading-relaxed text-justify">
            <li><strong>Step 1: Apply and Get Offer</strong> – Apply to New Zealand institutions and obtain your offer letter.</li>
            <li><strong>Step 2: Accept Offer & Pay Fees</strong> – Confirm acceptance and pay tuition or deposit.</li>
            <li><strong>Step 3: Prepare Visa Documents</strong> – Includes offer letter, passport, financial proof, health checks, and insurance.</li>
            <li><strong>Step 4: Submit Visa Application</strong> – Apply online through Immigration New Zealand portal.</li>
            <li><strong>Step 5: Wait for Decision</strong> – Processing time varies, be ready for possible interview or additional requests.</li>
            <li><strong>Step 6: Visa Grant & Travel</strong> – Receive visa approval and plan your journey to New Zealand.</li>
          </ul>
        </div>

        <div className="lg:col-span-3 w-full h-[200px] relative overflow-hidden">
          <Image
            src="/newzealand-student-visa-steps.jpeg"
            alt="New Zealand Visa Steps"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-14 lg:ml-12 items-center mb-12 mt-8">
        <div className="lg:col-span-4 h-[350px] w-[350px] relative overflow-hidden">
          <Image
            src="/Study-In-New-Zealand-visa-process.jpg"
            alt="New Zealand Study Costs"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="lg:col-span-6 space-y-6 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            <span className="text-blue-700">New Zealand</span> Study Visa Costs & Financial Planning
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>Tuition Fees:</strong> Range from NZD 22,000 to NZD 32,000 per year depending on the course.</li>
            <li><strong>Living Costs:</strong> Minimum NZD 15,000 per year required as proof of funds.</li>
            <li><strong>Visa Fee:</strong> Approximately NZD 295 for online student visa application.</li>
            <li><strong>Health Insurance:</strong> Mandatory for international students, cost varies by provider.</li>
            <li><strong>Part-Time Work:</strong> Up to 20 hours per week during study terms.</li>
            <li><strong>Accommodation:</strong> Ranges between NZD 150 to NZD 300 per week.</li>
            <li><strong>Scholarships:</strong> VJC assists in finding New Zealand government and university scholarships.</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-center mb-12">
        <div className="lg:col-span-7 space-y-4 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            Why Choose <span className="text-orange-500">VJC Overseas</span>?
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>University & Course Guidance:</strong> Tailored recommendations based on your interests and goals.</li>
            <li><strong>End-to-End Visa Support:</strong> From documentation to submission and interview preparation.</li>
            <li><strong>Travel & Accommodation Assistance:</strong> Help with flights, airport pickup, and comfortable housing arrangements.</li>
            <li><strong>Post-Arrival Services:</strong> Guidance on registration, banking, SIM cards, and settling in New Zealand.</li>
          </ul>

          <div className="mt-10 max-w-4xl mx-auto text-justify text-gray-700 leading-relaxed">
            <h2 className="text-xl font-semibold mb-3">Conclusion</h2>
            <p className="mb-5">
              <span className="text-blue-700">New Zealand</span> offers an exceptional blend of quality education, safety, and lifestyle. With <span className="text-blue-800">VJC Overseas</span>, your study visa process is simplified and stress-free.
            </p>
            <p className="mb-5">
              We also provide assistance for study visas to Australia, UK, Canada, Germany, and Europe. Contact us now to start your journey!
            </p>
            <p className="text-sm font-bold italic">
              Disclaimer: Visa rules and fees may change. Please verify details on the official New Zealand Immigration website.
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

export default NewZealandStudyVisa;
