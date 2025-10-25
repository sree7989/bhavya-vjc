"use client";

import Image from "next/image";
import Link from "next/link";

export default function NovaScotiaPNP() {
  return (
    <div className="px-4 sm:px-4 py-10 max-w-6xl mx-auto text-justify text-base sm:text-[1.05rem] leading-6 text-gray-800">
      <p className="text-gray-800 text-2xl font-medium">
        <strong>
          Immigrate to Canada Through the Nova Scotia Provincial Nominee Program (NSPNP) – With{" "}
          <span className="text-orange-500">VJC Overseas</span>
        </strong>
      </p>

      {/* Image Section */}
      <div className="flex flex-col lg:flex-row items-center mt-4 gap-6 mb-6">
        <div className="relative group cursor-pointer w-full lg:w-[2500px] h-auto">
          <Image
            src="/Nova-Scotia-New.jpg"
            width={500}
            height={300}
            alt="Nova Scotia Immigration Canada"
            title="Nova Scotia PNP – VJC Overseas"
            className="transition-transform duration-300 group-hover:scale-105"
            priority
            unoptimized
          />
          <span className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Nova Scotia PNP
          </span>
        </div>
      </div>

      {/* Intro */}
      <p>
        Nova Scotia, one of Canada's most picturesque and opportunity-rich provinces, offers an excellent pathway to permanent residence through the Nova Scotia Provincial Nominee Program (NSPNP). This program is specially designed to attract skilled workers, international graduates, and entrepreneurs who can strengthen the province’s economy while building a secure future in Canada. With expert guidance from <span className="text-orange-500">
          <Link href="https://www.vjcoverseas.com">VJC Overseas</Link>
        </span>, individuals can explore this opportunity with confidence.
      </p>

      <p className="mt-2">
        If you are planning to settle in Canada, the <span className="text-orange-500">
          <Link href="https://www.vjcoverseas.com/pr-visas/canada-pr-provincial-nominee-program">Canada PNP Program</Link>
        </span> is one of the most reliable options. Nova Scotia’s immigration streams are efficient, targeted, and tailored to meet the needs of both the applicants and the local labour market.
      </p>

      {/* What is NSPNP */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">What is the Nova Scotia PNP (NSPNP)?</h2>
        <p>
          The Nova Scotia Nominee Program allows the province to nominate candidates for permanent residence who fulfill specific economic and demographic requirements. Once nominated, applicants can apply to Immigration, Refugees and Citizenship Canada (IRCC) for a <span className="text-orange-500">
            <Link href="https://www.vjcoverseas.com/pr-visas/canada-pr">Canada PR Visa</Link>
          </span>.
        </p>
        <p className="mt-2">
          The NSPNP operates through both Express Entry-aligned and non-Express Entry streams, offering flexibility for applicants with different skill levels, professional backgrounds, and qualifications. Many applicants work with <span className="text-orange-500">
            <Link href="https://www.vjcoverseas.com/pr-visas">PR Visa Consultants</Link>
          </span> to ensure they apply under the most suitable stream.
        </p>
      </section>

      {/* Key Streams */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">Key Streams Under the NSPNP</h2>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>
            <strong>Nova Scotia Labour Market Priorities Stream:</strong> Directly linked to Express Entry, this stream allows the province to select candidates from the federal pool based on its labour needs.
          </li>
          <li>
            <strong>Skilled Worker Stream:</strong> For individuals with a permanent, full-time job offer from a Nova Scotia employer in high-demand occupations.
          </li>
          <li>
            <strong>Occupation in Demand Stream:</strong> Specifically targets intermediate-skilled workers in fields such as healthcare support and transportation.
          </li>
          <li>
            <strong>International Graduates In-Demand Stream:</strong> Open to recent graduates from recognized Nova Scotia institutions with job offers in key sectors.
          </li>
          <li>
            <strong>Entrepreneur and Graduate Entrepreneur Streams:</strong> For individuals interested in establishing or managing a business in Nova Scotia.
          </li>
        </ul>
        <p className="mt-2">
          For those considering long-term settlement, the <span className="text-orange-500">
            <Link href="https://www.vjcoverseas.com/pr-visas/canada-pr-provincial-nominee-program/canada-nova-scotia">Canada Nova Scotia PR</Link>
          </span> pathway is highly appealing due to its balance of lifestyle, affordability, and career opportunities.
        </p>
      </section>

      {/* Process */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">NSPNP Application Process</h2>
        <ol className="list-decimal list-inside ml-4 space-y-1">
          <li><strong>Identify Your Stream:</strong> Review eligibility based on education, work experience, and job offers.</li>
          <li><strong>Submit an Expression of Interest (EOI):</strong> Required for certain streams like the Entrepreneur Program.</li>
          <li><strong>Invitation to Apply (ITA):</strong> If selected, candidates receive an ITA to apply at the provincial level.</li>
          <li><strong>Provincial Nomination:</strong> A nomination adds 600 CRS points to Express Entry applicants.</li>
          <li><strong>Permanent Residency Application:</strong> With nomination, submit your PR application to IRCC.</li>
        </ol>
      </section>

      {/* Why Nova Scotia */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">Why Choose Nova Scotia?</h2>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Strong job demand in healthcare, tech, and logistics</li>
          <li>Coastal lifestyle with affordable living standards</li>
          <li>Multicultural and welcoming communities</li>
          <li>Excellent support for families and international graduates</li>
        </ul>
        <p className="mt-2">
          Whether you’re applying independently or through the help of <span className="text-orange-500">
            <Link href="https://www.vjcoverseas.com">Best Visa Immigration Consultants</Link>
          </span>, the Nova Scotia PNP opens doors to long-term success in Canada.
        </p>
      </section>

      {/* Final Thoughts */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">Final Thoughts</h2>
        <p>
          Nova Scotia’s PNP offers an efficient and secure route to Canadian permanent residency. With multiple immigration streams, flexible options, and high demand for skilled professionals, this program is a great choice for individuals looking to build a future in Canada.
        </p>
        <p className="mt-2">
          If you’re ready to begin your journey, partner with <strong>VJC Overseas</strong> — one of the most trusted names in Canadian immigration. Their team of experts ensures you take the right steps toward achieving your dream of becoming a permanent resident in Canada.
        </p>
      </section>
    </div>
  );
}