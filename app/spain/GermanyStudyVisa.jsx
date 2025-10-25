'use client';

import React from "react";
import Image from "next/image";
import Form from "./Form";

const SpainStudyVisa = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8" style={{ fontFamily: "Times New Roman, serif" }}>
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">
            <span style={{ color: "#AA151B" }}>Spain</span> Study Visa Process – <span className="text-orange-500">VJC Overseas</span>
          </h1>

          <div className="relative h-64 w-full overflow-hidden mb-4">
            <Image
              src="/spain-study-visa-process.jpg"
              alt="Study in Spain"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="space-y-5 text-justify text-gray-800 leading-relaxed">
            <p>
              Dreaming of studying in <span style={{ color: "#AA151B" }}>Spain</span>? With world-class universities, Mediterranean lifestyle, and affordability, Spain is a magnet for international students. <span className="text-orange-500">VJC Overseas</span> helps you navigate the Spain study visa journey with ease.
            </p>

            <h2 className="text-xl font-semibold">Why Study in <span style={{ color: "#AA151B" }}>Spain</span>?</h2>
            <p>
              Spain offers globally accredited education, multicultural campuses, and the chance to learn Spanish — a key global language. <span className="font-semibold">With dynamic sectors like tourism, business, arts, and science, students gain practical exposure and career readiness in a vibrant European setting.</span>
            </p>
          </div>
        </div>

        <div className="lg:ml-6">
          <Form />
        </div>
      </div>

      <h2 className="text-xl font-semibold text-red-700 mb-2">
        <span style={{ color: "#AA151B" }}>Spain</span> Student Visa Categories
      </h2>
      <p>
        For courses over 90 days, international students need a <strong>Type D Student Visa</strong>. This visa allows part-time work and is extendable for postgraduate internships or further studies. VJC assists in choosing the right visa type and preparing the complete application.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Step-by-Step Process</h2>
      <div className="grid grid-cols-1 lg:grid-cols-10 items-start mb-8">
        <div className="lg:col-span-7">
          <ul className="list-disc list-inside space-y-3 text-gray-800 leading-relaxed text-justify">
            <li><strong>Step 1: Choose a University</strong> – Apply to a recognized Spanish institution and obtain the acceptance letter.</li>
            <li><strong>Step 2: Collect Required Documents</strong> – Passport, medical insurance, academic transcripts, financial proof, and police clearance.</li>
            <li><strong>Step 3: Visa Application</strong> – Submit your student visa application at the Spanish consulate or embassy.</li>
            <li><strong>Step 4: Biometric & Interview</strong> – Attend appointment for biometrics and visa interview (if required).</li>
            <li><strong>Step 5: Arrival & NIE</strong> – On arrival in Spain, obtain your Foreign Identity Number (NIE) and register residency.</li>
          </ul>
        </div>

        <div className="lg:col-span-3 w-full h-[200px] relative overflow-hidden">
          <Image
            src="/spain-students.jpg"
            alt="Spain Visa Steps"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 lg:ml-12 items-center mb-12 mt-8">
        <div className="lg:col-span-4 h-[250px] w-[450px] relative overflow-hidden">
          <Image
            src="/College-Kids-in-Spain.jpg"
            alt="Spain Study Costs"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="lg:col-span-6 space-y-6 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            <span style={{ color: "#AA151B" }}>Spain</span> Study Visa Costs & Financial Planning
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>Tuition Fees:</strong> €1,000 to €7,000 per year depending on course and university.</li>
            <li><strong>Living Costs:</strong> Approx. €6,000–€10,000 annually including housing and food.</li>
            <li><strong>Visa Fee:</strong> €60–€100 depending on nationality and duration.</li>
            <li><strong>Medical Insurance:</strong> Mandatory for visa – public or private coverage accepted.</li>
            <li><strong>Part-time Work:</strong> Students can work up to 20 hours per week.</li>
            <li><strong>Scholarships:</strong> Support for EU/Spanish government and institutional funding available via VJC.</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-center mb-12">
        <div className="lg:col-span-7 space-y-4 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            Why Choose <span className="text-orange-500">VJC Overseas</span>?
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>Expert Admission Help:</strong> Find the right university and course with our dedicated counsellors.</li>
            <li><strong>Visa Assistance:</strong> Full support for documentation, application, and interview prep.</li>
            <li><strong>Accommodation & Flights:</strong> Booking guidance, arrival pickup, and housing coordination.</li>
            <li><strong>On-Ground Support:</strong> Help with registration, banking, transport, and part-time job insights.</li>
          </ul>

          <div className="mt-10 max-w-4xl mx-auto text-justify text-gray-700 leading-relaxed">
            <h2 className="text-xl font-semibold mb-3">Conclusion</h2>
            <p className="mb-5">
              <span style={{ color: "#AA151B" }}>Spain</span> offers a mix of high-quality education, vibrant culture, and career opportunities. With <span className="text-blue-800">VJC Overseas</span> by your side, your dream to study in Spain becomes achievable and exciting.
            </p>
            <p className="mb-5">
              We also support study visa services for countries like Ireland, Germany, Canada, Poland, France, and Australia. Start your study abroad journey with VJC today!
            </p>
            <p className="text-sm font-bold italic">
              Disclaimer: Visa requirements and fees are subject to change. Always verify with the Spanish consulate or embassy.
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

export default SpainStudyVisa;
