import React from "react";
import Image from "next/image";

const AustraliaStudentVisa = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10 font-[Times_New_Roman]">
      <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
        Study in Australia - <span className="text-orange-500">&nbsp;<strong>VJC Overseas</strong></span>
      </h1>

      {/* Image and Intro Text Side by Side */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <Image
            src="/Australia-Study-Visa (1).jpg"
            alt="Australian Student Visa Guidance by VJC Overseas"
            width={700}
            height={300}
            className="w-full object-cover rounded-lg"
            priority
            unoptimized
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 text-justify">
          <p className="mb-4">
            Australia has long been a popular destination for international students, offering world-class education, diverse cultural experiences, and a safe environment to study and live. Whether you're planning to pursue undergraduate, postgraduate, or vocational courses, Australia provides an array of high-quality academic opportunities at competitive tuition rates. At{" "}
            <a href="https://www.vjcoverseas.com/" className="text-orange-500 font-semibold">VJC Overseas</a>, we help you navigate the process of obtaining an Australian Study Visa and finding universities with affordable fees and strong global rankings.
          </p>
        </div>
      </div>

      {/* Why Choose Australia */}
      <h2 className="text-xl md:text-xl font-semibold mb-2 mt-4">
        <strong>Why Choose </strong>
        <a href="https://www.vjcoverseas.com/study-abroad/" className="text-orange-500 font-semibold">Australia Student Visa Consultants</a>
        <strong> at VJC Overseas?</strong>
      </h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li><strong>High-Quality Education:</strong> World-class universities with cutting-edge programs and strong global rankings.</li>
        <li><strong>Cultural Diversity:</strong> A multicultural environment offering a welcoming atmosphere for international students.</li>
        <li><strong>Post-Study Work Opportunities:</strong> Subclass 485 visa allows graduates to gain work experience in Australia.</li>
        <li><strong>Affordable Tuition Fees:</strong> Competitive tuition with available scholarships for international students.</li>
      </ul>

      {/* Added extra paragraph with Best Visa Immigration Consultants */}
      <p className="mb-4">
        For many students, working with{" "}
        <a href="https://www.vjcoverseas.com/" className="text-orange-500 font-semibold">Best Visa Immigration Consultants</a> ensures a smooth, error-free application process. Our expert team provides end-to-end guidance for your Australian Study Visa journey.
      </p>

      {/* Top Universities */}
      <h2 id="top-universities" className="text-xl md:text-xl font-semibold mb-2 mt-4">Top Australian Universities with Low Tuition Fees & High Rankings</h2>
      <ol className="list-decimal list-inside space-y-4 mb-6">
        {[ /* university array omitted for brevity */ ].map((uni, i) => (
          <li key={i}>
            <strong>{uni.name}</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Rank: {uni.rank}</li>
              <li>Tuition Fees: {uni.fees}</li>
              <li>Programs: {uni.programs}</li>
              <li>Highlights: {uni.highlights}</li>
            </ul>
          </li>
        ))}
      </ol>

      {/* Document Checklist */}
      <h2 className="text-xl md:text-xl font-semibold mb-2 mt-4">Document Checklist for Australian Study Visa</h2>
      <ol className="list-decimal list-inside mb-4 space-y-1">
        <li>Valid Passport</li>
        <li>Confirmation of Enrolment (CoE)</li>
        <li>Financial Evidence</li>
        <li>Genuine Temporary Entrant (GTE) Statement</li>
        <li>English Proficiency Test Scores</li>
        <li>Academic Transcripts and Certificates</li>
        <li>Health Insurance (OSHC)</li>
        <li>Police Clearance</li>
        <li>Visa Application Fee (Approx. AUD 630)</li>
      </ol>

      {/* Processing Time */}
      <h2 className="text-xl md:text-xl font-semibold mb-2 mt-4">Processing Time for Australian Study Visa</h2>
      <p className="mb-6">Typically 4 to 6 weeks. Apply 3–4 months before your course begins to avoid delays.</p>

      {/* Steps to Apply */}
      <h2 className="text-xl md:text-xl font-semibold mb-2 mt-4">Steps to Apply for Your Australian Study Visa</h2>
      <ol className="list-decimal list-inside mb-4 space-y-1">
        <li>Choose a Course and University</li>
        <li>Secure Admission (Get CoE)</li>
        <li>Prepare Documents</li>
        <li>Submit Visa Application Online</li>
        <li>Attend Interview (if required)</li>
        <li>Wait for Visa Decision</li>
      </ol>

      {/* Paragraph with Study Visa Consultants keyword */}
      <p className="mb-4">
        To simplify your study abroad journey, working with{" "}
        <a href="https://www.vjcoverseas.com/study-abroad/" className="text-orange-500 font-semibold">Study Visa Consultants</a> ensures proper guidance, accurate documentation, and increases your chances of obtaining a visa successfully.
      </p>

      {/* Work Opportunities */}
      <p className="mb-4">
        In addition to studying, international students in Australia can work up to 48 hours per fortnight during the semester and full-time during breaks. For those planning to extend their stay for employment, our team can also guide you through the{" "}
        <a href="https://www.vjcoverseas.com/work-abroad/australia-work-permit" className="text-orange-500 font-semibold">Australia Work permit visa</a> process, ensuring you meet eligibility criteria and deadlines.
      </p>

      {/* Why VJC Overseas */}
      <h2 className="text-xl md:text-xl font-semibold mb-2 mt-4">Why Choose <span className="text-orange-500"><strong>VJC Overseas</strong></span>?</h2>
      <p className="mb-4">
        At <strong>VJC Overseas</strong>, we are committed to making your Australian study journey smooth and hassle-free. From selecting the right course to visa processing, we provide personalized guidance at every step. Our team of experts is well-versed with the latest regulations, scholarships, and opportunities in Australian education.
      </p>

      <p className="font-semibold mb-6">
        Let us help you turn your dream of studying in Australia into a reality!
        <br />Contact us today to start your application process or to get more information about affordable study options in Australia.
      </p>
    </div>
  );
};

export default AustraliaStudentVisa;