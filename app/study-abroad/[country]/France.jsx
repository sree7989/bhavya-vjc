import React from 'react';
import Image from 'next/image';

const StudyInFrance = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10" style={{ fontFamily: 'Times New Roman, serif' }}>
      <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
        Study in France - <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      {/* Image and Intro Text Side by Side */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <Image
            src="/study-in-france.png"
            alt="Study in France - Vjc Overseas"
            width={500}
            height={300}
            className=" w-full object-cover"
            priority
            unoptimized
          />
        </div>
        <div className="md:w-1/2 text-justify">
          <p className="mb-6">
            Welcome to <strong>VJC Overseas</strong>, one of the <a href="https://www.vjcoverseas.com/" className="text-orange-500 font-bold">Best Visa Immigration Consultants</a> helping students achieve their dream of studying abroad. 
            France, celebrated for its world-class education, art, and culture, offers a premium academic experience for international students. 
            As trusted <a href="https://www.vjcoverseas.com/study-abroad/" className="text-orange-500 font-bold">Study Visa Consultants</a>, we ensure you get expert guidance for every step of your journey.
          </p>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-4 mb-2">Why Study in France?</h2>
      <p className="mb-6 text-justify">
        France is not only famous for its heritage and lifestyle but also for being a global hub of higher education. Here’s why you should consider pursuing your education here:
      </p>
      <ul className="list-disc list-outside ml-6 space-y-2 mb-6 text-justify">
        <li><strong>World-Class Education:</strong> Home to globally renowned institutions and advanced research facilities.</li>
        <li><strong>Affordable Tuition Fees:</strong> Public universities offer subsidized tuition for international students, making quality education more accessible.</li>
        <li><strong>Cultural & Linguistic Experience:</strong> A chance to immerse yourself in French language, cuisine, and heritage while living in one of the most beautiful countries in the world.</li>
        <li><strong>Strong Industry Links:</strong> French universities maintain robust ties with global industries, offering excellent opportunities for internships and placements.</li>
        <li><strong>Post-Study Work Opportunities:</strong> With a <a href="https://www.vjcoverseas.com/study-abroad/france" className="text-orange-500 font-bold">France study visa</a>, international graduates can stay and work in France for up to two years post-graduation.</li>
        <li><strong>Quality of Life:</strong> A vibrant, safe, and scenic environment for both academic and personal growth.</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">Top French Universities & Grandes Écoles</h2>
      <p className="mb-6 text-justify">
        As <a href="https://www.vjcoverseas.com/study-abroad/france" className="text-orange-500 font-bold">France Student Visa Consultants</a>, we guide you in selecting the right institution that matches your academic goals. Some top choices include:
      </p>
      <ul className="list-disc list-outside ml-6 space-y-2 mb-6 text-justify">
        <li><strong>Sorbonne University:</strong> Historic and prestigious, located in Paris.</li>
        <li><strong>Université PSL (Paris Sciences et Lettres):</strong> Known for innovation and academic excellence.</li>
        <li><strong>University of Grenoble Alpes:</strong> Offers top programs in technology, business, and research.</li>
        <li><strong>HEC Paris:</strong> A leading business school in Europe.</li>
        <li><strong>École Normale Supérieure:</strong> Renowned for elite academic training in humanities and sciences.</li>
      </ul>

      <h2 className="text-xl font-bold  mt-4 mb-2">Tuition Fees</h2>
      <ul className="list-disc list-outside ml-6 space-y-2 mb-6 text-justify">
        <li>Public Universities (UG): €170 - €450 per year</li>
        <li>Grandes Écoles: €6,000 - €15,000 per year</li>
        <li>Private Institutions: €4,000 - €25,000 per year</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">Living Expenses</h2>
      <p className="mb-6 text-justify">
        The estimated monthly cost of living in France ranges from €800 to €1,200, including accommodation, food, transportation, and other essentials.
      </p>

      <h2 className="text-xl font-bold  mt-4 mb-2">Scholarships & Financial Aid</h2>
      <ul className="list-disc list-outside ml-6 space-y-2 mb-6 text-justify">
        <li>Eiffel Excellence Scholarship – covers tuition and living expenses</li>
        <li>Charpak Scholarship – specifically for Indian students</li>
        <li>Erasmus Mundus Scholarships – for joint master’s programs across Europe</li>
      </ul>

      <h2 className="text-xl font-bold  mt-4 mb-2">Why Choose <span className="text-orange-500">VJC Overseas</span>?</h2>
      <p className="mb-6 text-justify">
        As one of the <strong>Best Visa Immigration Consultants</strong>, we provide expert support at every stage of your journey:
      </p>
      <ul className="list-disc list-outside ml-6 space-y-2 mb-6 text-justify">
        <li>Personalized Counseling</li>
        <li>University Application Assistance</li>
        <li>Visa Process Support</li>
        <li>Pre-Departure Orientation</li>
        <li>Post-Arrival Assistance</li>
        <li>Career Counseling & Internship Guidance</li>
      </ul>

      <h2 className="text-xl font-bold mt-4 mb-2">Get Started Today!</h2>
      <p className="text-justify">
        Your dream to study in France is just a step away. With <a href="https://www.vjcoverseas.com/" className="text-orange-500 font-bold">VJC Overseas</a> by your side, you’ll receive expert guidance from the application stage to settling in your new academic life. Contact us today and take the first step towards a successful career in France.
      </p>
    </div>
  );
};

export default StudyInFrance;