"use client";

import Image from "next/image";

export default function CanadaFSTP() {
  return (
    <div className="px-4 sm:px-4 py-10 max-w-6xl mx-auto text-justify text-base sm:text-[1.rem] leading-6 text-gray-800">
      <p className="text-gray-800 text-2xl font-medium">
        <strong>
          Federal Skilled Trades Program (FSTP) – Skilled Tradespeople, Your Future in Canada Starts with{" "}
          <span className="text-orange-500">VJC Overseas</span>
        </strong>
        <br />
      </p>

      <div className="flex flex-col lg:flex-row items-center gap-6 mb-6">
        {/* Image Section */}
        <div className="relative group cursor-pointer w-full lg:w-[1300px] h-auto">
          <Image
            src="/canadapr-fstp.webp"
            width={500}
            height={300}
            alt="Federal Skilled Trades Program - VJC Overseas"
            title="Federal Skilled Trades Program"
            className=" transition-transform duration-300 group-hover:scale-105"
            priority
            unoptimized
          />
          <span className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            FSTP Canada
          </span>
        </div>

        {/* Intro */}
        <p>
          <br />
          Canada is experiencing a growing demand for skilled trades professionals across multiple industries. The Federal Skilled Trades Program is part of Canada’s Express Entry system, offering skilled workers the opportunity to settle permanently. At{" "}
          <span className="text-black-500 font-semibold">VJC Overseas</span>, we guide tradespeople through every stage of the immigration process.
        </p>
      </div>

      <div className="space-y-6">
        {/* What is FSTP */}
        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">What is the Federal Skilled Trades Program?</h2>
          <p>
            The <a href="https://www.vjcoverseas.com/pr-visas/canada-pr/canada-fstp" className="text-orange-500 font-semibold">FSTP Canada Permanent Residency</a> stream focuses on skilled trades, such as construction, maintenance, manufacturing, and industrial work. Unlike other federal programs, FSTP emphasizes practical skills rather than academic degrees, making it ideal for experienced professionals who hold trade certifications.
          </p>
        </section>

        {/* Eligible Occupations */}
        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">Eligible Occupations</h2>
          <p>Candidates in NOC TEER 2 or 3 trade occupations can apply. Some of the most in-demand roles include:</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Electricians</li>
            <li>Plumbers</li>
            <li>Welders</li>
            <li>Carpenters</li>
            <li>HVAC Technicians</li>
            <li>Mechanics</li>
            <li>Heavy-duty equipment operators</li>
            <li>Cooks and chefs</li>
            <li>Butchers and bakers</li>
          </ul>
          <p className="mt-2">
            If your occupation fits one of these categories, this program could be your pathway to a{" "}
            <a href="https://www.vjcoverseas.com/pr-visas/canada-pr" className="text-orange-500 font-semibold">Canada PR Visa</a>.
          </p>
        </section>

        {/* Eligibility */}
        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">FSTP Eligibility Requirements</h2>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Work Experience:</strong> Minimum 2 years of full-time work in a skilled trade within the last 5 years.</li>
            <li><strong>Job Offer or Certificate:</strong> Either a full-time job offer in Canada for at least one year or a Canadian trade certificate.</li>
            <li><strong>Language Proficiency:</strong> CLB 5 for speaking and listening, CLB 4 for reading and writing (IELTS or CELPIP).</li>
            <li><strong>Admissibility:</strong> Must be legally admissible and plan to live outside Quebec.</li>
          </ul>
        </section>

        {/* VJC Overseas Support */}
        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">How VJC Overseas Supports Your Journey</h2>
          <p>
            With <a href="https://www.vjcoverseas.com/pr-visas" className="text-orange-500 font-semibold">PR Visa Consultants</a> from VJC Overseas, your FSTP application is in expert hands:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li><strong>Profile Assessment:</strong> We evaluate your eligibility and advise on the best immigration pathway.</li>
            <li><strong>Trade Certification Guidance:</strong> Assistance with obtaining Canadian trade certificates.</li>
            <li><strong>Express Entry Profile Creation:</strong> Maximize your CRS score with a strong, professional profile.</li>
            <li><strong>End-to-End Support:</strong> From document preparation to final submission, we manage every detail.</li>
          </ul>
        </section>

        {/* Why Canada */}
        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">Why Choose Canada for Skilled Trades?</h2>
          <p>
            Canada offers competitive salaries, high demand for tradespeople, and a high quality of life. Skilled workers enjoy stable employment, opportunities for career growth, and the chance to bring their families under the immigration program. Working through{" "}
            <a href="https://www.vjcoverseas.com" className="text-orange-500 font-semibold">Best Visa Immigration Consultants</a> ensures your journey is smooth and reliable.
          </p>
        </section>

        {/* Final CTA */}
        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">Take the First Step</h2>
          <p>
            The Federal Skilled Trades Program is your gateway to permanent residence and long-term success in Canada. Let{" "}
            <a href="https://www.vjcoverseas.com" className="text-orange-500 font-semibold">VJC Overseas</a> guide you every step of the way with professional support, practical advice, and a tailored strategy for your future.
          </p>
          <p className="mt-2 font-semibold">
            Contact us today to start your Canadian immigration journey through FSTP and secure your place in a country with unlimited opportunities.
          </p>
        </section>

        {/* Bold Black Keywords Section */}
        <section className="mt-6">
          
        </section>
      </div>
    </div>
  );
}