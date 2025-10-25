import React from "react";
import Image from 'next/image';
import Link from "next/link";

const StudyInIreland = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10" style={{ fontFamily: 'Times New Roman, serif' }}>
      <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
        Study in Ireland - <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-10 mb-10">
        <div className="w-full md:w-2/3">
          <p className="mb-4">
            Are you dreaming of studying abroad? Ireland is one of the most popular destinations for international students due to its
            world-class education system, rich culture, and welcoming environment. At <b>VJC Overseas</b>, we provide professional guidance to help you explore every opportunity for your academic journey. Whether you are seeking expert advice from{" "}
            <Link href="https://www.vjcoverseas.com/" className="text-orange-500">Best Visa Immigration Consultants</Link> or looking for end-to-end support for your student visa, our team ensures a seamless experience.
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <Image
            src="/study-in-ireland.jpg"
            alt="Study in Ireland - Vjc Overseas"
            width={500}
            height={500}
            priority
            unoptimized
          />
        </div>
      </div>

      <h2 className="text-xl font-bold mt-4 mb-2">Why Choose Ireland for Your Higher Studies?</h2>
      <p className="mb-4">
        Ireland is home to some of the world’s top universities and colleges, offering a wide range of academic programs, from
        undergraduate to postgraduate studies. The country is renowned for its rich cultural heritage, modern infrastructure, and a strong
        focus on research and innovation. Ireland also has a booming economy, creating abundant opportunities for international students
        in terms of work and career growth. For students seeking professional assistance, our{" "}
        <Link href="https://www.vjcoverseas.com/study-abroad/" className="text-orange-500">Study Visa Consultants</Link> can help you understand the application process, requirements, and documentation for studying in Ireland.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2">Top Universities and Colleges in Ireland</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>Trinity College Dublin (TCD)</strong> – Prestigious university offering programs in humanities, sciences, business, and engineering.</li>
        <li><strong>University College Dublin (UCD)</strong> – Strong research programs in business, engineering, and social sciences.</li>
        <li><strong>University College Cork (UCC)</strong> – Vibrant campus with excellent arts, humanities, and science programs.</li>
        <li><strong>Dublin City University (DCU)</strong> – Modern institution focusing on technology, business, and communications.</li>
        <li><strong>National University of Ireland Galway (NUIG)</strong> – Respected institution with a strong emphasis on research.</li>
        <li><strong>Technological University Dublin (TU Dublin)</strong> – Practical programs with strong industry connections.</li>
      </ul>
      <p className="mb-4">
        Students interested in{" "}
        <Link href="https://www.vjcoverseas.com/study-abroad/ireland" className="text-orange-500">Ireland Study Abroad Programs</Link> can explore a variety of courses that align with their career goals, while also benefiting from a multicultural learning environment.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2">Fees Structure for Studying in Ireland</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>Undergraduate Programs:</strong> €9,000 – €25,000 per year</li>
        <li><strong>Postgraduate Programs:</strong> €12,000 – €30,000 per year</li>
        <li><strong>English Language Courses:</strong> €1,000 – €2,500 per month</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">Cost of Living in Ireland</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>Accommodation:</strong> €400 – €1,200 per month</li>
        <li><strong>Food and Groceries:</strong> €200 – €400 per month</li>
        <li><strong>Transportation:</strong> €100 – €150 per month</li>
        <li><strong>Miscellaneous Expenses:</strong> €150 – €300 per month</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">Work Opportunities in Ireland for International Students</h2>
      <p className="mb-4">
        International students can work part-time during academic terms (up to 20 hours/week) and full-time during holidays (up to 40
        hours/week). Ireland is home to tech giants like Google, Facebook, and Apple, offering excellent job opportunities.
      </p>

      <h2 className="text-xl font-bold mt-4 mb-2">Post-Graduation Work Opportunities in Ireland</h2>
      <p className="mb-4">
        Graduates can stay in Ireland for up to 24 months (for STEM) or 12 months (for non-STEM) under the Third Level Graduate Scheme to
        seek full-time employment.
      </p>

      <h3 className="text-xl font-bold mt-4 mb-2">Visa Requirements:</h3>
      <p className="mb-4">
        Securing an{" "}
        <Link href="https://www.vjcoverseas.com/study-abroad/ireland" className="text-orange-500">Ireland Student Visa Assistance</Link> ensures a smooth process. Key requirements include:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Letter of acceptance from an Irish institution.</li>
        <li>Completed visa application form and payment proof.</li>
        <li>Valid passport.</li>
        <li>Proof of sufficient funds (€7,000 minimum).</li>
        <li>Private medical insurance proof.</li>
        <li>Academic transcripts and qualifications.</li>
        <li>English proficiency test scores (e.g., IELTS/TOEFL).</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">Why Choose <span className="text-orange-500">VJC Overseas</span> to Study in Ireland?</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>University Selection:</strong> Tailored guidance based on your career goals.</li>
        <li><strong>Visa Assistance:</strong> Help with applications and documentation.</li>
        <li><strong>Accommodation Support:</strong> Assistance in finding affordable living arrangements.</li>
        <li><strong>Scholarship Guidance:</strong> Information on financial aid options.</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">Start Your Journey to Ireland Today</h2>
      <p className="mb-4">
        Studying in Ireland provides a world-class education and excellent career prospects. Contact{" "}
        <Link href="https://www.vjcoverseas.com/" className="text-orange-500">VJC Overseas</Link> today to take the first step toward your dream of studying abroad and explore the best <b>Study Abroad Programs</b> with expert guidance on your <b>Ireland Student Visa Assistance</b>.
      </p>

      {/* Dark bold keywords without links */}
      <div className="hidden">
        <b>Best Visa Immigration Consultants</b>
        <b>VJC Overseas</b>
        <b>Study Visa Consultants</b>
        <b>Ireland Student Visa Assistance</b>
        <b>Ireland Study Abroad Programs</b>
      </div>
    </div>
  );
};

export default StudyInIreland;