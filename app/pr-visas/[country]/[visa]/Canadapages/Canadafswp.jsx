"use client";

import Image from "next/image";

export default function CanadaFSWP() {
  return (
    <div className="px-4 sm:px-4 py-10 max-w-6xl mx-auto text-justify text-base sm:text-[1.rem] leading-6 text-gray-800">
      {/* Intro Section */}
      <p className="text-gray-800 text-2xl font-medium">
        <strong>
          Federal Skilled Worker Program (FSWP) – Unlock Your Future in Canada with{" "}
          <span className="text-orange-500">VJC Overseas</span>
        </strong>
        <br />
      </p>

      <div className="flex flex-col lg:flex-row items-center gap-6 mt-2 mb-6">
        {/* Image Section */}
        <div className="relative group cursor-pointer w-full lg:w-[1200px] h-auto">
          <Image
            src="/canadapr--fswp.jpg"
            width={500}
            height={300}
            alt="Federal Skilled Worker Program - VJC Overseas"
            title="Federal Skilled Worker Program Canada"
            className=" transition-transform duration-300 group-hover:scale-105"
            priority
            unoptimized
          />
          <span className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            FSWP Canada
          </span>
        </div>

        <p>
          <br />
          Canada continues to attract skilled professionals from around the world who are looking for long-term growth and stability. 
          The Federal Skilled Worker Program is a trusted pathway for qualified individuals to achieve Canadian permanent residency. 
          At{" "}
          <span className="text-orange-500 font-semibold">
            <a href="https://www.vjcoverseas.com">VJC Overseas</a>
          </span>
          , we specialize in guiding applicants through every step of the FSWP process with expert care and precise support.
        </p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">What is the Federal Skilled Worker Program?</h2>
          <p>
            The Federal Skilled Worker Program <span className="text-orange-500"><a href="https://www.vjcoverseas.com/pr-visas/canada-pr/canada-fswp">FSWP Canada PR </a></span>
            is one of the three main immigration streams under Canada’s Express Entry system, alongside the Federal Skilled Trades Program (FSTP) and the Canadian Experience Class (CEC).
          </p>
          <p className="mt-2">
            FSWP targets skilled workers with foreign work experience, education, and language proficiency. 
            Applicants are assessed through a points-based system that evaluates key factors such as age, work experience, education, and language skills to determine eligibility and ranking.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">Why Choose the FSWP?</h2>
          <p>The FSWP is ideal for professionals who:</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Have relevant skilled work experience abroad</li>
            <li>Hold recognized educational qualifications</li>
            <li>Can communicate effectively in English or French</li>
            <li>Want the flexibility to live and work anywhere in Canada (except Quebec)</li>
          </ul>
          <p className="mt-2">
            This program also allows successful applicants to sponsor their spouse and dependent children, 
            making it suitable for families seeking long-term settlement.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">FSWP Eligibility Requirements</h2>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Skilled Work Experience:</strong> At least one year of full-time or equivalent part-time work in the past 10 years in a NOC TEER 0, 1, 2, or 3 occupation.
            </li>
            <li>
              <strong>Language Ability:</strong> Minimum CLB 7 in reading, writing, speaking, and listening on IELTS or CELPIP.
            </li>
            <li>
              <strong>Education:</strong> Secondary or post-secondary diploma/degree; foreign credentials must be verified via an Educational Credential Assessment (ECA).
            </li>
            <li>
              <strong>Proof of Funds:</strong> Sufficient financial resources to support yourself and family (unless already employed in Canada).
            </li>
            <li>
              <strong>Minimum Points:</strong> At least 67 out of 100 on Canada’s six-factor selection grid (age, education, work experience, language, adaptability, and job offer).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">How <span className="text-orange-500"><a href="https://www.vjcoverseas.com/pr-visas">PR Visa Consultants</a></span> from <span className="font-bold text-black">VJC Overseas</span> Support Your Application</h2>
          <p>
            At PR Visa Consultants from <span className="font-bold text-black">VJC Overseas</span>, 
            we offer complete support tailored to your profile:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li><strong>Eligibility Assessment:</strong> Determine your suitability for FSWP and other Canadian immigration programs.</li>
            <li><strong>Express Entry Profile Creation:</strong> Craft a competitive profile to maximize your CRS score and chances of receiving an Invitation to Apply (ITA).</li>
            <li><strong>Documentation & Application Support:</strong> Manage ECA, language tests, and all required documentation for submission.</li>
            <li><strong>Post-ITA Guidance:</strong> Assistance in preparing and submitting a complete PR application after receiving an ITA.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">Your Path to Canada</h2>
          <p>
            Canada provides exceptional opportunities for skilled professionals seeking career growth and a high quality of life. 
            The <span className="text-orange-500"><a href="https://www.vjcoverseas.com/pr-visas/canada-pr">Canada PR Visa</a></span> is your gateway to permanent residence, 
            and with <span className="text-orange-500"><a href="https://www.vjcoverseas.com">Best Visa Immigration Consultants</a></span> like <span className="font-bold text-black">VJC Overseas</span>, 
            you can navigate the process with confidence.
          </p>
          <p className="mt-2 font-semibold">
            Take the first step toward achieving your Canadian dream today. Contact{" "}
            <span className="font-bold text-black">VJC Overseas</span> 
            for personalized guidance and start your journey through the Federal Skilled Worker Program — 
            a pathway to stability, success, and a new life in Canada.
          </p>
        </section>
      </div>
    </div>
  );
}