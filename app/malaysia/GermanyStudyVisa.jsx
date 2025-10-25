'use client';

import React from "react";
import Image from "next/image";
import Form from "./Form";

const MalaysiaStudyVisa = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8" style={{ fontFamily: "Times New Roman, serif" }}>
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">
            <span style={{ color: "#014E45" /* Malaysia Green */ }}>Malaysia</span> Study Visa Process – <span className="text-orange-500">VJC Overseas</span>
          </h1>

          <div className="relative h-64 w-full overflow-hidden mb-4">
            <Image
              src="/malaysia-university.jpg"
              alt="Study in Malaysia"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="space-y-5 text-justify text-gray-800 leading-relaxed">
            <p>
              Dreaming of studying in <span style={{ color: "#014E45" /* Malaysia Green */ }}>Malaysia</span>? Known for its affordable world-class education, multicultural environment, and tropical climate, Malaysia offers great opportunities for international students. <span className="text-orange-500">VJC Overseas</span> guides you smoothly through the study visa application process.
            </p>

            <h2 className="text-xl font-semibold">Why Study in <span style={{ color: "#014E45" /* Malaysia Green */ }}>Malaysia</span>?</h2>
            <p>
              Malaysia offers internationally recognized universities with affordable tuition fees and living costs. Its strategic location in Southeast Asia provides students with exposure to diverse cultures and growing career opportunities. 
              <span className="font-semibold">
                Malaysia’s vibrant student communities, excellent infrastructure, and friendly environment make it a popular study destination.
              </span>
            </p>
          </div>
        </div>

        <div className="lg:ml-6">
          <Form />
        </div>
      </div>

      <h2 className="text-xl font-semibold text-green-800 mb-2">
        <span style={{ color: "#014E45" }}>Malaysia</span> Student Visa Categories
      </h2>
      <p>
        The primary visa for students is the <strong>Student Pass</strong>, allowing full-time study at registered Malaysian institutions. It includes limited work opportunities and access to healthcare. VJC Overseas also supports applications for other relevant passes such as short-term courses.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Step-by-Step Process</h2>
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-start mb-8">
        <div className="lg:col-span-7">
          <ul className="list-disc list-inside space-y-3 text-gray-800 leading-relaxed text-justify">
            <li><strong>Step 1: Apply and Get Admission</strong> – Apply and obtain your admission letter from Malaysian institutions.</li>
            <li><strong>Step 2: Prepare Documentation</strong> – Collect admission letter, passport, financial proof, and medical reports.</li>
            <li><strong>Step 3: Submit Student Pass Application</strong> – Apply via the Malaysian Immigration Department or authorized agency.</li>
            <li><strong>Step 4: Await Approval</strong> – Processing times vary; wait for your Student Pass approval letter.</li>
            <li><strong>Step 5: Travel & Registration</strong> – Upon arrival, register with your institution and immigration authorities.</li>
            <li><strong>Step 6: Maintain Pass Compliance</strong> – Comply with visa conditions including full-time study and permitted work hours.</li>
          </ul>
        </div>

        <div className="lg:col-span-3 w-full h-[230px] relative overflow-hidden">
          <Image
            src="/xiamen-university-malaysia.jpg"
            alt="Malaysia Visa Steps"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 lg:ml-12 items-center mb-12 mt-8">
        <div className="lg:col-span-4 h-[330px] w-[450px] relative overflow-hidden">
          <Image
            src="/malaysia-student-visa-process.jpg"
            alt="Malaysia Study Costs"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="lg:col-span-6 space-y-6 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            <span style={{ color: "#014E45" }}>Malaysia</span> Study Visa Costs & Financial Planning
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>Tuition Fees:</strong> Generally range from MYR 8,000 to MYR 30,000 per year depending on institution and program.</li>
            <li><strong>Living Costs:</strong> Estimated MYR 9,000 to MYR 15,000 annually including accommodation, food, and transport.</li>
            <li><strong>Student Pass Fee:</strong> Approximately MYR 500 for application and processing.</li>
            <li><strong>Medical Examination:</strong> Required with costs varying by provider.</li>
            <li><strong>Part-Time Work:</strong> Allowed under certain conditions with a maximum of 20 hours per week during term.</li>
            <li><strong>Accommodation:</strong> Monthly rent varies from MYR 400 to MYR 1,200 depending on location.</li>
            <li><strong>Scholarships:</strong> VJC Overseas assists in locating scholarships from Malaysian universities and government sources.</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-center mb-12">
        <div className="lg:col-span-7 space-y-4 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            Why Choose <span className="text-orange-500">VJC Overseas</span>?
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>University & Course Selection:</strong> Personalized guidance to help you find the ideal program for your goals.</li>
            <li><strong>Complete Visa Support:</strong> Assistance with document preparation, application, and communication with Malaysian authorities.</li>
            <li><strong>Travel & Accommodation Help:</strong> Support with flight bookings, airport pickups, and housing arrangements.</li>
            <li><strong>Post-Arrival Services:</strong> Help with registration, banking, mobile SIM, and settling into Malaysian life.</li>
          </ul>

          <div className="mt-10 max-w-4xl mx-auto text-justify text-gray-700 leading-relaxed">
            <h2 className="text-xl font-semibold mb-3">Conclusion</h2>
            <p className="mb-5">
              <span style={{ color: "#014E45" }}>Malaysia</span> is an excellent study destination offering quality education at affordable costs with a welcoming environment. <span className="text-blue-800">VJC Overseas</span> ensures a hassle-free study visa process for you.
            </p>
            <p className="mb-5">
              We also assist with study visas for Australia, UK, Canada, Germany, France, Singapore, Italy, and New Zealand. Contact us today to start your education journey!
            </p>
            <p className="text-sm font-bold italic">
              Disclaimer: Visa policies and fees are subject to change. Always check official Malaysian immigration resources for updates.
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

export default MalaysiaStudyVisa;
