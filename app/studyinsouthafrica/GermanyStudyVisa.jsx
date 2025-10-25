'use client';

import React from "react";
import Image from "next/image";
import Form from "./Form";

const SouthAfricaStudyVisa = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8" style={{ fontFamily: "Times New Roman, serif" }}>
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">
            <span style={{ color: "#007A4D" /* South Africa Green */ }}>South Africa</span> Study Visa Process – <span className="text-orange-500">VJC Overseas</span>
          </h1>

          <div className="relative h-64 w-full overflow-hidden mb-4">
            <Image
              src="/Best-university-in-Africa-min.webp"
              alt="Study in South Africa"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="space-y-5 text-justify text-gray-800 leading-relaxed">
            <p>
              Dreaming of studying in <span style={{ color: "#007A4D" /* South Africa Green */ }}>South Africa</span>? Known for its diverse culture, world-class universities, and breathtaking landscapes, South Africa offers excellent opportunities for international students. <span className="text-orange-500">VJC Overseas</span> supports you through every step of the study visa application.
            </p>

            <h2 className="text-xl font-semibold">Why Study in <span style={{ color: "#007A4D" /* South Africa Green */ }}>South Africa</span>?</h2>
            <p>
              South Africa has a rich academic tradition with reputable universities offering diverse courses and research opportunities. The cost of living is affordable, and students benefit from a multicultural environment with strong career prospects across Africa.
              <span className="font-semibold">
                South Africa’s vibrant student life, excellent natural beauty, and strategic location make it an attractive study destination.
              </span>
            </p>
          </div>
        </div>

        <div className="lg:ml-6">
          <Form />
        </div>
      </div>

      <h2 className="text-xl font-semibold text-green-800 mb-2">
        <span style={{ color: "#007A4D" }}>South Africa</span> Student Visa Categories
      </h2>
      <p>
        The primary visa for international students is the <strong>Study Visa</strong>, required for full-time studies at accredited South African institutions. This visa allows limited work during studies and access to health services. VJC Overseas also helps with related permits for short courses and internships.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Step-by-Step Process</h2>
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-start mb-8">
        <div className="lg:col-span-7">
          <ul className="list-disc list-inside space-y-3 text-gray-800 leading-relaxed text-justify">
            <li><strong>Step 1: Apply and Get Admission</strong> – Obtain an admission letter from a South African university or college.</li>
            <li><strong>Step 2: Prepare Documentation</strong> – Gather your admission letter, valid passport, financial proof, and medical reports.</li>
            <li><strong>Step 3: Submit Visa Application</strong> – Apply online or at the South African embassy/consulate in your country.</li>
            <li><strong>Step 4: Await Approval</strong> – Visa processing times may vary; monitor your application status.</li>
            <li><strong>Step 5: Travel & Registration</strong> – Upon arrival, register with your institution and report to the Department of Home Affairs if needed.</li>
            <li><strong>Step 6: Maintain Visa Conditions</strong> – Follow all visa conditions including full-time study and limited work rights.</li>
          </ul>
        </div>

        <div className="lg:col-span-3 w-full h-[230px] relative overflow-hidden">
          <Image
            src="/south-africa-students.webp"
            alt="South Africa Visa Steps"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10  items-center mb-12 mt-8">
        <div className="lg:col-span-4 h-[330px] w-[470px] relative overflow-hidden">
          <Image
            src="/south-africa-student-visa.webp"
            alt="South Africa Study Costs"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="lg:col-span-6 space-y-6 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            <span style={{ color: "#007A4D" }}>South Africa</span> Study Visa Costs & Financial Planning
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>Tuition Fees:</strong> Range from ZAR 30,000 to ZAR 80,000 per year depending on institution and course.</li>
            <li><strong>Living Costs:</strong> Estimated ZAR 70,000 to ZAR 120,000 annually including accommodation, food, and transport.</li>
            <li><strong>Visa Application Fee:</strong> Approximately ZAR 400 to ZAR 500 depending on application method.</li>
            <li><strong>Medical and Police Clearances:</strong> Required for application; costs vary by provider.</li>
            <li><strong>Part-Time Work:</strong> Allowed up to 20 hours per week during academic sessions.</li>
            <li><strong>Accommodation:</strong> Options include university residences, private rentals, and homestays with costs varying by location.</li>
            <li><strong>Scholarships:</strong> VJC Overseas assists in identifying scholarships from South African universities and other sources.</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-center mb-12">
        <div className="lg:col-span-7 space-y-4 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            Why Choose <span className="text-orange-500">VJC Overseas</span>?
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>University & Course Selection:</strong> Expert advice tailored to your academic and career goals.</li>
            <li><strong>Visa Application Support:</strong> Assistance with document preparation, application submission, and liaising with South African authorities.</li>
            <li><strong>Travel & Accommodation Assistance:</strong> Help with flight bookings, airport pickups, and finding suitable housing.</li>
            <li><strong>Post-Arrival Services:</strong> Support for registration, banking, mobile connectivity, and settling into South African life.</li>
          </ul>

          <div className="mt-10 max-w-4xl mx-auto text-justify text-gray-700 leading-relaxed">
            <h2 className="text-xl font-semibold mb-3">Conclusion</h2>
            <p className="mb-5">
              <span style={{ color: "#007A4D" }}>South Africa</span> offers a unique combination of quality education, cultural diversity, and stunning natural environments. <span className="text-blue-800">VJC Overseas</span> simplifies your study visa process for a smooth journey to your academic goals.
            </p>
            <p className="mb-5">
              We also assist with study visas for Australia, UK, Canada, Germany, France, Singapore, Italy, Malaysia, and New Zealand. Contact us today to begin your study abroad adventure!
            </p>
            <p className="text-sm font-bold italic">
              Disclaimer: Visa regulations and fees can change. Please verify with official South African immigration sources.
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

export default SouthAfricaStudyVisa;
