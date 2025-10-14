'use client';

import React from "react";
import Image from "next/image";
import Form from "./Form";

const AustraliaStudyVisa = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8" style={{ fontFamily: "Times New Roman, serif" }}>
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">
            <span className="text-blue-700">Australia</span> Study Visa Process – <span className="text-orange-500">VJC Overseas</span>
          </h1>

          <div className="relative h-64 w-full overflow-hidden mb-4">
            <Image
              src="/Australia-Landing-Page-student-visa-p[rocess.jpg"
              alt="Study in Australia"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="space-y-5 text-justify text-gray-800 leading-relaxed">
            <p>
              Looking to study in <span className="text-blue-700">Australia</span>? Known for its top-ranked universities,
              vibrant culture, and strong post-study opportunities, Australia is a global
              education hub. <span className="text-orange-500">VJC Overseas</span> provides comprehensive support
              for your student visa journey.
            </p>

            <h2 className="text-xl font-semibold">Why Study in <span className="text-red-500">Australia</span>?</h2>
            <p>
  Australia offers internationally accredited qualifications, research-oriented
  education, and access to world-class infrastructure. Students enjoy
  part-time work options, multicultural exposure, and a high standard of
  living. The country is known for its safe and inclusive environment, excellent
  student support services, and opportunities for networking with industry leaders.
  Additionally, Australian degrees are recognized globally, enhancing your
  career prospects worldwide. With a focus on innovation and practical learning,
  students graduate well-prepared for the evolving job market.
  <span className="font-semibold">
    Graduates benefit from extended post-study work rights and simplified PR pathways, making Australia a preferred destination for long-term settlement.
  </span>
</p>

          </div>
        </div>

        <div className="lg:ml-6">
          <Form />
        </div>
      </div>

      <h2 className="text-xl font-semibold text-blue-800  mb-2">
        <span className="text-blue-700">Australia</span> Student Visa Categories
      </h2>
      <p>
        The primary visa for international students in <span className="text-red-500">Australia</span> is the <strong>Subclass 500</strong>
        visa. It allows full-time study in a recognized institution and includes work
        rights. We also assist with guardian, partner, and dependent visas.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Step-by-Step Process</h2>
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-start mb-8">
        <div className="lg:col-span-7">
          <ul className="list-disc list-inside space-y-3 text-gray-800 leading-relaxed text-justify">
            <li><strong>Step 1: Get Offer Letter</strong> – Apply and receive offer from an Australian education provider.</li>
            <li><strong>Step 2: Accept Offer & Pay Fees</strong> – Sign the acceptance form and pay initial tuition.</li>
            <li><strong>Step 3: Receive CoE</strong> – Confirmation of Enrollment is issued after payment.</li>
            <li><strong>Step 4: Prepare Visa Documents</strong> – Include CoE, GTE statement, OSHC, passport, etc.</li>
            <li><strong>Step 5: Submit Visa Application</strong> – Apply online through the Australian Immigration portal.</li>
            <li><strong>Step 6: Visa Outcome</strong> – Receive visa grant notice and prepare for travel.</li>
          </ul>
        </div>

        <div className="lg:col-span-3 w-full h-[200px] relative overflow-hidden">
          <Image
            src="/australia-study-visa.jpg"
            alt="Australia Visa Steps"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-14 lg:ml-14 items-center mb-12 mt-8">
        <div className="lg:col-span-4 h-[350px] w-[450px] relative overflow-hidden">
          <Image
            src="/study-in-australia-visa.jpg"
            alt="Australia Study Costs"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="lg:col-span-6 space-y-6 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            <span className="text-blue-700">Australia</span> Study Visa Costs & Financial Planning
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>Tuition Fees:</strong> Range from AUD 20,000–AUD 45,000/year depending on program.</li>
            <li><strong>Living Costs:</strong> Minimum AUD 24,505/year required as financial evidence.</li>
            <li><strong>Visa Fee:</strong> Subclass 500 visa costs approx. AUD 710.</li>
            <li><strong>OSHC:</strong> Overseas Student Health Cover is mandatory (AUD 500–700/year).</li>
            <li><strong>Part-Time Work:</strong> Students can work up to 48 hours per fortnight during sessions.</li>
            <li><strong>Accommodation:</strong> Average cost AUD 600–1,200/month depending on location.</li>
            <li><strong>Scholarships:</strong> VJC helps secure university and government-funded scholarships.</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-center mb-12">
        <div className="lg:col-span-7 space-y-4 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            Why Choose <span className="text-orange-500">VJC Overseas</span>?
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>Course Selection:</strong> Expert guidance for choosing courses aligned with career goals.</li>
            <li><strong>Complete Support:</strong> Application, documentation, visa, and pre-departure assistance.</li>
            <li><strong>Visa Filing Assistance:</strong> Accurate filing to avoid rejections or delays.</li>
            <li><strong>Travel & Settlement:</strong> Airport pickup, accommodation help, forex & sim card support.</li>
          </ul>

          <div className="mt-10 max-w-4xl mx-auto text-justify text-gray-700 leading-relaxed">
            <h2 className="text-xl font-semibold mb-3">Conclusion</h2>
            <p className="mb-5">
              <span className="text-blue-700">Australia</span> is a vibrant and welcoming destination for students across the globe. With <span className="text-blue-800">VJC Overseas</span>, your dream of Australian education becomes a smooth, achievable reality.
            </p>
            <p className="mb-5">
              We also assist in study visas for Canada, UK, New Zealand, and Europe. Reach out today to begin your global journey!
            </p>
            <p className="text-sm font-bold italic">
              Disclaimer: Policies and fees are subject to change. Please check with official Australian government websites for latest info.
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

export default AustraliaStudyVisa;
