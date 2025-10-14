import React from "react";
import Image from 'next/image';
import Link from "next/link";

const StudyInPoland = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10" style={{ fontFamily: 'Times New Roman, serif' }}>
      <h1 className="flex justify-center text-lg sm:text-2xl md:text-2xl font-bold mb-8 text-center whitespace-nowrap">
        Study in the Poland - <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      {/* Image and Intro Text Side by Side */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <Image
            src="/study-poland.jpg"
            alt="Poland Student Visa Guidance by VJC Overseas"
            width={700}
            height={200}
            className="w-full object-cover rounded-lg"
            priority
            unoptimized
          />
        </div>

        {/* Text */}
        <div className="mt-8 md:w-1/2 text-justify">
          <p>
            Poland, with its rich history, modern infrastructure, and globally recognized educational institutions,
            has emerged as a top destination for international students. Pursuing <Link href="https://www.vjcoverseas.com/study-abroad/poland" className="text-orange-500">Higher Education in Poland</Link> offers students the opportunity 
            to access quality programs at an affordable cost while experiencing a vibrant and multicultural environment. 
            At <strong>VJC Overseas</strong>, we guide students through every step, from selecting the right university 
            to assisting with visa and accommodation processes. If you are searching for the 
            <Link href="https://www.vjcoverseas.com/" className="text-orange-500"> Best Visa Immigration Consultants</Link>, 
            VJC Overseas provides professional guidance to ensure a seamless and successful study abroad journey.
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Why Study in Poland?</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Affordable Tuition Fees:</strong> High-quality education at a fraction of the cost compared to other European countries.</li>
        <li><strong>Globally Recognized Education:</strong> Universities such as the University of Warsaw and Jagiellonian University provide internationally accredited programs.</li>
        <li><strong>English-Taught Programs:</strong> A large number of courses are available in English, making it easier for international students to adapt.</li>
        <li><strong>Diverse Student Community:</strong> Poland attracts students from various countries, fostering a global learning environment.</li>
        <li><strong>EU Advantage:</strong> Graduates can live and work in other European Union countries, opening doors to global career opportunities.</li>
        <li><strong>Safe and Vibrant Student Life:</strong> Affordable living costs and a welcoming atmosphere make Poland ideal for international learners.</li>
      </ul>
      <p className="mt-2">
        Our <Link href="https://www.vjcoverseas.com/study-abroad/" className="text-orange-500">Study Visa Consultants</Link> can help you understand eligibility criteria 
        and guide you through the application process.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Fees in Polish Universities</h2>
      <p>
        Knowing tuition fees is essential before planning your studies in Poland:
      </p>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Undergraduate Programs:</strong> €2,000 – €6,000 per year</li>
        <li><strong>Postgraduate Programs:</strong> €3,000 – €10,000 per year</li>
        <li><strong>Doctoral Programs:</strong> €1,500 – €5,000 per year</li>
        <li><strong>Other Costs:</strong> Accommodation (€100–€700/month), Health Insurance (€50–€100/month), Application Fees (€50–€200)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Scholarships and Financial Aid</h2>
      <p>Polish universities and government programs provide a variety of scholarships:</p>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Polish Government Scholarships:</strong> Support for talented international students.</li>
        <li><strong>Erasmus+:</strong> Scholarships for EU and exchange students.</li>
        <li><strong>University-Specific Scholarships:</strong> Merit-based and need-based financial aid.</li>
      </ul>

      <div>
        <h2 className="text-xl font-semibold mt-4 mb-2 text-black">Poland Student Visa</h2>
        <p>
          Obtaining a <Link href="https://www.vjcoverseas.com/study-abroad/poland" className="text-orange-500">Poland Student Visa</Link> is essential to start your academic journey. 
          Key requirements include:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Valid passport</li>
          <li>Letter of acceptance from a recognized Polish university</li>
          <li>Proof of financial means</li>
          <li>Health insurance</li>
          <li>Completed visa application & biometric photo</li>
        </ul>
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2 text-black">
        Work Opportunities for Students
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          International students in Poland can work part-time for up to 20
          hours/week during the academic year and full-time during holidays.
        </li>
        <li>
          After graduation, you can apply for a temporary residence permit to
          pursue job opportunities or start a business in Poland.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Why Choose <span className="text-orange-500">VJC Overseas</span>?</h2>
      <p>
        At <strong>VJC Overseas</strong>, we are dedicated to helping students realize their dream of studying in Poland. 
        Our services include:
      </p>
      <ul className="list-disc ml-6 space-y-1">
        <li>University selection and application assistance</li>
        <li>Visa and immigration support</li>
        <li>Pre-departure and on-arrival guidance</li>
        <li>Accommodation assistance</li>
        <li>Scholarship consultation and financial guidance</li>
      </ul>
      <p className="mt-2">
        Studying in Poland is an investment in your future. With affordable tuition, world-class education, 
        and global opportunities, Poland provides an excellent platform for international students.
      </p>
     <p>
  Contact <Link href="https://www.vjcoverseas.com/" className="text-orange-500">VJC Overseas</Link> today to begin your journey toward 
  <span className="font-bold text-black"> Higher Education in Poland</span> and secure your <span className="font-bold text-black">Poland Student Visa</span>.
</p>


    </div>
  );
};

export default StudyInPoland;