'use client';

import React from "react";
import Image from "next/image";
import Form from "./Form";

const ItalyStudyVisa = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8" style={{ fontFamily: "Times New Roman, serif" }}>
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">
            <span style={{ color: "#008000" /* green */ }}>Italy</span> Study Visa Process – <span className="text-orange-500">VJC Overseas</span>
          </h1>

          <div className="relative h-64 w-full overflow-hidden mb-4">
            <Image
              src="/Study-in-Italy.jpg"
              alt="Study in Italy"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="space-y-5 text-justify text-gray-800 leading-relaxed">
            <p>
              Dreaming of studying in <span style={{ color: "#CD212A" /* red */ }}>Italy</span>? Known for its rich cultural heritage, prestigious universities, and vibrant student life, Italy offers excellent opportunities for international students. <span className="text-orange-500">VJC Overseas</span> is here to guide you through the entire study visa process.
            </p>

            <h2 className="text-xl font-semibold">Why Study in <span style={{ color: "#008000" /* green */ }}>Italy</span>?</h2>
            <p>
              Italy provides world-class education with a strong emphasis on arts, design, science, and technology. Students enjoy a multicultural environment, affordable tuition fees, and access to European travel. Graduates have work opportunities under Italy’s post-study work permits, enhancing career prospects.
              <span className="font-semibold">
                Italy’s beautiful environment, historic cities, and quality of life make it a popular destination for students seeking education and cultural immersion.
              </span>
            </p>
          </div>
        </div>

        <div className="lg:ml-6">
          <Form />
        </div>
      </div>

      <h2 className="text-xl font-semibold text-blue-800 mb-2">
        <span style={{ color: "#008000" }}>Italy</span> Student Visa Categories
      </h2>
      <p>
        The main visa for international students is the <strong>Student Visa</strong>, permitting full-time study at recognized institutions. It includes work rights during studies and options for accompanying family members. VJC Overseas also supports language course and research visas.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Step-by-Step Process</h2>
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-start mb-8">
        <div className="lg:col-span-7">
          <ul className="list-disc list-inside space-y-3 text-gray-800 leading-relaxed text-justify">
            <li><strong>Step 1: Apply and Get Admission</strong> – Submit applications and receive your admission letter.</li>
            <li><strong>Step 2: Prepare Documentation</strong> – Gather admission letter, passport, financial proof, and health insurance.</li>
            <li><strong>Step 3: Submit Visa Application</strong> – Apply at the nearest Italian embassy or consulate.</li>
            <li><strong>Step 4: Attend Interview</strong> – If required, participate in the visa interview process.</li>
            <li><strong>Step 5: Visa Approval & Travel</strong> – Receive your visa and plan your arrival in Italy.</li>
            <li><strong>Step 6: Register with Local Authorities</strong> – Complete residence registration upon arrival.</li>
          </ul>
        </div>

        <div className="lg:col-span-3 w-full h-[200px] relative overflow-hidden">
          <Image
            src="/italy-student-visa-process.jpg"
            alt="Italy Visa Steps"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10  lg:ml-12 items-center mb-12 mt-8">
        <div className="lg:col-span-4 h-[300px] w-[350px] relative overflow-hidden">
          <Image
            src="/international-students-in-Italy.jpg"
            alt="Italy Study Costs"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="lg:col-span-6 space-y-6 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            <span style={{ color: "#CD212A" }}>Italy</span> Study Visa Costs & Financial Planning
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>Tuition Fees:</strong> Typically range from €900 to €4,000 per year depending on the university and program.</li>
            <li><strong>Living Costs:</strong> Estimated €10,000 to €12,000 per year including accommodation, food, and transport.</li>
            <li><strong>Visa Fee:</strong> Approximately €116 for the student visa application.</li>
            <li><strong>Health Insurance:</strong> Mandatory health insurance required for the visa process.</li>
            <li><strong>Part-Time Work:</strong> Allowed up to 20 hours per week during studies.</li>
            <li><strong>Accommodation:</strong> Options vary between €300 and €700 per month depending on location.</li>
            <li><strong>Scholarships:</strong> VJC helps locate government and university scholarships for eligible students.</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-center mb-12">
        <div className="lg:col-span-7 space-y-4 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            Why Choose <span className="text-orange-500">VJC Overseas</span>?
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>University & Course Selection:</strong> Personalized advice to choose the best fit for your career goals.</li>
            <li><strong>Complete Visa Support:</strong> From document preparation to application submission and interview help.</li>
            <li><strong>Travel & Accommodation Assistance:</strong> Support with booking flights, airport pickup, and housing arrangements.</li>
            <li><strong>Post-Arrival Services:</strong> Guidance for settling in, including registration, banking, and local services.</li>
          </ul>

          <div className="mt-10 max-w-4xl mx-auto text-justify text-gray-700 leading-relaxed">
            <h2 className="text-xl font-semibold mb-3">Conclusion</h2>
            <p className="mb-5">
              <span style={{ color: "#008000" }}>Italy</span> offers a rich educational and cultural experience, perfect for students seeking high-quality European education. <span className="text-blue-800">VJC Overseas</span> is your trusted partner in making the visa process smooth and successful.
            </p>
            <p className="mb-5">
              We also provide assistance for study visas to Australia, UK, Canada, Germany, and New Zealand. Contact us now to start your academic journey!
            </p>
            <p className="text-sm font-bold italic">
              Disclaimer: Visa rules and fees are subject to change. Please check the official Italian embassy website for the latest information.
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

export default ItalyStudyVisa;
