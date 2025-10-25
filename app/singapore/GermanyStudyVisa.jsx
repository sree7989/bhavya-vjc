'use client';

import React from "react";
import Image from "next/image";
import Form from "./Form";

const SingaporeStudyVisa = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8" style={{ fontFamily: "Times New Roman, serif" }}>
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">
            <span style={{ color: "#E20E0E" /* Singapore Red */ }}>Singapore</span> Study Visa Process – <span className="text-orange-500">VJC Overseas</span>
          </h1>

          <div className="relative h-64 w-full overflow-hidden mb-4">
            <Image
              src="/National-University-of-Singapore-NUS-campus.jpg"
              alt="Study in Singapore"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="space-y-5 text-justify text-gray-800 leading-relaxed">
            <p>
              Dreaming of studying in <span style={{ color: "#E20E0E" /* Singapore Red */ }}>Singapore</span>? Renowned for its cutting-edge education system, global universities, and vibrant multicultural environment, Singapore offers excellent prospects for international students. <span className="text-orange-500">VJC Overseas</span> will assist you throughout the study visa application process.
            </p>

            <h2 className="text-xl font-semibold">Why Study in <span style={{ color: "#E20E0E" /* Singapore Red */ }}>Singapore</span>?</h2>
            <p>
              Singapore provides world-class education with strong emphasis on technology, business, and research. Students enjoy a safe, clean, and multicultural environment with access to some of Asia’s top universities. Graduates benefit from excellent career opportunities in Asia-Pacific.
              <span className="font-semibold">
                Singapore’s modern lifestyle, excellent infrastructure, and strong global connections make it a prime study destination.
              </span>
            </p>
          </div>
        </div>

        <div className="lg:ml-6">
          <Form />
        </div>
      </div>

      <h2 className="text-xl font-semibold text-red-700 mb-2">
        <span style={{ color: "#E20E0E" }}>Singapore</span> Student Visa Categories
      </h2>
      <p>
        The main visa for international students is the <strong>Student Pass</strong>, required for full-time study at registered educational institutions. It allows limited work hours and access to healthcare. VJC Overseas also supports other passes related to short courses and internships.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Step-by-Step Process</h2>
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-start mb-8">
        <div className="lg:col-span-7">
          <ul className="list-disc list-inside space-y-3 text-gray-800 leading-relaxed text-justify">
            <li><strong>Step 1: Apply and Get Admission</strong> – Apply and obtain your admission letter from Singapore institutions.</li>
            <li><strong>Step 2: Prepare Documentation</strong> – Collect admission letter, passport, financial evidence, and medical reports.</li>
            <li><strong>Step 3: Submit Student Pass Application</strong> – Apply via the Immigration & Checkpoints Authority (ICA) or authorized agency.</li>
            <li><strong>Step 4: Await Approval</strong> – Processing times may vary; wait for approval letter.</li>
            <li><strong>Step 5: Travel & Registration</strong> – Upon arrival, register at your institution and with ICA if required.</li>
            <li><strong>Step 6: Maintain Pass Requirements</strong> – Adhere to conditions such as full-time study and work hour limits.</li>
          </ul>
        </div>

        <div className="lg:col-span-3 w-full h-[230px] relative overflow-hidden">
          <Image
            src="/singapore-student-visa-process.jpg"
            alt="Singapore Visa Steps"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10  items-center mb-12 mt-8">
        <div className="lg:col-span-4 h-[300px] w-[450px] relative overflow-hidden">
          <Image
            src="/singapore-student-visa-steps.jpg"
            alt="Singapore Study Costs"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="lg:col-span-6 space-y-6 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            <span style={{ color: "#E20E0E" }}>Singapore</span> Study Visa Costs & Financial Planning
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>Tuition Fees:</strong> Typically range from SGD 10,000 to SGD 40,000 per year based on course and institution.</li>
            <li><strong>Living Costs:</strong> Estimated SGD 10,000 to SGD 15,000 annually including accommodation, food, and transport.</li>
            <li><strong>Student Pass Fee:</strong> SGD 30 for application, plus issuance fee around SGD 60.</li>
            <li><strong>Medical Examination:</strong> Required for pass application, costs vary.</li>
            <li><strong>Part-Time Work:</strong> Allowed up to 16 hours per week during term.</li>
            <li><strong>Accommodation:</strong> Options vary from SGD 500 to SGD 1,500 monthly depending on location.</li>
            <li><strong>Scholarships:</strong> VJC helps find government and university scholarships for eligible students.</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-center mb-12">
        <div className="lg:col-span-7 space-y-4 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            Why Choose <span className="text-orange-500">VJC Overseas</span>?
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>University & Course Selection:</strong> Tailored advice to match your career ambitions and interests.</li>
            <li><strong>Full Visa Support:</strong> Help with application, documentation, and communication with authorities.</li>
            <li><strong>Travel & Accommodation Assistance:</strong> Guidance on booking flights, airport pickup, and housing.</li>
            <li><strong>Post-Arrival Services:</strong> Support with registration, banking, SIM cards, and settling in Singapore.</li>
          </ul>

          <div className="mt-10 max-w-4xl mx-auto text-justify text-gray-700 leading-relaxed">
            <h2 className="text-xl font-semibold mb-3">Conclusion</h2>
            <p className="mb-5">
              <span style={{ color: "#E20E0E" }}>Singapore</span> is a top choice for students seeking high-quality education in Asia with excellent career prospects. <span className="text-blue-800">VJC Overseas</span> makes your study visa process straightforward and stress-free.
            </p>
            <p className="mb-5">
              We also offer assistance for study visas to Australia, UK, Canada, Germany, France, Italy, and New Zealand. Contact us today to start your journey!
            </p>
            <p className="text-sm font-bold italic">
              Disclaimer: Visa regulations and fees may change. Please verify details with official Singapore immigration resources.
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

export default SingaporeStudyVisa;
