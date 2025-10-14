import React from "react";
import Image from 'next/image';
import Link from "next/link";

const StudyInMalaysia = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10" style={{ fontFamily: 'Times New Roman, serif' }}>
      
      <h1 className="flex justify-center text-lg sm:text-2xl md:text-2xl font-bold mb-8 text-center whitespace-nowrap">
        Study in the Malaysia - <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      <p>
        Are you looking for a destination that offers world-class education, vibrant culture, and affordability all in one?{" "}
        <strong>VJC Overseas</strong>{" "}
        is here to make that dream a reality. Recognized among the{" "}
        <span className="text-orange-500">
          <Link href="https://www.vjcoverseas.com/">Best Visa Immigration Consultants</Link>
        </span>
        , we specialize in helping students explore academic opportunities across the globe, and Malaysia stands out as one of the most promising options. With its growing reputation as a global education hub, Malaysia offers a unique blend of quality academics, cultural diversity, and career prospects. Many students who connect with our{" "}
        <span className="text-orange-500">
          <Link href="https://www.vjcoverseas.com/study-abroad/">Study Visa Consultants</Link>
        </span>{" "}
        find that Malaysia strikes the perfect balance between modern facilities and affordable living.
      </p>

      <h2 className="text-xl font-semibold mt-4">Why Choose to Study in Malaysia?</h2>

      <h3 className="text-xl mb-2 font-semibold mt-4">1. Top-Ranked Universities and Colleges</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>University of Malaya (UM)</strong> – Malaysia’s oldest and highest-ranking university.</li>
        <li><strong>Monash University Malaysia</strong> – A world-recognized institution offering top-tier programs.</li>
        <li><strong>Universiti Teknologi Malaysia (UTM)</strong> – Famous for engineering and technology excellence.</li>
        <li><strong>Taylor's University</strong> – Consistently ranked among Asia’s top universities.</li>
        <li><strong>Asia Pacific University (APU)</strong> – Renowned for IT, business, and design programs.</li>
      </ul>

      <h3 className="text-xl mb-2 font-semibold mt-4">2. Affordable Tuition Fees</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Undergraduate Programs:</strong> MYR 12,000 – MYR 40,000 per year</li>
        <li><strong>Postgraduate Programs:</strong> MYR 20,000 – MYR 45,000 per year</li>
        <li><strong>Diploma Programs:</strong> MYR 10,000 – MYR 15,000 per year</li>
      </ul>

      <h3 className="text-xl mb-2 font-semibold mt-4">3. Globally Recognized Degrees</h3>
      <p>
        Many institutions collaborate with universities from the UK, Australia, and the US, enabling students to earn internationally recognized qualifications without leaving Malaysia.
      </p>

      <h2 className="text-xl mb-2 font-semibold mt-4">Popular Study Programs</h2>
      <p>
        Malaysia offers a wide range of academic opportunities for international students. At{" "}
        <span className="text-orange-500">
          <Link href="https://www.vjcoverseas.com/study-abroad/malaysia">Study Programs in Malaysia</Link>
        </span>
        , we guide you in exploring the best study programs including:
      </p>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>Engineering & Technology:</strong> Civil, Computer Science, Artificial Intelligence, and Software Engineering</li>
        <li><strong>Business & Management:</strong> Marketing, International Business, and Finance</li>
        <li><strong>Medical & Health Sciences:</strong> Medicine, Pharmacy, Nursing</li>
        <li><strong>Law:</strong> Corporate Law, International Law, and LLB programs</li>
        <li><strong>Arts & Humanities:</strong> Psychology, History, and Social Sciences</li>
        <li><strong>Creative Fields:</strong> Graphic Design, Animation, and Film Production</li>
      </ul>

      <Image
        src="/study-in-malaysia.webp"
        alt="Study in Malaysia"
        width={500}
        height={600}
        priority
        unoptimized
      />

      <h2 className="text-xl mb-2 font-semibold mt-4">Cost of Living in Malaysia</h2>
      <p>
        One of the biggest attractions for international students in Malaysia is affordability. Monthly living expenses typically range between MYR 1,200 and MYR 2,500, covering accommodation, food, transportation, and leisure activities. This makes{" "}
        <span className="text-orange-500">
          <Link href="https://www.vjcoverseas.com/study-abroad/malaysia">Malaysia Student Visa</Link>
        </span>{" "}
        a cost-effective choice compared to many other destinations.
      </p>

      <h2 className="text-xl mb-2 font-semibold mt-4">How We Help You Secure a Student Visa</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li><strong>University Placement:</strong> Matching you with programs that suit your academic goals.</li>
        <li><strong>Visa Support:</strong> Expert help for smooth, hassle-free application processes.</li>
        <li><strong>Pre-Departure & Arrival Assistance:</strong> From booking flights to settling into your new city.</li>
        <li><strong>Scholarship Guidance:</strong> Helping eligible students reduce costs through financial aid.</li>
      </ul>

      <h2 className="text-xl mb-2 font-bold mt-4">Start Your Academic Journey with VJC Overseas</h2>
      <p>
        If you’re ready to take your education to the next level, Malaysia could be your ideal destination. With the guidance of{" "}
        <span className="text-orange-500">
          <Link href="https://www.vjcoverseas.com/">VJC Overseas</Link>
        </span>
        , your pathway to success becomes clearer and more achievable. Contact us today and take the first step toward a brighter future!
      </p>
    </div>
  );
};

export default StudyInMalaysia;