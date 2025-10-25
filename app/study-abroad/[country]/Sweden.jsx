import React from "react";
import Image from 'next/image';

const StudyInSweden = () => {
  return (

    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10" style={{ fontFamily: 'Times New Roman, serif' }}>
      <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
        Study in Sweden - <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>
      <div className="mt-3 ml-24 mb-4">
        <Image
          src="/study-in-sweden.png"
          alt="Study in Sweden - Vjc Overseas"
          width={500}
          height={400}
          priority
          unoptimized
        />
      </div>

      <p className="mb-6">
        Sweden is renowned for its high-quality education, innovative research, and diverse cultural experiences. 
        As one of the most desirable study destinations in Europe, <a href="https://www.vjcoverseas.com/study-abroad/sweden" className="text-orange-500 font-semibold">Study in Sweden</a> opens doors to globally recognized degrees and career-building opportunities. 
        At <span className="text-orange-500 font-semibold"><a href="https://www.vjcoverseas.com/">VJC Overseas</a></span>, we guide you through every step of the process—from understanding tuition fees to preparing for life in this Nordic hub.
      </p>

      <h2 className="text-xl font-semibold mb-2 mt-4">Why Study in Sweden?</h2>

      <div className="space-y-1">
        <div>
          <h3 className="text-xl font-semibold">1. World-Class Education</h3>
          <p>
            Home to top universities like Karolinska Institute, Uppsala University, and Lund University, 
            Sweden nurtures independent thinking and global competence.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">2. Innovative Research & Development</h3>
          <p>
            With a legacy of Nobel Prize-level innovation, Swedish institutions promote groundbreaking research 
            and industry collaboration across sectors.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">3. Multicultural & Inclusive Environment</h3>
          <p>
            Sweden celebrates diversity. Students from across the world contribute to a vibrant, welcoming academic culture.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">4. Sustainability & Quality of Life</h3>
          <p>
            Sustainability is central in Sweden—reflected in campus design, urban infrastructure, and everyday living.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">5. Post-Graduation Opportunities</h3>
          <p>
            Sweden’s robust job market in tech, healthcare, and business supports post-study work opportunities for international students.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-2 mt-4">Tuition Fees and Costs in Sweden</h2>

      <div className="space-y-1">
        <div>
          <h3 className="text-xl font-semibold">1. Tuition Fees</h3>
          <p>
            Non-EU/EEA students typically pay between SEK 80,000 and SEK 295,000 per year depending on the program.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">2. Living Costs</h3>
          <p>
            Estimated monthly expenses range from SEK 8,000 to SEK 12,000 based on location and lifestyle.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">3. Scholarships</h3>
          <p>
            Several scholarships are available, including Swedish Institute options and university-specific awards.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">4. Financial Aid</h3>
          <p>
            While student loans are limited for international students, many manage costs through scholarships, part-time jobs, and family support.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-4 mb-2">Benefits of Studying in Sweden</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Globally recognized education system</li>
        <li>Multilingual and multicultural environment</li>
        <li>Strong focus on innovation and sustainability</li>
        <li>Flexible work-study options</li>
        <li>Safe, inclusive, and student-friendly society</li>
      </ul>

      <h2 className="text-xl font-bold text-black mb-2 mt-4">How <span className="text-orange-500 font-semibold"><a href="https://www.vjcoverseas.com/">VJC Overseas</a></span> Can Help You</h2>
      <p className="mb-4">
        Choosing the right country, university, and course is not easy, but with the support of trusted <a href="https://www.vjcoverseas.com/study-abroad/" className="text-orange-500 font-semibold">Study Visa Consultants</a> like us, your path becomes clearer. 
        <span className="font-bold text-black"> VJC Overseas</span> provides expert guidance for every stage of your study abroad journey.
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>Personalized university and program selection based on your profile and career goals.</li>
        <li>Assistance with applications to top Swedish universities.</li>
        <li>Guidance on scholarships like the Swedish Institute Scholarships for Global Professionals.</li>
        <li>Step-by-step support with the <a href="https://www.vjcoverseas.com/study-abroad/sweden" className="text-orange-500 font-semibold">Sweden Student Visa</a> process, including residence permits and documentation.</li>
        <li>Help with accommodation, part-time work options, and pre-departure orientation tailored for Sweden.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-4 mb-2">Start Your Journey Today</h2>
      <p>
        Taking the first step toward an international education is easier when you have the support of the <a href="https://www.vjcoverseas.com/" className="text-orange-500 font-semibold">Best Visa Immigration Consultants</a> by your side. 
        Contact <span className="font-bold text-black">VJC Overseas</span> today and begin your academic journey in Sweden with confidence.
      </p>
    </div>
  );
};

export default StudyInSweden;