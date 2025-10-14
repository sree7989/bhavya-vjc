'use client';

import React from "react";
import Image from "next/image";
import Form from "./Form";

const FranceStudyVisa = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8" style={{ fontFamily: "Times New Roman, serif" }}>
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">
            <span style={{ color: "#0055A4" /* blue */ }}>France</span> Study Visa Process – <span className="text-orange-500">VJC Overseas</span>
          </h1>

          <div className="relative h-64 w-full overflow-hidden mb-4">
            <Image
              src="/best-universties-in-france.jpg"
              alt="Study in France"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="space-y-5 text-justify text-gray-800 leading-relaxed">
            <p>
              Dreaming of studying in <span style={{ color: "#EF4135" /* red */ }}>France</span>? Known for its world-class universities, rich culture, and vibrant student life, France offers excellent opportunities for international students. <span className="text-orange-500">VJC Overseas</span> is here to assist you through the entire study visa process.
            </p>

            <h2 className="text-xl font-semibold">Why Study in <span style={{ color: "#0055A4" /* blue */ }}>France</span>?</h2>
            <p>
              France offers high-quality education with a focus on research and innovation. Students enjoy access to affordable tuition fees, multicultural campuses, and the opportunity to travel throughout Europe. Graduates benefit from post-study work options and strong career opportunities.
              <span className="font-semibold">
                France’s historic cities, cultural richness, and quality of life make it a preferred destination for students worldwide.
              </span>
            </p>
          </div>
        </div>

        <div className="lg:ml-6">
          <Form />
        </div>
      </div>

      <h2 className="text-xl font-semibold text-blue-800 mb-2">
        <span style={{ color: "#0055A4" }}>France</span> Student Visa Categories
      </h2>
      <p>
        The primary visa for international students is the <strong>Student Visa</strong>, which allows full-time study at accredited French institutions. It includes work rights up to 964 hours per year and provisions for family reunification. VJC Overseas also assists with short-term study and research visas.
      </p>

      <h2 className="text-xl font-semibold  mb-2">Step-by-Step Process</h2>
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-start mb-8">
        <div className="lg:col-span-7">
          <ul className="list-disc list-inside space-y-3 text-gray-800 leading-relaxed text-justify">
            <li><strong>Step 1: Apply and Get Admission</strong> – Submit applications and receive your admission letter from French institutions.</li>
            <li><strong>Step 2: Prepare Documentation</strong> – Gather admission letter, passport, financial proof, and health insurance.</li>
            <li><strong>Step 3: Submit Visa Application</strong> – Apply at the nearest French consulate or embassy.</li>
            <li><strong>Step 4: Attend Interview</strong> – Participate in the visa interview if required.</li>
            <li><strong>Step 5: Visa Approval & Travel</strong> – Receive your visa and plan your arrival in France.</li>
            <li><strong>Step 6: Register with Local Authorities</strong> – Complete residence registration upon arrival.</li>
          </ul>
        </div>

        <div className="lg:col-span-3 w-full h-[230px] relative overflow-hidden">
          <Image
            src="/International-students-France.jpg"
            alt="France Visa Steps"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10  lg:ml-12 items-center mb-12 mt-8">
        <div className="lg:col-span-4 h-[300px] w-[350px] relative overflow-hidden">
          <Image
            src="/French-students-visa-process.jpg"
            alt="France Study Costs"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="lg:col-span-6 space-y-6 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            <span style={{ color: "#EF4135" }}>France</span> Study Visa Costs & Financial Planning
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>Tuition Fees:</strong> Range from €170 to €3,770 per year depending on the university and program.</li>
            <li><strong>Living Costs:</strong> Estimated €10,000 to €12,000 per year including accommodation, food, and transportation.</li>
            <li><strong>Visa Fee:</strong> Approximately €99 for the student visa application.</li>
            <li><strong>Health Insurance:</strong> Mandatory for all international students, with costs varying by provider.</li>
            <li><strong>Part-Time Work:</strong> Allowed up to 964 hours per year during studies.</li>
            <li><strong>Accommodation:</strong> Monthly rent typically ranges between €400 and €900 depending on location.</li>
            <li><strong>Scholarships:</strong> VJC assists in finding government and university scholarships for eligible students.</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-center mb-12">
        <div className="lg:col-span-7 space-y-4 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            Why Choose <span className="text-orange-500">VJC Overseas</span>?
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>University & Course Selection:</strong> Expert advice to find the best academic fit for your aspirations.</li>
            <li><strong>Complete Visa Support:</strong> From documentation to submission and interview preparation.</li>
            <li><strong>Travel & Accommodation Assistance:</strong> Help with booking flights, airport pickup, and housing.</li>
            <li><strong>Post-Arrival Services:</strong> Support with registration, banking, SIM cards, and settling in France.</li>
          </ul>

          <div className="mt-10 max-w-4xl mx-auto text-justify text-gray-700 leading-relaxed">
            <h2 className="text-xl font-semibold mb-3">Conclusion</h2>
            <p className="mb-5">
              <span style={{ color: "#0055A4" }}>France</span> offers outstanding educational opportunities combined with rich culture and lifestyle. <span className="text-blue-800">VJC Overseas</span> simplifies your study visa journey ensuring a smooth experience.
            </p>
            <p className="mb-5">
              We also provide assistance for study visas to Australia, UK, Canada, Germany, Italy, and New Zealand. Contact us now to begin your academic adventure!
            </p>
            <p className="text-sm font-bold italic">
              Disclaimer: Visa rules and fees are subject to change. Please verify all details with the official French embassy website.
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

export default FranceStudyVisa;
