import Head from "next/head";
import Image from 'next/image';
import Link from 'next/link';

export default function StudyInSpain() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10" style={{ fontFamily: 'Times New Roman, serif' }}>
    <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
      Study in Spain - <span className="text-orange-500">&nbsp;VJC Overseas</span>
    </h1>

      <p className="text-justify mb-4">
        Are you considering studying abroad? Spain is an incredible destination for international students seeking high-quality education in a culturally vibrant environment. At <strong>VJC Overseas</strong>, we guide you through every step of your academic journey. From understanding tuition fees to exploring universities and scholarship opportunities, our team ensures that your study abroad experience is smooth and rewarding. For students looking for professional advice, our experts provide reliable <Link href="https://www.vjcoverseas.com/" className="text-orange-500">Best Visa Immigration Consultants</Link> services to help you plan effectively.
      </p>

      <div className="ml-14">
        <Image
          src="/study-in-spain.png"
          alt="Study in Spain by VJC Overseas"
          width={500}
          height={50}
          className="object-cover"
          priority
          unoptimized
        />
      </div>

      <h2 className="text-xl font-bold mt-4 mb-2">Why Study in Spain? Top Benefits of Studying Abroad in Spain</h2>
      <ul className="list-disc ml-6 space-y-2 text-justify">
        <li><strong>Affordable Tuition Fees:</strong> Public universities cost €1,000 - €2,500/year, while private universities range from €5,000 - €12,000/year.</li>
        <li><strong>High-Quality Education:</strong> Spain has top-ranked universities like the University of Barcelona and Autonomous University of Madrid.</li>
        <li><strong>Cultural and Linguistic Enrichment:</strong> Experience Spain’s rich history, cuisine, and learn Spanish.</li>
        <li><strong>Opportunities for International Students:</strong> Spain has a welcoming environment, strong job prospects, and EU advantages. <Link href="https://www.vjcoverseas.com/study-abroad/spain" className="text-orange-500">Spain Student Visa Guidance</Link> can rely on our consultants for step-by-step assistance.</li>
        <li><strong>Beautiful Climate and Lifestyle:</strong> Enjoy a Mediterranean climate with a vibrant student life.</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">Understanding the Fees in Spanish Universities</h2>
      <ul className="list-disc ml-6 space-y-2 text-justify">
        <li><strong>Public Universities:</strong> Undergraduate programs range from €1,000 - €2,500/year, and postgraduates between €1,500 - €4,500/year.</li>
        <li><strong>Private Universities:</strong> Fees vary from €5,000 - €12,000/year.</li>
        <li><strong>Additional Costs:</strong> Living expenses range from €800 - €1,200/month, depending on the city.</li>
        <li><strong>Scholarships and Financial Aid:</strong> Many Spanish universities offer scholarships for international students.</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">Top Universities in Spain for International Students</h2>
      <ul className="list-disc ml-6 space-y-2 text-justify">
        <li>University of Barcelona (UB)</li>
        <li>Autonomous University of Madrid (UAM)</li>
        <li>Autonomous University of Barcelona (UAB)</li>
        <li>Pompeu Fabra University (UPF)</li>
        <li>University of Valencia (UV)</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">Study in Spain with <span className="text-orange-500">VJC Overseas</span></h2>
      <p className="text-justify mb-4">
        At <span className="text-orange-500"><Link href="https://www.vjcoverseas.com/">VJC Overseas</Link></span>, we provide personalized counseling and expert guidance to help you navigate your study abroad journey in Spain. Our team will assist in selecting the best university, applying for scholarships, and securing your student visa. Those interested in <Link href="https://www.vjcoverseas.com/study-abroad/spain" className="text-orange-500">Spanish Student Visa Process</Link> can benefit from our personalized support to ensure smooth processing and compliance with embassy requirements.
      </p>

      <h2 className="text-xl font-bold mb-2">
        How <span className="text-orange-600">VJC Overseas</span> Helps You
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          <strong>University Admission:</strong> Assistance in applying to top
          public and private universities in Spain.
        </li>
        <li>
          <strong>Visa Filing:</strong> Personalized help with documentation,
          interviews, and embassy requirements.
        </li>
        <li>
          <strong>Financial & Accommodation Guidance:</strong> Budget planning and
          support with finding accommodation.
        </li>
        <li>
          <strong>Post-Arrival Services:</strong> Orientation, part-time job support,
          and more.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">Why Choose <span className="text-orange-500">VJC Overseas</span>?</h2>
      <ul className="list-disc ml-6 space-y-2 text-justify">
        <li><strong>Expert Guidance:</strong> Our counselors provide tailored advice on scholarships, course selection, and the <strong>Spanish Student Visa Process</strong>.</li>
        <li><strong>University Selection Assistance:</strong> We help choose the right university and provide guidance for <strong>Study Visa Consultants</strong>.</li>
        <li><strong>Scholarship Assistance:</strong> Guidance in applying for scholarships.</li>
        <li><strong>Visa Support:</strong> Assistance with <strong>Spain Student Visa Guidance</strong> and student visa applications.</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">Start Your Journey Today!</h2>
      <p className="text-justify mb-4">
        Studying in Spain provides not only a world-class education but also a vibrant cultural experience and international career opportunities. If you’re ready to study in Spain, <span className="text-orange-500"><Link href="https://www.vjcoverseas.com/study-abroad/" className="text-orange-500">Study Visa Consultants</Link></span> at <strong>VJC Overseas</strong> are here to make your dream a reality. Contact us today to get started!
      </p>
    </div>
  );
}