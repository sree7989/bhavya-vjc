import React from 'react';
import Image from 'next/image';

const MigrateToUK = () => {
  return (
    <div className="m-2 p-2" style={{
      fontFamily: "Times New Roman",
      backgroundColor: 'white',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <h2 className="text-2xl font-bold text-center mt-4 mb-6">Migrate to the United Kingdom – <span className="text-red-600">Your British Dream Starts Here</span></h2>

      <p className="mb-6 m-2">The United Kingdom remains one of the most desirable destinations for individuals seeking global exposure, better career prospects, and a world-class lifestyle. With a rich history, multicultural society, and high standard of living, the UK is a top choice for students, skilled professionals, entrepreneurs, and families aiming to start a new life abroad. At <a href="https://www.vjcoverseas.com/" className="text-orange-500">VJC Overseas</a>, we guide aspirants through every step of their UK migration journey—from choosing the right visa pathway to post-arrival assistance.</p>

      <p className="mb-6 m-2 font-semibold">Start your journey today with a free consultation and profile evaluation.</p>

      <div className="relative p-4 bg-gradient-to-r my-10 from-orange-100 to-sky-100 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-fit mx-auto">
        <Image
          src="/migrate/migrate-uk.png"
          alt="Migrate to UK - Apply Now"
          width={900}
          height={630}
          className="w-[22rem] lg:w-[31rem] h-[16rem] lg:h-[20rem] items-center rounded-xl"
          priority
          unoptimized
        />
      </div>

      <h3 className='text-sky-800 italic mb-4 m-2'>Why Migrate to the UK?</h3>
      <ul className='mb-6 ml-8 list-disc'>
        <li><b>Thriving Job Market:</b> The UK is home to booming sectors such as IT, healthcare, engineering, and finance.</li>
        <li><b>Prestigious Education System:</b> International students prefer to <a href="https://www.vjcoverseas.com/study-abroad/uk" className="text-orange-500">Study in UK</a> for its globally recognized institutions like Oxford, Cambridge, and Imperial College.</li>
        <li><b>Strong PR Opportunities:</b> Pathways like <a href="https://www.vjcoverseas.com/pr-visas/uk-pr" className="text-orange-500">UK Permanent Residency</a> offer long-term settlement and citizenship options.</li>
        <li><b>Access to Public Healthcare:</b> Get covered under the NHS—the UK’s comprehensive national healthcare system.</li>
        <li><b>Cosmopolitan Lifestyle:</b> Live in a country that celebrates diversity, history, and innovation.</li>
      </ul>

      <h3 className='text-sky-800 italic mb-4 m-2'>Popular UK Immigration Pathways</h3>

      <h4 className='font-bold mb-2 m-2'>Work-Based Visas</h4>
      <ul className='mb-6 ml-8 list-disc'>
        <li><b>Skilled Worker Visa:</b> For qualified professionals with a job offer in the UK.</li>
        <li><b>Health and Care Worker Visa:</b> For doctors, nurses, and social care professionals.</li>
        <li><b>Global Talent Visa:</b> For individuals showing exceptional promise in research, arts, or tech.</li>
      </ul>
      <p className="mb-6 m-2">Explore more about <a href="https://www.vjcoverseas.com/work-abroad/united-kingdom-work-permit" className="text-orange-500">UK Skilled Immigration</a> to find the most suitable work visa option for your profile.</p>

      <h4 className='font-bold mb-2 m-2'>Student Visas</h4>
      <ul className='mb-6 ml-8 list-disc'>
        <li><b>Student Visa:</b> For long-term academic programs at UK institutions.</li>
        <li><b>Short-term Study Visa:</b> Designed for English language learners or short-duration courses.</li>
      </ul>

      <h4 className='font-bold mb-2 m-2'>Family-Based Immigration</h4>
      <p className='mb-6 m-2'>Bring your partner, children, or dependents through family reunification or settlement visa routes.</p>

      <h4 className='font-bold mb-2 m-2'>Business & Investor Visas</h4>
      <ul className='mb-6 ml-8 list-disc'>
        <li><b>Innovator Founder Visa:</b> For those planning to establish innovative ventures in the UK.</li>
        <li><b>Global Business Mobility:</b> For international companies transferring staff to the UK.</li>
      </ul>

      <h3 className='text-sky-800 italic mb-4 m-2'>Step-by-Step UK Migration Process</h3>
      <ul className='mb-6 ml-8 list-decimal'>
        <li>Free Eligibility Check – Our experts evaluate your profile and suggest suitable visa options.</li>
        <li>Choose the Right Pathway – Based on your profession, education, and goals.</li>
        <li>Document Preparation & Filing – Get accurate, timely documentation with expert support.</li>
        <li>Visa Interview Support – Practice and prepare for consulate-level interviews.</li>
        <li>Visa Approval & Relocation Help – Receive assistance with pre-departure planning and post-landing guidance.</li>
      </ul>
      <p className="mb-6 m-2">Looking for the <a href="https://www.vjcoverseas.com/" className="text-orange-500">Best Visa Immigration Consultants</a>? Choose <b>VJC Overseas</b> for expert guidance, high success rates, and end-to-end support.</p>

      <h3 className='text-sky-800 italic mb-4 m-2'>Who Can Apply?</h3>
      <ul className='mb-6 ml-8 list-disc'>
        <li>Skilled professionals in healthcare, engineering, IT, and finance</li>
        <li>International students pursuing higher education</li>
        <li>Entrepreneurs with scalable business ideas</li>
        <li>Families wishing to relocate and settle</li>
        <li>Anyone seeking a better future in a stable and prosperous country</li>
      </ul>
      <p className='mb-6 m-2 font-semibold'>The UK offers a bright and secure future for those who meet the eligibility criteria and are ready to take the next step.</p>

      <h3 className='text-sky-800 italic mb-4 m-2'>Thinking Short-Term? Visit the UK with Confidence</h3>
      <p className='mb-6 m-2'>Planning a vacation, attending a conference, or visiting family? Apply for a <a href="https://www.vjcoverseas.com/visit-visas/uk" className="text-orange-500">UK Visit Visa</a> with <b>VJC Overseas</b> and explore the UK hassle-free.</p>

      <h3 className='text-sky-800 italic mb-4 m-2'>Let <b>VJC Overseas</b> Be Your Trusted UK Migration Partner</h3>
      <p className='mb-6 m-2'>With years of experience and a commitment to excellence, <b>VJC Overseas</b> has helped thousands achieve their migration goals. Whether you're applying for a study visa, skilled work permit, or permanent residency, our team offers personalized solutions and unwavering support. Get in touch today and take the first step toward your UK future.</p>
    </div>
  );
};

export default MigrateToUK;