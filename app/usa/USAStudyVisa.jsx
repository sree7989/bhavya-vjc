import React from "react";
import Image from "next/image";
import Form from "./Form";

const USAStudyVisa = () => {
  return (
    <div
      className="max-w-7xl mx-auto px-4 py-8"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      {/* TOP: Left side heading + image + content, Right side form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* LEFT SIDE: heading, image, content */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">
             USA Student Visa Process –{" "}
            <span className="text-orange-500">VJC Overseas</span>
          </h1>

          <div className="relative h-64 w-full  overflow-hidden mb-4">
            <Image
              src="/usa-student-visa-process.jpg"
              alt="Study in USA"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="space-y-5 text-justify text-gray-800 leading-relaxed">
            <p>
              If you aspire to pursue higher education in the United States, the
              USA Student Visa is your gateway to world-class universities and
              enriching cultural experiences. At <span className="text-orange-500">VJC Overseas</span>, we provide
              comprehensive support throughout your entire visa application
              journey, ensuring a smooth and successful approval.
            </p>

            <h2 className="text-xl font-semibold">Why Study in the USA?</h2>
            <p>
              The USA hosts some of the world’s top-ranked universities offering
              diverse programs ranging from STEM fields to humanities. Studying
              here equips you with cutting-edge skills, global networking
              opportunities, and a competitive edge in the international job
              market. The rich cultural diversity and innovative learning
              environments make the USA a preferred destination for ambitious
              students worldwide.
            </p>

          </div>
        </div>
        
        {/* RIGHT SIDE: Form with reduced left margin for spacing */}
        <div className="lg:ml-6">
          <Form />
        </div>
      </div>
     
            <h2 className="text-xl font-semibold text-blue-700 mt-2 mb-2">
              USA Student Visa Categories
            </h2>
            <p>
              The most common visa for academic study is the <strong>F-1 Visa</strong>,
              designed for full-time students enrolled in accredited institutions.
              Vocational and non-academic students typically apply for the M-1 Visa.
              Each visa type has specific eligibility criteria and application
              requirements which we help you navigate with expert precision.
            </p>

            <h2 className="text-xl font-semibold mt-4 mb-2">Step-by-Step Process</h2>
            <ul className="list-disc list-inside space-y-3">
              <li>
                <strong>Step 1: Secure Admission</strong> – Apply and gain
                acceptance to a Student and Exchange Visitor Program (SEVP)-certified
                institution.
              </li>
              <li>
                <strong>Step 2: Obtain Form I-20</strong> – Your school issues this
                important document, confirming your enrollment and eligibility.
              </li>
              <li>
                <strong>Step 3: Complete the DS-160 Application</strong> – Fill out
                the online visa application form carefully and accurately.
              </li>
              <li>
                <strong>Step 4: Pay the SEVIS Fee</strong> – This fee funds the
                Student and Exchange Visitor Information System and must be paid
                before your interview.
              </li>
              <li>
                <strong>Step 5: Schedule & Attend Interview</strong> – Prepare your
                documents and attend the visa interview at your local U.S.
                Embassy or Consulate.
              </li>
              <li>
                <strong>Step 6: Receive Visa Decision</strong> – Once approved,
                plan your travel and pre-departure preparations.
              </li>
            </ul>
     {/* SECOND SECTION: Image (40%) + descriptive points (60%) */}
<div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-center mb-12">
  {/* Image Left (40%) - taller height */}
  <div className="lg:col-span-4 h-96 relative  overflow-hidden">
    <Image
      src="/student-financial-planning-usa.png"
      alt="USA Study Costs"
      fill
      className="object-cover"
      unoptimized
    />
  </div>

  {/* Text Right (60%) */}
  <div className="lg:col-span-6 space-y-6 text-justify text-gray-800 leading-relaxed">
    <h2 className="text-xl font-semibold mb-3">
      USA Study Visa Costs & Financial Planning
    </h2>
    <ul className="list-disc list-inside space-y-3">
      <li>
        <strong>University Tuition:</strong> Tuition fees in the USA vary widely depending on the university and program, ranging from
        $20,000 to $50,000 per year for undergraduate and graduate courses. Elite institutions and specialized programs may exceed
        this range.
      </li>
      <li>
        <strong>Living Expenses:</strong> Your living costs, including accommodation, food, transportation, and personal expenses,
        typically range from $8,000 to $20,000 annually, influenced by your city and lifestyle.
      </li>
      <li>
        <strong>Visa Application Fees:</strong> The DS-160 online form requires a $160 application fee, plus a mandatory $350 SEVIS fee
        to support the monitoring system for international students.
      </li>
      <li>
        <strong>Health Insurance:</strong> Most universities mandate health insurance coverage, costing between $500 and $2,000 per
        year, depending on the provider and coverage.
      </li>
    </ul>
  </div>
</div>

      <div>
            {/* Why Choose VJC Overseas - now in a 2-column layout with image on right */}
<div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-center mb-12">
  {/* Text Left (70%) */}
  <div className="lg:col-span-7 space-y-4 text-justify text-gray-800 leading-relaxed">
    <h2 className="text-xl font-semibold mb-3">Why Choose <span className="text-orange-500">VJC Overseas</span> ?</h2>
    <ul className="list-disc list-inside space-y-3">
      <li>
        <strong>Personalized University Shortlisting:</strong> We assess your
        profile to recommend institutions that best align with your academic
        goals and budget.
      </li>
      <li>
        <strong>Complete Visa Documentation Assistance:</strong> We help you
        gather, prepare, and review all necessary paperwork to minimize errors
        and delays.
      </li>
      <li>
        <strong>Pre-Departure Support:</strong> From travel arrangements to
        accommodation advice, we guide you every step before you leave.
      </li>
      <li>
        <strong>Scholarship & Financial Aid Guidance:</strong> Maximize your
        chances to secure scholarships and manage finances smartly.
      </li>
    </ul>
     {/* CONCLUSION */}
      <div className="mt-10 max-w-4xl mx-auto text-justify text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold mb-3">Conclusion</h2>
        <p className="mb-5">
          Embarking on your academic journey in the USA unlocks unparalleled
          opportunities for education and career advancement. With <span className="text-orange-500">VJC Overseas</span>’
          expert visa guidance, you can confidently navigate the application
          process and focus on your studies and future success.
        </p>
        <p className="mb-5">
          Beyond the USA, explore additional study destinations such as Germany,
          Ireland, and Sweden, all supported by our dedicated visa assistance
          services for international students.
        </p>
        <p className="text-sm font-bold italic">
          Disclaimer: Visa policies and fees may change without notice. Please
          consult official government websites for the most current information.
        </p>
      </div>
  </div>

  {/* Image Right (30%) */}
  <div className="lg:col-span-3 w-full h-[350px] relative rounded-lg overflow-hidden">
    <Image
      src="/study-abroad-vjcoversaes.png" // Make sure to use a valid image here
      alt="Why Choose VJC Overseas"
      fill
      className="object-cover"
      unoptimized
    />
  </div>
</div>

          </div>
     
    </div>
  );
};

export default USAStudyVisa;
