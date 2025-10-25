import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Newzepr = () => {
  return (
    <div className="m-2 p-4 bg-white rounded-lg shadow-md" style={{ fontFamily: "Times New Roman" }}>
      <div className="mb-6 text-center">
        <h3 className="text-2xl my-6 font-semibold text-black">
          Migrate to New Zealand – <span className="text-orange-600">Live, Work & Thrive in Aotearoa</span>
        </h3>
        <p className="text-sky-600 mt-2 font-bold text-lg">
          Start Fresh in a Peaceful, Progressive, and Naturally Stunning Country
        </p>
      </div>

      <p className="mb-4 text-gray-700">
        Dreaming of a fresh start in a peaceful, progressive, and naturally stunning country?{" "}
        <Link href="https://www.vjcoverseas.com/pr-visas/new-zealand-pr" className="text-orange-600 font-semibold">
          New Zealand Permanent Residency
        </Link>{" "}
        opens the door to world-class career opportunities, excellent education, and a safe lifestyle for you and your family. New Zealand offers more than just breathtaking landscapes — it’s a place to build a future, raise a family, and grow your career.
      </p>
      <p className="mb-4 text-gray-700">
        If you’re looking for guidance from{" "}
        <Link href="https://www.vjcoverseas.com/" className="text-orange-600 font-semibold">
          Best Visa Immigration Consultants
        </Link>
        , our experts at{" "}
        <Link href="https://www.vjcoverseas.com/" className="text-orange-600 font-semibold">
          VJC Overseas
        </Link>{" "}
        ensure your migration journey is smooth, transparent, and stress-free from start to finish.
      </p>
      <p className="mb-6 text-gray-700">
        From its stable economy and high-quality education to its world-class healthcare and safe society, migrating to New Zealand can be one of the best decisions of your life.
      </p>

      <div className="relative p-4 bg-gradient-to-r my-10 from-orange-100 to-sky-100 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-fit mx-auto">
        <Image
          src="/migrate/migrate-newzealand.png"
          alt="Migrate - Apply Now"
          width={900}
          height={630}
          className="w-[22rem] lg:w-[31rem] h-[16rem] lg:h-[20rem] items-center rounded-xl"
          priority
          unoptimized
        />
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-6 mb-6">
        <div>
          <h3 className='text-orange-600 font-bold text-lg mb-3 mt-4 lg:mt-0'>Why Choose New Zealand?</h3>
          <ul className='list-disc ml-6 text-gray-800'>
            <li><span className="text-sky-600 font-medium">Stunning Natural Beauty:</span> Mountains, beaches, and national parks</li>
            <li><span className="text-sky-600 font-medium">Safe & Peaceful:</span> Low crime rates and a welcoming, multicultural society</li>
            <li><span className="text-sky-600 font-medium">World-Class Healthcare & Education:</span> Affordable and accessible for residents</li>
            <li><span className="text-sky-600 font-medium">Demand for Skilled Workers:</span> Healthcare, engineering, IT, trades</li>
            <li><span className="text-sky-600 font-medium">Pathway to Residency:</span> Multiple visa options for long-term settlement</li>
          </ul>
        </div>
      </div>

      <h3 className='text-orange-600 font-bold text-lg mb-3'>Popular New Zealand Visa Options</h3>
      <ul className='list-disc ml-6 text-gray-800 mb-6'>
        <li><b>Skilled Migrant Category Resident Visa:</b> For skilled professionals who meet points-based criteria (EOI + invitation).</li>
        <li><b>Accredited Employer Work Visa (AEWV):</b> For those with a job offer from an accredited employer.</li>
        <li><b>Student Visa:</b> Study in{" "}
          <Link href="https://www.vjcoverseas.com/study-abroad/newzealand" className="text-orange-600 font-semibold">
            Study in New Zealand
          </Link>{" "}
          full-time and work part-time; work full-time during semester breaks.
        </li>
        <li><b>Family & Partner Visas:</b> For spouses, partners, children, or parents of citizens or residents.</li>
        <li><b>Entrepreneur & Investor Visas:</b> For those starting or investing in NZ businesses.</li>
      </ul>

      <h3 className='text-orange-600 font-bold text-lg mb-3'>Who Can Apply to Migrate to New Zealand?</h3>
      <ul className='list-disc ml-6 text-gray-800 mb-6'>
        <li>Aged 18–55 years</li>
        <li>Qualified in a high-demand occupation</li>
        <li>Meet English language requirements (IELTS/PTE)</li>
        <li>Score well in Skilled Migrant points system</li>
        <li>Have a job offer or seek education in NZ</li>
      </ul>

      <h3 className='text-orange-600 font-bold text-lg mb-3'>New Zealand Migration Process – Step-by-Step</h3>
      <ol className='list-decimal ml-6 text-gray-800 mb-6'>
        <li>Profile Evaluation & Points Calculation</li>
        <li>Skill Assessment or Qualification Recognition</li>
        <li>Submit Expression of Interest (EOI)</li>
        <li>Receive Invitation to Apply (ITA)</li>
        <li>Visa Application with Health & Police Checks</li>
        <li>Visa Grant & Relocation Support</li>
      </ol>

      <h3 className='text-orange-600 font-bold text-lg mb-3'>How We Help</h3>
      <p className='mb-3 text-gray-700'>
        At <b className="text-sky-600">VJC Overseas</b>, we simplify your migration journey to New Zealand:
      </p>
      <ul className='list-disc ml-6 text-gray-800 mb-6'>
        <li>Profile Evaluation & Migration Pathway Planning</li>
        <li>Complete Visa Documentation Support</li>
        <li>IELTS/PTE Test Preparation</li>
        <li>CV Building & Job Search Assistance (if needed)</li>
        <li>Pre-departure Briefing & Post-arrival Support</li>
      </ul>

      <h3 className='text-orange-600 font-bold text-lg mb-3'>Ready to Migrate to New Zealand?</h3>
      <p className='mb-4 text-gray-700'>
        Whether you are applying for skilled migration, a student visa, or a{" "}
        <Link href="https://www.vjcoverseas.com/migrate/new-zealand/work-visa" className="text-orange-600 font-semibold">
          New Zealand Work visa
        </Link>
        , our experienced team will guide you at every step. Now is the perfect time to begin your journey to a better life in New Zealand. Get a <b className="text-sky-600">free eligibility check</b>, explore your best visa options, and let our experts take care of the rest.
      </p>
    </div>
  )
}

export default Newzepr