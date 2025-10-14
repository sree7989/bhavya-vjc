import React from "react";
import Image from "next/image";
import Form from "./Form";

const UKStudyVisa = () => {
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
             UK Student Visa Process –{" "}
            <span className="text-orange-500">VJC Overseas</span>
          </h1>

          <div className="relative h-64 w-full overflow-hidden mb-4">
            <Image
              src="/study-in-uk-process.jpg"
              alt="Study in UK"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="space-y-5 text-justify text-gray-800 leading-relaxed">
            <p>
              Planning to study in the United Kingdom? The UK Student Visa is
              your ticket to prestigious universities and a globally respected
              education system. At{" "}
              <span className="text-orange-500">VJC Overseas</span>, we offer
              complete support for your UK student visa application, from start
              to finish.
            </p>

            <h2 className="text-xl font-semibold">Why Study in the UK?</h2>
            <p>
              The UK is home to historic universities like Oxford and Cambridge,
              offering degrees that are internationally recognized. The
              innovative curriculum, cultural diversity, and opportunities for
              part-time work during study make it an attractive choice for
              students seeking both academic excellence and global exposure.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: Form */}
        <div className="lg:ml-6">
          <Form />
        </div>
      </div>

      <h2 className="text-xl font-semibold text-blue-800 mt-2 mb-2">
        UK Student Visa Categories
      </h2>
      <p>
        The primary visa for studying in the UK is the{" "}
        <strong>Student Visa (formerly Tier 4)</strong>, applicable to full-time
        students enrolled in recognized institutions. We also assist with
        Child Student Visas and Short-Term Study Visas as needed.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Step-by-Step Process</h2>
      <ul className="list-disc list-inside space-y-3">
        <li>
          <strong>Step 1: Get CAS (Confirmation of Acceptance for Studies)</strong> – Issued by your UK institution.
        </li>
        <li>
          <strong>Step 2: Prepare Your Documents</strong> – Gather academic,
          financial, and language proficiency records.
        </li>
        <li>
          <strong>Step 3: Apply Online</strong> – Complete the UK visa
          application form on the official UKVI website.
        </li>
        <li>
          <strong>Step 4: Pay Visa Fee & IHS</strong> – Includes a visa fee and
          Immigration Health Surcharge.
        </li>
        <li>
          <strong>Step 5: Book & Attend Biometric Appointment</strong> – Submit
          fingerprints and documents at a visa application center.
        </li>
        <li>
          <strong>Step 6: Receive Visa Decision</strong> – Once granted, begin
          travel planning for your studies in the UK.
        </li>
      </ul>

      {/* SECOND SECTION: Image + Points */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:ml-14 items-center mb-12 mt-8">
        <div className="lg:col-span-4 h-[350px] w-[350px]  relative overflow-hidden">
          <Image
            src="/studyinuk/ukstudy.png"
            alt="UK Study Costs"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="lg:col-span-6 space-y-6 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            UK Study Visa Costs & Financial Planning
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Tuition Fees:</strong> Tuition typically ranges between
              £10,000 and £30,000 per year depending on your university and
              course.
            </li>
            <li>
              <strong>Living Expenses:</strong> The UK Home Office requires
              proof of around £1,023 to £1,334 per month for living costs.
            </li>
            <li>
              <strong>Visa Fees:</strong> The Student Visa application costs
              £490 (approx.) as of the latest update.
            </li>
            
            <li>
  <strong>Proof of Funds:</strong> Students must demonstrate they have sufficient funds to cover tuition and living costs. This typically involves showing bank statements or financial sponsorship letters.
</li>
<li>
  <strong>Accommodation Costs:</strong> Rent varies greatly based on the city and housing type. London accommodation may range between £600–£1,200 per month, while smaller cities are more affordable.
</li>

<li>
  <strong>Part-Time Job Allowance:</strong> Students on a UK Student Visa can work up to 20 hours per week during term time and full-time during holidays to help cover living expenses.
</li>


          </ul>
        </div>
      </div>

      {/* Why Choose VJC Overseas */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 items-center mb-12">
        <div className="lg:col-span-7 space-y-4 text-justify text-gray-800 leading-relaxed">
          <h2 className="text-xl font-semibold mb-3">
            Why Choose <span className="text-orange-500">VJC Overseas</span>?
          </h2>
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Expert Profile Analysis:</strong> Get matched with the
              right UK university based on your academic strengths.
            </li>
            <li>
              <strong>Visa Guidance:</strong> Our specialists ensure error-free
              documentation and timely submission.
            </li>
            <li>
              <strong>Mock Interviews & SOP Help:</strong> Get prepared with
              personalized training and Statement of Purpose review.
            </li>
            <li>
              <strong>Accommodation & Forex Help:</strong> Full pre-departure
              assistance for travel, stay, and currency exchange.
            </li>
          </ul>

          <div className="mt-10 max-w-4xl mx-auto text-justify text-gray-700 leading-relaxed">
            <h2 className="text-xl font-semibold mb-3">Conclusion</h2>
            <p className="mb-5">
              The UK is a hub for excellence in education and research. With{" "}
              <span className="text-blue-800">VJC Overseas</span> by your side,
              you can make the journey from application to arrival seamless and
              stress-free.
            </p>
            <p className="mb-5">
              We also offer guidance for countries like Australia, Canada, and
              New Zealand—making your global study dream a reality.
            </p>
            <p className="text-sm font-bold italic">
              Disclaimer: Visa fees and rules are subject to change. Always
              verify from official UKVI sources.
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

export default UKStudyVisa;
