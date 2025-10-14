'use client';

import React from "react";
import Image from "next/image";
import Form from "./Form";

const CanadaStudyVisa = () => {
  return (
    <div
      className="max-w-7xl mx-auto px-4 py-8"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* LEFT CONTENT */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">
            <span className="text-red-500">Canada</span> Study Visa Process –{" "}
            <span className="text-orange-500">VJC Overseas</span>
          </h1>

          <div className="relative h-64 w-full overflow-hidden mb-4">
            <Image
              src="/How-to-apply-student-visa-in-Canada.jpg"
              alt="Study in Canada"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="space-y-5 text-justify text-gray-800 leading-relaxed">
            <p>
              Dreaming of studying in <span className="text-red-500">Canada</span>? With world-class institutions,
              diverse culture, and a student-friendly immigration process, Canada
              is one of the most preferred destinations for international students.
              <span className="text-orange-500"> VJC Overseas</span> helps you every step
              of the way—from application to arrival.
            </p>

            <h2 className="text-xl font-semibold">Why Study in <span className="text-red-500">Canada</span>?</h2>
           <p>
  Canada offers globally recognized degrees, affordable tuition, and
  work opportunities during and after studies. From research-intensive
  universities to career-focused colleges, students gain both academic
  excellence and practical exposure in a multicultural environment. 
  <span className="font-semibold">Graduates also benefit from generous post-study work visas and clear PR pathways, making <span className="text-red-500">Canada</span> an ideal long-term destination.</span>
</p>

          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="lg:ml-6">
          <Form />
        </div>
      </div>

      <h2 className="text-xl font-semibold text-blue-800 mt-2 mb-2">
        <span className="text-red-500">Canada</span> Student Visa Categories
      </h2>
      <p>
        The main permit for international students in <span className="text-red-500">Canada</span> is the{" "}
        <strong>Study Permit</strong>. VJC Overseas also provides assistance for
        short-term visas for language or exchange programs, and dependent visas
        for family members.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Step-by-Step Process</h2>

<div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-start mb-8">
  {/* LEFT: Step-by-step list (70%) */}
  <div className="lg:col-span-7">
    <ul className="list-disc list-inside space-y-3 text-gray-800 leading-relaxed text-justify">
      <li>
        <strong>Step 1: Get Letter of Acceptance (LOA)</strong> – From a Designated Learning Institution (DLI).
      </li>
      <li>
        <strong>Step 2: Gather Documents</strong> – Academic transcripts, financial proof, passport, SOP, etc.
      </li>
      <li>
        <strong>Step 3: Apply for Study Permit</strong> – Submit application via the IRCC online portal or VFS.
      </li>
      <li>
        <strong>Step 4: Biometrics Appointment</strong> – Schedule and attend biometric enrollment at a VAC.
      </li>
      <li>
        <strong>Step 5: Visa Decision</strong> – Once approved, you’ll receive your Port of Entry (POE) Letter of Introduction.
      </li>
      <li>
        <strong>Step 6: Fly to Canada</strong> – Carry your documents and start your education journey!
      </li>
    </ul>
  </div>

  {/* RIGHT: Image (30%) */}
  <div className="lg:col-span-3 w-full h-[200px] relative  overflow-hidden">
    <Image
      src="/canada-student.avif" // ✅ Replace with your actual image path
      alt="Canada Study Visa Steps"
      fill
      className="object-cover"
      unoptimized
    />
  </div>
</div>


      {/* COST SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-0 lg:ml-14 items-center mb-12 mt-8">
        <div className="lg:col-span-4 h-[350px] w-[350px] relative overflow-hidden">
          <Image
            src="/student-visa-process-canada.jpg"
            alt="Canada Study Costs"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="lg:col-span-6 space-y-6 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            <span className="text-red-500">Canada</span> Study Visa Costs & Financial Planning
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Tuition Fees:</strong> Range from CAD 13,000–CAD 35,000 per year depending on course and institution.
            </li>
            <li>
              <strong>Living Expenses:</strong> IRCC requires proof of at least CAD 10,000 per year (outside Quebec).
            </li>
            <li>
              <strong>Visa Application Fee:</strong> The Canadian study permit fee is approximately CAD 150.
            </li>
            <li>
              <strong>GIC Requirement:</strong> Students applying via SDS stream need to purchase a CAD 10,000 Guaranteed Investment Certificate.
            </li>
            <li>
              <strong>Medical & Biometrics:</strong> Costs for medical exam (CAD 100–150) and biometrics (CAD 85) may apply.
            </li>
            <li>
              <strong>Part-Time Work:</strong> Students can work up to 20 hours per week during sessions and full-time in scheduled breaks.
            </li>
            <li>
              <strong>Accommodation:</strong> Costs range from CAD 500–CAD 1,200/month depending on city and lifestyle.
            </li>
            <li>
              <strong>Scholarships:</strong> VJC assists in applying to institutional and provincial scholarships where eligible.
            </li>
          </ul>
        </div>
      </div>

      {/* WHY VJC OVERSEAS */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-center mb-12">
        <div className="lg:col-span-7 space-y-4 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            Why Choose <span className="text-orange-500">VJC Overseas</span>?
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>University Selection:</strong> Personalized recommendations based on course, budget, and goals.
            </li>
            <li>
              <strong>End-to-End Support:</strong> From document prep to visa filing, we've got you covered.
            </li>
            <li>
              <strong>SDS & Non-SDS Filing:</strong> Guidance for both streams with high visa success rates.
            </li>
            <li>
              <strong>Pre-Departure & Forex Help:</strong> Assistance with travel bookings, housing, GIC setup & currency exchange.
            </li>
          </ul>

          <div className="mt-10 max-w-4xl mx-auto text-justify text-gray-700 leading-relaxed">
            <h2 className="text-xl font-semibold mb-3">Conclusion</h2>
            <p className="mb-5">
              <span className="text-red-500">Canada</span> is one of the safest and most promising destinations for international students. With{" "}
              <span className="text-blue-800">VJC Overseas</span>, you get more than consultation—you get a dedicated partner.
            </p>
            <p className="mb-5">
              We also support study visas for UK, Australia, New Zealand, and Europe. Let us help shape your global education journey!
            </p>
            <p className="text-sm font-bold italic">
              Disclaimer: Fees and immigration policies may change. Always confirm with official IRCC sources.
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

export default CanadaStudyVisa;
