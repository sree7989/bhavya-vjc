import React from "react";
import Image from 'next/image';
import Link from "next/link";

const StudyInPhilippines = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10" style={{ fontFamily: 'Times New Roman, serif' }}>
      <h1 className="flex justify-center text-lg sm:text-2xl md:text-2xl font-bold mb-8 text-center whitespace-nowrap">
        Study in the Philippines - <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      {/* Image and Intro Text Side by Side */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <Image
            src="/study-in-Philippines.webp"
            alt="Philippines Student Visa Guidance by VJC Overseas"
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
            Studying abroad opens the door to global education and cultural experiences, and the Philippines has become a popular destination for international students. Known for its high-quality education, affordability, and vibrant culture, the Philippines offers a unique opportunity to pursue your academic dreams. At <span className="font-bold text-black">VJC Overseas</span>, we guide students through the entire process, from choosing the right program to assisting with accommodation and visa applications. If you are looking for <Link href="https://www.vjcoverseas.com/" className="text-orange-500">Best Visa Immigration Consultants</Link> who understand the requirements for studying overseas, <span className="font-bold text-black">VJC Overseas</span> provides personalized guidance to ensure a smooth and successful journey.
          </p>
        </div>
      </div>

      <h2 className="font-semibold text-xl mt-4 mb-2">Why Choose the Philippines for Higher Education?</h2>
      <p>
        The Philippines is recognized for its strong educational system, particularly in fields such as Medicine, Nursing, Engineering, Business, and Hospitality. What makes it even more attractive to students worldwide is the combination of affordability, English-language instruction, and a welcoming environment for international learners.
      </p>

      <h3 className="font-semibold text-xl mt-4 mb-2">Affordable Tuition Fees</h3>
      <p>
        Tuition in the Philippines is significantly lower than in countries like the US, UK, or Australia.
      </p>
      <ul className="list-disc ml-6 space-y-1">
        <li>Undergraduate Programs: PHP 40,000 – PHP 120,000 per year</li>
        <li>Postgraduate Programs: PHP 50,000 – PHP 150,000 per year</li>
        <li>Medical Courses: PHP 200,000 – PHP 500,000 per year</li>
      </ul>

      <h3 className="font-semibold text-xl mt-4 mb-2">Low Living Costs</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Accommodation: PHP 5,000 – PHP 15,000 per month</li>
        <li>Food & Transportation: PHP 5,000 – PHP 10,000 per month</li>
      </ul>

      <h2 className="font-semibold text-xl mt-4 mb-2">Top Benefits of Studying in the Philippines</h2>

      <h3 className="font-semibold text-xl mt-4 mb-2">High-Quality Education</h3>
      <p>
        Universities such as the University of the Philippines, Ateneo de Manila University, and De La Salle University offer globally recognized degrees.
      </p>

      <h3 className="font-semibold text-xl mt-4 mb-2">English-Taught Programs</h3>
      <p>
        English is widely spoken and all academic courses are taught in English, simplifying the learning process for international students.
      </p>

      <h3 className="font-semibold text-xl mt-4 mb-2">World-Class Medical Education</h3>
      <p>
        The Philippines is famous for its MBBS and nursing programs, which are recognized internationally and provide pathways to careers abroad.
      </p>

      <h3 className="font-semibold text-xl mt-4 mb-2">Cultural Diversity</h3>
      <p>
        A multicultural society with friendly locals helps international students feel at home quickly.
      </p>

      <h3 className="font-semibold text-xl mt-4 mb-2">Vibrant Student Life</h3>
      <p>
        From cultural festivals to adventure sports and pristine beaches, student life in the Philippines is lively and enriching.
      </p>

      <h3 className="font-semibold text-xl mt-4 mb-2">Pathway to Global Careers</h3>
      <p>
        Studying in the Philippines connects students to a global alumni network and international career opportunities. Our <Link href="https://www.vjcoverseas.com/study-abroad/" className="text-orange-500">Study Visa Consultants</Link> can assist with understanding program requirements and securing the right visa to begin your academic journey.
      </p>

      <h2 className="font-semibold text-xl mt-4 mb-2">Key Factors to Consider When Choosing a University</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>Accreditation and Recognition</li>
        <li>Variety of Course Offerings</li>
        <li>Location and Campus Facilities</li>
        <li>Student Support Services</li>
      </ul>

      <h2 className="font-semibold text-xl mt-4 mb-2">Why Choose VJC Overseas?</h2>
      <p>
        At <Link href="https://www.vjcoverseas.com/" className="text-orange-500">VJC Overseas</Link>, we provide comprehensive support for your study abroad plans. From selecting the best universities and programs to assisting with a <Link href="https://www.vjcoverseas.com/study-abroad/philippines" className="text-orange-500">Philippines Study Visa</Link> and accommodation, we ensure that your journey is seamless. For students aiming to explore global education opportunities, our expertise also covers <Link href="https://www.vjcoverseas.com/study-abroad/philippines" className="text-orange-500">Study Abroad in Philippines</Link>, providing guidance on scholarships, living arrangements, and pre-departure preparation.
      </p>

      <p>
        Studying in the Philippines is an investment in your future—high-quality education, affordable costs, and an immersive cultural experience. Contact us today to begin your exciting academic journey!
      </p>
    </div>
  );
};

export default StudyInPhilippines;