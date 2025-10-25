'use client';

import React from "react";
import Image from "next/image";
import Form from "./Form";

const PolandStudyVisa = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8" style={{ fontFamily: "Times New Roman, serif" }}>
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">
            <span style={{ color: "#DC143C" }}>Poland</span> Study Visa Process – <span className="text-orange-500">VJC Overseas</span>
          </h1>

          <div className="relative h-64 w-full overflow-hidden mb-4">
            <Image
              src="/best-university-of-poland-visa-process.webp"
              alt="Study in Poland"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="space-y-5 text-justify text-gray-800 leading-relaxed">
            <p>
              Planning to study in <span style={{ color: "#DC143C" }}>Poland</span>? With its growing reputation in the EU for quality education, affordable tuition, and rich culture, Poland is becoming a top choice for international students. <span className="text-orange-500">VJC Overseas</span> is here to guide you through the complete Poland study visa process.
            </p>

            <h2 className="text-xl font-semibold">Why Study in <span style={{ color: "#DC143C" }}>Poland</span>?</h2>
            <p>
              Poland offers globally recognized degrees, English-taught programs, and affordable living costs. Students benefit from a safe and welcoming environment with access to the Schengen area for travel. <span className="font-semibold">It’s an excellent destination for aspiring professionals looking for high-quality European education on a budget.</span>
            </p>
          </div>
        </div>

        <div className="lg:ml-6">
          <Form />
        </div>
      </div>

      <h2 className="text-xl font-semibold text-red-700 mb-2">
        <span style={{ color: "#DC143C" }}>Poland</span> Student Visa Categories
      </h2>
      <p>
        The primary visa for international students is the <strong>National Long-Stay Visa (D-type)</strong>, allowing students to study in Poland for more than 90 days. A Temporary Residence Permit is also required after arriving. VJC assists with both visa stages and required documentation.
      </p>

      <h2 className="text-xl font-semibold mb-2">Step-by-Step Process</h2>
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-start mb-8">
        <div className="lg:col-span-7">
          <ul className="list-disc list-inside space-y-3 text-gray-800 leading-relaxed text-justify">
            <li><strong>Step 1: Apply and Get Admission</strong> – Choose a recognized Polish university and receive your offer letter.</li>
            <li><strong>Step 2: Document Collection</strong> – Collect your passport, acceptance letter, financial proof, insurance, and photos.</li>
            <li><strong>Step 3: Visa Application</strong> – Submit your D-type visa application at the Polish Embassy or VFS center.</li>
            <li><strong>Step 4: Biometric & Interview</strong> – Attend biometric appointment and visa interview if required.</li>
            <li><strong>Step 5: Travel & Register</strong> – On arrival, apply for a Temporary Residence Permit in Poland.</li>
          </ul>
        </div>

        <div className="lg:col-span-3 w-full h-[200px] relative overflow-hidden">
          <Image
            src="/Poland-Student-Visa-Success-Rate-for-International-Students.jpg"
            alt="Poland Visa Steps"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 lg:ml-12 items-center mb-12 mt-8">
        <div className="lg:col-span-4 h-[300px] w-[450px] relative overflow-hidden">
          <Image
            src="/poland-student-visa-process.jpg"
            alt="Poland Study Costs"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="lg:col-span-6 space-y-6 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            <span style={{ color: "#DC143C" }}>Poland</span> Study Visa Costs & Financial Planning
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>Tuition Fees:</strong> €2,000 to €6,000 annually, depending on course and institution.</li>
            <li><strong>Living Expenses:</strong> Average €3,000–€5,000 per year, including housing, food, and transport.</li>
            <li><strong>Visa Fee:</strong> Approx. €60–€80 for the D-type visa application.</li>
            <li><strong>Health Insurance:</strong> Required for the entire stay – private or Polish public health coverage.</li>
            <li><strong>Work Opportunities:</strong> Students can work up to 20 hours/week during term and full-time in holidays.</li>
            <li><strong>Accommodation:</strong> Dormitory or flat options range between €100–€300 per month.</li>
            <li><strong>Scholarships:</strong> VJC supports applications for Polish government and EU-funded scholarships.</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-center mb-12">
        <div className="lg:col-span-7 space-y-4 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            Why Choose <span className="text-orange-500">VJC Overseas</span>?
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>University & Course Guidance:</strong> Personalized assistance in finding the best options for your future.</li>
            <li><strong>Visa Expertise:</strong> End-to-end support from application to embassy interview and travel planning.</li>
            <li><strong>Accommodation & Travel:</strong> Booking assistance, pickup arrangements, and settling-in guidance.</li>
            <li><strong>Post-Arrival Support:</strong> Help with residence permits, local registration, and student life essentials.</li>
          </ul>

          <div className="mt-10 max-w-4xl mx-auto text-justify text-gray-700 leading-relaxed">
            <h2 className="text-xl font-semibold mb-3">Conclusion</h2>
            <p className="mb-5">
              <span style={{ color: "#DC143C" }}>Poland</span> offers quality European education, budget-friendly living, and a welcoming academic culture. <span className="text-blue-800">VJC Overseas</span> makes your Poland study dream a smooth reality.
            </p>
            <p className="mb-5">
              We also help students apply to France, Germany, Canada, Australia, UK, and Italy. Connect with VJC Overseas to begin your global education journey!
            </p>
            <p className="text-sm font-bold italic">
              Disclaimer: Visa requirements may vary; please confirm the latest guidelines with the official Polish embassy or consulate.
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

export default PolandStudyVisa;
