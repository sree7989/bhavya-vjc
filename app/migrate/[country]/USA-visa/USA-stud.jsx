import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MigrateToUSA = () => {
  return (
    <div className="m-2 p-2" style={{
      fontFamily: "Times New Roman",
      backgroundColor: 'white',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <h2 className="text-2xl font-bold text-center mt-4 mb-6">Migrate to the United States – <span className="text-red-600">Your American Dream Starts Here</span></h2>

      <p className="mb-6 m-2">The United States of America has long been the top destination for individuals seeking a better life, global career opportunities, world-class education, and long-term security. Whether you’re a skilled professional, student, entrepreneur, or family — migrating to the U.S. can open the door to a future full of possibilities.</p>

      <p className="mb-6 m-2 font-semibold">Now is the best time to take the leap and turn your American Dream into reality.</p>

      <p className="mb-6 m-2">If you are aspiring to secure a better future, <Link href="https://www.vjcoverseas.com/"><span style={{ color: 'orange' }}><strong>VJC Overseas</strong></span></Link> can guide you step by step in your U.S. immigration journey.</p>

      <div className="relative p-4 bg-gradient-to-r my-10 from-orange-100 to-sky-100 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-fit mx-auto">
        <Link href="https://www.vjcoverseas.com/migrate/united-states">
          <Image
            src="/migrate/migrate-usa.png"
            alt="Migrate - Apply Now"
            width={900}
            height={630}
            className="w-[22rem] lg:w-[31rem] h-[16rem] lg:h-[20rem] items-center rounded-xl"
            priority
            unoptimized
          />
        </Link>
      </div>

      <div className="mt-4 ml-2">
        <a href="https://www.vjcoverseas.com/migrate/united-states" style={{ color: 'orange', fontWeight: 'bold', fontSize: '18px', textDecoration: 'none' }}>
          Migrate - Apply Now
        </a>
      </div>

      <h3 className='text-sky-800 italic mb-4 m-2'>Why Migrate to the USA?</h3>
      <ul className='mb-6 ml-8 list-disc'>
        <li><b>Global Job Market:</b> High demand for talent in IT, healthcare, finance, engineering, and more.</li>
        <li><b>Top Universities & Research:</b> If you aim to <Link href="https://www.vjcoverseas.com/study-abroad/usa"><span style={{ color: 'orange' }}><strong>Study in USA</strong></span></Link>, the U.S. offers access to Ivy League institutions and globally ranked universities.</li>
        <li><b>Path to Permanent Residency (Green Card):</b> The country offers multiple legal pathways that lead to <Link href="https://www.vjcoverseas.com/pr-visas/usa-green-card"><span style={{ color: 'orange' }}><strong>US Permanent Residency</strong></span></Link>, ensuring long-term stability for qualified applicants.</li>
        <li><b>Cultural Diversity & Freedom:</b> Thrive in a multicultural, democratic society that embraces freedom of expression and diverse lifestyles.</li>
        <li><b>High Earning Potential:</b> Earn in USD with access to excellent career development in one of the world’s strongest economies.</li>
      </ul>

      <h3 className='text-sky-800 italic mb-4 m-2'>Popular U.S. Immigration Options</h3>

      <h4 className='font-bold mb-2 m-2'>Work-Based Visas</h4>
      <ul className='mb-6 ml-8 list-disc'>
        <li><b><Link href="https://www.vjcoverseas.com/work-abroad/usa-h1b-visa"><span style={{ color: 'orange' }}>H-1B Work Visa</span></Link>:</b> This is one of the most sought-after visas for skilled professionals in sectors like technology, engineering, and finance.</li>
        <li><b>L-1 Visa:</b> Ideal for intra-company transfers of executives and managers.</li>
        <li><b>O-1 Visa:</b> For individuals with extraordinary ability in sciences, arts, education, business, or athletics.</li>
      </ul>

      <h4 className='font-bold mb-2 m-2'>Student Visas</h4>
      <ul className='mb-6 ml-8 list-disc'>
        <li><b>F-1 Visa:</b> For academic studies at U.S. colleges and universities.</li>
        <li><b>M-1 Visa:</b> For vocational or non-academic training programs.</li>
      </ul>

      <h4 className='font-bold mb-2 m-2'>Family-Based Immigration</h4>
      <p className='mb-6 m-2'>Sponsored by U.S. citizen or permanent resident relatives, making it easier for families to reunite.</p>

      <h4 className='font-bold mb-2 m-2'>Investor & Entrepreneur Pathways</h4>
      <ul className='mb-6 ml-8 list-disc'>
        <li><b>EB-5 Investor Visa:</b> For individuals investing in U.S.-based businesses and generating employment.</li>
        <li><b>Start-Up Visa Programs:</b> Launched through innovative business partnerships and pilot programs.</li>
      </ul>

      <h4 className='font-bold mb-2 m-2'>Green Card Process</h4>
      <p className='mb-6 m-2'>Obtain permanent resident status through employment-based categories, family sponsorship, humanitarian grounds like asylum, or the Diversity Visa Lottery. <strong>VJC Overseas</strong> offers expert legal support for a smooth application process toward your <strong>US Permanent Residency</strong>.</p>

      <h3 className='text-sky-800 italic mb-4 m-2'>Your U.S. Migration Process – Step by Step</h3>
      <ul className='mb-6 ml-8 list-decimal'>
        <li>Free Profile Assessment – Know your eligibility and success rate.</li>
        <li>Select the Right Visa Category – Based on your profile and goals.</li>
        <li>Document Preparation & Filing – With full legal accuracy.</li>
        <li>Interview Preparation – Get expert coaching for consulate or embassy interviews.</li>
        <li>Visa Approval & Pre-departure Guidance – With <strong>VJC Overseas</strong> by your side, fly with confidence.</li>
      </ul>

      <h3 className='text-sky-800 italic mb-4 m-2'>Who Can Apply?</h3>
      <ul className='mb-6 ml-8 list-disc'>
        <li>IT Professionals, Healthcare Workers, and Engineers</li>
        <li>Entrepreneurs and Investors</li>
        <li>International Students</li>
        <li>Skilled Tradespeople and Artists</li>
        <li>Families looking for relocation</li>
      </ul>

      <p className='mb-6 m-2 font-semibold'>If you have talent, ambition, and a dream — the USA wants you. And <Link href="https://www.vjcoverseas.com/"><span style={{ color: 'orange' }}><strong>Best Visa Immigration Consultants</strong></span></Link>, is here to turn that dream into a reality.</p>
    </div>
  );
};

export default MigrateToUSA;