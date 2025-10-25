'use client';

import React from "react";
import Image from "next/image";
import Form from "./Form";

const GermanyStudyVisa = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8" style={{ fontFamily: "Times New Roman, serif" }}>
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">
            <span className="text-blue-700">Germany</span> Study Visa Process – <span className="text-orange-500">VJC Overseas</span>
          </h1>

          <div className="relative h-64 w-full overflow-hidden mb-4">
            <Image
              src="/study-in-germany-visa-process.jpg"
              alt="Study in Germany"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="space-y-5 text-justify text-gray-800 leading-relaxed">
            <p>
              Planning to study in <span className="text-blue-700">Germany</span>? Renowned for its world-class universities, strong engineering programs, and affordable tuition fees, Germany is a preferred destination for international students. <span className="text-orange-500">VJC Overseas</span> provides expert assistance to make your study visa process hassle-free.
            </p>

            <h2 className="text-xl font-semibold">Why Study in <span className="text-red-500">Germany</span>?</h2>
            <p>
              Germany offers globally recognized qualifications with a focus on research and innovation. Students benefit from low or no tuition fees at many public universities, diverse multicultural campuses, and excellent public infrastructure. The country has a high standard of living, safety, and robust student support services. Graduates from Germany enjoy strong employability, access to internships, and the opportunity to stay and work post-graduation through the residence permit extension.
              <span className="font-semibold">
                Germany’s strategic location in Europe also allows easy travel and work opportunities across the EU, making it ideal for students seeking a global career.
              </span>
            </p>
          </div>
        </div>

        <div className="lg:ml-6">
          <Form />
        </div>
      </div>

      <h2 className="text-xl font-semibold text-blue-800 mb-2">
        <span className="text-blue-700">Germany</span> Student Visa Categories
      </h2>
      <p>
        The main visa for international students is the <strong>Student Residence Permit</strong>, which permits full-time studies at recognized universities. It also allows limited part-time work and includes options for accompanying family members. VJC Overseas also supports with language course visas and research visas.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Step-by-Step Process</h2>
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-start mb-8">
        <div className="lg:col-span-7">
          <ul className="list-disc list-inside space-y-3 text-gray-800 leading-relaxed text-justify">
            <li><strong>Step 1: Apply to University</strong> – Submit applications to German universities and secure admission.</li>
            <li><strong>Step 2: Receive Admission Letter</strong> – Obtain official offer letter confirming enrollment.</li>
            <li><strong>Step 3: Prepare Financial Proof</strong> – Show proof of blocked account or scholarship funding.</li>
            <li><strong>Step 4: Gather Documents</strong> – Include admission letter, passport, health insurance, and academic transcripts.</li>
            <li><strong>Step 5: Submit Visa Application</strong> – Apply at the German embassy or consulate in your country.</li>
            <li><strong>Step 6: Visa Interview & Processing</strong> – Attend interview if required and wait for approval.</li>
            <li><strong>Step 7: Arrival & Registration</strong> – Register with local authorities upon arrival in Germany.</li>
          </ul>
        </div>

        <div className="lg:col-span-3 w-full h-[250px] relative overflow-hidden ">
          <Image
            src="/germany-study-process.jpg"
            alt="Germany Visa Steps"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-14 lg:ml-12 items-center mb-12 mt-8">
        <div className="lg:col-span-4 h-[350px] w-[450px] relative overflow-hidden ">
          <Image
            src="/germany-study-full-process.png"
            alt="Germany Study Costs"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="lg:col-span-6 space-y-6 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            <span className="text-blue-700">Germany</span> Study Visa Costs & Financial Planning
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>Tuition Fees:</strong> Many public universities charge little to no tuition, some fees range from €250–€1,500 per semester.</li>
            <li><strong>Living Costs:</strong> Approximately €10,000–€12,000 per year for accommodation, food, transport, and essentials.</li>
            <li><strong>Visa Fee:</strong> Approximate cost €75–€100 for the student visa application.</li>
            <li><strong>Health Insurance:</strong> Mandatory health insurance costs around €80–€100 per month.</li>
            <li><strong>Part-Time Work:</strong> Allowed up to 120 full days or 240 half days per year.</li>
            <li><strong>Blocked Account:</strong> Proof of funds via blocked account with minimum €11,208 for the first year.</li>
            <li><strong>Scholarships:</strong> VJC helps find DAAD and university-funded scholarships for eligible students.</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-center mb-12">
        <div className="lg:col-span-7 space-y-4 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            Why Choose <span className="text-orange-500">VJC Overseas</span>?
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>University Selection:</strong> Guidance to select universities and programs matching your profile and goals.</li>
            <li><strong>Complete Application Support:</strong> Help with documentation, visa forms, and interview preparation.</li>
            <li><strong>Visa Filing Assistance:</strong> Minimize delays and rejections through expert application handling.</li>
            <li><strong>Pre-Departure & Arrival Services:</strong> Assistance with travel, accommodation, and settling in Germany.</li>
          </ul>

          <div className="mt-10 max-w-4xl mx-auto text-justify text-gray-700 leading-relaxed">
            <h2 className="text-xl font-semibold mb-3">Conclusion</h2>
            <p className="mb-5">
              <span className="text-blue-700">Germany</span> provides an outstanding environment for higher education with strong academic rigor and excellent career opportunities. <span className="text-blue-800">VJC Overseas</span> is committed to helping you navigate the complexities of the German student visa process seamlessly.
            </p>
            <p className="mb-5">
              We also assist with study visas for Australia, UK, Canada, New Zealand, and Europe. Contact us to start your academic journey!
            </p>
            <p className="text-sm font-bold italic">
              Disclaimer: Visa policies and fees can change. Please verify details with official German embassy websites.
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

export default GermanyStudyVisa;
