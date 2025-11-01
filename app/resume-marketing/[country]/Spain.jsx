import React from "react";
import Image from "next/image";

const SpainResumeMarketing = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Heading Section */}
      <div className="text-center space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold">
          Resume Marketing for Spain – Boost Your Career with <span className="text-orange-500">&nbsp;VJC Overseas</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          Unlock global job opportunities in Spain with a powerful, professionally marketed resume.
        </p>
      </div>

      {/* Introduction Section */}
      <div className="flex flex-col lg:flex-row items-start h-auto lg:space-x-6 space-y-4 lg:space-y-0">
        <div className="flex-shrink-0 mx-auto lg:mx-0">
          <Image
            src="/spaintimg.avif"
            alt="Spain Resume Marketing by VJC Overseas"
            width={500}
            height={300}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-80 h-[280px] object-cover shadow-lg rounded-lg"
            unoptimized
          />
        </div>
        <p className="mb-4">
          Spain offers tremendous career potential across industries like IT, engineering, healthcare,
          tourism, and business services. With <strong className="text-black font-bold">VJC Overseas</strong>,
          your resume reaches top employers and recruiters in Spain through targeted, strategic marketing
          designed to enhance your visibility in the global job market. Our resume marketing experts highlight
          your skills, achievements, and global potential to position you as a strong candidate for Spanish
          employers. From resume drafting to interview follow-up, VJC Overseas provides end-to-end support
          until you achieve your overseas career goal. With VJC Overseas, your resume doesn’t just reach Spain — 
          it reaches success through strategic marketing and placement support.
        </p>
      </div>

      <p>
        Our team optimizes your resume, LinkedIn profile, and cover letter according to Spanish market
        standards while actively promoting your profile to hiring professionals and organizations seeking
        international talent.
      </p>

      {/* Resume Marketing Overview */}
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Spain Resume Marketing – Overview</h2>
        <p>
          The <strong className="text-black font-bold">Resume Marketing Program</strong> connects your
          professional profile with active job opportunities across Spain. We focus on skill-matching,
          profile visibility, and recruiter outreach to help you secure interviews with top employers.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Customized resume and cover letter as per Spanish employer expectations</li>
          <li>LinkedIn optimization for maximum recruiter engagement</li>
          <li>Profile submission to verified job portals and recruitment agencies in Spain</li>
          <li>Interview preparation support and follow-up guidance</li>
        </ul>
      </div>

      {/* Documents Required / Process */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Documents Required for Resume Marketing</h2>
        <p>To begin your Spain resume marketing process, you’ll need the following:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Updated Resume (in Word format)</li>
          <li>Professional Photograph</li>
          <li>Educational Certificates and Transcripts</li>
          <li>Work Experience Letters / Payslips</li>
          <li>Valid Passport Copy</li>
          <li>LinkedIn Profile Link (if available)</li>
        </ul>
        <p>
          VJC Overseas ensures your profile is presented in a professional and market-ready format to
          attract the right employers.
        </p>
      </div>

      {/* Key Industries in Spain */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Top Hiring Sectors in Spain</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Information Technology & Software Development</li>
          <li>Engineering & Manufacturing</li>
          <li>Hospitality and Tourism Management</li>
          <li>Finance and Business Services</li>
          <li>Healthcare and Life Sciences</li>
          <li>Education and Research</li>
        </ul>
        <p>
          Our resume marketing team strategically promotes your profile within these industries to
          enhance your chances of placement success.
        </p>
      </div>

      {/* Why Choose VJC Overseas */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Why Choose VJC Overseas for Resume Marketing in Spain?</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>10+ Years of Global Recruitment Marketing Experience</li>
          <li>Personalized Resume Enhancement & Profile Promotion</li>
          <li>Strong Network of Spanish Recruiters and Employers</li>
          <li>Comprehensive Follow-Up and Application Tracking</li>
          <li>High Success Rate in International Job Placement Assistance</li>
        </ul>
        <p>
          With VJC Overseas, you receive expert guidance and reliable support for every step of your job
          marketing journey.
        </p>
      </div>

      {/* Contact Section */}
      <div className="space-y-4 text-center">
        <h2 className="text-xl font-semibold">Start Your Resume Marketing for Spain Today!</h2>
        <p>
          Take your career to international heights with{" "}
          <strong className="text-black font-bold">VJC Overseas</strong>.
          Our experts are ready to help you connect with the best employers in Spain.
        </p>
        <p>
          Contact us today for a free consultation and begin your Spain Resume Marketing Journey with confidence.
        </p>
      </div>
    </div>
  );
};

export default SpainResumeMarketing;