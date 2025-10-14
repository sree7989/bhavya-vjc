import React from "react";
import Image from "next/image";

const PortugalInvestorVisa = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10 font-[Times_New_Roman]">
      <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
        Portugal Investor Visa - <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      {/* Image and Intro Text Side by Side */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <Image
            src="/potugalinvestcontent.png"
            alt="canada permanent residence Guidance by VJC Overseas"
            width={400}
            height={100}
            className=""
            priority
            unoptimized
          />
        </div>

        {/* Text */}
        <div className="md:w-3/4">
          <p className="mb-4">
            Welcome to <span className="text-orange-500">VJC Overseas</span>, your trusted partner in obtaining the
            Portugal Investor Visa (Golden Visa) and unlocking exclusive opportunities for residency, business, and
            investment in one of Europe’s most attractive and dynamic countries. Recognized among the
            <a href="https://www.vjcoverseas.com" className="font-bold text-blue-900"> Best Visa Immigration Consultants</a>,
            we ensure a smooth process.
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Why Choose Portugal for Investment and Residency?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Access to the EU Market:</strong> Portugal provides seamless access to a market of over 500 million people.</li>
        <li><strong>High Quality of Life:</strong> Excellent healthcare, stunning landscapes, and a mild Mediterranean climate.</li>
        <li><strong>Tax Benefits:</strong> Attractive incentives, including the Non-Habitual Resident (NHR) tax regime.</li>
        <li><strong>Political Stability and Safety:</strong> One of the safest countries in Europe with a low crime rate.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Investment Options for the Portugal Investor Visa</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Real Estate Investment:</strong> Minimum €280,000 (low-density) or €500,000 (high-density) properties.</li>
        <li><strong>Capital Transfer:</strong> Minimum €1.5 million into Portuguese banks or investment funds.</li>
        <li><strong>Job Creation:</strong> Create at least 10 jobs in Portugal.</li>
        <li><strong>Research & Development Investment:</strong> Minimum €500,000 in scientific research or technology.</li>
        <li><strong>Venture Capital Investment:</strong> Minimum €500,000 in Portuguese startups or venture funds.</li>
        <li><strong>Donations to Cultural Preservation:</strong> Minimum €250,000 in cultural projects. For investors, this falls under the
          <a href="https://www.vjcoverseas.com/investor-visas" className="font-bold text-blue-900"> Investor Visa Program</a>.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Benefits of the Portugal Investor Visa</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Family Reunification:</strong> Bring your spouse and dependent family members.</li>
        <li><strong>Permanent Residency & Citizenship:</strong> Apply for permanent residency or citizenship after 5 years.</li>
        <li><strong>Schengen Area Access:</strong> Visa-free travel across 27 European countries.</li>
        <li><strong>No Need to Live Full-Time:</strong> Only 7 days per year required to maintain residency.</li>
        <li><strong>Education & Healthcare:</strong> Access Portugal’s high-quality healthcare and education systems.</li>
        <li><strong>Business Opportunities:</strong> Open businesses, invest in stocks, and explore EU markets with
          <a href="https://www.vjcoverseas.com/investor-visas" className="font-bold text-blue-900"> Golden Visa Programs</a>.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Why <span className="text-orange-500">VJC Overseas</span>?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Expert Guidance:</strong> Assistance through the complex application process.</li>
        <li><strong>Tailored Solutions:</strong> Customized investment strategies for different goals.</li>
        <li><strong>Comprehensive Support:</strong> From investment selection to obtaining residency.</li>
        <li><strong>Fast-Track Processing:</strong> Strong connections for quick and efficient application approval.</li>
        <li>With our specialized team, we focus on helping clients successfully apply for the
          <a href="https://www.vjcoverseas.com/investor-visas/portugal" className="font-bold text-blue-900"> Portugal Investor Visa</a>.
        </li>
      </ul>

      <div className="text-center mt-8">
        <h2 className="text-xl font-bold text-orange-500">Get Started Today</h2>
        <p className="mt-4">
          Ready to secure your Portugal residency? Contact <span className="text-orange-500">VJC Overseas</span> today for a free consultation and explore the best investment options for you.
        </p>
      </div>
    </div>
  );
};

export default PortugalInvestorVisa;
