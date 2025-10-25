'use client';

import React from "react";
import Image from "next/image";
import Form from "./Form";

const IrelandStudyVisa = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8" style={{ fontFamily: "Times New Roman, serif" }}>
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">
            <span style={{ color: "#169B62" }}>Ireland</span> Study Visa Process – <span className="text-orange-500">VJC Overseas</span>
          </h1>

          <div className="relative h-64 w-full overflow-hidden mb-4">
            <Image
              src="/study-in-ireland-best-universities.jpg"
              alt="Study in Ireland"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="space-y-5 text-justify text-gray-800 leading-relaxed">
            <p>
              Thinking of studying in <span style={{ color: "#169B62" }}>Ireland</span>? Renowned for its top universities, English-speaking environment, and tech-driven job market, Ireland is a prime destination for global education. <span className="text-orange-500">VJC Overseas</span> provides complete guidance for your Ireland student visa journey.
            </p>

            <h2 className="text-xl font-semibold">Why Study in <span style={{ color: "#169B62" }}>Ireland</span>?</h2>
            <p>
  Ireland is not just about lush green landscapes and folklore — it's a modern education hub brimming with globally ranked universities and cutting-edge programs tailored for today’s industries. International students thrive here, enjoying generous work rights during and after studies, with access to a booming job market. <span className="font-semibold">From global tech giants like Google, Facebook, and Apple to thriving pharma and finance sectors, Ireland opens doors to high-paying, future-proof careers in the heart of Europe.</span> Plus, the friendly locals and vibrant student communities make it a truly enriching life experience.
</p>

          </div>
        </div>

        <div className="lg:ml-6">
          <Form />
        </div>
      </div>

      <h2 className="text-xl font-semibold text-green-700 mb-2">
        <span style={{ color: "#169B62" }}>Ireland</span> Student Visa Categories
      </h2>
      <p>
        International students require a <strong>Stamp 2 Student Visa</strong> for full-time courses longer than 3 months. Ireland also offers <strong>Stamp 2A</strong> for non-degree courses. VJC assists in choosing the right visa and preparing strong applications for successful outcomes.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Step-by-Step Process</h2>
      <div className="grid grid-cols-1 lg:grid-cols-10  items-start mb-8">
        <div className="lg:col-span-7">
          <ul className="list-disc list-inside space-y-3 text-gray-800 leading-relaxed text-justify">
            <li><strong>Step 1: Secure Admission</strong> – Apply and receive your letter of acceptance from an Irish university or institute.</li>
            <li><strong>Step 2: Prepare Documents</strong> – Gather passport, academic records, financial proof, medical insurance, and visa form.</li>
            <li><strong>Step 3: Visa Application</strong> – Apply for a visa online through AVATS and submit documents at the VFS or Embassy.</li>
            <li><strong>Step 4: Biometric & Decision</strong> – Attend biometric appointment and wait for visa decision.</li>
            <li><strong>Step 5: Travel & Register</strong> – Arrive in Ireland and register with Irish immigration authorities.</li>
          </ul>
        </div>

        <div className="lg:col-span-3 w-full h-[200px] relative overflow-hidden">
          <Image
            src="/ireland-student-visa-process.jpg"
            alt="Ireland Visa Steps"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 lg:ml-12 items-center mb-12 mt-8">
        <div className="lg:col-span-4 h-[250px] w-[450px] relative overflow-hidden">
          <Image
            src="/students-in-Ireland.webp"
            alt="Ireland Study Costs"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="lg:col-span-6 space-y-6 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            <span style={{ color: "#169B62" }}>Ireland</span> Study Visa Costs & Financial Planning
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>Tuition Fees:</strong> Range between €9,000 and €25,000 annually based on course and institution.</li>
            <li><strong>Living Expenses:</strong> Approx. €7,000 to €12,000 per year including rent, food, and transport.</li>
            <li><strong>Visa Fee:</strong> €60 (single entry) and €100 (multi-entry).</li>
            <li><strong>Health Insurance:</strong> Mandatory for international students; costs vary from €150 to €800.</li>
            <li><strong>Work Rights:</strong> Students can work 20 hours/week during term and 40 hours/week during breaks.</li>
            <li><strong>Scholarships:</strong> VJC assists with Irish government and institutional scholarship applications.</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-center mb-12">
        <div className="lg:col-span-7 space-y-4 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            Why Choose <span className="text-orange-500">VJC Overseas</span>?
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li><strong>University & Course Selection:</strong> Guidance for top Irish institutions and suitable courses.</li>
            <li><strong>Visa Documentation:</strong> Help in preparing financial, academic, and supporting documents.</li>
            <li><strong>Travel & Stay Support:</strong> Flight bookings, airport pickup, and accommodation planning.</li>
            <li><strong>Arrival Assistance:</strong> Immigration registration, banking help, and orientation support.</li>
          </ul>

          <div className="mt-10 max-w-4xl mx-auto text-justify text-gray-700 leading-relaxed">
            <h2 className="text-xl font-semibold mb-3">Conclusion</h2>
            <p className="mb-5">
              <span style={{ color: "#169B62" }}>Ireland</span> stands out for its high employability, quality education, and student-friendly visa system. <span className="text-blue-800">VJC Overseas</span> is your trusted partner for a successful Ireland study visa journey.
            </p>
            <p className="mb-5">
              We also offer expert visa services for countries like Poland, France, Germany, UK, Canada, Australia, and more. Connect with us today!
            </p>
            <p className="text-sm font-bold italic">
              Disclaimer: Visa guidelines and fees are subject to change. Please confirm with the official Irish embassy website.
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

export default IrelandStudyVisa;
