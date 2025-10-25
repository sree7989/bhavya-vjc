import React from "react";
import Image from "next/image";
const StudyInDubai = () => {
  return (
    <div
      className="max-w-6xl mx-auto px-4 py-10 -mt-10"
      style={{ fontFamily: "Times New Roman, serif" }}
    >
      {/* Heading */}
      <h1 className="flex justify-center text-lg sm:text-2xl md:text-2xl font-bold mb-4 text-center whitespace-nowrap">
        Study in Dubai - <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      {/* Image and Intro Text Side by Side */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        {/* Image */}
        <div className="mt-8 md:w-1/2 w-full">
          <Image
            src="/study-in-dubai.webp"
            alt="Study in Dubai - Vjc Overseas"
            width={600}
            height={400}
            className=" w-full object-cover"
            priority
            unoptimized
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 mt-8 text-justify">
          <p className="mb-4">
            Are you considering studying abroad? Dubai, the hub of global
            education, is calling you! With world-class universities, a vibrant
            multicultural environment, and limitless opportunities,{" "}
            <a
              href="https://www.vjcoverseas.com/study-abroad/dubai"
              className="text-orange-500"
            >
              Study in Dubai
            </a>{" "}
            is one of the best decisions for international students.{" "}
            <b>VJC Overseas</b> is here to
            guide you through every step of your academic journey in this
            thriving city, making your overseas education pathway smooth and
            hassle-free.
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-2 mt-4">Why Study in Dubai?</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>
          <strong>World-Class Education:</strong> Dubai is home to prestigious
          institutions such as the University of Wollongong in Dubai, the
          American University in Dubai, and Dubai University of Science and
          Technology. These rank among the{" "}
          <a
            href="https://www.vjcoverseas.com/study-abroad/dubai"
            className="text-orange-500"
          >
            Top Universities in Dubai
          </a>
          , attracting students from all over the globe.
        </li>
        <li>
          <strong>International Recognition:</strong> Degrees awarded by Dubai’s
          universities are globally recognized, opening doors to worldwide
          career opportunities.
        </li>
        <li>
          <strong>Cultural Diversity:</strong> Experience both Eastern and
          Western cultures while studying with peers from more than 100
          nationalities.
        </li>
        <li>
          <strong>Thriving Job Market:</strong> Dubai’s booming economy offers
          abundant internships, part-time jobs, and post-study employment
          opportunities.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Universities and Colleges in Dubai
      </h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>
          <strong>University of Wollongong in Dubai (UOWD):</strong> Known for
          top programs in IT, business, and engineering.
        </li>
        <li>
          <strong>American University in Dubai (AUD):</strong> Offers a wide
          range of globally recognized American-style degrees.
        </li>
        <li>
          <strong>Hult International Business School Dubai:</strong> Leading
          business school with MBA and business management programs.
        </li>
        <li>
          <strong>University of Dubai:</strong> Popular for courses in business,
          IT, law, and engineering.
        </li>
        <li>
          <strong>Dubai Medical College:</strong> First private medical school
          in the UAE offering world-class medical education.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        College and University Fees in Dubai
      </h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>
          <strong>Undergraduate Programs:</strong> AED 30,000 – AED 80,000 per
          year.
        </li>
        <li>
          <strong>Postgraduate Programs:</strong> AED 40,000 – AED 100,000 per
          year.
        </li>
        <li>
          <strong>Doctoral Programs:</strong> AED 70,000 – AED 150,000 per year.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Living Costs in Dubai</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>
          <strong>Accommodation:</strong> AED 2,500 – AED 6,000 per month.
        </li>
        <li>
          <strong>Food:</strong> AED 1,000 – AED 1,500 monthly.
        </li>
        <li>
          <strong>Transportation:</strong> Affordable metro passes around AED
          300/month.
        </li>
        <li>
          <strong>Miscellaneous:</strong> AED 1,000 for leisure, entertainment,
          and other needs.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Work Opportunities for International Students in Dubai
      </h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>
          <strong>Part-Time Jobs:</strong> Students can work up to 20 hours
          weekly during semesters and full-time during breaks.
        </li>
        <li>
          <strong>Internships:</strong> Universities collaborate with leading
          companies, offering practical industry exposure.
        </li>
        <li>
          <strong>Post-Graduation Careers:</strong> Dubai’s expanding job market
          welcomes skilled graduates across sectors.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Visa Benefits</h2>
      <p className="text-justify mb-2">
        Getting a{" "}
        <a
          href="https://www.vjcoverseas.com/study-abroad/dubai"
          className="text-orange-500"
        >
          Dubai Student Visa
        </a>{" "}
        is straightforward, thanks to student-friendly policies. It allows
        international students to stay, study, and explore employment
        opportunities in the region. With proper guidance, the visa process
        becomes seamless and stress-free.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">
        Why Choose <b>VJC Overseas</b>?
      </h2>
      <p className="text-justify mb-2 mt-4">
        <b>VJC Overseas</b> stands among the{" "}
        <a
          href="https://www.vjcoverseas.com/"
          className="text-orange-500"
        >
          Best Visa Immigration Consultants
        </a>{" "}
        providing expert guidance for students aspiring to build their future
        abroad. Our team also specializes as trusted{" "}
        <a
          href="https://www.vjcoverseas.com/study-abroad/"
          className="text-orange-500"
        >
          Study Visa Consultants
        </a>
        , ensuring that you select the right program, university, and country
        for your academic growth.
      </p>

      <h2 className="text-xl font-semibold mt-4 mb-2">Services We Offer:</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>University & Program Selection</li>
        <li>Visa Guidance & Application Support</li>
        <li>Accommodation Assistance</li>
        <li>Career Counseling after Graduation</li>
        <li>Cultural Integration Guidance</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4 mb-2">Final Thoughts</h2>
      <p className="text-justify">
        Dubai is more than just a destination—it’s a gateway to world-class
        education, global networking, and exciting career prospects. With{" "}
        <a
          href="https://www.vjcoverseas.com/"
          className="text-orange-500"
        >
          VJC Overseas
        </a>{" "}
        by your side, your
        study abroad journey becomes simpler, clearer, and more rewarding. Start
        your application today and step into a brighter future in Dubai!
      </p>

      {/* Bold Keywords for Entire Page */}
      <div className="hidden">
        <b>Study in Dubai</b> <b>Top Universities in Dubai</b>{" "}
        <b>Dubai Student Visa</b> <b>Best Visa Immigration Consultants</b>{" "}
        <b>Study Visa Consultants</b> <b>VJC Overseas</b>
      </div>
    </div>
  );
};

export default StudyInDubai;